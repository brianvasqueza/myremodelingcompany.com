'use client'

import { useState } from 'react'
import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { Plus, Minus } from 'lucide-react'

const faqs = [
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
    question: 'What is your design process?',
    answer: 'Our process begins with a consultation to understand your vision and needs. We then create detailed designs and 3D renderings for your approval. Once the design is finalized, we provide a comprehensive proposal with timeline and costs before any work begins.',
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

function FAQItem({ faq, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <div className="border border-border hover:border-gold transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg font-medium text-matte-black pr-4">
          {faq.question}
        </span>
        <span className="shrink-0 w-8 h-8 border border-gold flex items-center justify-center">
          {isOpen ? (
            <Minus className="h-4 w-4 text-gold" />
          ) : (
            <Plus className="h-4 w-4 text-gold" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-matte-black/70 font-light leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
