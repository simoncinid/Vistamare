// src/components/ReservationForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ReservationForm.module.css';

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // qui invochi la tua API reale
    alert('Prenotazione inviata!');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.form}
    >
      <h3 className={styles.heading}>Richiedi Prenotazione</h3>
      <div className={styles.fieldGroup}>
        <input
          name="name"
          placeholder="Nome e Cognome"
          value={form.name}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={form.guests}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Invia
      </button>
    </motion.form>
  );
}
