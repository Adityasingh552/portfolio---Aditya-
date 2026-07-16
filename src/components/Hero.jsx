import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Bot, Sparkles, Terminal } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Hero() {
  const { name, title, subtitle, resumeUrl } = profileData.personal
  const [imgSrc, setImgSrc] = useState('/profile.jpg')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.2,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: isMobile ? 15 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: isMobile
        ? { duration: 0.35, ease: 'easeOut' }
        : { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Visual Decoration / Ambient Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-blue-500/10 bg-radial-gradient from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/5 text-xs font-semibold uppercase tracking-wider font-display glow-blue"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              {name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              download
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Photo with Glowing Effect */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center items-center mt-12 lg:mt-0"
        >
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 opacity-60 blur-xl group-hover:opacity-85 transition duration-1000 group-hover:duration-200" />
            
            {/* Image Wrapper */}
            <motion.div 
              initial={{ scale: isMobile ? 0.98 : 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, ease: 'easeOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-[2.5rem] overflow-hidden p-[3px] bg-gradient-to-tr from-blue-500 via-violet-500 to-emerald-500 shadow-2xl"
            >
              <img 
                src={imgSrc} 
                alt={name} 
                onError={() => setImgSrc('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400')}
                className="w-full h-full object-cover rounded-[2.4rem] bg-slate-950 transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Floating Info Badge 1: AI/ML Status */}
            <motion.div 
              initial={{ opacity: 0, x: isMobile ? -10 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: isMobile ? 0.2 : 0.4, duration: isMobile ? 0.35 : 0.6 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2 shadow-lg"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-gray-300">Active Pipeline</span>
            </motion.div>

            {/* Floating Info Badge 2: Specialization */}
            <motion.div 
              initial={{ opacity: 0, x: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: isMobile ? 0.3 : 0.6, duration: isMobile ? 0.35 : 0.6 }}
              className="absolute -top-4 -right-4 glass px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2 shadow-lg"
            >
              <Bot className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-mono text-gray-300">AI/ML Engineer</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
