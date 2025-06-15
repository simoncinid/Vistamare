import React from 'react';
import styles from './HeroPlatter.module.css';
// Background referenziato direttamente nel JSX

export default function HeroStatic() {
  return (
    <section className={styles.hero} style={{ height: '100vh' }}>
      <div className={styles.bg} style={{ backgroundImage:`url(/assets/2.png)` }} />
    </section>
  );
} 