import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Your Project Title",
    description: "Description of your data science project. What problem did it solve? What technologies did you use?",
    technologies: ["Python", "scikit-learn", "pandas", "Your Tools"],
    githubLink: "https://github.com/your-username/project",
    demoLink: "https://your-demo-link.com",
    imageUrl: "/placeholder.svg"
  },
  // Add more projects following the same structure
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
