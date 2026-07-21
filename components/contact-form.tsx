"use client";

import { useState } from "react";
import { ArrowRight, Check } from "./icons";
import { plans } from "@/lib/data";
import styles from "./contact-form.module.css";

/**
 * Front-end contact form. On a static export there's no server to receive the
 * post, so we show an immediate confirmation. To make it live, point the
 * onSubmit handler at a form endpoint (Formspree, Basin, a serverless function,
 * etc.) — the markup is already labelled and accessible.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Check size={26} />
        </span>
        <h3>Thanks — we&rsquo;ll be in touch.</h3>
        <p>
          A strategist will reach out within one business day to book your
          discovery call. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.row}>
        <Field id="name" label="Full name" autoComplete="name" required />
        <Field id="email" label="Work email" type="email" autoComplete="email" required />
      </div>
      <div className={styles.row}>
        <Field id="company" label="Company" autoComplete="organization" required />
        <Field id="website" label="Website" type="url" placeholder="https://" />
      </div>

      <div className={styles.field}>
        <label htmlFor="budget" className={styles.label}>
          Monthly budget
        </label>
        <div className={styles.selectWrap}>
          <select id="budget" name="budget" className={styles.select} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {plans.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} — {p.price}
                {p.cadence}
              </option>
            ))}
            <option value="custom">Custom / not sure yet</option>
          </select>
          <svg width="12" height="12" viewBox="0 0 12 12" className={styles.selectCaret} aria-hidden="true">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          What are you trying to scale?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.textarea}
          placeholder="Tell us about your business, your goals and where growth is stuck."
          required
        />
      </div>

      <button type="submit" className="btn btn-gold btn-lg">
        Request my discovery call
        <ArrowRight />
      </button>
      <p className={styles.fineprint}>
        No obligation. We&rsquo;ll review your business and come prepared with a
        point of view.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.req} aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
