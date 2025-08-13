
'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-32">
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
            {/* H1 Badge - Visually Small but Semantically H1 for SEO */}
            <h1 className="inline-flex items-center gap-3 premium-card px-8 py-4 group text-base font-semibold tracking-wide">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              <span className="text-purple-300">SEO Specialist Sri Lanka</span>
            </h1>

            {/* Main Visual Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight">
                No Middleman. No Ghosting.<br/>
                Hire a dedicated{' '}
                <span className="text-gradient relative">
                  SEO Specialist
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-2xl -z-10 rounded-2xl"></div>
                </span>{' '}
                for your Project!
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                <span className="text-purple-300 font-medium">One-on-one service, no outsourcing.</span> Clear, honest reporting. No contracts—just results for your Sri Lankan business.
              </p>

              {/* Global Reach */}
              <div className="premium-card p-6 text-left">
                <h3 className="text-lg font-bold text-orange-400 mb-3">🌍 Proudly serving clients across:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🇺🇸</span>
                    United States
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🇬🇧</span>
                    United Kingdom
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🇦🇺</span>
                    Australia
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🇫🇷</span>
                    France
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">🇱🇰</span>
                    Sri Lanka
                  </div>
                  <div className="text-orange-400 font-medium">& More!</div>
                </div>
              </div>
            </div>

            {/* Real Stats Row */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start">
              {[
                { stat: '973%', label: 'Organic Growth Delivered', icon: '📈' },
                { stat: '70+', label: 'Months of SEO Delivered', icon: '⏱️' },
                { stat: '5⭐', label: 'Client Satisfaction', icon: '🏆' }
              ].map((item, index) => (
                <div key={index} className="stats-card p-6 text-center group">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">{item.stat}</div>
                  <div className="text-slate-400 text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
                className="flex items-center gap-3"
              >
                💬 WhatsApp for Free SEO Audit
              </Button>
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  📊 View My Results
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Personal Message Card - RESPONSIVE POSITIONING */}
          <div className="flex justify-center xl:justify-end mt-8 xl:-mt-24">
            <div className="premium-card p-8 max-w-lg w-full glow-effect group">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">A message from Sathmina Dissanayake</h3>
                <p className="text-slate-300 leading-relaxed text-left">
                  Hi, I'm <strong className="text-orange-400">Sathmina</strong>. I founded SathminaSEO to be Sri Lanka's #1 freelance specialist SEO consultancy, cutting through the noise of generalist agencies.
                  <br/><br/>
                  <span className="text-purple-300">I provide more cost-effective services with better quality</span> because you work directly with me—no middlemen, no junior staff, no outsourcing.
                </p>
              </div>
              
              {/* Professional Image Placeholder */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl aspect-video flex items-center justify-center group/video cursor-pointer overflow-hidden border border-slate-600/30 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-orange-500/10"></div>
                
                {/* Photo Placeholder - YOU NEED TO ADD YOUR ACTUAL PHOTO HERE */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/50 mb-4">
                    <span className="text-4xl text-white font-bold">SD</span>
                  </div>
                  <p className="text-white font-semibold text-lg">Sathmina Dissanayake</p>
                  <p className="text-orange-400 text-sm">SEO Specialist & Growth Partner</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full group-hover:scale-105 transition-transform duration-300" 
                  onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
                >
                  📱 Let's Discuss Your SEO Goals
                </Button>
                
                {/* Clickable Contact Links with Icons */}
                <div className="text-center space-y-2">
                  <div>
                    <a 
                      href="mailto:sathminadimath@gmail.com" 
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <span>📧</span>
                      <span>sathminadimath@gmail.com</span>
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://linkedin.com/in/sathminadd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <span>🔗</span>
                      <span>linkedin.com/in/sathminadd</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
