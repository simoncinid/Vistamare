import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReservationForm from '../components/ReservationForm';

/* immagini locali */
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

import styles from './Home.module.css';

export default function Home() {
  /* parallax leggero */
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.page}>

      {/* ---------- HERO ---------- */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${img2})`,
            transform: `translateY(${offset * 0.2}px)`
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className={styles.heroOverlay}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Vistamare
          </motion.h1>

          <motion.p
            className={styles.heroSlogan}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            «Tra cielo e onde, il sapore dell’eleganza»
          </motion.p>
        </div>

        {/* Onda che fonde con la sezione successiva */}
        <svg className={styles.wave} viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,120 C360,0 1080,0 1440,120 L1440,0 L0,0 Z"
            fill="#f5f9ff"
          />
        </svg>
      </section>

      {/* ---------- FORM PRENOTAZIONE ---------- */}
      <section className={styles.formSection}>
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ReservationForm />
        </motion.div>
      </section>

      {/* ---------- INDIRIZZO & PARCHEGGIO ---------- */}
      <section className={styles.addressSection}>
        <motion.div
          className={styles.infoBlock}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Indirizzo &amp; Parcheggio</h2>
          <p className={styles.sectionText}>
            Via Lungomare 123, Castiglioncello (LI)<br />
            Ampio parcheggio custodito di fronte all’ingresso; servizio valet disponibile.
          </p>
        </motion.div>

        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={img3} alt="Parcheggio Vistamare" />
        </motion.div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section className={styles.locationSection}>
        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={img4} alt="Terrazza sul Mare" />
        </motion.div>

        <motion.div
          className={styles.infoBlock}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>La Location</h2>
          <p className={styles.sectionText}>
            Un’esclusiva terrazza sospesa sul mare, tra luci cangianti e profumi
            mediterranei. Atmosfera raccolta, vista panoramica e arredi sofisticati.
          </p>
        </motion.div>
      </section>

      {/* ---------- FILOSOFIA ---------- */}
      <section className={styles.philosophySection}>
        <motion.div
          className={styles.philosophyBackground}
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className={styles.philosophyContent}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>La Nostra Filosofia</h2>
          <p className={styles.sectionText}>
            Valorizziamo il territorio con ingredienti d’eccellenza, sostenibilità
            e creatività. Ogni piatto è un’opera d’arte, ogni dettaglio un’emozione
            da vivere in armonia col mare.
          </p>
        </motion.div>

        <div className={styles.philosophyImages}>
          <motion.img
            src={img5}
            alt="Esperienza Vistamare"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={img6}
            alt="Dettagli di Mare"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </section>
    </div>
  );
}
