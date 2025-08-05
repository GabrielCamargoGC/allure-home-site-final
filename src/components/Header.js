'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${styles.header} ${(scrolled || pathname !== '/') ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/" className={pathname === '/' ? styles.active : ''}>HOME</Link></li>
            <li><Link href="/projetos" className={pathname === '/projetos' ? styles.active : ''}>PROJETOS</Link></li>
            <li><Link href="/produtos" className={pathname === '/produtos' ? styles.active : ''}>PRODUTOS</Link></li>
            <li><Link href="/parceiros" className={pathname === '/parceiros' ? styles.active : ''}>PARCEIROS</Link></li>
            <li><Link href="/sobre" className={pathname === '/sobre' ? styles.active : ''}>SOBRE</Link></li>
            <li><Link href="/contato" className={pathname === '/contato' ? styles.active : ''}>CONTATO</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}