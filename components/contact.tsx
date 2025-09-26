"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
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

    // Show toast
    const toast = document.getElementById("toast")
    if (toast) {
      toast.textContent = "Opening your email app… résumé link unlocked below."
      toast.style.display = "block"
      setTimeout(() => (toast.style.display = "none"), 3500)
    }
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
    <section id="contact">
      <h2>Quick inquiry</h2>
      <p className="muted">Tell me briefly what you need. I'll reply with next steps and send the résumé link.</p>
      <form id="leadForm" className="small" onSubmit={handleSubmit}>
        <div className="grid">
          <input
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            id="email"
            name="email"
            placeholder="Your email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            id="org"
            name="org"
            placeholder="Company / org (optional)"
            value={formData.org}
            onChange={handleInputChange}
          />
          <select id="interest" name="interest" required value={formData.interest} onChange={handleInputChange}>
            <option value="ATC Technology Consulting">ATC Technology Consulting</option>
            <option value="Training Methods / Simulation">Training Methods / Simulation</option>
            <option value="UAS / Drone Project">UAS / Drone Project</option>
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>
        <textarea
          id="msg"
          name="msg"
          rows={5}
          placeholder="What are you trying to accomplish? (1–3 sentences)"
          value={formData.msg}
          onChange={handleInputChange}
        />
        <div className="row" style={{ marginTop: "10px" }}>
          <button className="btn primary" type="submit">
            Send & request résumé
          </button>
          <button className="btn ghost" type="button" onClick={handleJustSayHi}>
            Just email me
          </button>
        </div>
        <p className="note muted">Privacy: I only use your contact to respond to your inquiry. No spam, no sharing.</p>

        {showResumeGate && (
          <div id="resumeGate" className="card" style={{ marginTop: "12px" }}>
            <b>Thanks — résumé link unlocked:</b>
            <p className="small">
              <a href="resume.pdf" download>
                Download résumé (PDF)
              </a>
            </p>
            <p className="small muted">I've also opened an email in your mail client so we can connect.</p>
          </div>
        )}
      </form>
    </section>
  )
}
