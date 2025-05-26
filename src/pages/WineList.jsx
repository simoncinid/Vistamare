import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './WineList.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import ScrollReveal from '../components/ScrollReveal';

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
      <Helmet>
        <title>Carta dei Vini | Vistamare Ristorante</title>
        <meta name="description" content="Scopri la nostra selezione di vini: bianchi, rossi, bollicine e champagne d'eccellenza scelti dalla nostra sommelier per accompagnare ogni piatto." />
      </Helmet>
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
                fontSize: "clamp(1.2rem, 5vw, 3rem)"
              }}
            >
              La nostra <br></br> selezione di vini
            </h2>
            
            <ScrollReveal delay={100}>
              <p className={styles.degustazioneDescription} style={{color: "#04062d", marginTop: "0", paddingBottom: "1rem"}}>
              Dai rossi <span className={styles.highlight}>strutturati</span> ai bianchi più <span className={styles.highlight}>eleganti</span>, passando per una curata proposta di <span className={styles.highlight}>Champagne</span>, ogni etichetta è scelta con attenzione dalla nostra sommelier.
              Un percorso enologico che attraversa territori, tradizioni e bollicine <span className={styles.highlight}>d'eccellenza</span>, pensato per esaltare ogni piatto e rendere l'esperienza ancora più memorabile.
              </p>
            </ScrollReveal>
            
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
        <ScrollReveal delay={200}>
          <p>
            <span style={{fontSize: '1.1em', fontWeight: 'bold'}}>Il vino prepara i cuori</span>
            <br></br>
            e li rende più pronti alla passione
            <br></br>
            "<span className={styles.highlight}>Ovidio</span>"
          </p>
        </ScrollReveal>
      </section>
      
      {/* Sezione parallax */}
      <section className={styles.parallaxSection}>
        <div className={styles.parallaxOverlay}>
          <AnimatedText delay={getDelay(400)}>
            <h2 className={styles.sectionTitle}>La Cantina</h2>
            <ScrollReveal delay={300}>
              <p className={styles.paragraphText}>
                La nostra cantina è il cuore pulsante di Vistamare, uno spazio dove 
                <span className={styles.highlight}> passione</span> e <span className={styles.highlight}>ricerca</span> si fondono.
                Con oltre <span className={styles.highlight}>150 etichette</span>, rappresentiamo 
                l'eccellenza vitivinicola italiana e internazionale.
              </p>
            </ScrollReveal>
          </AnimatedText>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WineList; 