import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "Team Blog | MindCraft Academy",
  description: "News, culture and behind the scenes at MindCraft Academy in Pokhara, Nepal.",
  alternates: { canonical: "/blog/team" },
  openGraph: {
    title: "Team Blog | MindCraft Academy",
    description: "News, culture and behind the scenes at MindCraft Academy in Pokhara, Nepal.",
    url: "/blog/team",
    type: "website",
  },
};

export default function TeamBlogPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Team Blog</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">News, culture and behind the scenes at MindCraft Academy.</p>
        <div className="mt-10"><BlogListing fixedAuthorType="Team" /></div>
      </section>
    </main>
  );
}
