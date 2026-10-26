import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About | MindCraft Academy",
  description: "MindCraft Academy offers practical software engineering, product design, and AI education in Pokhara, Nepal.",
};

const faqs = [
  ["Do I need experience before I start?", "No professional experience is needed for beginner-friendly tracks. Curiosity, consistency, and a willingness to practice matter more. We’ll help you find the right starting point in a consultation."],
  ["Where does mentoring take place?", "MindCraft Academy is based in Nivagalli, Pokhara, Nepal. Get in touch to discuss the current mentorship schedule, learning format, and how to visit."],
  ["Will I build real projects?", "Every track is centered on hands-on practice and a substantial portfolio project. You’ll work through decisions, feedback, and iteration—not just watch lessons."],
  ["How do I choose a mentorship program?", "Book a conversation and tell us what you want to make. We’ll walk through the internship programs, your goals, and the time commitment before you decide what fits."],
];

const framework: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Compass, title: "Discover", description: "Explore what interests you and find problems worth solving." },
  { icon: Code2, title: "Develop", description: "Grow your skills through practice, guidance, and feedback." },
  { icon: Rocket, title: "Deploy", description: "Share your work and move toward your next opportunity." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{"//"} ABOUT MINDCRAFT</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">The future isn’t<br /><span className="text-white">somewhere else.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">MindCraft Academy is a place for people in Pokhara to build practical skills in technology, design, and AI—and put their ideas to work.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 sm:py-20">
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{"//"} OUR APPROACH</p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">Learn by making something real.</h2>
          <p className="mt-5 text-sm leading-7 text-white/60">We believe the best way to learn is to make something real, share it with others, and keep getting better. Discover what interests you. Develop the skills to make it. Deploy your ideas into the world.</p>
          <Link href="/programs" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white">Explore the programs <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {framework.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-surface p-5"><Icon size={22} className="text-white" aria-hidden="true" /><h3 className="mt-5 font-display text-lg font-extrabold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{description}</p></article>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10 bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 sm:py-20">
          <div><p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{"//"} FAQ</p><h2 className="mt-4 font-display text-3xl font-black uppercase text-white sm:text-4xl">Before you get started.</h2><p className="mt-4 text-sm leading-6 text-white/55">Have another question? We’re happy to talk it through.</p><a href="mailto:atmindcraft@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white">Email the team <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none font-display text-base font-bold text-white marker:hidden sm:text-lg">{question}<span className="float-right text-white transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-3 pr-8 text-sm leading-7 text-white/60">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </main>
  );
}
