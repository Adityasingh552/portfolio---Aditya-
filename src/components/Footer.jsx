import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Footer() {
  const { personal } = profileData
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-[#080a12]/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-display font-bold text-white text-base">
              {personal.name}
            </p>
            <p className="text-xs text-stone-400">
              © {currentYear} {personal.name}. Built with React, Tailwind CSS, & Vite.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-4">
            {personal.socials?.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-stone-400 hover:text-[#d4af37] hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personal.socials?.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-stone-400 hover:text-[#d4af37] hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personal.socials?.email && (
              <a
                href={`mailto:${personal.socials.email}`}
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-stone-400 hover:text-[#d4af37] hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 hover:bg-[#d4af37] hover:text-[#0f0d0d] transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
