import { motion } from 'framer-motion'
import { ArrowRight, FileText, Bot, Sparkles, Terminal } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Hero() {
  const { name, title, subtitle, resumeUrl } = profileData.personal

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
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

        {/* Right Column: Premium AI Card Mockup Visual */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group p-1.5 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-violet-500/10 to-emerald-500/20 border border-white/5 glow-violet">
            <div className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between aspect-square">
              {/* Card Glow Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-600/20 to-transparent blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs text-gray-400">engine_status: ready</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Code Snippet / AI Agent Simulation Visual */}
              <div className="flex-1 py-6 font-mono text-xs sm:text-sm text-gray-300 space-y-4">
                <p className="text-gray-500">{"// Orchestrating AI verification pipeline"}</p>
                <p>
                  <span className="text-violet-400">const</span> agent = <span className="text-blue-400">new</span> <span className="text-emerald-400">LangChainAgent</span>({'{'}
                  <br />
                  &nbsp;&nbsp;model: <span className="text-amber-300">'gpt-4o'</span>,
                  <br />
                  &nbsp;&nbsp;temperature: <span className="text-emerald-400">0.0</span>
                  <br />
                  {'}'})
                </p>
                <p>
                  <span className="text-violet-400">await</span> agent.<span className="text-blue-400">run</span>({'{'}
                  <br />
                  &nbsp;&nbsp;verifyClaims: <span className="text-blue-400">true</span>,
                  <br />
                  &nbsp;&nbsp;backend: <span className="text-amber-300">'FastAPI'</span>
                  <br />
                  {'}'})
                </p>
                <p className="text-emerald-400 flex items-center space-x-2 animate-pulse mt-4">
                  <Bot className="w-4 h-4" />
                  <span>Pipeline Active: 100% Verified</span>
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs text-gray-500">
                <span>Aditya Singh</span>
                <span>K.R. Mangalam University</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
