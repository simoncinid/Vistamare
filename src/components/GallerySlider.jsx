import React, { useState, useEffect, useCallback } from 'react';
import styles from './GallerySlider.module.css';

function GallerySlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Immagini per lo slider principale (lato sinistro)
  const sliderImages = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png'
  ];

  // Solo due immagini statiche per la parte destra
  const staticImages = [
    '/assets/16.png',
    '/assets/17.png'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Funzione per passare al prossimo slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % sliderImages.length);
  }, [currentSlide, sliderImages.length]);

  // Auto-avanzamento per lo slider principale
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className={styles.galleryContainer}>
      {/* Slider principale - lato sinistro */}
      <div className={styles.leftGallery}>
        <div className={styles.slider}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className={styles.slideImage} 
              />
            </div>
          ))}
          <div className={styles.dots}>
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Vai allo slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Parte destra con due immagini statiche */}
      {!isMobile && (
        <div className={styles.rightGallery}>
          <div className={styles.staticImagesContainer}>
            {staticImages.map((image, index) => (
              <div
                key={index}
                className={styles.staticImageContainer}
              >
                <img 
                  src={image} 
                  alt={`Immagine statica ${index + 1}`} 
                  className={styles[`staticImage${index + 1}`]} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GallerySlider; 