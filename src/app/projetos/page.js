'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import ProjectCard from '@/components/ProjectCard';
import Modal from '@/components/Modal'; // Importa o nosso novo Modal
import styles from '@/components/ProjectGrid.module.css';
import filterStyles from './Filtro.module.css';

export default function ProjetosPage() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem do modal

  useEffect(() => {
    // ... a sua função fetchData continua exatamente igual ...
    const fetchData = async () => {
      const projectsQuery = `*[_type == "project"] | order(_createdAt desc){_id, title, "imageUrl": mainImage.asset->url, "categories": categories[]->title}`;
      const categoriesQuery = `*[_type == "category"] | order(title asc){_id, title}`;
      const fetchedProjects = await client.fetch(projectsQuery);
      const fetchedCategories = await client.fetch(categoriesQuery);
      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
      setCategories(fetchedCategories);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // ... a sua lógica de filtro continua exatamente igual ...
    let tempProjects = projects;
    if (activeFilter !== 'Todos') {
      tempProjects = tempProjects.filter(project => project.categories && project.categories.includes(activeFilter));
    }
    setFilteredProjects(tempProjects);
  }, [activeFilter, projects]);

  return (
    <>
      <Modal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      <section className={styles.projectSection}>
        <h1 className={styles.sectionTitle}>Nossos Projetos</h1>

        <div className={filterStyles.filterContainer}>
          {/* Seus botões de filtro continuam aqui */}
        </div>

        <motion.div layout className={styles.grid}>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              title={project.title}
              imageUrl={project.imageUrl}
              onZoomClick={() => setSelectedImage(project.imageUrl)}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}