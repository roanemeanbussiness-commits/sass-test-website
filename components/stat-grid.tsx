import styles from "./stat-grid.module.css";

type Stat = { figure: string; label: string };

/** A row of large display statistics separated by hairlines. */
export function StatGrid({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <div className={`${styles.grid} ${dark ? "" : ""}`} data-count={stats.length}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <div className="stat-figure">{s.figure}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
