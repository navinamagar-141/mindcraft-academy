"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight, LoaderCircle, MessageCircle, X } from "lucide-react";
import { programs } from "@/lib/programs";

type Tier = "Basic" | "Advanced";
type ConsultationOptions = { programSlug?: string; tier?: Tier };
type OpenConsultation = (options?: ConsultationOptions) => void;
type SubmissionStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

const whatsappUrl = "https://wa.me/9779802858781?text=Hi%20MindCraft%20Academy%2C%20I%27d%20like%20to%20book%20a%20consultation.";
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const allowedFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream",
]);
const ConsultationContext = createContext<OpenConsultation | null>(null);

export function useConsultationModal() {
  const openConsultation = useContext(ConsultationContext);
  if (!openConsultation) {
    throw new Error("useConsultationModal must be used within ConsultationProvider");
  }
  return openConsultation;
}

export default function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConsultationOptions>({});
  const openConsultation = useCallback((nextOptions?: ConsultationOptions) => {
    setOptions(nextOptions ?? {});
    setIsOpen(true);
  }, []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);

  return (
    <ConsultationContext.Provider value={openConsultation}>
      {children}
      {isOpen && <ConsultationModal onClose={closeConsultation} options={options} />}
    </ConsultationContext.Provider>
  );
}

function ConsultationModal({
  onClose,
  options,
}: {
  onClose: () => void;
  options: ConsultationOptions;
}) {
  const nameInput = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<SubmissionStatus>({ kind: "idle", message: "" });
  const statusRef = useRef(status.kind);
  useEffect(() => {
    statusRef.current = status.kind;
  }, [status.kind]);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameInput.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && statusRef.current !== "loading") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const activeIndex = activeElement ? Array.from(focusable).indexOf(activeElement) : -1;
      if (event.shiftKey && (activeIndex === 0 || activeIndex === -1)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (activeIndex === focusable.length - 1 || activeIndex === -1)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  function validateCv(file: File | undefined) {
    if (!file) return "";
    const extension = file.name.toLowerCase().split(".").pop();
    if (!extension || !["pdf", "doc", "docx"].includes(extension) || !allowedFileTypes.has(file.type || "application/octet-stream")) {
      return "Choose a PDF, DOC, or DOCX file.";
    }
    if (file.size === 0) return "The selected CV file is empty.";
    if (file.size > MAX_FILE_BYTES) return "Your CV must be 4 MB or smaller.";
    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("cv");
    const file = fileInput instanceof HTMLInputElement ? fileInput.files?.[0] : undefined;
    const cvError = validateCv(file);
    if (cvError) {
      setStatus({ kind: "error", message: cvError });
      return;
    }

    setStatus({ kind: "loading", message: "Sending your consultation request…" });
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;
      if (!response.ok) {
        setStatus({
          kind: "error",
          message: result?.message ?? "We couldn’t send your request. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        kind: "success",
        message: result?.message ?? "Your consultation request has been sent.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn’t reach the server. Check your connection and try again.",
      });
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && statusRef.current !== "loading") onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative my-auto w-full max-w-2xl rounded-2xl border border-white/15 bg-[#121212] p-6 text-white shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation dialog"
          disabled={status.kind === "loading"}
          className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
        >
          <X size={19} aria-hidden="true" />
        </button>
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/55">Start a conversation</p>
        <h2 id="consultation-title" className="mt-2 pr-10 font-display text-2xl font-bold text-white sm:text-3xl">Book a consultation</h2>
        <p className="mt-2 text-sm leading-6 text-white/60">Choose WhatsApp or send your details and optional CV to the MindCraft Academy team.</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Message on WhatsApp
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
          <span className="h-px flex-1 bg-white/10" />
          Or apply with a form and CV
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <fieldset disabled={status.kind === "loading"} className="contents">
            <div>
              <label htmlFor="consultation-name" className="mb-1.5 block text-xs font-semibold text-white/80">Full name *</label>
              <input ref={nameInput} id="consultation-name" name="name" type="text" autoComplete="name" required maxLength={100} className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white placeholder:text-white/35" placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="consultation-email" className="mb-1.5 block text-xs font-semibold text-white/80">Email *</label>
              <input id="consultation-email" name="email" type="email" autoComplete="email" required maxLength={254} className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white placeholder:text-white/35" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="consultation-phone" className="mb-1.5 block text-xs font-semibold text-white/80">Phone or WhatsApp *</label>
              <input id="consultation-phone" name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={24} pattern={"(?:[0-9]|\\+|\\(|\\)|\\.| |-){7,24}"} title="Enter a phone number using digits, spaces, +, parentheses, periods, or hyphens." className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white placeholder:text-white/35" placeholder="+977 9800000000" />
            </div>
            <div>
              <label htmlFor="consultation-program" className="mb-1.5 block text-xs font-semibold text-white/80">Interested program *</label>
              <select id="consultation-program" name="program" required defaultValue={options.programSlug ?? ""} className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white">
                <option value="" disabled>Select a program</option>
                {programs.map((program) => <option key={program.slug} value={program.slug}>{program.title}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="consultation-tier" className="mb-1.5 block text-xs font-semibold text-white/80">Preferred tier *</label>
              <select id="consultation-tier" name="tier" required defaultValue={options.tier ?? ""} className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white">
                <option value="" disabled>Select a tier</option>
                <option value="Basic">Basic · 6 weeks</option>
                <option value="Advanced">Advanced · 10 weeks</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="consultation-cv" className="mb-1.5 block text-xs font-semibold text-white/80">CV upload <span className="font-normal text-white/45">(optional)</span></label>
              <input id="consultation-cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="focus-ring w-full rounded-lg border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-2 file:text-xs file:font-bold file:text-black" />
              <p className="mt-2 text-xs leading-5 text-white/45">PDF, DOC, or DOCX. Maximum 4 MB per file.</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="consultation-goal" className="mb-1.5 block text-xs font-semibold text-white/80">What would you like to achieve? *</label>
              <textarea id="consultation-goal" name="goal" required maxLength={500} rows={3} className="focus-ring w-full resize-y rounded-lg border border-white/15 bg-black px-3.5 py-3 text-sm text-white placeholder:text-white/35" placeholder="Briefly share your goals for the mentorship program." />
            </div>
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="consultation-website">Leave this field empty</label>
              <input id="consultation-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={status.kind === "loading"} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200 disabled:cursor-wait disabled:opacity-60 sm:col-span-2">
              {status.kind === "loading" ? <LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> : <ArrowUpRight size={16} aria-hidden="true" />}
              {status.kind === "loading" ? "Sending request…" : "Submit consultation request"}
            </button>
          </fieldset>
        </form>
        {status.message && (
          <p
            role={status.kind === "error" ? "alert" : "status"}
            className={`mt-4 rounded-lg border p-3 text-sm leading-6 ${
              status.kind === "error" ? "border-white/30 bg-white/10 text-white" : "border-white/15 bg-white/5 text-white/75"
            }`}
          >
            {status.message}
          </p>
        )}
      </section>
    </div>
  );
}
