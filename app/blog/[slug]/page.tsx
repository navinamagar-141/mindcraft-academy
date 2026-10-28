import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ConsultationButton from "@/components/ConsultationButton";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-NP", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | MindCraft Academy`,
    description: post.summary,
    alternates: { canonical: url },
    authors: [{ name: post.authorName }],
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
      authors: [post.authorName],
      section: post.category,
    },
  };
}

function renderBlock(block: (typeof blogPosts)[number]["body"][number], index: number) {
  switch (block.type) {
    case "heading":
      return <h2 key={index} className="mt-10 font-display text-2xl font-bold text-white">{block.text}</h2>;
    case "list":
      return (
        <ul key={index} className="mt-5 list-disc space-y-2 pl-6 text-base leading-8 text-secondary marker:text-white/70">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case "quote":
      return <blockquote key={index} className="my-8 border-l-2 border-white/40 pl-5 text-lg italic leading-8 text-white">{block.text}</blockquote>;
    case "paragraph":
      return <p key={index} className="mt-5 text-base leading-8 text-secondary">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const sameAuthorTypePosts = blogPosts.filter((entry) => entry.authorType === post.authorType && entry.slug !== post.slug);
  const otherPosts = blogPosts.filter((entry) => entry.slug !== post.slug && !sameAuthorTypePosts.some((same) => same.slug === entry.slug));
  const relatedPosts = [...sameAuthorTypePosts, ...otherPosts].slice(0, 2);
  const publishedAt = new Date(`${post.date}T00:00:00Z`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: publishedAt.toISOString(),
    dateModified: publishedAt.toISOString(),
    author: { "@type": "Person", name: post.authorName },
    publisher: {
      "@type": "Organization",
      name: "MindCraft Academy",
      url: "https://mindcraftacademy.com",
    },
    mainEntityOfPage: `https://mindcraftacademy.com/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <main className="min-h-screen bg-canvas text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <article className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-16">
        <Link href="/blog" className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary transition hover:text-white">
          <ArrowLeft size={16} aria-hidden="true" /> Back to all articles
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <p className="inline-flex rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-secondary">{post.category}</p>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-secondary">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary">
            <span>By {post.authorName}</span>
            <span>{dateFormatter.format(publishedAt)}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <aside aria-label="About the author" className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-2xl border border-line bg-surface p-5">
          <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 font-display text-sm font-bold text-white">
            {post.authorName
              .split(/\s+/)
              .filter((part) => part.toLowerCase() !== "placeholder")
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase() ?? "")
              .join("")}
          </span>
          <div>
            <p className="font-bold text-white">{post.authorName}</p>
            <p className="mt-0.5 text-xs font-semibold text-secondary">{post.authorRole}</p>
            <p className="mt-2 text-sm leading-6 text-secondary">{post.authorBio}</p>
          </div>
        </aside>

        <div className="mx-auto mt-8 max-w-3xl">
          {post.body.map(renderBlock)}
        </div>

        {relatedPosts.length > 0 && (
          <section aria-labelledby="related-articles-heading" className="mx-auto mt-16 max-w-5xl border-t border-line pt-10">
            <h2 id="related-articles-heading" className="font-display text-2xl font-bold text-white">Related articles</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="focus-ring rounded-2xl border border-line bg-surface p-5 transition hover:border-white/40">
                  <span className="text-xs font-semibold text-secondary">{related.category}</span>
                  <span className="mt-2 block font-display text-lg font-bold text-white">{related.title}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary">Read article <ArrowUpRight size={14} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-white">Have a question about your next step?</h2>
              <p className="mt-2 text-sm leading-6 text-secondary">Talk with our team about practical learning and mentorship in Pokhara.</p>
            </div>
            <ConsultationButton className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">
              Book consultation <ArrowUpRight size={16} aria-hidden="true" />
            </ConsultationButton>
          </div>
        </section>
      </article>
    </main>
  );
}
