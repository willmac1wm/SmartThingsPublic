"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    interest: "ATC Technology Consulting",
    msg: "",
  })
  const [showResumeGate, setShowResumeGate] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `[Website] ${formData.interest} — ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrg: ${formData.org}\nInterest: ${formData.interest}\n\nMessage:\n${formData.msg}\n`

    // Open mailto
    const mailtoUrl = `mailto:WillMac1.WM@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    // Show resume gate
    setShowResumeGate(true)
  }

  const handleJustSayHi = () => {
    const mailtoUrl =
      "mailto:WillMac1.WM@gmail.com?subject=Hello%20from%20your%20website&body=Hi%20William%20—%20quick%20hello."
    window.location.href = mailtoUrl
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to modernize your ATC operations? Let's discuss your needs and I'll send you my resume.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    value={formData.org}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ATC Technology Consulting">ATC Technology Consulting</option>
                    <option value="Training Methods / Simulation">Training Methods / Simulation</option>
                    <option value="UAS / Drone Project">UAS / Drone Project</option>
                    <option value="Other / Not sure">Other / Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="msg" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={5}
                  value={formData.msg}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="What are you trying to accomplish? (1-3 sentences)"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send & Request Resume
                </button>
                <button
                  type="button"
                  onClick={handleJustSayHi}
                  className="flex-1 border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800"
                >
                  Just Say Hi
                </button>
              </div>

              <p className="text-sm text-gray-400 text-center">
                Privacy: I only use your contact to respond to your inquiry. No spam, no sharing.
              </p>

              {showResumeGate && (
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Thanks — Resume Link Unlocked!</h3>
                  <p className="text-gray-300 mb-4">
                    <a href="resume.pdf" download className="text-blue-400 hover:text-blue-300 underline">
                      Download Resume (PDF)
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    I've also opened an email in your mail client so we can connect.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
