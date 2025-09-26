"use client"

import { useState } from "react"

interface ExperienceDetail {
  title: string
  company: string
  period: string
  description: string
  keyAchievements: string[]
  technologies: string[]
}

const experienceDetails: ExperienceDetail[] = [
  {
    title: "ATC Instructor",
    company: "SAIC/FAA CTS",
    period: "2020 — Present",
    description:
      "Leading the modernization of ATC training through simulation-first methodologies and advanced scenario design.",
    keyAchievements: [
      "Designed 50+ training scenarios using TSS, AT Coach, and SGET platforms",
      "Reduced average CPC certification time by 15% through improved training methods",
      "Trained over 100 controllers and RPOs with 98% pass rate",
      "Pioneered integration of real-world UAS scenarios into training curriculum",
    ],
    technologies: ["TSS", "AT Coach", "SGET", "Simulation Design", "Training Development"],
  },
  {
    title: "Operations Supervisor",
    company: "FAA ACY",
    period: "2015 — 2020",
    description:
      "Supervised complex TRACON/Tower operations while leading UAS integration initiatives and safety programs.",
    keyAchievements: [
      "Managed up to 26 controllers in combined operations environment",
      "Implemented first UAS integration procedures at ACY",
      "Led safety initiatives resulting in zero operational errors during tenure",
      "Coordinated with military and civilian agencies for airspace management",
    ],
    technologies: [
      "TRACON Operations",
      "Tower Control",
      "UAS Integration",
      "Safety Management",
      "Airspace Coordination",
    ],
  },
  {
    title: "ATC Facility Supervisor",
    company: "U.S. Navy",
    period: "2008 — 2015",
    description:
      "Managed air traffic control operations in high-tempo military environments across multiple international locations.",
    keyAchievements: [
      "Supervised ATC operations at Diego Garcia, Norfolk, and Guantanamo Bay",
      "Maintained 100% operational readiness during critical military operations",
      "Coordinated with international partners and coalition forces",
      "Led facility upgrades and technology implementations",
    ],
    technologies: ["Military ATC", "International Coordination", "Facility Management", "Coalition Operations"],
  },
]

export default function ExperienceButtons() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetail | null>(null)

  const openModal = (experience: ExperienceDetail) => {
    setSelectedExperience(experience)
  }

  const closeModal = () => {
    setSelectedExperience(null)
  }

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Click on any role to learn more about my specific achievements and contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experienceDetails.map((exp, index) => (
              <button
                key={index}
                onClick={() => openModal(exp)}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-left hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="text-sm text-blue-400 font-medium">{exp.period}</div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-lg text-gray-300">{exp.company}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  <div className="text-blue-400 text-sm font-medium">Click for details →</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedExperience.title}</h3>
                  <div className="text-lg text-blue-400">{selectedExperience.company}</div>
                  <div className="text-sm text-gray-400">{selectedExperience.period}</div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl font-bold">
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-300 leading-relaxed">{selectedExperience.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedExperience.keyAchievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech) => (
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
          </div>
        </div>
      )}
    </section>
  )
}
