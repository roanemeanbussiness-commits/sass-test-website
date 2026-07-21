/**
 * Central site configuration. One source of truth for the brand, contact
 * details, navigation and the canonical URL used across metadata, sitemap,
 * robots and structured data.
 *
 * When you point this at a real domain, change `url` — every canonical tag,
 * Open Graph URL, sitemap entry and JSON-LD reference derives from it.
 */
export const siteConfig = {
  name: "TextureR",
  legalName: "TextureR Agency, LLC",
  // Short, benefit-first description reused as the default meta description.
  tagline: "Brand scaling for ambitious small businesses.",
  description:
    "TextureR is a brand scaling agency that helps ambitious small businesses grow through brand strategy, SEO, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). We turn overlooked brands into category leaders.",
  // The canonical origin. Defaults to the production domain, but can be
  // overridden at build time (e.g. the GitHub Pages URL) via NEXT_PUBLIC_SITE_URL
  // so canonical tags, Open Graph URLs and the sitemap all stay correct.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.texturer.agency",
  locale: "en_US",
  founded: "2019",
  email: "hello@texturer.agency",
  phone: "+1 (512) 555-0148",
  phoneHref: "tel:+15125550148",
  address: {
    street: "701 Brazos Street, Suite 1600",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/texturer",
    x: "https://x.com/texturer",
    instagram: "https://www.instagram.com/texturer",
  },
  // Twitter/X handle for the card tags.
  xHandle: "@texturer",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Brand Scaling",
        href: "/services/brand-scaling",
        description: "Positioning, identity and a growth engine that compounds.",
      },
      {
        label: "Search Engine Optimization",
        href: "/services/seo",
        description: "Technical, content and authority — built to rank and hold.",
      },
      {
        label: "Generative Engine Optimization",
        href: "/services/geo",
        description: "Be the brand AI models recommend and cite.",
      },
      {
        label: "Answer Engine Optimization",
        href: "/services/aeo",
        description: "Own the answer in snippets, voice and AI overviews.",
      },
    ],
  },
  { label: "Work", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

// Footer link groups.
export const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Brand Scaling", href: "/services/brand-scaling" },
      { label: "SEO", href: "/services/seo" },
      { label: "GEO", href: "/services/geo" },
      { label: "AEO", href: "/services/aeo" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Agency",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}
