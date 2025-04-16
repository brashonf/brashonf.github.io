
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Admissions Analysis & Interview Behavior",
    description: "Led analysis of university applications and interview behaviors, exploring trends in application timing, SAT scores, demographics, and interviewer patterns using R (tidyverse, ggplot2, lubridate).",
    technologies: ["R", "tidyverse", "ggplot2", "lubridate"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Asset Utilization & Status Analysis",
    description: "Analyzed 37,000+ records of asset utilization data, identifying optimization opportunities through cycle count and usage hour trends across facilities.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    githubLink: "https://github.com/your-username/asset-utilization",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-2">Projects</h2>
        <p className="text-muted-foreground mb-12">Some of my recent work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
