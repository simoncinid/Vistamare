import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroPlatter.module.css';

import bg   from '../assets/2.png';
import pN   from '../assets/7.png';
import pW   from '../assets/8.png';
import pS   from '../assets/9.png';
import pE   from '../assets/10.png';

const PLATES = [
  { src: pN, angle:   0 },
  { src: pW, angle:  90 },
  { src: pS, angle: 180 },
  { src: pE, angle: 270 }
];

export default function HeroPlatter() {
  const ref = useRef(null);
  const [rot,  setRot]  = useState(0);   // 0‑360°
  const [dark, setDark] = useState(0);   // 0‑0.9
  const [visible, setVisible] = useState(false);
  const [showPlates, setShowPlates] = useState(true);

  useEffect(() => {
    const hero = ref.current;
    const h    = hero.offsetHeight;        // 295vh
    const vh   = window.innerHeight;

    const onScroll = () => {
      const t   = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), h - vh);
      const p   = t / (h - vh);            // 0‑1
      
      // Attiva l'animazione solo dopo il primo scroll
      if (t > 0) {
        setVisible(true);
      }
      
      // Calcola la rotazione fino a 295 gradi
      const maxRotation = 295;
      const currentRotation = Math.min(p * 360, maxRotation);
      
      // Se abbiamo raggiunto la rotazione massima, nascondi i piatti
      if (currentRotation >= maxRotation) {
        setShowPlates(false);
      } else {
        setShowPlates(true);
      }
      
      setRot(currentRotation);
      setDark(Math.min(p * .9, .9));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* raggio dinamico: metà viewport – metà piatto (70 px) */
  const rX = `calc(50vw - 70px)`;
  const rY = `45vh`;                      // raggio verticale costante

  return (
    <section 
      ref={ref} 
      className={styles.hero}
      style={{ height: rot >= 295 ? '100vh' : '295vh' }}
    >
      <div className={styles.bg} style={{ backgroundImage:`url(${bg})` }} />
      <div className={styles.overlay} style={{ opacity: dark }} />
      <div
        className={styles.circle}
        style={{ 
          transform:`translate(-50%,-50%) rotate(${rot}deg)`,
          opacity: visible ? 1 : 0,
          display: showPlates ? 'block' : 'none'
        }}
      >
        {PLATES.map(({ src, angle }) => (
          <img
            key={angle}
            src={src}
            alt=""
            className={styles.plate}
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translate(${rX}, -${rY})
                rotate(${-angle - rot}deg)
              `
            }}
          />
        ))}
      </div>
    </section>
  );
}
