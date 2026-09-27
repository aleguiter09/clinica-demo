import { clinicConfig } from '../config/clinicConfig';
import styles from './Location.module.css';

export function Location() {
  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        <h2 className={styles.title}>Ubicación y horarios</h2>
        <p className={styles.subtitle}>
          Estamos en {clinicConfig.neighborhood}, {clinicConfig.city}. Fácil acceso en transporte público.
        </p>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className={styles.cardTitle}>Contacto</h3>
              </div>
              <div className={styles.details}>
                <p>{clinicConfig.address.fullAddress}</p>
                <p>Tel: <a href={`tel:${clinicConfig.contact.phone}`}>{clinicConfig.contact.phoneDisplay}</a></p>
                <p>Email: <a href={`mailto:${clinicConfig.contact.email}`}>{clinicConfig.contact.email}</a></p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 className={styles.cardTitle}>Horarios</h3>
              </div>
              <div className={styles.hours}>
                {clinicConfig.hours.map((schedule, index) => (
                  <div key={index} className={styles.hoursRow}>
                    <span>{schedule.days}</span>
                    <strong>{schedule.hours}</strong>
                  </div>
                ))}
              </div>
            </div>
            <a className={styles.btn} href={clinicConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Cómo llegar
            </a>
          </div>
          <div className={styles.map}>
            <iframe
              title={`Mapa de ${clinicConfig.name}`}
              src={clinicConfig.mapUrl}
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
