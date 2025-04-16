
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A192F] to-[#112240]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#64FFDA] font-mono mb-5">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-4">
          Your Name
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6">
          I build with data.
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          I'm a data scientist specializing in building and deploying machine learning models.
          I transform complex data into actionable insights.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="group" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:text-[#64FFDA] transition-colors" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="group" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2 group-hover:text-[#64FFDA] transition-colors" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="group" asChild>
            <a href="mailto:your.email@example.com">
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
