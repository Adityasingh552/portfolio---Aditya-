import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter, X } from 'lucide-react'
import profileData from '../data/profileData.json'
import SkillChip from './SkillChip'

export default function Skills({ selectedTag, setSelectedTag }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categories = profileData.skills

  const handleSkillClick = (skill) => {
    if (selectedTag === skill) {
      setSelectedTag(null) // deselect
    } else {
      setSelectedTag(skill) // select
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: isMobile
        ? { duration: 0.35, ease: 'easeOut' }
        : { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="skills" className="relative scroll-mt-24">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="space-y-12">
        {/* Section Heading & Filter Info */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
            <div className="w-20 md:w-1.5 h-1 md:h-8 bg-gradient-to-r md:bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full mx-auto md:mx-0 order-2 md:order-1" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight order-1 md:order-2">
              Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
          </div>

          {/* Active Filter Banner */}
          {selectedTag && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/25 px-4 py-2 rounded-full"
            >
              <Filter className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                Filtering by: <strong className="text-blue-400 font-medium">{selectedTag}</strong>
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className="hover:bg-blue-500/20 p-1 rounded-full transition-colors ml-1"
                aria-label="Clear filter"
              >
                <X className="w-3 h-3 text-blue-400" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Skills Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? '-30px' : '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(categories).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="glass p-6 rounded-2xl relative group overflow-hidden gradient-border-hover border border-white/5"
            >
              {/* Corner ambient accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="text-base font-bold font-display text-white border-b border-white/5 pb-3 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skillList.map((skill) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    isActive={selectedTag === skill}
                    onClick={() => handleSkillClick(skill)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
