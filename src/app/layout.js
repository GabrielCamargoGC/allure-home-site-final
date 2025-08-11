'use client'; // Transforma num componente de cliente

import { useState, useEffect } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Preloader from '../components/Preloader'; // 1. Importa a intro
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-principal',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-titulos',
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // A intro durará 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Preloader isVisible={isLoading} /> {/* 2. Adiciona a intro aqui */}

        {/* O resto do site só é renderizado depois do carregamento para não pesar */}
        {!isLoading && (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </>
        )}
      </body>
    </html>
  );
}