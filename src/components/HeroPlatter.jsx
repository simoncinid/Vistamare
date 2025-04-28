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

const setHeroRemoved = () => {
  try {
    localStorage.setItem('heroRemoved', 'true');
    
    // Forziamo un evento per notificare la Home che la hero è stata rimossa
    const event = new CustomEvent('heroRemoved');
    window.dispatchEvent(event);
    
    // Dopo aver rimosso l'hero, ricarica la pagina per garantire che la struttura sia corretta
    window.location.reload();
  } catch (e) {
    console.error('LocalStorage non disponibile:', e);
  }
};

export default function HeroPlatter() {
  const ref = useRef(null);
  const [rot,  setRot]  = useState(0);   // 0‑360°
  const [dark, setDark] = useState(0);   // 0‑0.9
  const [visible, setVisible] = useState(false);
  const [showPlates, setShowPlates] = useState(true);
  const [rotationCompleted, setRotationCompleted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  
  // Controlla se l'hero è già stata rimossa (controllo separato)
  useEffect(() => {
    try {
      const heroRemoved = localStorage.getItem('heroRemoved') === 'true';
      if (heroRemoved) {
        setShouldRender(false);
      }
    } catch (e) {
      console.error('LocalStorage non disponibile:', e);
    }
  }, []);
  
  // Effetto per gestire la rotazione e lo scorrimento
  useEffect(() => {
    if (!shouldRender) return; // Non facciamo nulla se non dobbiamo renderizzare
    
    const hero = ref.current;
    if (!hero) return; // Usciamo se l'hero è null
    
    const h = hero.offsetHeight;
    const vh = window.innerHeight;
    const originalOverflow = document.body.style.overflow;
    
    // Blocca lo scorrimento all'inizio
    document.body.style.overflow = 'hidden';
    
    // Gestione del wheel event per la rotazione
    const handleWheel = (e) => {
      if (!rotationCompleted) {
        e.preventDefault();
        
        // Incrementa la rotazione con lo scroll
        setRot(prev => {
          // Calcola nuova rotazione
          const newRot = prev + (e.deltaY > 0 ? 14 : -6);
          
          // Limita la rotazione tra 0 e 360 gradi
          const limitedRot = Math.max(0, Math.min(newRot, 360));
          
          // Se abbiamo raggiunto 360 gradi, completa la rotazione
          if (limitedRot >= 360 && !rotationCompleted) {
            setTimeout(() => {
              setShowPlates(false);
              setRotationCompleted(true);
              
              // Sblocca lo scorrimento
              document.body.style.overflow = 'auto';
              
              // Aspetta che i piatti scompaiano, poi rimuovi l'hero
              setTimeout(() => {
                setHeroRemoved();
              }, 500);
            }, 300);
          }
          
          return limitedRot;
        });
        
        // Aggiorna l'oscuramento in base alla rotazione
        setDark(Math.min(rot / 360 * 0.9, 0.9));
      }
    };
    
    // Imposta il listener per la rotellina del mouse
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup al dismount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = originalOverflow;
    };
  }, [rot, rotationCompleted, shouldRender]);

  // Se non dobbiamo renderizzare l'hero, returniamo null
  if (!shouldRender) {
    return null;
  }

  /* raggio dinamico: metà viewport – metà piatto (70 px) */
  const rX = `calc(50vw - 70px)`;
  const rY = `45vh`;                      // raggio verticale costante

  return (
    <section 
      ref={ref} 
      className={styles.hero}
      style={{ height: '295vh' }}
    >
      <div className={styles.bg} style={{ backgroundImage:`url(${bg})` }} />
      <div className={styles.overlay} style={{ opacity: dark }} />
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
