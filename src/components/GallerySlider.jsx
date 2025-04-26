import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './GallerySlider.module.css';

function GallerySlider() {
  // Immagini per lo slider principale (lato sinistro)
  const sliderImages = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png'
  ];

  // Immagini per lo slider verticale (lato destro)
  const verticalImages = [
    '/assets/6.png',
    '/assets/7.png',
    '/assets/8.png',
    '/assets/9.png',
    '/assets/10.png',
    '/assets/11.png'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const rightGalleryRef = useRef(null);

  // Imposta la variabile CSS per il conteggio delle immagini
  useEffect(() => {
    if (rightGalleryRef.current) {
      rightGalleryRef.current.style.setProperty('--total-images', verticalImages.length + 2);
    }
  }, [verticalImages.length]);

  // Funzione per passare al prossimo slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % sliderImages.length);
  }, [currentSlide, sliderImages.length]);

  // Funzione per passare al slide precedente
  const prevSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length);
  }, [currentSlide, sliderImages.length]);

  // Auto-avanzamento per lo slider principale
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Gestione delle scorciatoie da tastiera
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Gestione degli eventi touch
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Se lo swipe è sufficientemente lungo, cambia slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setTouchStartX(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Slider principale - lato sinistro */}
      <div 
        className={styles.leftGallery}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
          
          <div className={styles.controls}>
            <button 
              className={styles.prevButton} 
              onClick={prevSlide}
              aria-label="Slide precedente"
            >
              <span className={styles.arrow}>&#10094;</span>
            </button>
            <button 
              className={styles.nextButton} 
              onClick={nextSlide}
              aria-label="Slide successivo"
            >
              <span className={styles.arrow}>&#10095;</span>
            </button>
          </div>
          
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
      
      {/* Sezione destra - slider verticale continuo */}
      <div className={styles.rightGallery} ref={rightGalleryRef}>
        <div className={styles.verticalContinuousSlider}>
          {verticalImages.map((image, index) => (
            <div
              key={index}
              className={styles.verticalSlideItem}
            >
              <img 
                src={image} 
                alt={`Immagine verticale ${index + 1}`} 
                className={styles.verticalImage} 
              />
              {index < verticalImages.length - 1 && (
                <div className={styles.dividerLine}></div>
              )}
            </div>
          ))}
          {/* Duplicare le prime immagini per creare un loop infinito */}
          {verticalImages.slice(0, 2).map((image, index) => (
            <div
              key={`dup-${index}`}
              className={styles.verticalSlideItem}
            >
              <img 
                src={image} 
                alt={`Immagine verticale ${index + 1}`} 
                className={styles.verticalImage} 
              />
              <div className={styles.dividerLine}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySlider; 