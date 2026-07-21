"use client";

import { useState } from "react";
import { Plus, Minus } from "./icons";
import styles from "./faq-accordion.module.css";

type QA = { q: string; a: string };

export function FaqAccordion({ items, defaultOpen = 0 }: { items: QA[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <h3 className={styles.qWrap}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  {isOpen ? <Minus /> : <Plus />}
                </span>
              </button>
            </h3>
            <div className={styles.answer} hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
