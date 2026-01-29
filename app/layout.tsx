import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SiteShell } from '@/components/site-shell'
import LenisProvider from '@/providers/lenis.provider'
import StructuredData from '@/components/structured-data'
import './globals.css'

const GoogleSansCode = localFont({
  src: [
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/font/GoogleSansCode/static/GoogleSansCode-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-google-sans-code',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui']
})

const GoogleSans = localFont({
  src: [
    {
      path: '../public/font/ProductSans/Product Sans Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/ProductSans/Product Sans Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/font/ProductSans/Product Sans Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/ProductSans/Product Sans Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-google-sans',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui']
})


export const metadata: Metadata = {
  metadataBase: new URL('https://codingclub.is-local.org'),
  title: 'Coding club',
  description: 'A coding club for everyone, by everyone. where you can learn, share and collaborate on projects.',
  // Canonical URL - tells search engines this is the primary domain
  alternates: {
    canonical: 'https://codingclub.is-local.org',
  },
  keywords: [
    'GDG PRMITR',
    'PRMITR GDG',
    'GDG PRMIT&R',
    'PRMIT&R GDG',
    'GDG Mitra',
    'Mitra GDG',
    'Prof Ram Meghe GDG',
    'Ram Meghe GDG',
    'Google Developer Group PRMITR',
    'GDG Amravati',
    'GDG Badnera',
    'PRMITR Coding Club',
    'Mitra Coding Club',
    'Coding Club PRMITR',
    'PRMIT&R Coding Club',
    'Prof. Ram Meghe Institute of Technology',
    'PRMITR Amravati',
    'MITRA Badnera',
    'GDG on Campus PRMITR',
    'Google Student Developers PRMITR',
    'Tech Community Amravati',
    'coding club',
    'programming',
    'development',
    'javascript',
    'typescript',
    'react',
    'nextjs',
    'python',
    'java',
    'web development',
    'machine learning',
    'artificial intelligence',
    'hackathon',
    'workshops',
    'tech events',
    'GSA PRMITR',
    'Google Student Ambassadors',
    'Cisco Academy PRMITR',
    'NVIDIA Community PRMITR'
  ],
  authors: [{ name: 'GDG PRMITR Web Team' }],
  creator: 'GDG PRMITR Coding Club',
  publisher: 'Prof. Ram Meghe Institute of Technology and Research',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://codingclub.is-local.org',
    siteName: 'GDG PRMITR - Google Developer Group',
    title: 'GDG PRMITR - Google Developer Group at Prof. Ram Meghe Institute of Technology',
    description: 'Google Developer Group (GDG) at Prof. Ram Meghe Institute of Technology and Research (PRMITR), Badnera, Amravati. Join our coding club for workshops, hackathons, and tech events.',
    images: [
      {
        url: '/logo/logo-gdg.png',
        width: 1200,
        height: 630,
        alt: 'GDG PRMITR Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDG PRMITR - Google Developer Group at Prof. Ram Meghe Institute of Technology',
    description: 'Google Developer Group (GDG) at Prof. Ram Meghe Institute of Technology and Research (PRMITR), Badnera, Amravati. Join our coding club!',
    images: ['/logo/logo-gdg.png'],
  },
  verification: {
    google: 'bea114f22caf30f3',
  },
  alternates: {
    canonical: 'https://codingclub.is-local.org',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={` ${GoogleSansCode.variable} ${GoogleSans.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        <LenisProvider >
        <SiteShell>
          {children}
        </SiteShell>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
