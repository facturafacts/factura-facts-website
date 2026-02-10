import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-brand-700 mb-6">
            Factura Facts
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:daniel@facturafacts.com"
              className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              daniel@facturafacts.com
            </a>
            <a
              href="tel:+526122139979"
              className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +52 612 213 9979
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Factura Facts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}