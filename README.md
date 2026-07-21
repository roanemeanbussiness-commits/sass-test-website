# TextureR — Brand Scaling Agency Website

A professional, enterprise-grade marketing website for **TextureR**, a fictional
brand scaling agency for ambitious small businesses. The agency offers brand
strategy plus a modern search stack — **SEO**, **Generative Engine Optimization
(GEO)** and **Answer Engine Optimization (AEO)**.

The site is intentionally built as a strong, content-rich target for testing an
SEO / GEO / AEO agent: clean semantic HTML, full metadata, canonical tags,
Open Graph / Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`
and FAQ/Article/Service schema throughout.

> All company details, client names, metrics, quotes and case studies are
> illustrative sample data for demonstration purposes.

---

## Tech stack

- **Next.js 15** (App Router) with **static export** (`output: "export"`) — every
  page is pre-rendered to plain, crawlable HTML.
- **React 19** + **TypeScript**.
- **CSS Modules** + a custom design-token system (no CSS framework) for a
  bespoke, minimalist gold-and-gray aesthetic.
- **next/font** (self-hosted Fraunces + Inter) — no third-party font requests.
- Zero client-side data fetching; fully static and fast.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
```

## Building

```bash
npm run build     # produces a static site in ./out
```

Serve the `out/` folder with any static host, or preview locally:

```bash
npx serve out
```

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, global metadata, header/footer, site JSON-LD
  page.tsx              Home page
  services/             Services overview + dynamic [slug] detail pages
  case-studies/         Case study list + dynamic [slug] detail pages
  insights/             Blog list + dynamic [slug] article pages
  process/ pricing/ about/ contact/ faq/ privacy/ terms/
  sitemap.ts            Generated sitemap.xml
  robots.ts             Generated robots.txt
  icon.svg              Favicon
components/             Reusable UI (header, footer, CTA band, forms, cards, icons…)
lib/
  site.ts               Brand config, navigation, canonical URL
  data.ts               Services, case studies, team, pricing, testimonials, FAQs, stats
  insights.ts           Long-form article content
  schema.ts             schema.org JSON-LD builders
  seo.ts                Per-page metadata helper
```

## Pages

Home · Services (overview + Brand Scaling / SEO / GEO / AEO) · Case Studies
(overview + 3 detailed studies) · Process · Pricing · About · Insights
(3 articles) · Contact · FAQ · Privacy · Terms · custom 404.

## SEO / GEO / AEO features

- Unique `<title>`, meta description, canonical URL and social cards per page.
- **JSON-LD structured data**: `Organization`, `WebSite`, `Service`, `FAQPage`,
  `Article` and `BreadcrumbList`.
- `sitemap.xml` and `robots.txt` generated at build time.
- Answer-first content, semantic headings and FAQ blocks tuned for answer and
  generative engines.
- Fully pre-rendered HTML — no JavaScript required to read the content.

---

## Deploying

### Recommended: a root domain (Vercel / Netlify / custom domain)

Best for SEO. Import the repo into Vercel or Netlify (both auto-detect Next.js),
or upload `out/` to any static host. Then set your real domain in
`lib/site.ts` (`siteConfig.url`) so canonical/OG/sitemap URLs are correct.

### Included: GitHub Pages (zero-config)

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`. **One-time setup:** in the repo, go to **Settings → Pages** and
set **Source** to **GitHub Actions**. The workflow automatically sets the
sub-path and canonical origin, so the deployed site is SEO-correct at:

```
https://<owner>.github.io/<repo>/
```

### Configuration via environment variables

| Variable | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata/sitemap | `https://www.texturer.agency` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path when hosting under `/repo` (GitHub Pages) | `/sass-test-website` |

Leave both unset for local development and root-domain hosting.

## Notes

- The contact form shows a success state on submit (static site — no backend).
  To make it live, point the `onSubmit` handler in
  `components/contact-form.tsx` at a form endpoint (Formspree, Basin, a
  serverless function, etc.).
