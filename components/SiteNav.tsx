"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { useConsultationModal } from "@/components/ConsultationProvider";

const studyAreas = [
  ["MERN Stack Mentorship Intern Program", "/programs/mern-stack"],
  ["Full Stack Development Mentor Internship Program", "/programs/full-stack-development"],
  ["Python Mentorship Intern Program", "/programs/python"],
  ["Frontend Development Mentor Internship Program", "/programs/frontend-development"],
  ["Backend Development Mentorship Intern Program", "/programs/backend-development"],
  ["UI/UX Design Mentor Internship Program", "/programs/ui-ux-design"],
  ["Cybersecurity Mentorship Intern Program", "/programs/cybersecurity"],
  ["Java Mentorship Intern Program", "/programs/java"],
  ["Digital Marketing Mentor Internship Program", "/programs/digital-marketing"],
];

const links = [
  ["Student Projects", "/projects"],
  ["Culture", "/culture"],
  ["About", "/about"],
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const openConsultation = useConsultationModal();

  return (
    <header className="sticky top-0 z-50 border-b border-frame-line bg-canvas/95 backdrop-blur-lg">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandLogo />
        <div className="hidden h-full items-center gap-8 lg:flex">
          <div className="group relative flex h-full items-center">
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-white">
              Mentorship Programs <ArrowDown size={14} className="transition group-hover:rotate-180" aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-0 top-[calc(100%-8px)] max-h-[70vh] w-[min(28rem,calc(100vw-2rem))] translate-y-2 overflow-y-auto rounded-2xl border border-line bg-surface p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {studyAreas.map(([label, href]) => (
                <Link key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-secondary transition hover:bg-white/5 hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-secondary transition hover:text-white">{label}</Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => openConsultation()}
          className="focus-ring hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200 lg:inline-flex"
        >
          Book consultation <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-white lg:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-frame-line bg-canvas px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            <button
              type="button"
              aria-expanded={studyOpen}
              onClick={() => setStudyOpen((isOpen) => !isOpen)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-secondary"
            >
              Mentorship Programs <ArrowDown size={15} className={studyOpen ? "rotate-180" : ""} aria-hidden="true" />
            </button>
            {studyOpen && (
              <div className="max-h-[45vh] overflow-y-auto">
                {studyAreas.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-xl py-2.5 pl-6 pr-3 text-sm leading-5 text-secondary hover:text-white">{label}</Link>
                ))}
              </div>
            )}
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-secondary transition hover:text-white">{label}</Link>
            ))}
            <button type="button" onClick={() => {
              setMenuOpen(false);
              openConsultation();
            }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200">
              Book consultation <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
