'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { CheckCircle2, Images, Phone } from 'lucide-react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-[980px] items-center overflow-hidden pt-24 sm:min-h-[860px] lg:min-h-[760px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Bright remodeled kitchen with custom cabinets and a large island"
          fill
          className={`object-cover ${isLoaded ? 'animate-kenburns' : ''}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/85 via-matte-black/65 to-matte-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className={`mb-6 h-px bg-gold ${isLoaded ? 'animate-line' : 'w-0'}`} />
          <p
            className={`mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-gold transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Houston Remodeling Contractor
          </p>
          <h1
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-off-white mb-6 leading-tight transition-all duration-1000 text-balance ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Remodeling that makes your home work better.
          </h1>

          <p
            className={`text-off-white/82 font-light text-lg md:text-xl max-w-2xl mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Kitchens, bathrooms, additions, flooring, painting, drywall, carpentry, and
            full-home renovations handled by a local team that communicates clearly and
            respects your home.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-matte-black hover:bg-gold/90 font-semibold tracking-wide px-8"
            >
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-off-white/40 bg-matte-black/10 text-off-white hover:bg-off-white hover:text-matte-black font-medium tracking-wide px-8"
            >
              <a href="tel:+17135551234" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call (713) 555-1234
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-off-white/30 bg-matte-black/10 text-off-white hover:bg-off-white hover:text-matte-black font-medium tracking-wide px-8"
            >
              <Link href="/portfolio" className="inline-flex items-center gap-2">
                <Images className="h-4 w-4" />
                View Our Work
              </Link>
            </Button>
          </div>

          <div
            className={`mt-10 grid gap-3 text-sm text-off-white/78 sm:grid-cols-3 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {['Licensed and insured', 'Detailed written estimates', 'Clean, organized job sites'].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-off-white/95">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-6 py-5 text-sm text-matte-black/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          <p className="py-2 sm:pr-6">
            <span className="font-semibold text-matte-black">Free consultations</span> for
            serious remodeling projects.
          </p>
          <p className="py-2 sm:px-6">
            <span className="font-semibold text-matte-black">One accountable crew</span> from
            planning through final walkthrough.
          </p>
          <p className="py-2 sm:pl-6">
            <span className="font-semibold text-matte-black">Greater Houston service</span>{' '}
            including nearby suburbs.
          </p>
        </div>
      </div>
    </section>
  )
}
