import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "your.email@example.com"
}

const personalInfo = {
  greeting: "Hi, my name is",
  name: "Brashon Ford",
  title: "Data Scientist",
  description: "Data professional with an MS in Data Science and experience in statistical modeling, machine learning, and data analysis. Proficient in Python, R, and SQL, specializing in developing predictive models and delivering actionable insights."
}

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A192F] to-[#112240]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#64FFDA] font-mono mb-5">{personalInfo.greeting}</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          {personalInfo.description}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="group" asChild>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:text-[#64FFDA] transition-colors" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="group" asChild>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2 group-hover:text-[#64FFDA] transition-colors" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="group" asChild>
            <a href={`mailto:${socialLinks.email}`}>
              <Mail className="w-5 h-5 mr-2 group-hover:text-[#64FFDA] transition-colors" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
