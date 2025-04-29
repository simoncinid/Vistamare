import React from 'react';
import styles from './HeroPlatter.module.css';
import bg from '../assets/2.png';

export default function HeroStatic() {
  return (
    <section className={styles.hero} style={{ height: '100vh' }}>
      <div className={styles.bg} style={{ backgroundImage:`url(${bg})` }} />
    </section>
  );
} 