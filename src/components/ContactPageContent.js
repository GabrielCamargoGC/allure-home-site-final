'use client';

import { useState } from 'react';
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

export default function ContactPageContent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.topWrapper}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Informações</h2>
          <div className={styles.infoBlock}>
            <MapPinIcon />
            <div>
              <span>Endereço</span>
              <p>Av. Antonio da Silva Cunha Bueno, 351, Assis/SP</p>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <PhoneIcon />
            <div>
              <span>Telefone</span>
              <p>(18) 98125-8500</p>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <MailIcon />
            <div>
              <span>Email</span>
              <p>contato@allurehomeassis.com.br</p>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.title}>Envie sua mensagem</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea placeholder="Mensagem" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.610842034339!2d-50.4357731241198!3d-22.64689252989184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94950a41d7c37899%3A0xe5435e197e0c341b!2sAv.%20Ant%C3%B4nio%20da%20Silva%20Cunha%20Bueno%2C%20351%20-%20Vila%20Fi%C3%BAza%2C%20Assis%20-%20SP%2C%2019814-380!5e0!3m2!1spt-BR!2sbr!4v1721990425983!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}