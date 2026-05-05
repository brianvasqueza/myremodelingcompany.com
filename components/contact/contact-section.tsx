'use client'

import { useState } from 'react'
import { FadeInView } from '@/components/fade-in-view'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const projectTypes = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Full Home Renovation',
  'Custom Addition',
  'Outdoor/Patio',
  'Other',
]

const contactMethods = ['Phone', 'Email', 'Text']

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeInView>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-matte-black mb-8">
                Get in Touch
              </h2>
              
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
                <p className="text-matte-black/70 font-light">
                  <span className="text-gold font-medium">Service Area:</span>{' '}
                  We proudly serve Houston and surrounding areas including The Woodlands, 
                  Sugar Land, Katy, Pearland, Cypress, and more.
                </p>
              </div>
            </div>
          </FadeInView>

          {/* Contact Form */}
          <FadeInView delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-border bg-off-white text-matte-black focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-border bg-off-white text-matte-black focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
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
                    className="w-full px-4 py-3 border border-border bg-off-white text-matte-black focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-matte-black mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-off-white text-matte-black focus:outline-none focus:border-gold transition-colors"
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
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-matte-black mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-off-white text-matte-black focus:outline-none focus:border-gold transition-colors"
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-matte-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-border bg-off-white text-matte-black placeholder:text-matte-black/40 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold text-matte-black hover:bg-gold/90 font-medium tracking-wide"
              >
                Send Message
              </Button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
