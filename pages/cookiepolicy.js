import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedText from '../components/AnimatedText'
import styles from '../src/pages/Home.module.css'
import { useEffect, useRef } from 'react'

export default function CookiePolicy() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ block: 'start' });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Head>
        <title>Cookie Policy | Vistamare Ristorante</title>
        <meta name="description" content="Informativa sull'utilizzo dei cookie nel sito del ristorante Vistamare: come gestiamo i tuoi dati di navigazione." />
      </Head>
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
                INFORMATIVA SULL'UTILIZZO DEI COOKIE AI SENSI DEL REGOLAMENTO (UE) 2016/679 (GDPR)
              </p>

              <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Ultimo aggiornamento: Dicembre 2024
              </p>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                1. COSA SONO I COOKIE
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
                2. TIPOLOGIE DI COOKIE UTILIZZATI
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
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                3. DURATA DEI COOKIE
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
                4. I TUOI DIRITTI
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
              </ul>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                5. GESTIONE DEI COOKIE
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser o utilizzando il pannello di gestione cookie presente sul nostro sito.
              </p>

              <h2 style={{
                color: '#3bb0ff',
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                marginTop: '2rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                6. CONTATTI
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Per qualsiasi domanda riguardante l'utilizzo dei cookie, puoi contattarci all'indirizzo email: vistamarerosignano@gmail.com oppure al numero: 0586 762289.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
      <Footer />
    </div>
  )
} 