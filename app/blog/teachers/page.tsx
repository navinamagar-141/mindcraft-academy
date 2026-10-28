import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Teachers Blog | MindCraft Academy",
  description: "Practical advice and industry knowledge from MindCraft Academy mentors in Pokhara.",
  alternates: { canonical: "/blog/teachers" },
  openGraph: {
    title: "Teachers Blog | MindCraft Academy",
    description: "Practical advice and industry knowledge from MindCraft Academy mentors in Pokhara.",
    url: "/blog/teachers",
    type: "website",
  },
};

export default function TeachersBlogPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Teachers Blog</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">Practical advice and industry knowledge from our mentors.</p>
        <div className="mt-10"><BlogListing fixedAuthorType="Teacher" /></div>
      </section>
    </main>
  );
}
