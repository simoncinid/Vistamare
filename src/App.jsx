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
