import { VisaChecklistPage } from '@/components/visa/checklist-page';
import { GENERAL_WORK_DATA } from '@/lib/general-work-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Work Visa Checklist',
  description:
    'Interactive document checklist for the South African General Work Visa application. Track every document you need.',
};

export default function GeneralWorkChecklistPage() {
  return <VisaChecklistPage data={GENERAL_WORK_DATA} />;
}
