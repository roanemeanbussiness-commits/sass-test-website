import Link from "next/link";
import { ArrowRight } from "./icons";
import styles from "./cta-band.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** The recurring "let's talk" band used to close most pages. */
export function CtaBand({
  eyebrow = "Start scaling",
  title,
  text,
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact",
  secondaryLabel = "See our work",
  secondaryHref = "/case-studies",
}: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.band}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.inner}>
            <p className="eyebrow" style={{ color: "var(--gold-bright)" }}>
              {eyebrow}
            </p>
            <h2 className={styles.title}>{title}</h2>
            {text && <p className={styles.text}>{text}</p>}
            <div className={styles.actions}>
              <Link href={primaryHref} className="btn btn-gold btn-lg">
                {primaryLabel}
                <ArrowRight />
              </Link>
              {secondaryLabel && (
                <Link href={secondaryHref} className="btn btn-outline btn-lg">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
