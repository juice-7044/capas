import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Space_Grotesk } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import { SITE_URL } from '@/lib/site'
import './globals.css'

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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
      <body className="antialiased">
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
