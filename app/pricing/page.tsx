import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Check, ArrowRight } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { plans, faqs } from "@/lib/data";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import styles from "./pricing.module.css";

export const metadata = buildMetadata({
  title: "Pricing — Transparent Monthly Plans",
  path: "/pricing",
  description:
    "Simple, transparent brand scaling pricing. Foundations ($3,500/mo), Growth ($7,500/mo) and Scale ($15,000/mo) — bundles of strategy, execution and reporting, never billable hours.",
  keywords: ["brand scaling pricing", "SEO agency pricing", "marketing agency cost"],
});

const pricingFaqs = faqs.filter((f) =>
  ["How do you price your services?", "Do you require a long contract?", "How quickly will I see results?", "How do you measure success?"].includes(f.q)
);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          faqSchema(pricingFaqs),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        title="Transparent plans. No billable hours."
        lede="Every tier is a bundle of strategy, execution and reporting — priced monthly, with a 90-day initial commitment and no multi-year lock-in."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {plans.map((plan) => (
              <div key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}>
                {plan.featured && <span className={styles.badge}>Most popular</span>}
                <h2 className={styles.planName}>{plan.name}</h2>
                <p className={styles.planBest}>{plan.best}</p>
                <div className={styles.price}>
                  <span className={styles.priceFig}>{plan.price}</span>
                  <span className={styles.priceCadence}>{plan.cadence}</span>
                </div>
                <Link
                  href="/contact"
                  className={`btn ${plan.featured ? "btn-gold" : "btn-outline"} ${styles.planCta}`}
                >
                  {plan.cta}
                  <ArrowRight />
                </Link>
                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className={styles.check}><Check size={14} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.enterprise}>
            <div>
              <h3 className={styles.entTitle}>Enterprise &amp; custom engagements</h3>
              <p className={styles.entText}>
                Larger brand, multiple markets, or a full brand scaling program?
                We build tailored engagements with dedicated pods. Let&rsquo;s scope it.
              </p>
            </div>
            <Link href="/contact" className="btn btn-lg">
              Talk to us
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="container container-narrow">
          <div className="section-head is-centered" style={{ marginBottom: 36 }}>
            <p className="eyebrow is-centered">Pricing questions</p>
            <h2>Straight answers.</h2>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </section>

      <CtaBand
        title="Still weighing the options?"
        text="Book a call and we'll recommend the right tier for where you are — no upsell, just a straight read."
        primaryLabel="Get a recommendation"
        secondaryLabel="Compare services"
        secondaryHref="/services"
      />
    </>
  );
}
