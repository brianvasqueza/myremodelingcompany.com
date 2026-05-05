import { PageHero } from '@/components/page-hero'
import { BlogLayout } from '@/components/blog/blog-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remodeling Blog Houston | Kitchen, Bath & Home Renovation Tips',
  description:
    'Home remodeling tips for Houston homeowners planning kitchen remodeling, bathroom remodeling, flooring, painting, drywall repair, and renovations.',
  openGraph: {
    title: 'Remodeling Blog Houston | Premier Remodeling',
    description:
      'Practical remodeling advice for Houston homeowners planning kitchens, bathrooms, flooring, painting, drywall, and renovation projects.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Remodeling Insights"
        subtitle="Tips, trends, and inspiration for Houston homeowners planning their next renovation project."
      />
      
      <BlogLayout />
    </>
  )
}
