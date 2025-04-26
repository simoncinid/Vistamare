import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          Vistamare
        </Link>
        
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/menu" className={styles.navLink}>Menu</Link>
          <Link to="/esperienze" className={styles.navLink}>Esperienze</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 