import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cucina from './pages/Cucina';
import Esperienze from './pages/Esperienze';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cucina" element={<Cucina />} />
        <Route path="/esperienze" element={<Esperienze />} />
      </Routes>
    </Layout>
  );
}
