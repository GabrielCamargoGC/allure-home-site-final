'use client';

import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectCard({ imageUrl, title }) {
  return (
    <motion.div variants={cardVariants} className={styles.card}>
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