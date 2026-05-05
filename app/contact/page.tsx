import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact/contact-section'
import { MapSection } from '@/components/contact/map-section'
import { contactFaqs, FAQSection } from '@/components/contact/faq-section'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Remodeling Quote | Houston Contractor',
  description:
    'Request a remodeling quote in Houston for kitchen remodeling, bathroom remodeling, flooring installation, drywall repair, painting services, and home renovation.',
  openGraph: {
    title: 'Request a Remodeling Quote | Houston Contractor',
    description:
      'Contact Premier Remodeling for home remodeling, kitchen, bath, flooring, drywall, painting, and renovation services in Houston and nearby areas.',
    type: 'website',
  },
}

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHero
        title="Request a Remodeling Quote"
        subtitle="Tell us about your project and we will follow up to talk through scope, timing, and next steps."
      />
      
      <ContactSection />
      <MapSection />
      <FAQSection />
    </>
  )
}
