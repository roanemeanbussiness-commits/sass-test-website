/* ---------------------------------------------------------------- Hero */
.hero {
  position: relative;
  overflow: hidden;
  padding-top: clamp(56px, 9vw, 120px);
  padding-bottom: clamp(48px, 6vw, 80px);
}

.heroGlow {
  position: absolute;
  top: -280px;
  right: -180px;
  width: 720px;
  height: 720px;
  background: radial-gradient(circle, rgba(185, 141, 62, 0.14), transparent 60%);
  z-index: 0;
  pointer-events: none;
}

.heroInner {
  position: relative;
  z-index: 1;
  max-width: 940px;
}

.heroTitle {
  font-size: clamp(2.9rem, 6.4vw, 5.4rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
}

.heroTitle em {
  font-style: italic;
  color: var(--gold-deep);
}

.heroLede {
  margin-top: 28px;
  max-width: 56ch;
}

.heroActions {
  margin-top: 38px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.heroProof {
  margin-top: 44px;
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.stars {
  display: inline-flex;
  gap: 3px;
  color: var(--gold);
}

.proofText {
  font-size: 0.92rem;
  color: var(--muted);
}

.proofText strong {
  color: var(--ink);
  font-weight: 600;
}

.proofDivider {
  width: 1px;
  height: 30px;
  background: var(--line-strong);
}

/* --------------------------------------------------------- Marquee band */
.marqueeBand {
  padding-block: 40px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.marqueeLabel {
  text-align: center;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 28px;
}

/* --------------------------------------------------------- Value section */
.value {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
}

.valueBig {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.2vw, 2.9rem);
  line-height: 1.18;
  letter-spacing: -0.015em;
}

.valueBig .hl {
  color: var(--gold-deep);
}

.valueBody p {
  color: var(--ink-2);
  font-size: 1.08rem;
}

.valueBody p + p {
  margin-top: 1.2em;
}

/* --------------------------------------------------------- Services */
.serviceCard {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.serviceIndex {
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--gold-deep);
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.serviceCard h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.serviceCard p {
  color: var(--ink-2);
  font-size: 0.98rem;
  flex-grow: 1;
}

.serviceMeta {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 20px 0 22px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.serviceMetaFig {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--ink);
}

.serviceMetaLabel {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.3;
}

/* --------------------------------------------------------- Search stack */
.stack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 56px;
}

.stackCard {
  padding: 34px;
  border: 1px solid var(--charcoal-line);
  border-radius: var(--radius-lg);
  background: var(--charcoal-2);
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.stackCard:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
}

.stackAbbr {
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--gold-bright);
  line-height: 1;
}

.stackCard h3 {
  color: var(--on-dark);
  font-size: 1.25rem;
  margin: 16px 0 10px;
}

.stackCard p {
  color: var(--on-dark-muted);
  font-size: 0.95rem;
  margin: 0;
}

/* --------------------------------------------------------- Work preview */
.workGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.workCard {
  display: block;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
}

.workCard:hover {
  transform: translateY(-5px);
  border-color: var(--line-strong);
  box-shadow: 0 30px 60px -34px rgba(24, 20, 8, 0.45);
}

.workBanner {
  padding: 34px;
  color: #fff;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.workClient {
  font-family: var(--font-display);
  font-size: 1.7rem;
}

.workIndustry {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}

.workBody {
  padding: 26px 30px 30px;
}

.workTitle {
  font-family: var(--font-display);
  font-size: 1.3rem;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: 20px;
}

.workResults {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.workResult .rf {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--gold-deep);
}

.workResult .rl {
  font-size: 0.8rem;
  color: var(--muted);
}

/* --------------------------------------------------------- Testimonials */
.quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.quoteCard {
  padding: 34px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  display: flex;
  flex-direction: column;
}

.quoteMark {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 0.6;
  color: var(--gold);
  height: 28px;
}

.quoteText {
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--ink);
  flex-grow: 1;
}

.quoteName {
  font-weight: 600;
  color: var(--ink);
  font-size: 0.95rem;
}

.quoteRole {
  font-size: 0.85rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .value {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .stack,
  .quotes {
    grid-template-columns: 1fr;
  }
  .workGrid {
    grid-template-columns: 1fr;
  }
}
