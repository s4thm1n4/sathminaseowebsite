'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Foundational SEO', href: '#', icon: '🏗️' },
    { name: 'On-Page & Content SEO', href: '#', icon: '✍️' },
    { name: 'Technical SEO', href: '#', icon: '⚙️' },
    { name: 'Off-Page SEO & Authority', href: '#', icon: '🔗' },
    { name: 'SEO Consultations', href: '#', icon: '💡' }
  ]

  const specialized = [
    { name: 'Local SEO Sri Lanka', href: '#', icon: '📍' },
    { name: 'E-commerce SEO', href: '#', icon: '🛒' },
    { name: 'Shopify SEO', href: '#', icon: '🛍️' },
    { name: 'International SEO', href: '#', icon: '🌍' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-blur shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with glow effect */}
          <div className="flex-shrink-0 group">
            <div className="glow-effect">
              <div className="text-3xl font-bold">
                <span className="text-white">Sathimina</span>
                <span className="text-gradient">SEO</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">
                SEO Services
              </button>
              <div className="absolute top-full left-0 mt-4 w-80 premium-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Our SEO Services</h3>
                  {services.map((service, index) => (
                    <a key={index} href={service.href} className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-200 group/item">
                      <span className="text-xl">{service.icon}</span>
                      <span className="group-hover/item:translate-x-1 transition-transform duration-200">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">
                Specialized SEO
              </button>
              <div className="absolute top-full left-0 mt-4 w-80 premium-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Specialized Services</h3>
                  {specialized.map((service, index) => (
                    <a key={index} href={service.href} className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-200 group/item">
                      <span className="text-xl">{service.icon}</span>
                      <span className="group-hover/item:translate-x-1 transition-transform duration-200">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#case-studies" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">Case Studies</a>
            <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">About</a>
            <a href="#contact" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Free SEO Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden premium-card mt-4 mb-4">
            <div className="p-6 space-y-4">
              <a href="#services" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">SEO Services</a>
              <a href="#specialized" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">Specialized SEO</a>
              <a href="#case-studies" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">Case Studies</a>
              <a href="#about" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">About</a>
              <a href="#contact" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">Contact</a>
              <div className="pt-4 border-t border-white/10">
                <Button className="w-full">Free SEO Audit</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}