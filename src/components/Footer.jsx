import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Vistamare. All rights reserved.
        </p>
        <p className={styles.footerText}>
          Via Lungomare, 123 • Porto Elegante • Tel. +39 012 345 6789
        </p>
      </div>
    </footer>
  );
}
