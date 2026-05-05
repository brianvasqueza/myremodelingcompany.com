import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { TrustSection } from '@/components/home/trust-section'
import { ServicesTeaser } from '@/components/home/services-teaser'
import { PortfolioTeaser } from '@/components/home/portfolio-teaser'
import { ProcessOverview } from '@/components/home/process-overview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ServiceAreasSection } from '@/components/home/service-areas-section'
import { CTABanner } from '@/components/cta-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Houston Remodeling Contractor | Kitchen, Bath & Home Renovation',
  description:
    'Premier Remodeling is a Houston remodeling contractor for kitchen remodeling, bathroom remodeling, flooring installation, drywall repair, painting services, and home renovation.',
  openGraph: {
    title: 'Houston Remodeling Contractor | Premier Remodeling',
    description:
      'Kitchen remodeling, bathroom remodeling, flooring, drywall repair, painting, and home renovation services in Houston and surrounding areas.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <ServicesTeaser />
      <ProcessOverview />
      <PortfolioTeaser />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTABanner
        headline="Ready to Talk Through Your Remodel?"
        eyebrow="Free Project Consultation"
        body="Tell us what is not working in your home. We will help you sort out the options, budget range, and next steps."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText="Call (713) 555-1234"
        secondaryHref="tel:+17135551234"
      />
    </>
  )
}
