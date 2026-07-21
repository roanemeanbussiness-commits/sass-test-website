import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { articles, formatDate } from "@/lib/insights";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./insights.module.css";

export const metadata = buildMetadata({
  title: "Insights — Brand Scaling, SEO, GEO & AEO",
  path: "/insights",
  description:
    "Practical thinking on brand scaling and the new search stack — SEO, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) — from the TextureR team.",
  keywords: ["brand scaling blog", "GEO", "AEO", "SEO insights"],
});

export default function InsightsPage() {
  const [feature, ...rest] = articles;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Field notes on scaling brands."
        lede="How we think about positioning, search and the shift to AI-driven discovery — written for operators, not algorithms."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Featured article */}
          <Link href={`/insights/${feature.slug}`} className={styles.feature}>
            <div className={styles.featureMeta}>
              <span className="pill">{feature.category}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.date}>{formatDate(feature.date)}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.date}>{feature.readingTime}</span>
            </div>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
            <p className={styles.featureDek}>{feature.dek}</p>
            <div className={styles.byline}>
              <span className={styles.avatar} aria-hidden="true">
                {feature.author.split(" ").map((n) => n[0]).join("")}
              </span>
              <span>
                <span className={styles.authorName}>{feature.author}</span>
                <span className={styles.authorRole}>{feature.authorRole}</span>
              </span>
              <span className="link-arrow" style={{ marginLeft: "auto" }}>
                Read article
                <ArrowRight />
              </span>
            </div>
          </Link>

          {/* Rest */}
          <div className={styles.grid}>
            {rest.map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className="pill">{a.category}</span>
                  <span className={styles.date}>{a.readingTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDek}>{a.dek}</p>
                <div className={styles.cardFoot}>
                  <span className={styles.authorName}>{a.author}</span>
                  <span className={styles.date}>{formatDate(a.date)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer we do it for you?"
        text="Reading is nice. Compounding growth is nicer. Let's talk about scaling your brand."
        primaryLabel="Book a discovery call"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
