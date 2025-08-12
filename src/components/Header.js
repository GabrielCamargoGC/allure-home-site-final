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

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

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
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      {/* ...seus <li> com os links de página continuam aqui... */}
      <li><Link href="/" className={pathname === '/' ? styles.active : ''}>HOME</Link></li>
      <li><Link href="/projetos" className={pathname === '/projetos' ? styles.active : ''}>PROJETOS</Link></li>
      <li><Link href="/produtos" className={pathname === '/produtos' ? styles.active : ''}>PRODUTOS</Link></li>
      <li><Link href="/parceiros" className={pathname === '/parceiros' ? styles.active : ''}>PARCEIROS</Link></li>
      <li><Link href="/sobre" className={pathname === '/sobre' ? styles.active : ''}>SOBRE</Link></li>
      <li><Link href="/contato" className={pathname === '/contato' ? styles.active : ''}>CONTATO</Link></li>
    </ul>
  </nav>
  <div className={styles.socialIcons}>
    <Link href="https://www.instagram.com/allurehomedecoracoes?utm_source=ig_web_button_share_sheet&igsh=ZHpiaG1mdDd5Mmsw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <InstagramIcon />
    </Link>
  </div>
</div>
    </header>
  );
}