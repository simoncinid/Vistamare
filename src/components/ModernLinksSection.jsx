import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ModernLinksSection.module.css';
import { FaUtensils, FaStar } from 'react-icons/fa';
import img1 from '../assets/1.png';
import img3 from '../assets/15.png';

export default function ModernLinksSection() {
  const location = useLocation();
  return (
    <section className={styles.modernSection}>
      <a
        href="/menu"
        className={`${styles.card} ${location.pathname === '/menu' ? styles.active : ''}`}
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className={styles.cardOverlay}></div>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper}>
            <FaUtensils className={styles.icon} />
          </div>
          <h2 className={styles.title}>i Menù</h2>
          <p className={styles.desc}>Scopri i nostri piatti e lasciati ispirare dal gusto.</p>
        </div>
      </a>
      <a
        href="/esperienze"
        className={`${styles.card} ${location.pathname === '/esperienze' ? styles.active : ''}`}
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className={styles.cardOverlay}></div>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper}>
            <FaStar className={styles.icon} />
          </div>
          <h2 className={styles.title}>wine list</h2>
          <p className={styles.desc}>Vivi emozioni uniche tra mare, sapori e accoglienza.</p>
        </div>
      </a>
    </section>
  );
} 