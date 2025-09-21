'use client';

import { useState, useEffect } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Preloader from '../components/Preloader';
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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="siteBody">
        <Preloader isVisible={isLoading} />

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