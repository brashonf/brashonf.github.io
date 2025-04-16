
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  imageUrl: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  imageUrl
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border border-gray-800 bg-[#112240] hover:border-[#64FFDA] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-200">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-[#1A1F2C] text-[#64FFDA]">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <Button variant="ghost" size="sm" className="group" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:text-[#64FFDA]" />
                Code
              </a>
            </Button>
          )}
          {demoLink && (
            <Button variant="ghost" size="sm" className="group" asChild>
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:text-[#64FFDA]" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
