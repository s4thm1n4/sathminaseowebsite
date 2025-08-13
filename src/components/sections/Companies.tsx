
'use client'

import React from 'react'

export const Companies: React.FC = () => {
  // Your 8 key clients
  const companies = [
    { name: 'Digit9X', image: '/images/digit9x.webp' },
    { name: 'IrisGarden', image: '/images/irisgarden.webp' },
    { name: 'CarePolicy.US', image: '/images/carepolicy.us.webp' },
    { name: 'SpaceWolf', image: '/images/spacewolf.webp' },
    { name: 'VXCore', image: '/images/vxcore.webp' },
    { name: 'Axoten', image: '/images/axoten.webp' },
    { name: 'SoftPlus', image: '/images/softplus.webp' },
    { name: 'Parallax Digital', image: '/images/parallax digital.webp' }
  ]

  return (
    <section className="py-20 bg-slate-900/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="premium-card inline-flex items-center gap-3 px-8 py-4 mb-8 backdrop-blur-xl bg-white/5 border border-white/10">
            <span className="text-purple-300 font-semibold tracking-wide">TRUSTED BY LEADING BRANDS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            <span className="text-gradient">Global Success Stories</span> from Sri Lanka&apos;s Premier SEO Specialist
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            70+ months of proven professional SEO Services by a dedicated SEO Specialist Sri Lanka - serving businesses across USA, UK, Australia, and beyond
          </p>
        </div>

        {/* BIGGER Logo Grid - Closer Spacing, No Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* BIGGER Logo Container - No Borders, Larger Sizes */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-white rounded-xl shadow-lg shadow-black/20 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-black/30 overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={`${company.name} - SEO Client`}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image fails */}
                  <div 
                    className="w-full h-full flex items-center justify-center text-slate-600 font-black text-3xl"
                    style={{ display: 'none' }}
                  >
                    {company.name.charAt(0)}
                  </div>
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </div>
              
              {/* Company Name - Shows on hover */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-sm text-center">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="text-center">
          <div className="premium-card inline-flex flex-wrap items-center justify-center gap-8 px-12 py-8 backdrop-blur-xl bg-gradient-to-r from-purple-600/10 to-orange-500/10 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-bold text-2xl">🏆</span>
              <div className="text-left">
                <div className="text-white font-bold text-lg">70+ Months</div>
                <div className="text-slate-300 text-sm">SEO Expertise</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-slate-600"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-purple-400 font-bold text-2xl">🌍</span>
              <div className="text-left">
                <div className="text-white font-bold text-lg">5+ Countries</div>
                <div className="text-slate-300 text-sm">Global Reach</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-slate-600"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-bold text-2xl">⭐</span>
              <div className="text-left">
                <div className="text-white font-bold text-lg">5.0 Rating</div>
                <div className="text-slate-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

