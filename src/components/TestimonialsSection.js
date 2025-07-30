'use client';

import { motion } from 'framer-motion';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <motion.section 
      className={styles.testimonialsSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>O Que Nossos Clientes Dizem</h2>
        <div className={styles.testimonialCard}>
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500" 
            alt="Cliente satisfeito" 
            className={styles.avatar}
          />
          <blockquote className={styles.quote}>
            “A transformação da nossa sala foi incrível. A equipe da Allure Home entendeu perfeitamente o que queríamos, combinando elegância com a mais alta tecnologia. O sistema de automação é fantástico e super intuitivo de usar!”
          </blockquote>
          <cite className={styles.author}>Ana e Ricardo M.</cite>
          <span className={styles.projectType}>Projeto em Alphaville</span>
        </div>
      </div>
    </motion.section>
  );
}