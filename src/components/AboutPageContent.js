import styles from './AboutPageContent.module.css';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function AboutPageContent({ pageData }) {
  const { 
    heroImage, 
    missionText, 
    missionImage, 
    teamMembers 
  } = pageData;

  return (
    <div>
      <section 
        className={styles.heroAbout} 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${urlFor(heroImage).width(1200).url()})` }}
      >
        <div className={styles.heroText}>
          <h1>{pageData.title || 'Nossa História'}</h1>
          <p>Conheça a jornada e os valores que fazem da Allure Home uma referência em design e tecnologia.</p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2>{pageData.missionTitle || 'Missão & Visão'}</h2>
            <p>{missionText}</p>
          </div>
          <div className={styles.missionImage}>
            <img src={urlFor(missionImage).width(500).url()} alt="Equipa a trabalhar num projeto" />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>{pageData.teamTitle || 'Nossa Equipa'}</h2>
        <div className={styles.teamGrid}>
          {teamMembers?.map(member => (
            <div key={member.name} className={styles.teamMember}>
              <img src={urlFor(member.photo).width(120).height(120).url()} alt={`Foto de ${member.name}`} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}