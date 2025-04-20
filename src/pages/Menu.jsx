import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Il Nostro Menu</h1>
      
      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Antipasti</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Carpaccio di Tonno</h3>
            <p>Tonno fresco marinato con olio extravergine, limone e erbe aromatiche</p>
            <span className={styles.price}>€18</span>
          </div>
          <div className={styles.menuItem}>
            <h3>Bruschette Miste</h3>
            <p>Pane croccante con pomodoro fresco, pesto e crema di olive</p>
            <span className={styles.price}>€12</span>
          </div>
        </div>
      </div>

      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Primi</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Spaghetti alle Vongole</h3>
            <p>Spaghetti con vongole veraci, aglio, prezzemolo e vino bianco</p>
            <span className={styles.price}>€22</span>
          </div>
          <div className={styles.menuItem}>
            <h3>Risotto al Nero di Seppia</h3>
            <p>Risotto cremoso con nero di seppia e calamari freschi</p>
            <span className={styles.price}>€24</span>
          </div>
        </div>
      </div>

      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Secondi</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Branzino al Sale</h3>
            <p>Branzino intero cotto al sale marino con verdure di stagione</p>
            <span className={styles.price}>€32</span>
          </div>
          <div className={styles.menuItem}>
            <h3>Grigliata Mista di Pesce</h3>
            <p>Selezione di pesce fresco grigliato con contorno di verdure</p>
            <span className={styles.price}>€35</span>
          </div>
        </div>
      </div>

      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Dolci</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <h3>Tiramisù</h3>
            <p>Classico tiramisù con caffè e mascarpone</p>
            <span className={styles.price}>€8</span>
          </div>
          <div className={styles.menuItem}>
            <h3>Panna Cotta ai Frutti di Bosco</h3>
            <p>Panna cotta cremosa con salsa di frutti di bosco freschi</p>
            <span className={styles.price}>€8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 