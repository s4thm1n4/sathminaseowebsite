'use client'
import React from 'react'

export const Results: React.FC = () => {
  // Your real personal achievements with brand-matching colors
  const personalStats = [
    { 
      number: '973%', 
      label: 'Organic Traffic Growth Delivered', 
      icon: '🚀', 
      gradient: 'from-orange-500/40 to-purple-500/40',
      description: 'E-commerce client breakthrough performance',
      growthIndicator: '↗️',
      highlight: 'EXPLOSIVE GROWTH'
    },
    { 
      number: '700%', 
      label: 'Order Volume Surge', 
      icon: '📈', 
      gradient: 'from-purple-500/40 to-orange-500/40',
      description: 'Within 12-month optimization period',
      growthIndicator: '🔥',
      highlight: 'MASSIVE SURGE'
    },
    { 
      number: '$500K+', 
      label: 'Client Revenue Generated', 
      icon: '💰', 
      gradient: 'from-orange-600/40 to-orange-400/40',
      description: 'Through strategic SEO campaigns',
      growthIndicator: '💎',
      highlight: 'REVENUE IMPACT'
    },
    { 
      number: '70+', 
      label: 'Months of SEO Delivered', 
      icon: '🏆', 
      gradient: 'from-purple-600/40 to-purple-400/40',
      description: 'Dedicated SEO specialist experience',
      growthIndicator: '⭐',
      highlight: 'PROVEN EXPERTISE'
    },
    { 
      number: '1000+', 
      label: 'Keywords Optimized', 
      icon: '🎯', 
      gradient: 'from-orange-500/40 to-purple-600/40',
      description: 'Expanded from ~250 to 1000+ terms',
      growthIndicator: '📊',
      highlight: '4X EXPANSION'
    },
    { 
      number: '5⭐', 
      label: 'Client Satisfaction', 
      icon: '⭐', 
      gradient: 'from-purple-500/40 to-orange-600/40',
      description: 'Consistent excellence across projects',
      growthIndicator: '👑',
      highlight: 'PERFECT RATING'
    }
  ]

  // Your REAL client success stories with brand colors
  const realCaseStudies = [
    {
      client: 'Content Strategy Client',
      traffic: '307%',
      impressions: '140%',
      ctr: '7.4%',
      description: 'Achieved explosive growth in clicks by strategically updating old content - proving that content optimization can deliver incredible SEO results.',
      metrics: 'clicks increase',
      period: 'Content refresh campaign',
      gradient: 'from-orange-600/30 to-purple-600/30',
      tags: ['content optimization', 'organic growth', 'click-through rate'],
      growthBadge: 'CONTENT EXPLOSION',
      mainMetric: '307%',
      trendIcon: '🚀'
    },
    {
      client: 'Texas Business (No Link Building)',
      traffic: '2x',
      timeline: '14 days',
      links: '0',
      description: 'Transformed a Texas business with ZERO link building - demonstrating the power of technical SEO and on-page optimization alone.',
      metrics: 'traffic growth',
      period: '14-day transformation',
      gradient: 'from-purple-600/30 to-orange-600/30',
      tags: ['technical SEO', 'no link building', 'fast results'],
      growthBadge: 'RAPID TRANSFORMATION',
      mainMetric: '2x',
      trendIcon: '⚡'
    },
    {
      client: 'Canadian Tourism Website',
      clicks: '581',
      clickGrowth: '66%',
      impressions: '3.58K',
      impressionGrowth: '20%',
      description: 'Steady growth for Canadian tourism client through strategic keyword targeting and content optimization, building sustainable organic visibility.',
      metrics: 'clicks & impressions growth',
      period: 'Tourism SEO campaign',
      gradient: 'from-orange-500/30 to-purple-500/30',
      tags: ['tourism SEO', 'international client', 'sustainable growth'],
      growthBadge: 'SUSTAINED GROWTH',
      mainMetric: '66%',
      trendIcon: '📈'
    },
    {
      client: 'SaaS Platform Growth',
      users: '916',
      userGrowth: '438.8%',
      events: '8.3K',
      eventGrowth: '371.6%',
      sessions: '1.1K',
      sessionGrowth: '384.6%',
      description: 'Exceptional SaaS project results with massive increases across all key metrics - users, events, and sessions all showing 300%+ growth.',
      metrics: 'users, events & sessions growth',
      period: 'SaaS optimization project',
      gradient: 'from-purple-600/30 to-orange-500/30',
      tags: ['SaaS growth', '400%+ users', 'comprehensive metrics'],
      growthBadge: 'EXCEPTIONAL PERFORMANCE',
      mainMetric: '438%',
      trendIcon: '🔥'
    }
  ]

  // Your expertise areas
  const expertiseAreas = [
    { icon: '🎯', title: 'Strategic SEO Planning', description: 'Data-driven roadmaps for sustainable growth' },
    { icon: '🔍', title: 'Competitive Intelligence', description: 'Reverse-engineering competitor strategies' },
    { icon: '📊', title: 'Analytics Mastery', description: 'Google Analytics, Search Console, Ahrefs, Semrush' },
    { icon: '🚀', title: 'Technical Optimization', description: 'Site health, crawlability, mobile-first approach' },
    { icon: '🌍', title: 'Global Market Reach', description: 'Sri Lanka, US, UK, Australia, France, Dubai' },
    { icon: '💼', title: 'Multi-Industry Experience', description: 'E-commerce, SaaS, Corporate, Tourism expertise' }
  ]

  return (
    <section id="results" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* Brand-matching Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Personal Story Header with brand colors */}
        <div className="text-center mb-20">
          <div className="premium-card inline-flex items-center gap-3 px-8 py-4 mb-8 backdrop-blur-xl bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-400/30">
            <span className="text-orange-400 text-xl animate-pulse">📊</span>
            <span className="text-orange-300 font-bold tracking-wider">🚀 GROWTH SPECIALIST TRACK RECORD 🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient bg-gradient-to-r from-orange-400 via-purple-500 to-orange-600">Explosive Growth Results</span>
            <br />
            <span className="text-white">I&apos;ve Delivered as Your SEO Specialist</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="premium-card p-8 backdrop-blur-xl bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-400/20 mb-8">
              <p className="text-2xl font-bold text-white mb-4">
                🎯 <span className="text-orange-400">Growth-Obsessed</span> SEO Specialist
              </p>
              <p className="text-lg font-semibold text-orange-300">
                Generating $500K+ Client Revenue • 973% Organic Growth • 700%+ Order Volume
              </p>
              <p className="text-md text-purple-300 mt-2">
                E-commerce, SaaS, Corporate & Tourism SEO Expert
              </p>
            </div>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              My passion for SEO started at <span className="text-orange-400 font-bold">15</span>, experimenting with a small Blogspot site. Today, I&apos;m a dedicated SEO Specialist delivering <span className="text-orange-400 font-bold">explosive growth</span> for clients globally—from startups to established brands across <span className="text-purple-300 font-semibold">Sri Lanka, United States, Australia, France, UK, and Dubai</span>.
            </p>
          </div>
        </div>

        {/* Enhanced Personal Achievement Stats with brand colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {personalStats.map((stat, index) => (
            <div key={index} className="premium-card p-8 text-center group glow-effect relative overflow-hidden hover:scale-105 transition-all duration-500">
              {/* Growth Badge with brand colors */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                {stat.highlight}
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                {/* Growth Indicator */}
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl animate-pulse">
                    {stat.growthIndicator}
                  </div>
                </div>
                
                <div className="text-5xl lg:text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-gradient bg-gradient-to-r from-orange-400 to-purple-500">
                    {stat.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced REAL Case Studies with brand colors */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="premium-card inline-flex items-center gap-3 px-8 py-4 mb-8 backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-orange-600/20 border border-purple-400/30">
              <span className="text-purple-400 text-xl animate-bounce">📈</span>
              <span className="text-purple-300 font-bold tracking-wider">REAL CLIENT GROWTH STORIES</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-orange-500">Actual Growth Results</span>
              <br />
              <span className="text-white">I&apos;ve Delivered for Real Clients</span>
            </h3>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              These are <span className="text-orange-400 font-semibold">actual screenshots and data</span> from my client campaigns. From content optimization to technical SEO - <span className="text-orange-400 font-semibold">proven explosive growth</span> across different strategies and timeframes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {realCaseStudies.map((study, index) => (
              <div key={index} className={`premium-card p-8 group relative overflow-hidden hover:scale-105 transition-all duration-500`}>
                {/* Growth Badge with brand colors */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20">
                  {study.growthBadge}
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Main Growth Metric with brand colors */}
                  <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-3 mb-4">
                      <div className="text-4xl animate-bounce">
                        {study.trendIcon}
                      </div>
                      <div className="text-6xl lg:text-7xl font-black text-gradient bg-gradient-to-r from-orange-400 to-purple-500">
                        {study.mainMetric}
                      </div>
                      <div className="text-3xl text-orange-400 animate-pulse">
                        ↗️
                      </div>
                    </div>
                    <div className="text-lg font-bold text-orange-400 mb-2">
                      {study.metrics.toUpperCase()}
                    </div>
                    <div className="text-sm text-purple-400 font-semibold">
                      {study.period}
                    </div>
                  </div>
                  
                  {/* Additional Metrics Row with brand colors */}
                  <div className="flex justify-center gap-6 mb-6">
                    {study.impressions && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          {study.impressions}
                        </div>
                        <div className="text-xs text-slate-400">impressions</div>
                      </div>
                    )}
                    {study.userGrowth && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {study.userGrowth}
                        </div>
                        <div className="text-xs text-slate-400">user growth</div>
                      </div>
                    )}
                    {study.eventGrowth && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          {study.eventGrowth}
                        </div>
                        <div className="text-xs text-slate-400">events</div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {study.client}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  {/* Tags with brand colors */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    {study.tags && study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-orange-600/30 text-purple-300 rounded-full border border-purple-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Case Studies Button with brand colors */}
          <div className="text-center">
            <a 
              href="" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:animate-bounce">📚</span>
              <span>View All Case Studies</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Enhanced Expertise Areas with brand colors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              <span className="text-gradient bg-gradient-to-r from-orange-400 to-purple-500">My Growth-Focused Expertise</span> - What You Get
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Mastery in <span className="text-orange-400 font-semibold">competitive intelligence</span> and <span className="text-purple-400 font-semibold">growth analytics</span>. I dissect competitors&apos; strategies through comprehensive analysis, developing bespoke SEO frameworks that position my clients for <span className="text-orange-400 font-semibold">explosive growth</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="premium-card p-6 group hover:scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-600/10 hover:to-purple-600/10">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {area.title}
                </h4>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Personal Value Proposition with Contact CTA */}
        <div className="text-center">
          <div className="premium-card p-12 backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-orange-500/20 border border-gradient-to-r from-purple-400/30 to-orange-400/30 max-w-5xl mx-auto hover:scale-105 transition-all duration-500">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl animate-bounce">🚀</span>
              <h3 className="text-3xl md:text-4xl font-black text-white">Ready for <span className="text-gradient bg-gradient-to-r from-orange-400 to-purple-500">Explosive Growth</span>?</h3>
              <span className="text-5xl animate-bounce delay-300">📈</span>
            </div>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
              As a freelance <span className="text-orange-400 font-bold">Growth-Focused SEO Specialist</span> and Consultant, I&apos;m privileged to support diverse clients worldwide. My mission is to help each business <span className="text-orange-400 font-bold">explode their digital footprint</span> and achieve <span className="text-purple-400 font-bold">significant returns</span> through customized, data-driven growth strategies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-orange-600/20 to-purple-600/20 border border-orange-400/20">
                <span className="text-orange-400 text-2xl flex-shrink-0">💪</span>
                <div>
                  <h4 className="text-white font-bold mb-3 text-lg">Direct Growth Specialist Access</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">No agencies, no junior staff. I personally handle your growth strategy and execution with <span className="text-orange-400 font-semibold">70+ months</span> of dedicated experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-orange-600/20 border border-purple-400/20">
                <span className="text-purple-400 text-2xl flex-shrink-0">🌍</span>
                <div>
                  <h4 className="text-white font-bold mb-3 text-lg">Global Growth Experience</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Proven <span className="text-purple-400 font-semibold">explosive growth</span> across Sri Lanka, US, UK, Australia, France, and Dubai markets with diverse industry expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-orange-600/20 to-purple-600/20 border border-orange-400/20">
                <span className="text-orange-400 text-2xl flex-shrink-0">📈</span>
                <div>
                  <h4 className="text-white font-bold mb-3 text-lg">Proven Growth Methodologies</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">The same strategies that delivered <span className="text-orange-400 font-semibold">973%+ growth</span>, <span className="text-orange-400 font-semibold">2x traffic increases</span>, and <span className="text-purple-400 font-semibold">438%+ user growth</span>.</p>
                </div>
              </div>
            </div>

            {/* NEW: Powerful Contact CTA Section */}
            <div className="border-t border-white/10 pt-12">
              <div className="text-center mb-8">
                <h4 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Let&apos;s Grow Your Business <span className="text-gradient bg-gradient-to-r from-orange-400 to-purple-500">Together!</span>
                </h4>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Ready to join the businesses experiencing <span className="text-orange-400 font-semibold">explosive SEO growth</span>? Let&apos;s discuss your project and create a customized growth strategy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary CTA */}
                <button 
                  onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-400 hover:to-purple-400 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-orange-500/30 hover:scale-110 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="text-3xl group-hover:animate-bounce">🚀</span>
                  <span className="relative z-10">Get My Free SEO Masterplan</span>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">💬</span>
                </button>

                {/* Secondary Contact Options */}
                <div className="flex flex-col gap-3">
                  <a 
                    href="mailto:sathminadimath@gmail.com" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 hover:border-orange-400/30 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-orange-400 group-hover:scale-110 transition-transform duration-300">📧</span>
                    <span className="text-sm font-medium">sathminadimath@gmail.com</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/sathminadd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-600/30 hover:border-purple-400/30 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-purple-400 group-hover:scale-110 transition-transform duration-300">🔗</span>
                    <span className="text-sm font-medium">linkedin.com/in/sathminadd</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 rounded-full">
                  <span className="text-green-400 animate-pulse">✅</span>
                  <span className="text-green-300 font-semibold text-sm">Free Consultation • No Obligations • Instant Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
