import { Github, Linkedin, Mail } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Footer() {
  const { name, socials } = profileData.personal
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#0a0e1a]/40 py-10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name / Brand */}
        <div className="flex items-center space-x-2">
          <span className="font-display font-bold text-base tracking-tight text-white">
            {name}
          </span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-slate-400 text-xs font-light">
            AI/ML & Full Stack Portfolio
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400 font-light order-last md:order-none">
          &copy; {currentYear} {name}. All rights reserved.
        </p>

        {/* Social connections */}
        <div className="flex items-center space-x-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
