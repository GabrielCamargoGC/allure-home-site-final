'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomeCTA.module.css';

export default function HomeCTA() {
  return (
    <motion.section 
      className={styles.ctaSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <h2>Pronto para Transformar seu Ambiente?</h2>
        <p>Clique abaixo para falar com nossos especialistas e solicitar um orçamento sem compromisso.</p>
        <Link href="/contato" className={styles.ctaButton}>
          Fale Conosco Agora
        </Link>
      </div>
    </motion.section>
  );
}