import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import HomeCTA from '../components/HomeCTA'; // 1. Importa o novo CTA

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGrid />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <HomeCTA />
    </div>
  );
}