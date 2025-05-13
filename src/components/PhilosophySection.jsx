import React, { useState, useEffect } from 'react';
import styles from './PhilosophySection.module.css';

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
        <img
          src={images[current]}
          alt={`Filosofia ${current + 1}`}
          className={styles.slideImage}
        />
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
          <h2 style={{ fontStyle: 'italic' }}>la nostra</h2>
          <h1 className={styles.filosofiaTitle}>filosofia</h1>
          <p>La nostra filosofia si basa su ingredienti locali e pesce fresco del giorno, selezionati con cura per garantire la massima qualità e sostenibilità. Ogni piatto racconta la nostra passione per l'autenticità e la tradizione culinaria.</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 