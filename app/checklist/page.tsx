'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Circle,
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import {
  REQUIRED_DOCUMENTS,
  APPLICATION_FORMS,
  type RequiredDocument,
} from '@/lib/citizenship-data';
import LinkifyText from '@/lib/linkify';

const STORAGE_KEY = 'pathway-sa-checklist';

const FORM_IDS = APPLICATION_FORMS.map((f) => f.id);
const ALL_IDS = [...REQUIRED_DOCUMENTS.map((d) => d.id), ...FORM_IDS];

export default function ChecklistPage() {
  // Start with an empty set on both server and initial client render
  // and hydrate from localStorage after mount to avoid hydration mismatches.
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(new Set(JSON.parse(stored)));
    } catch {}
    setMounted(true);
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const reset = () => {
    setChecked(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const docCount = REQUIRED_DOCUMENTS.length;
  const formCount = APPLICATION_FORMS.length;
  const checkedDocs = REQUIRED_DOCUMENTS.filter((d) =>
    checked.has(d.id),
  ).length;
  const checkedForms = APPLICATION_FORMS.filter((f) =>
    checked.has(f.id),
  ).length;
  const total = ALL_IDS.length;
  const totalChecked = checked.size;
  const pct = total > 0 ? Math.round((totalChecked / total) * 100) : 0;

  return (
    <div className='container-page py-12 md:py-16'>
      {/* Header */}
      <div className='max-w-[640px] mb-10'>
        <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>
          Document Checklist
        </p>
        <h1
          className='heading-display text-3xl md:text-4xl mb-4'
          style={{ color: 'var(--text-primary)' }}
        >
          Track your application progress.
        </h1>
        <p
          className='text-base leading-relaxed'
          style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}
        >
          Check each item as you collect it. Your progress is saved locally in
          your browser — no account required.
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '24px 28px',
          marginBottom: 36,
        }}
      >
        <div className='flex items-end justify-between gap-4 mb-4 flex-wrap'>
          <div>
            <p
              className='text-2xl font-bold tabular-nums'
              style={{ color: 'var(--text-primary)' }}
            >
              {pct}%{' '}
              <span
                className='text-base font-normal'
                style={{ color: 'var(--text-muted)' }}
              >
                complete
              </span>
            </p>
            <p className='text-sm mt-1' style={{ color: 'var(--text-muted)' }}>
              {totalChecked} of {total} items ready
            </p>
          </div>
          <div
            className='flex items-center gap-5 text-sm'
            style={{ color: 'var(--text-muted)' }}
          >
            <span>
              Documents:{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                {checkedDocs}/{docCount}
              </strong>
            </span>
            <span>
              Forms:{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                {checkedForms}/{formCount}
              </strong>
            </span>
            {mounted && totalChecked > 0 && (
              <button
                onClick={reset}
                className='flex items-center gap-1.5 text-xs'
                style={{
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                <RotateCcw size={12} />
                Reset
              </button>
            )}
          </div>
        </div>

        <div
          style={{
            height: 8,
            borderRadius: 99,
            backgroundColor: 'var(--border)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              borderRadius: 99,
              backgroundColor: pct === 100 ? 'var(--green)' : 'var(--amber)',
              transition: 'width 0.4s ease',
            }}
          />
        </div>

        {pct === 100 && (
          <div className='flex items-center gap-2 mt-4'>
            <CheckCircle2 size={15} style={{ color: 'var(--green)' }} />
            <p
              className='text-sm font-medium m-0'
              style={{ color: 'var(--green-dark)' }}
            >
              Everything ready — you can proceed to submit your application.
            </p>
          </div>
        )}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start'>
        <div>
          {/* Documents section */}
          <section className='mb-10'>
            <h2
              className='heading-section text-xl mb-5'
              style={{ color: 'var(--text-primary)' }}
            >
              Required Documents
            </h2>

            <div className='space-y-3'>
              {REQUIRED_DOCUMENTS.map((doc) => (
                <ChecklistDocItem
                  key={doc.id}
                  doc={doc}
                  isChecked={checked.has(doc.id)}
                  isExpanded={expanded.has(doc.id)}
                  onToggleCheck={() => toggle(doc.id)}
                  onToggleExpand={() => toggleExpanded(doc.id)}
                />
              ))}
            </div>
          </section>

          {/* Forms section */}
          <section>
            <h2
              className='heading-section text-xl mb-2'
              style={{ color: 'var(--text-primary)' }}
            >
              DHA Forms to Complete
            </h2>
            <p className='text-sm mb-5' style={{ color: 'var(--text-muted)' }}>
              Download and complete each form. Use the Application Assistant to
              pre-fill your details.
            </p>

            <div className='space-y-3'>
              {APPLICATION_FORMS.map((form) => (
                <div
                  key={form.id}
                  style={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    cursor: 'pointer',
                  }}
                  onClick={() => toggle(form.id)}
                >
                  <button
                    aria-label={checked.has(form.id) ? 'Uncheck' : 'Check'}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      flexShrink: 0,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(form.id);
                    }}
                  >
                    {checked.has(form.id) ? (
                      <CheckCircle2
                        size={22}
                        style={{ color: 'var(--green)' }}
                      />
                    ) : (
                      <Circle size={22} style={{ color: 'var(--border)' }} />
                    )}
                  </button>

                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-3 flex-wrap'>
                      <span
                        className='font-bold text-sm font-mono'
                        style={{
                          color: checked.has(form.id)
                            ? 'var(--text-muted)'
                            : 'var(--amber-dark)',
                        }}
                      >
                        {form.title}
                      </span>
                      <span
                        className='text-sm'
                        style={{
                          color: 'var(--text-secondary)',
                          textDecoration: checked.has(form.id)
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {form.purpose}
                      </span>
                    </div>
                    {form.notes && (
                      <p
                        className='text-xs mt-0.5 m-0'
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
                      onClick={(e) => e.stopPropagation()}
                      className='text-xs font-medium no-underline shrink-0'
                      style={{ color: 'var(--amber-dark)' }}
                    >
                      Download ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className='space-y-6 sticky top-24'>
          {/* Tips */}
          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '20px 22px',
            }}
          >
            <div className='flex items-center gap-2 mb-4'>
              <AlertCircle size={14} style={{ color: 'var(--amber-dark)' }} />
              <p
                className='label-caps m-0'
                style={{ color: 'var(--text-muted)' }}
              >
                Start with these
              </p>
            </div>
            <ul
              className='space-y-3 m-0 p-0 list-none text-sm'
              style={{ color: 'var(--text-secondary)' }}
            >
              {[
                'SA Police Clearance — takes 4–8 weeks',
                'Home country Police Clearance — allow several weeks',
                'Dual Citizenship Letter — book embassy appointment',
                'Unabridged Birth Certificate — may take months',
              ].map((tip) => (
                <li key={tip} className='flex items-start gap-2'>
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      backgroundColor: 'var(--amber)',
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Application assistant CTA */}
          <div
            style={{
              background:
                'linear-gradient(135deg, oklch(44% 0.09 155) 0%, oklch(34% 0.08 155) 100%)',
              borderRadius: 12,
              padding: '22px',
            }}
          >
            <p
              className='label-caps mb-2'
              style={{ color: 'oklch(75% 0.07 155)' }}
            >
              Ready to apply?
            </p>
            <p
              className='text-sm leading-relaxed mb-4'
              style={{ color: 'oklch(88% 0.05 155)' }}
            >
              Use our form assistant to pre-fill your DHA application forms in
              one go.
            </p>
            <Link
              href='/apply'
              className='no-underline inline-flex items-center gap-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--amber)',
                color: 'oklch(18% 0.012 75)',
                padding: '10px 20px',
                borderRadius: 8,
              }}
            >
              Open form assistant <ArrowRight size={14} />
            </Link>
          </div>

          {/* Guide link */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href='/guide'
              className='text-sm no-underline inline-flex items-center gap-1.5'
              style={{ color: 'var(--text-muted)' }}
            >
              Read the full step-by-step guide <ArrowRight size={13} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ChecklistDocItem({
  doc,
  isChecked,
  isExpanded,
  onToggleCheck,
  onToggleExpand,
}: {
  doc: RequiredDocument;
  isChecked: boolean;
  isExpanded: boolean;
  onToggleCheck: () => void;
  onToggleExpand: () => void;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--background)',
        border: `1px solid ${isChecked ? 'var(--green-light, #d4edda)' : 'var(--border)'}`,
        borderRadius: 10,
        overflow: 'hidden',
        opacity: isChecked ? 0.75 : 1,
        transition: 'opacity 0.2s, border-color 0.2s',
      }}
    >
      {/* Header row */}
      <div
        className='flex items-center gap-3 p-4'
        style={{ cursor: 'pointer' }}
        onClick={onToggleExpand}
      >
        <button
          aria-label={isChecked ? 'Uncheck' : 'Check'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            flexShrink: 0,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleCheck();
          }}
        >
          {isChecked ? (
            <CheckCircle2 size={22} style={{ color: 'var(--green)' }} />
          ) : (
            <Circle size={22} style={{ color: 'var(--border)' }} />
          )}
        </button>

        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 flex-wrap'>
            <p
              className='text-sm font-semibold m-0'
              style={{
                color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)',
                textDecoration: isChecked ? 'line-through' : 'none',
              }}
            >
              {doc.title}
            </p>
            {doc.optional && (
              <span
                className='label-caps'
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-muted)',
                  padding: '2px 8px',
                  borderRadius: 99,
                  fontSize: '0.625rem',
                  border: '1px solid var(--border)',
                }}
              >
                {doc.conditionalOn ?? 'Optional'}
              </span>
            )}
          </div>
          <div className='flex items-center gap-3 mt-0.5 flex-wrap'>
            <span className='text-xs' style={{ color: 'var(--text-muted)' }}>
              {doc.copies}
            </span>
            {doc.cost && (
              <span
                className='text-xs font-semibold'
                style={{ color: 'var(--amber-dark)' }}
              >
                {doc.cost}
              </span>
            )}
            {doc.validity && (
              <span className='text-xs' style={{ color: 'var(--text-muted)' }}>
                Valid for {doc.validity}
              </span>
            )}
          </div>
        </div>

        <div style={{ flexShrink: 0, color: 'var(--text-muted)' }}>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </div>
      </div>

      {/* Expanded detail */}
      {isExpanded && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: '16px 20px',
            backgroundColor: 'var(--surface)',
          }}
        >
          <p
            className='text-sm leading-relaxed mb-4'
            style={{ color: 'var(--text-secondary)' }}
          >
            {doc.description}
          </p>

          {/* Where to get it */}
          {doc.where.length > 0 && (
            <div className='mb-4'>
              <p
                className='label-caps mb-3'
                style={{ color: 'var(--text-muted)' }}
              >
                Where to get it
              </p>
              <div className='space-y-3'>
                {doc.where.map((loc, i) => (
                  <div
                    key={i}
                    className='text-sm'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <p
                      className='font-semibold m-0 mb-0.5'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {loc.name}
                    </p>
                    {loc.address && (
                      <p
                        className='flex items-start gap-1.5 m-0 text-xs'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <MapPin
                          size={11}
                          style={{ marginTop: 2, flexShrink: 0 }}
                        />
                        {loc.address}
                        {loc.city ? `, ${loc.city}` : ''}
                      </p>
                    )}
                    {loc.phone && (
                      <p
                        className='flex items-center gap-1.5 m-0 text-xs'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Phone size={11} />
                        <a
                          href={`tel:${loc.phone}`}
                          style={{ color: 'inherit' }}
                        >
                          {loc.phone}
                        </a>
                      </p>
                    )}
                    {loc.email && (
                      <p
                        className='flex items-center gap-1.5 m-0 text-xs'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Mail size={11} />
                        <a
                          href={`mailto:${loc.email}`}
                          style={{ color: 'inherit' }}
                        >
                          {loc.email}
                        </a>
                      </p>
                    )}
                    {loc.website && (
                      <p
                        className='flex items-center gap-1.5 m-0 text-xs'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Globe size={11} />
                        <a
                          href={loc.website}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{ color: 'var(--amber-dark)' }}
                        >
                          Visit website ↗
                        </a>
                      </p>
                    )}
                    {loc.notes && (
                      <p
                        className='text-xs mt-1 m-0'
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {loc.notes}
                      </p>
                    )}
                    {loc.hours && (
                      <p
                        className='text-xs mt-0.5 m-0'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {loc.hours}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {doc.tips.length > 0 && (
            <div>
              <p
                className='label-caps mb-2'
                style={{ color: 'var(--text-muted)' }}
              >
                Tips
              </p>
              <ul className='m-0 p-0 list-none space-y-1.5'>
                {doc.tips.map((tip) => (
                  <li
                    key={tip}
                    className='flex items-start gap-2 text-xs'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        backgroundColor: 'var(--amber)',
                        marginTop: 5,
                        flexShrink: 0,
                      }}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
