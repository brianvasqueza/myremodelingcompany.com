import { CalendarCheck, ClipboardList, Hammer, MessageSquareText, SearchCheck } from 'lucide-react'
import { FadeInView } from '@/components/fade-in-view'
import { SectionLabel } from '@/components/section-label'

const steps = [
  {
    title: 'Consultation',
    description: 'We talk through the space, what is not working, and what you want the remodel to solve.',
    icon: MessageSquareText,
  },
  {
    title: 'Estimate',
    description: 'You get a practical scope with budget guidance, likely timelines, and next-step recommendations.',
    icon: ClipboardList,
  },
  {
    title: 'Planning',
    description: 'Materials, schedule, access, protection, and trade sequencing are handled before work begins.',
    icon: CalendarCheck,
  },
  {
    title: 'Remodeling',
    description: 'The crew protects the home, communicates progress, and keeps the site as orderly as possible.',
    icon: Hammer,
  },
  {
    title: 'Final walkthrough',
    description: 'We review the finished work together, address punch-list items, and leave the space clean.',
    icon: SearchCheck,
  },
]

export function ProcessOverview() {
  return (
    <section className="bg-linen py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="mb-5 font-serif text-3xl font-semibold text-matte-black md:text-5xl">
            Clear steps, fewer surprises.
          </h2>
          <p className="text-lg font-light leading-relaxed text-matte-black/65">
            Remodeling can feel disruptive. A simple process helps everyone know what is happening,
            who is responsible, and what comes next.
          </p>
        </FadeInView>

        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <FadeInView key={step.title} delay={index * 75}>
              <div className="relative h-full border border-border bg-off-white p-6">
                <span className="mb-6 block font-serif text-4xl text-gold/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <step.icon className="mb-5 h-6 w-6 text-gold" />
                <h3 className="mb-3 font-serif text-xl font-semibold text-matte-black">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-matte-black/65">
                  {step.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

