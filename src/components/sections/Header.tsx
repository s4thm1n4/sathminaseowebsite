'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const services = [
    { name: 'Foundational SEO', href: '#' },
    { name: 'On-Page & Content SEO', href: '#' },
    { name: 'Technical SEO', href: '#' },
    { name: 'Off-Page SEO & Authority', href: '#' },
    { name: 'SEO Consultations (Hourly)', href: '#' }
  ]

  const specialized = [
    { name: 'Local SEO Sri Lanka', href: '#' },
    { name: 'E-commerce SEO', href: '#' },
    { name: 'Shopify SEO', href: '#' },
    { name: 'International SEO', href: '#' }
  ]

  const industries = [
    { name: 'SEO for Tourism & Hotels', href: '#' },
    { name: 'SEO for E-commerce & Retail', href: '#' },
    { name: 'SEO for Real Estate', href: '#' },
    { name: 'SEO for B2B & Technology', href: '#' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-white">Sathimina</span>
              <span className="text-gradient">SEO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-orange-500 font-medium transition-colors">
                SEO Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  {services.map((service, index) => (
                    <a key={index} href={service.href} className="block px-3 py-2 text-slate-300 hover:text-orange-500 hover:bg-white/5 rounded transition-colors">
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-white hover:text-orange-500 font-medium transition-colors">
                Specialized SEO
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  {specialized.map((service, index) => (
                    <a key={index} href={service.href} className="block px-3 py-2 text-slate-300 hover:text-orange-500 hover:bg-white/5 rounded transition-colors">
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-white hover:text-orange-500 font-medium transition-colors">
                Industries
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  {industries.map((service, index) => (
                    <a key={index} href={service.href} className="block px-3 py-2 text-slate-300 hover:text-orange-500 hover:bg-white/5 rounded transition-colors">
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#case-studies" className="text-white hover:text-orange-500 font-medium transition-colors">Case Studies</a>
            <a href="#about" className="text-white hover:text-orange-500 font-medium transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-orange-500 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Free SEO Masterplan
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-white hover:text-orange-500">SEO Services</a>
              <a href="#specialized" className="block px-3 py-2 text-white hover:text-orange-500">Specialized SEO</a>
              <a href="#industries" className="block px-3 py-2 text-white hover:text-orange-500">Industries</a>
              <a href="#case-studies" className="block px-3 py-2 text-white hover:text-orange-500">Case Studies</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-orange-500">About</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-orange-500">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full">Free SEO Masterplan</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
