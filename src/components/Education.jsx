import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Education() {
  const educationList = profileData.education
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const fadeInVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.35 : 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="education" className="relative scroll-mt-24">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? '-30px' : '-100px' }}
        variants={fadeInVariants}
        className="space-y-12"
      >
        {/* Section Heading */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Education Card Grid */}
        <div className="max-w-3xl">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="relative group p-1 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-violet-500/5 to-emerald-500/10 border border-white/5 glow-blue hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col sm:flex-row items-start gap-6">
                {/* Border Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
                
                {/* Icon Wrapper */}
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/10 flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>

                {/* Text Content */}
                <div className="flex-grow space-y-4 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-200">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-violet-400 mt-1 font-display">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span>{edu.status}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2 border-t border-white/5">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
