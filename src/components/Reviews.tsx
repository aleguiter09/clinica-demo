import { useEffect, useRef, useState } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import styles from './Reviews.module.css';

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(`.${styles.card}`));

    const updateDots = () => {
      const trackRect = track.getBoundingClientRect();
      const mid = trackRect.left + trackRect.width / 2;
      
      let bestIndex = 0;
      let bestDist = Infinity;

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - mid);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActiveIndex(bestIndex);
    };

    track.addEventListener('scroll', updateDots, { passive: true });
    updateDots();

    return () => {
      track.removeEventListener('scroll', updateDots);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(`.${styles.card}`));
    const card = cards[index];
    if (!card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - trackRect.left + track.scrollLeft - (trackRect.width - cardRect.width) / 2;

    track.scrollTo({
      left: offset,
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToCard(newIndex);
  };

  const scrollNext = () => {
    const newIndex = Math.min(clinicConfig.reviews.length - 1, activeIndex + 1);
    scrollToCard(newIndex);
  };

  return (
    <section className={styles.section} id="opiniones">
      <div className={styles.container}>
        <h2 className={styles.title}>Lo que dicen los pacientes</h2>
        <p className={styles.subtitle}>
          Citas de ejemplo (ficticias) para mostrar el formato de la sección.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.viewport}>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={scrollPrev}
            aria-label="Opinión anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className={styles.track} ref={trackRef}>
            {clinicConfig.reviews.map((review, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.stars} aria-label={`Valoración ${review.stars} de 5`}>
                  {'★'.repeat(review.stars)}
                </div>
                <p className={styles.quote}>{review.quote}</p>
                <p className={styles.author}>{review.author}</p>
                <p className={styles.date}>{review.date}</p>
              </article>
            ))}
          </div>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={scrollNext}
            aria-label="Siguiente opinión"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className={styles.dots} role="tablist" aria-label="Navegación de opiniones">
          {clinicConfig.reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Opinión ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
