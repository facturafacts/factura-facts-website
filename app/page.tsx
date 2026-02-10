import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, Users, FileText, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const howWeWorkSteps = [
    {
      title: 'Schedule Your Initial Mexico Tax Consultation',
      description: 'Book a discovery call to discuss your specific situation and needs regarding taxes and residency in Mexico.'
    },
    {
      title: 'Define Your Goals & Ask Questions',
      description: "We'll discuss your questions and your 3 - 5 year financial and residency goals in Mexico to tailor our strategy."
    },
    {
      title: 'Identify Tax & Compliance Obligations',
      description: 'State the specific tax and regulatory obligations you need to meet as a resident or business in Mexico.'
    },
    {
      title: 'Navigate Mexican Paperwork Requirements',
      description: 'Get expert assistance understanding, gathering, and managing all necessary tax forms and residency documentation in Mexico.'
    },
    {
      title: 'Manage Your Monthly Tax Filings in Mexico',
      description: 'Ensure accurate and timely compliance with ongoing support for all your required monthly Mexican tax filings.'
    }
  ]

  const teamMembers = [
    {
      name: 'Teresa Huerta',
      role: 'Finance Area Coordinator',
      description: 'As Finance Area Coordinator, Teresa Huerta manages the complete accounting, tax, and treasury operations. Her key responsibilities include financial statement preparation, tax compliance, daily cash flow management, audit support, and banking relations.',
      image: '/images/tere.jpg'
    },
    {
      name: 'Francisco Perez',
      role: 'Accounting Manager',
      description: 'With a decade of experience serving as Accounting Manager for a Merida-based firm, Francisco Perez contributes significant knowledge in accounting operations and management.',
      image: '/images/francisco.jpg'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-600 mb-4">
                Taxes in a new country can feel like a maze sometimes…
              </p>
              <p className="text-xl text-brand-700 font-medium mb-6">
                don't worry, we are here to help you navigate and learn the language.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-md font-medium hover:bg-brand-700 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-100 rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-brand-300">FF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            WHO WE ARE
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <Users className="w-24 h-24 text-brand-300" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of dedicated Mexican tax and accounting professionals, led by <strong>Daniel Gutiérrez</strong>, committed to <strong>transparent and factual</strong> information.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We translate complex regulations into clear, actionable advice for individuals establishing residency, <strong>expatriates living long-term</strong>, and corporations operating in Mexico.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Partner with us for tailored solutions that ensure compliance and empower strategic tax planning, grounded in the principle of <strong>'Trust but verify'</strong>
              </p>
              <div className="bg-brand-50 p-6 rounded-lg border-l-4 border-brand-500">
                <p className="text-gray-700 italic">
                  Daniel's experience moving to Baja California Sur highlighted a critical need for expats: truly dependable tax and accounting guidance delivered with the client's best interests at heart. He saw how easily individuals could become vulnerable without support grounded in the highest standards of diligence and ethics.
                </p>
                <p className="text-gray-700 mt-4">
                  His background spans <strong>management consulting, founding and managing a non-bank bank, and accounting practice.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            HOW WE WORK
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {howWeWorkSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <FileText className="w-24 h-24 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <Users className="w-20 h-20 text-brand-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-brand-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            RESOURCES
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <FileText className="w-24 h-24 text-gray-300" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Discover our resource hub for essential tax <strong>insights</strong> and practical <strong>guidance</strong> on settling in Mexico. From tax tips to tropicalized business advice, <strong>we're here to help.</strong>
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
              >
                More info
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              ASK US A QUESTION
            </h2>
            <p className="text-xl text-gray-600 mb-2">Do you have a pressing question on your mind?</p>
            <p className="text-gray-600">
              Submit your question and let our <strong>expert team</strong> analyze and craft a response. We will get back to you within 48 Business hours.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="What's your question about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Tell us more about your question..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-600 text-white px-8 py-4 rounded-md font-medium hover:bg-brand-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}