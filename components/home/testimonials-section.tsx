'use client'

import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    quote: "They helped us make smart choices instead of just selling us the most expensive option. The crew showed up when they said they would, kept the kitchen clean, and the finished work looks great.",
    name: 'Sarah & Michael Thompson',
    location: 'The Woodlands, TX',
    rating: 5,
  },
  {
    quote: "Our bathroom remodel had a few surprises behind the walls, but the team explained what they found and handled it without drama. We always knew what was happening next.",
    name: 'Jennifer Martinez',
    location: 'Sugar Land, TX',
    rating: 5,
  },
  {
    quote: "We needed flooring, paint, drywall, and trim after buying an older home. Premier coordinated the trades well and gave us a house that finally feels like ours.",
    name: 'Robert & Linda Chen',
    location: 'Katy, TX',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeInView className="text-center">
          <SectionLabel>Homeowner Feedback</SectionLabel>
          
          {/* Decorative Quote Mark */}
          <div className="flex justify-center mb-8">
            <span className="font-serif text-[120px] md:text-[180px] leading-none text-gold/20 select-none">
              &ldquo;
            </span>
          </div>

          <blockquote className="font-serif text-2xl md:text-3xl text-off-white font-light leading-relaxed mb-8 text-balance">
            {testimonial.quote}
          </blockquote>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>

          <div className="mb-12">
            <p className="text-off-white font-medium text-lg">{testimonial.name}</p>
            <p className="text-off-white/60 font-light">{testimonial.location}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-gold/30 text-gold hover:bg-gold hover:text-matte-black transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-gold' : 'bg-gold/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 border border-gold/30 text-gold hover:bg-gold hover:text-matte-black transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
