import { PageHero } from '@/components/page-hero'
import { StorySection } from '@/components/about/story-section'
import { StatsSection } from '@/components/home/stats-section'
import { TeamSection } from '@/components/about/team-section'
import { ValuesSection } from '@/components/about/values-section'
import { CertificationsSection } from '@/components/about/certifications-section'
import { CTABanner } from '@/components/cta-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Premier Remodeling | Houston Home Remodeling Contractor',
  description:
    'Learn about Premier Remodeling, a Houston remodeling contractor focused on kitchen remodeling, bathroom remodeling, flooring, drywall, painting, and home renovation.',
  openGraph: {
    title: 'About Premier Remodeling | Houston Home Remodeling Contractor',
    description:
      'A local Houston remodeling team focused on clear communication, careful work, and home renovations that feel better to live in.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Premier Remodeling"
        subtitle="A local remodeling team focused on clear communication, careful work, and homes that feel better to live in."
        dark={false}
      />
      
      <StorySection />
      <StatsSection />
      <TeamSection />
      <ValuesSection />
      <CertificationsSection />

      <CTABanner
        headline="Looking for a Remodeling Crew You Can Trust?"
        eyebrow="Let's Talk"
        body="We will help you understand what is realistic, what affects cost, and how to move your project forward."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText="Call (713) 555-1234"
        secondaryHref="tel:+17135551234"
      />
    </>
  )
}
