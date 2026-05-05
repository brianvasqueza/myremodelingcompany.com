import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { JsonLd } from '@/components/json-ld'
import { business, majorServices, serviceAreas } from '@/lib/seo'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: 'Premier Remodeling Houston | Kitchen, Bath & Home Renovations',
  description: 'Houston remodeling contractor for kitchen remodeling, bathroom remodeling, flooring, painting, drywall, carpentry, additions, and whole-home renovations. Request a quote today.',
  keywords: 'Houston remodeling contractor, kitchen remodel Houston, bathroom remodel Houston, home renovation Houston, flooring, drywall, painting, carpentry, home additions',
  openGraph: {
    title: 'Premier Remodeling Houston | Kitchen, Bath & Home Renovations',
    description: 'Houston remodeling contractor for kitchen, bath, flooring, drywall, painting, additions, and whole-home renovations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    telephone: business.phone,
    email: business.email,
    url: business.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: 'US',
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    makesOffer: majorServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
      },
    })),
  }

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} bg-off-white`}>
      <body className="font-sans antialiased">
        <JsonLd data={localBusinessSchema} />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
