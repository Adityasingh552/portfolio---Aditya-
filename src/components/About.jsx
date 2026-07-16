import { motion } from 'framer-motion'
import { GraduationCap, Code2, BrainCircuit, Calendar } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function About() {
  const { summary } = profileData.about
  
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      label: 'B.Tech CSE',
      value: 'AI & ML Spec.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-violet-400" />,
      label: 'Graduating',
      value: 'July 2027'
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
      label: 'Core Focus',
      value: 'AI/ML & Agents'
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      label: 'Tech Stack',
      value: 'FastAPI + React'
    }
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  }

  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
        className="space-y-12"
      >
        {/* Section Heading */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded mx-auto md:mx-0" />
        </div>

        {/* Narrative and Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              {summary}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-violet-500/40 pl-4 py-1">
              "Building systems that don't just calculate, but think, verify, and streamline workflows. From automating CCTV accident detection to deploying AI-powered hiring receptionists."
            </p>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-4">
                  <div className="p-2 w-fit rounded-lg bg-white/5">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</h3>
                    <p className="text-sm sm:text-base font-semibold font-display text-white mt-1">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
