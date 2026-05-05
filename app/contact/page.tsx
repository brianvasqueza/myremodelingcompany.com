import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact/contact-section'
import { MapSection } from '@/components/contact/map-section'
import { FAQSection } from '@/components/contact/faq-section'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Build Something Beautiful"
        subtitle="Ready to transform your Houston home? Reach out today and let's discuss your vision."
      />
      
      <ContactSection />
      <MapSection />
      <FAQSection />
    </>
  )
}
