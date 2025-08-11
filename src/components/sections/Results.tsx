import React from 'react'
import { Card } from '@/components/ui/Card'

export const Results: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Industry awards won', icon: '🏆' },
    { number: '100+', label: 'Staff globally', icon: '👥' },
    { number: '200+', label: 'Amazing Google reviews', icon: '⭐' },
    { number: '950+', label: 'SEO campaigns completed', icon: '🚀' },
    { number: '8', label: 'Years in operation', icon: '📅' },
    { number: '300%', label: 'Average client ROI', icon: '📈' }
  ]
  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      traffic: '60%',
      revenue: '32%',
      description: 'Our journey with this client has been truly amazing, achieving outcomes well beyond expectations.',
      metrics: 'increase in organic traffic'
    },
    {
      client: 'Local Tourism Company',
      traffic: '302%',
      revenue: '145%',
      description: 'A strong local reputation, but needed serious online optimization for digital growth.',
      metrics: 'total clicks increase (YoY)'
    },
    {
      client: 'B2B Technology Firm',
      traffic: '79%',
      revenue: '156%',
      description: 'Specialized B2B SEO strategy that transformed their online presence and lead generation.',
      metrics: 'total users increase'
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SathminaSEO <span className="text-gradient">by the numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Client Results</span> for Sri Lanka's biggest brands
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            By rewriting the SEO playbook, we're working with brands to surpass their goals 
            with impactful, sustainable organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{study.traffic}</div>
                <div className="text-slate-300 text-sm mb-4">{study.metrics}</div>
                <div className="text-2xl font-bold text-white mb-2">{study.revenue}</div>
                <div className="text-slate-300 text-sm">revenue increase</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{study.client}</h3>
              <p className="text-slate-300 text-sm mb-4">{study.description}</p>
              <button className="text-orange-500 hover:text-orange-400 font-medium transition-colors text-sm">
                View Case Study →
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-300 mb-8">Trusted by Sri Lanka's leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="w-32 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">Logo 1</div>
            <div className="w-32 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">Logo 2</div>
            <div className="w-32 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">Logo 3</div>
            <div className="w-32 h-16 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">Logo 4</div>
          </div>
        </div>
      </div>
    </section>
  )
}
