'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface ConsultationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  residencyStatus: string
  taxNeeds: string
  hasAccountant?: string
  urgency: string
  questions: string
}

export default function BookingForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    residencyStatus: '',
    taxNeeds: '',
    hasAccountant: '',
    urgency: '',
    questions: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Create checkout session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      })

      const { sessionId, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      // Redirect to Stripe Checkout
      if (sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`
      } else {
        throw new Error('No session ID received')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('There was an error processing your request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold text-brand-dark rounded-lg flex items-center justify-center text-sm font-bold">1</span>
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-brand-text mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-brand-text mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
              placeholder="+52 612 123 4567"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-brand-hairline"></div>

      {/* Tax Situation */}
      <div>
        <h3 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold text-brand-dark rounded-lg flex items-center justify-center text-sm font-bold">2</span>
          Your Tax Situation
        </h3>
        
        <div className="mb-5">
          <label htmlFor="residencyStatus" className="block text-sm font-medium text-brand-text mb-2">
            Residency Status in Mexico *
          </label>
          <select
            id="residencyStatus"
            name="residencyStatus"
            required
            value={formData.residencyStatus}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
          >
            <option value="">Select your status</option>
            <option value="temporary">Temporary Resident</option>
            <option value="permanent">Permanent Resident</option>
            <option value="citizen">Mexican Citizen</option>
            <option value="tourist">Tourist/Visitor</option>
            <option value="planning">Planning to Move</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="taxNeeds" className="block text-sm font-medium text-brand-text mb-2">
            What type of tax assistance do you need? *
          </label>
          <select
            id="taxNeeds"
            name="taxNeeds"
            required
            value={formData.taxNeeds}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
          >
            <option value="">Select service type</option>
            <option value="personal">Personal Tax Filing</option>
            <option value="corporate">Corporate Tax Compliance</option>
            <option value="cfo">Financial Advisory (CFO Services)</option>
            <option value="planning">Tax Planning & Strategy</option>
            <option value="rfc">Obtaining RFC</option>
            <option value="airbnb">Airbnb/Property Rental Taxes</option>
            <option value="multiple">Multiple Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-brand-text mb-3">
            Do you currently have a tax accountant in Mexico?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasAccountant"
                value="yes"
                checked={formData.hasAccountant === 'yes'}
                onChange={handleChange}
                className="w-4 h-4 text-brand-gold border-brand-hairline focus:ring-brand-gold"
              />
              <span className="text-brand-text-light">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="hasAccountant"
                value="no"
                checked={formData.hasAccountant === 'no'}
                onChange={handleChange}
                className="w-4 h-4 text-brand-gold border-brand-hairline focus:ring-brand-gold"
              />
              <span className="text-brand-text-light">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-brand-hairline"></div>

      {/* Additional Details */}
      <div>
        <h3 className="text-lg font-semibold text-brand-text mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-brand-gold text-brand-dark rounded-lg flex items-center justify-center text-sm font-bold">3</span>
          Additional Details
        </h3>

        <div className="mb-5">
          <label htmlFor="urgency" className="block text-sm font-medium text-brand-text mb-2">
            How urgent is your tax situation?
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
          >
            <option value="">Select urgency level</option>
            <option value="immediate">Immediate - Filing deadline approaching</option>
            <option value="soon">Soon - Within 30 days</option>
            <option value="planning">Planning - 2-3 months out</option>
            <option value="exploratory">Exploratory - Just gathering information</option>
          </select>
        </div>

        <div>
          <label htmlFor="questions" className="block text-sm font-medium text-brand-text mb-2">
            Specific questions or concerns (Optional)
          </label>
          <textarea
            id="questions"
            name="questions"
            rows={4}
            value={formData.questions}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200 resize-none"
            placeholder="Tell us about your specific situation, any deadlines, or particular concerns you'd like to discuss..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold-hover transition-all duration-200 shadow-soft hover:shadow-card text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Proceed to Payment'
        )}
      </button>
    </form>
  )
}