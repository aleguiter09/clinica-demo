import { clinicConfig } from '../config/clinicConfig';
import styles from './Pricing.module.css';

export function Pricing() {
  return (
    <section className={styles.section} id="tarifas">
      <div className={styles.container}>
        <h2 className={styles.title}>Tarifas</h2>
        <p className={styles.subtitle}>
          Precios orientativos. Confirma disponibilidad y detalle por WhatsApp.
        </p>
        <div className={styles.grid}>
          {clinicConfig.pricing.map((item, index) => (
            <article key={index} className={`${styles.card} ${item.featured ? styles.featured : ''}`}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.duration}>{item.duration}</p>
              <p className={styles.price}>{item.price}</p>
              <p className={styles.note}>{item.note}</p>
              <a className={styles.btn} href={clinicConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {index === 2 ? 'Consultar' : 'Pedir cita'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
