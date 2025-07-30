import styles from './ProjectCard.module.css';

export default function ProductCard({ imageUrl, name }) {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={`Imagem do produto ${name}`}
        className={styles.cardImage}
      />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{name}</h3>
      </div>
    </div>
  );
}