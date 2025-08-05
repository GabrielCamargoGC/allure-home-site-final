'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; 
import styles from './ProjectGrid.module.css';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 
    }
  }
};

export default function ProjectGridClient({ projects }) {
  return (
    <motion.section 
      className={styles.projectSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={gridVariants}
    >
      <h2 className={styles.sectionTitle}>Nossos Projetos</h2>
      <motion.div 
        className={styles.grid}
        variants={gridVariants}
      >
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            imageUrl={project.imageUrl}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}