import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { StructuredData } from '@/components/structured-data'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const GTM_ID = 'GTM-KRP5Z4P8'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Lola Louis' Creative & Performing Arts | Bronx Performing Arts Nonprofit",
    template: '%s | Lola Louis\u2019 Creative & Performing Arts',
  },
  description:
    'A Northeast Bronx 501(c)(3) performing arts nonprofit founded by Lola Louis in 1985. For 30 years we taught piano, voice, dance, drama, and musical theatre. Help us reopen — free classes for every age. Fund a chair for $1.',
  applicationName: "Lola Louis' Creative & Performing Arts",
  generator: 'v0.app',
  keywords: [
    'Bronx performing arts',
    'Northeast Bronx arts nonprofit',
    'free music lessons Bronx',
    'free piano lessons Bronx',
    'dance classes Bronx',
    'drama classes Bronx',
    'musical theatre Bronx',
    'youth arts education Bronx',
    'performing arts for seniors',
    'Lola Louis',
    'CAPAS',
    'Wakefield Bronx arts',
    '501(c)(3) arts nonprofit New York',
    'donate performing arts Bronx',
  ],
  authors: [{ name: "Lola Louis' Creative & Performing Arts" }],
  creator: "Lola Louis' Creative & Performing Arts",
  publisher: "Lola Louis' Creative & Performing Arts",
  category: 'Nonprofit / Arts Education',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: "Lola Louis' Creative & Performing Arts",
    title: "Lola Louis' Creative & Performing Arts | Bronx Performing Arts Nonprofit",
    description:
      'A 30-year Northeast Bronx performing arts nonprofit, raising the curtain again. Help us reopen with free classes for every age — fund a chair for $1.',
    images: [
      {
        url: '/images/og-capas.png',
        width: 1200,
        height: 630,
        alt: 'Rows of empty chairs in a bright community hall, waiting to be filled',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lola Louis' Creative & Performing Arts | Bronx Performing Arts Nonprofit",
    description:
      'A 30-year Northeast Bronx performing arts nonprofit, raising the curtain again. Fund a chair for $1.',
    images: ['/images/og-capas.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/capas-logo-green-gold.webp',
        type: 'image/webp',
      },
      {
        url: '/images/capas-logo-plum.png',
        type: 'image/png',
      },
    ],
    apple: '/images/capas-logo-plum.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
