import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageSection.module.css';

import img1 from '../assets/1.png';
import img3 from '../assets/3.png';

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
        <div 
          className={`${styles.imageBackground} ${hoverLeft ? styles.imageHovered : ''}`}
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className={`${styles.overlay} ${hoverLeft ? styles.visible : ''}`}>
          <Link to="/menu" className={styles.text}>Menù</Link>
        </div>
      </div>
      <div 
        className={styles.imageContainer}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <div 
          className={`${styles.imageBackground} ${hoverRight ? styles.imageHovered : ''}`}
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div className={`${styles.overlay} ${hoverRight ? styles.visible : ''}`}>
          <Link to="/esperienze" className={styles.text}>Esperienze</Link>
        </div>
      </div>
    </section>
  );
} 