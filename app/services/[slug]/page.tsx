import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight, Check } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { services, getService } from "@/lib/data";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import styles from "../services.module.css";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name}${service.abbr ? ` (${service.abbr})` : ""}`,
    path: `/services/${service.slug}`,
    description: service.summary,
    keywords: [service.name, service.abbr ?? "", "brand scaling", "small business growth"].filter(Boolean),
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          ...(service.faqs ? [faqSchema(service.faqs)] : []),
        ]}
      />

      <PageHero
        eyebrow={service.abbr ?? "Service"}
        title={service.name}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Intro + metric */}
      <section className="section">
        <div className="container">
          <div className={styles.detailIntro}>
            <div className={styles.introBody}>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--gold-deep)", marginBottom: 20 }}>
                {service.tagline}
              </p>
              <p>{service.intro}</p>
            </div>
            <div className={styles.introMetric}>
              <div className="stat-figure">{service.metric.figure}</div>
              <div className="stat-label" style={{ marginTop: 14, fontSize: "0.98rem" }}>
                {service.metric.label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-tight bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">What you get</p>
            <h2>Outcomes we build toward.</h2>
          </div>
          <ul className={styles.outcomeList} style={{ gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {service.outcomes.map((o) => (
              <li key={o}>
                <span className={styles.check}><Check size={15} /></span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 44 }}>
            <p className="eyebrow">Inside the engagement</p>
            <h2>What we deliver.</h2>
          </div>
          <div className={styles.deliverGrid}>
            {service.deliverables.map((d, i) => (
              <div key={d.title} className={styles.deliverCard}>
                <span className="index-chip">0{i + 1}</span>
                <h3 style={{ marginTop: 12 }}>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {service.process && (
        <section className="section-tight bg-paper-2">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 36 }}>
              <p className="eyebrow">How it runs</p>
              <h2>A clear, repeatable path.</h2>
            </div>
            <div className={styles.processRow}>
              {service.process.map((step, i) => (
                <div key={step} className={styles.processPill}>
                  <span className="num">0{i + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && (
        <section className="section">
          <div className="container container-narrow">
            <div className="section-head" style={{ marginBottom: 32 }}>
              <p className="eyebrow">Questions</p>
              <h2>{service.abbr ?? service.name}, answered.</h2>
            </div>
            <FaqAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">Keep exploring</p>
            <h2>Pairs well with.</h2>
          </div>
          <div className={styles.related}>
            {related.map((r) => (
              <div key={r.slug} className={styles.relatedCard}>
                <h3>{r.name}</h3>
                <p>{r.tagline}</p>
                <Link href={`/services/${r.slug}`} className="link-arrow">
                  Learn more
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to put ${service.abbr ?? service.name} to work?`}
        text="Book a discovery call and we'll map exactly how this fits your growth goals."
      />
    </>
  );
}
