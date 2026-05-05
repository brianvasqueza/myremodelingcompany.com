'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-border transition-colors duration-300 hover:border-gold">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-serif text-lg font-medium text-matte-black">
          {faq.question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold">
          {isOpen ? (
            <Minus className="h-4 w-4 text-gold" />
          ) : (
            <Plus className="h-4 w-4 text-gold" />
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-6 font-light leading-relaxed text-matte-black/70">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
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
  )
}

