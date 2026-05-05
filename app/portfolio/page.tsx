import { PageHero } from '@/components/page-hero'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { CTABanner } from '@/components/cta-banner'

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Explore our portfolio of stunning transformations across Houston and surrounding areas. Every project reflects our commitment to exceptional quality and craftsmanship."
      />
      
      <PortfolioGrid />

      <CTABanner
        headline="Love What You See? Let's Build Yours."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </>
  )
}
