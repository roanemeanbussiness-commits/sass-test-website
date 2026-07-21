import Link from "next/link";
import styles from "./page-hero.module.css";

type Crumb = { name: string; path: string };

/** Standard interior-page hero: breadcrumb, eyebrow, title and lede. */
export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: Crumb[];
  align?: "left" | "center";
}) {
  return (
    <section className={styles.hero}>
      <div className="container">
        {breadcrumb && (
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <ol>
              {breadcrumb.map((c, i) => (
                <li key={c.path}>
                  {i < breadcrumb.length - 1 ? (
                    <Link href={c.path}>{c.name}</Link>
                  ) : (
                    <span aria-current="page">{c.name}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className={styles.sep}>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className={`${styles.inner} ${align === "center" ? styles.center : ""}`}>
          <p className={`eyebrow ${align === "center" ? "is-centered" : ""}`}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          {lede && <p className="lede" style={{ marginTop: 24, maxWidth: "56ch" }}>{lede}</p>}
        </div>
      </div>
    </section>
  );
}
