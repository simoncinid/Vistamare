import React, { useState, useEffect } from 'react';
import styles from './GallerySlider.module.css';

const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png',
    '/assets/6.png',
    '/assets/7.png',
    '/assets/8.png',
    '/assets/9.png',
    '/assets/10.png'
  ];

  console.log('Immagini caricate:', images);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
              onError={(e) => {
                console.error('Errore nel caricamento dell\'immagine:', image);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.prevButton} onClick={prevSlide}>
          <span className={styles.arrow}>←</span>
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          <span className={styles.arrow}>→</span>
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySlider; 