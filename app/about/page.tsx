import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { StatGrid } from "@/components/stat-grid";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { values, team, trustStats } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "About TextureR — Brand Scaling Agency",
  path: "/about",
  description:
    "TextureR is an Austin-based brand scaling agency founded in 2019. We've scaled 140+ small businesses through positioning, SEO, GEO and AEO — and we run our own agency the same way.",
  keywords: ["about TextureR", "brand scaling agency Austin", "growth agency team"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About us"
        title="We scale ourselves the way we scale you."
        lede="TextureR is a brand scaling agency for small businesses ready to become the obvious choice in their category — and we practice everything we preach."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyLead}>
              <p className="eyebrow">Our story</p>
              <p className={styles.big}>
                We started TextureR in {siteConfig.founded} on a simple conviction:
                a small business with a sharp point of view can out-position
                anyone.
              </p>
            </div>
            <div className={styles.storyBody}>
              <p>
                After years inside brand and growth teams, our founder kept
                seeing the same thing — great small businesses losing to louder,
                better-funded competitors, not because their product was worse,
                but because no one could find or remember them.
              </p>
              <p>
                So we built the agency we wished existed: one that treats brand
                and growth as a single system. We find the position only you can
                own, then make you the obvious choice everywhere buyers look —
                the ranked search result, the direct answer, and increasingly,
                the AI assistant doing the recommending.
              </p>
              <p>
                Today we run at <strong>$600K a month</strong> in revenue, built
                with the exact playbook we run for clients. We don&rsquo;t sell
                theory. We sell what we&rsquo;ve done to ourselves and to 140+
                brands since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight bg-dark">
        <div className="container">
          <StatGrid stats={trustStats} dark />
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="eyebrow">What we believe</p>
            <h2>Four principles we won&rsquo;t compromise.</h2>
          </div>
          <div className={styles.values}>
            {values.map((v, i) => (
              <div key={v.title} className={styles.value}>
                <span className={styles.valueNum}>0{i + 1}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="eyebrow">The team</p>
            <h2>Specialists, not generalists.</h2>
            <p className="lede">
              A senior team across brand, search and AI — the disciplines that
              have to work together for growth to compound.
            </p>
          </div>
          <div className={styles.team}>
            {team.map((m) => (
              <div key={m.name} className={styles.member}>
                <div className={styles.avatar} aria-hidden="true">{m.initials}</div>
                <h3 className={styles.memberName}>{m.name}</h3>
                <p className={styles.memberRole}>{m.role}</p>
                <p className={styles.memberBio}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come scale with us."
        text="Whether you're a brand ready to grow or a specialist who wants to do the best work of your career — let's talk."
        primaryLabel="Start a conversation"
        secondaryLabel="See our work"
      />
    </>
  );
}
