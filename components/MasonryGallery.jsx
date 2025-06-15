import React from 'react';
import { motion } from 'framer-motion';
import styles from './MasonryGallery.module.css';

export default function MasonryGallery({ images }) {
  const allowedImages = ["4.png", "5.png", "6.png", "11.png", "12.png", "13.png"];
  const filteredImages = images.filter((img) => {
    const fileName = img.substring(img.lastIndexOf("/") + 1);
    return allowedImages.includes(fileName);
  });
  return (
    <section className={styles.gallery}>
      {filteredImages.map((img, i) => (
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
