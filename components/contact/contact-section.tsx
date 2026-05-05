'use client'

import { useState } from 'react'
import { FadeInView } from '@/components/fade-in-view'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'

const projectTypes = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Whole-Home Renovation',
  'Addition or Conversion',
  'Flooring',
  'Painting or Drywall',
  'Carpentry or Trim',
  'Outdoor/Patio',
  'General Remodeling',
]

const contactMethods = ['Phone', 'Email', 'Text']

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet',
]

const timelines = [
  'As soon as possible',
  '1 - 3 months',
  '3 - 6 months',
  '6+ months',
  'Planning ahead',
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    projectLocation: '',
    budgetRange: '',
    timeline: '',
    contactMethod: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          {/* Contact Info */}
          <FadeInView>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black mb-8">
                Tell Us What You Want to Change
              </h2>
              <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-matte-black/65">
                A short message is enough to get started. Share the room, the problem you want solved, and any timing or budget details you already know.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-matte-black mb-1">Address</h3>
                    <p className="text-matte-black/60 font-light">
                      1234 Luxury Lane, Suite 100<br />
                      Houston, TX 77001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-matte-black mb-1">Phone</h3>
                    <a
                      href="tel:+17135551234"
                      className="text-matte-black/60 font-light hover:text-gold transition-colors"
                    >
                      (713) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-matte-black mb-1">Email</h3>
                    <a
                      href="mailto:info@premierremodeling.com"
                      className="text-matte-black/60 font-light hover:text-gold transition-colors"
                    >
                      info@premierremodeling.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-matte-black mb-1">Hours</h3>
                    <p className="text-matte-black/60 font-light">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-linen border border-border">
                <p className="mb-5 text-matte-black/70 font-light">
                  <span className="text-gold font-medium">Service Area:</span>{' '}
                  Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, Tomball, Missouri City, Bellaire, Memorial, and nearby communities.
                </p>
                <div className="grid gap-3 text-sm text-matte-black/70 sm:grid-cols-2">
                  {['Free estimates', 'Local service', 'Clean job sites', 'Licensed/insured placeholder'].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Contact Form */}
          <FadeInView delay={200}>
            <form onSubmit={handleSubmit} className="border border-border bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-matte-black">
                  Request a Free Estimate
                </h2>
                <p className="mt-2 text-sm font-light leading-relaxed text-matte-black/60">
                  Share a few details and we will follow up to schedule a consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-matte-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-matte-black mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-matte-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="projectLocation" className="block text-sm font-medium text-matte-black mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    placeholder="City or ZIP code"
                    autoComplete="address-level2"
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black placeholder:text-matte-black/40 transition-colors focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-matte-black mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-matte-black mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-matte-black mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-matte-black mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full border border-border bg-off-white px-4 py-3 text-matte-black transition-colors focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a method</option>
                    {contactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-matte-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Example: We want to remodel our hall bathroom, replace the tub with a walk-in shower, update tile, and improve storage."
                  className="w-full resize-none border border-border bg-off-white px-4 py-3 text-matte-black placeholder:text-matte-black/40 transition-colors focus:border-gold focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-7 w-full bg-gold text-matte-black hover:bg-gold/90 font-semibold tracking-wide"
              >
                Request Free Estimate
              </Button>
              <p className="mt-4 text-center text-xs font-light leading-relaxed text-matte-black/50">
                Prefer to talk now? Call{' '}
                <a href="tel:+17135551234" className="font-medium text-matte-black hover:text-gold">
                  (713) 555-1234
                </a>
                .
              </p>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
