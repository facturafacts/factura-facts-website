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
  ]

  return (
    <nav className="bg-brand-dark sticky top-0 z-50">
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-brand-gold font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-gold"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Link
              href="/#contact"
              className="bg-brand-gold text-brand-dark px-6 py-2 rounded font-medium hover:bg-brand-gold-hover transition-colors"
            >
              Book here!
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-brand-dark">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-brand-gold font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/526122139979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-gold font-medium px-2 py-2 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="bg-brand-gold text-brand-dark px-6 py-2 rounded font-medium hover:bg-brand-gold-hover transition-colors mx-2 text-center"
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