import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { FAQList } from '@/components/faq-list'

export const contactFaqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve the Greater Houston area including Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, Humble, Tomball, Missouri City, Richmond, Bellaire, Memorial, River Oaks, West University, Heights, Montrose, and the Galleria area.',
  },
  {
    question: 'How long does a typical remodel take?',
    answer: 'Project timelines vary based on scope and complexity. A bathroom remodel typically takes 4-6 weeks, a kitchen remodel 8-12 weeks, and a full home renovation can take 3-6 months. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we partner with several financing companies to offer flexible payment options for qualified homeowners. We can discuss financing during your consultation to find a solution that fits your budget.',
  },
  {
    question: 'What is your remodeling process?',
    answer: 'Our process begins with a conversation about your goals, home, budget range, and timing. From there, we define the scope, review materials, prepare a written estimate, schedule the work, and complete a final walkthrough.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are a fully licensed general contractor in the state of Texas, and we carry comprehensive liability insurance and workers\' compensation coverage. We\'re happy to provide documentation upon request.',
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes, we handle all necessary permits as part of our service. Our team manages the entire permitting process, including applications, inspections, and final approvals, ensuring your project meets all local building codes.',
  },
]

export function FAQSection() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black">
            Frequently Asked Questions
          </h2>
        </FadeInView>

        <FadeInView>
          <FAQList faqs={contactFaqs} />
        </FadeInView>
      </div>
    </section>
  )
}
