// src/pages/Esperienze.jsx
import React, { useState, useEffect } from 'react';
import styles from './Esperienze.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Esperienze = () => {
  const [currentCantinaImage, setCurrentCantinaImage] = useState(0);
  const cantinaImages = [
    '/assets/cantina1.png',
    '/assets/cantina2.png',
    '/assets/cantina3.png'
  ];

  // Effetto per far scorrere le immagini della cantina
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCantinaImage((prev) => (prev + 1) % cantinaImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [cantinaImages.length]);

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      {/* Sezione Menu Degustazione */}
      <section className={styles.philosophySection}>
        <div className={styles.imagePart}>
          <img src="/assets/1.png" alt="Menu degustazione" />
        </div>
        <div className={styles.textPart}>
          <div className={styles.box}>
            <h2>MENU DEGUSTAZIONE</h2>
            <p>Un percorso culinario che celebra i sapori autentici del mare, con creazioni 
            innovative che rispettano la tradizione. Ogni piatto racconta una storia, 
            un territorio, una passione.</p>
          </div>
        </div>
      </section>
      
      {/* Paragrafo introduttivo con parole evidenziate */}
      <div className={styles.paragraphSection}>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} style={{transform: 'rotate(180deg)'}} />
        </AnimatedText>
        <AnimatedText delay={600}>
          <p>
            Il nostro <span className={styles.highlight}>menu degustazione</span> nasce 
            dall'amore per la materia prima e dal desiderio di raccontare il territorio 
            attraverso sapori <span className={styles.highlight}>autentici</span> e 
            ricercati. Ogni boccone è un viaggio tra terra e mare, dove 
            <span className={styles.highlight}>tradizione</span> e innovazione si 
            incontrano creando un'esperienza sensoriale <span className={styles.highlight}>unica</span> 
            e memorabile. Il percorso è studiato per <span className={styles.highlight}>sorprendere</span> 
            ed emozionare, con piatti che cambiano al ritmo delle stagioni, 
            celebrando la <span className={styles.highlight}>freschezza</span> e la 
            qualità degli ingredienti locali.
          </p>
        </AnimatedText>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </AnimatedText>
      </div>
      
     
      
      {/* Nuova sezione parallax per il menu */}
      <div className={styles.parallaxMenuContainer}>
        <div className={styles.parallaxBackground}></div>
        <div className={styles.parallaxContent}>
          <div className={styles.menuCard}>
            <h3 className={styles.menuCardTitle}>IL MENU DEGUSTAZIONE</h3>
            
            <div className={styles.coursesList}>
              <div className={styles.course}>
                <h4 className={styles.courseName}>Benvenuto dello Chef</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Piccole creazioni</span> a sorpresa per 
                  aprire il palato e introdurre il viaggio gastronomico.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Crudo di Mare</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Selezione</span> di pescato fresco con 
                  olio extravergine d'oliva, agrumi e sale di Cervia.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Antipasto Vistamare</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Tentacolo</span> di polpo arrostito su 
                  crema di patate, olive taggiasche e polvere di capperi.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Primo Piatto</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Paccheri</span> al ragù di pescatrice con 
                  pomodorini confit e basilico fresco.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Secondo Piatto</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Filetto</span> di branzino in 
                  crosta di erbe aromatiche con verdure di stagione.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Pre-Dessert</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Sorbetto</span> al limone e basilico per 
                  rinfrescare il palato.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Dessert</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Semisfera</span> di cioccolato bianco con 
                  cuore di frutta della passione e crumble salato.
                </p>
              </div>
            </div>
            
            <div className={styles.pricing}>
              <p><span className={styles.price}>€90</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elemento di transizione */}
      <div className={styles.parallaxTransition}></div>
      
      {/* Sezione Cantina */}
      <section className={styles.philosophySection + ' ' + styles.reversed}>
        <div className={styles.imagePart}>
          <img src="/assets/cantina4.png" alt="La nostra cantina" />
        </div>
        <div className={styles.textPart}>
          <div className={styles.box}>
            <h2><span style={{ fontStyle: 'italic' }}>LA NOSTRA</span> CANTINA</h2>
            <p>Una selezione curata di vini locali e internazionali, scelti per 
            accompagnare perfettamente ogni portata del nostro menu degustazione. 
            Un viaggio enologico che completa l'esperienza gastronomica.</p>
          </div>
        </div>
      </section>
      
      {/* Paragrafo sulla cantina con parole evidenziate */}
      <div className={styles.paragraphSection}>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} style={{transform: 'rotate(180deg)'}} />
        </AnimatedText>
        <AnimatedText delay={600}>
          <p>
            La nostra <span className={styles.highlight}>cantina</span> è frutto di un'attenta 
            ricerca e selezione di etichette provenienti dalle migliori 
            <span className={styles.highlight}>realtà vinicole</span> toscane e nazionali. 
            Particolare attenzione è dedicata ai <span className={styles.highlight}>vini biologici</span> 
            e a basso impatto ambientale, espressione autentica del 
            <span className={styles.highlight}>terroir</span> di provenienza. I nostri sommelier 
            saranno felici di guidarvi in un percorso di <span className={styles.highlight}>abbinamenti</span> 
            studiati per esaltare ogni singola portata del menu degustazione.
          </p>
        </AnimatedText>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </AnimatedText>
      </div>
      
      {/* Slider immagini cantina */}
      <div className={styles.cantinaSlider}>
        <div className={styles.cantinaSliderWrapper}>
          {cantinaImages.map((image, index) => (
            <div 
              key={index}
              className={`${styles.cantinaSlide} ${index === currentCantinaImage ? styles.activeSlide : ''}`}
            >
              <img src={image} alt={`Cantina vista ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.cantinaSliderDots}>
          {cantinaImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.cantinaSliderDot} ${index === currentCantinaImage ? styles.activeDot : ''}`}
              onClick={() => setCurrentCantinaImage(index)}
              aria-label={`Vai all'immagine ${index + 1} della cantina`}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Esperienze;
