'use client';

import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ imageUrl, title }) {
  return (
    <motion.div layout className={styles.card}>
      <img
        src={imageUrl}
        alt={`Imagem do projeto ${title}`}
        className={styles.cardImage}
      />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </motion.div>
  );
}