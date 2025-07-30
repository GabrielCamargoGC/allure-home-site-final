import { client } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';
import styles from '@/components/ProjectGrid.module.css';

async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc){
    _id,
    name,
    "imageUrl": productImage.asset->url
  }`;
  const products = await client.fetch(query);
  return products;
}

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <section className={styles.projectSection}>
      <h1 className={styles.sectionTitle}>Nossos Produtos</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard
            key={product._id}
            name={product.name}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}