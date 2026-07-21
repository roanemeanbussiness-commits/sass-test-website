/**
 * TextureR wordmark. The mark is a small woven "texture" glyph; the wordmark
 * uses currentColor so it inverts cleanly on dark backgrounds, with the final
 * letter picked out in gold.
 */

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        lineHeight: 1,
      }}
    >
      <LogoMark />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "1.24rem",
          letterSpacing: "-0.02em",
          color: "currentColor",
        }}
      >
        Texture<span style={{ color: "var(--gold)" }}>R</span>
      </span>
    </span>
  );
}

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" />
      {/* Woven texture strokes in gold */}
      <path d="M9 15h22" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9 20h22" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M9 25h22" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.45" />
      <path d="M14 10v20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M26 10v20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>
  );
}
