import React from 'react';
import styles from './Menu.module.css';
import logo from '../assets/logo.png';

const dishesData = [
  {
    id: 1,
    name: "Carpaccio di Tonno",
    description: "Carpaccio di tonno fresco con scorza di limone, olio d'oliva e sale marino",
    price: "€18",
    image: "/assets/menu/piatto1.png"
  },
  {
    id: 2,
    name: "Linguine allo Scoglio",
    description: "Linguine con frutti di mare misti del giorno, aglio, peperoncino e prezzemolo",
    price: "€22",
    image: "/assets/menu/piatto2.png"
  },
  {
    id: 3,
    name: "Orata alla Griglia",
    description: "Orata fresca alla griglia servita con patate e verdure di stagione",
    price: "€24",
    image: "/assets/menu/piatto3.png"
  },
  {
    id: 4,
    name: "Fritto Misto",
    description: "Selezione di pesce fritto misto con calamari, gamberi e pescato del giorno",
    price: "€22",
    image: "/assets/menu/piatto4.png"
  },
  {
    id: 5,
    name: "Risotto alla Pescatora",
    description: "Risotto con frutti di mare, pomodorini e un tocco di zafferano",
    price: "€20",
    image: "/assets/menu/piatto5.png"
  },
  {
    id: 6,
    name: "Polpo alla Griglia",
    description: "Polpo grigliato servito su crema di patate con olive e capperi",
    price: "€26",
    image: "/assets/menu/piatto6.png"
  },
  {
    id: 7,
    name: "Tartare di Ricciola",
    description: "Tartare di ricciola fresca con avocado, lime e sale maldon",
    price: "€20",
    image: "/assets/menu/piatto7.png"
  },
  {
    id: 8,
    name: "Spaghetti alle Vongole",
    description: "Spaghetti con vongole veraci fresche, aglio, olio e prezzemolo",
    price: "€20",
    image: "/assets/menu/piatto8.png"
  },
  {
    id: 9,
    name: "Grigliata Mista",
    description: "Selezione del pescato del giorno alla griglia con verdure di stagione",
    price: "€28",
    image: "/assets/menu/piatto9.png"
  },
  {
    id: 10,
    name: "Millefoglie ai Frutti di Mare",
    description: "Millefoglie di pasta fresca con frutti di mare e salsa al basilico",
    price: "€24",
    image: "/assets/menu/piatto10.png"
  }
];

const Menu = () => {
  return (
    <div className={styles.menuPage}>
      {/* Hero section */}
      <div className={styles.heroSection}>
        <img src="/assets/menu/heromenu.png" alt="Menu Hero" className={styles.heroImage} />
      </div>

      {/* Title section */}
      <div className={styles.titleSection}>
        <h1 className={styles.mainTitle}>IL MENU DI VISTAMARE</h1>
        <p className={styles.description}>
          Il nostro menu è sempre diverso, perché seguiamo il ritmo del mare. Ogni giorno selezioniamo con cura il
          <span className={styles.highlight}> pescato fresco </span>
          che arriva direttamente dai pescatori locali. Il nostro chef crea piatti che esaltano il
          <span className={styles.highlight}> sapore autentico del mare </span>
          e la freschezza degli ingredienti, per garantirvi un'esperienza gastronomica
          <span className={styles.highlight}> sempre nuova </span>
          e sorprendente.
        </p>
      </div>

      {/* Dishes section */}
      <div className={styles.dishesSection}>
        <div className={styles.goldenLineContainer}>
          <div className={styles.goldenLine}></div>
        </div>
        
        {dishesData.map((dish, index) => (
          <div key={dish.id} className={`${styles.dishRow} ${index % 2 !== 0 ? styles.reversed : ''}`}>
            <div className={styles.dishContent}>
              <div className={styles.imageContainer}>
                <img src={dish.image} alt={dish.name} className={styles.dishImage} />
              </div>
              <div className={styles.dishInfo}>
                <h2 className={styles.dishName}>{dish.name}</h2>
                <p className={styles.dishDescription}>{dish.description}</p>
                <span className={styles.dishPrice}>{dish.price}</span>
              </div>
              <div className={styles.spacer}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className={styles.bottomSection}>
        <p className={styles.bottomText}>
          Ogni piatto del nostro menu è preparato con amore e rispetto per le tradizioni culinarie del mare. 
          Ci impegniamo a offrirvi solo ingredienti di prima qualità, selezionati e cucinati per esaltare il loro sapore naturale.
          Per qualsiasi informazione su allergeni o esigenze alimentari specifiche, non esitate a chiedere al nostro staff.
        </p>
        <img src={logo} alt="Vistamare Logo" className={styles.bottomLogo} />
      </div>
    </div>
  );
};

export default Menu; 