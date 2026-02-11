import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function BookingCancel() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight mb-6">
            Payment Cancelled
          </h1>
          
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8"></div>
          
          <p className="text-lg text-brand-text-light mb-8">
            Your payment was not processed. No charges have been made to your card.
          </p>

          <div className="bg-white rounded-2xl p-8 border border-brand-hairline shadow-card mb-8">
            <h2 className="text-xl font-semibold text-brand-text mb-4">
              What would you like to do?
            </h2>
            
            <div className="space-y-4">
              <Link
                href="/booking"
                className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold-hover transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Try Again
              </Link>
              
              <a
                href="https://wa.me/526122139979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-brand-text border border-brand-hairline px-8 py-4 rounded-xl font-semibold hover:bg-brand-cream transition-all duration-200"
              >
                <HelpCircle className="w-5 h-5" />
                Contact Us for Help
              </a>
            </div>
          </div>

          <div className="text-brand-text-light text-sm space-y-2">
            <p>
              <strong>Common reasons for cancellation:</strong>
            </p>
            <ul className="space-y-1">
              <li>• Payment method declined</li>
              <li>• Session expired</li>
              <li>• Changed your mind</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-hairline">
            <Link
              href="/"
              className="text-brand-dark font-medium hover:text-brand-gold transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}