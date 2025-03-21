import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Twitter } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong
              foundation in both frontend and backend technologies, I create seamless, user-friendly experiences that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and staying updated with the latest industry
              trends.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </Button>

              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

