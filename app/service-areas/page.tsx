import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { CTABanner } from '@/components/cta-banner'
import { FadeInView } from '@/components/fade-in-view'
import { FAQList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { SectionLabel } from '@/components/section-label'
import { business, majorServices, serviceAreas } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Service Areas | Houston Remodeling Contractor',
  description:
    'Premier Remodeling serves Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, Tomball, Bellaire, Memorial, and nearby communities.',
  openGraph: {
    title: 'Service Areas | Houston Remodeling Contractor',
    description:
      'Kitchen remodeling, bathroom remodeling, flooring installation, drywall repair, painting services, and home renovation across Greater Houston.',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Do you work outside Houston city limits?',
    answer:
      'Yes. We serve many surrounding areas including The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, Tomball, Missouri City, Bellaire, Memorial, and nearby communities.',
  },
  {
    question: 'Does location affect remodeling project cost?',
    answer:
      'Sometimes. Travel distance, material delivery, HOA rules, parking access, permitting requirements, and inspection schedules can affect planning. We discuss those details before the work begins.',
  },
  {
    question: 'Can you tell me if my address is in your service area?',
    answer:
      'Yes. Send your address or nearby cross streets with your project details, and we will confirm whether we can help with the remodel.',
  },
]

export default function ServiceAreasPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    telephone: business.phone,
    email: business.email,
    url: business.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    makesOffer: majorServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
      },
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        title="Service Areas"
        subtitle="Home remodeling, kitchen remodeling, bathroom remodeling, flooring installation, drywall repair, and painting services across Greater Houston."
      />

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <FadeInView>
            <SectionLabel>Greater Houston</SectionLabel>
            <h2 className="mb-6 font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              Local remodeling help for Houston and nearby communities.
            </h2>
            <p className="text-lg font-light leading-relaxed text-matte-black/68">
              We work with homeowners who need a remodeling contractor for practical updates,
              major renovations, repairs, and finish work. If your community is not listed,
              contact us and we will let you know if we can help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold px-7 py-3 font-semibold text-matte-black transition-colors hover:bg-gold/90"
              >
                Request Free Estimate
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center border border-matte-black/20 px-7 py-3 font-medium text-matte-black transition-colors hover:border-gold hover:text-gold"
              >
                Call {business.phone}
              </a>
            </div>
          </FadeInView>

          <FadeInView delay={150}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 border border-border bg-white p-4">
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  <h3 className="text-base font-medium text-matte-black">{area}</h3>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="bg-linen py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="mb-12 text-center">
            <SectionLabel>Services by Area</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              Remodeling services available throughout our service area.
            </h2>
          </FadeInView>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majorServices.map((service) => (
              <FadeInView key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full border border-border bg-off-white p-6 transition-colors hover:border-gold hover:bg-white"
                >
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-matte-black">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm font-light leading-relaxed text-matte-black/65">
                    {service.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-matte-black group-hover:text-gold">
                    View service <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeInView className="mb-12 text-center">
            <SectionLabel>Service Area FAQs</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              Questions About Where We Work
            </h2>
          </FadeInView>
          <FadeInView>
            <FAQList faqs={faqs} />
          </FadeInView>
        </div>
      </section>

      <CTABanner
        eyebrow="Check Your Address"
        headline="Planning a Remodel in Greater Houston?"
        body="Send your project details and location. We will confirm service availability and talk through the next step."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText={`Call ${business.phone}`}
        secondaryHref={business.phoneHref}
      />
    </>
  )
}
