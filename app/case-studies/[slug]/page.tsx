import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { caseStudies, getCaseStudy } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.client} Case Study`,
    path: `/case-studies/${study.slug}`,
    description: study.summary,
    keywords: [study.client, study.industry, ...study.services, "case study"],
  });
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const next = caseStudies[(caseStudies.findIndex((c) => c.slug === study.slug) + 1) % caseStudies.length];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.client, path: `/case-studies/${study.slug}` },
        ])}
      />

      {/* Hero banner */}
      <section className={styles.hero} style={{ background: study.color }}>
        <div className="container">
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/case-studies">Case Studies</Link>
            <span>/</span>
            <span>{study.client}</span>
          </nav>
          <span className={styles.industry}>{study.industry}</span>
          <h1 className={styles.client}>{study.client}</h1>
          <p className={styles.heroTitle}>{study.title}</p>
          <div className={styles.services}>
            {study.services.map((s) => (
              <span key={s} className={styles.svcPill}>{s}</span>
            ))}
            <span className={styles.svcPill}>{study.duration}</span>
          </div>
        </div>
      </section>

      {/* Results strip */}
      <section className={styles.resultsStrip}>
        <div className="container">
          <div className={styles.resultsGrid} data-count={study.results.length}>
            {study.results.map((r) => (
              <div key={r.label} className={styles.result}>
                <div className={styles.resultFig}>{r.figure}</div>
                <div className={styles.resultLabel}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section">
        <div className="container container-narrow">
          <p className={styles.hero_lede}>{study.hero}</p>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>The challenge</h2>
            <p className={styles.blockBody}>{study.challenge}</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Our approach</h2>
            <div className={styles.approach}>
              {study.approach.map((a, i) => (
                <div key={a.title} className={styles.approachItem}>
                  <span className={styles.approachNum}>0{i + 1}</span>
                  <div>
                    <h3 className={styles.approachTitle}>{a.title}</h3>
                    <p className={styles.blockBody} style={{ margin: 0 }}>{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className={styles.quote}>
            <blockquote>&ldquo;{study.quote.text}&rdquo;</blockquote>
            <figcaption>
              <span className={styles.quoteName}>{study.quote.name}</span>
              <span className={styles.quoteRole}>{study.quote.role}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Next case study */}
      <section className="section-tight bg-paper-2">
        <div className="container">
          <div className={styles.nextRow}>
            <div>
              <p className="eyebrow">Next case study</p>
              <h2 style={{ fontSize: "1.8rem" }}>{next.client}</h2>
              <p className="muted" style={{ margin: "8px 0 0", maxWidth: "44ch" }}>{next.title}</p>
            </div>
            <Link href={`/case-studies/${next.slug}`} className="btn btn-outline btn-lg">
              Read next
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want results like these?"
        text="Every engagement starts with a conversation about your goals. Let's have it."
        secondaryLabel="More case studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
