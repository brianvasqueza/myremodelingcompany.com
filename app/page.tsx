import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesTeaser } from '@/components/home/services-teaser'
import { PortfolioTeaser } from '@/components/home/portfolio-teaser'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ServiceAreasSection } from '@/components/home/service-areas-section'
import { CTABanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesTeaser />
      <PortfolioTeaser />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTABanner
        headline="Ready to Transform Your Home?"
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </>
  )
}
