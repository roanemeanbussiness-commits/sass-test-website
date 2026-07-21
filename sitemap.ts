import Link from "next/link";
import styles from "./home.module.css";
import { LogoMarquee } from "@/components/logo-marquee";
import { StatGrid } from "@/components/stat-grid";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { ArrowRight, ArrowUpRight, Star } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import {
  services,
  caseStudies,
  companyStats,
  testimonials,
  faqs,
  processSteps,
} from "@/lib/data";
import { faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  path: "/",
  description:
    "TextureR is a brand scaling agency for ambitious small businesses. We sharpen your positioning, then grow you through SEO, GEO and AEO — so you're the brand buyers and AI assistants recommend.",
});

const searchStack = [
  { abbr: "SEO", name: "Search Engine Optimization", body: "Rank for what your buyers search — and hold it with durable, compounding authority." },
  { abbr: "AEO", name: "Answer Engine Optimization", body: "Own the direct answer in featured snippets, People Also Ask and Google's AI Overviews." },
  { abbr: "GEO", name: "Generative Engine Optimization", body: "Be the brand ChatGPT, Gemini and Perplexity surface, recommend and cite." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">Brand scaling agency</p>
            <h1 className={styles.heroTitle}>
              We scale small brands into the ones everyone&nbsp;<em>recommends</em>.
            </h1>
            <p className="lede heroLede" style={{ marginTop: 28 }}>
              TextureR sharpens what your business stands for, then makes you
              impossible to miss — across search, answers and the AI assistants
              your buyers now ask first.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-gold btn-lg">
                Book a discovery call
                <ArrowRight />
              </Link>
              <Link href="/case-studies" className="btn btn-outline btn-lg">
                See the results
              </Link>
            </div>
            <div className={styles.heroProof}>
              <span className={styles.stars} aria-label="4.9 out of 5 rating">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={17} />
                ))}
              </span>
              <span className={styles.proofText}>
                <strong>4.9/5</strong> average client rating
              </span>
              <span className={styles.proofDivider} aria-hidden="true" />
              <span className={styles.proofText}>
                Trusted by <strong>140+</strong> growing brands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <div className={styles.marqueeBand}>
        <p className={styles.marqueeLabel}>Brands we&rsquo;ve helped scale</p>
        <LogoMarquee />
      </div>

      {/* Value proposition */}
      <section className="section">
        <div className="container">
          <div className={styles.value}>
            <div>
              <p className="eyebrow">Why TextureR</p>
              <p className={styles.valueBig}>
                Most small businesses don&rsquo;t have a growth problem. They have
                a <span className="hl">clarity</span> problem.
              </p>
            </div>
            <div className={styles.valueBody}>
              <p>
                They pour money into ads for a brand that hasn&rsquo;t decided what
                it stands for — so the traffic never compounds and the growth
                never sticks.
              </p>
              <p>
                We do it in the right order. First we find the position only you
                can own. Then we build the identity, content and structured data
                that make you the obvious choice — for human buyers and for the
                AI models that now recommend brands on their behalf.
              </p>
              <p>
                The result is visibility you own instead of rent, and growth that
                gets cheaper every month.
              </p>
              <Link href="/about" className="link-arrow" style={{ marginTop: 8 }}>
                Our story &amp; approach
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-tight bg-paper-2">
        <div className="container">
          <StatGrid stats={companyStats} />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 56 }}>
            <p className="eyebrow">What we do</p>
            <h2>Four disciplines, one growth engine.</h2>
            <p className="lede">
              Brand strategy to set the direction, and a modern search stack to
              make sure the whole world — human and machine — can find you.
            </p>
          </div>
          <div className="grid grid-2">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={`card ${styles.serviceCard}`}>
                <span className={styles.serviceIndex}>0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceMetaFig}>{s.metric.figure}</span>
                  <span className={styles.serviceMetaLabel}>{s.metric.label}</span>
                </div>
                <span className="link-arrow">
                  Explore {s.abbr ?? s.name}
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The new search stack (dark) */}
      <section className="section bg-dark">
        <div className="container">
          <div className="section-head is-centered">
            <p className="eyebrow is-centered">The new search stack</p>
            <h2>Search didn&rsquo;t disappear. It multiplied.</h2>
            <p className="lede measure-center">
              Your buyers discover you across ranked results, direct answers and
              AI recommendations — often in the same journey. We run all three as
              one compounding program.
            </p>
          </div>
          <div className={styles.stack}>
            {searchStack.map((item) => (
              <div key={item.abbr} className={styles.stackCard}>
                <div className={styles.stackAbbr}>{item.abbr}</div>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/services" className="btn btn-gold btn-lg">
              Explore our services
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="eyebrow">How we work</p>
            <h2>A proven path from stuck to scaling.</h2>
          </div>
          <ol className="grid grid-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {processSteps.slice(0, 3).map((step) => (
              <li key={step.n}>
                <div className="index-chip">{step.n}</div>
                <h3 style={{ margin: "14px 0 10px", fontSize: "1.4rem" }}>{step.title}</h3>
                <p className="muted" style={{ margin: 0 }}>{step.body}</p>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 40 }}>
            <Link href="/process" className="link-arrow">
              See the full 5-step process
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="eyebrow">Selected work</p>
            <h2>Growth you can measure.</h2>
          </div>
          <div className={styles.workGrid}>
            {caseStudies.slice(0, 2).map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className={styles.workCard}>
                <div className={styles.workBanner} style={{ background: c.color }}>
                  <span className={styles.workIndustry}>{c.industry}</span>
                  <span className={styles.workClient}>{c.client}</span>
                </div>
                <div className={styles.workBody}>
                  <p className={styles.workTitle}>{c.title}</p>
                  <div className={styles.workResults}>
                    {c.results.slice(0, 3).map((r) => (
                      <div key={r.label} className={styles.workResult}>
                        <div className="rf">{r.figure}</div>
                        <div className="rl">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/case-studies" className="link-arrow">
              View all case studies
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="eyebrow">In their words</p>
            <h2>Partners, not vendors.</h2>
          </div>
          <div className={styles.quotes}>
            {testimonials.map((t) => (
              <figure key={t.name} className={styles.quoteCard}>
                <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
                <blockquote className={styles.quoteText} style={{ margin: "16px 0 24px" }}>
                  {t.text}
                </blockquote>
                <figcaption>
                  <div className={styles.quoteName}>{t.name}</div>
                  <div className={styles.quoteRole}>{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section bg-paper-2">
        <div className="container container-narrow">
          <div className="section-head is-centered" style={{ marginBottom: 40 }}>
            <p className="eyebrow is-centered">Common questions</p>
            <h2>Good to know.</h2>
          </div>
          <FaqAccordion items={faqs.slice(0, 5)} />
          <div className="center" style={{ marginTop: 36 }}>
            <Link href="/faq" className="link-arrow" style={{ justifyContent: "center" }}>
              Read all FAQs
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's make you the obvious choice."
        text="Tell us where growth is stuck. We'll come back with a point of view on how to scale — no obligation."
      />
    </>
  );
}
