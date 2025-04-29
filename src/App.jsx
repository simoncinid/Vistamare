import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Esperienze from './pages/Esperienze';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet"></link>

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
