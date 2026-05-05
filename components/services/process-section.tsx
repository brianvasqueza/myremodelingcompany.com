import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'

const steps = [
  {
    number: '01',
    title: 'Conversation',
    description: 'We listen to what you want to change, what is not working, and what budget range makes sense.',
  },
  {
    number: '02',
    title: 'Scope',
    description: 'We define the work, discuss materials, note unknowns, and prepare a clear written estimate.',
  },
  {
    number: '03',
    title: 'Schedule',
    description: 'Once the plan is approved, we line up trades, order materials, and set expectations before work begins.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'The crew protects your home, communicates progress, and keeps the project moving.',
  },
  {
    number: '05',
    title: 'Walkthrough',
    description: 'We review the finished work with you, handle punch list items, and leave the space clean.',
  },
]

export function ProcessSection() {
  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-off-white">
            A Clear Process From First Call to Final Walkthrough
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
