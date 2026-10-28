import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Students Blog | MindCraft Academy",
  description: "Real stories, projects and lessons from MindCraft Academy mentorship interns in Pokhara.",
  alternates: { canonical: "/blog/students" },
  openGraph: {
    title: "Students Blog | MindCraft Academy",
    description: "Real stories, projects and lessons from MindCraft Academy mentorship interns in Pokhara.",
    url: "/blog/students",
    type: "website",
  },
};

export default function StudentsBlogPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Students Blog</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">Real stories, projects and lessons from our mentorship interns.</p>
        <div className="mt-10"><BlogListing fixedAuthorType="Student" /></div>
      </section>
    </main>
  );
}
