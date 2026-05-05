import { PageHero } from '@/components/page-hero'
import { ServiceSection } from '@/components/services/service-section'
import { ProcessSection } from '@/components/services/process-section'
import { CTABanner } from '@/components/cta-banner'
import type { Metadata } from 'next'

const services = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'A good kitchen remodel should improve storage, traffic flow, lighting, and daily routines. We help with layout decisions, material selection, trade coordination, and the finish details that make the room feel complete.',
    features: [
      'Custom cabinetry design and installation',
      'Quartz, granite, butcher block, and solid-surface countertops',
      'Appliance, sink, and fixture installation coordination',
      'Recessed, pendant, and under-cabinet lighting',
      'Flooring and backsplash installation',
      'Plumbing and electrical upgrades',
    ],
    image: '/images/hero-kitchen.jpg',
    imagePosition: 'right' as const,
    detailHref: '/services/kitchen-remodeling',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description: 'From small hall baths to primary suites, we build bathrooms that are easier to clean, better ventilated, and more comfortable to use every day.',
    features: [
      'Custom vanity and cabinetry design',
      'Tile shower surrounds, floors, niches, and accent walls',
      'Walk-in shower and soaking tub installation',
      'Fixture, mirror, hardware, and accessory installation',
      'Floor warming options where appropriate',
      'Lighting, fans, and ventilation updates',
    ],
    image: '/images/bathroom-luxury.jpg',
    imagePosition: 'left' as const,
    detailHref: '/services/bathroom-remodeling',
  },
  {
    id: 'full-home',
    title: 'Whole-Home Renovations',
    description: 'If several rooms need attention, we help organize the work into a practical plan. Whole-home renovations can include layout changes, finish updates, repairs, and coordinated trade work.',
    features: [
      'Complete interior redesign',
      'Open concept floor plan conversions',
      'Structural modifications and updates',
      'Whole-home electrical and plumbing upgrades',
      'HVAC system modernization',
      'Interior painting, flooring, drywall, and trim',
    ],
    image: '/images/living-room.jpg',
    imagePosition: 'right' as const,
    detailHref: '/services/home-renovation',
  },
  {
    id: 'additions',
    title: 'Custom Additions & Extensions',
    description: 'When moving is not the right answer, an addition or conversion can create the space your household needs. We focus on clean transitions, matching details, and practical use.',
    features: [
      'Room additions and extensions',
      'Second story additions',
      'Sunrooms and enclosed patios',
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
    description: 'Outdoor living should be durable, shaded, and useful in the Houston climate. We can improve patios, covered areas, and exterior gathering spaces.',
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
  {
    id: 'flooring',
    title: 'Flooring Installation',
    description: 'New flooring changes the feel of a home fast, but the prep work matters. We install durable flooring with clean transitions, proper underlayment, and careful finishing.',
    features: [
      'Tile, engineered wood, laminate, and luxury vinyl plank',
      'Subfloor prep and leveling guidance',
      'Baseboard removal, replacement, and shoe molding',
      'Room-to-room transitions and thresholds',
      'Water-resistant options for kitchens, baths, and entries',
      'Demo, haul-off, and jobsite protection',
    ],
    image: '/images/living-room.jpg',
    imagePosition: 'left' as const,
    detailHref: '/services/flooring-installation',
  },
  {
    id: 'painting-drywall',
    title: 'Painting & Drywall',
    description: 'Clean walls and crisp paint make every remodel feel finished. We handle repairs, texture matching, interior painting, and touchups after construction work.',
    features: [
      'Drywall repair, replacement, and patching',
      'Texture matching and skim coating where needed',
      'Interior wall, ceiling, trim, and cabinet painting',
      'Color consultation support',
      'Careful masking, floor protection, and cleanup',
      'Post-remodel punch list touchups',
    ],
    image: '/images/team.jpg',
    imagePosition: 'right' as const,
    detailHref: '/services/painting-services',
  },
  {
    id: 'carpentry',
    title: 'Carpentry & Finish Work',
    description: 'Finish carpentry is where a project starts to feel custom. We build and install the trim, shelving, doors, and details that make rooms feel intentional.',
    features: [
      'Baseboards, crown molding, casing, and trim',
      'Interior doors and hardware',
      'Built-ins, shelving, and storage details',
      'Stair, railing, and accent wall updates',
      'Cabinet modifications and finish details',
      'Repair work for damaged wood and trim',
    ],
    image: '/images/home-addition.jpg',
    imagePosition: 'left' as const,
  },
  {
    id: 'general',
    title: 'General Remodeling',
    description: 'Not every project fits neatly into one category. We help homeowners combine repairs, room updates, and trade work into one organized remodeling plan.',
    features: [
      'Multi-room updates and repair lists',
      'Rental, resale, and move-in improvements',
      'Water damage repair coordination',
      'Fixture, hardware, and finish upgrades',
      'Interior refreshes and small remodels',
      'Clear scopes, schedules, and estimates',
    ],
    image: '/images/outdoor-patio.jpg',
    imagePosition: 'right' as const,
    detailHref: '/services/home-renovation',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Remodeling Services"
        subtitle="Kitchen, bath, flooring, painting, drywall, carpentry, additions, and general remodeling for Greater Houston homeowners."
      />
      
      {services.map((service) => (
        <ServiceSection key={service.id} {...service} />
      ))}

      <ProcessSection />

      <CTABanner
        headline="Have a Project in Mind?"
        eyebrow="Start With a Conversation"
        body="Send a few details about the space, your goals, and your timeline. We will follow up with practical next steps."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText="Call (713) 555-1234"
        secondaryHref="tel:+17135551234"
      />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Remodeling Services Houston | Kitchen, Bath, Flooring & Drywall',
  description:
    'Explore remodeling services in Houston including kitchen remodeling, bathroom remodeling, flooring installation, painting services, drywall repair, additions, and home renovation.',
  openGraph: {
    title: 'Remodeling Services Houston | Premier Remodeling',
    description:
      'Kitchen remodeling, bathroom remodeling, flooring installation, painting, drywall repair, carpentry, additions, and whole-home renovation in Greater Houston.',
    type: 'website',
  },
}
