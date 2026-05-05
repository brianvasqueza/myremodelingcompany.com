import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a culinary masterpiece with custom cabinetry, premium countertops, and state-of-the-art appliances.',
    image: '/images/hero-kitchen.jpg',
    href: '/services#kitchen',
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Create your personal spa retreat with luxurious fixtures, elegant tile work, and modern amenities.',
    image: '/images/bathroom-luxury.jpg',
    href: '/services#bathroom',
  },
  {
    title: 'Full Home Renovations',
    description: 'Complete whole-home transformations that reimagine your living spaces from foundation to finishing touches.',
    image: '/images/living-room.jpg',
    href: '/services#full-home',
  },
  {
    title: 'Custom Additions',
    description: 'Expand your living space with seamlessly integrated additions that complement your home\'s architecture.',
    image: '/images/home-addition.jpg',
    href: '/services#additions',
  },
]

export function ServicesTeaser() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            Crafting Exceptional Spaces
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            From intimate bathroom retreats to complete home transformations, 
            we bring your vision to life with meticulous attention to detail.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group block relative overflow-hidden border border-border hover:border-gold transition-colors duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/40 group-hover:bg-matte-black/30 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-off-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-off-white/70 font-light text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm font-medium tracking-wide group-hover:gap-3 transition-all duration-300">
                    Learn More
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
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
