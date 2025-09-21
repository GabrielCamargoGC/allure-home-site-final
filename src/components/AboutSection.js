'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{duration: 0.6, ease: "easeOut"}}
      >
        <img 
          src="/andreia camargo.jpeg" 
          alt="Ambiente de design de interiores sofisticado" 
          className={styles.aboutImage}
        />
      </motion.div>
      <motion.div 
        className={styles.textContainer}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Nossa Essência</h2>
        <p className={styles.sectionText}>
          Acreditamos que cada lar tem uma alma. Nossa missão é vestir ambientes com sofisticação, combinando design atemporal e tecnologia de ponta para criar espaços que não são apenas bonitos, mas também inteligentes e funcionais, refletindo a personalidade de quem ali vive.
        </p>
        <Link href="/sobre" className={styles.ctaButton}>
          Conheça nossa história
        </Link>
      </motion.div>
    </section>
  );
}