import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Journey from "@/components/Journey"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Toast from "@/components/Toast"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Journey />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </div>
  )
}
