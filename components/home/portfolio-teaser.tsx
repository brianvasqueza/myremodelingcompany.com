'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Kitchen Layout Refresh',
    location: 'The Woodlands, TX',
    category: 'Kitchen',
    imageBefore: '/images/hero-kitchen.jpg',
    imageAfter: '/images/hero-kitchen.jpg',
  },
  {
    title: 'Primary Bath Remodel',
    location: 'Sugar Land, TX',
    category: 'Bathroom',
    imageBefore: '/images/bathroom-luxury.jpg',
    imageAfter: '/images/bathroom-luxury.jpg',
  },
  {
    title: 'Living Room Renovation',
    location: 'Houston Heights, TX',
    category: 'Full Home',
    imageBefore: '/images/living-room.jpg',
    imageAfter: '/images/living-room.jpg',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden border border-border bg-off-white transition-colors duration-300 hover:border-gold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={isHovered ? project.imageAfter : project.imageBefore}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-matte-black/30 group-hover:bg-matte-black/20 transition-colors duration-500" />
        
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gold text-matte-black text-xs font-medium tracking-widest uppercase">
            {isHovered ? 'After' : 'Before/After'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-gold text-xs font-medium tracking-widest uppercase">
          {project.category}
        </span>
        <h3 className="font-serif text-xl font-semibold text-matte-black mt-2 mb-1">
          {project.title}
        </h3>
        <p className="text-matte-black/60 font-light text-sm">
          {project.location}
        </p>
      </div>
    </div>
  )
}

export function PortfolioTeaser() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Project Gallery</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            See the Kind of Work We Do
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            Browse kitchen, bath, living space, addition, and outdoor projects from homes around Greater Houston.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInView key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeInView>
          ))}
        </div>

        <FadeInView className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-matte-black font-medium tracking-wide hover:text-gold transition-colors gold-underline"
          >
            View Our Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
