"use client"

export default function Header() {
  const handleResumeGate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              WM
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">William E. Macomber</h1>
              <p className="text-sm text-gray-400">Aviation & ATC Technology Consultant</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-gray-800"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Skills
            </a>
            <button
              onClick={handleResumeGate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get Resume
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
