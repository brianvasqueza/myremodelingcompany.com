'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FadeInView } from '@/components/fade-in-view'
import { ProjectModal } from '@/components/portfolio/project-modal'

const categories = ['All', 'Kitchen', 'Bathroom', 'Whole Home', 'Additions', 'Outdoor']

const projects = [
  {
    id: 1,
    title: 'Kitchen Layout Refresh',
    location: 'The Woodlands, TX',
    category: 'Kitchen',
    image: '/images/hero-kitchen.jpg',
    description: 'A dated kitchen was opened up with new cabinetry, quartz counters, better lighting, and a larger island for prep and everyday meals.',
    scope: ['Custom cabinetry', 'Quartz countertops', 'Tile backsplash', 'New lighting', 'Appliance coordination', 'Paint and trim'],
    duration: '8 weeks',
    beforeAfter: 'Before/After Ready',
  },
  {
    id: 2,
    title: 'Primary Bath Remodel',
    location: 'Sugar Land, TX',
    category: 'Bathroom',
    image: '/images/bathroom-luxury.jpg',
    description: 'This bathroom update replaced worn finishes with a walk-in shower, new tile, a double vanity, improved lighting, and cleaner storage.',
    scope: ['Walk-in shower', 'Tile installation', 'Double vanity', 'Fixtures', 'Ventilation', 'Painting'],
    duration: '6 weeks',
    beforeAfter: 'Before/After Ready',
  },
  {
    id: 3,
    title: 'Whole-Home Interior Update',
    location: 'Houston Heights, TX',
    category: 'Whole Home',
    image: '/images/living-room.jpg',
    description: 'A move-in renovation with new flooring, drywall repairs, paint, lighting updates, and coordinated finish work across the main living areas.',
    scope: ['Flooring installation', 'Drywall repair', 'Interior painting', 'Lighting updates', 'Trim work', 'Kitchen updates'],
    duration: '14 weeks',
    beforeAfter: 'Completed Project',
  },
  {
    id: 4,
    title: 'Covered Patio Upgrade',
    location: 'Katy, TX',
    category: 'Outdoor',
    image: '/images/outdoor-patio.jpg',
    description: 'A backyard patio was improved with a covered gathering area, lighting, and more usable space for family meals and weekend hosting.',
    scope: ['Covered patio', 'Outdoor lighting', 'Ceiling fans', 'Finish carpentry', 'Concrete updates', 'Cleanup'],
    duration: '10 weeks',
    beforeAfter: 'Completed Project',
  },
  {
    id: 5,
    title: 'Primary Suite Addition',
    location: 'Pearland, TX',
    category: 'Additions',
    image: '/images/home-addition.jpg',
    description: 'A new primary suite created more private space, a larger bathroom, better closet storage, and exterior details that match the existing home.',
    scope: ['Room addition', 'Ensuite bathroom', 'Walk-in closet', 'HVAC coordination', 'Electrical work', 'Exterior finishing'],
    duration: '12 weeks',
    beforeAfter: 'Before/After Ready',
  },
  {
    id: 6,
    title: 'Kitchen Storage Upgrade',
    location: 'Memorial, TX',
    category: 'Kitchen',
    image: '/images/hero-kitchen.jpg',
    description: 'A kitchen remodel focused on smarter storage, a more useful prep island, updated finishes, and better lighting for daily cooking.',
    scope: ['Custom island', 'Storage upgrades', 'Countertops', 'Backsplash', 'Lighting', 'Paint'],
    duration: '10 weeks',
    beforeAfter: 'Completed Project',
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 font-serif text-3xl font-semibold text-matte-black md:text-5xl">
            Remodeling projects homeowners can picture themselves in.
          </h2>
          <p className="text-lg font-light leading-relaxed text-matte-black/65">
            Finished photos, before-and-after sets, and scope notes help you see what is possible
            before we talk through your own home.
          </p>
        </FadeInView>

        {/* Filter Bar */}
        <FadeInView className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`border px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 100}>
              <button
                onClick={() => setSelectedProject(project)}
                className="group block h-full w-full overflow-hidden border border-border bg-white text-left transition-colors duration-300 hover:border-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/10 transition-colors duration-500 group-hover:bg-matte-black/0" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-matte-black">
                      {project.category}
                    </span>
                    <span className="bg-matte-black/80 px-3 py-1 text-xs font-medium uppercase tracking-widest text-off-white">
                      {project.beforeAfter}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-matte-black">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm font-light text-matte-black/60">
                    {project.location}
                  </p>
                  <p className="mb-5 line-clamp-3 text-sm font-light leading-relaxed text-matte-black/65">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs font-medium uppercase tracking-widest text-matte-black/55">
                    <span>{project.duration}</span>
                    <span className="text-gold">View Details</span>
                  </div>
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
