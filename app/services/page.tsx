import { PageHero } from '@/components/page-hero'
import { ServiceSection } from '@/components/services/service-section'
import { ProcessSection } from '@/components/services/process-section'
import { CTABanner } from '@/components/cta-banner'

const services = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'The kitchen is the heart of your home, and we treat it with the care and attention it deserves. Our expert team combines innovative design with superior craftsmanship to create kitchens that are both beautiful and functional.',
    features: [
      'Custom cabinetry design and installation',
      'Premium countertop selection (granite, quartz, marble)',
      'Professional-grade appliance integration',
      'Custom lighting design and installation',
      'Flooring and backsplash installation',
      'Plumbing and electrical upgrades',
    ],
    image: '/images/hero-kitchen.jpg',
    imagePosition: 'right' as const,
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom into a personal spa retreat. From powder rooms to master baths, we create elegant spaces that combine luxury with everyday functionality.',
    features: [
      'Custom vanity and cabinetry design',
      'Luxury tile work and stone installation',
      'Walk-in shower and soaking tub installation',
      'High-end fixture and hardware selection',
      'Heated flooring systems',
      'Custom lighting and ventilation',
    ],
    image: '/images/bathroom-luxury.jpg',
    imagePosition: 'left' as const,
  },
  {
    id: 'full-home',
    title: 'Full Home Renovations',
    description: 'When your vision extends beyond a single room, our full home renovation services bring comprehensive transformation. We reimagine entire living spaces while preserving the character of your home.',
    features: [
      'Complete interior redesign',
      'Open concept floor plan conversions',
      'Structural modifications and updates',
      'Whole-home electrical and plumbing upgrades',
      'HVAC system modernization',
      'Interior and exterior painting',
    ],
    image: '/images/living-room.jpg',
    imagePosition: 'right' as const,
  },
  {
    id: 'additions',
    title: 'Custom Additions & Extensions',
    description: 'Need more space? Our custom additions seamlessly integrate with your existing home, expanding your living area while maintaining architectural harmony.',
    features: [
      'Room additions and extensions',
      'Second story additions',
      'Sunrooms and conservatories',
      'In-law suites and guest quarters',
      'Home office spaces',
      'Garage conversions and additions',
    ],
    image: '/images/home-addition.jpg',
    imagePosition: 'left' as const,
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Patio Remodeling',
    description: 'Extend your living space outdoors with custom patios, outdoor kitchens, and entertainment areas designed for the Houston climate.',
    features: [
      'Custom outdoor kitchen design',
      'Covered patio and pergola construction',
      'Pool and spa surrounds',
      'Outdoor lighting systems',
      'Fire pits and outdoor fireplaces',
      'Landscaping integration',
    ],
    image: '/images/outdoor-patio.jpg',
    imagePosition: 'right' as const,
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Expert craftsmanship and Houston expertise, delivering exceptional results for every project."
      />
      
      {services.map((service) => (
        <ServiceSection key={service.id} {...service} />
      ))}

      <ProcessSection />

      <CTABanner
        headline="Start Your Project Today"
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  )
}
