// PrenotaOraButton.jsx
import React, { useEffect, useState } from 'react';
import styles from './PrenotaOraButton.module.css';

const PrenotaOraButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { root: null, threshold: 0.5 }
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document
      .getElementById('reservation-form')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.prenotaButton} ${!visible ? styles.hidden : ''}`}
      onClick={handleClick}
    >
      <span role="img" aria-label="calendario">📅</span> Prenota ora!
    </button>
  );
};

export default PrenotaOraButton;
