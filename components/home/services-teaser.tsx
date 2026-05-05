import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { ArrowRight, Bath, Brush, ChefHat, Hammer, Home, Layers, PaintRoller, Ruler } from 'lucide-react'

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Cabinets, counters, backsplash, lighting, layout changes, and finish work that make the busiest room in the house easier to use.',
    image: '/images/hero-kitchen.jpg',
    href: '/services/kitchen-remodeling',
    icon: ChefHat,
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Walk-in showers, tile, vanities, tubs, fixtures, ventilation, and storage planned around daily routines.',
    image: '/images/bathroom-luxury.jpg',
    href: '/services/bathroom-remodeling',
    icon: Bath,
  },
  {
    title: 'Whole-Home Renovations',
    description: 'Open layouts, room updates, interior finishes, and coordinated improvements for older or newly purchased homes.',
    image: '/images/living-room.jpg',
    href: '/services/home-renovation',
    icon: Home,
  },
  {
    title: 'Additions & Conversions',
    description: 'More living space, guest suites, home offices, garage conversions, and additions that feel connected to the original home.',
    image: '/images/home-addition.jpg',
    href: '/services#additions',
    icon: Ruler,
  },
  {
    title: 'Flooring',
    description: 'Tile, wood, laminate, and luxury vinyl installation with careful prep, clean transitions, and durable finishes.',
    image: '/images/living-room.jpg',
    href: '/services/flooring-installation',
    icon: Layers,
  },
  {
    title: 'Painting Services',
    description: 'Interior painting for walls, ceilings, trim, doors, cabinets, and remodel touchups with careful prep and cleanup.',
    image: '/images/team.jpg',
    href: '/services/painting-services',
    icon: PaintRoller,
  },
  {
    title: 'Drywall Repair',
    description: 'Patching, drywall replacement, texture matching, water damage repairs, and paint-ready finishing.',
    image: '/images/home-addition.jpg',
    href: '/services/drywall-repair',
    icon: Brush,
  },
  {
    title: 'Carpentry & Trim',
    description: 'Doors, baseboards, crown molding, built-ins, shelving, and the detail work that gives a remodel its polish.',
    image: '/images/home-addition.jpg',
    href: '/services#carpentry',
    icon: Hammer,
  },
  {
    title: 'General Remodeling',
    description: 'A practical partner for repairs, upgrades, punch lists, and multi-room projects that need organized execution.',
    image: '/images/outdoor-patio.jpg',
    href: '/services/home-renovation',
    icon: Brush,
  },
]

export function ServicesTeaser() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            Remodeling Services for the Way You Live
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            Whether you are updating one room or improving the whole house, we help you plan the scope, choose durable materials, and get the work done with less stress.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden border border-border bg-off-white transition-colors duration-300 hover:border-gold hover:bg-white"
              >
                <div className="aspect-[5/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border border-gold/45 text-gold">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-matte-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-matte-black/65 font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-matte-black text-sm font-semibold tracking-wide group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                    Get Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>

        <FadeInView className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-matte-black font-medium tracking-wide hover:text-gold transition-colors gold-underline"
          >
            View All Remodeling Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
