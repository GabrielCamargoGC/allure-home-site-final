'use client';

import { motion } from 'framer-motion';
import styles from './ServicesSection.module.css';

const CurtainIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2H2v20h20V2zM12 2v20"></path><path d="M2 12h20"></path></svg>);
const BlindsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v2H3zM4 7h16v2H4zM4 11h16v2H4zM4 15h16v2H4zM4 19h16v2H4z"></path></svg>);
const AutomationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>);

export default function ServicesSection() {
  return (
    <motion.section
      className={styles.servicesSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className={styles.title}>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <CurtainIcon />
            <h3>Cortinas Sob Medida</h3>
            <p>Designs exclusivos que combinam com seu estilo, do clássico ao contemporâneo, com tecidos de alta qualidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <BlindsIcon />
            <h3>Persianas Modernas</h3>
            <p>Soluções práticas e elegantes para controle de luz e privacidade em qualquer ambiente residencial ou comercial.</p>
          </div>
          <div className={styles.serviceCard}>
            <AutomationIcon />
            <h3>Automação Residencial</h3>
            <p>Integre suas cortinas e persianas com a tecnologia de casa inteligente, trazendo conforto e modernidade ao seu toque.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}