import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import styles from './Menu.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsChevronDown, BsChevronUp, BsArrowLeftShort, BsArrowRightShort, BsX } from 'react-icons/bs';
import TripAdvisorReviews from '../components/TripAdvisorReviews';
import AnimatedText from '../components/AnimatedText';
import ScrollReveal from '../components/ScrollReveal';

// Importazione delle immagini degli allergeni
import latteIcon from '../assets/latte.png';
import glutineIcon from '../assets/glutine.png';
import arachidiIcon from '../assets/arachidi.png';
import uovaIcon from '../assets/uova.png';
import crostaceiIcon from '../assets/crostacei.png';
import molluschiIcon from '../assets/molluschi.png';
import fruttaIcon from '../assets/frutta.png';
import pesceIcon from '../assets/pesce.png';
import soiaIcon from '../assets/soia.png';

// Percorsi delle immagini per gli allergeni
const allergensIcons = {
  soia: soiaIcon,
  latte: latteIcon,
  glutine: glutineIcon,
  arachidi: arachidiIcon,
  uova: uovaIcon,
  crostacei: crostaceiIcon,
  molluschi: molluschiIcon,
  frutta: fruttaIcon,
  pesce: pesceIcon
};

// Dati piatti - aggiorno con allergie e immagini galleria
const menuData = {
  antipasti: {
    title: "GLI ANTIPASTI",
    dishes: [
      {
        id: 1,
        name: "Capesante scottate al burro della Normandia",
        description: "Capesante scottate al burro della Normandia, funghi Shiitake e profumo di mozzarella di bufala",
        price: "€20",
        allergens: ["latte", "molluschi"]  // 7, 14
      },
      {
        id: 2,
        name: "Riso venere, uovo pochè, scampi e crudo di verdure",
        description: "Riso venere servito con uovo pochè, accompagnato da scampi freschi e crudo di verdure di stagione",
        price: "€20",
        allergens: ["uova", "crostacei"]  // 2, 3
      },
      {
        id: 3,
        name: "Quinto quarto di pescato del giorno",
        description: "Quinto quarto di pescato del giorno con cipollina e salsa di pane",
        price: "€18",
        allergens: ["pesce", "glutine"]  // 1, 4
      },
      {
        id: 4,
        name: "Crudo di mazzancolla",
        description: "Crudo di mazzancolla, salsa di pomodorino del Piennolo, mentuccia, limone e caviale, ai profumi di faggio",
        price: "€25",
        allergens: ["crostacei", "pesce"]  // 2, 4
      },
      {
        id: 5,
        name: "Il mare in bocca: carpaccio di tracina",
        description: "Carpaccio di tracina fresco",
        price: "€25",
        allergens: ["pesce", "frutta"]  // 4, 9
      }
    ]
  },
  primi: {
    title: "I PRIMI",
    dishes: [
      {
        id: 6,
        name: "Ricordo di gioventù: sciatielli ai frutti di mare",
        description: "Sciatielli ai frutti di mare",
        price: "€26",
        allergens: ["glutine", "uova", "pesce", "molluschi"]  // 1, 2, 4, 14
      },
      {
        id: 7,
        name: "Linguine con calamaretto spillo, agretti e caviale",
        description: "Linguine con calamaretto spillo, agretti e caviale",
        price: "€28",
        allergens: ["glutine", "molluschi"]  // 1, 14
      },
      {
        id: 8,
        name: "Calle ripiene di mazzancolla e provola",
        description: "Calle ripiene di mazzancolla e provola",
        price: "€24",
        allergens: ["glutine", "uova", "latte", "arachidi"]  // 1, 2, 7, 12
      },
      {
        id: 9,
        name: "Fettucce di pasta fresca con baccalà",
        description: "Fettucce di pasta fresca con baccalà, olive nostraline e pomodorino giallo del Piennolo",
        price: "€22",
        allergens: ["glutine", "pesce", "arachidi"]  // 1, 4, 12
      },
      {
        id: 10,
        name: "Malfatti con pescato del giorno",
        description: "Malfatti con pescato del giorno e polvere di cacao",
        price: "€25",
        allergens: ["glutine", "pesce", "arachidi"]  // 1, 4, 12
      }
    ]
  },
  secondi: {
    title: "I SECONDI",
    dishes: [
      {
        id: 11,
        name: "Filetto di spigola",
        description: "Filetto di spigola, salsa di datterino giallo e scarola riccia",
        price: "€25",
        allergens: ["pesce"]  // 4
      },
      {
        id: 12,
        name: "Polpo verace cucinato secondo la tradizione partenopea",
        description: "Polpo verace cucinato secondo la tradizione partenopea",
        price: "€24",
        allergens: ["arachidi", "molluschi"]  // 12, 14
      },
      {
        id: 13,
        name: "Palamita cotta ai ferri",
        description: "Palamita cotta ai ferri con acqua di peperoni e barbabietola alla scapece",
        price: "€22",
        allergens: ["pesce"]  // 4
      },
      {
        id: 14,
        name: "Tataki di pescato",
        description: "Tataki di pescato con farina di nocciole, maionese di soia e polvere di bietola",
        price: "€25",
        allergens: ["pesce", "arachidi", "soia"]  // 4, 6, 8
      },
      {
        id: 15,
        name: "La nostra frittura di calamari locali",
        description: "La nostra frittura di calamari locali e turbante di verdure di stagione",
        price: "€27",
        allergens: ["glutine", "molluschi"]  // 1, 14
      },
      {
        id: 16,
        name: "Pescato locale del giorno",
        description: "Pescato locale del giorno",
        price: "€9/hg",
        allergens: ["pesce"]  // 4
      },
      {
        id: 17,
        name: "Aragosta e lupicante",
        description: "Aragosta e lupicante",
        price: "€13/hg",
        allergens: ["crostacei"]  // 3
      }
    ]
  },
  contorni: {
    title: "I NOSTRI CONTORNI",
    dishes: [
      {
        id: 18,
        name: "Contorni del giorno",
        description: "I nostri contorni variano ogni giorno a seconda della reperibilità e della stagionalità. Chiedere al personale di sala.",
        price: "",
        allergens: []
      }
    ]
  },
  dessert: {
    title: "DESSERT DI NOSTRA PRODUZIONE",
    dishes: [
      {
        id: 19,
        name: "Pastiera napoletana",
        description: "Pastiera napoletana",
        price: "€7",
        allergens: ["glutine", "uova", "latte", "arachidi"]  // 1, 3, 7, 8
      },
      {
        id: 20,
        name: "Babà",
        description: "Babà",
        price: "€7",
        allergens: ["glutine", "uova", "arachidi"]  // 1, 3, 12
      },
      {
        id: 21,
        name: "Eden",
        description: "Brunoise di frutta fresca di stagione, acqua di lattuga al miele, perle di tapioca aromatizzate al lime e quenelle di yogurt",
        price: "€9",
        allergens: ["latte"]  // 7
      }
    ]
  }
};

const serviceItems = [
  {
    name: "Acqua naturale Maniva",
    price: "€3,00"
  },
  {
    name: "Acqua gassata Maniva",
    price: "€2,50"
  },
  {
    name: "Coperto",
    price: "€4,00"
  }
];

const Menu = () => {
  const [expandedDish, setExpandedDish] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Immagini per lo slider
  const sliderImages = [
    '/assets/img_scelte/17.png',
    '/assets/img_scelte/20.png',
    '/assets/img_scelte/21.png',
    '/assets/img_scelte/22.png',
    '/assets/img_scelte/23.png',
    '/assets/img_scelte/25.png',
    '/assets/img_scelte/30.png'
  ];

  // Immagini statiche
  const staticImages = [
    '/assets/img_scelte/19.png',
    '/assets/img_scelte/32.png'
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
      <Helmet>
        <title>Menu | Vistamare Ristorante</title>
        <meta name="description" content="Scopri il nostro menu di pesce fresco - Carpacci, primi piatti, secondi e il menu degustazione 'A mano libera' dello chef." />
        <meta property="og:image" content="https://vistamare.vercel.app/assets/menu/heromenu.png" />
      </Helmet>
      <Header />
      
      {/* Nuova sezione per il menù degustazione in stile winePhilosophy */}
      <section className={styles.degustazioneSection} style={{height: "600px"}}>
        <div className={styles.imagePart}>
          <img src="/assets/1.png" alt="Menu degustazione" className={styles.degustazioneImage} />
        </div>
        <div className={styles.textPart} style={{backgroundColor: "transparent"}}>
          <div className={styles.boxDegustazione} style={{marginTop: "-1px"}}>
            <h2 
              className={styles.proposteTitle} 
              style={{
                color: "#04062d", 
                fontWeight: "bold", 
                marginBottom: "2rem", 
                paddingTop: "3rem",
                fontSize: "clamp(1.2rem, 5vw, 3rem)"
              }}
            >
              "A mano libera"
            </h2>
            
            <ScrollReveal delay={100}>
              <p className={styles.degustazioneDescription} style={{color: "#04062d", marginTop: "0", paddingBottom: "1rem"}}>
              Percorso di 9 portate a sorpresa, ideato dallo Chef e ispirato al pescato del giorno.<br></br>
              Si prega di comunicare in anticipo eventuali allergie o intolleranze per consentirci di offrire un'esperienza ottimale.<br></br>
              Il menù degustazione viene servito per l'intero tavolo.
              </p>
            </ScrollReveal>
            <div className={styles.priceHighlight}>90€</div>
            <p className={styles.wineNote}>vini esclusi</p>
          </div>
        </div>
      </section>

      {/* Nuova sezione per l'abbinamento vini */}
      <section className={styles.paragraphSection} style={{marginTop: '-1px'}}>
        <ScrollReveal delay={200}>
          <p>
            <span style={{fontSize: '1.1em', fontWeight: 'bold'}}>Proposta di abbinamento vini</span>
            <br></br>
            È possibile arricchire il percorso degustazione con la nostra proposta di abbinamento vini, studiata per valorizzare ogni portata.<br></br>
            La selezione può variare quotidianamente in base al menù proposto e alla disponibilità delle etichette.<br></br>
            "<span className={styles.highlight}>Da Nord a Sud</span>"
          </p>
        </ScrollReveal>
        <div className={styles.priceHighlight}>40€</div>
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
        <h2 className={styles.proposteTitle}>Menu "À la carte"</h2>
        <div className={styles.proposteList}>
          {Object.entries(menuData).map(([category, { title, dishes }], categoryIndex) => (
            <motion.div 
              key={category} 
              className={styles.categorySection}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: categoryIndex * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className={styles.categoryTitle}>{title}</h3>
              <div className={styles.categoryDishes}>
                {dishes.map((dish, index) => (
                  <motion.div 
                    key={dish.id} 
                    className={styles.proposteItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      delay: (categoryIndex * 0.1) + (index * 0.1),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
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
                            {/*<div className={styles.dishImageContainer}>
                              <img 
                                src="/assets/6.png" 
                                alt={`Immagine di ${dish.name}`} 
                                className={styles.dishImage}
                              />
                            </div>*/}
                            
                            <div className={styles.dishInfo}>
                              <p className={styles.proposteDescription}>{dish.description}</p>
                              
                              {/*{dish.allergens && dish.allergens.length > 0 && (
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
                              )}*/}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Items Section */}
        <div className={styles.serviceSection}>
          {serviceItems.map((item, index) => (
            <div key={index} className={styles.serviceItem}>
              <span className={styles.serviceName}>{item.name}</span>
              <span className={styles.servicePrice}>{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rimuovo la vecchia sezione ripetuta */}
      {/* Sezione Gift Card */}
       <section className={styles.giftCardSection}>
        <h2 className={styles.giftCardTitle}>Regala un'Esperienza</h2>
        <ScrollReveal delay={300}>
          <p className={styles.menuDescription}>
            Dona un'esperienza <span className={styles.highlight}>indimenticabile</span> con una gift card del Ristorante Vistamare.
            <br />
            Le nostre gift card possono essere utilizzate per una <span className={styles.highlight}>cena completa</span>.
            <br />
            Per maggiori informazioni, contattaci al <span className={styles.highlight}>0586 762289</span> o via email a <span className={styles.highlight}>vistamarerosignano@gmail.com</span>
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Menu; 