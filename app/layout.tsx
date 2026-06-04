import type { Metadata } from 'next';
import { Literata, Figtree } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

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
  title: {
    default: 'Visa Pathway — South African Citizenship by Naturalisation Guide',
    template: '%s | Visa Pathway',
  },
  description:
    'A clear, step-by-step guide to applying for South African citizenship by naturalisation. Exact documents, costs, locations, and pre-filled DHA forms.',
  keywords: [
    'South African citizenship',
    'naturalisation',
    'DHA forms',
    'Home Affairs',
    'citizenship application',
  ],
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
      <body className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
