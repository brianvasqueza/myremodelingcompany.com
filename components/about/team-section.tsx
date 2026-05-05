'use client'

import { SectionLabel } from '@/components/section-label'
import { FadeInView } from '@/components/fade-in-view'
import { useState } from 'react'

const team = [
  {
    name: 'James Mitchell',
    role: 'Founder & CEO',
    bio: 'A third-generation builder with over 25 years of experience in residential construction and design. James founded Premier Remodeling to give Houston homeowners a more organized remodeling experience.',
  },
  {
    name: 'Sarah Chen',
    role: 'Design Director',
    bio: 'With a background in interior architecture and 15 years of design experience, Sarah leads our creative team in developing innovative solutions that balance aesthetics with functionality.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Operations Manager',
    bio: 'Marcus ensures every project runs smoothly from start to finish. His attention to detail and commitment to client satisfaction has earned Premier Remodeling its stellar reputation.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Project Coordinator',
    bio: 'Elena serves as the primary point of contact for our clients, coordinating timelines, managing expectations, and ensuring clear communication throughout the project lifecycle.',
  },
]

function TeamCard({ member }: { member: typeof team[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group border border-border hover:border-gold transition-colors duration-500 bg-off-white p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Initials Circle */}
      <div className="w-20 h-20 border border-gold flex items-center justify-center mb-6 mx-auto">
        <span className="font-serif text-2xl text-gold">
          {member.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>

      <h3 className="font-serif text-xl font-semibold text-matte-black text-center mb-1">
        {member.name}
      </h3>
      <p className="text-gold text-sm text-center tracking-wide uppercase mb-4">
        {member.role}
      </p>

      {/* Bio - revealed on hover */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-matte-black/60 font-light text-sm text-center leading-relaxed pt-4 border-t border-border">
          {member.bio}
        </p>
      </div>
    </div>
  )
}

export function TeamSection() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-matte-black mb-6">
            Meet Our Experts
          </h2>
          <p className="text-matte-black/60 font-light max-w-2xl mx-auto text-lg">
            Our talented team brings together decades of experience in design, 
            construction, and project management.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <FadeInView key={member.name} delay={index * 100}>
              <TeamCard member={member} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
