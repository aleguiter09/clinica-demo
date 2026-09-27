import { clinicConfig } from '../config/clinicConfig';
import styles from './Team.module.css';

export function Team() {
  return (
    <section className={styles.section} id="equipo">
      <div className={styles.container}>
        <h2 className={styles.title}>Equipo</h2>
        <p className={styles.subtitle}>
          Fisioterapeutas colegiados con enfoque personalizado y seguimiento cercano.
        </p>
        <div className={styles.grid}>
          {clinicConfig.team.map((member, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.avatar} aria-hidden="true">{member.initials}</div>
              <h3 className={styles.cardTitle}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.specialty}>{member.specialty}</p>
              <span className={styles.badge}>
                <svg className={styles.icon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                {member.registration}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
