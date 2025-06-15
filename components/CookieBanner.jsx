import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieContent}>
        <h3>Informativa sui Cookie</h3>
        <p>
          Questo sito utilizza cookie tecnici necessari al funzionamento del sito e cookie analitici per migliorare la tua esperienza. 
          Puoi accettare tutti i cookie o gestire le tue preferenze. Per maggiori informazioni, consulta la nostra Cookie Policy.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Accetta tutti
          </button>
          <button onClick={handleReject} className={styles.rejectButton}>
            Rifiuta non necessari
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 