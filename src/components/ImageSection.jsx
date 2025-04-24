import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageSection.module.css';

import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import pattern from '../assets/pattern1.png';

export default function ImageSection() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <section className={styles.section}>
      <div 
        className={styles.imageContainer}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <img 
          src={img1} 
          alt="Immagine sinistra" 
          className={`${styles.image} ${hoverLeft ? styles.hidden : ''}`}
        />
        <div className={`${styles.overlay} ${hoverLeft ? styles.visible : ''}`}>
          <img src={pattern} alt="Pattern" className={styles.pattern} />
          <Link to="/menu" className={styles.text}>MENU</Link>
        </div>
      </div>
      <div 
        className={styles.imageContainer}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <img 
          src={img3} 
          alt="Immagine destra" 
          className={`${styles.image} ${hoverRight ? styles.hidden : ''}`}
        />
        <div className={`${styles.overlay} ${hoverRight ? styles.visible : ''}`}>
          <img src={pattern} alt="Pattern" className={styles.pattern} />
          <Link to="/esperienze" className={styles.text}>ESPERIENZE</Link>
        </div>
      </div>
    </section>
  );
} 