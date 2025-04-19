import React from 'react';
import { motion } from 'framer-motion';
import styles from './MasonryGallery.module.css';

export default function MasonryGallery({ images }) {
  return (
    <section className={styles.gallery}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={styles.item}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        >
          <img src={img} alt={`gallery-${i}`} loading="lazy" />
        </motion.div>
      ))}
    </section>
  );
}
