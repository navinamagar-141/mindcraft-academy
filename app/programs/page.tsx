import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { programKeywords, programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Mentorship Intern Programs | MindCraft Academy",
  description: "Explore nine practical IT mentorship internship programs in Pokhara, Nepal, with six-week and ten-week training tiers.",
  keywords: programKeywords,
};

const icons: LucideIcon[] = [Code2, Code2, Code2, Code2, Code2, Palette, ShieldCheck, Code2, Megaphone];

export default function ProgramsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-line bg-ink">
        <div className="hero-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-secondary">MENTORSHIP INTERN PROGRAMS</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">Build practical skills with a mentor.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">Choose an area to explore. Each Mentor Internship Program offers a practical six-week tier or a ten-week advanced mentorship with production deployment.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = icons[index];
            return (
              <Link key={program.slug} href={`/programs/${program.slug}`} className="focus-ring group rounded-xl border border-line bg-surface p-6 transition hover:border-white/40">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/5 text-secondary"><Icon size={19} aria-hidden="true" /></span>
                <p className="mt-5 font-mono text-[11px] text-secondary">PROGRAM {String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-white">{program.title}</h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-secondary">{program.overview}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-white">View internship tiers <ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
