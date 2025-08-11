'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

export const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: 'LKR 100K-200K',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll contact you within 24 hours for your free SEO audit.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="audit-form" className="py-24 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Get Your <span className="text-gradient">Free SEO Masterplan</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            100% value, 0% obligation. We&apos;ll analyze your website and provide actionable insights 
            to improve your search rankings and organic traffic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="premium-card p-12 glow-effect">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white/90 mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white/90 mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white/90 mb-3">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white/90 mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white/90 mb-3">Website URL *</label>
                <input
                  type="url"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white/90 mb-3">Monthly SEO Budget *</label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-4 premium-input text-white focus:scale-105 transition-all duration-300"
                >
                  <option value="LKR 50K-100K">LKR 50,000 - 100,000</option>
                  <option value="LKR 100K-200K">LKR 100,000 - 200,000</option>
                  <option value="LKR 200K-500K">LKR 200,000 - 500,000</option>
                  <option value="LKR 500K+">LKR 500,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white/90 mb-3">Tell us about your goals</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 premium-input text-white placeholder-slate-400 focus:scale-105 transition-all duration-300"
                  placeholder="What are your main SEO challenges and goals? The more details you provide, the better we can tailor your free audit."
                />
              </div>

              <div className="text-center pt-4">
                <Button type="submit" size="lg" className="w-full lg:w-auto px-12">
                  <span className="flex items-center gap-3">
                    🚀 Get My Free SEO Masterplan
                  </span>
                </Button>
              </div>

              <p className="text-sm text-slate-400 text-center pt-4 leading-relaxed">
                We&apos;ll analyze your website and send you a detailed report within 24 hours.<br/>
                <strong className="text-white">No spam, no sales pitches, just valuable insights.</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}