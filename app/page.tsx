import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  openGraph: {
    url: SITE_URL,
    type: 'website',
  },
};

const PATHWAYS = [
  {
    slug: 'critical-skills',
    name: 'Critical Skills Work Visa',
    tagline: 'For qualified professionals in high-demand occupations',
    legalBasis: 'Section 19(2)',
    processingTime: '4–8 weeks',
    validity: '5 years',
    icon: '🔬',
    checklistHref: '/critical-skills/checklist',
  },
  {
    slug: 'general-work',
    name: 'General Work Visa',
    tagline: 'Employment-tied permit requiring a confirmed SA job offer',
    legalBasis: 'Section 19(1)',
    processingTime: '4–8 weeks',
    validity: 'Up to 3 years',
    icon: '💼',
    checklistHref: '/general-work/checklist',
  },
  {
    slug: 'business-visa',
    name: 'Business Visa',
    tagline: 'For entrepreneurs establishing or investing in a SA business',
    legalBasis: 'Section 15',
    processingTime: '4–8 weeks',
    validity: '3 years',
    icon: '🏢',
    checklistHref: '/business-visa/checklist',
  },
  {
    slug: 'study-visa',
    name: 'Study Visa',
    tagline: 'For students enrolled at accredited South African institutions',
    legalBasis: 'Section 18',
    processingTime: '4–8 weeks',
    validity: 'Duration of course',
    icon: '🎓',
    checklistHref: '/study-visa/checklist',
  },
  {
    slug: 'permanent-residence',
    name: 'Permanent Residence',
    tagline: 'Make South Africa your permanent home — no expiry, no renewals',
    legalBasis: 'Sections 26 & 27',
    processingTime: '12–24 months',
    validity: 'Permanent',
    icon: '🏡',
    checklistHref: '/permanent-residence/checklist',
  },
  {
    slug: 'guide',
    name: 'Citizenship by Naturalisation',
    tagline: 'Become a South African citizen after 5+ years of permanent residence',
    legalBasis: 'South African Citizenship Act',
    processingTime: '12–24 months',
    validity: 'Permanent citizenship',
    icon: '🇿🇦',
    checklistHref: '/checklist',
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Clear, verified guides for South African visas, permits, and citizenship. Critical Skills, General Work, Business, Study, Permanent Residence, and Citizenship by Naturalisation.',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className='container-page pt-20 pb-16 md:pt-28 md:pb-24'>
        <div className='max-w-170'>
          <p className='label-caps mb-5' style={{ color: 'var(--amber-dark)' }}>
            South African Immigration Guides
          </p>
          <h1
            className='heading-display text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-balance'
            style={{ color: 'var(--text-primary)' }}
          >
            Navigate South Africa's visa and permit pathways.
          </h1>
          <p
            className='text-lg md:text-xl leading-relaxed mb-10'
            style={{ color: 'var(--text-secondary)', maxWidth: '58ch' }}
          >
            We&apos;ve researched every pathway — documents, costs, locations,
            and processes — so you can apply with confidence. Based on the
            Immigration Act and current DHA requirements.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href='#pathways'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--amber)',
                color: 'var(--background)',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: '0.9375rem',
              }}
            >
              Explore pathways <ArrowRight size={16} />
            </a>
            <Link
              href='/guide'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--surface)',
                color: 'var(--text-primary)',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: '0.9375rem',
                border: '1px solid var(--border)',
              }}
            >
              Citizenship guide
            </Link>
          </div>
        </div>

        {/* Trust signals */}
        <div
          className='flex flex-wrap gap-6 mt-12 pt-8'
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {[
            { icon: CheckCircle, text: 'Based on the Immigration Act & DHA requirements' },
            { icon: Shield, text: 'Sources cited throughout' },
            { icon: Clock, text: 'Real processing times & current costs' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className='flex items-center gap-2'>
              <Icon size={16} style={{ color: 'var(--green)' }} />
              <span className='text-sm' style={{ color: 'var(--text-muted)' }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pathways */}
      <section
        id='pathways'
        style={{ backgroundColor: 'var(--surface)' }}
        className='py-16 md:py-20 scroll-mt-16'
      >
        <div className='container-page'>
          <p className='label-caps mb-2' style={{ color: 'var(--text-muted)' }}>
            Choose your pathway
          </p>
          <h2
            className='heading-section text-2xl md:text-3xl mb-4'
            style={{ color: 'var(--text-primary)' }}
          >
            Which visa or permit do you need?
          </h2>
          <p
            className='text-base mb-12'
            style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}
          >
            Each pathway has its own eligibility criteria, document requirements, and process. Select yours below for a complete guide.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {PATHWAYS.map((pathway) => (
              <div
                key={pathway.slug}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className='mb-4'>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{pathway.icon}</span>
                </div>

                <p
                  className='font-semibold text-base mb-1'
                  style={{ color: 'var(--text-primary)' }}
                >
                  {pathway.name}
                </p>
                <p
                  className='text-sm mb-5'
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}
                >
                  {pathway.tagline}
                </p>

                <div
                  className='flex flex-wrap gap-x-4 gap-y-2 mb-5'
                  style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}
                >
                  <div>
                    <p className='label-caps mb-0.5' style={{ color: 'var(--text-muted)' }}>
                      Processing
                    </p>
                    <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>
                      {pathway.processingTime}
                    </p>
                  </div>
                  <div>
                    <p className='label-caps mb-0.5' style={{ color: 'var(--text-muted)' }}>
                      Validity
                    </p>
                    <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>
                      {pathway.validity}
                    </p>
                  </div>
                  <div>
                    <p className='label-caps mb-0.5' style={{ color: 'var(--text-muted)' }}>
                      Legal basis
                    </p>
                    <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>
                      {pathway.legalBasis}
                    </p>
                  </div>
                </div>

                <div
                  className='flex items-center gap-4 mt-auto'
                  style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}
                >
                  <Link
                    href={`/${pathway.slug}`}
                    className='no-underline inline-flex items-center gap-1.5 text-sm font-semibold'
                    style={{ color: 'var(--amber-dark)' }}
                  >
                    Read the guide <ArrowRight size={13} />
                  </Link>
                  <Link
                    href={pathway.checklistHref}
                    className='no-underline inline-flex items-center gap-1.5 text-sm font-medium'
                    style={{ color: 'var(--green)' }}
                  >
                    Checklist
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What our guides cover */}
      <section className='container-page py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          <div>
            <p className='label-caps mb-2' style={{ color: 'var(--text-muted)' }}>
              What you get
            </p>
            <h2
              className='heading-section text-2xl md:text-3xl mb-4'
              style={{ color: 'var(--text-primary)' }}
            >
              Every guide includes the same depth.
            </h2>
            <p
              className='text-base leading-relaxed mb-8'
              style={{ color: 'var(--text-secondary)', maxWidth: '48ch' }}
            >
              We don&apos;t write generic overviews. Each pathway guide gives you the complete picture — verifiable, specific, and actionable.
            </p>

            <div className='space-y-4'>
              {[
                {
                  title: 'Full document checklists',
                  body: 'Every document required, with certified copy counts, validity periods, and where to obtain each one.',
                },
                {
                  title: 'Exact costs in ZAR',
                  body: 'VFS Global fees, DHA fees, medical costs, SAQA evaluation fees — all itemised with current amounts.',
                },
                {
                  title: 'Where to get each document',
                  body: 'Physical addresses, phone numbers, websites, and hours of operation for every relevant authority.',
                },
                {
                  title: 'Realistic timelines',
                  body: 'Honest processing estimates based on DHA backlogs — not optimistic government website figures.',
                },
                {
                  title: 'Legal basis cited',
                  body: 'Every guide references the exact section of the Immigration Act and relevant regulations.',
                },
              ].map((item) => (
                <div key={item.title} className='flex items-start gap-3'>
                  <CheckCircle
                    size={16}
                    style={{ color: 'var(--green)', marginTop: 3, flexShrink: 0 }}
                  />
                  <div>
                    <p
                      className='text-sm font-semibold m-0'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </p>
                    <p className='text-sm m-0' style={{ color: 'var(--text-secondary)' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive checklist feature */}
          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '28px',
            }}
          >
            <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
              Interactive checklists
            </p>
            <p
              className='heading-section text-xl mb-3'
              style={{ color: 'var(--text-primary)' }}
            >
              Track your documents as you go.
            </p>
            <p
              className='text-sm leading-relaxed mb-6'
              style={{ color: 'var(--text-secondary)' }}
            >
              Every guide comes with an interactive checklist. Tick off documents as you collect them — your progress is saved in your browser so you can pick up where you left off.
            </p>

            <div className='space-y-3'>
              {[
                { label: 'Valid passport (all pages)', done: true },
                { label: 'SAQA foreign qualification evaluation', done: true },
                { label: 'Medical certificate (BI-811)', done: false },
                { label: 'SA Police Clearance Certificate', done: false },
                { label: 'Professional body registration', done: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className='flex items-center gap-3'
                  style={{
                    backgroundColor: 'var(--background)',
                    border: `1px solid ${item.done ? 'var(--green-light)' : 'var(--border)'}`,
                    borderRadius: 8,
                    padding: '10px 14px',
                    opacity: item.done ? 0.75 : 1,
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      backgroundColor: item.done ? 'var(--green)' : 'var(--border)',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className='text-sm m-0'
                    style={{
                      color: item.done ? 'var(--text-muted)' : 'var(--text-primary)',
                      textDecoration: item.done ? 'line-through' : 'none',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href='/critical-skills/checklist'
              className='no-underline inline-flex items-center gap-2 font-semibold mt-6 text-sm'
              style={{ color: 'var(--amber-dark)' }}
            >
              Try the Critical Skills checklist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, oklch(44% 0.09 155) 0%, oklch(34% 0.08 155) 100%)`,
        }}
        className='py-16 md:py-20'
      >
        <div className='container-narrow text-center'>
          <p
            className='label-caps mb-4'
            style={{ color: 'oklch(75% 0.07 155)' }}
          >
            Applying for citizenship?
          </p>
          <h2
            className='heading-display text-3xl md:text-4xl mb-5 text-balance'
            style={{ color: 'oklch(97% 0.004 155)' }}
          >
            Already a permanent resident? We have the citizenship guide covered.
          </h2>
          <p
            className='text-base leading-relaxed mb-8 mx-auto'
            style={{ color: 'oklch(82% 0.05 155)', maxWidth: '44ch' }}
          >
            Our original and most detailed guide. Every document, every DHA office, every form — plus an application assistant to pre-fill your DHA forms.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href='/guide'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--amber)',
                color: 'oklch(18% 0.012 75)',
                padding: '13px 32px',
                borderRadius: 10,
                fontSize: '0.9375rem',
              }}
            >
              Citizenship guide <ArrowRight size={16} />
            </Link>
            <Link
              href='/apply'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'transparent',
                color: 'oklch(90% 0.04 155)',
                padding: '13px 32px',
                borderRadius: 10,
                fontSize: '0.9375rem',
                border: '1px solid oklch(65% 0.07 155)',
              }}
            >
              Application assistant
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className='container-page py-6'>
        <p
          className='text-xs text-center'
          style={{ color: 'var(--text-muted)' }}
        >
          This site is for informational purposes only and is not legal advice. Always verify current requirements directly with the Department of Home Affairs and VFS Global before submitting any application. Immigration requirements, fees, and processing times change — confirm before applying.
        </p>
      </section>
    </>
  );
}
