import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // URL semplificato della mappa
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3054596008694!2d12.490412999999999!3d41.9021774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604f678640a9%3A0xcad165fa2036ce2c!2sColosseo!5e0!3m2!1sit!2sit!4v1691496572408!5m2!1sit!2sit";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMainRow}>
        {/* Versione Desktop: Dove Siamo - visibile solo su desktop */}
        {!isMobile && (
          <div className={styles.column}>
            <h3>Dove Siamo</h3>
            <img src={logo} alt="Vistamare Logo" className={styles.logoFooterMap} />
            <iframe
              title="Mappa"
              src={mapUrl}
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        {/* Contatti */}
        <div className={styles.column}>
          <h3>Contatti</h3>
          <p>Via Lungomare, 123</p>
          <p>Porto Elegante</p>
          <p>Tel. +39 012 345 6789</p>
          <p>Email: info@vistamare.it</p>
        </div>

        {/* Orari */}
        <div className={styles.column}>
          <h3>Orari</h3>
          <p>Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</p>
          <p>Sabato - Domenica: 12:00 - 15:00, 19:00 - 00:00</p>
        </div>

        {/* Mappa Mobile - con stile inline per forzare la visualizzazione */}
        {isMobile && (
          <div style={{
            gridColumn: '1 / 3',
            gridRow: '2',
            width: '80%',
            margin: '1.5rem auto',
            backgroundColor: '#fff',
            padding: '4px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}>
            <iframe
              title="Mappa Mobile"
              src={mapUrl}
              style={{
                width: '100%',
                height: '180px',
                border: '0',
                borderRadius: '8px',
                display: 'block',
                visibility: 'visible'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        {/* Versione Mobile: Logo e Social in riga */}
        {isMobile ? (
          <div style={{
            gridColumn: '1 / 3',
            gridRow: '3',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '1rem'
          }}>
            <img src={logo} alt="Vistamare Logo" style={{
              height: '45px',
              width: 'auto',
              filter: 'brightness(0) invert(1)'
            }} />
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <a href="#" aria-label="Instagram" style={{ color: '#cbd5e0', fontSize: '1.5rem' }}><FaInstagram /></a>
              <a href="#" aria-label="Facebook" style={{ color: '#cbd5e0', fontSize: '1.5rem' }}><FaFacebook /></a>
              <a href="#" aria-label="TripAdvisor" style={{ color: '#cbd5e0', fontSize: '1.5rem' }}><FaTripadvisor /></a>
              <a href="#" aria-label="WhatsApp" style={{ color: '#cbd5e0', fontSize: '1.5rem' }}><FaWhatsapp /></a>
            </div>
          </div>
        ) : (
          // Versione Desktop: Icone Social verticali
          <div className={styles.column}>
            <h3>Seguici</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="TripAdvisor"><FaTripadvisor /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        )}
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
