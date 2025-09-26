"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Air Traffic Control",
    skills: ["Tower & TRACON Ops", "ATC Training & Simulation", "Safety Oversight & AOV", "TSS/AT Coach/SGET"],
  },
  {
    title: "UAS & Integration",
    skills: ["UAS Integration", "Counter-UAS", "COA Coordination", "Part 107", "Advanced ATC"],
  },
  {
    title: "Leadership & Training",
    skills: ["Curriculum Design", "Scenario Development", "Team Leadership", "Stakeholder Communications"],
  },
  {
    title: "Business & Management",
    skills: ["Property Management", "Project Management", "Budget Management", "Entrepreneurship"],
  },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Core Skills</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional expertise across aviation operations, training, and business management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
