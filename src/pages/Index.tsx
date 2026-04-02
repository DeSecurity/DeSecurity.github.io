import GridBackground from "@/components/GridBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValueSection from "@/components/ValueSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import WritingSection from "@/components/WritingSection";
import HireMeSection from "@/components/HireMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="dark min-h-screen bg-background text-foreground">
    <GridBackground />
    <Navigation />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <SpecializationsSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <CertificationsSection />
      <WritingSection />
      <HireMeSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
