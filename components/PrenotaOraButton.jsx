// PrenotaOraButton.jsx
import React, { useEffect, useState } from 'react';
import styles from './PrenotaOraButton.module.css';

const PrenotaOraButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const form = document.getElementById('reservation-form');
    const footer = document.querySelector('footer');
    if (!form || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Il bottone è visibile solo se né il form né il footer sono visibili
        const shouldHide = entries.some(entry => entry.isIntersecting);
        setVisible(!shouldHide);
      },
      { root: null, threshold: 0.5 }
    );

    observer.observe(form);
    observer.observe(footer);
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
      <i className="fa-regular fa-calendar-check" style={{ marginRight: '10px' }}></i> Prenota ora!
    </button>
  );
};

export default PrenotaOraButton;
