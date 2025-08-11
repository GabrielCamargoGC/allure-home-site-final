import styles from './Preloader.module.css';

export default function Preloader({ isVisible }) {
  return (
    <div className={`${styles.preloader} ${!isVisible ? styles.hidden : ''}`}>
      <h1 className={styles.logoText}>
        Allure Home
      </h1>
    </div>
  );
}