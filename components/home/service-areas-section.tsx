import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'

const serviceAreas = [
  'Houston',
  'The Woodlands',
  'Sugar Land',
  'Katy',
  'Pearland',
  'Cypress',
  'Spring',
  'Humble',
  'Tomball',
  'Missouri City',
  'Richmond',
  'Bellaire',
  'Memorial',
  'River Oaks',
  'West University',
  'Heights',
  'Montrose',
  'Galleria',
]

export function ServiceAreasSection() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Where We Work</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            Serving Greater Houston
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            From downtown Houston to the surrounding suburbs, we bring luxury remodeling 
            services to homeowners throughout the Greater Houston area.
          </p>
        </FadeInView>

        <FadeInView>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-4">
            {serviceAreas.map((area, index) => (
              <span key={area} className="flex items-center">
                <span className="text-matte-black font-light px-4 py-2 hover:text-gold transition-colors">
                  {area}
                </span>
                {index < serviceAreas.length - 1 && (
                  <span className="w-px h-4 bg-gold/40" />
                )}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
