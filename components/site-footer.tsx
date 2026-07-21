import Link from "next/link";
import { Logo } from "./logo";
import { footerNav, siteConfig } from "@/lib/site";
import { ArrowRight, Mail, Phone, Pin } from "./icons";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const year = 2026; // Static export — deterministic across builds.

  return (
    <footer className={`bg-dark ${styles.footer}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label="TextureR home">
              <Logo />
            </Link>
            <p className={styles.blurb}>
              A brand scaling agency for ambitious small businesses. We sharpen
              your position, then grow you across search and AI.
            </p>
            <div className={styles.contact}>
              <a href={`mailto:${siteConfig.email}`} className={styles.contactRow}>
                <Mail />
                {siteConfig.email}
              </a>
              <a href={siteConfig.phoneHref} className={styles.contactRow}>
                <Phone />
                {siteConfig.phone}
              </a>
              <span className={styles.contactRow}>
                <Pin />
                {siteConfig.address.city}, {siteConfig.address.region}
              </span>
            </div>
          </div>

          <div className={styles.linkCols}>
            {footerNav.map((group) => (
              <div key={group.title} className={styles.linkCol}>
                <h4 className={styles.colTitle}>{group.title}</h4>
                <ul className={styles.colList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaStrip}>
          <div>
            <p className={styles.ctaKicker}>Ready when you are</p>
            <p className={styles.ctaLine}>Let&rsquo;s scale your brand.</p>
          </div>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Book a discovery call
            <ArrowRight />
          </Link>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href={siteConfig.social.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={siteConfig.social.x} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={siteConfig.social.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.socialLink}>Privacy</Link>
            <Link href="/terms" className={styles.socialLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
