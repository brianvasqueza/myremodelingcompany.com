'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FadeInView } from '@/components/fade-in-view'

interface Post {
  id: number
  slug: string
  title: string
  category: string
  date: string
}

interface BlogSidebarProps {
  posts: Post[]
}

const categories = ['Kitchen', 'Bathroom', 'Trends', 'Tips', 'Houston']

export function BlogSidebar({ posts }: BlogSidebarProps) {
  const [email, setEmail] = useState('')
  const recentPosts = posts.slice(0, 4)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <aside className="lg:col-span-1">
      <FadeInView>
        {/* Recent Posts */}
        <div className="mb-12">
          <h3 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
            Recent Posts
          </h3>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h4 className="font-serif text-matte-black group-hover:text-gold transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <span className="text-matte-black/50 text-sm">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
            Categories
          </h3>
          <ul className="space-y-3">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/blog?category=${category.toLowerCase()}`}
                  className="text-matte-black/70 hover:text-gold transition-colors font-light"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="p-8 bg-matte-black">
          <h3 className="text-gold text-xs font-medium tracking-widest uppercase mb-4">
            Newsletter
          </h3>
          <p className="text-off-white/70 font-light text-sm mb-6">
            Get remodeling tips and inspiration delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-off-white/10 border border-gold/30 text-off-white placeholder:text-off-white/50 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <Button
              type="submit"
              className="w-full bg-gold text-matte-black hover:bg-gold/90 font-medium tracking-wide"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </FadeInView>
    </aside>
  )
}
