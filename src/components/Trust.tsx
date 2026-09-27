import styles from './Trust.module.css';

export function Trust() {
  return (
    <section className={styles.trust}>
      <div className={styles.content}>
        <h2 className={styles.title}>Tu recuperación, en buenas manos</h2>
        <p className={styles.subtitle}>
          Valoración inicial, tratamiento presencial y seguimiento cercano. Enfoque práctico y transparente en cada sesión.
        </p>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className={styles.badgeText}>Atención 1:1</span>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span className={styles.badgeText}>Citas flexibles</span>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <span className={styles.badgeText}>Plan a medida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
