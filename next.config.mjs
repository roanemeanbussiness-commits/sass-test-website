/** @type {import('next').NextConfig} */

// Static export so the site can be hosted anywhere (Vercel, Netlify, GitHub
// Pages, S3, etc.) and, importantly, so every page is pre-rendered to plain
// HTML. That gives our SEO / GEO / AEO agent clean, crawlable markup with no
// client-side rendering ambiguity.

// When hosting under a sub-path (e.g. GitHub Pages project sites at
// /repo-name), set NEXT_PUBLIC_BASE_PATH so links and assets resolve correctly.
// Leave it empty for root-domain hosts like Vercel or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
