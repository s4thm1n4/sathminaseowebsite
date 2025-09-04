'use client'
import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import profilePic from '/public/images/sathmina.jpg'

export const About: React.FC = () => {
  /* ── CORE PRINCIPLES ─────────────────────────────────────── */
  const principles = [
    {
      title: 'Direct-to-Consultant Service',
      description:
        'Work 1-on-1 with me, not an agency layer. Ten years of hands-on SEO applied directly to your site.'
    },
    {
      title: 'Affordable & Flexible',
      description:
        'Month-to-month plans priced for startups and SMEs—scale or pause anytime.'
    },
    {
      title: 'No Lock-Ins',
      description: 'Stay because growth is real, not because paperwork says so.'
    }
  ]

  /* ── 90-DAY ROADMAP ──────────────────────────────────────── */
  const roadmap = [
    {
      badge: 'Month 1',
      phase: 'Foundation & Diagnostics',
      items: [
        'Campaign set-up (tracking, tagging, dashboards)',
        'Competitor analysis & gap charting',
        'Keyword research + rank-tracking install',
        'Full technical SEO audit'
      ]
    },
    {
      badge: 'Month 2',
      phase: 'On-Page Strategy & Quick Wins',
      items: [
        'Content audit (value / cannibalisation)',
        'Draft strategy examples for priority pages',
        'Recommended content updates sent for approval',
        'Technical SEO recommendations implementation',
        'First performance report',
        'Initial link-acquisition campaign'
      ]
    },
    {
      badge: 'Month 3',
      phase: 'Scale & Authority',
      items: [
        'Content briefing for new growth pages',
        'Information-architecture mapping refresh',
        'Web-dev tweaks (CWV, schema, UX fixes)',
        'Meta-data & on-page SEO optimisation',
        'Ongoing link-building outreach',
        'Second performance report'
      ]
    }
  ]

  return (
    <section id="about" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* floating orbs reused from Results */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ────────────── INTRO GRID ────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COPY */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-800/30 border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-300 font-medium">ABOUT ME</span>
            </div>

            {/* NEW headline */}
<h2 className="text-4xl md:text-5xl font-black mb-6">
  Meet the Founder - <span className="text-orange-400">Sathmina&nbsp;<br></br>Dissanayake</span>
</h2>


            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              I built my first Blogspot site in 2015 while still in Grade 8. Ten years, 500 plus
              articles and 100 plus hobby sites later, that experimentation powers client wins—like
              973 % traffic lifts and US$500 K revenue gains.
            </p>

            <p className="text-lg text-slate-300 mb-8">
              It’s an honour to see this results-driven approach trusted by ambitious brands across
              the <span className="text-orange-400 font-semibold">United States, United Kingdom,
              Australia, France</span> and right here at home in
              <span className="text-purple-300 font-semibold"> Sri Lanka</span>.
            </p>

            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Learn More About Sathmina 
            </Button>
          </div>

          {/* RIGHT COLUMN — portrait + principles */}
          <div className="relative">
            {/* portrait */}
           <Image
  src={profilePic}
  alt="Sathmina Dissanayake"
  priority
  className="h-[520px] w-full object-cover object-top rounded-3xl shadow-2xl shadow-orange-500/20"
/>


            {/* principle cards */}
            <div className="space-y-6 mt-10">
              {principles.map(({ title, description }) => (
                <Card key={title} className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* ────────────── 90-DAY PLAN ────────────── */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Your first <span className="text-gradient">90 days</span> with me
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A transparent snapshot of how I blend technical, on-page, off-page and emerging
              tactics—without giving away the secret sauce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map(({ badge, phase, items }) => (
              <Card
                key={badge}
                className="p-8 text-left group hover:scale-105 transition-all duration-300"
              >
                <div className="text-orange-500 text-xl font-extrabold mb-3">{badge}</div>
                <h4 className="text-lg font-bold text-white mb-4">{phase}</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  {items.map(task => (
                    <li key={task} className="flex gap-2">
                      <span>•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
