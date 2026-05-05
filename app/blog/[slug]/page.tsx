import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { FadeInView } from '@/components/fade-in-view'
import { CTABanner } from '@/components/cta-banner'

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: 'kitchen-trends-2024',
    title: '2024 Kitchen Design Trends Every Houston Homeowner Should Know',
    excerpt: 'From warm wood tones to smart appliances, discover the kitchen trends that are transforming Houston homes this year.',
    category: 'Trends',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    image: '/images/hero-kitchen.jpg',
    content: `
      <p>As we move through 2024, Houston homeowners are embracing kitchen designs that blend functionality with elevated aesthetics. At Premier Remodeling, we've observed several key trends emerging in the kitchens we're designing and building across the Greater Houston area.</p>

      <h2>Warm Wood Tones Are Back</h2>
      <p>After years of all-white kitchens dominating the design landscape, warm wood tones are making a significant comeback. We're seeing beautiful oak, walnut, and cherry cabinetry returning to Houston kitchens, often combined with lighter countertops for balance. This trend brings warmth and character that resonates particularly well with Texas homes.</p>

      <h2>Smart Appliance Integration</h2>
      <p>Houston homeowners are increasingly requesting smart appliances that integrate seamlessly into their kitchen design. From refrigerators with interior cameras to ranges you can control from your phone, technology is becoming an essential part of the modern kitchen experience.</p>

      <h2>Large Format Tiles</h2>
      <p>Backsplashes and flooring are moving toward larger format tiles with minimal grout lines. This creates a cleaner, more contemporary look while being easier to maintain – an important consideration in Houston's humid climate.</p>

      <h2>Hidden Storage Solutions</h2>
      <p>Maximizing storage while maintaining clean lines is a priority. We're incorporating more pull-out pantries, appliance garages, and custom drawer organizers to keep countertops clear and everything within easy reach.</p>

      <h2>Statement Lighting</h2>
      <p>The kitchen island has become a focal point for statement lighting. We're installing sculptural pendants, linear fixtures, and custom lighting designs that serve as both functional lighting and artistic elements.</p>

      <p>Ready to bring these trends to your Houston home? Contact our design team for a consultation and let's discuss how we can transform your kitchen into a space that's both beautiful and functional.</p>
    `,
  },
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Premier Remodeling Houston`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Premier Remodeling Houston`,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Post not found</p>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-matte-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeInView>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-off-white/60 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <span className="text-gold text-xs font-medium tracking-widest uppercase block mb-4">
              {post.category}
            </span>
            
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-off-white mb-6 text-balance">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-off-white/60">
              <span>{post.author}</span>
              <span className="w-px h-4 bg-gold/30" />
              <span>{post.date}</span>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 -mt-6">
          <FadeInView>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Content */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeInView>
            <div
              className="prose prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-matte-black
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-matte-black/70 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-matte-black prose-strong:font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeInView>
        </div>
      </section>

      <CTABanner
        headline="Ready to Start Your Remodeling Project?"
        body="Talk with a Houston remodeling contractor about kitchen remodeling, bathroom remodeling, flooring, painting, drywall repair, or a larger home renovation."
        buttonText="Request Free Estimate"
        buttonHref="/contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
