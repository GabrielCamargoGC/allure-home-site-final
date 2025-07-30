'use client'; 

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/components/ProjectGrid.module.css';
import filterStyles from './Filtro.module.css';


export default function ProjetosPage() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
        _id,
        title,
        "imageUrl": mainImage.asset->url,
        "categories": categories[]->title
      }`;
      const categoriesQuery = `*[_type == "category"] | order(title asc){
        _id,
        title
      }`;

      console.log("A tentar buscar dados do Sanity...");

      const fetchedProjects = await client.fetch(projectsQuery);
      const fetchedCategories = await client.fetch(categoriesQuery);

      console.log("Projetos Recebidos:", fetchedProjects);
      console.log("Categorias recebidas:", fetchedCategories);

      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
      setCategories(fetchedCategories);
    };

    fetchData();
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'Todos') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.categories && project.categories.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className={styles.projectSection}>
      <h1 className={styles.sectionTitle}>Nossos Projetos</h1>

      <div className={filterStyles.filterContainer}>
        <button 
          onClick={() => handleFilter('Todos')}
          className={`${filterStyles.filterButton} ${activeFilter === 'Todos' ? filterStyles.active : ''}`}
        >
          Todos
        </button>
        {categories.map(category => (
          <button 
            key={category._id} 
            onClick={() => handleFilter(category.title)}
            className={`${filterStyles.filterButton} ${activeFilter === category.title ? filterStyles.active : ''}`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            imageUrl={project.imageUrl}
          />
        ))}
      </motion.div>
    </section>
  );
}