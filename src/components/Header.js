'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          LOGO
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link 
              href="/" 
              className={pathname === '/' ? styles.active : ''}
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              href="/projetos"
              className={pathname === '/projetos' ? styles.active : ''}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              href="/produtos"
              className={pathname === '/produtos' ? styles.active : ''}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link 
              href="/parceiros"
              className={pathname === '/parceiros' ? styles.active : ''}
            >
              Parceiros
            </Link>
          </li>
          <li>
            <Link 
              href="/sobre"
              className={pathname === '/sobre' ? styles.active : ''}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              href="/contato"
              className={pathname === '/contato' ? styles.active : ''}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}