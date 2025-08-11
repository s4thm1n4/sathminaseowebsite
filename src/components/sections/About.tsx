import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const About: React.FC = () => {
  const principles = [
    {
      icon: '👥',
      title: 'No account managers, only SEO Specialists',
      description: 'We don\'t believe in middlemen slowing things down or losing sight of your goals. You work directly with SEO experts who understand your business inside and out.'
    },
    {
      icon: '🎯',
      title: 'Channel experts - we are specialised',
      description: 'No fads, gimmicks or generalists here - just damn good SEOs. We dig deep into the nuances of your business to craft an SEO strategy unique to your goals.'
    },
    {
      icon: '🔓',
      title: 'No long-term lock-in contracts',
      description: 'SathminaSEO keeps business responsible and ethical. We don\'t hold clients hostage with lock-in contracts. We want you to want to stick with us because we deliver results.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-300 font-medium">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet our <span className="text-gradient">SEO master craftsmen</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              SathminaSEO are specialist SEO masters and trusted growth partner for Sri Lanka's 
              best-loved and fastest-growing brands. Our passionate team is ethical, transparent, 
              and accountable in everything we do.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Once you partner with SathminaSEO, our team becomes an extension of your team - 
              it will be like having your own in-house SEO Specialist.
            </p>
            <Button size="lg">Meet the Team</Button>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{principle.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-slate-300 text-sm">{principle.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              We drive growth through <span className="text-gradient">'multi-channel strategy'</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Ready to soar with SathminaSEO? Our team will be with you every step of the way to create 
              the perfect SEO strategy for your business. This is what your first 3 months might look like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-orange-500 text-xl font-bold mb-4">Month 1</div>
              <h4 className="text-lg font-bold text-white mb-4">Campaign Set Up</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Campaign Set Up</li>
                <li>• Competitor Analysis</li>
                <li>• Keyword Research & Tracking</li>
                <li>• Technical SEO Audit</li>
              </ul>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-orange-500 text-xl font-bold mb-4">Month 2</div>
              <h4 className="text-lg font-bold text-white mb-4">Strategy & Implementation</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Content Audit</li>
                <li>• Strategy Examples</li>
                <li>• Content Updates</li>
                <li>• Technical SEO Fixes</li>
                <li>• 1st Report</li>
              </ul>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-orange-500 text-xl font-bold mb-4">Month 3</div>
              <h4 className="text-lg font-bold text-white mb-4">Optimization & Growth</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Content Briefing</li>
                <li>• IA Mapping</li>
                <li>• Link Building</li>
                <li>• Meta data & On-page SEO</li>
                <li>• 2nd Report</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}