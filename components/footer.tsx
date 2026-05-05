import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              Houston&apos;s Premier Remodeling Experience
            </p>
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
              Navigation
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

          {/* Contact Info */}
          <div>
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
            </address>
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
