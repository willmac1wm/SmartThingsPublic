"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "[Your Current Role]",
    company: "[Company Name]",
    period: "2024 — Present",
    description:
      "Build and maintain critical components used to construct [Company]'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    title: "[Previous Role]",
    company: "[Previous Company]",
    period: "2022 — 2024",
    description:
      "Developed and maintained web applications for [description of work]. Led initiatives to improve code quality and implement modern development practices. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "[Earlier Role]",
    company: "[Earlier Company]",
    period: "2020 — 2022",
    description:
      "Started as [initial role] and grew into [evolved role]. Worked on [projects/responsibilities]. Gained experience in [key learnings and technologies].",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Experience</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="text-sm text-primary font-medium">{exp.period}</div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <div className="text-lg text-primary">{exp.company}</div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {index < experiences.length - 1 && <div className="mt-12 border-b border-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
