import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BookingSuccess() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight mb-6">
            Payment Successful!
          </h1>
          
          <div className="w-16 h-px bg-brand-gold mx-auto mb-8"></div>
          
          <p className="text-lg text-brand-text-light mb-8">
            Thank you for your payment. Your consultation fee of <strong className="text-brand-text">$150 USD</strong> has been received.
          </p>

          <div className="bg-white rounded-2xl p-8 border border-brand-hairline shadow-card mb-8">
            <h2 className="text-xl font-semibold text-brand-text mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-brand-gold" />
              Next Step: Schedule Your Consultation
            </h2>
            
            <p className="text-brand-text-light mb-6">
              Now it's time to book your 1-hour consultation. Click the button below to select your preferred date and time.
            </p>

            {/* Calendly Embed */}
            <div className="bg-brand-cream rounded-xl p-6 mb-6">
              <p className="text-sm text-brand-text-muted mb-4">
                Calendly scheduling widget will appear here after you set up your account.
              </p>
              <div className="text-left text-sm text-brand-text-light space-y-2">
                <p><strong>To set up Calendly:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Go to calendly.com and create a free account</li>
                  <li>Set up a 60-minute event type</li>
                  <li>Connect your Google Calendar</li>
                  <li>Set your availability (you control this)</li>
                  <li>Copy the embed code and paste it here</li>
                </ol>
              </div>
            </div>

            {/* Temporary CTA while Calendly is being set up */}
            <a
              href="https://calendly.com" // Replace with your Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold-hover transition-all duration-200"
            >
              Schedule Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-4 text-brand-text-light text-sm">
            <p>
              <strong>What happens next?</strong>
            </p>
            <ul className="space-y-2">
              <li>• You'll receive a confirmation email with your appointment details</li>
              <li>• We'll review your intake form before the consultation</li>
              <li>• You'll get a reminder 24 hours before your appointment</li>
              <li>• After the consultation, we'll send you a summary email</li>
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