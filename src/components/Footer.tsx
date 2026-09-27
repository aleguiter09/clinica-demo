import { clinicConfig } from '../config/clinicConfig';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p><strong>{clinicConfig.name}</strong></p>
      <p>{clinicConfig.neighborhood} · {clinicConfig.city}</p>
      <p>
        <a href={clinicConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        {' · '}
        <a href={`tel:${clinicConfig.contact.phone}`}>{clinicConfig.contact.phoneDisplay}</a>
        {' · '}
        <a href={`mailto:${clinicConfig.contact.email}`}>{clinicConfig.contact.email}</a>
      </p>
      <p className={styles.caption}>Demo · landing genérica para cold outreach</p>
    </footer>
  );
}
