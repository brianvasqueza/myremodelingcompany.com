import { PageHero } from '@/components/page-hero'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'
import { CTABanner } from '@/components/cta-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remodeling Project Gallery | Houston Kitchen, Bath & Renovation',
  description:
    'View remodeling project photos from Houston area kitchen remodeling, bathroom remodeling, home renovation, additions, and interior updates.',
  openGraph: {
    title: 'Remodeling Project Gallery | Premier Remodeling Houston',
    description:
      'Explore kitchen, bathroom, and home renovation project photos from Premier Remodeling in Houston and surrounding areas.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Browse kitchen, bath, living space, addition, and outdoor remodeling projects completed for homeowners across Greater Houston."
      />
      
      <PortfolioGrid />

      <CTABanner
        headline="Love What You See? Let's Talk About Yours."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
