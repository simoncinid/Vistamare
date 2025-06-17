// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroStatic from '../components/HeroStatic';
import Carousel from '../components/Carousel';
import ReservationForm from '../components/ReservationForm';
import styles from './Home.module.css';
// import linea from '../assets/linea.png';
import ImageSection from '../components/ImageSection';
import GallerySlider from '../components/GallerySlider';
import PhilosophySection from '../components/PhilosophySection';
import AnimatedText from '../components/AnimatedText';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrenotaOraButton from '../components/PrenotaOraButton';
import ModernLinksSection from '../components/ModernLinksSection';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Vistamare | Specialità di pesce fresco a Rosignano Solvay</title>
        <meta name="description" content="Ristorante Vistamare - Cucina di pesce fresco a Rosignano Solvay. Materie prime locali e stagionali, in un ambiente accogliente con vista mare." />
      </Helmet>
      <Header />
      
      <div>
        <Carousel />
      </div>
      <PrenotaOraButton />
      <div className={styles.contentSection}>
        <section className={styles.intro}>
          <AnimatedText>
            <img 
              src="../assets/logo.png" 
              alt="Vistamare Logo" 
              className={styles.logo} 
            />
          </AnimatedText>
          <AnimatedText delay={300}>
          {/*<img src="/assets/decorazione.png" alt="" className={styles.decorationUpsideDown} />*/}
            <ScrollReveal delay={100}>
              <p>
              Benvenuti da Vistamare, dove ogni piatto racconta una storia di <span className={styles.highlight}>stagionalità</span>, <span className={styles.highlight}>sostenibilità</span> e <span className={styles.highlight}>territorio</span>.
              Crediamo che mangiare bene significhi scegliere con cura — per il gusto, per la salute e per l'ambiente.              
              </p>
            </ScrollReveal>
            {/*<img src="/assets/decorazione.png" alt="" className={styles.decoration} />*/}
          </AnimatedText>
        </section>

        <div className={styles.divPhilosophy} style={{ position: 'relative', zIndex: 1}}>
          <PhilosophySection />
        </div>        
        
        <div className={styles.fadeBottom}>
          <h1>Scopri cosa offriamo:</h1>
          {/* <ImageSection /> */}
          <ModernLinksSection />
        </div>
        <div className={styles.sectionSpacerLarge}>
          <AnimatedText delay={400}>
          {/*<img src="/assets/decorazione.png" alt="" className={styles.decorationUpsideDown} />*/}
          </AnimatedText>
          <AnimatedText delay={300}>
            <p> Utilizziamo <span className={styles.highlight}>materie prime fresche</span> seguendo la stagionalità del mare grazie a filiere corte e pratiche di riuso.
            Ogni giorno, piccoli gesti per un futuro più <span className={styles.highlight}>sostenibile</span>.</p>
            </AnimatedText>
          <AnimatedText delay={400}>
            {/*<img src="/assets/decorazione.png" alt="" className={styles.decoration} />*/}
            
          </AnimatedText>
        </div>

        <div className={`${styles.fadeBottom}`} style={{ position: 'relative', zIndex: 2 }}>
          <GallerySlider />
        </div>
        
        <div className={styles.sectionSpacerLarge}>
          
            <AnimatedText delay={300}>
              <p>In un mondo che corre veloce, abbiamo scelto di rallentare.
                Perché solo così possiamo <span className={styles.highlight}>gustare</span> davvero ciò che la <span className={styles.highlight}>natura</span> ci offre.
                Vistamare è un invito a vivere in modo più <span className={styles.highlight}>semplice</span> e sostenibile.</p>
            </AnimatedText>

            {/* Sezione Gambero Rosso */}
            <div className={styles.gamberoRossoSection}>
              <AnimatedText delay={300}>
                <div className={styles.gamberoRossoContent}>
                  <div className={styles.gamberoRossoText}>
                    Siamo orgogliosi di essere stati selezionati nella Guida
                    <span className={styles.gamberoRossoHighlight}>"Gambero Rosso"</span>
                    2024
                  </div>
                </div>
              </AnimatedText>
            </div>
            
        </div>
       
        {/* Fine fasce mobile */}
      </div>

      <section className={styles.reservationStrip} id="reservation-form">
        <AnimatedText delay={300}>
          <h2>Ti aspettiamo</h2>
        </AnimatedText>
        <AnimatedText delay={300}>
          <ReservationForm />
        </AnimatedText>
      </section>

      <Footer />
    </div>
  );
}

