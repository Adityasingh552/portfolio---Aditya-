import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import profileData from '../data/profileData.json'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { name, socials } = profileData.personal

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/30 border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              {name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-lg bg-black/90 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex items-center justify-around border-t border-white/5">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-2"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${socials.email}`}
                  className="text-gray-400 hover:text-white p-2"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
