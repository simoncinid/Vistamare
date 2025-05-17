// ─────────────────────────────────────────────────────────────
//  src/pages/PrivacyPolicy.jsx   •   Pagina Privacy Policy completa
// ─────────────────────────────────────────────────────────────
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import AnimatedText from '../components/AnimatedText';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
      <Helmet>
        <title>Privacy Policy | Vistamare Ristorante</title>
        <meta name="description" content="Informativa sulla privacy del ristorante Vistamare: come trattiamo e proteggiamo i tuoi dati personali." />
      </Helmet>
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
                Vistamare S.r.l., con sede legale in [indirizzo completo], P.IVA [numero], email: [email], PEC: [pec], è il Titolare del trattamento dei dati personali raccolti attraverso il sito web www.vistamare.com.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                2. RESPONSABILE DELLA PROTEZIONE DEI DATI (DPO)
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Il Responsabile della Protezione dei Dati può essere contattato all'indirizzo email: [email DPO].
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                3. DATI PERSONALI TRATTATI
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
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dati forniti volontariamente (nome, cognome, email, numero di telefono, indirizzo)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Dati raccolti attraverso i cookie (come specificato nella Cookie Policy)
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
                4. FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO
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
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>a)</span> Gestione delle prenotazioni e dei servizi richiesti (base giuridica: esecuzione di un contratto - Art. 6.1.b GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>b)</span> Rispondere alle richieste di informazioni (base giuridica: esecuzione di misure precontrattuali - Art. 6.1.b GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>c)</span> Adempiere a obblighi legali (base giuridica: obbligo legale - Art. 6.1.c GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>d)</span> Marketing diretto, newsletter e comunicazioni promozionali (base giuridica: consenso - Art. 6.1.a GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>e)</span> Analisi statistiche in forma aggregata (base giuridica: legittimo interesse - Art. 6.1.f GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>f)</span> Miglioramento della sicurezza e della qualità dei servizi (base giuridica: legittimo interesse - Art. 6.1.f GDPR)
                </li>
              </ul>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                5. MODALITÀ DI TRATTAMENTO
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I dati personali sono trattati mediante strumenti informatici e telematici, con modalità strettamente correlate alle finalità indicate e in modo da garantire la sicurezza e la riservatezza dei dati stessi. Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da perdita, distruzione o danneggiamento accidentale e da trattamenti non autorizzati o illeciti.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                6. PERIODO DI CONSERVAZIONE
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                I dati personali saranno conservati per il tempo necessario al raggiungimento delle finalità per cui sono raccolti, nel rispetto del principio di minimizzazione di cui all'art. 5.1.c del GDPR. In particolare:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> I dati per la gestione delle prenotazioni: fino a 24 mesi dopo la fruizione del servizio
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> I dati per finalità di marketing: fino alla revoca del consenso e comunque non oltre 24 mesi dall'ultima interazione
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> I dati per adempiere a obblighi legali: secondo i termini previsti dalla normativa vigente (es. conservazione documenti fiscali per 10 anni)
                </li>
              </ul>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                7. DESTINATARI DEI DATI
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                I dati personali potranno essere comunicati a:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Personale autorizzato al trattamento
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Fornitori di servizi tecnici (hosting, email, CRM)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Consulenti e professionisti esterni (contabili, legali)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Pubbliche Autorità, ove richiesto per legge
                </li>
              </ul>
              <p style={{ marginBottom: '1.5rem' }}>
                Il Titolare garantisce che eventuali trasferimenti di dati verso paesi terzi avvengano nel rispetto delle condizioni di cui agli artt. 44-49 del GDPR.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                8. DIRITTI DEGLI INTERESSATI
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                In qualità di interessato, Lei ha il diritto di:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Accedere ai propri dati personali (art. 15 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Rettificare i dati inesatti o incompleti (art. 16 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cancellare i dati personali (art. 17 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Limitare il trattamento (art. 18 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Portabilità dei dati (art. 20 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Opporsi al trattamento (art. 21 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Revocare il consenso, ove prestato, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca (art. 7.3 GDPR)
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it)
                </li>
              </ul>
              <p style={{ marginBottom: '1.5rem' }}>
                Per esercitare i suoi diritti, può contattare il Titolare o il DPO utilizzando i recapiti indicati ai punti 1 e 2.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                9. PROCESSO DECISIONALE AUTOMATIZZATO
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I dati personali non sono sottoposti a processi decisionali automatizzati, compresa la profilazione di cui all'art. 22 del GDPR.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                10. AGGIORNAMENTI DELLA PRIVACY POLICY
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                La presente Privacy Policy può essere soggetta ad aggiornamenti. Gli utenti sono pertanto invitati a verificarne periodicamente il contenuto.
              </p>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                11. MISURE DI SICUREZZA SECONDO IL REGOLAMENTO (UE) 2025/XXX
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                In conformità con il recente Regolamento (UE) 2025/XXX sulla sicurezza dei dati digitali, abbiamo implementato ulteriori misure di protezione, tra cui:
              </p>
              <ul style={{ 
                listStyleType: 'none', 
                marginBottom: '1.5rem', 
                paddingLeft: '1rem' 
              }}>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Cifratura end-to-end per i dati sensibili
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Autenticazione a due fattori per l'accesso ai sistemi
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Valutazioni di impatto sulla protezione dei dati aggiornate annualmente
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Sistema di rilevamento delle intrusioni
                </li>
                <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0' }}>-</span> Protocolli avanzati di risposta agli incidenti di sicurezza
                </li>
              </ul>
              
              <h2 style={{ 
                color: '#3bb0ff', 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
                marginTop: '2rem', 
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                12. RESPONSABILE DEL TRATTAMENTO DEI DATI BIOMETRICI
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                In conformità con la normativa italiana aggiornata nel 2025, non raccogliamo né trattiamo dati biometrici attraverso il nostro sito web.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>

      <Footer />
    </div>
  );
} 