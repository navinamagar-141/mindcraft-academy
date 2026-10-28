import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const academyMapsUrl =
  "https://www.google.com/maps/place/MindCraft+Academy/@28.2226026,83.9859877,17z/data=!3m1!4b1!4m6!3m5!1s0x39959544dd859ae9:0xc5715121aad893a!8m2!3d28.2225979!4d83.9885626!16s%2Fg%2F11w_f0s845";

export default function SiteFooter() {
  return (
    <footer className="border-t border-frame-line bg-canvas text-white">
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-12 lg:px-8">
        <div className="grid gap-10 border-b border-frame-line pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-secondary">Discover. Develop. Deploy.<br />Practical tech education for people ready to make things real.</p>
            <figure className="mt-4">
              <blockquote className="font-display text-xs font-bold italic text-white">“Talk is cheap. Show me the code.”</blockquote>
              <figcaption className="mt-1 text-xs text-secondary">Linus Torvalds</figcaption>
            </figure>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold">Explore</h2>
            <div className="mt-4 grid gap-3 text-sm text-secondary">
              <Link href="/programs" className="transition hover:text-white">Mentorship Intern Programs</Link>
              <Link href="/projects" className="transition hover:text-white">Student projects</Link>
              <Link href="/culture" className="transition hover:text-white">Campus culture</Link>
              <Link href="/about" className="transition hover:text-white">About MindCraft</Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-sm font-extrabold">Come say hello</h2>
            <address className="mt-4 not-italic text-sm leading-6 text-secondary">Nivagalli, Pokhara<br />Nepal</address>
            <a
              href={academyMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center gap-1.5 text-xs text-secondary transition hover:text-white hover:underline"
            >
              View on Google Maps <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <div className="mt-3 grid gap-2 text-sm">
              <a href="tel:+9779802858781" className="text-secondary transition hover:text-white">+977 9802858781</a>
              <a href="mailto:atmindcraft@gmail.com" className="text-secondary transition hover:text-white">atmindcraft@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-frame-line pt-5 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MindCraft Academy</p>
          <nav aria-label="Social media and partners" className="flex items-center gap-1 sm:gap-2">
            <a
              href="https://www.facebook.com/MINDCRAFT.NP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindCraft Academy on Facebook"
              title="MindCraft Academy on Facebook"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-secondary transition hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_mindcraftacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindCraft Academy on Instagram"
              title="MindCraft Academy on Instagram"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-secondary transition hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/mind-craft-academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MindCraft Academy on LinkedIn"
              title="MindCraft Academy on LinkedIn"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-secondary transition hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M5.2 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10.5H3.5V10Zm5.5 0h3.3v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2v5.7h-3.4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1H9V10Z" />
              </svg>
            </a>
            <a
              href="https://brandbuilder.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Brandbuilder, our parent company"
              title="Visit Brandbuilder, our parent company"
              className="focus-ring ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-base font-bold text-black transition hover:bg-neutral-200"
            >
              B
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
