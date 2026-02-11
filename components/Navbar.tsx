'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/resources', label: 'Resources' },
    { href: '/booking', label: 'Book Consultation' },
  ]

  return (
    <nav className="bg-brand-dark sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Factura Facts"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-white/20 mx-4"></div>
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="ml-4 bg-brand-gold text-brand-dark px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-gold-hover transition-all duration-200 shadow-soft"
            >
              Book here
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 my-3"></div>
              <a
                href="https://wa.me/526122139979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white font-medium px-3 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="bg-brand-gold text-brand-dark px-5 py-3 rounded-xl font-semibold hover:bg-brand-gold-hover transition-colors mx-3 text-center shadow-soft"
                onClick={() => setIsOpen(false)}
              >
                Book here
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}