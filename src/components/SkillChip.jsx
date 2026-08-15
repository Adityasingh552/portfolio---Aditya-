import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SkillChip({ skill, isActive, onClick }) {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouch()
  }, [])

  return (
    <motion.button
      whileHover={isTouch ? {} : { y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 font-display ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 border border-transparent'
          : 'bg-white/5 text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/5 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_12px_rgba(34,211,238,0.12)]'
      }`}
    >
      {skill}
    </motion.button>
  )
}
