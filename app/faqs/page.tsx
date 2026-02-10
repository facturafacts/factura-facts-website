import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HelpCircle } from 'lucide-react'

export default function FAQs() {
  const faqs = [
    {
      question: 'What are my obligations as a Fiscal Resident of Mexico?',
      answer: 'Mexico operates as the USA, taxing your world wide income if you are determined subject of Mexico.'
    },
    {
      question: 'What are facturas?',
      answer: 'Facturas are no more than electronically stamped invoices. Without these, tax write-offs are not valid. Facturas act as official supporting documents for your or your business\'s expenses.'
    },
    {
      question: 'How are facturas relevant to my construction project?',
      answer: 'By having all your construction expenses supported by Facturas, you will be able to support the value of our home if you ever choose to sell it. This is especially important if you hold your home through a corporation'
    },
    {
      question: 'What taxes must I comply with as a small business owner',
      answer: 'Income Tax, Value Added Tax, Hospitality Tax, Social Security tax, and any other that may apply.'
    },
    {
      question: 'Can I receive a factura for purchases in cash?',
      answer: 'Yes, however, they might not be eligible to entail a write off.'
    }
  ]

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            FAQs
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6"></div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-24 lg:py-32 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-brand-hairline shadow-card hover:shadow-elevated transition-shadow duration-300">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-cream rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text mb-3">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-px bg-brand-hairline mb-3"></div>
                    <p className="text-brand-text-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}