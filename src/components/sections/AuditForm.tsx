'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SEOAuditForm } from '@/types'

export const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState<SEOAuditForm>({
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
    // TODO: Integrate with CRM
    alert('Thank you! We\'ll contact you within 24 hours for your free SEO audit.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="audit-form" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-gradient">Free SEO Audit</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            100% value, 0% obligation. We'll analyze your website and provide actionable insights 
            to improve your search rankings and organic traffic.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Website URL *</label>
                <input
                  type="url"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Monthly SEO Budget *</label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                >
                  <option value="LKR 50K-100K">LKR 50,000 - 100,000</option>
                  <option value="LKR 100K-200K">LKR 100,000 - 200,000</option>
                  <option value="LKR 200K-500K">LKR 200,000 - 500,000</option>
                  <option value="LKR 500K+">LKR 500,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your goals</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="What are your main SEO challenges and goals?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Get My Free SEO Audit
              </Button>

              <p className="text-sm text-slate-400 text-center">
                We'll analyze your website and send you a detailed report within 24 hours. 
                No spam, no sales pitches.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
