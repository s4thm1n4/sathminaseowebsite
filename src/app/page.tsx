import { Metadata } from 'next'
import { ContactBar } from '@/components/sections/ContactBar'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { About } from '@/components/sections/About'
import { AuditForm } from '@/components/sections/AuditForm'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'SEO Services Sri Lanka | Sathmina Dissanayake - SEO Specialist',
  description: 'Looking for SEO services in Sri Lanka? Hire Sathmina, a dedicated SEO specialist delivering 973%+ growth. No middlemen, just results. WhatsApp for free consultation.',
  keywords: [
    'SEO Services Sri Lanka',
    'SEO Specialist Sri Lanka', 
    'Colombo SEO Services',
    'Sri Lanka Digital Marketing',
    'Technical SEO Sri Lanka',
    'Local SEO Specialist',
    'WordPress SEO Sri Lanka',
    'E-commerce SEO Services',
    'Google Analytics Sri Lanka',
    'Search Engine Optimization',
    'Sathmina SEO'
  ],
  authors: [{ name: 'Sathmina Dissanayake' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'SEO Services Sri Lanka | Sathmina Dissanayake - Proven SEO Specialist',
    description: 'Get real SEO results in Sri Lanka. 973%+ growth delivered. Direct service from Sathmina - no agencies, no middlemen. WhatsApp for free SEO audit.',
    url: 'https://seoservicessrilanka.com',
    siteName: 'Sathmina SEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Sri Lanka | Sathmina Dissanayake',
    description: 'Proven SEO specialist delivering 973%+ growth for Sri Lankan businesses.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContactBar />
      <Header />
      <Hero />
      <Services />
      <Results />
      <About />
      <AuditForm />
      <FAQ />
      <Footer />
    </main>
  )
}
