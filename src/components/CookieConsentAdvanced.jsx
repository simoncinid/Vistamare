import React, { useEffect, useState } from 'react';
import styles from './CookieConsentModal.module.css';

const COOKIE_KEY = 'cookie_consent_v2';

const defaultPrefs = {
  technical: true,
  marketing: false,
};

const CookieConsentAdvanced = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (saved) {
      setPrefs(JSON.parse(saved));
    } else {
      setOpen(true);
    }
  }, []);

  // Carica script di terze parti solo se consentito
  useEffect(() => {
    // Qui puoi aggiungere script per marketing
    // Esempio: if (prefs.marketing) { ... }
  }, [prefs.marketing]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPrefs((prev) => ({ ...prev, [name]: checked }));
  };

  const savePrefs = (newPrefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    setOpen(false);
  };

  const handleAcceptAll = () => {
    const all = { technical: true, marketing: true };
    savePrefs(all);
  };

  const handleRejectAll = () => {
    const none = { technical: true, marketing: false };
    savePrefs(none);
  };

  const handleSave = () => {
    savePrefs(prefs);
  };

  // Per il link nel footer
  useEffect(() => {
    window.openCookieModal = () => setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <h2 id="cookie-title">Gestione Cookie</h2>
        <p>
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie per finalità di marketing.<br />
          <a href="/cookiepolicy" target="_blank" rel="noopener noreferrer">Leggi la Privacy Policy</a>
        </p>
        <form className={styles.cookieForm}>
          <div className={styles.cookieRow}>
            <input type="checkbox" checked disabled id="technical" />
            <label htmlFor="technical"><b>Tecnici necessari</b> (sempre attivi)</label>
          </div>
          <div className={styles.cookieRow}>
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={prefs.marketing}
              onChange={handleChange}
            />
            <label htmlFor="marketing"><b>Marketing</b> (es. Facebook Pixel, Google Ads)</label>
          </div>
        </form>
        <div className={styles.buttonRow}>
          <button className={styles.accept} onClick={handleAcceptAll} type="button">Accetta tutti</button>
          <button className={styles.reject} onClick={handleRejectAll} type="button">Rifiuta tutti</button>
          <button className={styles.save} onClick={handleSave} type="button">Accetta selezionati</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentAdvanced; 