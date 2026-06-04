import { VisaChecklistPage } from '@/components/visa/checklist-page';
import { STUDY_VISA_DATA } from '@/lib/study-visa-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Visa Checklist',
  description:
    'Interactive document checklist for the South African Study Visa application. Track every document you need.',
};

export default function StudyVisaChecklistPage() {
  return <VisaChecklistPage data={STUDY_VISA_DATA} />;
}
