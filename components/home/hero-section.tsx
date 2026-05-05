'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Luxury kitchen remodel in Houston"
          fill
          className={`object-cover ${isLoaded ? 'animate-kenburns' : ''}`}
          priority
        />
        <div className="absolute inset-0 bg-matte-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Gold Line */}
        <div className="flex justify-center mb-8">
          <div className={`h-px bg-gold ${isLoaded ? 'animate-line' : 'w-0'}`} />
        </div>

        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-off-white mb-6 leading-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Houston&apos;s Premier
          <br />
          <span className="text-gold">Remodeling Experience</span>
        </h1>

        <p
          className={`text-off-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Transforming Houston homes with unparalleled craftsmanship and luxury design
          for over 15 years.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold text-matte-black hover:bg-gold/90 font-medium tracking-wide px-8"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/50 text-off-white hover:bg-gold/10 hover:border-gold font-light tracking-wide px-8"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
