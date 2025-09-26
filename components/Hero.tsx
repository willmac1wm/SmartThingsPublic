"use client"

import ImageCarousel from "./ImageCarousel"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <ImageCarousel />
          </div>

          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">William E. Macomber</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              From the tower to technology: helping teams modernize how they train and operate in Air Traffic Control
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8">
              <a
                href="mailto:WillMac1.WM@gmail.com?subject=Consult%20inquiry"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Me
              </a>
              <a href="#journey" className="text-gray-400 hover:text-white transition-colors">
                My Journey →
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Current: ATC Instructor (SAIC/FAA CTS) • Former FAA ACY Operations Supervisor • Part 107 & Private Pilot
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
