import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Phone, Twitter } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/kitchen-remodeling', label: 'Kitchen Remodeling' },
  { href: '/services/bathroom-remodeling', label: 'Bathroom Remodeling' },
  { href: '/services/flooring-installation', label: 'Flooring Installation' },
  { href: '/services/painting-services', label: 'Painting Services' },
  { href: '/services/drywall-repair', label: 'Drywall Repair' },
  { href: '/services/home-renovation', label: 'Home Renovation' },
]

const areaLinks = [
  'Houston',
  'The Woodlands',
  'Sugar Land',
  'Katy',
  'Pearland',
  'Cypress',
]

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-matte-black border-t border-gold/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-semibold text-gold">
                Premier
              </span>
              <span className="font-sans text-sm font-light tracking-widest uppercase text-off-white/70">
                Remodeling
              </span>
            </Link>
            <p className="text-off-white/60 font-light text-lg max-w-md leading-relaxed">
              Kitchen, bathroom, flooring, painting, drywall, carpentry, additions, and whole-home remodeling for Greater Houston homeowners.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold px-5 py-3 font-semibold text-matte-black transition-colors hover:bg-gold/90"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:+17135551234"
                className="inline-flex items-center justify-center gap-3 border border-gold/35 px-5 py-3 font-semibold text-off-white transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 border border-gold/30 text-off-white/60 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-off-white/60 hover:text-gold transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-off-white/60 hover:text-gold transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
              Service Areas
            </h4>
            <ul className="space-y-4">
              {areaLinks.map((area) => (
                <li key={area}>
                  <Link
                    href="/service-areas"
                    className="text-off-white/60 hover:text-gold transition-colors font-light"
                  >
                    {area}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-gold hover:text-off-white transition-colors font-medium"
                >
                  View all areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-4 text-off-white/60 font-light">
              <p>1234 Luxury Lane, Suite 100</p>
              <p>Houston, TX 77001</p>
              <p className="pt-4">
                <a href="tel:+17135551234" className="hover:text-gold transition-colors">
                  (713) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@premierremodeling.com" className="hover:text-gold transition-colors">
                  info@premierremodeling.com
                </a>
              </p>
              <p className="pt-4 text-off-white/50">
                Serving Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, and nearby areas.
              </p>
            </address>
            <div className="mt-8 border-t border-gold/20 pt-6">
              <h4 className="mb-4 text-gold text-xs font-medium tracking-widest uppercase">
                Business Hours
              </h4>
              <dl className="space-y-2 text-sm font-light text-off-white/60">
                <div className="flex justify-between gap-4">
                  <dt>Mon - Fri</dt>
                  <dd>8am - 6pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Saturday</dt>
                  <dd>9am - 2pm</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-off-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} Premier Remodeling. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-off-white/40 hover:text-gold transition-colors font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-off-white/40 hover:text-gold transition-colors font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
