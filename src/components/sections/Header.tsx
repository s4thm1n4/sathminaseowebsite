'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const services = [
    { name: 'Technical SEO Sri Lanka', href: '#', icon: '⚙️' },
    { name: 'On-Page SEO Services', href: '#', icon: '✍️' },
    { name: 'Local SEO Sri Lanka', href: '#', icon: '📍' },
    { name: 'E-commerce SEO', href: '#', icon: '🛒' },
    { name: 'SEO Consultations', href: '#', icon: '💡' }
  ]

  const specialized = [
    { name: 'Colombo SEO Services', href: '#', icon: '🏙️' },
    { name: 'WordPress SEO', href: '#', icon: '🔧' },
    { name: 'Google Analytics Setup', href: '#', icon: '📊' },
    { name: 'International SEO', href: '#', icon: '🌍' }
  ]

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'top-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
        : 'top-12 bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Glow Effect */}
          <div className="flex-shrink-0 group">
            <div className="glow-effect">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-white">Sathmina</span>
                <span className="text-gradient">SEO</span>
              </div>
              <div className="text-xs text-orange-400 font-medium mt-1">
                ⭐⭐⭐⭐⭐ 5-Star Reviewed
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                SEO Services Sri Lanka
              </button>
              <div 
                className={`absolute top-full left-0 mt-4 w-80 premium-card transition-all duration-300 ${
                  activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">SEO Services</h3>
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
              <button 
                className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
                onMouseEnter={() => setActiveDropdown('specialized')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Specialized SEO
              </button>
              <div 
                className={`absolute top-full left-0 mt-4 w-80 premium-card transition-all duration-300 ${
                  activeDropdown === 'specialized' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setActiveDropdown('specialized')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Specialized SEO</h3>
                  {specialized.map((service, index) => (
                    <a key={index} href={service.href} className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-200 group/item">
                      <span className="text-xl">{service.icon}</span>
                      <span className="group-hover/item:translate-x-1 transition-transform duration-200">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#case-studies" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">Results</a>
            <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">About</a>
            <a href="#contact" className="text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5">Contact</a>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
              className="flex items-center gap-2"
            >
              <span>💬</span>
              Contact Me
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
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex justify-between items-center w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <span>SEO Services Sri Lanka</span>
                  <span className={`transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {services.map((service, index) => (
                      <a key={index} href={service.href} className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-orange-400 rounded-lg transition-colors text-sm">
                        <span>{service.icon}</span>
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Specialized Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-specialized')}
                  className="flex justify-between items-center w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <span>Specialized SEO</span>
                  <span className={`transition-transform duration-300 ${activeDropdown === 'mobile-specialized' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === 'mobile-specialized' && (
                  <div className="mt-2 pl-4 space-y-2">
                    {specialized.map((service, index) => (
                      <a key={index} href={service.href} className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-orange-400 rounded-lg transition-colors text-sm">
                        <span>{service.icon}</span>
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#case-studies" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">Results</a>
              <a href="#about" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">About</a>
              <a href="#contact" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all">Contact</a>
              
              <div className="pt-4 border-t border-white/10">
                <Button 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => window.open('https://wa.me/+94725221722', '_blank')}
                >
                  <span>💬</span>
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}