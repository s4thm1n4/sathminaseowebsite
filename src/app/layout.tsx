import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Sathimina SEO - Sri Lanka\'s Premier SEO Specialist',
  description: 'No generalists here, just an SEO specialist. Professional SEO services for Sri Lankan businesses. Get your free SEO audit today.',
  keywords: ['SEO Sri Lanka', 'SEO specialist', 'search engine optimization', 'digital marketing Sri Lanka'],
  authors: [{ name: 'Sathimina SEO' }],
  openGraph: {
    title: 'Sathimina SEO - Sri Lanka\'s Premier SEO Specialist',
    description: 'Professional SEO services for Sri Lankan businesses. Get your free SEO audit today.',
    url: 'https://seoservicessrilanka.com',
    siteName: 'Sathimina SEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sathimina SEO - Sri Lanka\'s Premier SEO Specialist',
    description: 'Professional SEO services for Sri Lankan businesses.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
