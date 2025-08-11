'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-dot"></div>
              <span className="text-purple-300 font-medium">ESPECIALLY, SPECIALIST</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              No generalists here, just an{' '}
              <span className="text-gradient">SEO specialist</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Rewriting the SEO playbook in Sri Lanka.<br/>
              <span className="text-purple-300">Plenty of hustlers, not enough masters</span> - we decided to change that.
            </p>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">4.9★</div>
                <div className="text-slate-300 text-sm">Client Reviews</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">8+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Free SEO Masterplan
              </Button>
              <Button variant="secondary" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 max-w-lg w-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">A message from our founder</h3>
                <p className="text-slate-300">
                  Hi, I'm Sathimina, the founder of SathminaSEO. I started this journey with a 
                  simple vision: to create Sri Lanka's #1 specialist SEO agency.
                </p>
              </div>
              
              {/* Video Placeholder */}
              <div className="relative bg-slate-800 rounded-lg aspect-video flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white font-medium">Watch Founder Message</p>
                  <p className="text-slate-400 text-sm">3:42 min</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Button className="w-full" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get My Free SEO Audit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
