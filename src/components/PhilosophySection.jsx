import React, { useState, useEffect } from 'react';
import styles from './PhilosophySection.module.css';
import ScrollReveal from './ScrollReveal';

import filosofia1 from '../assets/filosofia1.png';
import filosofia2 from '../assets/filosofia2.png';
import filosofia3 from '../assets/filosofia3.png';
import filosofia4 from '../assets/filosofia4.png';

const PhilosophySection = () => {
  const images = [filosofia1, filosofia2, filosofia3, filosofia4];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.philosophy}>
      <div className={styles.imagePart}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <img 
              src={image} 
              alt={`Filosofia ${index + 1}`} 
              className={styles.slideImage} 
            />
          </div>
        ))}
        <button 
          className={styles.prevButton} 
          onClick={prevSlide}
          aria-label="Immagine precedente"
        >
          <span className={styles.arrow}>←</span>
        </button>
        <button 
          className={styles.nextButton} 
          onClick={nextSlide}
          aria-label="Immagine successiva"
        >
          <span className={styles.arrow}>→</span>
        </button>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === current ? styles.active : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Vai all'immagine ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.textPart}>
        <div className={styles.box}>
          <h2 style={{ fontStyle: 'roboto sans-serif', textTransform: 'uppercase', paddingBottom: '0rem', lineHeight: '0.3'  }}>la nostra</h2>
          <h1 className={styles.filosofiaTitle}>filosofia</h1>
          <ScrollReveal delay={150}>
            <p>Scegliamo ingredienti <span className={styles.highlight}>locali</span> e <span className={styles.highlight}>biologici</span>, seguendo la stagionalità,
              dal pescato fresco alla frutta e verdura di stagione,
              sostenendo i piccoli produttori del territorio e proponendo un menù <span className={styles.highlight}>essenziale</span>, ma genuino.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 