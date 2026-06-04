import { VisaChecklistPage } from '@/components/visa/checklist-page';
import { CRITICAL_SKILLS_DATA } from '@/lib/critical-skills-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Critical Skills Visa Checklist',
  description:
    'Interactive document checklist for the South African Critical Skills Work Visa application. Track every document you need.',
};

export default function CriticalSkillsChecklistPage() {
  return <VisaChecklistPage data={CRITICAL_SKILLS_DATA} />;
}
