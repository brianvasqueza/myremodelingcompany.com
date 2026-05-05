'use client'

import { useEffect, useState } from 'react'

interface PageHeroProps {
  title: string
  subtitle?: string
  dark?: boolean
}

export function PageHero({ title, subtitle, dark = true }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className={`pt-32 pb-20 md:pt-40 md:pb-28 ${
        dark ? 'bg-matte-black' : 'bg-off-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Animated Gold Line */}
        <div className="flex justify-center mb-8">
          <div className={`h-px bg-gold ${isLoaded ? 'animate-line' : 'w-0'}`} />
        </div>

        <h1
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } ${dark ? 'text-off-white' : 'text-matte-black'}`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`font-light text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } ${dark ? 'text-off-white/70' : 'text-matte-black/60'}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
