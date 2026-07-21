import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { StatGrid } from "@/components/stat-grid";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { caseStudies, companyStats } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./case-studies.module.css";

export const metadata = buildMetadata({
  title: "Case Studies — Real Brand Scaling Results",
  path: "/case-studies",
  description:
    "See how TextureR scaled real small businesses — from a $40K/month skincare brand to $210K, 5x B2B pipeline, and 3x qualified leads — through brand strategy, SEO, GEO and AEO.",
  keywords: ["brand scaling case studies", "SEO case studies", "agency results"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Selected work"
        title="Growth you can measure."
        lede="We don't report on vanity metrics. Here's what compounding brand, search and AI visibility looks like on a real P&L."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className={styles.card}>
                <div className={styles.banner} style={{ background: c.color }}>
                  <div className={styles.bannerTop}>
                    <span className={styles.industry}>{c.industry}</span>
                    <span className={styles.duration}>{c.duration}</span>
                  </div>
                  <span className={styles.client}>{c.client}</span>
                </div>
                <div className={styles.body}>
                  <div className={styles.services}>
                    {c.services.map((s) => (
                      <span key={s} className="pill">{s}</span>
                    ))}
                  </div>
                  <h2 className={styles.title}>{c.title}</h2>
                  <p className={styles.summary}>{c.summary}</p>
                  <div className={styles.results}>
                    {c.results.slice(0, 3).map((r) => (
                      <div key={r.label} className={styles.result}>
                        <div className={styles.resultFig}>{r.figure}</div>
                        <div className={styles.resultLabel}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="link-arrow">
                    Read the case study
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">The bigger picture</p>
            <h2>Six years of compounding results.</h2>
          </div>
          <StatGrid stats={companyStats} />
        </div>
      </section>

      <CtaBand
        title="Your business could be the next case study."
        text="Let's talk about where you want to be in twelve months — and the fastest, most durable way to get there."
      />
    </>
  );
}
