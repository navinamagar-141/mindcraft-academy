"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, type BlogAuthorType } from "@/data/blogPosts";

const dateFormatter = new Intl.DateTimeFormat("en-NP", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const authorFilters = [
  { label: "All", type: null },
  { label: "Students", type: "Student" },
  { label: "Teachers", type: "Teacher" },
  { label: "Team", type: "Team" },
] as const;

const emptyMessages: Record<BlogAuthorType, string> = {
  Student: "Student stories are coming soon.",
  Teacher: "Teacher articles are coming soon.",
  Team: "Team updates are coming soon.",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => part.toLowerCase() !== "placeholder")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function BlogListing({ fixedAuthorType }: { fixedAuthorType?: BlogAuthorType }) {
  const [activeFilter, setActiveFilter] = useState<BlogAuthorType | null>(null);
  const selectedType = fixedAuthorType ?? activeFilter;
  const visiblePosts = selectedType
    ? blogPosts.filter((post) => post.authorType === selectedType)
    : blogPosts;

  return (
    <>
      {!fixedAuthorType && (
        <div aria-label="Filter articles by author type" className="mb-8 flex flex-wrap gap-2">
          {authorFilters.map(({ label, type }) => (
            <button
              key={label}
              type="button"
              aria-pressed={activeFilter === type}
              onClick={() => setActiveFilter(type)}
              className={`focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === type
                  ? "border-white bg-white text-black"
                  : "border-line bg-surface text-secondary hover:border-white/50 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {visiblePosts.length > 0 ? (
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <article key={post.slug} className="flex min-h-[27rem] flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              <div
                aria-hidden="true"
                className="blog-card-pattern relative flex h-40 items-end overflow-hidden border-b border-line p-5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent" />
                <span className="relative rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 font-display text-xs font-bold text-white">
                    {initials(post.authorName)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white">{post.authorName}</p>
                    <p className="text-xs text-secondary">{post.authorRole}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold text-secondary">
                  {dateFormatter.format(new Date(`${post.date}T00:00:00Z`))} <span aria-hidden="true">·</span> {post.readingTime}
                </p>
                <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-white">{post.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-secondary">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-ring mt-auto inline-flex min-h-11 w-fit items-center pt-5 text-sm font-bold text-white underline-offset-4 transition hover:underline"
                >
                  Read article <span className="sr-only">: {post.title}</span>
                  <span className="ml-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-line bg-surface px-6 py-12 text-center">
          <h2 className="font-display text-xl font-bold text-white">
            {selectedType ? emptyMessages[selectedType] : "More articles are on the way."}
          </h2>
          <p className="mt-2 text-sm leading-6 text-secondary">
            Check back soon for more practical stories and ideas from the MindCraft community.
          </p>
        </div>
      )}

      <section className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Want to share your story? Send us your article</h2>
          <p className="mt-2 text-sm leading-6 text-secondary">We would be glad to hear about your work, experience, or practical advice.</p>
        </div>
        <a
          href="mailto:atmindcraft@gmail.com?subject=MindCraft%20Blog%20Article"
          className="focus-ring mt-5 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200 sm:mt-0"
        >
          Send your article <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
