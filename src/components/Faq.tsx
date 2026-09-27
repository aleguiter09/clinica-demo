import { clinicConfig } from '../config/clinicConfig';
import styles from './Faq.module.css';

export function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas frecuentes</h2>
        <p className={styles.subtitle}>
          Resolvemos las dudas más habituales antes de tu primera visita.
        </p>
        <div className={styles.list}>
          {clinicConfig.faqs.map((faq, index) => (
            <details key={index} className={styles.item}>
              <summary className={styles.question}>
                {faq.question}
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className={styles.answer}>
                <p className={styles.answerContent}>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
