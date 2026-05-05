import { PageHero } from '@/components/page-hero'
import { StorySection } from '@/components/about/story-section'
import { StatsSection } from '@/components/home/stats-section'
import { TeamSection } from '@/components/about/team-section'
import { ValuesSection } from '@/components/about/values-section'
import { CertificationsSection } from '@/components/about/certifications-section'
import { CTABanner } from '@/components/cta-banner'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Rooted in Houston, committed to craftsmanship, and dedicated to transforming homes for over 15 years."
        dark={false}
      />
      
      <StorySection />
      <StatsSection />
      <TeamSection />
      <ValuesSection />
      <CertificationsSection />

      <CTABanner
        headline="Work With Houston's Best"
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  )
}
