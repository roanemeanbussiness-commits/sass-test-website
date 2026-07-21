import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
  description: "How TextureR collects, uses and protects your information.",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="Last updated July 21, 2026. This is a sample policy for a demonstration website."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />

      <section className="section">
        <div className="container container-narrow">
          <div className="prose">
            <p>
              This Privacy Policy explains how {siteConfig.legalName} (&ldquo;TextureR,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses and protects the information you
              provide when you use our website and services. TextureR is a
              brand scaling agency based in {siteConfig.address.city}, {siteConfig.address.region}.
            </p>

            <h2>Information we collect</h2>
            <p>
              We collect information you provide directly — such as your name,
              email, company and message when you submit a contact form — as well
              as standard analytics data (pages visited, referring source, device
              and browser type) collected automatically as you browse.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to inquiries and schedule discovery calls.</li>
              <li>To provide, maintain and improve our services and website.</li>
              <li>To send relevant updates you&rsquo;ve asked to receive.</li>
              <li>To understand how our site is used so we can make it better.</li>
            </ul>

            <h2>How we share information</h2>
            <p>
              We do not sell your personal information. We share it only with
              trusted service providers who help us operate our business (such as
              analytics and email tools), and only as needed to deliver our
              services or comply with the law.
            </p>

            <h2>Cookies &amp; analytics</h2>
            <p>
              We use cookies and similar technologies to remember preferences and
              measure site performance. You can control cookies through your
              browser settings; disabling them may affect some site features.
            </p>

            <h2>Data retention &amp; security</h2>
            <p>
              We retain personal information only as long as necessary for the
              purposes described here, and we use reasonable administrative and
              technical safeguards to protect it. No method of transmission over
              the internet is completely secure, however, and we cannot guarantee
              absolute security.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access,
              correct or delete your personal information, or to object to certain
              processing. To exercise any of these rights, email us at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or{" "}
              {siteConfig.address.street}, {siteConfig.address.city},{" "}
              {siteConfig.address.region} {siteConfig.address.postalCode}.
            </p>

            <p>
              <em>
                This document is illustrative sample content for a demonstration
                website and is not legal advice.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
