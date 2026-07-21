import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
  description: "The terms that govern your use of the TextureR website and services.",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lede="Last updated July 21, 2026. These are sample terms for a demonstration website."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />

      <section className="section">
        <div className="container container-narrow">
          <div className="prose">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              website and services provided by {siteConfig.legalName}
              (&ldquo;TextureR&rdquo;). By using our website, you agree to these Terms.
            </p>

            <h2>Use of our website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to
              misuse the site, interfere with its operation, or attempt to access
              it in ways not permitted by these Terms.
            </p>

            <h2>Services &amp; engagements</h2>
            <p>
              Any services we provide are governed by a separate written
              agreement between TextureR and the client. Marketing materials on
              this website — including case studies, statistics and pricing — are
              illustrative and do not constitute a binding offer or guarantee of
              results.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on this website, including text, design, logos and
              graphics, is owned by TextureR or its licensors and is protected by
              applicable intellectual property laws. You may not reproduce or
              distribute it without our permission.
            </p>

            <h2>No guarantee of results</h2>
            <p>
              Marketing, SEO, GEO and AEO outcomes depend on many factors outside
              any agency&rsquo;s control. While we bring proven methods and real
              effort, we do not guarantee specific rankings, traffic, revenue or
              other results.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, TextureR will not be liable
              for any indirect, incidental or consequential damages arising from
              your use of this website.
            </p>

            <h2>Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              website after changes take effect constitutes acceptance of the
              revised Terms.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
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
