import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedText from '../components/AnimatedText'
import styles from '../src/pages/Home.module.css'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  // Scroll to top immediato quando la pagina viene caricata
  useEffect(() => {
    document.body.scrollTop = 0; // Per Safari
    document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
    
    // Riapplica lo scroll dopo un brevissimo delay per assicurarsi che funzioni
    const timer = setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page} style={{ backgroundColor: 'rgba(13, 17, 38, 0.98)' }}>
      <Head>
        <title>Privacy Policy | Vistamare Ristorante</title>
        <meta name="description" content="Informativa sulla privacy del ristorante Vistamare: come trattiamo e proteggiamo i tuoi dati personali." />
      </Head>
      <Header />
      <div className={styles.contentSection} style={{ 
        backgroundColor: 'rgba(13, 17, 38, 0.98)', 
        border: 'none',
        boxShadow: 'none'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: 'rgba(13, 17, 38, 0.98)',
          border: 'none',
          textAlign: 'center'
        }}>
          <AnimatedText>
            <h1 style={{
              color: '#3bb0ff', 
              fontFamily: '"Roboto", sans-serif', 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '2rem',
              letterSpacing: '2px',
              paddingTop: '80px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              Privacy Policy
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
                INFORMATIVA PRIVACY AI SENSI DEGLI ARTT. 13-14 DEL REGOLAMENTO (UE) 2016/679 (GDPR) E DEL D.LGS. 196/2003 COME MODIFICATO DAL D.LGS. 101/2018
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
                Ristorante Vistamare, con sede in Via del Popolo, 76, 57016 Rosignano Solvay-Castiglioncello LI, 
                email: vistamarerosignano@gmail.com, telefono: 0586 762289, è il Titolare del trattamento dei dati personali raccolti attraverso il sito web.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                2. DATI PERSONALI TRATTATI
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                Trattiamo le seguenti categorie di dati personali:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dati di navigazione (indirizzo IP, data e ora di accesso, pagine visitate)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dati forniti volontariamente (nome, cognome, email, numero di telefono)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dati per la prenotazione (data, orario, numero di persone, preferenze alimentari)
                </li>
              </ul>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                3. FINALITÀ DEL TRATTAMENTO
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                I dati personali sono trattati per le seguenti finalità:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>a)</span> Gestione delle prenotazioni e dei servizi richiesti
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>b)</span> Rispondere alle richieste di informazioni
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>c)</span> Adempiere a obblighi legali
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
                5. CONTATTI
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Per esercitare i tuoi diritti o per qualsiasi domanda riguardante il trattamento dei dati personali, 
                puoi contattarci all'indirizzo email: vistamarerosignano@gmail.com oppure al numero: 0586 762289.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
      <Footer />
    </div>
  )
} 