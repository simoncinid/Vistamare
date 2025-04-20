// ─────────────────────────────────────────────────────────────
//  src/pages/Home.jsx   •   Pagina Home completa
// ─────────────────────────────────────────────────────────────
import React from 'react';
import HeroPlatter from '../components/HeroPlatter';
import ReservationForm from '../components/ReservationForm';
import styles from './Home.module.css';
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
            Vistamare è un rifugio sospeso tra il blu del cielo e il respiro delle
            onde: una terrazza che celebra la cucina del territorio con eleganza
            contemporanea. Ingredienti a&nbsp;miglio 0, ricerca costante e una
            vista che toglie il fiato &mdash; benvenuto dove i sapori incontrano
            l'orizzonte.
          </p>
        </section>

        <ImageSection />

        <MapSection />

        <section className={styles.reservationStrip}>
          <h2>Prenota la tua serata sul mare</h2>
          <ReservationForm />
        </section>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <PhilosophySection />
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <GallerySlider />
      </div>

      <Footer />
    </div>
  );
}
