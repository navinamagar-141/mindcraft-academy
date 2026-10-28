"use client";

import { useState, type FormEvent } from "react";
import { Download, LockKeyhole, Printer, Unlock } from "lucide-react";
import type { Program } from "@/lib/programs";

type Tier = "Basic" | "Advanced";

export default function ProgramInquiry({ program }: { program: Program }) {
  const [unlockedTier, setUnlockedTier] = useState<Tier | null>(null);
  const [selectedTier, setSelectedTier] = useState<Tier>("Basic");

  const syllabusTier = unlockedTier ?? selectedTier;
  const syllabus = syllabusTier === "Basic" ? program.basicWeeks : program.advancedWeeks;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUnlockedTier(selectedTier);
  }

  function downloadSyllabus() {
    const text = [
      "MIND{CRAFT} ACADEMY",
      program.title,
      `${unlockedTier} Tier: ${unlockedTier === "Basic" ? "6 Weeks Practical Internship & Training" : "10 Weeks Deep Dive Mentorship & Production Deployment"}`,
      "",
      ...syllabus.map((week) => `${week.period}: ${week.title}\n${week.detail}\n`),
    ].join("\n");
    const file = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${program.slug}-${unlockedTier?.toLowerCase()}-syllabus.txt`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <section className="rounded-2xl border border-line bg-panel p-6 sm:p-8" aria-labelledby="inquiry-heading">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-secondary"><LockKeyhole size={19} aria-hidden="true" /></span>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-secondary">LOCKED SYLLABUS</p>
            <h2 id="inquiry-heading" className="mt-2 font-display text-xl font-bold text-white">Request the detailed outline</h2>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-secondary">Complete the required details to reveal the selected internship tier’s weekly plan.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="inquiry-name" className="mb-1.5 block text-xs font-semibold text-secondary">Name <span aria-hidden="true">*</span></label>
            <input id="inquiry-name" name="name" type="text" autoComplete="name" required maxLength={100} className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-3 text-sm text-white placeholder:text-secondary" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="inquiry-email" className="mb-1.5 block text-xs font-semibold text-secondary">Email <span aria-hidden="true">*</span></label>
            <input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-3 text-sm text-white placeholder:text-secondary" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="inquiry-phone" className="mb-1.5 block text-xs font-semibold text-secondary">Phone <span aria-hidden="true">*</span></label>
            <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={20} pattern={"(?:[0-9]|\\+|\\(|\\)|\\.| |-){7,20}"} title="Enter a phone number using digits, spaces, +, parentheses, periods, or hyphens." className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-3 text-sm text-white placeholder:text-secondary" placeholder="+977 9800000000" />
          </div>
          <div>
            <label htmlFor="inquiry-tier" className="mb-1.5 block text-xs font-semibold text-secondary">Preferred tier <span aria-hidden="true">*</span></label>
            <select id="inquiry-tier" name="tier" required value={selectedTier} onChange={(event) => {
              const tier = event.target.value;
              if (tier === "Basic" || tier === "Advanced") {
                setSelectedTier(tier);
                setUnlockedTier(null);
              }
            }} className="focus-ring w-full rounded-lg border border-line bg-panel px-3.5 py-3 text-sm text-white">
              <option value="Basic">Basic, 6 weeks</option>
              <option value="Advanced">Advanced, 10 weeks</option>
            </select>
          </div>
          <button type="submit" className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-offwhite">
            <Unlock size={16} aria-hidden="true" /> Unlock {selectedTier} syllabus
          </button>
        </form>
        <p className="mt-4 text-xs leading-5 text-secondary">
          This preview unlocks the syllabus in your browser. Details are not sent or stored. To send an inquiry, contact the academy at{" "}
          <a href="tel:+9779802858781" className="text-white underline underline-offset-2">+977 9802858781</a>.
        </p>
      </section>

      {unlockedTier ? (
        <section id="syllabus-print" className="rounded-2xl border border-line bg-panel p-6 sm:p-8" aria-live="polite" aria-labelledby="syllabus-heading">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-secondary">SYLLABUS UNLOCKED · {syllabusTier.toUpperCase()}</p>
              <h2 id="syllabus-heading" className="mt-2 font-display text-xl font-bold text-white">{program.title}</h2>
              <p className="mt-1 text-sm text-secondary">{syllabusTier === "Basic" ? "Basic (6 Weeks) · Practical Internship & Training" : "Advanced (10 Weeks) · Deep Dive Mentorship & Production Deployment"}</p>
            </div>
            <div className="flex shrink-0 gap-2 print:hidden">
              <button type="button" onClick={downloadSyllabus} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs font-semibold text-white hover:bg-offwhite hover:text-black"><Download size={14} aria-hidden="true" /> Download TXT</button>
              <button type="button" onClick={() => window.print()} className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-offwhite"><Printer size={14} aria-hidden="true" /> Save as PDF</button>
            </div>
          </div>
          <ol className="mt-6 space-y-3">
            {syllabus.map((week) => (
              <li key={week.period} className="grid gap-2 rounded-xl border border-line bg-panel p-4 sm:grid-cols-[92px_1fr]">
                <span className="font-mono text-xs font-semibold text-secondary">{week.period}</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">{week.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-secondary">{week.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <section className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-panel p-8 text-center">
          <LockKeyhole size={23} className="text-secondary" aria-hidden="true" />
          <h2 className="mt-4 font-display text-lg font-bold text-white">Detailed syllabus locked</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-secondary">Submit the required inquiry fields to view the program outline and prepare a printable PDF.</p>
        </section>
      )}
    </div>
  );
}
