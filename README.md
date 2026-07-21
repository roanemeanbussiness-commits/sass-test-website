.hero {
  padding-top: clamp(48px, 7vw, 92px);
  padding-bottom: clamp(32px, 4vw, 52px);
  border-bottom: 1px solid var(--line);
}

.crumbs {
  margin-bottom: 34px;
}

.crumbs ol {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  color: var(--muted);
}

.crumbs li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.crumbs a {
  color: var(--muted);
  transition: color 0.2s var(--ease);
}

.crumbs a:hover {
  color: var(--gold-deep);
}

.crumbs span[aria-current] {
  color: var(--ink-2);
}

.sep {
  color: var(--line-strong);
}

.inner {
  max-width: 860px;
}

.center {
  margin-inline: auto;
  text-align: center;
}

.center .lede {
  margin-inline: auto;
}

.title {
  font-size: clamp(2.4rem, 5vw, 4rem);
}
