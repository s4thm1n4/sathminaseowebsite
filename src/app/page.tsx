import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { About } from '@/components/sections/About'
import { AuditForm } from '@/components/sections/AuditForm'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
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
