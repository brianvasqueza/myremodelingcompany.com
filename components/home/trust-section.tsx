import { Award, BadgeCheck, ClipboardCheck, Hammer, MapPin, Sparkles } from 'lucide-react'
import { FadeInView } from '@/components/fade-in-view'
import { SectionLabel } from '@/components/section-label'

const trustItems = [
  {
    title: 'Licensed & insured',
    description: 'Placeholder for license and insurance details so homeowners know who is working in their home.',
    icon: BadgeCheck,
  },
  {
    title: '15+ years of experience',
    description: 'Remodeling experience across kitchens, bathrooms, flooring, drywall, painting, and full-home updates.',
    icon: Award,
  },
  {
    title: 'Quality workmanship',
    description: 'Careful prep, straight lines, solid installs, and finish details that hold up after the job is done.',
    icon: Hammer,
  },
  {
    title: 'Clean job sites',
    description: 'Floor protection, organized tools, regular cleanup, and respect for the rooms you still live in.',
    icon: Sparkles,
  },
  {
    title: 'Free estimates',
    description: 'Clear conversations about scope, materials, timing, and budget before work begins.',
    icon: ClipboardCheck,
  },
  {
    title: 'Local service',
    description: 'A Greater Houston remodeling team serving nearby communities without disappearing after the sale.',
    icon: MapPin,
  },
]

export function TrustSection() {
  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Why Homeowners Call Us</SectionLabel>
          <h2 className="mb-5 font-serif text-3xl font-semibold text-matte-black md:text-5xl">
            A remodeling crew you can feel comfortable having in your home.
          </h2>
          <p className="text-lg font-light leading-relaxed text-matte-black/65">
            Good remodeling is not only about how the finished room photographs. It is about
            communication, protection, cleanup, and a project that feels organized from the first
            visit to the final walkthrough.
          </p>
        </FadeInView>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <FadeInView key={item.title} delay={index * 75}>
              <div className="h-full border border-border bg-white p-6 transition-colors hover:border-gold">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gold/45 text-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-matte-black">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-matte-black/65">
                  {item.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
