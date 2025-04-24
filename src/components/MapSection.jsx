import React from 'react';
import styles from './MapSection.module.css';
import * as FaIcons from 'react-icons/fa';

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.sectionTitle}>TI ASPETTIAMO A VISTAMARE</h2>
      <p className={styles.sectionDescription}>Ogni ingrediente racconta una storia di territorio. Lavoriamo esclusivamente con produttori locali, garantendo la freschezza e la qualità dei nostri piatti, riducendo al minimo l'impatto ambientale.</p>
      
      <div className={styles.sectionContent}>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155718942!2d-73.9856644!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <span className={styles.title}>Indirizzo</span>
            <span className={styles.value}>Via del Mare, 123</span>
            <span className={styles.value}>00100 Roma (RM)</span>
            <FaIcons.FaMapMarkerAlt className={styles.icon} />
          </div>

          <div className={styles.infoCard}>
            <span className={styles.title}>Orari</span>
            <span className={styles.value}>Lun-Dom</span>
            <span className={styles.value}>12:00 - 23:00</span>
            <FaIcons.FaClock className={styles.icon} />
          </div>

          <div className={styles.infoCard}>
            <span className={styles.title}>Contatti</span>
            <span className={styles.value}>+39 06 1234567</span>
            <span className={styles.value}>info@vistamare.it</span>
            <FaIcons.FaPhone className={styles.icon} />
          </div>

          <div className={styles.infoCard}>
            <span className={styles.title}>Servizi</span>
            <span className={styles.value}>Parcheggio gratuito</span>
            <span className={styles.value}>WiFi disponibile</span>
            <FaIcons.FaParking className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 