'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FadeInView } from '@/components/fade-in-view'
import { ProjectModal } from '@/components/portfolio/project-modal'

const categories = ['All', 'Kitchen', 'Bathroom', 'Full Home', 'Additions', 'Outdoor']

const projects = [
  {
    id: 1,
    title: 'Modern Farmhouse Kitchen',
    location: 'The Woodlands, TX',
    category: 'Kitchen',
    image: '/images/hero-kitchen.jpg',
    description: 'A complete kitchen transformation featuring custom white shaker cabinets, quartz countertops with waterfall edge, and professional-grade appliances. The open concept design maximizes natural light and creates a seamless flow between cooking and entertaining spaces.',
    scope: ['Custom cabinetry', 'Quartz countertops', 'Professional appliances', 'Hardwood flooring', 'Custom lighting', 'Plumbing upgrades'],
    duration: '8 weeks',
  },
  {
    id: 2,
    title: 'Spa-Inspired Master Bath',
    location: 'Sugar Land, TX',
    category: 'Bathroom',
    image: '/images/bathroom-luxury.jpg',
    description: 'This master bathroom was transformed into a personal spa retreat featuring a freestanding soaking tub, frameless glass shower with rainfall head, and custom double vanity with marble countertops.',
    scope: ['Freestanding tub', 'Walk-in shower', 'Custom vanity', 'Marble tile', 'Heated flooring', 'Custom lighting'],
    duration: '6 weeks',
  },
  {
    id: 3,
    title: 'Contemporary Living Space',
    location: 'Houston Heights, TX',
    category: 'Full Home',
    image: '/images/living-room.jpg',
    description: 'A whole-home renovation that opened up the floor plan, updated all finishes, and created a cohesive modern aesthetic throughout. The transformation included new flooring, lighting, and a complete kitchen remodel.',
    scope: ['Open concept conversion', 'New flooring throughout', 'Complete kitchen remodel', 'Bathroom updates', 'Lighting design', 'Interior painting'],
    duration: '14 weeks',
  },
  {
    id: 4,
    title: 'Outdoor Entertainment Oasis',
    location: 'Katy, TX',
    category: 'Outdoor',
    image: '/images/outdoor-patio.jpg',
    description: 'This backyard was transformed into the ultimate entertainment space featuring a custom outdoor kitchen, covered patio with ceiling fans, and a resort-style pool area.',
    scope: ['Outdoor kitchen', 'Covered patio', 'Pool renovation', 'Landscape design', 'Outdoor lighting', 'Fire pit'],
    duration: '10 weeks',
  },
  {
    id: 5,
    title: 'Luxury Primary Suite Addition',
    location: 'Pearland, TX',
    category: 'Additions',
    image: '/images/home-addition.jpg',
    description: 'A 600 square foot addition that created a luxurious primary suite with a spa-like bathroom, walk-in closet, and private sitting area. The addition seamlessly integrates with the existing home architecture.',
    scope: ['Room addition', 'Ensuite bathroom', 'Walk-in closet', 'HVAC expansion', 'Electrical work', 'Exterior finishing'],
    duration: '12 weeks',
  },
  {
    id: 6,
    title: 'Chef\'s Dream Kitchen',
    location: 'Memorial, TX',
    category: 'Kitchen',
    image: '/images/hero-kitchen.jpg',
    description: 'Designed for a passionate home chef, this kitchen features professional-grade appliances, custom storage solutions, and a large prep island with seating for casual dining.',
    scope: ['Professional appliances', 'Custom island', 'Wine storage', 'Butler\'s pantry', 'Pot filler', 'Custom hood'],
    duration: '10 weeks',
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter Bar */}
        <FadeInView className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-gold text-matte-black border-gold'
                    : 'bg-transparent text-matte-black border-border hover:border-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInView>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 100}>
              <button
                onClick={() => setSelectedProject(project)}
                className="group block w-full text-left border border-border hover:border-gold transition-colors duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-matte-black/10 transition-colors duration-500" />
                </div>
                <div className="p-6 bg-off-white">
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
              </button>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
