import type { Metadata } from "next";
import { ArrowUpRight, Code2, Users, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture | MindCraft Academy",
  description: "Learn about the welcoming, collaborative learning culture at MindCraft Academy in Pokhara.",
};

const cultureValues: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Users, title: "Learn with people", description: "Ask, share ideas, and learn from different perspectives." },
  { icon: Code2, title: "Practice by doing", description: "Make things, break things, and build confidence through repetition." },
  { icon: ArrowUpRight, title: "Put work out there", description: "Get feedback and take your next step from a place of progress." },
];

export default function CulturePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white">{"//"} CAMPUS CULTURE</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Good work happens<br /><span className="text-white">together.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">Ask questions out loud. Pair on a stubborn bug. Celebrate the small wins. Learning gets better when you don’t have to do it alone.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="culture-photo-one relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 p-6 sm:col-span-2 lg:min-h-[400px]">
            <div className="absolute bottom-6 left-6 right-6"><p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Make room for ideas</p><h2 className="mt-2 font-display text-2xl font-extrabold text-white">Learn by making, together.</h2></div>
          </article>
          <article className="culture-photo-two relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 p-6 lg:min-h-[400px]">
            <div className="absolute bottom-6 left-6 right-6"><p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Share the wins</p><h2 className="mt-2 font-display text-2xl font-extrabold text-white">Progress is a team sport.</h2></div>
          </article>
          <article className="culture-photo-three relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 p-6 sm:col-span-2">
            <div className="absolute bottom-6 left-6 right-6"><p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">Curiosity lives here</p><h2 className="mt-2 max-w-lg font-display text-2xl font-extrabold text-white">Try, ask, rethink, and try again.</h2></div>
          </article>
          <div className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-white/10 bg-surface p-7 sm:col-span-2 lg:col-span-1">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/10 text-white/80"><Workflow size={23} aria-hidden="true" /></span>
            <div><p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">Discover. Develop. Deploy.</p><h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white">A community for curious builders.</h2></div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cultureValues.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-surface p-6"><Icon size={21} className="text-white" aria-hidden="true" /><h2 className="mt-5 font-display text-lg font-extrabold text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-white/55">{description}</p></article>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl bg-white p-7 text-black sm:flex-row sm:items-center sm:p-9">
          <div><p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#707070]">{"//"} GET TO KNOW US</p><h2 className="mt-2 font-display text-2xl font-extrabold text-black">Come see what you can make.</h2></div>
          <a href="tel:+9779802858781" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-[#121212] px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-200 hover:text-black">Book consultation <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
