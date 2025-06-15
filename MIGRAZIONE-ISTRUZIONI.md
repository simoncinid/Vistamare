# Istruzioni per completare la migrazione a Next.js

## 🎯 Quello che abbiamo fatto

✅ **Convertito da React SPA a Next.js SSR**  
✅ **Ottimizzato tutti i meta tag SEO per "ristorante pesce vistamare"**  
✅ **Aggiunto Schema.org structured data**  
✅ **Creato sitemap.xml e robots.txt**  
✅ **Convertito i componenti per Next.js router**  
✅ **Mantenuto tutto il CSS e lo stile originale**

## 🚀 Prossimi passi

### 1. Installa Next.js
```bash
npm install
```

### 2. Testa il sito in locale
```bash
npm run dev
```
Vai su http://localhost:3000 per vedere il sito

### 3. Verifica che tutto funzioni
- ✅ Homepage si carica correttamente
- ✅ Menu e Wine List funzionano
- ✅ Tutte le animazioni e stili sono mantenuti
- ✅ Componenti React funzionano come prima

### 4. Build per produzione
```bash
npm run build
npm start
```

### 5. Deploy su Vercel (raccomandato)
```bash
# Se hai già Vercel configurato:
vercel --prod

# Oppure collega il repo GitHub a Vercel
```

## 🔍 Controlli SEO da fare

### 1. Verifica meta tag
- Ispeziona il codice sorgente: dovrai vedere tutti i meta tag nell'HTML
- Controlla che il title sia "Ristorante Vistamare | Pesce Fresco a Rosignano Solvay"

### 2. Test structured data
- Vai su https://search.google.com/test/rich-results
- Inserisci l'URL del tuo sito
- Controlla che venga riconosciuto come "Restaurant"

### 3. Submit sitemap a Google
- Vai su Google Search Console
- Aggiungi sitemap: https://tuosito.com/sitemap.xml

### 4. Monitora indicizzazione
- Usa Google Search Console per vedere l'indicizzazione
- Richiedi indicizzazione manuale delle pagine principali

## 📈 Risultati attesi

**Tempi**: 1-2 settimane per vedere miglioramenti

**Ricerca "ristorante pesce vistamare"**:
- Prima: Non appare nelle prime 6 schede
- Dopo: Dovrebbe apparire in prima pagina

**Altri miglioramenti**:
- Velocità di caricamento migliorata
- Migliore indicizzazione delle pagine menu e wine-list
- Anteprima corretta sui social media

## ⚠️ Possibili problemi e soluzioni

### Errore: "Module not found"
```bash
# Assicurati che tutte le dipendenze siano installate
npm install --force
```

### Immagini non si caricano
- Controlla che le immagini siano in `/public/assets/`
- Usa `/assets/nomefile.png` (con slash iniziale)

### CSS non funziona
- I CSS module dovrebbero funzionare automaticamente
- Se hai problemi, verifica che i path siano corretti

### Router non funziona
- Abbiamo convertito da React Router a Next.js Router
- Usa `<Link href="/pagina">` invece di `<Link to="/pagina">`

## 🔧 File importanti creati/modificati

```
pages/
├── _app.js          # ✅ Nuovo - Layout principale
├── _document.js     # ✅ Nuovo - HTML ottimizzato
├── index.js         # ✅ Nuovo - Homepage SEO
├── menu.js          # ✅ Nuovo - Pagina menu
└── wine-list.js     # ✅ Nuovo - Pagina vini

components/
├── Header.jsx       # ✅ Modificato - Next.js router
├── ModernLinksSection.jsx  # ✅ Modificato
├── ImageSection.jsx # ✅ Modificato
└── Navbar.jsx       # ✅ Modificato

public/
├── sitemap.xml      # ✅ Nuovo - SEO
├── robots.txt       # ✅ Modificato - SEO
└── assets/          # ✅ Spostato da src/assets

package.json         # ✅ Modificato - Next.js
next.config.js       # ✅ Nuovo - Configurazione
```

## 📞 Se hai problemi

1. **Errori di build**: Controlla la console per errori specifici
2. **CSS non carica**: Verifica che i path siano corretti
3. **Componenti non funzionano**: Potrebbero esserci altri import React Router da convertire

La migrazione dovrebbe essere **trasparente** per gli utenti finali. Il sito avrà lo stesso aspetto e funzionalità, solo con SEO molto migliore! 🎉 