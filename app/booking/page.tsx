import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Calendar, Clock, CheckCircle, CreditCard } from 'lucide-react'

export default function Booking() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Book a Consultation
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Schedule your personalized tax consultation with our experts
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-brand-cream border-b border-brand-hairline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-text mb-2">1. Complete Form</h3>
              <p className="text-brand-text-light text-sm">Tell us about your tax situation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-text mb-2">2. Secure Payment</h3>
              <p className="text-brand-text-light text-sm">Pay consultation fee via Stripe</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold text-brand-text mb-2">3. Schedule</h3>
              <p className="text-brand-text-light text-sm">Book your 1-hour consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-brand-text tracking-tight mb-4">
              Consultation Intake Form
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
            <p className="text-brand-text-light">
              Help us prepare for your consultation by sharing some details about your situation.
            </p>
          </div>

          <div className="bg-brand-cream rounded-2xl p-8 border border-brand-hairline shadow-card">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Calendly Section (Hidden initially, shown after payment) */}
      <section className="py-24 lg:py-32 bg-brand-cream border-t border-brand-hairline" id="schedule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-brand-text tracking-tight mb-4">
              Schedule Your Consultation
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
            <p className="text-brand-text-light">
              After completing payment, you'll be able to select your preferred date and time.
            </p>
          </div>

          {/* Calendly Embed Container */}
          <div className="bg-white rounded-2xl p-8 border border-brand-hairline shadow-card">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-text mb-2">Ready to Schedule?</h3>
              <p className="text-brand-text-light mb-6">
                Complete the intake form and payment above to unlock scheduling.
              </p>
              <div className="p-6 bg-brand-cream rounded-xl border border-brand-hairline">
                <p className="text-sm text-brand-text-muted">
                  <strong>Next Steps:</strong><br />
                  1. Fill out the consultation form<br />
                  2. Complete secure payment ($150 USD)<br />
                  3. Schedule your 1-hour consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-brand-hairline">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-brand-text tracking-tight mb-4">
              Booking FAQ
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-cream rounded-xl p-6">
              <h3 className="font-semibold text-brand-text mb-2">What happens after I pay?</h3>
              <p className="text-brand-text-light text-sm">
                After payment, you'll be redirected to our Calendly scheduling page where you can select your preferred date and time for the 1-hour consultation.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-6">
              <h3 className="font-semibold text-brand-text mb-2">Can I reschedule if needed?</h3>
              <p className="text-brand-text-light text-sm">
                Yes! You can reschedule up to 24 hours before your appointment through the confirmation email you'll receive.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-6">
              <h3 className="font-semibold text-brand-text mb-2">What payment methods are accepted?</h3>
              <p className="text-brand-text-light text-sm">
                We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment processing.
              </p>
            </div>
            <div className="bg-brand-cream rounded-xl p-6">
              <h3 className="font-semibold text-brand-text mb-2">Is the consultation fee refundable?</h3>
              <p className="text-brand-text-light text-sm">
                Yes, full refund available if cancelled with at least 48 hours notice. No-shows or last-minute cancellations are not refundable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}