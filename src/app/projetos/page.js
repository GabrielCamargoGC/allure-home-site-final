'use client';

import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/components/ProjectGrid.module.css';
import filterStyles from './Filtro.module.css';
import Modal from '@/components/Modal';

export default function ProjetosPage() {
  // Estados para guardar os dados e controlar os filtros
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Efeito para buscar os dados do Sanity quando a página carrega
  useEffect(() => {
    const fetchData = async () => {
      const projectsQuery = `*[_type == "project"]{_id, title, "imageUrl": mainImage.asset->url, "categories": categories[]->title}`;
      const categoriesQuery = `*[_type == "category"] | order(title asc){_id, title}`;

      const fetchedProjects = await client.fetch(projectsQuery);
      const fetchedCategories = await client.fetch(categoriesQuery);

      setProjects(fetchedProjects);
      setCategories(fetchedCategories);
    };
    fetchData();
  }, []);

  // Efeito para atualizar a lista de projetos visíveis sempre que um filtro ou a busca mudar
  useEffect(() => {
    let tempProjects = projects;

    // 1. Filtra por categoria
    if (activeCategory !== 'Todos') {
      tempProjects = tempProjects.filter(project =>
        project.categories && project.categories.includes(activeCategory)
      );
    }

    // 2. Filtra pelo termo de busca
    if (searchTerm) {
      tempProjects = tempProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(tempProjects);
  }, [searchTerm, activeCategory, projects]);

  return (
    <>
      <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      <section className={styles.projectSection}>
        <h1 className={styles.sectionTitle}>Nossos Projetos</h1>

        <div className={filterStyles.controlsContainer}>
          <div className={filterStyles.searchContainer}>
            <input 
              type="text"
              placeholder="Buscar por nome..."
              className={filterStyles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={filterStyles.filterContainer}>
            <button 
              onClick={() => setActiveCategory('Todos')}
              className={`${filterStyles.filterButton} ${activeCategory === 'Todos' ? filterStyles.active : ''}`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button 
                key={category._id} 
                onClick={() => setActiveCategory(category.title)}
                className={`${filterStyles.filterButton} ${activeCategory === category.title ? filterStyles.active : ''}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              title={project.title}
              imageUrl={project.imageUrl}
              onZoomClick={() => setSelectedImage(project.imageUrl)}
            />
          ))}
        </div>
      </section>
    </>
  );
}