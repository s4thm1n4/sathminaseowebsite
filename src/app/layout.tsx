import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Sathimina SEO Services - Sri Lanka\'s Premier SEO Specialist',
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
    index: true,
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
      <Head>
        {/* ✅ Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-73PG5VJ590"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-73PG5VJ590');
            `,
          }}
        />
      </Head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
