import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeInView } from '@/components/fade-in-view'

interface CTABannerProps {
  headline: string
  buttonText: string
  buttonHref: string
}

export function CTABanner({ headline, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="bg-matte-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-off-white mb-8 text-balance">
            {headline}
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-gold text-matte-black hover:bg-gold/90 font-medium tracking-wide px-10"
          >
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </FadeInView>
      </div>
    </section>
  )
}
