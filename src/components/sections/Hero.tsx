'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center xl:text-left space-y-8">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-3 premium-card px-8 py-4 group">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-semibold tracking-wide">ESPECIALLY, SPECIALIST</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
                No generalists here, just an{' '}
                <span className="text-gradient relative">
                  SEO specialist
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-2xl -z-10 rounded-2xl"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Rewriting the SEO playbook in Sri Lanka.<br/>
                <span className="text-purple-300 font-medium">Plenty of hustlers, not enough masters</span> - we decided to change that.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start">
              {[
                { stat: '4.9★', label: 'Client Reviews' },
                { stat: '100+', label: 'Projects Completed' },
                { stat: '8+', label: 'Years Experience' }
              ].map((item, index) => (
                <div key={index} className="stats-card p-6 text-center group">
                  <div className="text-3xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">{item.stat}</div>
                  <div className="text-slate-400 text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start pt-4">
              <Button size="lg" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="flex items-center gap-2">
                  🚀 Free SEO Masterplan
                </span>
              </Button>
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  📊 View Case Studies
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Video Card */}
          <div className="flex justify-center xl:justify-end">
            <div className="premium-card p-8 max-w-lg w-full glow-effect group">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">A message from our founder</h3>
                <p className="text-slate-300 leading-relaxed">
                  Hi, I'm Sathimina, the founder of SathminaSEO. I started this journey with a 
                  simple vision: to create Sri Lanka's #1 specialist SEO agency.
                </p>
              </div>
              
              {/* Premium Video Placeholder */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl aspect-video flex items-center justify-center group/video cursor-pointer overflow-hidden border border-slate-600/30">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-orange-500/10"></div>
                
                {/* Play button with enhanced styling */}
                <div className="relative z-10 text-center group-hover/video:scale-110 transition-transform duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl shadow-orange-500/50 group-hover/video:shadow-orange-500/80 transition-shadow duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Watch Founder Message</p>
                  <p className="text-slate-400 text-sm">3:42 min</p>
                </div>
                
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-purple-600/0 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full group-hover:scale-105 transition-transform duration-300" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get My Free SEO Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}