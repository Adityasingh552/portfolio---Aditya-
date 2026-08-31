import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Hero() {
  const { personal } = profileData

  return (
    <section id="hero" className="relative pt-12 pb-8 sm:pt-20 sm:pb-16 flex flex-col items-center justify-center text-center">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-[140px] pointer-events-none" />

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#d4af37]/30 backdrop-blur-md mb-6 shadow-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
        </span>
        <span className="text-xs font-medium text-stone-300 font-mono tracking-wide">
          Available for AI / ML Roles & Projects
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-none"
      >
        Hi, I'm{' '}
        <span className="bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] bg-clip-text text-transparent">
          {personal.name}
        </span>
      </motion.h1>

      {/* Role / Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-300 font-medium font-display"
      >
        {personal.title}
      </motion.p>

      {/* Bio / Value Prop */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl font-light leading-relaxed"
      >
        {personal.subtitle} Specializing in machine learning pipelines, deep learning computer vision architectures, and robust intelligent backend services.
      </motion.p>

      {/* CTA Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d4af37] to-[#b89628] hover:from-[#e5c158] hover:to-[#c5a030] text-[#0f0d0d] transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#d4af37]/20 btn-glow-hover"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href={`/${personal.resumeUrl || 'resume.pdf'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-stone-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
        >
          <Download className="w-4 h-4 text-[#d4af37]" />
          <span>Resume</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-stone-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
        >
          <Mail className="w-4 h-4 text-[#d4af37]" />
          <span>Get in Touch</span>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 flex items-center space-x-5"
      >
        {personal.socials?.github && (
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {personal.socials?.linkedin && (
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {personal.socials?.email && (
          <a
            href={`mailto:${personal.socials.email}`}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 transition-all duration-200"
            aria-label="Email Aditya"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </motion.div>
    </section>
  )
}
