.steps {
  max-width: 900px;
}

.step {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 34px;
}

.stepLeft {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--gold-deep);
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--surface);
}

.line {
  flex-grow: 1;
  width: 1px;
  background: var(--line);
  margin: 12px 0;
}

.step:last-child .line {
  display: none;
}

.stepBody {
  padding-bottom: 56px;
}

.step:last-child .stepBody {
  padding-bottom: 0;
}

.stepTitle {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  margin-bottom: 14px;
}

.stepText {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--ink-2);
  max-width: 60ch;
  margin-bottom: 22px;
}

.detail {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px 28px;
  flex-wrap: wrap;
}

.detail li {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--ink);
}

.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--gold-soft);
  color: var(--gold-deep);
  flex-shrink: 0;
}

/* Promise */
.promise {
  display: grid;
  gap: 44px;
}

.promiseCols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.promiseH {
  color: var(--on-dark);
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.promiseP {
  color: var(--on-dark-muted);
  margin: 0;
  font-size: 0.98rem;
}

@media (max-width: 760px) {
  .step {
    grid-template-columns: 62px 1fr;
    gap: 20px;
  }
  .num {
    width: 52px;
    height: 52px;
    font-size: 1.25rem;
  }
  .promiseCols {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
