'use client'

import React from 'react'

export const AuditForm: React.FC = () => {
  return (
    <section id="audit-form" className="py-24 section-gradient relative overflow-hidden">
      {/* background decoration (same as before) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Get Your <span className="text-gradient">Free SEO Masterplan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            100% value, 0% obligation. We’ll analyze your website and provide actionable insights
            to improve your search rankings and organic traffic.
          </p>
        </div>

        {/* Google Forms embed */}
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSewFhzmvovprvi82L4RBsBP4YHY9A2We627y-_M33ldqImKSQ/viewform?embedded=true"
            width="300"
            height="1972"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full max-w-4xl h-[1972px]"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  )
}
