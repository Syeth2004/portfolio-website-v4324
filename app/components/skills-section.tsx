import { Code, Database, Globe, Layout, Server, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "Django", "REST APIs"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      title: "Web Performance",
      description: "Optimizing applications for speed and efficiency",
      icon: <Globe className="h-10 w-10 text-primary" />,
      technologies: ["Lazy Loading", "Code Splitting", "Caching", "CDN", "Compression"],
    },
    {
      title: "DevOps",
      description: "Streamlining development and deployment processes",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      technologies: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
      title: "Programming Languages",
      description: "Proficient in multiple programming languages",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                {skill.icon}
                <div>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

