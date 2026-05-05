'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeInView } from '@/components/fade-in-view'
import { BlogSidebar } from '@/components/blog/blog-sidebar'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'kitchen-trends-2024',
    title: '2024 Kitchen Design Trends Every Houston Homeowner Should Know',
    excerpt: 'From warm wood tones to smart appliances, discover the kitchen trends that are transforming Houston homes this year.',
    category: 'Trends',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    image: '/images/hero-kitchen.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'bathroom-spa-retreat',
    title: 'How to Create a Spa-Like Bathroom Retreat',
    excerpt: 'Transform your everyday bathroom into a personal sanctuary with these design tips and material recommendations.',
    category: 'Bathroom',
    author: 'James Mitchell',
    date: 'March 8, 2024',
    image: '/images/bathroom-luxury.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'houston-remodeling-roi',
    title: 'Which Remodeling Projects Offer the Best ROI in Houston?',
    excerpt: 'Not all renovations are created equal. Learn which improvements deliver the best return on investment for Houston homes.',
    category: 'Tips',
    author: 'Marcus Johnson',
    date: 'March 1, 2024',
    image: '/images/living-room.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'outdoor-living-houston',
    title: 'Designing Outdoor Living Spaces for the Houston Climate',
    excerpt: 'Create comfortable outdoor spaces that work year-round in Houston\'s unique subtropical climate.',
    category: 'Houston',
    author: 'Elena Rodriguez',
    date: 'February 22, 2024',
    image: '/images/outdoor-patio.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'choosing-contractor-tips',
    title: '10 Questions to Ask Before Hiring a Remodeling Contractor',
    excerpt: 'Make an informed decision with these essential questions every homeowner should ask potential contractors.',
    category: 'Tips',
    author: 'James Mitchell',
    date: 'February 15, 2024',
    image: '/images/team.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'open-concept-living',
    title: 'Is Open Concept Living Right for Your Houston Home?',
    excerpt: 'Weighing the pros and cons of open floor plans and what to consider before knocking down walls.',
    category: 'Kitchen',
    author: 'Sarah Chen',
    date: 'February 8, 2024',
    image: '/images/living-room.jpg',
    featured: false,
  },
]

export function BlogLayout() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <FadeInView className="mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block border border-border hover:border-gold transition-colors duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-matte-black mb-4 group-hover:text-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-matte-black/60 font-light mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-matte-black/50 mb-6">
                    <span>{featuredPost.author}</span>
                    <span className="w-px h-4 bg-border" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-matte-black font-medium tracking-wide group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeInView>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.slice(0, currentPage * postsPerPage).map((post, index) => (
                <FadeInView key={post.id} delay={index * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border border-border hover:border-gold transition-colors duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-gold text-xs font-medium tracking-widest uppercase">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-matte-black mt-2 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-matte-black/60 font-light text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="text-matte-black/50 text-sm">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            {/* Pagination */}
            {regularPosts.length > currentPage * postsPerPage && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-8 py-3 border border-gold text-matte-black hover:bg-gold hover:text-matte-black transition-colors font-medium tracking-wide"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar posts={blogPosts} />
        </div>
      </div>
    </section>
  )
}
