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
          <img src="/assets/linea.png" alt="Linea decorativa" className={styles.lineIntro} />
          <p>
            Vistamare è un rifugio sospeso tra il blu del cielo e il respiro delle
            onde: una terrazza che celebra la cucina del territorio con eleganza
            contemporanea. Ingredienti a miglio 0, ricerca costante e una
            vista che toglie il fiato — benvenuto dove i sapori incontrano
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
          <p>Il nostro ristorante è un viaggio di sapori tra mare e terra, dove ingredienti locali e pescato fresco si fondono in creazioni uniche, espressione di tradizione, passione e continua ricerca di eccellenza culinaria.</p>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
          <img src="/assets/linea.png" alt="Linea decorativa" className={styles.lineSpacer} />
        </div>
      </div>

      <div className={`${styles.fadeBottom}`} style={{ position: 'relative', zIndex: 2 }}>
        <GallerySlider />
      </div>
      <div className={styles.sectionSpacerLarge}>
        <p>Vieni a immergerti nel calore della nostra ospitalità: ogni piatto, dal taglio più delicato al sapore più deciso, è concepito per stupire il palato e accendere i sensi, trasformando ogni momento in un ricordo prezioso.</p>
        <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
      </div>

      <section className={styles.reservationStrip}>
        <h2>PRENOTA SUBITO DA VISTAMARE</h2>
        <ReservationForm />
      </section>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <MapSection />
      </div>

      <Footer />
    </div>
  );
}
