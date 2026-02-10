'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-brand-700">Factura Facts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-brand-600"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="bg-brand-600 text-white px-6 py-2 rounded-md font-medium hover:bg-brand-700 transition-colors"
            >
              Book here!
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-600 font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/526122139979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-brand-600 font-medium px-2 py-2 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="bg-brand-600 text-white px-6 py-2 rounded-md font-medium hover:bg-brand-700 transition-colors mx-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book here!
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}