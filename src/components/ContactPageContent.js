'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactPageContent.module.css';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ContactPageContent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.textHeader}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
        >
          <h1>Entre em Contato</h1>
          <p>Estamos prontos para transformar seu ambiente. Fale conosco!</p>
        </motion.div>

        <motion.div 
          className={styles.infoWrapper}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={itemVariants} className={styles.infoCard}><MapPinIcon /><h3>Nosso Endereço</h3><p>Av. Antonio da Silva Cunha Bueno, 351<br/>Assis/SP</p></motion.div>
          <motion.div variants={itemVariants} className={styles.infoCard}><PhoneIcon /><h3>Telefone</h3><p>(18) 98125-8500</p></motion.div>
          <motion.div variants={itemVariants} className={styles.infoCard}><MailIcon /><h3>Email</h3><p>contato@allurehomeassis.com.br</p></motion.div>
        </motion.div>

        <motion.div 
          className={styles.mapContainer}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.911364710173!2d-50.43009588504703!3d-22.65155798518331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949573e0e7a1c1d1%3A0x7d2f3b3b3b3b3b3b!2sAv.%20Ant%C3%B4nio%20da%20Silva%20Cunha%20Bueno%2C%20351%20-%20Jardim%20Parana%2C%20Assis%20-%20SP%2C%2019814-361!5e0!3m2!1spt-BR!2sbr!4v1627381234567!5m2!1spt-BR!2sbr2"
            width="100%" height="450" style={{ border: 0 }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div 
          className={styles.formContainer}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
        >
          <h3>Envie sua mensagem</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}><label htmlFor="name">Nome</label><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
            <div className={styles.formGroup}><label htmlFor="email">Email</label><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            <div className={styles.formGroup}><label htmlFor="message">Mensagem</label><textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea></div>
            <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}