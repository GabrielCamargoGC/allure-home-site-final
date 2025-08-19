'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            ALLURE HOME
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={pathname === '/' ? styles.active : ''}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/projetos" className={pathname === '/projetos' ? styles.active : ''}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/produtos" className={pathname === '/produtos' ? styles.active : ''}>
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/parceiros" className={pathname === '/parceiros' ? styles.active : ''}>
                Parceiros
              </Link>
            </li>
            <li>
              <Link href="/sobre" className={pathname === '/sobre' ? styles.active : ''}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className={pathname === '/contato' ? styles.active : ''}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.socialIcons}>
          <Link href="https://www.instagram.com/allurehomeassis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}