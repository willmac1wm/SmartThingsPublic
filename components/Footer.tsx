"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:WillMac1.WM@gmail.com" className="hover:text-blue-400 transition-colors">
                  WillMac1.WM@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Specialties</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>ATC Technology Consulting</p>
              <p>Simulation-First Training</p>
              <p>UAS Integration</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Current Role</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>ATC Instructor</p>
              <p>SAIC/FAA CTS</p>
              <p>Part 107 & Private Pilot</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 William E. Macomber. Professional ATC Technology Consulting.</p>
        </div>
      </div>
    </footer>
  )
}
