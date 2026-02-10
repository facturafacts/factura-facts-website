import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/images/logo-white.png"
            alt="Factura Facts"
            width={160}
            height={40}
            className="h-10 w-auto mb-6"
          />

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:daniel@facturafacts.com"
              className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              daniel@facturafacts.com
            </a>
            <a
              href="tel:+526122139979"
              className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              +52 612 213 9979
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Factura Facts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}