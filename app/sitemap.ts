import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services, caseStudies } from "@/lib/data";
import { articles } from "@/lib/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-21");

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/case-studies", priority: 0.9, freq: "monthly" },
    { path: "/process", priority: 0.7, freq: "yearly" },
    { path: "/pricing", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/insights", priority: 0.8, freq: "weekly" },
    { path: "/faq", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const s of services) {
    entries.push({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const c of caseStudies) {
    entries.push({
      url: absoluteUrl(`/case-studies/${c.slug}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  for (const a of articles) {
    entries.push({
      url: absoluteUrl(`/insights/${a.slug}`),
      lastModified: new Date(a.date),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
