'use client';

import { motion } from 'framer-motion';
import ProjectCard  from './ProjectCard';
import styles from './ProjectGrid.module.css';

export default function ProjectGridClient({ projects }) {
  return (
    <motion.section 
      className={styles.projectSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={styles.sectionTitle}>Nossos Projetos</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </motion.section>
  );
}