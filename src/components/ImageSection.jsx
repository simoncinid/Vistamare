import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageSection.module.css';

import img1 from '../assets/1.png';
import img3 from '../assets/15.png';

export default function ImageSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.section}>
      <div 
        className={styles.imageContainer}
        onMouseEnter={() => !isMobile && setHoverLeft(true)}
        onMouseLeave={() => !isMobile && setHoverLeft(false)}
      >
        <div 
          className={
            styles.imageBackground +
            (hoverLeft && !isMobile ? ' ' + styles.imageHovered : '')
          }
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className={
          styles.overlay +
          ((isMobile || hoverLeft) ? ' ' + styles.visible : '')
        }>
          {/*<Link to="/menu" className={styles.text + ' ' + styles.textMobile + ' ' + styles.underlineMobile} tabIndex={0}>Menù</Link>*/}
          <a 
          href="/menu" 
          className={`${styles.text + ' ' + styles.textMobile + ' ' + styles.underlineMobile} ${location.pathname === '/menu' ? styles.active : ''}`}
        >
          Menù
        </a>
        </div>
      </div>
      <div 
        className={styles.imageContainer}
        onMouseEnter={() => !isMobile && setHoverRight(true)}
        onMouseLeave={() => !isMobile && setHoverRight(false)}
      >
        <div 
          className={
            styles.imageBackground +
            (hoverRight && !isMobile ? ' ' + styles.imageHovered : '')
          }
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div className={
          styles.overlay +
          ((isMobile || hoverRight) ? ' ' + styles.visible : '')
        }>
          {/*<Link to="/esperienze" className={styles.text + ' ' + styles.textMobile + ' ' + styles.underlineMobile} tabIndex={0}>Esperienze</Link>*/}
          <a 
          href="/wine-list" 
          className={`${styles.text + ' ' + styles.textMobile + ' ' + styles.underlineMobile} ${location.pathname === '/wine-list' ? styles.active : ''}`}
        >
          wine-list
        </a>
        </div>
      </div>
    </section>
  );

  
} 