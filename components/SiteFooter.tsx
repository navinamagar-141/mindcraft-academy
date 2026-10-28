import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-12 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">Discover. Develop. Deploy.<br />Practical tech education for people ready to make things real.</p>
            <figure className="mt-4">
              <blockquote className="font-display text-xs font-bold italic text-white">“Talk is cheap. Show me the code.”</blockquote>
              <figcaption className="mt-1 text-xs text-white/55">Linus Torvalds</figcaption>
            </figure>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold">Explore</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/55">
              <Link href="/programs" className="transition hover:text-white">Mentorship Intern Programs</Link>
              <Link href="/projects" className="transition hover:text-white">Student projects</Link>
              <Link href="/culture" className="transition hover:text-white">Campus culture</Link>
              <Link href="/about" className="transition hover:text-white">About MindCraft</Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold">Come say hello</h2>
            <address className="mt-4 not-italic text-sm leading-6 text-white/55">Nivagalli, Pokhara<br />Nepal</address>
            <div className="mt-3 grid gap-2 text-sm">
              <a href="tel:+9779802858781" className="text-white/80 transition hover:text-white">+977 9802858781</a>
              <a href="mailto:atmindcraft@gmail.com" className="text-white/80 transition hover:text-white">atmindcraft@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MindCraft Academy. Built for what’s next.</p>
          <a href="tel:+9779802858781" className="inline-flex items-center gap-1.5 transition hover:text-white">Talk to a real person <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
