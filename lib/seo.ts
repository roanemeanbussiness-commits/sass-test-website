import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./site";

type PageSeo = {
  title?: string;
  description?: string;
  path?: string;
  /** Article/OG type; defaults to "website". */
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  authors?: string[];
};

/**
 * Build a complete, consistent Metadata object for a page: canonical URL,
 * Open Graph and Twitter cards all derived from one source of truth.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  type = "website",
  keywords,
  publishedTime,
  authors,
}: PageSeo = {}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: title ?? undefined,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: siteConfig.locale,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.xHandle,
      creator: siteConfig.xHandle,
    },
  };
}
