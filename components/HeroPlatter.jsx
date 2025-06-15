import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroPlatter.module.css';

// Immagini referenziate direttamente nel JSX

const PLATES = [
{ src: '/assets/7.png', angle:   0 },
{ src: '/assets/8.png', angle:  90 },
{ src: '/assets/9.png', angle: 180 },
{ src: '/assets/10.png', angle: 270 }
];

export default function HeroPlatter() {
  const ref = useRef(null);
  const [rot,  setRot]  = useState(0);   // 0‑360°
  const [dark, setDark] = useState(0);   // 0‑0.9
  const [showPlates, setShowPlates] = useState(true);
  const [rotationCompleted, setRotationCompleted] = useState(false);
  
  // Stato per gestire la visibilità dell'hero dopo la rotazione del dispositivo
  const [isVisible, setIsVisible] = useState(true);

  // Effetto per gestire la rotazione e lo scorrimento
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    
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
    
    // Gestione della rotazione del dispositivo
    const handleOrientationChange = () => {
      if (rotationCompleted) {
        // Se la rotazione è completata, nascondi completamente l'hero
        setIsVisible(false);
      }
    };
    
    // Imposta i listener
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Cleanup al dismount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [rot, rotationCompleted]);

  /* raggio dinamico: metà viewport – metà piatto (70 px) */
  const rX = `calc(50vw - 70px)`;
  const rY = `45vh`;                      // raggio verticale costante

  // Se non è visibile, non renderizzare nulla
  if (!isVisible && rotationCompleted) {
    return null;
  }

  return (
    <section 
      ref={ref} 
      className={styles.hero}
      style={{ 
        height: rotationCompleted ? '0' : '100vh',
        overflow: 'hidden',
        position: rotationCompleted ? 'absolute' : 'relative',
        zIndex: rotationCompleted ? -1 : 1,
        opacity: rotationCompleted ? 0 : 1,
        transition: 'opacity 0.5s ease, height 0.5s ease'
      }}
    >
      <div className={styles.bg} style={{ 
        backgroundImage:`url(/assets/2.png)`,
        position: rotationCompleted ? 'absolute' : 'fixed',
        zIndex: rotationCompleted ? -10 : -2
      }} />
      <div className={styles.overlay} style={{ 
        opacity: rotationCompleted ? 0 : dark,
        position: rotationCompleted ? 'absolute' : 'fixed',
        zIndex: rotationCompleted ? -9 : -1
      }} />
      <div
        className={styles.circle}
        style={{ 
          transform:`translate(-50%,-50%) rotate(${rot}deg)`,
          opacity: rot >= 10 ? 1 : 0,
          display: showPlates ? 'block' : 'none',
          position: rotationCompleted ? 'absolute' : 'fixed',
          zIndex: rotationCompleted ? -8 : 'auto'
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
