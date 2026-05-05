import { PageHero } from '@/components/page-hero'
import { BlogLayout } from '@/components/blog/blog-layout'

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
