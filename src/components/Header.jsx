import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img src={logo} alt="Vistamare" className={styles.logo} />
      <nav className={styles.nav}>
        <a 
          href="/" 
          className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Home
        </a>
        <a 
          href="/menu" 
          className={`${styles.link} ${location.pathname === '/menu' ? styles.active : ''}`}
        >
          Menu
        </a>
        <a 
          href="/esperienze" 
          className={`${styles.link} ${location.pathname === '/esperienze' ? styles.active : ''}`}
        >
          Esperienze
        </a>
      </nav>
    </header>
  );
}
