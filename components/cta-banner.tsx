import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeInView } from '@/components/fade-in-view'

interface CTABannerProps {
  headline: string
  buttonText: string
  buttonHref: string
  eyebrow?: string
  body?: string
  secondaryText?: string
  secondaryHref?: string
}

export function CTABanner({
  headline,
  buttonText,
  buttonHref,
  eyebrow,
  body,
  secondaryText,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeInView>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-off-white mb-8 text-balance">
            {headline}
          </h2>
          {body && (
            <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-off-white/70">
              {body}
            </p>
          )}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-matte-black hover:bg-gold/90 font-semibold tracking-wide px-10"
            >
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
            {secondaryText && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-off-white/35 text-off-white hover:bg-off-white hover:text-matte-black font-medium tracking-wide px-10"
              >
                {secondaryHref.startsWith('/') ? (
                  <Link href={secondaryHref}>{secondaryText}</Link>
                ) : (
                  <a href={secondaryHref}>{secondaryText}</a>
                )}
              </Button>
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
