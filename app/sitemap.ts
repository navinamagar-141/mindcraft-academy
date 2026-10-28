import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

const siteUrl = "https://mindcraftacademy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog/students`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/blog/teachers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/blog/team`, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
