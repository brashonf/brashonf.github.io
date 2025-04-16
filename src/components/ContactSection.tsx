
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-200 mb-2">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <Card className="bg-[#112240] border-gray-800 max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Button className="w-full group" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:text-[#64FFDA]" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" className="w-full group" asChild>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:text-[#64FFDA]" />
                  Message on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactSection
