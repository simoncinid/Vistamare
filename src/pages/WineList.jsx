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
  const [isMobile, setIsMobile] = useState(false);

  // Funzione per aprire il PDF in una nuova finestra
  const openWineListPDF = () => {
    window.open('/assets/Wine_List.pdf', '_blank');
  };

  // Gestiamo il ridimensionamento della finestra
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768);
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
      
      {/* Sezione principale - struttura identica a Menu.jsx */}
      <section className={styles.degustazioneSection} style={{height: "600px"}}>
        <div className={styles.imagePart}>
          <img 
            src={isMobile ? "/assets/cantina1.png" : "/assets/27.png"} 
            alt="Wine selection" 
            className={styles.degustazioneImage} 
          />
        </div>
        <div className={styles.textPart} style={{backgroundColor: "transparent"}}>
          <div className={styles.boxDegustazione} style={{marginTop: "-1px"}}>
            <h2 
              className={styles.proposteTitle} 
              style={{
                color: "#04062d", 
                fontWeight: "bold", 
                marginBottom: "1rem", 
                paddingTop: "4rem",
                fontSize: "clamp(2.5rem, 5vw, 5rem)"
              }}
            >
              La nostra selezione di vini
            </h2>
            
            <p className={styles.degustazioneDescription} style={{color: "#04062d", marginTop: "0", paddingBottom: "1rem"}}>
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
      
      {/* Sezione citazione - equivalente alla sezione abbinamento vini nel Menu */}
      <section className={styles.paragraphSection} style={{marginTop: '-1px'}}>
        <p>
          <span style={{fontSize: '1.1em', fontWeight: 'bold'}}>Il vino prepara i cuori</span>
          <br></br>
          e li rende più pronti alla passione
          <br></br>
          "<span className={styles.highlight}>Ovidio</span>"
        </p>
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
      
      <Footer />
    </div>
  );
};

export default WineList; 