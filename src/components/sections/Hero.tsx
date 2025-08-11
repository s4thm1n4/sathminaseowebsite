'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-dot"></div>
            <span className="text-purple-300 font-medium">ESPECIALLY, SPECIALIST</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            No generalists here, just an{' '}
            <span className="text-gradient">SEO specialist</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Rewriting the SEO playbook in Sri Lanka.<br/>
            <span className="text-purple-300">Plenty of hustlers, not enough masters</span> - we decided to change that.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <Card className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.9★</div>
              <div className="text-slate-300">Client Reviews</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-slate-300">Projects Completed</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">8+</div>
              <div className="text-slate-300">Years Experience</div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Free SEO Audit
            </Button>
            <Button variant="secondary" size="lg">
              Watch Founder Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
