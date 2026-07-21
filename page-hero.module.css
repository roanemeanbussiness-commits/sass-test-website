import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { StatGrid } from "@/components/stat-grid";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight, Check } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { services, trustStats } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./services.module.css";

export const metadata = buildMetadata({
  title: "Services — Brand Scaling, SEO, GEO & AEO",
  path: "/services",
  description:
    "Brand strategy plus a modern search stack — SEO, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) — engineered to make your small business the brand buyers and AI assistants recommend.",
  keywords: ["brand scaling services", "SEO services", "GEO services", "AEO services"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="What we do"
        title="Brand strategy, engineered for the way people find you now."
        lede="We combine sharp positioning with a modern search stack — so you're the obvious choice in the ranked results, the direct answer, and the AI recommendation."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {services.map((s, i) => (
              <article key={s.slug} className={styles.row}>
                <div className={styles.rowIndex}>0{i + 1}</div>
                <div className={styles.rowMain}>
                  <h2 className={styles.rowTitle}>{s.name}</h2>
                  <p className={styles.rowTagline}>{s.tagline}</p>
                  <p className={styles.rowSummary}>{s.summary}</p>
                  <ul className={styles.outcomes}>
                    {s.outcomes.slice(0, 4).map((o) => (
                      <li key={o}>
                        <span className={styles.check}><Check size={15} /></span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="link-arrow">
                    Explore {s.abbr ?? s.name}
                    <ArrowRight />
                  </Link>
                </div>
                <div className={styles.rowMetric}>
                  <div className="stat-figure">{s.metric.figure}</div>
                  <div className="stat-label">{s.metric.label}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-dark">
        <div className="container">
          <StatGrid stats={trustStats} dark />
        </div>
      </section>

      <CtaBand
        title="Not sure which mix you need?"
        text="Most brands need a blend of all four. Tell us your goals and we'll recommend the right starting point."
        primaryLabel="Get a recommendation"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
