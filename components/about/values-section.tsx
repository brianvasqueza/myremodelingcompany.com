import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { Shield, Hammer, Eye, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with complete transparency, providing honest assessments, fair pricing, and clear communication at every stage.',
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    description: 'Every detail matters. We take pride in our work and never cut corners, ensuring lasting quality in every project.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No surprises, no hidden costs. We keep you informed and involved throughout your entire remodeling journey.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'We are proud Houstonians committed to giving back. We support local suppliers and community initiatives.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            What We Stand For
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            These core values guide every decision we make and every project we undertake.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <FadeInView key={value.title} delay={index * 100}>
              <div className="text-center p-8 bg-off-white border border-border hover:border-gold transition-colors duration-500">
                <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-matte-black mb-3">
                  {value.title}
                </h3>
                <p className="text-matte-black/60 font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
