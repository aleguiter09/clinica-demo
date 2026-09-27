import { clinicConfig } from '../config/clinicConfig';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="#inicio" className={styles.logo}>
          {clinicConfig.name}
        </a>
        <nav className={styles.nav}>
          <a href="#servicios" className={styles.navLink}>Servicios</a>
          <a href="#tarifas" className={styles.navLink}>Tarifas</a>
          <a href="#equipo" className={styles.navLink}>Equipo</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
          <a href="#ubicacion" className={styles.navLink}>Ubicación</a>
        </nav>
        <a className={styles.phone} href={`tel:${clinicConfig.contact.phone}`} aria-label="Llamar">
          <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"/>
          </svg>
          {clinicConfig.contact.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
