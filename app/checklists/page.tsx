import Link from 'next/link';
import { ArrowRight, CheckSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document Checklists — All Pathways',
  description:
    'Interactive document checklists for every South African visa, permit, and citizenship pathway. Track what you have and what you still need.',
};

const CHECKLISTS = [
  {
    slug: 'critical-skills',
    href: '/critical-skills/checklist',
    name: 'Critical Skills Work Visa',
    tagline: 'For qualified professionals in high-demand occupations',
    icon: '🔬',
    validity: '5 years',
    section: '19(2)',
  },
  {
    slug: 'general-work',
    href: '/general-work/checklist',
    name: 'General Work Visa',
    tagline: 'Employment-tied permit requiring a confirmed SA job offer',
    icon: '💼',
    validity: 'Up to 3 years',
    section: '19(1)',
  },
  {
    slug: 'business-visa',
    href: '/business-visa/checklist',
    name: 'Business Visa',
    tagline: 'For entrepreneurs establishing or investing in a SA business',
    icon: '🏢',
    validity: '3 years',
    section: '15',
  },
  {
    slug: 'study-visa',
    href: '/study-visa/checklist',
    name: 'Study Visa',
    tagline: 'For students enrolled at accredited South African institutions',
    icon: '🎓',
    validity: 'Duration of course',
    section: '18',
  },
  {
    slug: 'permanent-residence',
    href: '/permanent-residence/checklist',
    name: 'Permanent Residence',
    tagline: 'Make South Africa your permanent home — no expiry, no renewals',
    icon: '🏡',
    validity: 'Permanent',
    section: '26 & 27',
  },
  {
    slug: 'citizenship',
    href: '/checklist',
    name: 'Citizenship by Naturalisation',
    tagline: 'Become a South African citizen after 5+ years of permanent residence',
    icon: '🇿🇦',
    validity: 'Permanent citizenship',
    section: 'Citizenship Act',
  },
];

export default function ChecklistsPage() {
  return (
    <section className='container-page pt-16 pb-20 md:pt-20 md:pb-28'>
      <div className='max-w-xl mb-12'>
        <p className='label-caps mb-4' style={{ color: 'var(--amber-dark)' }}>
          Document checklists
        </p>
        <h1
          className='heading-display text-3xl md:text-4xl mb-4'
          style={{ color: 'var(--text-primary)' }}
        >
          Pick your pathway, track your documents.
        </h1>
        <p className='text-lg leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
          Each checklist is interactive — tick off documents as you collect them. Progress is saved in your browser so you can pick up where you left off.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {CHECKLISTS.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className='no-underline group'
            style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
          >
            <div className='flex items-start justify-between mb-4'>
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{item.icon}</span>
              <CheckSquare size={16} style={{ color: 'var(--border)', flexShrink: 0, marginTop: 2 }} />
            </div>

            <p className='font-semibold text-base mb-1' style={{ color: 'var(--text-primary)' }}>
              {item.name}
            </p>
            <p className='text-sm mb-5' style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {item.tagline}
            </p>

            <div
              className='flex gap-4 mb-5'
              style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}
            >
              <div>
                <p className='label-caps mb-0.5' style={{ color: 'var(--text-muted)' }}>Validity</p>
                <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>{item.validity}</p>
              </div>
              <div>
                <p className='label-caps mb-0.5' style={{ color: 'var(--text-muted)' }}>Legal basis</p>
                <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>{item.section}</p>
              </div>
            </div>

            <div
              className='flex items-center gap-1.5 text-sm font-semibold mt-auto'
              style={{ color: 'var(--amber-dark)' }}
            >
              Open checklist <ArrowRight size={13} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
