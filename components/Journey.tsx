"use client"

import { useEffect, useRef, useState } from "react"

export default function Journey() {
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
    <section id="journey" ref={sectionRef} className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">My Professional Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I started my career in the U.S. Navy, learning air traffic control in places where mistakes weren't an
              option — from the remote island of Diego Garcia to the busy skies of Norfolk and Guantanamo Bay. In those
              environments, I learned that precision, leadership, and adaptability aren't just skills — they're
              survival.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              When I transitioned to the FAA, I became an Operations Supervisor at ACY, responsible for up to 26
              controllers in combined TRACON and Tower operations. It was here I realized something: while technology
              was advancing, training methods were stuck in the past.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              That insight led me to my current work as an ATC Instructor with SAIC/FAA CTS. I've focused on
              simulation-first training — using tools like TSS, AT Coach, and SGET — to cut certification times, improve
              safety, and better prepare the next generation of controllers for real-world scenarios.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Alongside ATC, I've worked on UAS integration: coordinating COAs, implementing counter-UAS procedures, and
              exploring how drones fit into controlled airspace. And through my entrepreneurial ventures — from managing
              15 rental properties to delivering a $649K construction project in just six months — I've learned that
              innovation takes more than vision. It takes execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
