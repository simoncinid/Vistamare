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
  const [showPlates, setShowPlates] = useState(true);
  const [rotationCompleted, setRotationCompleted] = useState(false);
  
  console.log('HeroPlatter renderizzato'); // Debug

  // Effetto per gestire la rotazione e lo scorrimento
  useEffect(() => {
    const hero = ref.current;
    if (!hero) {
      console.log('Hero ref non trovato'); // Debug
      return;
    }
    
    console.log('Hero ref trovato:', hero); // Debug
    
    // Gestione del wheel event per la rotazione
    const handleWheel = (e) => {
      if (!rotationCompleted) {
        e.preventDefault();
        
        // Incrementa la rotazione con lo scroll
        setRot(prev => {
          // Calcola nuova rotazione
          const newRot = prev + (e.deltaY > 0 ? 13 : -6);
          
          // Limita la rotazione tra 0 e 360 gradi
          const limitedRot = Math.max(0, Math.min(newRot, 360));
          
          // Se abbiamo raggiunto 360 gradi, completa la rotazione
          if (limitedRot >= 360 && !rotationCompleted) {
            setTimeout(() => {
              setShowPlates(false);
              setRotationCompleted(true);
            }, 300);
          }
          
          return limitedRot;
        });
        
        // Aggiorna l'oscuramento in base alla rotazione solo se non è stata completata
        if (!rotationCompleted) {
          setDark(Math.min(rot / 360 * 0.9, 0.9));
        }
      }
    };
    
    // Imposta il listener per la rotellina del mouse
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup al dismount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [rot, rotationCompleted]);

  /* raggio dinamico: metà viewport – metà piatto (70 px) */
  const rX = `calc(50vw - 70px)`;
  const rY = `45vh`;                      // raggio verticale costante

  return (
    <section 
      ref={ref} 
      className={styles.hero}
      style={{ height: '100vh' }}
    >
      <div className={styles.bg} style={{ backgroundImage:`url(${bg})` }} />
      <div className={styles.overlay} style={{ opacity: rotationCompleted ? 0 : dark }} />
      <div
        className={styles.circle}
        style={{ 
          transform:`translate(-50%,-50%) rotate(${rot}deg)`,
          opacity: rot >= 10 ? 1 : 0,
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
