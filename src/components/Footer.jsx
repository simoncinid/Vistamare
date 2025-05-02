import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaTripadvisor } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMainRow}>
        <div className={styles.column}>
          <h3>Dove Siamo</h3>
          <img src={logo} alt="Vistamare Logo" className={styles.logoFooterMap} />
          <iframe
            title="Mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155718942!2d-73.9856644!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

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
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="TripAdvisor"><FaTripadvisor /></a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBarFull}>
        <p>&copy; {new Date().getFullYear()} Vistamare. Tutti i diritti riservati.</p>
        <div className={styles.legalLinksFull}>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Termini e Condizioni</a>
        </div>
      </div>
    </footer>
  );
}
