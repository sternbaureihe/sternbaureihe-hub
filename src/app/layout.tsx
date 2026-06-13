import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sternbaureihe.com'),
  title: {
    default: 'SternBaureihe — Mercedes-Benz Chassis Authority',
    template: '%s | SternBaureihe',
  },
  description:
    'Technical reference platform for Mercedes-Benz chassis. Factory specifications, engineering documentation, and primary source data across 100+ chassis codes.',
  keywords: [
    'Mercedes-Benz chassis',
    'Mercedes technical reference',
    'Mercedes factory specifications',
    'Mercedes workshop manual',
    'W124 specifications',
    'W140 specifications',
    'R129 specifications',
    'Mercedes restoration documentation',
  ],
  authors: [{ name: 'SternBaureihe' }],
  creator: 'SternBaureihe',
  publisher: 'SternBaureihe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sternbaureihe.com',
    siteName: 'SternBaureihe',
    title: 'SternBaureihe — Mercedes-Benz Chassis Authority',
    description:
      'Technical reference platform for Mercedes-Benz chassis. Factory specifications, engineering documentation, and primary source data.',
    images: [
      {
        url: '/og/sternbaureihe-og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'SternBaureihe — Mercedes-Benz Chassis Authority',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SternBaureihe — Mercedes-Benz Chassis Authority',
    description:
      'Technical reference platform for Mercedes-Benz chassis. Factory specifications and primary source documentation.',
    images: ['/og/sternbaureihe-og-homepage.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SternBaureihe',
    url: 'https://sternbaureihe.com',
    description:
      'Mercedes-Benz chassis technical reference platform. Factory specifications, engineering documentation, and primary source data across 100+ chassis codes.',
    publisher: {
      '@type': 'Organization',
      name: 'SternBaureihe',
      url: 'https://sternbaureihe.com',
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GSC_VERIFICATION || ''}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
