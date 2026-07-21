import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Explicitly welcome crawlers and AI agents — this site is meant to be found.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
