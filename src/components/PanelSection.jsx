import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PanelSection.module.css';

/**
 * Props:
 *  • panels: array di { img, title, text }
 *  • id: string – ancora per il link (#location ecc.)
 */
export default function PanelSection({ panels, id }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(panels.length - 1) * 100}%`]);

  return (
    <section id={id} className={styles.wrapper} ref={ref}>
      <motion.div className={styles.inner} style={{ x }}>
        {panels.map((p, i) => (
          <div key={i} className={styles.panel} style={{ backgroundImage: `url(${p.img})` }}>
            <div className={styles.panelOverlay}>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
