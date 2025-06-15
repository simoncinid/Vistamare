import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSlider.module.css';

/**
 * Full‑bleed slider con overlay testo + parallax zoom‑out.
 * Usa immagini 2.png (terrazza), 3.png (interno), 4.png (piatto).
 */
const slides = [
  { img: require('../assets/2.png'), title: 'Terrazza sul Mare', subtitle: 'Il cielo incontra le onde' },
  { img: require('../assets/3.png'), title: 'Eleganza Interna',   subtitle: 'Vista sconfinata sull’orizzonte' },
  { img: require('../assets/4.png'), title: 'Sapori d’Eccellenza', subtitle: 'La ricercatezza dei nostri piatti' }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex(i => (i + 1) % slides.length), []);
  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className={styles.hero}>
      <AnimatePresence>
        {slides.map((s, i) =>
          i === index && (
            <motion.div
              key={i}
              className={styles.slide}
              style={{ backgroundImage: `url(${s.img})` }}
              initial={{ opacity: 0, scale: 1.25 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <div className={styles.overlay}>
                <motion.h1
                  className={styles.title}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {s.title}
                </motion.h1>
                <motion.p
                  className={styles.subtitle}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {s.subtitle}
                </motion.p>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* bullets */}
      <div className={styles.bullets}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={i === index ? styles.bulletActive : styles.bullet}
            aria-label={`slide-${i}`}
          />
        ))}
      </div>

      {/* curva SVG che fonde con la sezione successiva */}
      <svg className={styles.wave} viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,120 C360,0 1080,0 1440,120 L1440,0 L0,0 Z" fill="#f5f9ff" />
      </svg>
    </section>
  );
}
