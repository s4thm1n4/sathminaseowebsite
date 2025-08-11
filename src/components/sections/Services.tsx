import React from 'react'
import { Card } from '@/components/ui/Card'

export const Services: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Technical SEO',
      description: 'Is your website hiding bad SEO habits that are holding your business back? Let\'s find the bottlenecks and create a strategy to get your SEO back on track.',
      features: ['Site speed optimization', 'Core Web Vitals', 'Schema markup', 'Mobile optimization']
    },
    {
      icon: '🛒',
      title: 'eCommerce SEO',
      description: 'Competition for shopping-related keywords is rife, so it pays to have specialists in your back pocket. Our eCommerce SEO specialists have mastered what works.',
      features: ['Product optimization', 'Category page SEO', 'Shopping schema', 'Conversion optimization']
    },
    {
      icon: '📍',
      title: 'Local SEO Sri Lanka',
      description: 'Be the leader of the local pack with our targeted local SEO strategies that put you on the map and get the phone ringing off the hook.',
      features: ['Google Business Profile', 'Local citations', 'Review management', 'Location-based keywords']
    },
    {
      icon: '🏢',
      title: 'Enterprise SEO',
      description: 'As your business matures, so should your SEO strategy. Enterprise websites have complex content hierarchies, which means masterful tools and SEO strategy.',
      features: ['Large-scale optimization', 'Technical audits', 'Content strategy', 'Advanced analytics']
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Drive targeted traffic to your website, establish trust and build authority in your industry with expertly written SEO content.',
      features: ['SEO copywriting', 'Content strategy', 'Blog optimization', 'Authority building']
    },
    {
      icon: '🔗',
      title: 'Link Building & PR',
      description: 'Boost your Google rankings and attract visitors who are most likely to convert with our link-building campaigns and digital PR strategies.',
      features: ['High-authority links', 'Digital PR campaigns', 'Brand mentions', 'Relationship building']
    },
    {
      icon: '🤖',
      title: 'AI SEO',
      description: 'Large language models like ChatGPT and Perplexity are shaking up search. The future of SEO with AI belongs to brands that have the SEO smarts behind them.',
      features: ['AI content optimization', 'Answer Engine Optimization', 'AI tool integration', 'Future-proof strategies']
    },
    {
      icon: '🌍',
      title: 'International SEO',
      description: 'If you want customers from around the world, you need international SEO strategies that will find your audience no matter where they are.',
      features: ['Hreflang implementation', 'Multi-language SEO', 'Global keyword research', 'International targeting']
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-300 font-medium">MASTERING WHAT MOVES THE NEEDLE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">SEO Superpowers</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            For us, SEO isn't a side hustle, it's our bread and butter. This means we've mastered what 
            matters when it comes to high ROI SEO that drives sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 h-full">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-slate-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
            See All Services →
          </button>
        </div>
      </div>
    </section>
  )
}