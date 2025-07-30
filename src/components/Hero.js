import styles from './Hero.module.css';

export default function Hero() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* O texto foi colocado de volta aqui */}
        <h1>Vestindo lares com sofisticação</h1>
        <p>Tecnologia e design que transformam ambientes.</p>
      </div>
    </section>
  );
}