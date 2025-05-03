// src/pages/Esperienze.jsx
import React, { useState, useEffect } from 'react';
import styles from './Esperienze.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Esperienze = () => {
  const [currentCantinaImage, setCurrentCantinaImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const cantinaImages = [
    '/assets/cantina1.png',
    '/assets/cantina2.png',
    '/assets/cantina3.png'
  ];

  // Immagini per lo slider della galleria
  const sliderImages = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png'
  ];

  // Immagini statiche per la galleria
  const staticImages = [
    '/assets/16.png',
    '/assets/17.png'
  ];

  // Lista vini per la cantina
  const viniList = [
    { nome: "Brunello di Montalcino Riserva", anno: "2018", regione: "Toscana" },
    { nome: "Barolo DOCG", anno: "2017", regione: "Piemonte" },
    { nome: "Amarone della Valpolicella", anno: "2019", regione: "Veneto" },
    { nome: "Franciacorta Satèn", anno: "2020", regione: "Lombardia" },
    { nome: "Vermentino di Gallura", anno: "2021", regione: "Sardegna" },
    { nome: "Greco di Tufo", anno: "2022", regione: "Campania" },
    { nome: "Chianti Classico Gran Selezione", anno: "2017", regione: "Toscana" },
    { nome: "Montepulciano d'Abruzzo Riserva", anno: "2018", regione: "Abruzzo" },
    { nome: "Etna Rosso DOC", anno: "2019", regione: "Sicilia" },
    { nome: "Pinot Grigio Colli Orientali", anno: "2021", regione: "Friuli" }
  ];

  // Effetto per far scorrere le immagini della cantina
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCantinaImage((prev) => (prev + 1) % cantinaImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [cantinaImages.length]);

  // Effetto per far scorrere le immagini della galleria
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, sliderImages.length]);

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      {/* Sezione titolo con sfondo blu */}
      <section className={styles.menuTitleSection}>
        <h1 className={styles.menuTitle}>Esperienze</h1>
        <p className={styles.menuDescription}>
          Vieni a scoprire le <span className={styles.highlight}>esperienze uniche</span> che ti aspettano da Vistamare.
          <br></br>
          Assapora il nostro <span className={styles.highlight}>menu degustazione</span> curato dallo chef con materie prime fresche e di alta qualità.
          <br></br>
          Esplora la nostra <span className={styles.highlight}>cantina</span> ricca di vini pregiati selezionati per accompagnare ogni piatto.
        </p>
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
      
      {/* Paragrafo introduttivo menu degustazione con titolo */}
      <div className={styles.paragraphSection}>
        <h2 className={styles.sectionTitle}>Menu Degustazione</h2>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} style={{transform: 'rotate(180deg)'}} />
        </AnimatedText>
        <AnimatedText delay={600}>
          <p>
            Il nostro <span className={styles.highlight}>menu degustazione</span> nasce 
            dall'amore per la materia prima e dal desiderio di raccontare il territorio 
            attraverso sapori <span className={styles.highlight}>autentici</span> e 
            ricercati. Ogni boccone è un viaggio tra terra e mare, dove 
            <span className={styles.highlight}>tradizione</span> e innovazione si 
            incontrano creando un'esperienza sensoriale <span className={styles.highlight}>unica</span> 
            e memorabile. Il percorso è studiato per <span className={styles.highlight}>sorprendere</span> 
            ed emozionare, con piatti che cambiano al ritmo delle stagioni, 
            celebrando la <span className={styles.highlight}>freschezza</span> e la 
            qualità degli ingredienti locali.
          </p>
        </AnimatedText>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </AnimatedText>
      </div>
      
     
      
      {/* Nuova sezione parallax per il menu */}
      <div className={styles.parallaxMenuContainer}>
        <div className={styles.parallaxBackground}></div>
        <div className={styles.parallaxContent}>
          <div className={styles.menuCard}>
            
            <div className={styles.coursesList}>
              <div className={styles.course}>
                <h4 className={styles.courseName}>Benvenuto dello Chef</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Piccole creazioni</span> a sorpresa per 
                  aprire il palato e introdurre il viaggio gastronomico.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Crudo di Mare</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Selezione</span> di pescato fresco con 
                  olio extravergine d'oliva, agrumi e sale di Cervia.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Antipasto Vistamare</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Tentacolo</span> di polpo arrostito su 
                  crema di patate, olive taggiasche e polvere di capperi.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Primo Piatto</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Paccheri</span> al ragù di pescatrice con 
                  pomodorini confit e basilico fresco.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Secondo Piatto</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Filetto</span> di branzino in 
                  crosta di erbe aromatiche con verdure di stagione.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Pre-Dessert</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Sorbetto</span> al limone e basilico per 
                  rinfrescare il palato.
                </p>
              </div>
              
              <div className={styles.course}>
                <h4 className={styles.courseName}>Dessert</h4>
                <p className={styles.courseDescription}>
                  <span className={styles.courseHighlight}>Semisfera</span> di cioccolato bianco con 
                  cuore di frutta della passione e crumble salato.
                </p>
              </div>
            </div>
            
            <div className={styles.pricing}>
              <p><span className={styles.price}>€90</span></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elemento di transizione - aggiungiamo un'altezza extra per assicurare lo scorrimento */}
      
      {/* Paragrafo sulla cantina con titolo */}
      <div className={styles.paragraphSection}>
        <h2 className={styles.sectionTitle}>La Nostra Cantina</h2>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} style={{transform: 'rotate(180deg)'}} />
        </AnimatedText>
        <AnimatedText delay={600}>
          <p>
            La nostra <span className={styles.highlight}>cantina</span> è frutto di un'attenta 
            ricerca e selezione di etichette provenienti dalle migliori 
            <span className={styles.highlight}>realtà vinicole</span> toscane e nazionali. 
            Particolare attenzione è dedicata ai <span className={styles.highlight}>vini biologici</span> 
            e a basso impatto ambientale, espressione autentica del 
            <span className={styles.highlight}>terroir</span> di provenienza. I nostri sommelier 
            saranno felici di guidarvi in un percorso di <span className={styles.highlight}>abbinamenti</span> 
            studiati per esaltare ogni singola portata del menu degustazione.
          </p>
        </AnimatedText>
        <AnimatedText delay={400}>
          <img src="/assets/decorazione.png" alt="" className={styles.decoration} />
        </AnimatedText>
      </div>
      
      {/* Lista vini */}
      <div className={styles.wineListSection}>
        <div className={styles.wineListContainer}>
          <h3 className={styles.wineListTitle}>I Nostri Vini Selezionati</h3>
          <div className={styles.wineGrid}>
            {viniList.map((vino, index) => (
              <div key={index} className={styles.wineCard}>
                <h4 className={styles.wineName}>{vino.nome}</h4>
                <p className={styles.wineDetails}>
                  <span className={styles.wineYear}>{vino.anno}</span> - 
                  <span className={styles.wineRegion}>{vino.regione}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Slider immagini cantina */}
      <div className={styles.cantinaSlider}>
        <div className={styles.cantinaSliderWrapper}>
          {cantinaImages.map((image, index) => (
            <div 
              key={index}
              className={`${styles.cantinaSlide} ${index === currentCantinaImage ? styles.activeSlide : ''}`}
            >
              <img src={image} alt={`Cantina vista ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.cantinaSliderDots}>
          {cantinaImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.cantinaSliderDot} ${index === currentCantinaImage ? styles.activeDot : ''}`}
              onClick={() => setCurrentCantinaImage(index)}
              aria-label={`Vai all'immagine ${index + 1} della cantina`}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Esperienze;
