'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';
import Modal from '@/components/Modal';
import styles from '@/components/ProjectGrid.module.css'; // Reutilizando o estilo da grade
import filterStyles from './Filtro.module.css'; // Usaremos um CSS de filtro aqui também

export default function ProdutosPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productsQuery = `*[_type == "product"] | order(_createdAt desc){
        _id,
        name,
        "imageUrl": productImage.asset->url,
        "categories": categories[]->title
      }`;
      const categoriesQuery = `*[_type == "category"] | order(title asc){_id, title}`;

      const fetchedProducts = await client.fetch(productsQuery);
      const fetchedCategories = await client.fetch(categoriesQuery);

      setProducts(fetchedProducts);
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let tempProducts = products;

    if (activeFilter !== 'Todos') {
      tempProducts = tempProducts.filter(product =>
        product.categories && product.categories.includes(activeFilter)
      );
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, activeFilter, products]);

  return (
    <>
      <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      <section className={styles.projectSection}>
        <h1 className={styles.sectionTitle}>Nossos Produtos</h1>

        <div className={filterStyles.controlsContainer}>
          <div className={filterStyles.searchContainer}>
            <input 
              type="text"
              placeholder="Buscar por produto..."
              className={filterStyles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={filterStyles.filterContainer}>
            <button 
              onClick={() => setActiveFilter('Todos')}
              className={`${filterStyles.filterButton} ${activeFilter === 'Todos' ? filterStyles.active : ''}`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button 
                key={category._id} 
                onClick={() => setActiveFilter(category.title)}
                className={`${filterStyles.filterButton} ${activeFilter === category.title ? filterStyles.active : ''}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              onZoomClick={() => setSelectedImage(product.imageUrl)}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}