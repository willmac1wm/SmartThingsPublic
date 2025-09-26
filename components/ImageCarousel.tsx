"use client"

import { useState, useEffect } from "react"

const images = [
  {
    src: "/images/william-cockpit.jpg",
    alt: "William Macomber in military aircraft cockpit",
  },
  {
    src: "/images/william-flight-gear.jpeg",
    alt: "William Macomber in military flight gear",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-80 h-60 mx-auto">
      <div className="overflow-hidden rounded-lg shadow-2xl">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="w-full h-60 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
