import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Experience() {
  const experiences = profileData.experience
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: isMobile ? -15 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: isMobile
        ? { duration: 0.35, ease: 'easeOut' }
        : { type: 'spring', stiffness: 80, damping: 15 }
    }
  }

  return (
    <section id="experience" className="relative scroll-mt-24">
      {/* Background glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="space-y-12">
        {/* Section Heading */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-3xl mx-auto md:mx-0 pl-8 md:pl-10 space-y-12 py-4">
          {/* Vertical glowing timeline line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500/10" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? '-30px' : '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[37px] md:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0a0a0f] border-2 border-violet-500 flex items-center justify-center transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-110">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-400 group-hover:bg-emerald-400 transition-colors" />
                </div>

                {/* Content Card */}
                <div className="glass p-6 rounded-2xl relative overflow-hidden transition-all duration-300 group-hover:border-white/15 hover:shadow-xl hover:shadow-violet-950/10">
                  {/* Subtle border shine effect */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-violet-500 rounded-l-2xl" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-violet-400 font-display">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-gray-500 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                      <span className="text-gray-600">•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-gray-400 text-sm font-light leading-relaxed mt-4 whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
