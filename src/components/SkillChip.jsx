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
          ? 'bg-gradient-to-r from-[#d4af37] to-[#b89628] text-[#0f0d0d] font-semibold shadow-lg shadow-[#d4af37]/20 border border-transparent'
          : 'bg-white/5 text-stone-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 border border-white/5 hover:border-[#d4af37]/30 hover:shadow-[0_0_12px_rgba(212,175,55,0.12)]'
      }`}
    >
      {skill}
    </motion.button>
  )
}
