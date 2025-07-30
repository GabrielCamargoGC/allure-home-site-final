import styles from './AboutPageContent.module.css';

export default function AboutPageContent() {
  return (
    <div>
      <section className={styles.heroAbout}>
        <div className={styles.heroText}>
          <h1>Nossa História</h1>
          <p>Conheça a jornada e os valores que fazem da Allure Home uma referência em design e tecnologia.</p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>Missão & Visão</h2>
            <p>Nossa missão é transformar casas em lares inteligentes e sofisticados, oferecendo soluções personalizadas que unem estética e funcionalidade. Acreditamos que a tecnologia deve servir ao conforto e à beleza, e trabalhamos incansavelmente para trazer as melhores e mais inovadoras soluções para nossos clientes.</p>
            <p>Visamos ser a principal referência em automação e design de interiores na região, reconhecidos pela excelência, inovação e pela capacidade de realizar os sonhos dos nossos clientes.</p>
          </div>
          <div className={styles.missionImage}>
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500" alt="Equipa a trabalhar num projeto" />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Nossa Equipa</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" alt="Membro da equipa 1" />
            <h4>Juliana Silva</h4>
            <p>Designer de Interiores Chefe</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500" alt="Membro da equipa 2" />
            <h4>Marcos Oliveira</h4>
            <p>Especialista em Automação</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500" alt="Carla Andrade" />
            <h4>Carla Andrade</h4>
            <p>Gestora de Projetos</p>
          </div>
        </div>
      </section>
    </div>
  );
}