'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Modal({ imageUrl, onClose }) {
  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={imageUrl}
          alt="Imagem ampliada"
          className={styles.modalImage}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}