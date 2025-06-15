import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../src/pages/Home.module.css'

export default function Contatti() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Contatti Ristorante Vistamare | Prenota Tavolo Rosignano Solvay</title>
        <meta name="description" content="Contatta il Ristorante Vistamare a Rosignano Solvay per prenotazioni. Tel: 0586 762289. Il miglior ristorante di pesce tra Castiglioncello e Cecina." />
        <meta name="keywords" content="contatti vistamare, prenotazioni ristorante rosignano, telefono ristorante pesce castiglioncello, prenota tavolo vistamare, ristorante pesce rosignano solvay contatti" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vistamarerosignano.it/contatti" />
        
        <meta property="og:title" content="Contatti Ristorante Vistamare Rosignano Solvay" />
        <meta property="og:description" content="Prenota il tuo tavolo al miglior ristorante di pesce della costa toscana" />
        <meta property="og:url" content="https://vistamarerosignano.it/contatti" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contatti Ristorante Vistamare",
              "description": "Informazioni di contatto e prenotazioni per il Ristorante Vistamare",
              "mainEntity": {
                "@type": "Restaurant",
                "name": "Ristorante Vistamare",
                "telephone": "+39 0586 762289",
                "email": "vistamarerosignano@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Via della Repubblica, 2",
                  "addressLocality": "Rosignano Solvay",
                  "addressRegion": "Toscana",
                  "postalCode": "57013",
                  "addressCountry": "IT"
                },
                "openingHours": "Tu-Su 19:30-23:00"
              }
            })
          }}
        />
      </Head>
      
      <Header />
      
      <div className={styles.contentSection}>
        <section className={styles.intro}>
          <h1>Contatti Ristorante Vistamare</h1>
          <h2>Il miglior ristorante di pesce a Rosignano Solvay</h2>
          
          <div style={{marginTop: '2rem', textAlign: 'left', maxWidth: '600px', margin: '2rem auto'}}>
            <h3>📍 Dove siamo</h3>
            <p><strong>Via della Repubblica, 2</strong><br/>
            57013 Rosignano Solvay (LI)<br/>
            <strong>Toscana, Italia</strong></p>
            
            <h3>📞 Prenotazioni</h3>
            <p><strong>Telefono:</strong> <a href="tel:+390586762289">0586 762289</a><br/>
            <strong>Email:</strong> <a href="mailto:vistamarerosignano@gmail.com">vistamarerosignano@gmail.com</a></p>
            
            <h3>🕒 Orari di apertura</h3>
            <p><strong>Martedì - Domenica:</strong> 19:30 - 23:00<br/>
            <strong>Lunedì:</strong> Chiuso</p>
            
            <h3>🚗 Come raggiungerci</h3>
            <p>Il nostro <strong>ristorante di pesce a Rosignano Solvay</strong> si trova sulla costa toscana, facilmente raggiungibile da:</p>
            <ul style={{textAlign: 'left', margin: '1rem 0'}}>
              <li><strong>Castiglioncello:</strong> 8 km (10 minuti in auto)</li>
              <li><strong>Cecina:</strong> 12 km (15 minuti in auto)</li>
              <li><strong>Livorno:</strong> 25 km (25 minuti in auto)</li>
              <li><strong>Pisa:</strong> 45 km (45 minuti in auto)</li>
            </ul>
            
            <h3>🅿️ Parcheggio</h3>
            <p>Parcheggio gratuito disponibile nelle vicinanze del ristorante.</p>
            
            <h3>🌊 Perché scegliere Vistamare</h3>
            <p>Situato nel cuore di <strong>Rosignano Solvay</strong>, il nostro ristorante offre:</p>
            <ul style={{textAlign: 'left', margin: '1rem 0'}}>
              <li>Pesce fresco del <strong>Mar Tirreno</strong></li>
              <li>Cucina gourmet con vista mare</li>
              <li>Ambiente elegante e accogliente</li>
              <li>Servizio di alta qualità</li>
              <li>Carta vini selezionata</li>
            </ul>
            
            <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4>🏆 Riconoscimenti</h4>
              <p>Selezionati nella <strong>Guida Gambero Rosso 2024</strong> come eccellenza della ristorazione di pesce in Toscana.</p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
} 