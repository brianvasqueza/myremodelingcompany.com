'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, MapPin, Clock } from 'lucide-react'

interface Project {
  id: number
  title: string
  location: string
  category: string
  image: string
  description: string
  scope: string[]
  duration: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-matte-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-off-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-matte-black/50 text-off-white hover:bg-matte-black transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-matte-black text-xs font-medium tracking-widest uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black mb-4">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-6 text-matte-black/60 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="font-light">{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span className="font-light">{project.duration}</span>
            </div>
          </div>

          <p className="text-matte-black/70 font-light text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div>
            <h3 className="text-gold text-xs font-medium tracking-widest uppercase mb-4">
              Scope of Work
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.scope.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-matte-black/70 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
