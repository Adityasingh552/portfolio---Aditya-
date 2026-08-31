import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Folder, Briefcase, Award, Code2, GraduationCap } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function About() {
  const { name } = profileData.personal
  const [imgError, setImgError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projectsCount = profileData.projects?.length || 0
  const internshipsCount = profileData.experience?.filter(
    (exp) => exp.role?.toLowerCase().includes('intern')
  ).length || 0
  const certificationsCount = profileData.certifications?.length || 0
  const coreStack = profileData.skills?.["Programming Languages"]?.[0] || "Python"

  const statItems = [
    {
      label: 'Projects shipped',
      value: projectsCount,
      icon: Folder,
    },
    {
      label: 'Internships',
      value: internshipsCount,
      icon: Briefcase,
    },
    {
      label: 'Certifications',
      value: certificationsCount,
      icon: Award,
    },
    {
      label: 'Core stack',
      value: coreStack,
      icon: Code2,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.35 : 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Burgundy/Gold ambient glow highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#d4af37]/3 blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? '-30px' : '-100px' }}
        variants={fadeInVariants}
        className="space-y-8"
      >
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
          <div className="w-20 md:w-1.5 h-1 md:h-8 bg-gradient-to-r md:bg-gradient-to-b from-[#d4af37] to-[#d4af37]/40 rounded-full mx-auto md:mx-0 order-2 md:order-1" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight order-1 md:order-2">
            About <span className="bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Profile Card Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[var(--surface)] p-6 rounded-2xl border border-[#d4af37]/10">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#d4af37]/35 overflow-hidden flex items-center justify-center bg-[#150709] shrink-0">
            {!imgError ? (
              <img
                src={`/${profileData.personal.profileImage || 'profile.jpg'}`}
                alt={name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-display font-bold text-[#d4af37]">
                AS
              </span>
            )}
          </div>
          <div className="flex-1 text-center sm:text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--warm-white)]">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-stone-300 font-light max-w-2xl leading-relaxed">
              AI/ML engineer, building intelligent systems that verify, predict, and automate.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3"
        >
          {statItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[#d4af37]/10 flex flex-col justify-between min-h-[120px] transition-all duration-300 hover:border-[#d4af37]/30"
              >
                <div className="space-y-1.5">
                  <Icon className="w-5 h-5 text-[#d4af37]" />
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">{item.label}</p>
                </div>
                <p className="text-3xl font-bold font-display text-white mt-4">
                  {item.value}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Currently Card */}
        <motion.div
          variants={cardVariants}
          className="p-5 rounded-2xl bg-[var(--surface)] border border-[#d4af37]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-[#d4af37]/30"
        >
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block">Currently</span>
            <p className="text-stone-200 text-sm sm:text-base font-light leading-relaxed">
              Final-year B.Tech CSE (AI and ML), K.R. Mangalam University — graduating July 2027
            </p>
          </div>
          <div className="shrink-0 p-2 rounded-lg bg-[#d4af37]/5 text-[#d4af37] hidden sm:block">
            <GraduationCap className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
