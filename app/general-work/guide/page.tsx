import { VisaGuidePage } from '@/components/visa/guide-page';
import { GENERAL_WORK_DATA } from '@/lib/general-work-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Work Visa Guide',
  description:
    'Complete guide to the South African General Work Visa — eligibility, DOEL certificate, job offer requirements, documents, and costs. Section 19(1) of the Immigration Act.',
  keywords: [
    'South Africa general work visa',
    'general work visa requirements',
    'DOEL certificate South Africa',
    'Section 19(1) Immigration Act',
    'work visa South Africa job offer',
    'general work visa documents',
    'general work permit South Africa',
    'VFS Global work visa South Africa',
  ],
  openGraph: {
    title: 'General Work Visa Guide — South Africa',
    description:
      'Complete guide to the General Work Visa — eligibility, DOEL certificate, job offer requirements, documents, and costs.',
    url: '/general-work/guide',
    type: 'article',
  },
  twitter: {
    title: 'General Work Visa Guide — South Africa',
    description:
      'Complete guide to the General Work Visa — eligibility, DOEL certificate, job offer requirements, documents, and costs.',
  },
};

export default function GeneralWorkGuidePage() {
  return <VisaGuidePage data={GENERAL_WORK_DATA} />;
}
