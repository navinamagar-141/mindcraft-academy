import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = {
  title: "All Articles | MindCraft Academy Blog",
  description: "Read practical coding, design, SEO, career, and MindCraft Academy articles from students, mentors, and the team in Pokhara.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "All Articles | MindCraft Academy Blog",
    description: "Read practical coding, design, SEO, career, and MindCraft Academy articles from students, mentors, and the team in Pokhara.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-canvas text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Blog</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          Practical tips on coding, design, SEO and building a tech career in Pokhara.
        </p>
        <div className="mt-10">
          <BlogListing />
        </div>
      </section>
    </main>
  );
}
