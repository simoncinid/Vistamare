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
      </div>
      <div className={styles.textPart}>
        <div className={styles.box}>
          <h2>LA NOSTRA FILOSOFIA</h2>
          <p>La nostra filosofia unisce ingredienti a km 0 e pescato fresco del giorno per valorizzare il territorio e il mare, garantendo freschezza, autenticità e varietà, con un impegno costante verso la sostenibilità per ridurre gli sprechi e rispettare l'ambiente.</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 