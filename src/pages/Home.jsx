// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ReservationForm from '../components/ReservationForm';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.hero}
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?beach,restaurant')" }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className={styles.overlay}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Benvenuti a Vistamare
          </motion.h1>
        </div>
      </motion.div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.block}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>La Location</h2>
          <p className={styles.text}>
            Situato sul promontorio di Porto Elegante, Vistamare offre una vista mozzafiato sull’orizzonte...
          </p>
        </motion.div>

        <motion.div
          className={styles.block}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Parcheggio e Servizi</h2>
          <p className={styles.text}>
            Posti auto custoditi, valet service e navetta gratuita per il centro città...
          </p>
        </motion.div>

        <motion.div
          className={styles.block}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Filosofia</h2>
          <p className={styles.text}>
            Ingredienti locali, sostenibilità e creatività si incontrano in un’esperienza sensoriale unica...
          </p>
        </motion.div>

        <ReservationForm />
      </div>
    </section>
  );
}
