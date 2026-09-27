import { clinicConfig } from '../config/clinicConfig';
import styles from './Services.module.css';

export function Services() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <h2 className={styles.title}>Servicios</h2>
        <p className={styles.subtitle}>
          Tratamientos orientados a tu motivo de consulta, con técnica manual y ejercicio terapéutico.
        </p>
        <div className={styles.grid}>
          {clinicConfig.services.map((service, index) => (
            <article key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
