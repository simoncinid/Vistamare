import React, { useEffect, useState } from 'react';
import styles from './CookieConsentModal.module.css';

const COOKIE_KEY = 'cookie_consent_v2';

const defaultPrefs = {
  technical: true,  // Sempre attivi
  analytics: false, // Google Analytics, etc.
  marketing: false, // Marketing e profilazione
};

const CookieConsentAdvanced = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (saved) {
      setPrefs(JSON.parse(saved));
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    // Gestione cookie analytics
    if (prefs.analytics) {
      // Qui inserire il codice per attivare Google Analytics o altri strumenti di analytics
    }

    // Gestione cookie marketing
    if (prefs.marketing) {
      // Qui inserire il codice per attivare pixel di marketing, remarketing, etc.
    }
  }, [prefs]);

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
    const all = { technical: true, analytics: true, marketing: true };
    savePrefs(all);
  };

  const handleRejectAll = () => {
    const none = { technical: true, analytics: false, marketing: false };
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
        <h2 id="cookie-title">Preferenze Cookie</h2>
        <p>
          Questo sito utilizza cookie e tecnologie simili per garantire il corretto funzionamento delle procedure e migliorare l'esperienza di uso delle applicazioni online. 
          Per saperne di più, consulta la nostra <a href="/cookiepolicy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
        </p>
        
        <button 
          className={styles.detailsButton}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Nascondi dettagli' : 'Mostra dettagli'}
        </button>

        <form className={styles.cookieForm}>
          <div className={styles.cookieRow}>
            <input type="checkbox" checked disabled id="technical" />
            <label htmlFor="technical">
              <b>Cookie tecnici</b>
              {showDetails && (
                <p className={styles.cookieDescription}>
                  Necessari per il funzionamento del sito. Senza questi cookie, il sito non funzionerebbe correttamente.
                  Non possono essere disattivati.
                </p>
              )}
            </label>
          </div>

          <div className={styles.cookieRow}>
            <input
              type="checkbox"
              id="analytics"
              name="analytics"
              checked={prefs.analytics}
              onChange={handleChange}
            />
            <label htmlFor="analytics">
              <b>Cookie analitici</b>
              {showDetails && (
                <p className={styles.cookieDescription}>
                  Ci aiutano a capire come gli utenti interagiscono con il sito, fornendo informazioni anonime e aggregate.
                  Questi dati vengono utilizzati solo per migliorare il funzionamento del sito.
                </p>
              )}
            </label>
          </div>

          <div className={styles.cookieRow}>
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={prefs.marketing}
              onChange={handleChange}
            />
            <label htmlFor="marketing">
              <b>Cookie di marketing e profilazione</b>
              {showDetails && (
                <p className={styles.cookieDescription}>
                  Utilizzati per tracciare i visitatori sui siti web. L'intento è di visualizzare annunci pertinenti e coinvolgenti per il singolo utente.
                </p>
              )}
            </label>
          </div>
        </form>

        <div className={styles.buttonRow}>
          <button className={styles.accept} onClick={handleAcceptAll} type="button">
            Accetta tutti
          </button>
          <button className={styles.reject} onClick={handleRejectAll} type="button">
            Solo necessari
          </button>
          <button className={styles.save} onClick={handleSave} type="button">
            Salva preferenze
          </button>
        </div>

        <p className={styles.footer}>
          Puoi modificare le tue preferenze in qualsiasi momento visitando la nostra Cookie Policy.
          Le tue scelte non influiranno sulla navigazione del sito.
        </p>
      </div>
    </div>
  );
};

export default CookieConsentAdvanced; 