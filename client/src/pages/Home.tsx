import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesAndCertificationsSection from '@/components/ServicesAndCertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import GallerySection from '@/components/GallerySection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page Component
 * Design Philosophy: Modern Industrial
 * - Complete portfolio website with all sections
 * - Smooth scrolling and animations
 * - Responsive design for all devices
 * - Professional layout and styling
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Services and Certifications Section */}
        <section id="services">
          <ServicesAndCertificationsSection />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
