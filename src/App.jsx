import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Esperienze from './pages/Esperienze';
import CookiePolicy from './pages/CookiePolicy';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import CookieConsentAdvanced from './components/CookieConsentAdvanced';
import './App.css';

function App() {
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 769 : true;
  return (
    <div className="App">
      <CookieConsentAdvanced />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />
      {/* ----- FONTAWESOME STYLES ----- */}
      <link href="bs-simple-admin/assets/css/font-awesome.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      {isDesktop && <CustomCursor />}
      <SmoothScroll />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/esperienze" element={<Esperienze />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
      </Routes>
    </div>
  );
}

export default App;
