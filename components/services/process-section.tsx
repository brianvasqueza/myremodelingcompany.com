import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a detailed consultation to understand your vision, needs, and budget.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our design team creates detailed plans and 3D renderings to bring your vision to life.',
  },
  {
    number: '03',
    title: 'Approval',
    description: 'We review all materials, timelines, and costs to ensure complete alignment.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Our skilled craftsmen execute the project with precision and attention to detail.',
  },
  {
    number: '05',
    title: 'Reveal',
    description: 'We complete a final walkthrough to ensure every detail meets our exacting standards.',
  },
]

export function ProcessSection() {
  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-off-white">
            Our Process
          </h2>
        </FadeInView>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gold/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <FadeInView key={step.number} delay={index * 100}>
                <div className="relative text-center lg:text-left">
                  {/* Number circle */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="w-16 h-16 border border-gold flex items-center justify-center bg-matte-black relative z-10">
                      <span className="font-serif text-xl text-gold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-off-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-off-white/60 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
