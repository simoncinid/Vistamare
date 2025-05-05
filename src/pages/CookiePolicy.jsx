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
            Informativa e acquisizione del consenso per l'uso dei cookie sul portale web www.vistamare.com ai sensi del Provvedimento n. 229 dell'8 maggio 2014 del Garante per la protezione dei dati personali.

Cosa sono i cookie?
Di seguito la definizione contenuta nel punto 1 della premessa al Provvedimento del Garante di cui sopra:

Considerazioni preliminari. I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale (solitamente al browser),
dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.
Nel corso della navigazione su un sito, l'utente può ricevere sul suo terminale anche cookie che vengono inviati da siti o da web server diversi (c.d. “terze parti”),
sui quali possono risiedere alcuni elementi (quali, ad esempio, immagini, mappe, suoni, specifici link a pagine di altri domini) presenti sul sito che lo stesso sta visitando.

Cookie tecnici. I cookie tecnici sono quelli utilizzati al solo fine di “effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica,
o nella misura strettamente necessaria al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'abbonato o dall'utente a erogare tale servizio” (cfr. art. 122, comma 1, del Codice).
Essi non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare o gestore del sito web.
Possono essere suddivisi in cookie di navigazione o di sessione, che garantiscono la normale navigazione e fruizione del sito web (permettendo, ad esempio, di realizzare un acquisto o autenticarsi per accedere ad aree riservate);
cookie analytics, assimilati ai cookie tecnici laddove utilizzati direttamente dal gestore del sito per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso;
cookie di funzionalità, che permettono all'utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua, i prodotti selezionati per l'acquisto) al fine di migliorare il servizio reso allo stesso.

Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti, mentre resta fermo l'obbligo di dare l'informativa ai sensi degli art. 13 e 14 del Regolamento (UE) 2016/679,
che il gestore del sito potrà fornire con le modalità che ritiene più idonee.

Non viene fatto uso di cookie per la trasmissione di informazioni di carattere personale.
L'uso di c.d. cookie di sessione (che non vengono memorizzati in modo persistente sul computer dell'utente e svaniscono con la chiusura del browser) è strettamente limitato alla trasmissione di identificativi
di sessione (costituiti da numeri casuali generati dal server) necessari per consentire l'esplorazione sicura ed efficiente del sito.

Se non ci autorizzi a usare i cookie, determinate funzioni e pagine non possono funzionare come previsto.

Sul sito www.vistamare.com potrebbero essere presenti cookie di sessione e analytics. Se desideri eliminarli modifica le impostazioni del tuo computer.

Oltre a ciò, diversi browser forniscono diversi metodi per bloccare ed eliminare i cookie utilizzati dai siti web. Puoi modificare le impostazioni del tuo browser per bloccare / eliminare i cookie. Per saperne di più su come gestire ed eliminare i cookie, visitare wikipedia.org, www.allaboutcookies.org.Should you decide to change your preferences later through your browsing session, you can click on the “Privacy & Cookie Policy” tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.
          </p>
        </AnimatedText>
       
      </div>

      <Footer />
    </div>
  );
}
