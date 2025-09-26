"use client"

export default function Toast() {
  return (
    <div
      id="toast"
      className="fixed bottom-6 right-6 bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-lg shadow-lg hidden z-50"
    >
      <p className="text-sm"></p>
    </div>
  )
}
