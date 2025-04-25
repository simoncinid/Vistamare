// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React from 'react';
import HeroPlatter from '../components/HeroPlatter';
import ReservationForm from '../components/ReservationForm';
import styles from './Home.module.css';
// import linea from '../assets/linea.png';
import ImageSection from '../components/ImageSection';
import MapSection from '../components/MapSection';
import GallerySlider from '../components/GallerySlider';
import PhilosophySection from '../components/PhilosophySection';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      
      <div className={styles.heroSection}>
        <HeroPlatter />
      </div>
      
      <div className={styles.contentSection}>
        <section className={styles.intro}>
          <p>
            Vistamare è un <span className={styles.highlight}>rifugio</span> sospeso tra il blu del cielo e il respiro delle
            onde: una terrazza che celebra la cucina del territorio con <span className={styles.highlight}>eleganza</span> 
            contemporanea. Ingredienti a miglio 0, ricerca costante e una
            <span className={styles.highlight}>vista</span> che toglie il fiato — benvenuto dove i sapori incontrano
            l'orizzonte.
          </p>
        </section>

        <div className={`${styles.fadeBottom}`} style={{ position: 'relative', zIndex: 1 }}>
          <PhilosophySection />
        </div>
        <div className={styles.sectionSpacer} />

        <div className={styles.fadeBottom}>
          <ImageSection />
        </div>
        <div className={styles.sectionSpacerLarge}>
          <p>Il nostro ristorante è un <span className={styles.highlight}>viaggio</span> di sapori tra mare e terra, dove ingredienti locali e <span className={styles.highlight}>pescato fresco</span> si fondono in creazioni uniche, espressione di tradizione, <span className={styles.highlight}>passione</span> e continua ricerca di eccellenza culinaria.</p>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </div>
      </div>

      <div className={`${styles.fadeBottom}`} style={{ position: 'relative', zIndex: 2 }}>
        <GallerySlider />
      </div>
      <div className={styles.sectionSpacerLarge}>
        <p>Vieni a <span className={styles.highlight}>immergerti</span> nel calore della nostra ospitalità: ogni piatto, dal taglio più delicato al sapore più <span className={styles.highlight}>deciso</span>, è concepito per stupire il palato e <span className={styles.highlight}>accendere</span> i sensi, trasformando ogni momento in un ricordo prezioso.</p>
        <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
      </div>

      <section className={styles.reservationStrip}>
        <h2>TI ASPETTIAMO DA VISTAMARE</h2>
        <ReservationForm />
      </section>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <MapSection />
      </div>

      <Footer />
    </div>
  );
}
