import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsChevronDown, BsChevronUp, BsArrowLeftShort, BsArrowRightShort, BsX } from 'react-icons/bs';
import TripAdvisorReviews from '../components/TripAdvisorReviews';
import AnimatedText from '../components/AnimatedText';

// Percorsi delle immagini per gli allergeni
const allergensIcons = {
  latte: '/src/assets/latte.png',
  glutine: '/src/assets/glutine.png',
  arachidi: '/src/assets/arachidi.png',
  uova: '/src/assets/uova.png',
  crostacei: '/src/assets/crostacei.png',
  molluschi: '/src/assets/molluschi.png',
  frutta: '/src/assets/frutta.png',
  pesce: '/src/assets/pesce.png'
};

// Dati piatti - aggiorno con allergie e immagini galleria
const dishesData = [
  {
    id: 1,
    name: "Carpaccio di Tonno",
    description: "Carpaccio di tonno fresco con scorza di limone, olio d'oliva e sale marino",
    price: "€18",
    allergens: ["pesce", "frutta"],
    images: ["/assets/1.png", "/assets/2.png", "/assets/3.png", "/assets/4.png"]
  },
  {
    id: 2,
    name: "Linguine allo Scoglio",
    description: "Linguine con frutti di mare misti del giorno, aglio, peperoncino e prezzemolo",
    price: "€22",
    allergens: ["glutine", "crostacei", "molluschi"],
    images: ["/assets/6.png", "/assets/7.png", "/assets/8.png", "/assets/9.png"]
  },
  {
    id: 3,
    name: "Orata alla Griglia",
    description: "Orata fresca alla griglia servita con patate e verdure di stagione",
    price: "€24",
    allergens: ["pesce"],
    images: ["/assets/2.png", "/assets/3.png", "/assets/4.png", "/assets/5.png"]
  },
  {
    id: 4,
    name: "Fritto Misto",
    description: "Selezione di pesce fritto misto con calamari, gamberi e pescato del giorno",
    price: "€22",
    allergens: ["glutine", "pesce", "crostacei", "molluschi"],
    images: ["/assets/7.png", "/assets/8.png", "/assets/9.png", "/assets/10.png"]
  },
  {
    id: 5,
    name: "Risotto alla Pescatora",
    description: "Risotto con frutti di mare, pomodorini e un tocco di zafferano",
    price: "€20",
    allergens: ["latte", "crostacei", "molluschi"],
    images: ["/assets/3.png", "/assets/4.png", "/assets/5.png", "/assets/6.png"]
  },
  {
    id: 6,
    name: "Polpo alla Griglia",
    description: "Polpo grigliato servito su crema di patate con olive e capperi",
    price: "€26",
    allergens: ["molluschi", "latte"],
    images: ["/assets/8.png", "/assets/9.png", "/assets/10.png", "/assets/1.png"]
  },
  {
    id: 7,
    name: "Tartare di Ricciola",
    description: "Tartare di ricciola fresca con avocado, lime e sale maldon",
    price: "€20",
    allergens: ["pesce", "frutta"],
    images: ["/assets/4.png", "/assets/5.png", "/assets/6.png", "/assets/7.png"]
  },
  {
    id: 8,
    name: "Spaghetti alle Vongole",
    description: "Spaghetti con vongole veraci fresche, aglio, olio e prezzemolo",
    price: "€20",
    allergens: ["glutine", "molluschi"],
    images: ["/assets/9.png", "/assets/10.png", "/assets/1.png", "/assets/2.png"]
  },
  {
    id: 9,
    name: "Grigliata Mista",
    description: "Selezione del pescato del giorno alla griglia con verdure di stagione",
    price: "€28",
    allergens: ["pesce", "crostacei", "molluschi"],
    images: ["/assets/5.png", "/assets/6.png", "/assets/7.png", "/assets/8.png"]
  },
  {
    id: 10,
    name: "Millefoglie ai Frutti di Mare",
    description: "Millefoglie di pasta fresca con frutti di mare e salsa al basilico",
    price: "€24",
    allergens: ["glutine", "uova", "crostacei", "molluschi", "latte"],
    images: ["/assets/10.png", "/assets/1.png", "/assets/2.png", "/assets/3.png"]
  }
];

const Menu = () => {
  const [expandedDish, setExpandedDish] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Immagini per lo slider
  const sliderImages = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png'
  ];

  // Immagini statiche
  const staticImages = [
    '/assets/16.png',
    '/assets/17.png'
  ];

  // Gestione responsive
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-avanzamento slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, sliderImages.length]);

  // Toggle espansione piatto
  const toggleDish = (id) => {
    setExpandedDish(expandedDish === id ? null : id);
  };

  return (
    <div className={styles.menuPage}>
      <Header />
      
      {/* Sezione titolo con sfondo blu */}
      <section className={styles.menuTitleSection}>
        <h1 className={styles.menuTitle}>Menù</h1>
        <AnimatedText delay={200}>
        <p className={styles.menuDescription}>
          Le nostre proposte variano <span className={styles.highlight}> giornalmente</span> in base al pescato fresco 
          disponibile. 
          <br></br>
          Il nostro chef <span className={styles.highlight}> seleziona</span> personalmente gli ingredienti 
          migliori per offrirvi un'<span className={styles.highlight}> esperienza</span> culinaria autentica e di alta qualità.
          <br></br>
          <span className={styles.highlight}> Freschezza</span> e <span className={styles.highlight}>qualità</span> sono la nostra 
          <span className={styles.highlight}> priorità</span>.
        </p>
        </AnimatedText>
      </section>

      {/* Sezione galleria */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          {/* Immagini statiche a sinistra */}
          <div className={styles.staticImagesContainer}>
            {staticImages.map((image, index) => (
              <div key={index} className={styles.staticImageWrapper}>
                <img 
                  src={image} 
                  alt={`Immagine statica ${index + 1}`} 
                  className={styles.staticImage} 
                />
              </div>
            ))}
          </div>
          
          {/* Slider a destra */}
          <div className={styles.sliderContainer}>
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
              <button 
                className={styles.prevButton} 
                onClick={() => setCurrentSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length)}
                aria-label="Slide precedente"
              >
                <span className={styles.arrow}>←</span>
              </button>
              <button 
                className={styles.nextButton} 
                onClick={() => setCurrentSlide((currentSlide + 1) % sliderImages.length)}
                aria-label="Slide successivo"
              >
                <span className={styles.arrow}>→</span>
              </button>
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
        </div>
      </section>

      {/* Elenco delle proposte */}
      <section className={styles.proposteSection}>
        <h2 className={styles.proposteTitle}>Le Nostre Proposte</h2>
        <div className={styles.proposteList}>
          {dishesData.map((dish) => (
            <div key={dish.id} className={styles.proposteItem}>
              <div 
                className={styles.proposteHeader} 
                onClick={() => toggleDish(dish.id)}
              >
                <h3 className={styles.proposteName}>{dish.name}</h3>
                <span className={styles.propostePrice}>{dish.price}</span>
                <button className={styles.expandButton}>
                  {expandedDish === dish.id ? <BsChevronUp /> : <BsChevronDown />}
                </button>
              </div>

              {/* Dettagli espandibili */}
              <AnimatePresence>
                {expandedDish === dish.id && (
                  <motion.div
                    className={styles.proposteDetails}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.detailsContainer}>
                      {/* Immagine piatto a sinistra */}
                      <div className={styles.dishImageContainer}>
                        <img 
                          src="/assets/6.png" 
                          alt={`Immagine di ${dish.name}`} 
                          className={styles.dishImage}
                        />
                      </div>
                      
                      {/* Descrizione e allergeni a destra */}
                      <div className={styles.dishInfo}>
                        <p className={styles.proposteDescription}>{dish.description}</p>
                        
                        {/* Allergeni */}
                        {dish.allergens && dish.allergens.length > 0 && (
                          <div className={styles.allergensContainer}>
                            {dish.allergens.map((allergen, index) => (
                              <div key={index} className={styles.allergenIcon}>
                                <img 
                                  src={allergensIcons[allergen]} 
                                  alt={`Allergene: ${allergen}`} 
                                />
                                <span className={styles.allergenTooltip}>{allergen}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Paragrafo finale identico a quello iniziale */}
      <section className={styles.menuBottomSection}>
        <AnimatedText delay={200}>
        <p className={styles.menuDescription}>
          Le nostre proposte variano <span className={styles.highlight}> giornalmente</span> in base al pescato fresco 
          disponibile. 
          <br></br>
          Il nostro chef <span className={styles.highlight}> seleziona</span> personalmente gli ingredienti 
          migliori per offrirvi un'<span className={styles.highlight}> esperienza</span> culinaria autentica e di alta qualità.
          <br></br>
          <span className={styles.highlight}> Freschezza</span> e <span className={styles.highlight}>qualità</span> sono la nostra 
          <span className={styles.highlight}> priorità</span>.
        </p>
        </AnimatedText>
      </section>

     

      <Footer />
    </div>
  );
};

export default Menu; 