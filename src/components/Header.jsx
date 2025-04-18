import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.header}
    >
      <div className={`${styles.inner} container`}>
        <Link to="/" className={styles.logo}>
          Vistamare
        </Link>
        <nav className={styles.nav}>
          <Link to="/" >Home</Link>
          <Link to="/cucina" >La Nostra Cucina</Link>
          <Link to="/esperienze" >Le Nostre Esperienze</Link>
        </nav>
      </div>
    </motion.header>
  );
}
