import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, Compass, Rocket } from "lucide-react";
import AIWorkflow from "@/components/AIWorkflow";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Explore what’s possible, find the problems you care about, and choose your direction.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Develop",
    description: "Build practical skills through focused practice, feedback, and projects with purpose.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Deploy",
    description: "Share your work with the world—and take your next step with confidence.",
    icon: Rocket,
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 -z-10" />
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-5 py-14 sm:py-16 md:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.23em] text-white/75">{""} FOCUSED TRAINING. REAL-WORLD SKILLS.</p>
            <h1 className="mt-7 max-w-xl font-display text-3xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
              <span className="mr-3 text-white/60">{""}</span>Talk is cheap,<br />
              <span className="text-[#f0f0f0]">show me the code.</span><br />
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Practical software engineering, product design, and AI training in Pokhara. Learn by making things that work.
            </p>
            <div className="mt-9 flex flex-col gap-3 lg:flex-row">
              <Link href="/programs" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-neutral-200">
                Explore programs <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a href="tel:+9779802858781" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/5">
                Book consultation <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/55">
              {["Hands-on learning", "Portfolio-ready projects", "Local, human support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><Check size={15} className="text-white" aria-hidden="true" /> {item}</span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="hero-photo relative min-h-[390px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[500px]">
              <Image
                src="/images/culture/team-meeting.jpg"
                alt="MindCraft Academy Team Meeting in Pokhara"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/15 via-transparent to-[#121212]/95" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#121212]/80 px-4 py-2.5 text-xs font-bold text-white backdrop-blur sm:left-7 sm:top-7">
                <span className="mr-2 text-white/60">{""}</span> DISCOVER. DEVELOP. DEPLOY.
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-[#121212]/85 p-5 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/70">Build your next move</p>
                <p className="mt-2 font-display text-xl font-extrabold sm:text-2xl">Your ideas belong in the world.</p>
                <p className="mt-2 text-sm text-white/60">Real skills. Real projects. Right here in Pokhara.</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-surface px-5 py-4 shadow-card sm:block lg:-left-8">
              <p className="font-display text-sm font-extrabold text-white"><span className="text-white/65">{"</>"}</span> Learn it. Ship it.</p>
              <p className="mt-1 text-xs text-white/50">Code · Design · AI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{""} THE 3 D’S FRAMEWORK</p>
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">A clear path from curiosity to capability.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">Not another lecture hall. A place to turn curiosity into practical skills and practical skills into shipped work.</p>
          </div>
          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="group rounded-2xl border border-white/10 bg-surface p-7 transition hover:-translate-y-1 hover:border-white/40 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/10 text-white/80"><Icon size={22} aria-hidden="true" /></span>
                    <span className="font-display text-xs font-extrabold tracking-[0.16em] text-white/30">{step.number}</span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-extrabold uppercase text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                  <div className="mt-7 h-0.5 w-12 rounded-full bg-white/25 transition-all group-hover:w-20 group-hover:bg-white" />
                </article>
              );
            })}
          </div>
          <Link href="/programs" className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-white">
            Find your path <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface/50 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">{""} BUILT IN POKHARA</p>
            <p className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl">Discover. Develop. Deploy.</p>
          </div>
          <Link href="/culture" className="focus-ring inline-flex w-fit items-center gap-2 text-sm font-bold text-white/75 transition hover:text-white">Meet the community <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
      <AIWorkflow />
    </main>
  );
}
