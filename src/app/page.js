import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import HomeCTA from '../components/HomeCTA'; 

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectGrid />
      <ServicesSection />
      <AboutSection />
      <HomeCTA />
    </div>
  );
}