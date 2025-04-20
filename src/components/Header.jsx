import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img src={logo} alt="Vistamare" className={styles.logo} />
      <nav className={styles.nav}>
        <Link 
          to="/" 
          className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/menu" 
          className={`${styles.link} ${location.pathname === '/menu' ? styles.active : ''}`}
        >
          Menu
        </Link>
        <Link 
          to="/prenotazioni" 
          className={`${styles.link} ${location.pathname === '/prenotazioni' ? styles.active : ''}`}
        >
          Prenotazioni
        </Link>
      </nav>
    </header>
  );
}
