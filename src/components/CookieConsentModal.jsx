import React, { useEffect, useState } from 'react';
import styles from './CookieConsentModal.module.css';

const COOKIE_KEY = 'cookie_consent_v1';

const CookieConsentModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <h2 id="cookie-title">Gestione Cookie</h2>
        <p>
          Questo sito utilizza cookie tecnici necessari al funzionamento e, previo tuo consenso, cookie di terze parti per finalità statistiche e di marketing.
          Per saperne di più consulta la nostra <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
        <div className={styles.buttonRow}>
          <button className={styles.accept} onClick={handleAccept}>Accetta tutti</button>
          <button className={styles.reject} onClick={handleReject}>Rifiuta non necessari</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal; 