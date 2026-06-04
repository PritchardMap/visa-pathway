import { VisaGuidePage } from '@/components/visa/guide-page';
import { BUSINESS_VISA_DATA } from '@/lib/business-visa-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Visa Guide',
  description:
    'Complete guide to the South African Business Visa — eligibility, DTIC recommendation, investment requirements, documents, and costs. Section 15 of the Immigration Act.',
  keywords: [
    'South Africa business visa',
    'business visa South Africa requirements',
    'DTIC recommendation South Africa',
    'Section 15 Immigration Act',
    'invest in South Africa visa',
    'business visa investment amount',
    'entrepreneur visa South Africa',
    'DHA business permit',
  ],
  openGraph: {
    title: 'Business Visa Guide — South Africa',
    description:
      'Complete guide to the Business Visa — eligibility, DTIC recommendation, investment requirements, documents, and costs.',
    url: '/business-visa/guide',
    type: 'article',
  },
  twitter: {
    title: 'Business Visa Guide — South Africa',
    description:
      'Complete guide to the Business Visa — eligibility, DTIC recommendation, investment requirements, documents, and costs.',
  },
};

export default function BusinessVisaGuidePage() {
  return <VisaGuidePage data={BUSINESS_VISA_DATA} />;
}
