import SpiderNav from "@/components/SpiderNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WebCursor from "@/components/WebCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <WebCursor />
      <SpiderNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;