import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Assistant',
  description:
    'Enter your details once and generate a pre-filled summary for any South African DHA application — Critical Skills, General Work, Business, Study, Permanent Residence, or Citizenship.',
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
