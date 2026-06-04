import { VisaGuidePage } from '@/components/visa/guide-page';
import { CRITICAL_SKILLS_DATA } from '@/lib/critical-skills-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Critical Skills Work Visa Guide',
  description:
    'Complete guide to the South African Critical Skills Work Visa — eligibility, Critical Skills List, required documents, process, and costs. Section 19(2) of the Immigration Act.',
  keywords: [
    'South Africa critical skills visa',
    'critical skills work visa requirements',
    'critical skills list South Africa',
    'Section 19(2) Immigration Act',
    'SAQA evaluation South Africa',
    'critical skills visa documents',
    'critical skills visa processing time',
    'DHA critical skills permit',
  ],
  openGraph: {
    title: 'Critical Skills Work Visa Guide — South Africa',
    description:
      'Complete guide to the Critical Skills Work Visa — eligibility, Critical Skills List, required documents, and costs.',
    url: '/critical-skills/guide',
    type: 'article',
  },
  twitter: {
    title: 'Critical Skills Work Visa Guide — South Africa',
    description:
      'Complete guide to the Critical Skills Work Visa — eligibility, Critical Skills List, required documents, and costs.',
  },
};

export default function CriticalSkillsGuidePage() {
  return <VisaGuidePage data={CRITICAL_SKILLS_DATA} />;
}
