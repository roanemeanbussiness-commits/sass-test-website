import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "FAQ — Working With TextureR",
  path: "/faq",
  description:
    "Answers to common questions about TextureR — what we do, who we work with, the difference between SEO, AEO and GEO, pricing, timelines and how we measure success.",
  keywords: ["TextureR FAQ", "brand scaling questions", "SEO GEO AEO difference"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        lede="Everything you might want to know before reaching out. Still curious? A real strategist is one call away."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <section className="section">
        <div className="container container-narrow">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Didn't find your answer?"
        text="Ask us directly. We'll give you a straight, no-pressure response."
        primaryLabel="Ask a question"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
