import { motion } from 'framer-motion'

export default function SkillChip({ skill, isActive, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 font-display ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 border border-transparent'
          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10'
      }`}
    >
      {skill}
    </motion.button>
  )
}
