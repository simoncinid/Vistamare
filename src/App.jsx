import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Esperienze from './pages/Esperienze';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />

      <CustomCursor />
      <SmoothScroll />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/esperienze" element={<Esperienze />} />
      </Routes>
    </div>
  );
}

export default App;
