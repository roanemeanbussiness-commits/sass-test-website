"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { primaryNav } from "@/lib/site";
import { Menu, Close, ArrowRight } from "./icons";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="TextureR home">
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.href} className={styles.group}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" className={styles.caret} aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className={styles.dropdown} role="menu">
                  <div className={styles.dropdownInner}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropdownItem} role="menuitem">
                        <span className={styles.dropdownLabel}>{child.label}</span>
                        {child.description && (
                          <span className={styles.dropdownDesc}>{child.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={`btn btn-gold ${styles.cta}`}>
            Book a call
            <ArrowRight />
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`} aria-hidden={!mobileOpen}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.href} className={styles.mobileGroup}>
                <button
                  type="button"
                  className={styles.mobileGroupBtn}
                  aria-expanded={openGroup === item.href}
                  onClick={() => setOpenGroup((g) => (g === item.href ? null : item.href))}
                >
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 12 12" className={openGroup === item.href ? styles.caretUp : ""} aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openGroup === item.href && (
                  <div className={styles.mobileSub}>
                    <Link href={item.href} className={styles.mobileSubLink}>
                      All {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.mobileSubLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={styles.mobileLink}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" className={`btn btn-gold btn-lg ${styles.mobileCta}`}>
            Book a call
            <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
