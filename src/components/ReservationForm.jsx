// src/components/ReservationForm.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ReservationForm.module.css';
import logo from '../assets/logo.png';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio dati
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <motion.div
      className={styles.formContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.formHeader}>
        <motion.img 
          src={logo} 
          alt="Logo" 
          className={styles.logo}
          variants={itemVariants}
        />
        <motion.div className={styles.steps} variants={itemVariants}>
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className={`${styles.step} ${currentStep >= step ? styles.active : ''}`}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            key="success"
            className={styles.successMessage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.div
              className={styles.checkmark}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              ✓
            </motion.div>
            <h3>Prenotazione confermata!</h3>
            <p>Ti abbiamo inviato una mail di conferma con tutti i dettagli.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={handleSubmit}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <motion.div className={styles.formStep}>
                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Nome e Cognome</label>
                  <span className={styles.focusBorder} />
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Email</label>
                  <span className={styles.focusBorder} />
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Telefono</label>
                  <span className={styles.focusBorder} />
                </motion.div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div className={styles.formStep}>
                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Data</label>
                  <span className={styles.focusBorder} />
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Orario</label>
                  <span className={styles.focusBorder} />
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persona' : 'persone'}
                      </option>
                    ))}
                  </select>
                  <label className={styles.label}>Numero di ospiti</label>
                  <span className={styles.focusBorder} />
                </motion.div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div className={styles.formStep}>
                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows="4"
                  />
                  <label className={styles.label}>Note aggiuntive</label>
                  <span className={styles.focusBorder} />
                </motion.div>
              </motion.div>
            )}

            <motion.div className={styles.formActions} variants={itemVariants}>
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className={styles.buttonSecondary}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Indietro
                </motion.button>
              )}
              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  className={styles.buttonPrimary}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Avanti
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className={styles.buttonPrimary}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⌛
                    </motion.span>
                  ) : (
                    'Conferma Prenotazione'
                  )}
                </motion.button>
              )}
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReservationForm;
