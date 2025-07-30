import { client } from '@/lib/sanity';
import styles from './ParceirosPage.module.css';

async function getPartners() {
 
  const query = `*[_type == "partner"] | order(name asc){
    _id,
    name,
    "photoUrl": photo.asset->url
  }`;
  const partners = await client.fetch(query);
  return partners;
}

export default async function ParceirosPage() {
  const partners = await getPartners();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Nossos Arquitetos Parceiros</h1>
      <p className={styles.subtitle}>Colaboramos com profissionais talentosos para criar ambientes únicos.</p>
      <div className={styles.grid}>
        {partners.map(partner => (
          <div key={partner._id} className={styles.architectCard}>
            <img
              src={partner.photoUrl}
              alt={`Foto de ${partner.name}`}
              className={styles.photo}
            />
            <h4 className={styles.name}>{partner.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}