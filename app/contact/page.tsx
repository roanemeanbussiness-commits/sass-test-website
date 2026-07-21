import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { Mail, Phone, Pin } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./contact.module.css";

export const metadata = buildMetadata({
  title: "Contact — Book a Discovery Call",
  path: "/contact",
  description:
    "Ready to scale your brand? Tell TextureR where growth is stuck and book a discovery call. We'll come back with a point of view — no obligation.",
  keywords: ["contact TextureR", "book a call", "brand scaling consultation"],
});

const steps = [
  { n: "01", t: "You reach out", d: "Share a little about your business and goals using the form." },
  { n: "02", t: "We come prepared", d: "A strategist reviews your brand and comes with a real point of view." },
  { n: "03", t: "We map the path", d: "On the call, we'll outline how we'd scale you — and whether we're the right fit." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's scale your brand."
        lede="Tell us where growth is stuck. We'll review your business and come back with a point of view — whether or not we end up working together."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formCol}>
              <h2 className={styles.formTitle}>Request a discovery call</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className={styles.side}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Talk to a human</h3>
                <a href={`mailto:${siteConfig.email}`} className={styles.contactRow}>
                  <span className={styles.icon}><Mail /></span>
                  <span>
                    <span className={styles.contactLabel}>Email</span>
                    {siteConfig.email}
                  </span>
                </a>
                <a href={siteConfig.phoneHref} className={styles.contactRow}>
                  <span className={styles.icon}><Phone /></span>
                  <span>
                    <span className={styles.contactLabel}>Phone</span>
                    {siteConfig.phone}
                  </span>
                </a>
                <div className={styles.contactRow}>
                  <span className={styles.icon}><Pin /></span>
                  <span>
                    <span className={styles.contactLabel}>Studio</span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                  </span>
                </div>
              </div>

              <div className={styles.stepsCard}>
                <h3 className={styles.sideTitle}>What happens next</h3>
                <ol className={styles.steps}>
                  {steps.map((s) => (
                    <li key={s.n} className={styles.step}>
                      <span className={styles.stepNum}>{s.n}</span>
                      <span>
                        <span className={styles.stepTitle}>{s.t}</span>
                        <span className={styles.stepText}>{s.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
