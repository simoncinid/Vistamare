// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React from 'react';
import HeroStatic from '../components/HeroStatic';
import Carousel from '../components/Carousel';
import ReservationForm from '../components/ReservationForm';
import styles from './Home.module.css';
// import linea from '../assets/linea.png';
import ImageSection from '../components/ImageSection';
import MapSection from '../components/MapSection';
import GallerySlider from '../components/GallerySlider';
import PhilosophySection from '../components/PhilosophySection';
import AnimatedText from '../components/AnimatedText';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      
      <div>
        <Carousel />
      </div>
      
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
            <p>
              Vistamare è un <span className={styles.highlight}>rifugio</span> sospeso tra il blu del cielo e il respiro delle
              onde: una terrazza che celebra la cucina del territorio con <span className={styles.highlight}>eleganza </span> 
              contemporanea. Ingredienti a miglio 0, ricerca costante e una <span className={styles.highlight}>vista</span> che toglie il fiato — benvenuto dove i sapori incontrano
              l'orizzonte.
            </p>
          </AnimatedText>
        </section>

        <div style={{ position: 'relative', zIndex: 1, marginBottom: '100px' }}>
          <PhilosophySection />
        </div>        
        
        <div className={styles.fadeBottom}>
          <ImageSection />
        </div>
        <div className={styles.sectionSpacerLarge}>
          <AnimatedText delay={400}>
            <p>Il nostro ristorante è un <span className={styles.highlight}>viaggio</span> di sapori tra mare e terra, dove ingredienti locali e <span className={styles.highlight}>pescato fresco</span> si fondono in creazioni uniche, espressione di tradizione, <span className={styles.highlight}>passione</span> e continua ricerca di eccellenza culinaria.</p>
          </AnimatedText>
          <AnimatedText delay={600}>
            <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
          </AnimatedText>
        </div>
      </div>

      <div className={`${styles.fadeBottom}`} style={{ position: 'relative', zIndex: 2 }}>
        <GallerySlider />
      </div>
      <div className={styles.sectionSpacerLarge}>
        <AnimatedText delay={800}>
          <p>Vieni a <span className={styles.highlight}>immergerti</span> nel calore della nostra ospitalità: ogni piatto, dal taglio più delicato al sapore più <span className={styles.highlight}>deciso</span>, è concepito per stupire il palato e <span className={styles.highlight}>accendere</span> i sensi, trasformando ogni momento in un ricordo prezioso.</p>
        </AnimatedText>
        <AnimatedText delay={1000}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </AnimatedText>
      </div>

      <section className={styles.reservationStrip}>
        <AnimatedText delay={1200}>
          <h2>TI ASPETTIAMO DA VISTAMARE</h2>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <ReservationForm />
        </AnimatedText>
      </section>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <MapSection />
      </div>

      <Footer />
    </div>
  );
}
