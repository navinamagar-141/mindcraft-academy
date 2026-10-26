import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, Palette, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | MindCraft Academy",
  description: "Explore project concepts that demonstrate the kind of software, design, and AI work MindCraft Academy learners build.",
};

const projects = [
  {
    category: "FULL-STACK · COMMUNITY",
    name: "Local Loop",
    description: "A neighborhood directory that brings Pokhara’s makers, shops, and services into one searchable place.",
    stack: "Next.js · PostgreSQL · Mapbox",
    icon: Code2,
    visual: "from-[#222226] to-[#1a1a1e]",
    mark: "loop",
  },
  {
    category: "PRODUCT DESIGN · HEALTH",
    name: "Sajilo Care",
    description: "A calmer way to find nearby care, understand options, and book a first appointment with confidence.",
    stack: "Figma · UX research · Design system",
    icon: Palette,
    visual: "from-[#222226] to-[#1a1a1e]",
    mark: "sajilo",
  },
  {
    category: "AI WORKFLOW · SAAS",
    name: "Briefly",
    description: "A focused research assistant that turns long reading lists into cited, easy-to-review project briefs.",
    stack: "AI APIs · React · Automation",
    icon: Sparkles,
    visual: "from-[#222226] to-[#1a1a1e]",
    mark: "briefly",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{"//"} PROJECTS OVER PAPERS</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Make something<br /><span className="text-white">worth showing.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">A portfolio should show how you think, what you made, and why it matters. Explore example project concepts built around real-world skills.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article key={project.name} className="overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:-translate-y-1 hover:border-white/40">
                <div className={`relative m-3 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br ${project.visual}`}>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">CONCEPT {String(index + 1).padStart(2, "0")}</span>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-black"><Icon size={20} aria-hidden="true" /></span>
                    <span className="font-display text-xl font-extrabold tracking-tight text-white">{project.mark}</span>
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-bold text-white">PROJECT CONCEPT</span>
                </div>
                <div className="px-6 pb-6 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">{project.category}</p>
                  <h2 className="mt-2 font-display text-xl font-extrabold text-white">{project.name}</h2>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-white/60">{project.description}</p>
                  <p className="mt-5 border-t border-white/10 pt-4 text-xs font-semibold text-white/45">{project.stack}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-center text-xs text-white/40">These are illustrative project concepts, not claims of completed student work or live deployments.</p>
        <div className="mt-14 flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-surface p-7 sm:flex-row sm:items-center sm:p-9">
          <div><p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-white">{"//"} YOUR TURN</p><h2 className="mt-2 font-display text-2xl font-extrabold text-white">Start with an idea. Leave with a project.</h2></div>
          <Link href="/programs" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">Explore programs <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
