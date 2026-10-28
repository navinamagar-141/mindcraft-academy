import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import ProgramInquiry from "@/components/ProgramInquiry";
import ConsultationButton from "@/components/ConsultationButton";
import { getProgram, programKeywords, programs } from "@/lib/programs";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: `${program.title} | MindCraft Academy`,
    description: `${program.overview} Available in Pokhara, Nepal with Basic 6-week and Advanced 10-week mentorship internship tiers.`,
    keywords: [...programKeywords, program.title, `${program.title} Pokhara`, `${program.title} Nepal`],
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  return (
    <main className="bg-ink">
      <section className="relative isolate overflow-hidden border-b border-line bg-ink">
        <div className="hero-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-14 lg:px-8">
          <Link href="/programs" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-white"><ArrowLeft size={15} aria-hidden="true" /> All mentorship programs</Link>
          <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.18em] text-secondary">MINDCRAFT ACADEMY · POKHARA, NEPAL</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{program.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-secondary">{program.overview}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {program.focus.map((skill) => <span key={skill} className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-medium text-secondary">{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 sm:py-16">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-secondary">CHOOSE YOUR TIER</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">A practical path with mentor guidance.</h2>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-line bg-panel p-6 sm:p-7">
            <p className="font-mono text-xs font-semibold text-secondary">TIER 01 · BASIC</p>
            <h3 className="mt-3 font-display text-xl font-bold text-white">Basic (6 Weeks)</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">Practical internship and training: build a strong foundation, practice the core tools, and complete a guided project with regular feedback.</p>
            <ul className="mt-5 space-y-2.5">
              {["Practical foundations and guided exercises", "Mentor feedback on progress", "A completed project to demonstrate your skills"].map((item) => <li key={item} className="flex gap-2.5 text-sm text-secondary"><Check size={16} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-xl border border-line bg-panel p-6 sm:p-7">
            <p className="font-mono text-xs font-semibold text-secondary">TIER 02 · ADVANCED</p>
            <h3 className="mt-3 font-display text-xl font-bold text-white">Advanced (10 Weeks)</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">Deep dive mentorship and production deployment: strengthen implementation quality and deliver a production focused capstone.</p>
            <ul className="mt-5 space-y-2.5">
              {["Advanced implementation and code or design reviews", "Testing, quality, and production workflows", "A deployed capstone and final presentation"].map((item) => <li key={item} className="flex gap-2.5 text-sm text-secondary"><Check size={16} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />{item}</li>)}
            </ul>
          </article>
        </div>

        <div className="mt-7 flex flex-col gap-3 rounded-xl border border-line bg-panel p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="font-display text-lg font-bold text-white">Want to discuss this program?</h2>
            <p className="mt-1 text-sm leading-6 text-secondary">Share your goals and preferred tier with the MindCraft Academy team.</p>
          </div>
          <ConsultationButton
            programSlug={program.slug}
            className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-offwhite"
          >
            Book consultation <ArrowUpRight size={16} aria-hidden="true" />
          </ConsultationButton>
        </div>

        <div className="mt-12 border-t border-line pt-10">
          <ProgramInquiry program={program} />
        </div>
      </section>
    </main>
  );
}
