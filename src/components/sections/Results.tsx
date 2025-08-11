import React from 'react'

export const Results: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Industry awards won', icon: '🏆', gradient: 'from-yellow-600/30 to-orange-600/30' },
    { number: '100+', label: 'Staff globally', icon: '👥', gradient: 'from-blue-600/30 to-indigo-600/30' },
    { number: '200+', label: 'Amazing Google reviews', icon: '⭐', gradient: 'from-orange-600/30 to-red-600/30' },
    { number: '950+', label: 'SEO campaigns completed', icon: '🚀', gradient: 'from-purple-600/30 to-pink-600/30' },
    { number: '8', label: 'Years in operation', icon: '📅', gradient: 'from-green-600/30 to-teal-600/30' },
    { number: '300%', label: 'Average client ROI', icon: '📈', gradient: 'from-emerald-600/30 to-cyan-600/30' }
  ]

  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      traffic: '60%',
      revenue: '32%',
      description: 'Our journey with this client has been truly amazing, achieving outcomes well beyond expectations.',
      metrics: 'increase in organic traffic',
      gradient: 'from-pink-600/20 to-purple-600/20'
    },
    {
      client: 'Local Tourism Company',
      traffic: '302%',
      revenue: '145%',
      description: 'A strong local reputation, but needed serious online optimization for digital growth.',
      metrics: 'total clicks increase (YoY)',
      gradient: 'from-blue-600/20 to-cyan-600/20'
    },
    {
      client: 'B2B Technology Firm',
      traffic: '79%',
      revenue: '156%',
      description: 'Specialized B2B SEO strategy that transformed their online presence and lead generation.',
      metrics: 'total users increase',
      gradient: 'from-orange-600/20 to-red-600/20'
    }
  ]

  return (
    <section id="case-studies" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            SathminaSEO <span className="text-gradient">by the numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="premium-card text-center p-8 group glow-effect relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-black text-gradient mb-3">{stat.number}</div>
                  <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient">Client Results</span> for Sri Lanka's biggest brands
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            By rewriting the SEO playbook, we're working with brands to surpass their goals 
            with impactful, sustainable organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="premium-card p-10 text-center group glow-effect relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="mb-8 space-y-6">
                  <div>
                    <div className="text-5xl md:text-6xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">{study.traffic}</div>
                    <div className="text-slate-300 text-sm mb-6 font-medium">{study.metrics}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">{study.revenue}</div>
                    <div className="text-slate-300 text-sm font-medium">revenue increase</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.description}</p>
                  <button className="premium-card px-6 py-3 text-orange-400 hover:text-orange-300 font-semibold transition-all duration-300 hover:scale-105 text-sm">
                    <span className="flex items-center gap-2">
                      View Case Study 
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-slate-300 mb-12 text-lg">Trusted by Sri Lanka's leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="premium-card w-36 h-20 flex items-center justify-center text-slate-400 hover:text-slate-300 transition-colors duration-300">
                <span className="font-semibold">Brand {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}