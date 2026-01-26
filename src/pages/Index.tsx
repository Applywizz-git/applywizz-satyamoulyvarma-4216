import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import LoadingScreen from '@/components/3d/LoadingScreen';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <CertificationsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
