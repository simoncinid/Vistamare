import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
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
          i Menù
        </a>
        <a 
          href="/esperienze" 
          className={`${styles.link} ${location.pathname === '/esperienze' ? styles.active : ''}`}
        >
          wine list
        </a>
      </nav>
      </div>
    </header>
  );
}
