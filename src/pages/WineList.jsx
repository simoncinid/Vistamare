import React, { useState, useEffect } from 'react';
import styles from './WineList.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const WineList = () => {
  // Variabile per tenere traccia delle dimensioni della finestra
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Funzione per aprire il PDF in una nuova finestra
  const openWineListPDF = () => {
    window.open('/assets/Wine_List.pdf', '_blank');
  };

  // Gestiamo il ridimensionamento della finestra
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      // Impostiamo il valore iniziale
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Calcoliamo i ritardi in base alla dimensione dello schermo
  const getDelay = (baseDelay) => {
    // Riduciamo i ritardi su schermi mobili per una UX migliore
    if (windowWidth <= 768) {
      return Math.floor(baseDelay * 0.7);
    }
    return baseDelay;
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      {/* Nuova sezione descrizione stile Philosophy */}
      <section className={styles.winePhilosophySection} style={{height: "600px"}}>
        <div className={styles.imagePartWine}>
          <img src="/assets/27.png" alt="Wine selection" className={styles.wineImage} />
        </div>
        <div className={styles.textPartWine} style={{backgroundColor: "transparent"}}>
          <div className={styles.boxWine} style={{marginTop: "-1px"}}>
            <h2 className={styles.proposteTitle} style={{color: "#04062d", fontWeight: "bold", marginBottom: "1rem", paddingTop: "4rem"}}>
              La nostra selezione di vini
            </h2>
            
            <p style={{color: "#04062d", marginTop: "0", paddingBottom: "1rem"}}>
              Dai <span className={styles.highlight}>rossi corposi</span> ai <span className={styles.highlight}>bianchi freschi</span>, 
              ogni bottiglia è <span className={styles.highlight}>selezionata</span> dalla nostra sommelier per esperienze 
              <span className={styles.highlight}> indimenticabili</span>. Un viaggio sensoriale che racconta 
              <span className={styles.highlight}> territori</span> e <span className={styles.highlight}>tradizioni</span> 
              per accompagnare perfettamente i sapori dei nostri piatti.
            </p>
            
            <AnimatedText delay={getDelay(600)}>
              <button 
                className={styles.pdfButton}
                onClick={openWineListPDF}
                aria-label="Apri la carta dei vini completa in PDF"
              >
                Visualizza la Carta dei Vini
              </button>
            </AnimatedText>
          </div>
        </div>
      </section>
      
      {/* Sezione PDF con citazione */}
      <section className={styles.pdfSection}>
        <AnimatedText delay={getDelay(500)}>
          <h2 className={styles.wineSelectionTitle} style={{fontSize: "1.3rem", marginTop: "0.5rem", marginBottom: "0.2rem"}}>
            "Il vino prepara i cuori e li rende più pronti alla passione."
            <span className={styles.quoteAuthorStyle}>- Ovidio</span>
          </h2>
        </AnimatedText>
      </section>
      
      {/* Sezione parallax */}
      <section className={styles.parallaxSection}>
        <div className={styles.parallaxOverlay}>
          <AnimatedText delay={getDelay(400)}>
            <h2 className={styles.sectionTitle}>La Cantina</h2>
            <p className={styles.paragraphText}>
              La nostra cantina è il cuore pulsante di Vistamare, uno spazio dove 
              <span className={styles.highlight}> passione</span> e <span className={styles.highlight}>ricerca</span> si fondono.
              Con oltre <span className={styles.highlight}>100 etichette</span>, rappresentiamo 
              l'eccellenza vitivinicola italiana e internazionale.
            </p>
          </AnimatedText>
        </div>
      </section>
      
      {/* Sezione finale 
      <section className={styles.finalSection}>
        <AnimatedText delay={getDelay(700)}>
          <p className={styles.finalText}>
            Il nostro sommelier è a tua <span className={styles.highlight}>disposizione</span> per 
            guidarti nella scelta del vino perfetto in base ai tuoi <span className={styles.highlight}>gusti</span> 
            e alle tue <span className={styles.highlight}>preferenze</span>.
            <br />
            Chiedi consiglio per scoprire nuove <span className={styles.highlight}>emozioni</span> e
            <span className={styles.highlight}> sensazioni</span> attraverso il meraviglioso mondo del vino.
          </p>
        </AnimatedText>
      </section>*/}
      
      <Footer />
    </div>
  );
};

export default WineList; 