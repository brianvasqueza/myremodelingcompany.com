import { AnimatedCounter } from '@/components/animated-counter'
import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 18, suffix: '+', label: 'Service Areas' },
  { value: 1, suffix: '', label: 'Dedicated Project Lead' },
]

export function StatsSection() {
  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Local Experience</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-off-white">
            Built on Straight Answers and Careful Work
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeInView key={stat.label} delay={index * 100}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
