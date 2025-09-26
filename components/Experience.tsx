"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "ATC Instructor",
    company: "SAIC/FAA CTS",
    period: "2020 — Present",
    description:
      "Lead instructor for Air Traffic Control training programs. Design and implement simulation scenarios using TSS, AT Coach, and SGET platforms. Train CPCs and RPOs with focus on safety and operational efficiency.",
    technologies: ["TSS", "AT Coach", "SGET", "ATC Training", "Simulation Design"],
  },
  {
    title: "Operations Supervisor",
    company: "FAA ACY",
    period: "2015 — 2020",
    description:
      "Supervised up to 26 controllers in combined TRACON/Tower operations. Managed daily operations, safety oversight, and training coordination. Led initiatives for UAS integration and counter-UAS procedures.",
    technologies: ["TRACON Operations", "Tower Control", "UAS Integration", "Safety Management"],
  },
  {
    title: "ATC Facility Supervisor",
    company: "U.S. Navy",
    period: "2008 — 2015",
    description:
      "Facility Supervisor at Diego Garcia, NGU/NHU. Managed air traffic control operations in high-tempo military environment. Coordinated with international partners and maintained operational readiness.",
    technologies: ["Military ATC", "International Coordination", "Facility Management"],
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="text-sm text-blue-400 font-medium">{exp.period}</div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <div className="text-lg text-blue-400">{exp.company}</div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index < experiences.length - 1 && <div className="mt-12 border-b border-gray-800"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
