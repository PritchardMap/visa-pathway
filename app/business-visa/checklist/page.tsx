import { VisaChecklistPage } from '@/components/visa/checklist-page';
import { BUSINESS_VISA_DATA } from '@/lib/business-visa-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Visa Checklist',
  description:
    'Interactive document checklist for the South African Business Visa application. Track every document you need.',
};

export default function BusinessVisaChecklistPage() {
  return <VisaChecklistPage data={BUSINESS_VISA_DATA} />;
}
