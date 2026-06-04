import { VisaGuidePage } from '@/components/visa/guide-page';
import { STUDY_VISA_DATA } from '@/lib/study-visa-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Visa Guide',
  description:
    'Complete guide to the South African Study Visa — eligibility, acceptance letter requirements, financial proof, required documents, and costs. Section 18 of the Immigration Act.',
  keywords: [
    'South Africa study visa',
    'student visa South Africa requirements',
    'Section 18 Immigration Act',
    'study visa financial proof South Africa',
    'South African university visa',
    'study visa documents South Africa',
    'study permit South Africa',
    'SAQA evaluation study visa',
  ],
  openGraph: {
    title: 'Study Visa Guide — South Africa',
    description:
      'Complete guide to the Study Visa — eligibility, acceptance letter, financial proof, required documents, and costs.',
    url: '/study-visa/guide',
    type: 'article',
  },
  twitter: {
    title: 'Study Visa Guide — South Africa',
    description:
      'Complete guide to the Study Visa — eligibility, acceptance letter, financial proof, required documents, and costs.',
  },
};

export default function StudyVisaGuidePage() {
  return <VisaGuidePage data={STUDY_VISA_DATA} />;
}
