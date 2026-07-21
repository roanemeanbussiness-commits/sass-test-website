import { clientLogos } from "@/lib/data";
import styles from "./logo-marquee.module.css";

/** A quiet, auto-scrolling row of client wordmarks. CSS-only, no JS. */
export function LogoMarquee() {
  // Duplicate the list so the loop is seamless.
  const row = [...clientLogos, ...clientLogos];
  return (
    <div className={styles.wrap} aria-label="Selected clients">
      <div className={styles.track}>
        {row.map((name, i) => (
          <span key={`${name}-${i}`} className={styles.logo} aria-hidden={i >= clientLogos.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
