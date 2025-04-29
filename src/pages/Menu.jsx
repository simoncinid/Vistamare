import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsChevronDown, BsChevronUp, BsArrowLeftShort, BsArrowRightShort, BsX } from 'react-icons/bs';
import TripAdvisorReviews from '../components/TripAdvisorReviews';
import HeroPlatter from '../components/HeroPlatter';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [lightboxDish, setLightboxDish] = useState(null);

  // Toggle espansione piatto
  const toggleDish = (id) => {
    setExpandedDish(expandedDish === id ? null : id);
  };

  // Apri lightbox per l'immagine
  const openLightbox = (dishId, imageIndex) => {
    setLightboxDish(dishId);
    setLightboxImage(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Chiudi lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Naviga tra le immagini nel lightbox
  const navigateLightbox = (direction) => {
    const dish = dishesData.find(dish => dish.id === lightboxDish);
    if (!dish) return;
    
    const totalImages = dish.images.length;
    
    if (direction === 'prev') {
      setLightboxImage((prev) => (prev - 1 + totalImages) % totalImages);
    } else {
      setLightboxImage((prev) => (prev + 1) % totalImages);
    }
  };

  return (
    <div className={styles.menuPage}>
      <HeroPlatter />
      <Header />

      {/* Titolo e introduzione */}
      <section className={styles.menuIntro}>
        <h1 className={styles.menuTitle}>MENU</h1>
        <p className={styles.menuDescription}>
          Le nostre proposte variano giornalmente in base al pescato fresco 
          disponibile. 
          <br></br>Il nostro chef seleziona personalmente gli ingredienti 
          migliori per offrirvi un'esperienza culinaria autentica e di alta qualità.
        </p>
      </section>

      {/* Lista dei piatti */}
      <section className={styles.dishesSection}>
        {dishesData.map((dish) => (
          <div key={dish.id} className={styles.dishItem}>
            <div 
              className={styles.dishHeader} 
              onClick={() => toggleDish(dish.id)}
            >
              <h2 className={styles.dishName}>{dish.name}</h2>
              <button className={styles.expandButton}>
                {expandedDish === dish.id ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {/* Contenuto espandibile */}
            <AnimatePresence>
              {expandedDish === dish.id && (
                <motion.div
                  className={styles.dishDetails}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Galleria di immagini */}
                  <div className={styles.dishGallery}>
                    {dish.images.map((img, index) => (
                      <div 
                        key={index} 
                        className={styles.galleryImage}
                        onClick={() => openLightbox(dish.id, index)}
                      >
                        <img src={img} alt={`${dish.name} - immagine ${index + 1}`} />
                      </div>
                    ))}
                  </div>

                  {/* Descrizione */}
                  <p className={styles.dishDescription}>{dish.description}</p>
                  <p className={styles.dishPrice}>{dish.price}</p>

                  {/* Allergeni */}
                  <div className={styles.allergensContainer}>
                    {dish.allergens.map((allergen) => (
                      <div key={allergen} className={styles.allergenIcon} title={allergen}>
                        <img src={allergensIcons[allergen]} alt={allergen} />
                        <span className={styles.allergenTooltip}>{allergen}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* TripAdvisor Recensioni */}
      <TripAdvisorReviews />

      {/* Lightbox per visualizzare le immagini */}
      {lightboxOpen && lightboxDish && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <BsX size={30} />
            </button>
            <img 
              src={dishesData.find(dish => dish.id === lightboxDish).images[lightboxImage]} 
              alt={`Immagine ${lightboxImage + 1}`} 
              className={styles.lightboxImage}
            />
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={() => navigateLightbox('prev')}
            >
              <BsArrowLeftShort size={40} />
            </button>
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() => navigateLightbox('next')}
            >
              <BsArrowRightShort size={40} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu; 