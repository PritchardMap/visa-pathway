import { VisaGuidePage } from '@/components/visa/guide-page';
import { PERMANENT_RESIDENCE_DATA } from '@/lib/permanent-residence-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Permanent Residence Permit Guide',
  description:
    'Complete guide to South African Permanent Residence — eligibility categories (spousal, critical skills, retirement), required documents, SARS compliance, and costs. Sections 26 and 27 of the Immigration Act.',
  keywords: [
    'South Africa permanent residence',
    'permanent residence permit South Africa',
    'Section 26 Immigration Act South Africa',
    'Section 27 Immigration Act South Africa',
    'permanent residency requirements South Africa',
    'DHA permanent residence documents',
    'SARS tax compliance visa',
    'how to get permanent residence South Africa',
  ],
  openGraph: {
    title: 'Permanent Residence Permit Guide — South Africa',
    description:
      'Complete guide to Permanent Residence — eligibility categories, required documents, SARS compliance, and costs.',
    url: '/permanent-residence/guide',
    type: 'article',
  },
  twitter: {
    title: 'Permanent Residence Permit Guide — South Africa',
    description:
      'Complete guide to Permanent Residence — eligibility categories, required documents, SARS compliance, and costs.',
  },
};

export default function PermanentResidenceGuidePage() {
  return <VisaGuidePage data={PERMANENT_RESIDENCE_DATA} />;
}
