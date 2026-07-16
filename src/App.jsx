import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden font-sans">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/10 blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[40%] rounded-full bg-emerald-950/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-36 pb-16">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          <Projects selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
