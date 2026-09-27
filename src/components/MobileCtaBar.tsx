import { clinicConfig } from '../config/clinicConfig';
import styles from './MobileCtaBar.module.css';

export function MobileCtaBar() {
  return (
    <div className={styles.bar} role="navigation" aria-label="Acciones rápidas">
      <a className={`${styles.btn} ${styles.btnCall}`} href={`tel:${clinicConfig.contact.phone}`}>
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"/>
        </svg>
        Llamar
      </a>
      <a className={`${styles.btn} ${styles.btnWhatsapp}`} href={clinicConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
