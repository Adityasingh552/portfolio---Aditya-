import { motion } from 'framer-motion'
import { Award, ShieldCheck, Milestone } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Certifications() {
  const certifications = profileData.certifications

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="certifications" className="relative scroll-mt-24">
      {/* Background glow decoration */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
          <div className="w-20 md:w-1.5 h-1 md:h-8 bg-gradient-to-r md:bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full mx-auto md:mx-0 order-2 md:order-1" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight order-1 md:order-2">
            Certifications & <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative glass p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.02] gradient-border-hover"
            >
              {/* Card Hover Sparkle Indicator */}
              <div className="absolute top-4 right-4 text-cyan-500/30 group-hover:text-cyan-400 transition-colors duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="space-y-4">
                {/* Certification Icon */}
                <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 tracking-wider uppercase font-medium">
                    {cert.issuer} {cert.date && `• ${cert.date}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
