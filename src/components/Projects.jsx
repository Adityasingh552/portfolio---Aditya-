
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import profileData from '../data/profileData.json'
import ProjectCard from './ProjectCard'

export default function Projects({ selectedTag, setSelectedTag }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = profileData.projects

  // Filter projects if selectedTag is set
  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects

  return (
    <section id="projects" className="relative scroll-mt-24">
      {/* Ambient background glow decoration */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="space-y-12">
        {/* Section Heading & Reset Filter Action */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
            <div className="w-20 md:w-1.5 h-1 md:h-8 bg-gradient-to-r md:bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full mx-auto md:mx-0 order-2 md:order-1" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight order-1 md:order-2">
              Featured <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/15 px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-all duration-300 w-fit"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Project Grid */}
        <motion.div
          layout={!isMobile}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout={!isMobile}
                initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: isMobile ? 0.98 : 0.9 }}
                transition={{ duration: isMobile ? 0.2 : 0.3 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onTagClick={(tag) => setSelectedTag(tag === selectedTag ? null : tag)}
                  activeTag={selectedTag}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl bg-white/5">
            <p className="text-gray-400">No projects found with tag "#{selectedTag}"</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-[#d4af37] hover:text-[#f3e5ab] font-medium underline text-sm"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
