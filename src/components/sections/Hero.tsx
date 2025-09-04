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
          {/* Left Content - Mobile reordered, Desktop unchanged */}
          <div className="text-center xl:text-left space-y-8">
            {/* 1. H1 Badge - SEO Specialist Services Sri Lanka */}
            <h1 className="inline-flex items-center gap-3 premium-card px-8 py-4 group text-base font-semibold tracking-wide">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              <span className="text-purple-300">SEO Specialist Services Sri Lanka</span>
            </h1>

            {/* 2. Main Heading - Hire a dedicated SEO Specialist */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight">
                Hire a dedicated{' '}
                <span className="text-gradient relative">
                  SEO Specialist
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-2xl -z-10 rounded-2xl"></div>
                </span>{' '}
                for your Project!
              </h2>
              
              {/* 3. One-on-one service description */}
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                <span className="text-purple-300 font-medium">One-on-one service, no outsourcing.</span> Clear, honest reporting. No contracts—just results for your Sri Lankan business.
              </p>
            </div>

            {/* MOBILE ONLY: CTA Buttons moved HERE - after description, before message */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:hidden pt-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf3bRteYzIlY1DcKMyTNW2iHnL2xZfAy1aQwLPNr_E4UVtDoA/viewform?usp=header', '_blank')}
                className="flex items-center gap-3"
              >
                🚀 Free SEO Masterplan
              </Button>
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  📊 View My Results
                </span>
              </Button>
            </div>

            {/* MOBILE ONLY: A message from Sathmina section - WITHOUT contact links */}
            <div className="xl:hidden premium-card p-6 text-left">
              <h3 className="text-xl font-bold text-white mb-4">A message from Sathmina Dissanayake</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                {/* Bigger image for mobile */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-orange-500/30 shadow-lg shadow-orange-500/20">
                    <img 
                      src="/images/Sathmina Dissanayake - SEO Specialist - SEO Services Sri Lanka.jpg" 
                      alt="Sathmina Dissanayake - SEO Specialist" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-slate-300 leading-relaxed text-sm mb-4">
                    Hi, I&apos;m <strong className="text-orange-400">Sathmina</strong>. I founded SathminaSEO to be Sri Lanka&apos;s #1 freelance specialist SEO consultancy, cutting through the noise of generalist agencies.
                    <br/><br/>
                    <span className="text-purple-300">I provide more cost-effective services with better quality</span> because you work directly with me—no middlemen, no junior staff, no outsourcing.
                  </p>
                  
                  <div className="text-center sm:text-left mb-4">
                    <p className="text-white font-semibold">Sathmina Dissanayake</p>
                    <p className="text-orange-400 text-sm">SEO Specialist & Growth Partner</p>
                  </div>
                  
                  {/* MOBILE: Only "Let's Discuss" button, NO email/LinkedIn links */}
                  <Button 
                    className="w-full group-hover:scale-105 transition-transform duration-300" 
                    onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
                  >
                    📱 Let&apos;s Discuss Your SEO Goals
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE ONLY: Global Reach - Proudly serving clients across */}
            <div className="xl:hidden premium-card p-6 text-left">
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

            {/* DESKTOP ONLY: Original Global Reach section */}
            <div className="hidden xl:block premium-card p-6 text-left">
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

            {/* DESKTOP ONLY: Real Stats Row */}
            <div className="hidden xl:flex flex-col sm:flex-row gap-6 justify-center xl:justify-start">
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

            {/* DESKTOP ONLY: CTA Buttons in original position */}
            <div className="hidden xl:flex flex-col sm:flex-row gap-6 justify-center xl:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf3bRteYzIlY1DcKMyTNW2iHnL2xZfAy1aQwLPNr_E4UVtDoA/viewform?usp=header', '_blank')}
                className="flex items-center gap-3"
              >
                🚀 Free SEO Masterplan
              </Button>
              <a href="#results">
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  📊 View My Results
                </span>
              </Button></a>
            </div>
          </div>

          {/* DESKTOP ONLY: Right Content - Personal Message Card - UNCHANGED */}
          <div className="hidden xl:flex justify-center xl:justify-end mt-8 xl:-mt-24">
            <div className="premium-card p-8 max-w-lg w-full glow-effect group">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">A message from Sathmina Dissanayake</h3>
                <p className="text-slate-300 leading-relaxed text-left">
                  Hi, I&apos;m <strong className="text-orange-400">Sathmina</strong>. I founded SathminaSEO to be Sri Lanka&apos;s #1 freelance specialist SEO consultancy, cutting through the noise of generalist agencies.
                  <br/><br/>
                  <span className="text-purple-300">I provide more cost-effective services with better quality</span> because you work directly with me—no middlemen, no junior staff, no outsourcing.
                </p>
              </div>
              
              {/* Professional Image - BIGGER SIZE */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl aspect-video flex items-center justify-center group/video cursor-pointer overflow-hidden border border-slate-600/30 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-orange-500/10"></div>
                
                <div className="relative z-10 text-center">
                  {/* BIGGER IMAGE - w-40 h-40 */}
                  <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden shadow-2xl shadow-orange-500/50 border-4 border-orange-500/30">
                    <img 
                      src="/images/Sathmina Dissanayake - SEO Specialist - SEO Services Sri Lanka.jpg" 
                      alt="Sathmina Dissanayake - SEO Specialist - SEO Services Sri Lanka" 
                      className="w-full h-full object-cover object-center"
                    />
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
                  📱 Let&apos;s Discuss Your SEO Goals
                </Button>
                
                {/* DESKTOP: Clickable Contact Links with Icons - UNCHANGED */}
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