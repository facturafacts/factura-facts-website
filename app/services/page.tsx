import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calculator, Building2, TrendingUp, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: 'Accounting & Tax Compliance - For You',
      description: 'If you plan to conduct business and generate personal income in Mexico, there are certain obligations you must fulfill. Determining the appropriate tax regime to comply with and understanding the fundamentals will be among the initial steps in establishing a successful enterprise.',
    },
    {
      icon: Building2,
      title: 'Accounting & Tax Compliance - For your Corporation',
      description: 'All corporations are required to comply with tax regulations, regardless of their income. Whether your corporation is just starting out or already established, we are here to help.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory (CFO as a service)',
      description: "Tailored solutions for your business's financial operations, including optimizing cash flow and driving strategic decision-making. From financial planning and analysis to fundraising strategies.",
    },
    {
      icon: FileCheck,
      title: 'Tax Advisory',
      description: "Tailored fiscal advisory services for your business's operations, focusing on optimizing tax efficiency and compliance while guiding strategic decision-making. Our offerings encompass a spectrum of fiscal planning and analysis, along with strategies for managing tax obligations.",
    }
  ]

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            OUR SERVICES
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-brand-hairline shadow-card flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-brand-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-text mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <div className="w-12 h-px bg-brand-gold mb-6"></div>
                  <p className="text-lg text-brand-text-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-brand-dark font-medium hover:text-brand-gold transition-colors group"
                  >
                    Ask us a Question
                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
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