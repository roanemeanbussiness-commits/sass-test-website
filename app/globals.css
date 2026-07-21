/* ==========================================================================
   TextureR — Design System
   A restrained, editorial gold-and-gray system. Generous whitespace,
   a serif display face, and gold used sparingly as an accent of intent.
   ========================================================================== */

:root {
  /* Neutrals — warm grays so the palette never feels cold or corporate */
  --paper: #fbfaf7;         /* page background */
  --paper-2: #f4f2ec;       /* alternating section background */
  --surface: #ffffff;       /* cards */
  --ink: #17181a;           /* primary text / near-black */
  --ink-2: #3b3d40;         /* secondary text */
  --muted: #6b6d70;         /* tertiary text */
  --line: #e6e3db;          /* hairline borders */
  --line-strong: #d6d2c7;

  /* Charcoal — for inverted (dark) sections */
  --charcoal: #191a1c;
  --charcoal-2: #202225;
  --charcoal-line: #34363a;
  --on-dark: #f3f1ea;
  --on-dark-muted: #a7a49b;

  /* Gold — the single accent. Muted and premium, not neon. */
  --gold: #b98d3e;          /* primary gold */
  --gold-deep: #98702c;     /* text-safe gold on light */
  --gold-bright: #d8b25f;   /* gold on dark backgrounds */
  --gold-soft: #f0e6d0;     /* gold wash */

  /* Typography */
  --font-display: var(--font-fraunces), Georgia, "Times New Roman", serif;
  --font-sans: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;

  /* Layout */
  --container: 1200px;
  --container-narrow: 820px;
  --radius: 4px;
  --radius-lg: 10px;

  /* Motion */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* ------------------------------------------------------------------ Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

img,
svg {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

::selection {
  background: var(--gold-soft);
  color: var(--ink);
}

/* --------------------------------------------------------------- Headings */
h1,
h2,
h3,
h4 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 0;
}

h1 {
  font-size: clamp(2.6rem, 5.4vw, 4.6rem);
  font-optical-sizing: auto;
}

h2 {
  font-size: clamp(2rem, 3.6vw, 3rem);
}

h3 {
  font-size: clamp(1.35rem, 2vw, 1.7rem);
}

p {
  margin: 0 0 1.1em;
}

/* ------------------------------------------------------------- Utilities */
.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: 24px;
}

.container-narrow {
  max-width: var(--container-narrow);
}

.section {
  padding-block: clamp(64px, 9vw, 128px);
}

.section-tight {
  padding-block: clamp(48px, 6vw, 84px);
}

.bg-paper-2 {
  background: var(--paper-2);
}

.bg-dark {
  background: var(--charcoal);
  color: var(--on-dark);
}

.bg-dark h1,
.bg-dark h2,
.bg-dark h3,
.bg-dark h4 {
  color: var(--on-dark);
}

.lede {
  font-size: clamp(1.15rem, 1.7vw, 1.35rem);
  line-height: 1.55;
  color: var(--ink-2);
}

.bg-dark .lede {
  color: var(--on-dark-muted);
}

.muted {
  color: var(--muted);
}

.center {
  text-align: center;
}

.measure {
  max-width: 62ch;
}

.measure-center {
  max-width: 62ch;
  margin-inline: auto;
}

/* Eyebrow — the small tracked-out label that opens a section */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin: 0 0 22px;
}

.bg-dark .eyebrow {
  color: var(--gold-bright);
}

.eyebrow::before {
  content: "";
  width: 26px;
  height: 1px;
  background: currentColor;
  opacity: 0.7;
}

.eyebrow.is-centered {
  justify-content: center;
}

/* Section header block */
.section-head {
  max-width: 720px;
}

.section-head.is-centered {
  margin-inline: auto;
  text-align: center;
}

.section-head p {
  margin-top: 20px;
}

/* --------------------------------------------------------------- Buttons */
.btn {
  --btn-bg: var(--ink);
  --btn-fg: var(--paper);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 28px;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
  border: 1px solid var(--btn-bg);
  border-radius: var(--radius);
  background: var(--btn-bg);
  color: var(--btn-fg);
  transition: transform 0.25s var(--ease), background 0.25s var(--ease),
    color 0.25s var(--ease), border-color 0.25s var(--ease);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-gold {
  --btn-bg: var(--gold);
  --btn-fg: #1a1408;
  border-color: var(--gold);
}

.btn-gold:hover {
  --btn-bg: var(--gold-deep);
  border-color: var(--gold-deep);
  color: #fff;
}

.btn-outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--line-strong);
}

.btn-outline:hover {
  border-color: var(--ink);
  background: transparent;
}

.bg-dark .btn-outline {
  color: var(--on-dark);
  border-color: var(--charcoal-line);
}

.bg-dark .btn-outline:hover {
  border-color: var(--gold-bright);
  color: var(--gold-bright);
}

.btn-lg {
  padding: 18px 34px;
  font-size: 0.95rem;
}

/* Text link with animated gold underline */
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--ink);
  transition: gap 0.25s var(--ease), color 0.25s var(--ease);
}

.link-arrow svg {
  transition: transform 0.25s var(--ease);
}

.link-arrow:hover {
  color: var(--gold-deep);
}

.link-arrow:hover svg {
  transform: translateX(4px);
}

.bg-dark .link-arrow {
  color: var(--on-dark);
}

.bg-dark .link-arrow:hover {
  color: var(--gold-bright);
}

/* ----------------------------------------------------------------- Cards */
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 34px;
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease),
    box-shadow 0.3s var(--ease);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--line-strong);
  box-shadow: 0 22px 48px -30px rgba(24, 20, 8, 0.4);
}

/* --------------------------------------------------------------- Grids */
.grid {
  display: grid;
  gap: 24px;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 960px) {
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}

/* Hairline rule */
.rule {
  height: 1px;
  background: var(--line);
  border: 0;
  margin: 0;
}

.bg-dark .rule {
  background: var(--charcoal-line);
}

/* Numbered index chip */
.index-chip {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--gold-deep);
  letter-spacing: 0.05em;
}

/* Big display statistic */
.stat-figure {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 4.5vw, 3.8rem);
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.bg-dark .stat-figure {
  color: var(--gold-bright);
}

.stat-label {
  margin-top: 12px;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.4;
}

.bg-dark .stat-label {
  color: var(--on-dark-muted);
}

/* Pill / tag */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  border: 1px solid var(--line-strong);
  border-radius: 100px;
  color: var(--ink-2);
  background: var(--surface);
}

.bg-dark .pill {
  border-color: var(--charcoal-line);
  color: var(--on-dark-muted);
  background: transparent;
}

/* Subtle entrance animation, respects reduced-motion via the block above */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: reveal-in 0.7s var(--ease) forwards;
}

@keyframes reveal-in {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Focus visibility for keyboard users */
:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: 2px;
}

/* Skip link for accessibility */
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 1000;
  padding: 12px 18px;
  background: var(--ink);
  color: var(--paper);
  border-radius: 0 0 var(--radius) 0;
}

.skip-link:focus {
  left: 0;
}

/* Prose (long-form article/legal content) */
.prose {
  font-size: 1.08rem;
  line-height: 1.75;
  color: var(--ink-2);
}

.prose > * + * {
  margin-top: 1.1em;
}

.prose h2 {
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  margin-top: 2.2em;
  margin-bottom: 0.2em;
  color: var(--ink);
}

.prose h3 {
  font-size: clamp(1.25rem, 1.8vw, 1.45rem);
  margin-top: 1.6em;
  margin-bottom: 0.1em;
  color: var(--ink);
}

.prose a {
  color: var(--gold-deep);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

.prose ul,
.prose ol {
  padding-left: 1.3em;
  margin-block: 1em;
}

.prose li {
  margin-bottom: 0.5em;
}

.prose li::marker {
  color: var(--gold-deep);
}

.prose blockquote {
  margin: 1.6em 0;
  padding: 4px 0 4px 26px;
  border-left: 2px solid var(--gold);
  font-family: var(--font-display);
  font-size: 1.35rem;
  line-height: 1.4;
  color: var(--ink);
}

.prose strong {
  color: var(--ink);
  font-weight: 600;
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.9em;
  background: var(--paper-2);
  padding: 2px 6px;
  border-radius: 4px;
}
