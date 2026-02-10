import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
    },
    {
      name: 'Francisco Perez',
      role: 'Accounting Manager',
      description: 'With a decade of experience serving as Accounting Manager for a Merida-based firm, Francisco Perez contributes significant knowledge in accounting operations and management.',
    }
  ]

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Hero Section - Full width image with overlay */}
      <section className="relative h-[75vh] min-h-[650px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Tax consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-none tracking-tight">
                <span className="block">factura</span>
                <span className="block">facts</span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                  Taxes in a new country can feel like a maze sometimes…
                </p>
                <p className="text-lg md:text-xl text-white/70 font-light">
                  don't worry, we are here to help you navigate and learn the language.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream to-transparent"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 lg:py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight">
              WHO WE ARE
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/daniel.jpg"
                  alt="Daniel Gutiérrez"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-brand-text-light leading-relaxed">
                We are a team of dedicated Mexican tax and accounting professionals, led by <strong className="text-brand-text font-medium">Daniel Gutiérrez</strong>, committed to <strong className="text-brand-text font-medium">transparent and factual</strong> information.
              </p>
              <p className="text-lg text-brand-text-light leading-relaxed">
                We translate complex regulations into clear, actionable advice for individuals establishing residency, <strong className="text-brand-text font-medium">expatriates living long-term</strong>, and corporations operating in Mexico.
              </p>
              <p className="text-lg text-brand-text-light leading-relaxed">
                Partner with us for tailored solutions that ensure compliance and empower strategic tax planning, grounded in the principle of <strong className="text-brand-text font-medium">'Trust but verify'</strong>
              </p>
              <div className="bg-white p-8 rounded-2xl border border-brand-hairline shadow-card mt-8">
                <p className="text-brand-text-light leading-relaxed">
                  Daniel's experience moving to Baja California Sur highlighted a critical need for expats: truly dependable tax and accounting guidance delivered with the client's best interests at heart. He saw how easily individuals could become vulnerable without support grounded in the highest standards of diligence and ethics.
                </p>
                <div className="w-12 h-px bg-brand-gold my-6"></div>
                <p className="text-brand-text-light">
                  His background spans <strong className="text-brand-text font-medium">management consulting, founding and managing a non-bank bank, and accounting practice.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-brand-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight">
              HOW WE WORK
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {howWeWorkSteps.map((step, index) => (
                <div key={index} className="flex gap-5 p-5 rounded-xl hover:bg-brand-cream transition-colors duration-200 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-dark text-white rounded-xl flex items-center justify-center font-semibold text-sm shadow-soft">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                    <p className="text-brand-text-light text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/about.jpg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 lg:py-32 bg-brand-cream border-t border-brand-hairline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight">
              Our Team
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-brand-hairline shadow-card hover:shadow-elevated transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-cream to-brand-cream-dark flex items-center justify-center">
                  <span className="text-7xl text-brand-text/10 font-light">{member.name.charAt(0)}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-brand-text mb-1">{member.name}</h3>
                  <p className="text-brand-gold font-medium text-sm mb-4">{member.role}</p>
                  <div className="w-8 h-px bg-brand-hairline mb-4"></div>
                  <p className="text-brand-text-light text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-brand-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight">
              RESOURCES
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/services.jpg"
                  alt="Resources"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-brand-text-light leading-relaxed">
                Discover our resource hub for essential tax <strong className="text-brand-text font-medium">insights</strong> and practical <strong className="text-brand-text font-medium">guidance</strong> on settling in Mexico. From tax tips to tropicalized business advice, <strong className="text-brand-text font-medium">we're here to help.</strong>
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-brand-dark font-medium hover:text-brand-gold transition-colors text-lg group"
              >
                More info
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-brand-cream border-t border-brand-hairline">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight mb-6">
              ASK US A QUESTION
            </h2>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
            <p className="text-lg text-brand-text-light mb-2">Do you have a pressing question on your mind?</p>
            <p className="text-brand-text-light">
              Submit your question and let our <strong className="text-brand-text font-medium">expert team</strong> analyze and craft a response. We will get back to you within 48 Business hours.
            </p>
          </div>
          
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200"
                placeholder="What's your question about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-brand-hairline rounded-xl focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold bg-white transition-all duration-200 resize-none"
                placeholder="Tell us more about your question..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold-hover transition-all duration-200 shadow-soft hover:shadow-card text-lg"
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