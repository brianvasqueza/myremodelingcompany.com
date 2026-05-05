import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CTABanner } from '@/components/cta-banner'
import { FAQList } from '@/components/faq-list'
import { FadeInView } from '@/components/fade-in-view'
import { JsonLd } from '@/components/json-ld'
import { SectionLabel } from '@/components/section-label'
import { business, getServiceBySlug, majorServices, serviceAreas } from '@/lib/seo'

export function generateStaticParams() {
  return majorServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = majorServices.filter((item) => item.slug !== service.slug).slice(0, 3)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${business.city}, ${business.region}`,
    description: service.metaDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: business.name,
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: business.city,
        addressRegion: business.region,
        postalCode: business.postalCode,
      },
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-matte-black pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <FadeInView className="flex flex-col justify-center">
            <div className="mb-8 h-px w-20 bg-gold" />
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Local Remodeling Contractor
            </p>
            <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-off-white text-balance md:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-off-white/72 md:text-xl">
              {service.heroSubtitle}
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
                className="inline-flex items-center justify-center border border-off-white/35 px-7 py-3 font-medium text-off-white transition-colors hover:bg-off-white hover:text-matte-black"
              >
                Call {business.phone}
              </a>
            </div>
          </FadeInView>

          <FadeInView delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold/30">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeInView>
            <SectionLabel>Service Details</SectionLabel>
            <h2 className="mb-6 font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              Practical planning, clean work, and durable finishes.
            </h2>
            <p className="text-lg font-light leading-relaxed text-matte-black/68">
              {service.intro}
            </p>
          </FadeInView>

          <FadeInView delay={150}>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.bullets.map((item) => (
                <div key={item} className="border border-border bg-white p-5">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-gold" />
                  <h3 className="text-base font-semibold leading-snug text-matte-black">{item}</h3>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="bg-linen py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="mb-12 max-w-3xl">
            <SectionLabel>Connected Services</SectionLabel>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              Many remodeling projects overlap.
            </h2>
            <p className="font-light leading-relaxed text-matte-black/65">
              A kitchen remodel may need flooring installation. A bathroom remodel may need
              drywall repair and painting services. We can coordinate the related work so the
              finished project feels complete.
            </p>
          </FadeInView>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((item) => (
              <FadeInView key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group block h-full border border-border bg-off-white p-6 transition-colors hover:border-gold hover:bg-white"
                >
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-matte-black">
                    {item.title}
                  </h3>
                  <p className="mb-5 text-sm font-light leading-relaxed text-matte-black/65">
                    {item.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-matte-black transition-colors group-hover:text-gold">
                    Learn more <ArrowRight className="h-4 w-4" />
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
            <SectionLabel>Homeowner Questions</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold text-matte-black md:text-4xl">
              {service.shortTitle} FAQs
            </h2>
          </FadeInView>
          <FadeInView>
            <FAQList faqs={service.faqs} />
          </FadeInView>
        </div>
      </section>

      <CTABanner
        eyebrow="Free Project Consultation"
        headline={`Ready to Discuss ${service.shortTitle}?`}
        body={`Tell us about your home in ${business.city} or a nearby area. We will help you understand scope, timing, and next steps.`}
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText={`Call ${business.phone}`}
        secondaryHref={business.phoneHref}
      />
    </>
  )
}
