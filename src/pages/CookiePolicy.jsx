// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import AnimatedText from '../components/AnimatedText';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function CookiePolicy() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ block: 'start' });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Cookie Policy | Vistamare Ristorante</title>
        <meta name="description" content="Informativa sull'utilizzo dei cookie nel sito del ristorante Vistamare: come gestiamo i tuoi dati di navigazione." />
      </Helmet>
      <Header />
      <div className={styles.contentSection} ref={contentRef} style={{ paddingTop: '120px' }}>
        <div className={styles.intro} style={{ maxWidth: '900px', padding: '2rem' }}>
          <AnimatedText>
            <h1 style={{
              color: '#3bb0ff',
              fontFamily: '"Roboto", sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '2rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              Cookie Policy
            </h1>

            <div style={{
              color: 'white',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              textAlign: 'left',
              fontFamily: 'var(--font-body)',
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              <p style={{ fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.1rem)', marginBottom: '1.5rem' }}>
                INFORMATIVA SULL'UTILIZZO DEI COOKIE AI SENSI DEL REGOLAMENTO (UE) 2016/679 (GDPR) E DEL PROVVEDIMENTO DEL GARANTE PRIVACY DELL'8 MAGGIO 2014
              </p>

              <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Ultimo aggiornamento: Giugno 2025
              </p>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                1. TITOLARE DEL TRATTAMENTO
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Il Titolare del trattamento dei dati è Vistamare S.r.l., con sede legale in [indirizzo completo], P.IVA [numero], email: [email], PEC: [pec].
              </p>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                2. COSA SONO I COOKIE
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
              </p>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                3. TIPOLOGIE DI COOKIE UTILIZZATI
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                Il nostro sito utilizza le seguenti categorie di cookie:
              </p>
              <ul style={{
                listStyleType: 'none',
                marginBottom: '1.5rem',
                paddingLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>a)</span> Cookie tecnici necessari: essenziali per il funzionamento del sito. Non possono essere disattivati.
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>b)</span> Cookie analitici: ci aiutano a capire come gli utenti interagiscono con il sito, fornendo informazioni anonime e aggregate.
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>c)</span> Cookie di marketing e profilazione: utilizzati per tracciare la navigazione e creare profili sugli interessi.
                </li>
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                4. BASE GIURIDICA DEL TRATTAMENTO
              </h2>
              <ul style={{
                listStyleType: 'none',
                marginBottom: '1.5rem',
                paddingLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cookie tecnici: legittimo interesse del titolare (Art. 6.1.f GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cookie analitici e di marketing: consenso dell'interessato (Art. 6.1.a GDPR)
                </li>
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                5. DURATA DEI COOKIE
              </h2>
              <ul style={{
                listStyleType: 'none',
                marginBottom: '1.5rem',
                paddingLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cookie di sessione: vengono cancellati alla chiusura del browser
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cookie persistenti: hanno una durata massima di 12 mesi
                </li>
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                6. I TUOI DIRITTI
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                In qualità di interessato, hai il diritto di:
              </p>
              <ul style={{
                listStyleType: 'none',
                marginBottom: '1.5rem',
                paddingLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Revocare il consenso in qualsiasi momento
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Accedere ai tuoi dati personali
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Richiedere la rettifica o la cancellazione dei dati
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Richiedere la limitazione del trattamento
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Opporti al trattamento
                </li>
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                7. GESTIONE DEI COOKIE
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Puoi gestire le tue preferenze sui cookie in qualsiasi momento:
              </p>
              <ul style={{
                listStyleType: 'none',
                marginBottom: '1.5rem',
                paddingLeft: '1rem'
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Attraverso il banner dei cookie presente sul sito
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dalle impostazioni del tuo browser:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <li>Chrome</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                    <li>Opera</li>
                  </ul>
                </li>
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                8. AGGIORNAMENTI
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                La presente Cookie Policy può essere soggetta a modifiche. Ogni aggiornamento sarà pubblicato su questa pagina con la relativa data di revisione.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
      <Footer />
    </div>
  );
}
