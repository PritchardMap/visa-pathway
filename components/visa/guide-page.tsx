import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import type { VisaGuideData, VisaTypeId } from '@/lib/visa-types';
import { ALL_PATHWAYS, getRelatedPathways } from '@/lib/pathways';
import LinkifyText from '@/lib/linkify';

interface Props {
  data: VisaGuideData;
}

export function VisaGuidePage({ data }: Props) {
  const otherPathways = ALL_PATHWAYS.filter((p) => p.id !== data.id);
  const relatedPathways = getRelatedPathways(data.id as VisaTypeId);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to apply for the ${data.name} in South Africa`,
    description: data.summaryDescription,
    step: data.phases.map((phase) => ({
      '@type': 'HowToStep',
      name: phase.title,
      text: phase.summary,
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
        }}
        className='py-12 md:py-16'
      >
        <div className='container-page'>
          <nav
            className='flex items-center gap-2 mb-5 text-sm'
            style={{ color: 'var(--text-muted)' }}
          >
            <Link
              href='/'
              className='no-underline hover:underline'
              style={{ color: 'var(--text-muted)' }}
            >
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/${data.slug}`}
              className='no-underline hover:underline'
              style={{ color: 'var(--text-muted)' }}
            >
              {data.shortName}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-secondary)' }}>Guide</span>
          </nav>
          <div className='flex flex-wrap items-center gap-2 mb-5'>
            <span className='label-caps shrink-0' style={{ color: 'var(--text-muted)' }}>
              Other pathways:
            </span>
            {otherPathways.map((p) => (
              <Link
                key={p.id}
                href={p.guideHref}
                className='no-underline text-xs font-medium whitespace-nowrap'
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-secondary)',
                  padding: '4px 10px',
                  borderRadius: 20,
                  border: '1px solid var(--border)',
                }}
              >
                {p.icon} {p.shortName}
              </Link>
            ))}
          </div>

          <p className='label-caps mb-3' style={{ color: 'var(--amber-dark)' }}>
            {data.legalBasis}
          </p>
          <h1
            className='heading-display text-3xl md:text-4xl mb-4 text-balance'
            style={{ color: 'var(--text-primary)' }}
          >
            {data.name}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '56ch' }}>
            {data.summaryDescription}
          </p>

          <div className='flex flex-wrap gap-6 mt-8'>
            {[
              { label: 'Processing time', value: data.processingTime },
              { label: 'Validity', value: data.validity },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className='label-caps mb-1' style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                <p className='font-semibold text-sm' style={{ color: 'var(--text-primary)' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {data.eligibility.length > 0 && (
            <div className='flex flex-wrap items-center gap-2 mt-6'>
              <span className='label-caps shrink-0' style={{ color: 'var(--text-muted)' }}>
                You qualify if:
              </span>
              {data.eligibility.slice(0, 3).map((c) => (
                <span
                  key={c.id}
                  className='text-xs font-medium'
                  style={{
                    backgroundColor: 'var(--green-subtle)',
                    color: 'var(--green-dark)',
                    padding: '4px 10px',
                    borderRadius: 20,
                  }}
                >
                  {c.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='container-page py-12 md:py-16'>
        {/* Quick nav */}
        <nav
          style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '20px 24px',
          }}
          className='mb-12'
        >
          <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
            Jump to section
          </p>
          <div className='flex flex-wrap gap-3'>
            {[
              { href: '#eligibility', label: 'Eligibility' },
              { href: '#documents', label: 'Documents' },
              { href: '#process', label: 'Process' },
              { href: '#costs', label: 'Costs' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className='no-underline text-sm font-medium'
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                  padding: '6px 14px',
                  borderRadius: 6,
                  border: '1px solid var(--border)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Alert */}
        {data.alertMessage && (
          <div
            style={{
              backgroundColor: 'var(--amber-subtle)',
              borderRadius: 10,
              padding: '14px 18px',
              marginBottom: 40,
              display: 'flex',
              gap: 12,
            }}
          >
            <AlertCircle
              size={18}
              style={{ color: 'var(--amber-dark)', flexShrink: 0, marginTop: 2 }}
            />
            <p className='text-sm m-0' style={{ color: 'var(--amber-dark)' }}>
              <LinkifyText text={data.alertMessage} />
            </p>
          </div>
        )}

        {/* Eligibility */}
        <section id='eligibility' className='mb-16 scroll-mt-24'>
          <div className='flex items-center gap-3 mb-2'>
            <span
              className='heading-display text-5xl leading-none'
              style={{ color: 'var(--amber-light)' }}
            >
              01
            </span>
            <div>
              <p className='label-caps' style={{ color: 'var(--text-muted)' }}>
                Phase one
              </p>
              <h2 className='heading-section text-2xl' style={{ color: 'var(--text-primary)' }}>
                Check Your Eligibility
              </h2>
            </div>
          </div>
          <p
            className='text-base mb-8'
            style={{ color: 'var(--text-secondary)', maxWidth: '60ch' }}
          >
            Confirm you meet all the requirements below before gathering any documents. A missing eligibility criterion means a refused application.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {data.eligibility.map((criterion) => (
              <div
                key={criterion.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '20px 24px',
                }}
              >
                <div className='flex items-start gap-3 mb-3'>
                  <CheckCircle
                    size={18}
                    style={{ color: 'var(--green)', marginTop: 2, flexShrink: 0 }}
                  />
                  <h3
                    className='font-semibold text-base m-0'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {criterion.title}
                  </h3>
                </div>
                <p
                  className='text-sm leading-relaxed m-0 mb-3'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <LinkifyText text={criterion.description} />
                </p>
                <div
                  style={{
                    backgroundColor: 'var(--amber-subtle)',
                    borderRadius: 8,
                    padding: '10px 14px',
                  }}
                >
                  <p className='text-xs m-0' style={{ color: 'var(--amber-dark)' }}>
                    <strong>Tip:</strong> {criterion.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section id='documents' className='mb-16 scroll-mt-24'>
          <div className='flex items-center gap-3 mb-2'>
            <span
              className='heading-display text-5xl leading-none'
              style={{ color: 'var(--amber-light)' }}
            >
              02
            </span>
            <div>
              <p className='label-caps' style={{ color: 'var(--text-muted)' }}>
                Phase two
              </p>
              <h2 className='heading-section text-2xl' style={{ color: 'var(--text-primary)' }}>
                Gather Your Documents
              </h2>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'var(--amber-subtle)',
              borderRadius: 10,
              padding: '14px 18px',
              marginBottom: 32,
              display: 'flex',
              gap: 12,
            }}
          >
            <AlertCircle
              size={18}
              style={{ color: 'var(--amber-dark)', flexShrink: 0, marginTop: 2 }}
            />
            <p className='text-sm m-0' style={{ color: 'var(--amber-dark)' }}>
              <strong>Start with the longest lead times.</strong> Police clearances and foreign qualification evaluations typically take the longest. Begin those immediately.
            </p>
          </div>

          <div className='space-y-6'>
            {data.documents.map((doc, index) => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  overflow: 'hidden',
                }}
              >
                {/* Document header */}
                <div
                  style={{
                    padding: '20px 24px 16px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className='flex items-start justify-between gap-4 mb-2'>
                    <div className='flex items-start gap-3'>
                      <span
                        className='label-caps tabular-nums'
                        style={{
                          color: 'var(--amber-dark)',
                          backgroundColor: 'var(--amber-subtle)',
                          padding: '3px 8px',
                          borderRadius: 4,
                          marginTop: 2,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3
                          className='font-semibold text-base'
                          style={{ color: 'var(--text-primary)', marginBottom: 2 }}
                        >
                          {doc.title}
                          {doc.optional && (
                            <span
                              className='text-xs font-normal ml-2'
                              style={{
                                color: 'var(--text-muted)',
                                backgroundColor: 'var(--surface-2)',
                                padding: '2px 8px',
                                borderRadius: 4,
                              }}
                            >
                              {doc.conditionalOn}
                            </span>
                          )}
                        </h3>
                        <p className='text-sm m-0' style={{ color: 'var(--text-secondary)' }}>
                          <LinkifyText text={doc.description} />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-4 mt-4'>
                    <div className='flex items-center gap-2'>
                      <FileText size={14} style={{ color: 'var(--text-muted)' }} />
                      <span className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                        {doc.copies}
                      </span>
                    </div>
                    {doc.cost && (
                      <div className='flex items-center gap-2'>
                        <span className='label-caps' style={{ color: 'var(--green-dark)' }}>
                          Cost:
                        </span>
                        <span
                          className='text-sm font-semibold'
                          style={{ color: 'var(--green-dark)' }}
                        >
                          {doc.cost}
                        </span>
                      </div>
                    )}
                    {doc.validity && (
                      <div className='flex items-center gap-2'>
                        <Clock size={14} style={{ color: 'var(--text-muted)' }} />
                        <span className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                          Valid for: {doc.validity}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Locations */}
                <div style={{ padding: '16px 24px', backgroundColor: 'var(--surface)' }}>
                  <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>
                    Where to get it
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {doc.where.map((location) => (
                      <div
                        key={location.name}
                        style={{
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border)',
                          borderRadius: 10,
                          padding: '14px 16px',
                        }}
                      >
                        <p
                          className='font-semibold text-sm mb-2'
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {location.name}
                        </p>
                        {location.address && (
                          <div className='flex items-start gap-2 mb-1'>
                            <MapPin
                              size={12}
                              style={{ color: 'var(--text-muted)', marginTop: 2, flexShrink: 0 }}
                            />
                            <span className='text-xs' style={{ color: 'var(--text-secondary)' }}>
                              {location.address}
                              {location.city && `, ${location.city}`}
                            </span>
                          </div>
                        )}
                        {location.phone && (
                          <div className='flex items-center gap-2 mb-1'>
                            <Phone size={12} style={{ color: 'var(--text-muted)' }} />
                            <a
                              href={`tel:${location.phone}`}
                              className='text-xs no-underline hover:underline'
                              style={{ color: 'var(--amber-dark)' }}
                            >
                              {location.phone}
                            </a>
                          </div>
                        )}
                        {location.email && (
                          <div className='flex items-center gap-2 mb-1'>
                            <Mail size={12} style={{ color: 'var(--text-muted)' }} />
                            <a
                              href={`mailto:${location.email}`}
                              className='text-xs no-underline hover:underline'
                              style={{ color: 'var(--amber-dark)' }}
                            >
                              {location.email}
                            </a>
                          </div>
                        )}
                        {location.website && (
                          <div className='flex items-center gap-2 mb-1'>
                            <Globe size={12} style={{ color: 'var(--text-muted)' }} />
                            <a
                              href={location.website}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-xs no-underline hover:underline'
                              style={{ color: 'var(--amber-dark)' }}
                            >
                              Visit website ↗
                            </a>
                          </div>
                        )}
                        {location.hours && (
                          <div className='flex items-center gap-2 mb-1'>
                            <Clock size={12} style={{ color: 'var(--text-muted)' }} />
                            <span className='text-xs' style={{ color: 'var(--text-muted)' }}>
                              {location.hours}
                            </span>
                          </div>
                        )}
                        {location.notes && (
                          <p
                            className='text-xs mt-2 m-0'
                            style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}
                          >
                            <LinkifyText text={location.notes} />
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                {doc.tips.length > 0 && (
                  <div style={{ padding: '14px 24px 18px' }}>
                    <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>
                      Tips
                    </p>
                    <ul className='space-y-2 list-none m-0 p-0'>
                      {doc.tips.map((tip) => (
                        <li key={tip} className='flex items-start gap-2'>
                          <ArrowRight
                            size={12}
                            style={{ color: 'var(--amber)', marginTop: 4, flexShrink: 0 }}
                          />
                          <span className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                            <LinkifyText text={tip} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Process phases */}
        <section id='process' className='mb-16 scroll-mt-24'>
          <div className='flex items-center gap-3 mb-2'>
            <span
              className='heading-display text-5xl leading-none'
              style={{ color: 'var(--amber-light)' }}
            >
              03
            </span>
            <div>
              <p className='label-caps' style={{ color: 'var(--text-muted)' }}>
                Phase three
              </p>
              <h2 className='heading-section text-2xl' style={{ color: 'var(--text-primary)' }}>
                The Application Process
              </h2>
            </div>
          </div>
          <p
            className='text-base mb-8'
            style={{ color: 'var(--text-secondary)', maxWidth: '60ch' }}
          >
            Follow these steps from eligibility check through to receiving your visa or permit.
          </p>

          <div className='space-y-4'>
            {data.phases.map((phase) => (
              <div
                key={phase.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '24px',
                }}
              >
                <div className='flex items-start gap-4 mb-3'>
                  <span
                    className='heading-display text-4xl tabular-nums leading-none shrink-0'
                    style={{ color: 'var(--amber-light)', lineHeight: 1 }}
                  >
                    {String(phase.number).padStart(2, '0')}
                  </span>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-1'>
                      <h3
                        className='font-semibold text-base m-0'
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {phase.title}
                      </h3>
                      <span className='label-caps' style={{ color: 'var(--text-muted)' }}>
                        {phase.estimatedTime}
                      </span>
                    </div>
                    <p className='text-sm m-0' style={{ color: 'var(--text-secondary)' }}>
                      {phase.summary}
                    </p>
                  </div>
                </div>

                {phase.steps && phase.steps.length > 0 && (
                  <ul className='space-y-2 list-none m-0 p-0 mt-4'>
                    {phase.steps.map((step, i) => (
                      <li key={step} className='flex items-start gap-3'>
                        <span
                          className='label-caps tabular-nums shrink-0'
                          style={{
                            color: 'var(--background)',
                            backgroundColor: 'var(--amber)',
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.65rem',
                          }}
                        >
                          {i + 1}
                        </span>
                        <span
                          className='text-sm pt-0.5'
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <LinkifyText text={step} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          {data.applyHref && (
            <div
              style={{
                backgroundColor: 'var(--green-subtle)',
                border: '1px solid var(--green-light)',
                borderRadius: 12,
                padding: '20px 24px',
                marginTop: 24,
              }}
            >
              <div className='flex items-start gap-3'>
                <ExternalLink
                  size={18}
                  style={{ color: 'var(--green-dark)', flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p
                    className='font-semibold text-sm mb-1'
                    style={{ color: 'var(--green-dark)' }}
                  >
                    Book your VFS Global appointment
                  </p>
                  <p className='text-sm m-0 mb-3' style={{ color: 'var(--green-dark)' }}>
                    Applications are submitted through VFS Global South Africa. Book your appointment and upload your documents online.
                  </p>
                  <a
                    href={data.applyHref}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='no-underline inline-flex items-center gap-2 font-semibold text-sm'
                    style={{ color: 'var(--green-dark)' }}
                  >
                    Visit VFS Global SA <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Costs */}
        <section id='costs' className='scroll-mt-24'>
          <p className='label-caps mb-2' style={{ color: 'var(--text-muted)' }}>
            Summary
          </p>
          <h2
            className='heading-section text-2xl mb-6'
            style={{ color: 'var(--text-primary)' }}
          >
            Cost overview
          </h2>

          <div
            style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              overflow: 'hidden',
            }}
          >
            <table className='w-full' style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--surface)' }}>
                  <th
                    className='text-left label-caps py-3 px-6'
                    style={{ color: 'var(--text-muted)', fontWeight: 700 }}
                  >
                    Item
                  </th>
                  <th
                    className='text-right label-caps py-3 px-6'
                    style={{ color: 'var(--text-muted)', fontWeight: 700 }}
                  >
                    Amount
                  </th>
                  <th
                    className='text-left label-caps py-3 px-6 hidden md:table-cell'
                    style={{ color: 'var(--text-muted)', fontWeight: 700 }}
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.fees.map((fee, i) => (
                  <tr
                    key={fee.item}
                    style={{
                      borderTop: i > 0 ? '1px solid var(--border-subtle)' : undefined,
                    }}
                  >
                    <td className='py-3 px-6'>
                      <span
                        className='text-sm font-medium'
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {fee.item}
                      </span>
                    </td>
                    <td className='py-3 px-6 text-right'>
                      <span
                        className='text-sm font-bold tabular-nums'
                        style={{ color: 'var(--amber-dark)' }}
                      >
                        {fee.amount}
                      </span>
                    </td>
                    <td className='py-3 px-6 hidden md:table-cell'>
                      <span className='text-xs' style={{ color: 'var(--text-muted)' }}>
                        {fee.notes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className='text-xs mt-4' style={{ color: 'var(--text-muted)' }}>
            All fees are estimates and subject to change. Verify current amounts directly with VFS Global, DHA, and relevant authorities before submitting your application.
          </p>
        </section>
      </div>

      {/* Source note */}
      <div style={{ borderTop: '1px solid var(--border)' }} className='py-4'>
        <div className='container-page'>
          <p className='text-xs' style={{ color: 'var(--text-muted)' }}>
            <LinkifyText text={data.sourceNote} />
          </p>
        </div>
      </div>

      {/* Related pathways */}
      {relatedPathways.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className='container-page py-10'>
            <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
              Explore related pathways
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {relatedPathways.map((p) => (
                <div
                  key={p.id}
                  style={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '18px 20px',
                  }}
                >
                  <p className='text-lg mb-2' style={{ lineHeight: 1 }}>
                    {p.icon}
                  </p>
                  <p className='font-semibold text-sm mb-1' style={{ color: 'var(--text-primary)' }}>
                    {p.shortName}
                  </p>
                  <p className='text-xs mb-3' style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {p.tagline}
                  </p>
                  <div className='flex items-center gap-4'>
                    <Link
                      href={p.guideHref}
                      className='no-underline text-xs font-semibold'
                      style={{ color: 'var(--amber-dark)' }}
                    >
                      Read guide →
                    </Link>
                    <Link
                      href={p.checklistHref}
                      className='no-underline text-xs font-medium'
                      style={{ color: 'var(--green-dark)' }}
                    >
                      Checklist →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
        }}
      >
        <div className='container-page py-10'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
            <div>
              <p className='font-semibold' style={{ color: 'var(--text-primary)' }}>
                Ready to start your application?
              </p>
              <p className='text-sm m-0' style={{ color: 'var(--text-muted)' }}>
                Use the checklist to track documents, or the Application Assistant to pre-fill your DHA forms.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0'>
              <Link
                href={`/${data.slug}/checklist`}
                className='no-underline inline-flex items-center justify-center gap-2 font-semibold'
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-primary)',
                  padding: '11px 22px',
                  borderRadius: 10,
                  fontSize: '0.9375rem',
                  border: '1px solid var(--border)',
                }}
              >
                Open Checklist
              </Link>
              <Link
                href={`/apply?type=${data.id}`}
                className='no-underline inline-flex items-center justify-center gap-2 font-semibold'
                style={{
                  backgroundColor: 'var(--amber)',
                  color: 'var(--background)',
                  padding: '12px 22px',
                  borderRadius: 10,
                  fontSize: '0.9375rem',
                }}
              >
                Application Assistant <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
