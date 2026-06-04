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
  Clock,
} from 'lucide-react';
import type { VisaGuideData } from '@/lib/visa-types';
import LinkifyText from '@/lib/linkify';

interface Props {
  data: VisaGuideData;
}

export function VisaChecklistPage({ data }: Props) {
  const STORAGE_KEY = `pathway-checklist-${data.id}`;
  const ALL_IDS = data.documents.map((d) => d.id);

  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(new Set(JSON.parse(stored)));
    } catch {}
    setMounted(true);
  }, [STORAGE_KEY]);

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

  const resetAll = () => {
    setChecked(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const checkedCount = mounted ? checked.size : 0;
  const totalCount = ALL_IDS.length;
  const progressPct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

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
            <Link
              href={`/${data.slug}`}
              className='no-underline hover:underline'
              style={{ color: 'var(--text-muted)' }}
            >
              {data.shortName}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-secondary)' }}>Checklist</span>
          </nav>
          <p className='label-caps mb-3' style={{ color: 'var(--amber-dark)' }}>
            {data.name}
          </p>
          <h1
            className='heading-display text-3xl md:text-4xl mb-4 text-balance'
            style={{ color: 'var(--text-primary)' }}
          >
            Document Checklist
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '50ch' }}>
            Track every document you need. Your progress is saved locally — come back any time.
          </p>
        </div>
      </div>

      <div className='container-page py-10 md:py-14'>
        {/* Progress bar */}
        <div
          style={{
            backgroundColor: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '24px',
            marginBottom: 32,
          }}
        >
          <div className='flex items-center justify-between mb-3'>
            <p className='font-semibold text-base m-0' style={{ color: 'var(--text-primary)' }}>
              Your progress
            </p>
            <div className='flex items-center gap-3'>
              <span
                className='label-caps tabular-nums'
                style={{ color: 'var(--text-muted)' }}
              >
                {mounted ? checkedCount : 0} / {totalCount} documents
              </span>
              <button
                onClick={resetAll}
                className='flex items-center gap-1 text-xs font-medium'
                style={{
                  color: 'var(--text-muted)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: 6,
                }}
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>
          </div>
          <div
            style={{
              height: 8,
              backgroundColor: 'var(--border)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${mounted ? progressPct : 0}%`,
                backgroundColor: progressPct === 100 ? 'var(--green)' : 'var(--amber)',
                borderRadius: 4,
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          {mounted && progressPct === 100 && (
            <p
              className='text-sm mt-3 font-medium m-0'
              style={{ color: 'var(--green-dark)' }}
            >
              All documents collected — ready to book your appointment at VFS Global.
            </p>
          )}
        </div>

        {/* Document list */}
        <div className='space-y-4'>
          {data.documents.map((doc, index) => {
            const isChecked = mounted ? checked.has(doc.id) : false;
            const isExpanded = expanded.has(doc.id);

            return (
              <div
                key={doc.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: `1px solid ${isChecked ? 'var(--green-light)' : 'var(--border)'}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  opacity: isChecked ? 0.8 : 1,
                  transition: 'border-color 0.2s ease, opacity 0.2s ease',
                }}
              >
                {/* Document header row */}
                <div
                  className='flex items-center gap-3 cursor-pointer select-none'
                  style={{ padding: '18px 20px' }}
                  onClick={() => toggleExpanded(doc.id)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(doc.id);
                    }}
                    aria-label={isChecked ? 'Mark as not done' : 'Mark as done'}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {isChecked ? (
                      <CheckCircle2 size={22} style={{ color: 'var(--green)' }} />
                    ) : (
                      <Circle size={22} style={{ color: 'var(--border)' }} />
                    )}
                  </button>

                  <span
                    className='label-caps tabular-nums shrink-0'
                    style={{
                      color: 'var(--amber-dark)',
                      backgroundColor: 'var(--amber-subtle)',
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className='flex-1 min-w-0'>
                    <p
                      className='font-semibold text-sm m-0'
                      style={{
                        color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)',
                        textDecoration: isChecked ? 'line-through' : 'none',
                      }}
                    >
                      {doc.title}
                      {doc.optional && (
                        <span
                          className='text-xs font-normal ml-2'
                          style={{
                            color: 'var(--text-muted)',
                            backgroundColor: 'var(--surface-2)',
                            padding: '2px 6px',
                            borderRadius: 4,
                          }}
                        >
                          {doc.conditionalOn}
                        </span>
                      )}
                    </p>
                    <div className='flex flex-wrap gap-3 mt-1'>
                      {doc.cost && (
                        <span className='text-xs' style={{ color: 'var(--green-dark)' }}>
                          {doc.cost}
                        </span>
                      )}
                      {doc.validity && (
                        <span
                          className='flex items-center gap-1 text-xs'
                          style={{ color: 'var(--text-muted)' }}
                        >
                          <Clock size={10} />
                          {doc.validity}
                        </span>
                      )}
                    </div>
                  </div>

                  {isExpanded ? (
                    <ChevronDown size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  ) : (
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  )}
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    {/* Description */}
                    <div style={{ padding: '16px 20px 12px' }}>
                      <p className='text-sm m-0' style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <LinkifyText text={doc.description} />
                      </p>
                      <p
                        className='text-xs mt-2 m-0 font-medium'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Copies required: {doc.copies}
                      </p>
                    </div>

                    {/* Locations */}
                    <div
                      style={{
                        padding: '12px 20px',
                        backgroundColor: 'var(--surface)',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                    >
                      <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>
                        Where to get it
                      </p>
                      <div className='space-y-3'>
                        {doc.where.map((location) => (
                          <div
                            key={location.name}
                            style={{
                              backgroundColor: 'var(--background)',
                              border: '1px solid var(--border)',
                              borderRadius: 8,
                              padding: '12px 14px',
                            }}
                          >
                            <p
                              className='font-semibold text-sm mb-1'
                              style={{ color: 'var(--text-primary)' }}
                            >
                              {location.name}
                            </p>
                            {location.address && (
                              <div className='flex items-start gap-2 mb-1'>
                                <MapPin
                                  size={11}
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
                                <Phone size={11} style={{ color: 'var(--text-muted)' }} />
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
                                <Mail size={11} style={{ color: 'var(--text-muted)' }} />
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
                                <Globe size={11} style={{ color: 'var(--text-muted)' }} />
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
                              <div className='flex items-center gap-2'>
                                <Clock size={11} style={{ color: 'var(--text-muted)' }} />
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
                      <div style={{ padding: '12px 20px 16px' }}>
                        <p className='label-caps mb-2' style={{ color: 'var(--text-muted)' }}>
                          Tips
                        </p>
                        <ul className='space-y-1.5 list-none m-0 p-0'>
                          {doc.tips.map((tip) => (
                            <li key={tip} className='flex items-start gap-2'>
                              <ArrowRight
                                size={11}
                                style={{ color: 'var(--amber)', marginTop: 3, flexShrink: 0 }}
                              />
                              <span className='text-xs' style={{ color: 'var(--text-secondary)' }}>
                                <LinkifyText text={tip} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div
          style={{
            backgroundColor: 'var(--amber-subtle)',
            borderRadius: 10,
            padding: '14px 18px',
            marginTop: 32,
            display: 'flex',
            gap: 12,
          }}
        >
          <AlertCircle
            size={16}
            style={{ color: 'var(--amber-dark)', flexShrink: 0, marginTop: 2 }}
          />
          <p className='text-xs m-0' style={{ color: 'var(--amber-dark)', lineHeight: 1.6 }}>
            This checklist is based on the current published requirements. DHA requirements can change — always verify the latest document list directly with{' '}
            <a
              href='https://visa.vfsglobal.com/zaf/en/dha'
              target='_blank'
              rel='noopener noreferrer'
              className='no-underline hover:underline font-medium'
              style={{ color: 'var(--amber-dark)' }}
            >
              VFS Global
            </a>{' '}
            or{' '}
            <a
              href='https://www.dha.gov.za'
              target='_blank'
              rel='noopener noreferrer'
              className='no-underline hover:underline font-medium'
              style={{ color: 'var(--amber-dark)' }}
            >
              DHA
            </a>{' '}
            before submitting.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
        }}
      >
        <div className='container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-6'>
          <div>
            <p className='font-semibold' style={{ color: 'var(--text-primary)' }}>
              Need to understand the full process?
            </p>
            <p className='text-sm m-0' style={{ color: 'var(--text-muted)' }}>
              Read the complete step-by-step guide with document details and locations.
            </p>
          </div>
          <Link
            href={`/${data.slug}/guide`}
            className='no-underline inline-flex items-center gap-2 font-semibold shrink-0'
            style={{
              backgroundColor: 'var(--amber)',
              color: 'var(--background)',
              padding: '12px 28px',
              borderRadius: 10,
              fontSize: '0.9375rem',
            }}
          >
            Read the Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
