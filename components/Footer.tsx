import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/images/logo-white.png"
            alt="Factura Facts"
            width={140}
            height={35}
            className="h-9 w-auto mb-8"
          />

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mb-8"></div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <a
              href="https://wa.me/526122139979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <a
              href="mailto:daniel@facturafacts.com"
              className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              daniel@facturafacts.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <a
              href="tel:+526122139979"
              className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +52 612 213 9979
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mb-8"></div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Factura Facts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}