import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Factura Facts - Mexico Tax & Accounting Services',
  description: 'Professional tax and accounting services for expatriates and corporations in Mexico. Led by Daniel Gutiérrez.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}