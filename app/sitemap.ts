import type { MetadataRoute } from "next";
import { company } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";
import { serviceSeo } from "@/lib/serviceSeo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  for (const svc of serviceSeo) {
    pages.push({
      url: `${siteUrl}/services/${svc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  const sections = ["#about", "#services", "#ai", "#portfolio", "#process", "#faq", "#contact"];
  for (const hash of sections) {
    pages.push({
      url: `${siteUrl}/${hash}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const post of getAllPosts()) {
    pages.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  return pages;
}
