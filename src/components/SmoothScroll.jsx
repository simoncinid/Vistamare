import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Attendi che il DOM sia completamente caricato
    window.addEventListener('DOMContentLoaded', () => {
      initSmoothScroll();
    });

    // Se il DOM è già caricato, inizializza comunque
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      initSmoothScroll();
    }

    function initSmoothScroll() {
      // Aggiunge stile CSS direttamente al documento
      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        html {
          scroll-behavior: smooth;
        }
      `;
      document.head.appendChild(styleElement);

      // Flag per tracciare se è in corso uno scrolling manuale
      let isManualScroll = false;
      let lastScrollY = window.scrollY;
      let scrollTimeout;

      // Rilevamento fine scrolling
      function onScrollEnd() {
        if (!isManualScroll) return;
        isManualScroll = false;

        // Calcola direzione e distanza dello scroll
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        const direction = Math.sign(scrollDelta); // 1 per giù, -1 per su

        if (Math.abs(scrollDelta) > 10) {
          // Applica inerzia: continua a scrollare nella stessa direzione
          const inertiaDistance = Math.min(Math.abs(scrollDelta) * 0.2, 50) * direction;
          const targetY = currentScrollY + inertiaDistance;

          // Applica lo scroll con effetto smooth
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }

        lastScrollY = currentScrollY;
      }

      // Gestore evento scroll
      function handleScroll() {
        isManualScroll = true;
        lastScrollY = window.scrollY;
        
        // Reset timer che rileva fine scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(onScrollEnd, 100);
      }

      // Aggiungi event listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Memorizza i riferimenti per il cleanup
      return {
        styleElement,
        handleScroll,
        scrollTimeout
      };
    }

    // References per cleanup
    let refs;
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      refs = initSmoothScroll();
    }

    // Cleanup
    return () => {
      if (refs) {
        window.removeEventListener('scroll', refs.handleScroll);
        clearTimeout(refs.scrollTimeout);
        if (refs.styleElement && refs.styleElement.parentNode) {
          refs.styleElement.parentNode.removeChild(refs.styleElement);
        }
      }
      window.removeEventListener('DOMContentLoaded', initSmoothScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll; 