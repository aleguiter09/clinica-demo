import { clinicConfig } from '../config/clinicConfig';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <div className={styles.badge}>
          <span aria-hidden="true">⭐</span>
          <span>{clinicConfig.googleRating.stars} en Google Maps (+{clinicConfig.googleRating.reviews} opiniones)</span>
        </div>
        <p className={styles.tagline}>Tratamiento personalizado cerca de ti</p>
        <h1 className={styles.title}>Recupera movilidad y alivia el dolor</h1>
        <p className={styles.subtitle}>
          Fisioterapia con atención individualizada en {clinicConfig.neighborhood}. Plan a medida, seguimiento cercano y respuesta rápida por WhatsApp.
        </p>
        <div className={styles.buttons}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href={clinicConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Pedir cita por WhatsApp
          </a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="#servicios">Ver servicios</a>
        </div>
        <p className={styles.microcopy}>Respuesta habitual en menos de 15 min • Sin compromiso</p>
      </div>
    </section>
  );
}
