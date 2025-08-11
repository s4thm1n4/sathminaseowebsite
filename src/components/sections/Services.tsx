import React from 'react'

export const Services: React.FC = () => {
  const services = [
    {
      icon: '⚙️',
      title: 'Technical SEO',
      description: 'Is your website hiding bad SEO habits that are holding your business back? Let\'s find the bottlenecks and create a strategy to get your SEO back on track.',
      features: ['Site speed optimization', 'Core Web Vitals', 'Schema markup', 'Mobile optimization'],
      gradient: 'from-blue-600/20 to-cyan-600/20'
    },
    {
      icon: '🛒',
      title: 'eCommerce SEO',
      description: 'Competition for shopping-related keywords is rife, so it pays to have specialists in your back pocket. Our eCommerce SEO specialists have mastered what works.',
      features: ['Product optimization', 'Category page SEO', 'Shopping schema', 'Conversion optimization'],
      gradient: 'from-green-600/20 to-emerald-600/20'
    },
    {
      icon: '📍',
      title: 'Local SEO Sri Lanka',
      description: 'Be the leader of the local pack with our targeted local SEO strategies that put you on the map and get the phone ringing off the hook.',
      features: ['Google Business Profile', 'Local citations', 'Review management', 'Location-based keywords'],
      gradient: 'from-purple-600/20 to-violet-600/20'
    },
    {
      icon: '🏢',
      title: 'Enterprise SEO',
      description: 'As your business matures, so should your SEO strategy. Enterprise websites have complex content hierarchies, which means masterful tools and SEO strategy.',
      features: ['Large-scale optimization', 'Technical audits', 'Content strategy', 'Advanced analytics'],
      gradient: 'from-orange-600/20 to-red-600/20'
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Drive targeted traffic to your website, establish trust and build authority in your industry with expertly written SEO content.',
      features: ['SEO copywriting', 'Content strategy', 'Blog optimization', 'Authority building'],
      gradient: 'from-yellow-600/20 to-orange-600/20'
    },
    {
      icon: '🔗',
      title: 'Link Building & PR',
      description: 'Boost your Google rankings and attract visitors who are most likely to convert with our link-building campaigns and digital PR strategies.',
      features: ['High-authority links', 'Digital PR campaigns', 'Brand mentions', 'Relationship building'],
      gradient: 'from-pink-600/20 to-rose-600/20'
    },
    {
      icon: '🤖',
      title: 'AI SEO',
      description: 'Large language models like ChatGPT and Perplexity are shaking up search. The future of SEO with AI belongs to brands that have the SEO smarts behind them.',
      features: ['AI content optimization', 'Answer Engine Optimization', 'AI tool integration', 'Future-proof strategies'],
      gradient: 'from-indigo-600/20 to-purple-600/20'
    },
    {
      icon: '🌍',
      title: 'International SEO',
      description: 'If you want customers from around the world, you need international SEO strategies that will find your audience no matter where they are.',
      features: ['Hreflang implementation', 'Multi-language SEO', 'Global keyword research', 'International targeting'],
      gradient: 'from-teal-600/20 to-cyan-600/20'
    }
  ]

  return (
    <section id="services" className="py-24 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="premium-card inline-flex items-center gap-3 px-8 py-4 mb-8">
            <span className="text-purple-300 font-semibold tracking-wide">MASTERING WHAT MOVES THE NEEDLE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Our <span className="text-gradient">SEO Superpowers</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            For us, SEO isn't a side hustle, it's our bread and butter. This means we've mastered what 
            matters when it comes to high ROI SEO that drives sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-8 h-full group glow-effect relative overflow-hidden">
              {/* Service gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="premium-card px-8 py-4 text-orange-400 hover:text-orange-300 font-semibold transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              See All Services 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}