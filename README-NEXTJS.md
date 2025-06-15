# Migrazione Ristorante Vistamare da React a Next.js

## Problemi SEO risolti

### 1. **Server-Side Rendering (SSR)**
- **Prima**: Il sito era una SPA React che renderizzava tutto lato client
- **Ora**: Next.js pre-renderizza le pagine lato server, permettendo ai motori di ricerca di vedere immediatamente tutto il contenuto

### 2. **Meta Tag Ottimizzati**
- **Keywords principali**: "ristorante pesce vistamare", "pesce fresco rosignano", "ristorante mare castiglioncello"
- **Meta description** ottimizzate per ogni pagina
- **Schema.org structured data** per ristoranti
- **Open Graph** per social media

### 3. **Struttura URLs SEO-friendly**
- `/` - Homepage principale
- `/menu` - Pagina del menu  
- `/wine-list` - Carta vini
- **Canonical URLs** per evitare contenuti duplicati

### 4. **Sitemap e Robots.txt**
- **Sitemap XML** aggiornata con tutte le pagine
- **Robots.txt** ottimizzato per guidare i crawler
- **Priorità delle pagine** definite correttamente

### 5. **Performance Improvements**
- **Caricamento font** ottimizzato con preconnect
- **Immagini** servite dalla cartella `/public/assets/`
- **CSS critico** inline per first contentful paint

## Comandi per avviare il progetto Next.js

```bash
# Installa le dipendenze
npm install

# Avvia in sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

## Struttura file Next.js

```
pages/
├── _app.js          # Layout principale dell'app
├── _document.js     # Struttura HTML base
├── index.js         # Homepage (sostituisce Home.jsx)
├── menu.js          # Pagina menu
└── wine-list.js     # Pagina carta vini

components/          # Componenti React (invariati)
├── Header.jsx       # Aggiornato per Next.js router
├── Footer.jsx
├── Carousel.jsx
└── ...

public/
├── assets/          # Immagini e risorse
├── sitemap.xml      # Sitemap per SEO
├── robots.txt       # Direttive crawler
└── favicon.ico      # Favicon
```

## Vantaggi SEO immediati

1. **Contenuto pre-renderizzato**: Google vede tutto il contenuto senza dover eseguire JavaScript
2. **Meta tag server-side**: I meta tag sono presenti nell'HTML iniziale
3. **Structured data**: Schema.org per migliore comprensione del contenuto
4. **Sitemap XML**: Facilita l'indicizzazione delle pagine
5. **Canonical URLs**: Previene penalizzazioni per contenuti duplicati

## Cosa aspettarsi

- **Tempi di indicizzazione**: 1-2 settimane per vedere i risultati
- **Ricerca "ristorante pesce vistamare"**: Il sito dovrebbe apparire nelle prime posizioni
- **Core Web Vitals**: Miglioramento delle performance percepite
- **Social sharing**: Anteprima corretta sui social media

## Mantenimento dello stile

✅ **Tutti i CSS module sono mantenuti identici**  
✅ **Animazioni e transizioni invariate**  
✅ **Componenti React funzionano come prima**  
✅ **Design e UX identici**  

La migrazione è **trasparente** per l'utente finale, cambia solo la tecnologia sottostante per migliorare la SEO. 