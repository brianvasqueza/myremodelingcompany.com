import Image from 'next/image'
import { FadeInView } from '@/components/fade-in-view'

export function StorySection() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Content */}
          <FadeInView className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black mb-8">
              Building Dreams in Houston Since 2009
            </h2>
            <div className="space-y-6 text-matte-black/70 font-light text-lg leading-relaxed">
              <p>
                Premier Remodeling was founded with a simple mission: to transform 
                Houston homes with the same care and attention we would give our own. 
                What started as a small team of passionate craftsmen has grown into 
                one of Houston&apos;s most trusted remodeling companies.
              </p>
              <p>
                Our founder, a third-generation builder, brought together a team that 
                shares his commitment to excellence. We believe that every home tells 
                a story, and our job is to help write the next chapter with spaces that 
                inspire and delight.
              </p>
              <p>
                Today, we&apos;re proud to have completed over 500 projects across the 
                Greater Houston area. From intimate bathroom renovations to complete 
                home transformations, we approach each project with the same dedication 
                to quality, communication, and customer satisfaction that has defined 
                our work from day one.
              </p>
            </div>
          </FadeInView>

          {/* Image */}
          <FadeInView className="lg:w-1/2" delay={200}>
            <div className="relative">
              {/* Offset border */}
              <div className="absolute inset-0 border border-gold translate-x-4 translate-y-4" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/team.jpg"
                  alt="Premier Remodeling team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
