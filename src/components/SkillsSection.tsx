
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, LineChart, Code2 } from "lucide-react"

const skills = [
  {
    category: "Machine Learning",
    items: ["Neural Networks", "Random Forests", "SVM", "Deep Learning"],
    icon: Brain
  },
  {
    category: "Data Analysis",
    items: ["Statistical Analysis", "Data Visualization", "Hypothesis Testing", "A/B Testing"],
    icon: LineChart
  },
  {
    category: "Tools & Databases",
    items: ["SQL", "MongoDB", "Hadoop", "Spark"],
    icon: Database
  },
  {
    category: "Libraries & Frameworks",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "pandas"],
    icon: Code2
  }
]

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 mb-2">Skills</h2>
        <p className="text-gray-400 mb-12">Technologies and tools I work with</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, items, icon: Icon }) => (
            <Card key={category} className="bg-[#1A1F2C] border-gray-800">
              <CardContent className="pt-6">
                <Icon className="w-8 h-8 text-[#64FFDA] mb-4" />
                <h3 className="text-xl font-semibold text-gray-200 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
