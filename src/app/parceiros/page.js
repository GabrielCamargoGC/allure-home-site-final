import { client } from '@/lib/sanity';
import styles from './ParceirosPage.module.css';

async function getPartners() {
  const query = `*[_type == "partner"] | order(name asc){
    _id,
    name,
    "logoUrl": logo.asset->url
  }`;
  const partners = await client.fetch(query);
  return partners;
}

export default async function ParceirosPage() {
  const partners = await getPartners();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Nossos Parceiros</h1>
      <p className={styles.subtitle}>Trabalhamos com as melhores marcas do mercado para garantir qualidade e inovação em cada projeto.</p>
      <div className={styles.grid}>
        {partners.map(partner => (
          <div key={partner._id} className={styles.partnerCard}>
            <img 
              src={partner.logoUrl} 
              alt={`Logotipo da marca ${partner.name}`} 
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}