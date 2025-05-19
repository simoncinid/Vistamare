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

export default function Home() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Vistamare | Ristorante a Rosignano Solvay</title>
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
          <AnimatedText delay={200}>
          {/*<img src="/assets/decorazione.png" alt="" className={styles.decorationUpsideDown} />*/}
            <p>
            Benvenuti da Vistamare, dove ogni piatto racconta una storia di <span className={styles.highlight}>stagionalità</span>, <span className={styles.highlight}>sostenibilità</span> e <span className={styles.highlight}>territorio</span>.
            Crediamo che mangiare bene significhi scegliere con cura — per il gusto, per la salute e per l'ambiente.              
            </p>
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
          <AnimatedText delay={600}>
            <p> Utilizziamo <span className={styles.highlight}>materie prime fresche</span> e limitiamo l'uso della plastica grazie a filiere corte e pratiche di riuso.
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
          
            <AnimatedText delay={600}>
              <p>In un mondo che corre veloce, abbiamo scelto di rallentare.
                Perché crediamo che solo così si possa tornare a <span className={styles.highlight}>gustare</span> davvero ciò che ci offre la <span className={styles.highlight}>natura</span>.
                Vistamare è più di un ristorante: è un invito a vivere in modo più attento, più <span className={styles.highlight}>semplice</span>, più sostenibile.</p>
            </AnimatedText>

            <AnimatedText delay={700}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                width: '100%'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px'
                }}>
                  <img 
                    src="/assets/GamberoRosso.png" 
                    alt="Gambero Rosso Logo" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <p style={{
                  color: 'white',
                  fontSize: 'clamp(1.3rem, 2vw, 1.5rem)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '3px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  marginTop: '-5px'
                }} className={styles.descriptionGamberoRosso}>
                  Nella Guida Gambero Rosso dal 2024
                </p>
              </div>
            </AnimatedText>
            
        </div>
       
        {/* Fine fasce mobile */}
      </div>

      <section className={styles.reservationStrip} id="reservation-form">
        <AnimatedText delay={800}>
          <h2>Ti aspettiamo</h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <ReservationForm />
        </AnimatedText>
      </section>

      <Footer />
    </div>
  );
}

