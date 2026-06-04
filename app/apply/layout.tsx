import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Assistant',
  description:
    'Enter your details once and generate a pre-filled summary for your DHA naturalisation forms — DHA-63, DHA-529, and BI-9.',
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
