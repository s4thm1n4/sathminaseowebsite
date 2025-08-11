'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is SEO and why is it important for my business?',
      answer: 'SEO (Search Engine Optimization) is the practice of improving your website to increase its visibility in search engines like Google. It\'s important because 93% of online experiences begin with a search engine, and businesses that appear on the first page of search results receive significantly more traffic and potential customers.'
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen within 1-3 months, significant results typically take 4-6 months. The timeline depends on factors like your website\'s current state, competition level, and the keywords you\'re targeting. We provide monthly reports to track progress.'
    },
    {
      question: 'Can you guarantee my website will achieve a number-one ranking on Google?',
      answer: 'No legitimate SEO agency can guarantee #1 rankings, as Google\'s algorithm considers hundreds of factors and changes frequently. However, we can guarantee improved visibility, increased organic traffic, and better search rankings based on our proven methodologies and track record.'
    },
    {
      question: 'Do I need to change my website\'s content for SEO?',
      answer: 'Often, yes. Content optimization is crucial for SEO success. We\'ll audit your existing content and recommend improvements like adding relevant keywords, improving readability, and ensuring content aligns with user intent. We can help create new content or optimize existing pages.'
    },
    {
      question: 'How often will we communicate about the progress of our SEO campaign?',
      answer: 'We believe in transparent communication. You\'ll receive detailed monthly reports showing your progress, rankings, traffic growth, and upcoming strategies. We also schedule quarterly strategy calls and are available for questions anytime via email or phone.'
    },
    {
      question: 'What is the contract length for your SEO service?',
      answer: 'We offer flexible month-to-month agreements because we believe in earning your business through results, not lock-in contracts. While SEO requires consistent effort over time, you have the freedom to adjust or cancel services with 30 days notice.'
    },
    {
      question: 'I have a brand new website, can you help?',
      answer: 'Absolutely! New websites are perfect for implementing SEO best practices from the start. We\'ll set up proper site structure, optimize for target keywords, implement technical SEO elements, and create a content strategy that positions you for long-term success.'
    },
    {
      question: 'What\'s the starting cost for SEO with you?',
      answer: 'Our SEO services start from LKR 50,000 per month, depending on your business size, competition level, and goals. We offer customized packages including Technical SEO, Content Optimization, Link Building, and monthly reporting. Contact us for a personalized quote based on your specific needs.'
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-300 font-medium">SEO FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your SEO <span className="text-gradient">questions answered</span>
            </h2>
            <p className="text-xl text-slate-300">
              More questions? Our friendly team would be happy to help - simply contact the team today.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-0 overflow-hidden">
                <button
                  className="w-full text-left p-6 hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <div className={`text-orange-500 text-2xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
