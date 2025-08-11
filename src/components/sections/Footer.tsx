
import React from 'react'

export const Footer: React.FC = () => {
  const seoServices = [
    'Technical SEO',
    'eCommerce SEO',
    'Local SEO',
    'Enterprise SEO',
    'Content Marketing',
    'Small Business SEO',
    'Link Building',
    'Digital PR',
    'AI SEO',
    'International SEO'
  ]

  const seoLocations = [
    'SEO Colombo',
    'SEO Kandy',
    'SEO Galle',
    'SEO Negombo',
    'SEO Jaffna',
    'SEO Batticaloa',
    'SEO Trincomalee',
    'SEO Anuradhapura',
    'SEO Polonnaruwa'
  ]

  return (
    <footer className="bg-slate-800 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Sathimina</span>
              <span className="text-gradient">SEO</span>
            </div>
            <p className="text-slate-300 mb-6 text-sm">
              SathminaSEO is a specialized agency dedicated to search engine optimization for Sri Lankan businesses.
            </p>
            <div className="text-slate-300 text-sm">
              <p className="mb-2">📍 Colombo, Sri Lanka</p>
              <p className="mb-2">📞 +94 XX XXX XXXX</p>
              <p>✉️ hello@sathminaseo.lk</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-300 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Partners</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">SEO Awards</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">SEO Academy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-slate-300 hover:text-orange-500 transition-colors">SEO Services</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">AI SEO</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Content</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Digital PR</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="text-slate-300 hover:text-orange-500 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 text-sm mb-4">
              Get the latest SEO insights and industry updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm focus:border-orange-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* SEO Services Grid */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="text-white font-semibold mb-6">Our SEO Superpowers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
            {seoServices.map((service, index) => (
              <a key={index} href="#" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">
                {service}
              </a>
            ))}
          </div>
          
          <h3 className="text-white font-semibold mb-6">SEO Services Across Sri Lanka</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {seoLocations.map((location, index) => (
              <a key={index} href="#" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">
                {location}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 SathminaSEO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
