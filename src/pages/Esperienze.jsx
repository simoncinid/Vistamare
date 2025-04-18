// src/pages/Esperienze.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Esperienze.module.css';

const experiences = [
  {
    title: 'Degustazione Vista Mare',
    price: '90€',
    img: 'https://source.unsplash.com/400x400/?degustation',
    desc: 'Sei portate scelte dallo chef per un viaggio sensoriale indimenticabile.'
  },
];

const wines = [
  { name: 'Chardonnay Riserva', year: '2018', img: 'https://source.unsplash.com/200x200/?wine', price: '60€' },
  { name: 'Rosso del Sud', year: '2017', img: 'https://source.unsplash.com/200x200/?red,wine', price: '55€' },
  { name: 'Bollicine Blu', year: '2020', img: 'https://source.unsplash.com/200x200/?sparkling,wine', price: '70€' },
];

export default function Esperienze() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        {/* Esperienze */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.experiences}
        >
          <h1 className={styles.title}>Le Nostre Esperienze</h1>
          <div className={styles.gridExperiences}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={styles.experienceCard}
              >
                <div
                  className={styles.experienceImage}
                  style={{ backgroundImage: `url('${exp.img}')` }}
                />
                <div className={styles.experienceContent}>
                  <h2 className={styles.expTitle}>{exp.title}</h2>
                  <p className={styles.expPrice}>{exp.price} a testa</p>
                  <p className={styles.expDesc}>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cantina */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.wineSection}
        >
          <h2 className={styles.subtitle}>La Cantina</h2>
          <div className={styles.gridWines}>
            {wines.map((w, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: -1 }}
                className={styles.wineCard}
              >
                <img src={w.img} alt={w.name} className={styles.wineImg} />
                <div className={styles.wineContent}>
                  <h3 className={styles.wineTitle}>
                    {w.name} <span className={styles.wineYear}>({w.year})</span>
                  </h3>
                  <p className={styles.winePrice}>{w.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
