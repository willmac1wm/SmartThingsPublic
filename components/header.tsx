"use client"

export function Header() {
  const handleResumeGate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    // Show toast notification
    const toast = document.getElementById("toast")
    if (toast) {
      toast.textContent = "Enter your email to get the résumé link."
      toast.style.display = "block"
      setTimeout(() => (toast.style.display = "none"), 3500)
    }
  }

  return (
    <header>
      <div className="id">
        <div className="avatar" aria-hidden="true">
          WM
        </div>
        <div>
          <div className="name">William E. Macomber</div>
          <div className="tag">Aviation & ATC Technology • Simulation-first training • UAS integration</div>
        </div>
      </div>
      <nav>
        <a className="btn primary" href="#contact">
          Start a consult
        </a>
        <a className="btn" href="#services">
          What I do
        </a>
        <button className="btn ghost" onClick={handleResumeGate} type="button">
          Request résumé
        </button>
      </nav>
    </header>
  )
}
