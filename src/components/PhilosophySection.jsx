import React from 'react';
import styles from './PhilosophySection.module.css';

const PhilosophySection = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.content}>
        <h2 className={styles.title}>LA NOSTRA FILOSOFIA</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/assets/km0.png" alt="Km 0" className={styles.cardImage} />
            <h3>Km 0</h3>
            <p>
              Ogni ingrediente racconta una storia di territorio. Lavoriamo esclusivamente con 
              produttori locali, garantendo la freschezza e la qualità dei nostri piatti, 
              riducendo al minimo l'impatto ambientale.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/km02.png" alt="Pesce del Giorno" className={styles.cardImage} />
            <h3>Pesce del Giorno</h3>
            <p>
              Il nostro menu è un omaggio al mare. Ogni giorno, basiamo le nostre creazioni 
              sul pescato fresco del mattino, offrendo un'esperienza culinaria sempre diversa 
              e autentica.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/km03.png" alt="Sostenibilità" className={styles.cardImage} />
            <h3>Sostenibilità</h3>
            <p>
              Rispettiamo il mare e i suoi ritmi. Utilizziamo tecniche di pesca sostenibili 
              e ci impegniamo a ridurre gli sprechi, trasformando ogni scarto in una nuova 
              opportunità creativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection; 