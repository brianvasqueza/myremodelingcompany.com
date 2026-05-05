import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeInView } from '@/components/fade-in-view'
import { Check } from 'lucide-react'

interface ServiceSectionProps {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  imagePosition: 'left' | 'right'
  detailHref?: string
}

export function ServiceSection({
  id,
  title,
  description,
  features,
  image,
  imagePosition,
  detailHref,
}: ServiceSectionProps) {
  const isImageLeft = imagePosition === 'left'

  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${
        isImageLeft ? 'bg-linen' : 'bg-off-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 lg:gap-20 ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <FadeInView className="lg:w-1/2">
            <div className="relative">
              {/* Offset border */}
              <div
                className={`absolute inset-0 border border-gold ${
                  isImageLeft ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
                }`}
              />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInView>

          {/* Content */}
          <FadeInView className="lg:w-1/2 flex flex-col justify-center" delay={200}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black mb-6">
              {title}
            </h2>
            <p className="text-matte-black/70 font-light text-lg leading-relaxed mb-8">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-matte-black/80 font-light">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              {detailHref && (
                <Button
                  asChild
                  variant="outline"
                  className="border-matte-black/20 text-matte-black hover:border-gold hover:text-gold font-medium tracking-wide"
                >
                  <Link href={detailHref}>Learn More</Link>
                </Button>
              )}
              <Button
                asChild
                className="bg-gold text-matte-black hover:bg-gold/90 font-medium tracking-wide"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
