'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Lógica para fundo sólido
      const isScrolled = currentScrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Lógica para esconder/mostrar o header
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Se rolou para baixo e passou do topo
        setHidden(true);
      } else {
        // Se rolou para cima
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, lastScrollY]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${hidden ? styles.headerHidden : ''}`}>
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