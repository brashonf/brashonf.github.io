
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/50">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default Index
