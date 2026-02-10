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
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            FAQs
          </h1>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
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