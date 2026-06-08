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
} from 'lucide-react';
import {
  APPLICATION_PHASES,
  REQUIRED_DOCUMENTS,
  APPLICATION_FORMS,
  ELIGIBILITY_CRITERIA,
  FEES_SUMMARY,
  type DocumentLocation,
} from '@/lib/citizenship-data';
import { ALL_PATHWAYS, getRelatedPathways } from '@/lib/pathways';
import LinkifyText from '@/lib/linkify';
import type { Metadata } from 'next';
import { NationalitySelector } from '@/components/guide/nationality-selector';
import {
  getNationality,
  DUAL_CITIZENSHIP_STATUS_LABELS,
  type NationalityData,
} from '@/lib/nationality-data';
import { COUNTRIES } from '@/lib/countries';

export const metadata: Metadata = {
  title: 'Citizenship by Naturalisation Guide',
  description:
    'Complete guide to South African citizenship by naturalisation — eligibility criteria, required documents, DHA forms, costs, and where to submit your application.',
  keywords: [
    'South African citizenship by naturalisation',
    'how to apply for South African citizenship',
    'citizenship naturalisation requirements',
    'DHA citizenship application',
    'South African Citizenship Act',
    'permanent resident citizenship',
    'BI-9 form',
    'DHA-529',
  ],
  openGraph: {
    title: 'Citizenship by Naturalisation Guide — South Africa',
    description:
      'Complete guide to South African citizenship by naturalisation — eligibility, documents, DHA forms, costs, and submission.',
    url: '/guide',
    type: 'article',
  },
  twitter: {
    title: 'Citizenship by Naturalisation Guide — South Africa',
    description:
      'Complete guide to South African citizenship by naturalisation — eligibility, documents, DHA forms, costs, and submission.',
  },
};

// Returns nationality-specific "where to get it" locations for the 3 documents
// that depend on your home country. Returns null for all other documents or
// when no nationality / Zimbabwe is selected (Zimbabwe is already covered
// in the hardcoded data).
function nationalityLocations(
  docId: string,
  nationality: NationalityData | null,
): DocumentLocation[] | null {
  if (!nationality || nationality.code === 'ZW') return null;

  const natDependentDocs = [
    'birth-certificate',
    'home-country-police-clearance',
    'dual-citizenship-letter',
  ];
  if (!natDependentDocs.includes(docId)) return null;

  const noteByDoc: Record<string, string> = {
    'birth-certificate': `Contact the ${nationality.name} Embassy or High Commission for guidance on obtaining your unabridged birth certificate.`,
    'home-country-police-clearance': `Contact the ${nationality.name} Embassy or High Commission for guidance on obtaining a police clearance certificate.`,
    'dual-citizenship-letter': `Contact the ${nationality.name} Embassy or High Commission to request the official letter confirming their dual citizenship position — DHA requires this letter regardless of whether dual citizenship is permitted or not.`,
  };

  const locations: DocumentLocation[] = [];

  if (nationality.embassy) {
    locations.push({
      name: nationality.embassy.name,
      address: nationality.embassy.address,
      city: nationality.embassy.city,
      phone: nationality.embassy.phone,
      email: nationality.embassy.email,
      website: nationality.embassy.website,
      hours: nationality.embassy.hours,
      notes: noteByDoc[docId],
    });
  } else {
    locations.push({
      name: `${nationality.name} Embassy or High Commission in South Africa`,
      notes: `${noteByDoc[docId]} Use the DIRCO link below to find their contact details.`,
    });
  }

  locations.push({
    name: 'Find your embassy in South Africa',
    website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
    notes:
      'Full directory of all foreign missions in South Africa — DIRCO website.',
  });

  return locations;
}

export default async function GuidePage({
  searchParams,
}: {
  searchParams: Promise<{ nationality?: string }>;
}) {
  const { nationality: nationalityCode } = await searchParams;
  const nationalityData = nationalityCode
    ? (getNationality(nationalityCode) ?? null)
    : null;

  // For countries not in our 33, synthesise a generic NationalityData so the
  // guide still personalises (embassy referral + unknown dual-citizenship status).
  const effectiveNationality: NationalityData | null = nationalityData ?? (() => {
    if (!nationalityCode) return null;
    const country = COUNTRIES.find((c) => c.iso2 === nationalityCode);
    if (!country) return null;
    return {
      code: nationalityCode,
      name: country.name,
      dualCitizenshipStatus: 'unknown' as const,
      dualCitizenshipNote: `We don't have specific dual citizenship information for ${country.name}. Contact your country's Embassy or High Commission in South Africa for guidance on their dual citizenship position — you'll need an official letter from them for your DHA application regardless of the answer.`,
    };
  })();

  const otherPathways = ALL_PATHWAYS.filter((p) => p.id !== 'citizenship');
  const relatedPathways = getRelatedPathways('citizenship');

  // Fees row for dual citizenship letter is nationality-specific
  const fees = FEES_SUMMARY.map((fee) => {
    if (
      fee.item === 'Zimbabwe Citizenship Confirmation Letter' &&
      effectiveNationality &&
      effectiveNationality.code !== 'ZW'
    ) {
      return {
        item: 'Dual Citizenship Confirmation Letter',
        amount: 'Varies',
        notes: `Contact the ${effectiveNationality.name} Embassy or High Commission — fees vary by embassy`,
      };
    }
    return fee;
  });

  return (
    <>
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
            Complete guide
          </p>
          <h1
            className='heading-display text-3xl md:text-4xl mb-4 text-balance'
            style={{ color: 'var(--text-primary)' }}
          >
            Citizenship by Naturalisation
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '56ch' }}>
            Everything you need to know — from checking eligibility to attending
            the citizenship ceremony. Documents, costs, locations, and forms.
          </p>
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
          className='mb-6'
        >
          <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
            Jump to section
          </p>
          <div className='flex flex-wrap gap-3'>
            {[
              { href: '#eligibility', label: 'Eligibility' },
              { href: '#documents', label: 'Documents' },
              { href: '#forms', label: 'DHA Forms' },
              { href: '#submission', label: 'Submission' },
              { href: '#costs', label: 'Costs' },
              { href: '/checklist', label: '✓ Checklist' },
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

        {/* Nationality selector */}
        <NationalitySelector current={effectiveNationality} />

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
              <h2
                className='heading-section text-2xl'
                style={{ color: 'var(--text-primary)' }}
              >
                Check Your Eligibility
              </h2>
            </div>
          </div>
          <p
            className='text-base mb-8'
            style={{ color: 'var(--text-secondary)', maxWidth: '60ch' }}
          >
            Before gathering a single document, confirm you meet all five
            criteria below. Missing any one of these will result in a rejected
            application.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {ELIGIBILITY_CRITERIA.map((criterion) => {
              const isDualCit = criterion.id === 'dual-citizenship';
              const tipText =
                isDualCit && effectiveNationality
                  ? effectiveNationality.dualCitizenshipNote
                  : criterion.tip;
              const statusMeta =
                isDualCit && effectiveNationality
                  ? DUAL_CITIZENSHIP_STATUS_LABELS[
                      effectiveNationality.dualCitizenshipStatus
                    ]
                  : null;

              return (
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
                      style={{
                        color: 'var(--green)',
                        marginTop: 2,
                        flexShrink: 0,
                      }}
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
                    {criterion.description}
                  </p>
                  <div
                    style={{
                      backgroundColor: statusMeta
                        ? statusMeta.bg
                        : 'var(--amber-subtle)',
                      borderRadius: 8,
                      padding: '10px 14px',
                    }}
                  >
                    {statusMeta && (
                      <p
                        className='text-xs font-semibold m-0 mb-1'
                        style={{ color: statusMeta.colour }}
                      >
                        {statusMeta.label}
                      </p>
                    )}
                    <p
                      className='text-xs m-0'
                      style={{
                        color: statusMeta
                          ? statusMeta.colour
                          : 'var(--amber-dark)',
                      }}
                    >
                      {!statusMeta && <strong>Tip: </strong>}
                      {tipText}
                    </p>
                  </div>
                </div>
              );
            })}
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
              <h2
                className='heading-section text-2xl'
                style={{ color: 'var(--text-primary)' }}
              >
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
              style={{
                color: 'var(--amber-dark)',
                flexShrink: 0,
                marginTop: 2,
              }}
            />
            <p className='text-sm m-0' style={{ color: 'var(--amber-dark)' }}>
              <strong>Start with the longest lead times.</strong> The SA police
              clearance takes 4–8 weeks. Foreign documents and embassy letters
              can take even longer. Begin those first.
            </p>
          </div>

          <div className='space-y-6'>
            {REQUIRED_DOCUMENTS.map((doc, index) => {
              const locations =
                nationalityLocations(doc.id, effectiveNationality) ?? doc.where;

              return (
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
                            style={{
                              color: 'var(--text-primary)',
                              marginBottom: 2,
                            }}
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
                          <p
                            className='text-sm m-0'
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-4 mt-4'>
                      <div className='flex items-center gap-2'>
                        <FileText
                          size={14}
                          style={{ color: 'var(--text-muted)' }}
                        />
                        <span
                          className='text-sm'
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {doc.copies}
                        </span>
                      </div>
                      {doc.cost && (
                        <div className='flex items-center gap-2'>
                          <span
                            className='label-caps'
                            style={{ color: 'var(--green-dark)' }}
                          >
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
                          <Clock
                            size={14}
                            style={{ color: 'var(--text-muted)' }}
                          />
                          <span
                            className='text-sm'
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            Valid for: {doc.validity}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Locations */}
                  <div
                    style={{
                      padding: '16px 24px',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    <p
                      className='label-caps mb-3'
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Where to get it
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                      {locations.map((location) => (
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
                                style={{
                                  color: 'var(--text-muted)',
                                  marginTop: 2,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                className='text-xs'
                                style={{ color: 'var(--text-secondary)' }}
                              >
                                {location.address}
                                {location.city && `, ${location.city}`}
                              </span>
                            </div>
                          )}
                          {location.phone && (
                            <div className='flex items-center gap-2 mb-1'>
                              <Phone
                                size={12}
                                style={{ color: 'var(--text-muted)' }}
                              />
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
                              <Mail
                                size={12}
                                style={{ color: 'var(--text-muted)' }}
                              />
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
                              <Globe
                                size={12}
                                style={{ color: 'var(--text-muted)' }}
                              />
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
                              <Clock
                                size={12}
                                style={{ color: 'var(--text-muted)' }}
                              />
                              <span
                                className='text-xs'
                                style={{ color: 'var(--text-muted)' }}
                              >
                                {location.hours}
                              </span>
                            </div>
                          )}
                          {location.notes && (
                            <p
                              className='text-xs mt-2 m-0'
                              style={{
                                color: 'var(--text-muted)',
                                lineHeight: 1.5,
                              }}
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
                      <p
                        className='label-caps mb-3'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Tips
                      </p>
                      <ul className='space-y-2 list-none m-0 p-0'>
                        {doc.tips.map((tip) => (
                          <li key={tip} className='flex items-start gap-2'>
                            <ArrowRight
                              size={12}
                              style={{
                                color: 'var(--amber)',
                                marginTop: 4,
                                flexShrink: 0,
                              }}
                            />
                            <span
                              className='text-sm'
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              <LinkifyText text={tip} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* DHA Forms */}
        <section id='forms' className='mb-16 scroll-mt-24'>
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
              <h2
                className='heading-section text-2xl'
                style={{ color: 'var(--text-primary)' }}
              >
                Complete the DHA Forms
              </h2>
            </div>
          </div>
          <p
            className='text-base mb-8'
            style={{ color: 'var(--text-secondary)', maxWidth: '60ch' }}
          >
            You&apos;ll need to complete several Department of Home Affairs
            forms. Download them from the official DHA website, or use our
            Application Assistant to pre-fill your details.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            {APPLICATION_FORMS.map((form) => (
              <div
                key={form.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '18px 22px',
                }}
              >
                <div className='flex items-start justify-between gap-3'>
                  <div>
                    <p
                      className='font-bold text-base mb-1'
                      style={{
                        color: 'var(--amber-dark)',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {form.title}
                    </p>
                    <p
                      className='text-sm m-0 mb-2'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {form.purpose}
                    </p>
                    {form.notes && (
                      <p
                        className='text-xs m-0'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <LinkifyText text={form.notes} />
                      </p>
                    )}
                  </div>
                  {form.downloadUrl && (
                    <a
                      href={form.downloadUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='no-underline shrink-0'
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--green-dark)',
                        fontWeight: 600,
                      }}
                    >
                      {form.id === 'saps-91a' ? 'SAPS ↗' : 'DHA ↗'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: 'var(--green-subtle)',
              border: '1px solid var(--green-light)',
              borderRadius: 12,
              padding: '20px 24px',
            }}
          >
            <div className='flex items-start gap-3'>
              <FileText
                size={18}
                style={{
                  color: 'var(--green-dark)',
                  flexShrink: 0,
                  marginTop: 2,
                }}
              />
              <div>
                <p
                  className='font-semibold text-sm mb-1'
                  style={{ color: 'var(--green-dark)' }}
                >
                  Use the Application Assistant
                </p>
                <p
                  className='text-sm m-0 mb-3'
                  style={{ color: 'var(--green-dark)' }}
                >
                  Enter your details once and we&apos;ll generate a pre-filled
                  summary document you can use to complete all your DHA forms
                  accurately and consistently.
                </p>
                <Link
                  href='/apply?type=citizenship'
                  className='no-underline inline-flex items-center gap-2 font-semibold text-sm'
                  style={{ color: 'var(--green-dark)' }}
                >
                  Start the Application Assistant <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Submission */}
        <section id='submission' className='mb-16 scroll-mt-24'>
          <div className='flex items-center gap-3 mb-2'>
            <span
              className='heading-display text-5xl leading-none'
              style={{ color: 'var(--amber-light)' }}
            >
              04
            </span>
            <div>
              <p className='label-caps' style={{ color: 'var(--text-muted)' }}>
                Phase four
              </p>
              <h2
                className='heading-section text-2xl'
                style={{ color: 'var(--text-primary)' }}
              >
                Submit Your Application
              </h2>
            </div>
          </div>
          <p
            className='text-base mb-6'
            style={{ color: 'var(--text-secondary)', maxWidth: '60ch' }}
          >
            Submit in person at any Department of Home Affairs office. Bring
            everything — all originals and certified copies — and pay the fees
            at the counter.
          </p>

          <div
            style={{
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '24px',
            }}
          >
            <div className='space-y-4'>
              {APPLICATION_PHASES[3].steps?.map((step, i) => (
                <div key={step} className='flex items-start gap-4'>
                  <span
                    className='label-caps tabular-nums shrink-0'
                    style={{
                      color: 'var(--background)',
                      backgroundColor: 'var(--amber)',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className='text-sm m-0 pt-1'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waiting + Ceremony (phases 5 & 6) */}
        <section className='mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {APPLICATION_PHASES.slice(4).map((phase) => (
              <div
                key={phase.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '24px',
                }}
              >
                <div className='flex items-start gap-3 mb-4'>
                  <span
                    className='heading-display text-4xl leading-none'
                    style={{ color: 'var(--amber-light)' }}
                  >
                    {String(phase.number).padStart(2, '0')}
                  </span>
                  <div>
                    <p
                      className='label-caps'
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {phase.estimatedTime}
                    </p>
                    <h3
                      className='heading-section text-lg'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p
                  className='text-sm leading-relaxed mb-4'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {phase.summary}
                </p>
                {phase.steps && (
                  <ul className='space-y-2 list-none m-0 p-0'>
                    {phase.steps.map((step) => (
                      <li key={step} className='flex items-start gap-2'>
                        <ChevronRight
                          size={12}
                          style={{
                            color: 'var(--amber)',
                            marginTop: 4,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          className='text-xs'
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Costs summary */}
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
                {fees.map((fee, i) => (
                  <tr
                    key={fee.item}
                    style={{
                      borderTop:
                        i > 0 ? '1px solid var(--border-subtle)' : undefined,
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
                      <span
                        className='text-xs'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {fee.notes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
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

      {/* Checklist CTA */}
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
                href='/checklist'
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
                href='/apply?type=citizenship'
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
