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
      image: '/images/service-personal.jpg'
    },
    {
      icon: Building2,
      title: 'Accounting & Tax Compliance - For your Corporation',
      description: 'All corporations are required to comply with tax regulations, regardless of their income. Whether your corporation is just starting out or already established, we are here to help.',
      image: '/images/service-corporate.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory (CFO as a service)',
      description: "Tailored solutions for your business's financial operations, including optimizing cash flow and driving strategic decision-making. From financial planning and analysis to fundraising strategies.",
      image: '/images/service-cfo.jpg'
    },
    {
      icon: FileCheck,
      title: 'Tax Advisory',
      description: "Tailored fiscal advisory services for your business's operations, focusing on optimizing tax efficiency and compliance while guiding strategic decision-making. Our offerings encompass a spectrum of fiscal planning and analysis, along with strategies for managing tax obligations.",
      image: '/images/service-tax.jpg'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-brand-400" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
                  >
                    Ask us a Question
                    <span className="text-xl">→</span>
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