import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-principal',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-titulos',
});

export const metadata = {
  title: 'Allure Home',
  description: 'Sofisticação e tecnologia para o seu lar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}