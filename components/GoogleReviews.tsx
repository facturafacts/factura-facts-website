import { Star, ExternalLink } from 'lucide-react';

export default function GoogleReviews() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-brand-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-brand-text tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-2xl font-semibold text-brand-text">5.0</span>
          </div>
          <p className="text-brand-text-light">
            Based on 19 Google reviews
          </p>
        </div>

        {/* Elfsight Widget Container */}
        <div className="bg-brand-cream rounded-2xl p-8 border border-brand-hairline shadow-card">
          <div className="text-center py-12">
            <p className="text-brand-text-light mb-4">
              Google Reviews Widget will appear here
            </p>
            <p className="text-sm text-brand-text-muted">
              See setup instructions below
            </p>
          </div>
        </div>

        {/* Write a Review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/CTtbpDegarsWEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold-hover transition-all duration-200 shadow-soft hover:shadow-card"
          >
            Write a Review
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-brand-text-light text-sm mt-3">
            Share your experience on Google
          </p>
        </div>

        {/* Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Factura Facts",
              "image": "https://factura-facts-website.vercel.app/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "19",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "$$",
              "telephone": "+52-612-213-9979",
              "url": "https://factura-facts-website.vercel.app"
            })
          }}
        />
      </div>
    </section>
  );
}