
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive analytics using Python and scikit-learn.",
    technologies: ["Python", "scikit-learn", "pandas", "Docker"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Time Series Analysis",
    description: "Financial market prediction using advanced time series analysis.",
    technologies: ["Python", "TensorFlow", "Numpy", "Matplotlib"],
    githubLink: "https://github.com",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "NLP Classification",
    description: "Text classification system using natural language processing.",
    technologies: ["Python", "NLTK", "Transformers", "PyTorch"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    imageUrl: "/placeholder.svg"
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 mb-2">Projects</h2>
        <p className="text-gray-400 mb-12">Some of my recent work</p>
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
