// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React from 'react';
import styles from './Home.module.css';
import AnimatedText from '../components/AnimatedText';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <div className={styles.page}>
      
      <div className={styles.contentSection}>
        <AnimatedText>
          <h1 style={{color: '#3bb0ff'}}>Cookie Policy</h1>
          <p>
            La presente Cookie Policy ha lo scopo di informare gli utenti sulle procedure seguite per la raccolta, tramite i cookie e/o altre tecnologie di monitoraggio, delle informazioni fornite quando si utilizza il sito web www.vistamare.com (il "Sito").
          </p>

          <h2>Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è Vistamare [inserire dati completi del titolare], contattabile all'indirizzo email: [inserire email].
          </p>

          <h2>Cosa sono i cookie?</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
          </p>

          <h2>Tipologie di cookie utilizzati</h2>
          <h3>1. Cookie tecnici necessari</h3>
          <p>
            Questi cookie sono essenziali per il corretto funzionamento del sito. Non possono essere disattivati nei nostri sistemi. Vengono impostati solo in risposta alle azioni dell'utente, come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
          </p>

          <h3>2. Cookie analitici</h3>
          <p>
            Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il nostro sito web. Questi cookie ci aiutano a fornire informazioni sulle metriche del numero di visitatori, la frequenza di rimbalzo, la fonte di traffico, ecc. Tutti i dati raccolti sono aggregati e quindi anonimi.
          </p>

          <h2>Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati personali mediante l'utilizzo di cookie tecnici necessari si basa sul legittimo interesse del titolare (Art. 6.1.f GDPR).
            Per i cookie analitici e di profilazione, la base giuridica è il consenso dell'interessato (Art. 6.1.a GDPR).
          </p>

          <h2>Durata dei cookie</h2>
          <p>
            - Cookie di sessione: vengono cancellati alla chiusura del browser
            - Cookie persistenti: hanno una durata massima di 12 mesi
          </p>

          <h2>I tuoi diritti</h2>
          <p>
            In qualità di interessato, hai il diritto di:
            - Revocare il consenso in qualsiasi momento
            - Accedere ai tuoi dati personali
            - Richiedere la rettifica o la cancellazione dei dati
            - Richiedere la limitazione del trattamento
            - Opporti al trattamento
            - Richiedere la portabilità dei dati
          </p>

          <h2>Come gestire i cookie</h2>
          <p>
            Puoi modificare le tue preferenze sui cookie in qualsiasi momento attraverso il banner presente sul sito. Inoltre, puoi gestire i cookie attraverso le impostazioni del tuo browser:
            - Chrome
            - Firefox
            - Safari
            - Edge
            - Opera
          </p>

          <h2>Aggiornamenti</h2>
          <p>
            La presente Cookie Policy può essere soggetta a modifiche. Ogni aggiornamento sarà pubblicato sul nostro sito web.
            Ultima modifica: [inserire data]
          </p>
        </AnimatedText>
       
      </div>

      <Footer />
    </div>
  );
}
