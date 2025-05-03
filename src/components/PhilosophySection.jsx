import React, { useState, useEffect } from 'react';
import styles from './PhilosophySection.module.css';

import filosofia1 from '../assets/filosofia1.png';
import filosofia2 from '../assets/filosofia2.png';
import filosofia3 from '../assets/filosofia3.png';
import filosofia4 from '../assets/filosofia4.png';

const PhilosophySection = () => {
  const images = [filosofia1, filosofia2, filosofia3, filosofia4];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % images.length), 3000);
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
          <p>La nostra filosofia unisce <span className={styles.highlight}>ingredienti</span> a km 0 e pescato fresco del giorno per valorizzare il territorio e il mare, garantendo <span className={styles.highlight}>freschezza</span>, autenticità e varietà, con un impegno costante verso la <span className={styles.highlight}>sostenibilità</span> per ridurre gli sprechi e rispettare l'ambiente.</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 