import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare, User, AtSign, TextQuote } from 'lucide-react'
import profileData from '../data/profileData.json'

export default function Contact() {
  const { socials } = profileData.personal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in all required fields.'
      })
      return
    }

    setStatus({ submitting: true, success: null, message: '' })

    try {
      const response = await fetch('https://formspree.io/f/xojgjkno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        message: error.message || 'There was an issue sending your message. Please try again.'
      })
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24">
      {/* Background glow decoration */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-950/15 blur-[120px] pointer-events-none" />

      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-2 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-md mx-auto pt-2">
            Have a project in mind, want to collaborate, or just say hello? Drop a message!
          </p>
        </div>

        {/* Contact Container */}
        <div className="glass p-6 sm:p-10 rounded-3xl relative overflow-hidden border border-white/5 shadow-2xl gradient-border-hover">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Name <strong className="text-red-500/85">*</strong></span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-500/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <AtSign className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email <strong className="text-red-500/85">*</strong></span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-500/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label htmlFor="subject" className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <TextQuote className="w-3.5 h-3.5 text-cyan-400" />
                <span>Subject</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-500/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Message <strong className="text-red-500/85">*</strong></span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                className="w-full bg-white/5 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-500/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Status Feedback Toast/Banner */}
            <AnimatePresence mode="wait">
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-start space-x-3 p-4 rounded-xl border text-sm ${
                    status.success
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {status.success ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="group w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 disabled:from-blue-800 disabled:to-violet-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] btn-glow-hover shadow-lg"
            >
              <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
              <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${status.submitting ? 'animate-pulse' : ''}`} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
