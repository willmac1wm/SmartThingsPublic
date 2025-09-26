"use client"

import { useEffect, useRef, useState } from "react"

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

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Core Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional expertise across aviation operations, training, and business management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 card-hover">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
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
