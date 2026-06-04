import { VisaChecklistPage } from '@/components/visa/checklist-page';
import { PERMANENT_RESIDENCE_DATA } from '@/lib/permanent-residence-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Permanent Residence Checklist',
  description:
    'Interactive document checklist for South African Permanent Residence applications. Track every document you need.',
};

export default function PermanentResidenceChecklistPage() {
  return <VisaChecklistPage data={PERMANENT_RESIDENCE_DATA} />;
}
