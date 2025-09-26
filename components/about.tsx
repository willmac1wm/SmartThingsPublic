"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Highlights</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                Trained CPCs and RPOs; designed scenarios on TSS / AT Coach / SGET.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                Former FAA Operations Supervisor, led up to 26 controllers in combined TRACON/Tower.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                UAS & Counter-UAS integration with local airspace; COA coordination.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                U.S. Navy ATC Facility Supervisor (Diego Garcia, NGU/NHU).
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl md:col-span-2">
              <p className="text-muted-foreground leading-relaxed">
                Entrepreneur: managed 15 rentals; $1.2M duplex; $2M sales; $649K construction in 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
