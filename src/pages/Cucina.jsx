// src/pages/Cucina.jsx
import React from 'react';
import { motion } from 'framer-motion';

// array di esempio, sostituisci con i tuoi dati reali
const dishes = [
  { img: 'https://source.unsplash.com/400x300/?seafood', name: 'Antipasto di Mare', price: '25€' },
  { img: 'https://source.unsplash.com/400x300/?pasta', name: 'Tagliolini al Tartufo', price: '30€' },
  { img: 'https://source.unsplash.com/400x300/?fish', name: 'Branzino al Sale', price: '35€' },
  // aggiungi altri piatti...
];

export default function Cucina() {
  return (
    <section style={{ paddingTop: '6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <motion.h1
          style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          La Nostra Cucina
        </motion.h1>

        <motion.p
          style={{ marginBottom: '3rem', color: 'var(--gray-dark)', lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ogni piatto nasce da una ricerca profonda dei sapori del territorio e dalla passione del nostro chef.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {dishes.map((d, i) => (
            <motion.div
              key={i}
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                background: 'var(--white)'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                style={{
                  height: '200px',
                  backgroundImage: `url('${d.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{d.name}</h3>
                <p style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>{d.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
