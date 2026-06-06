import type { Metadata } from 'next';
import { Literata, Figtree } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';
import { Analytics } from '@vercel/analytics/next';

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Visa Pathway — South African Visa & Immigration Guides',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Clear, verified guides for South African visas, permits, and citizenship. Critical Skills, General Work, Business, Study, Permanent Residence, and Citizenship by Naturalisation — every document, cost, and process explained.',
  keywords: [
    'South African visa',
    'South African immigration',
    'critical skills work visa',
    'general work visa South Africa',
    'business visa South Africa',
    'study visa South Africa',
    'permanent residence South Africa',
    'citizenship by naturalisation South Africa',
    'DHA visa requirements',
    'Department of Home Affairs',
    'VFS Global South Africa',
    'Immigration Act South Africa',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Visa Pathway — South African Visa & Immigration Guides',
    description:
      'Clear, verified guides for South African visas, permits, and citizenship. Every document, cost, and process explained.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Visa Pathway — South African Immigration Guides' }],
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Pathway — South African Visa & Immigration Guides',
    description:
      'Clear, verified guides for South African visas, permits, and citizenship. Every document, cost, and process explained.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${literata.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className='min-h-screen flex flex-col' suppressHydrationWarning>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
