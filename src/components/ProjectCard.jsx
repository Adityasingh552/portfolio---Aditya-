import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'

export default function ProjectCard({ project, onTagClick, activeTag }) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [spotlightStyle, setSpotlightStyle] = useState({ opacity: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    
    const x = e.clientX - rect.left // Mouse position inside card (X)
    const y = e.clientY - rect.top  // Mouse position inside card (Y)
    
    // Calculate rotation angles based on cursor offset from card center
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rx = -(y - centerY) / 20 // Max tilt angle vertical
    const ry = (x - centerX) / 20  // Max tilt angle horizontal
    
    setRotateX(rx)
    setRotateY(ry)

    // Dynamic radial gradient moving with mouse
    setSpotlightStyle({
      opacity: 1,
      background: `radial-gradient(300px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.05) 50%, transparent 100%)`
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setSpotlightStyle({ opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-in-out',
        transformStyle: 'preserve-3d'
      }}
      className="glass p-6 rounded-2xl flex flex-col justify-between h-full relative group overflow-hidden border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5"
    >
      {/* Dynamic Cursor spotlight follow glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={spotlightStyle}
      />

      <div style={{ transform: 'translateZ(20px)' }} className="space-y-4 relative z-10">
        {/* Header Icon & Links */}
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
            <Code className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Interactive Tag badging */}
      <div style={{ transform: 'translateZ(10px)' }} className="pt-6 relative z-10 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
              activeTag === tag
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/5'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  )
}
