import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { Award, CheckCircle2 } from 'lucide-react'

const certifications = [
  'Licensed General Contractor - Texas',
  'National Association of Home Builders',
  'Greater Houston Builders Association',
  'EPA Lead-Safe Certified',
  'BBB A+ Rating',
  'Houzz Best of Service',
]

const awards = [
  'Houston Chronicle Best of Houston 2023',
  'GHBA Prism Award Winner',
  'Texas Monthly Top Remodeler',
  'Remodeling Magazine Big 50',
]

export function CertificationsSection() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Credentials</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            Certifications & Awards
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            Our commitment to excellence is recognized by industry leaders and satisfied clients alike.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <FadeInView>
            <div className="p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-gold" />
                <h3 className="font-serif text-xl font-semibold text-matte-black">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-matte-black/70 font-light">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Awards */}
          <FadeInView delay={100}>
            <div className="p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-gold" />
                <h3 className="font-serif text-xl font-semibold text-matte-black">
                  Awards & Recognition
                </h3>
              </div>
              <ul className="space-y-4">
                {awards.map((award) => (
                  <li key={award} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-matte-black/70 font-light">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
