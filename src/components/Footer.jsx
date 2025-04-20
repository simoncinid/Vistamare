import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Vistamare Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>Contatti</h3>
          <p>Via Lungomare, 123</p>
          <p>Porto Elegante</p>
          <p>Tel. +39 012 345 6789</p>
          <p>Email: info@vistamare.it</p>
        </div>

        <div className={styles.column}>
          <h3>Orari</h3>
          <p>Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</p>
          <p>Sabato - Domenica: 12:00 - 15:00, 19:00 - 00:00</p>
        </div>

        <div className={styles.column}>
          <h3>Seguici</h3>
          <div className={styles.socialLinks}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TripAdvisor</a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Vistamare. Tutti i diritti riservati.</p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Termini e Condizioni</a>
        </div>
      </div>
    </footer>
  );
}
