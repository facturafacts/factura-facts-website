import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, ExternalLink, Download } from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      title: 'Airbnb Tax Resource Hub - MX',
      description: 'If you own or operate an Airbnb rental in Mexico, you will find this page very enlightening.',
      type: 'external',
      url: 'https://recursosfiscalesairbnb.com',
      icon: ExternalLink
    },
    {
      title: 'Tax implications for Property rentals and Air B&B',
      description: 'A general summary of the basic implications for property rental in Mexico.',
      type: 'pdf',
      url: '/s/AIRBNB-RENTALS-TAX-IMPLICATIONS.pdf',
      icon: Download
    },
    {
      title: 'Obtaining an RFC',
      description: 'A general overview of the process of obtaining an RFC in Mexico. The first steps in tax compliance.',
      type: 'pdf',
      url: '/s/OBTAING-AN-RFC.pdf',
      icon: Download
    }
  ]

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            RESOURCES
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target={resource.type === 'external' ? '_blank' : undefined}
                rel={resource.type === 'external' ? 'noopener noreferrer' : undefined}
                className="group bg-brand-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-brand-beige flex items-center justify-center">
                  <FileText className="w-16 h-16 text-brand-gold" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-gold transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-brand-text-light mb-4">
                        {resource.description}
                      </p>
                    </div>
                    <resource.icon className="w-6 h-6 text-brand-gold flex-shrink-0" />
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-dark font-medium text-sm">
                    {resource.type === 'external' ? 'Visit Resource' : 'Download PDF'}
                    <span>↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}