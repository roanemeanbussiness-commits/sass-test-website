import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Check } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { processSteps } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./process.module.css";

export const metadata = buildMetadata({
  title: "Our Process — From Stuck to Scaling",
  path: "/process",
  description:
    "TextureR's five-step brand scaling process: Discover, Diagnose, Design, Deploy and Scale. A transparent, repeatable path from stuck to compounding growth.",
  keywords: ["brand scaling process", "agency process", "growth methodology"],
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <PageHero
        eyebrow="How we work"
        title="A transparent path from stuck to scaling."
        lede="No black boxes. Five deliberate phases, each with clear outputs, so you always know what we're doing, why, and what it's moving."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.steps}>
            {processSteps.map((step) => (
              <article key={step.n} className={styles.step}>
                <div className={styles.stepLeft}>
                  <span className={styles.num}>{step.n}</span>
                  <span className={styles.line} aria-hidden="true" />
                </div>
                <div className={styles.stepBody}>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  <p className={styles.stepText}>{step.body}</p>
                  <ul className={styles.detail}>
                    {step.detail.map((d) => (
                      <li key={d}>
                        <span className={styles.check}><Check size={14} /></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-dark">
        <div className="container">
          <div className={styles.promise}>
            <div className="section-head">
              <p className="eyebrow">Our promise</p>
              <h2>You&rsquo;ll never wonder what you&rsquo;re paying for.</h2>
            </div>
            <div className={styles.promiseCols}>
              <div>
                <h3 className={styles.promiseH}>Revenue-first reporting</h3>
                <p className={styles.promiseP}>
                  A live dashboard from week one, plus a monthly report that ties
                  every activity back to pipeline and revenue.
                </p>
              </div>
              <div>
                <h3 className={styles.promiseH}>Rolling engagements</h3>
                <p className={styles.promiseP}>
                  A 90-day initial commitment, then month to month. We earn the
                  next month, every month — no multi-year lock-in.
                </p>
              </div>
              <div>
                <h3 className={styles.promiseH}>Your team, enabled</h3>
                <p className={styles.promiseP}>
                  We build systems and playbooks your team can run, so momentum
                  never depends on us being in the room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's start with Discover."
        text="The first call is a real working session. You'll leave with a sharper read on your growth — whether or not we work together."
      />
    </>
  );
}
