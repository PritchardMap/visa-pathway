'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ChevronDown, Search, X, Info } from 'lucide-react';
import { COUNTRIES, type Country } from '@/lib/countries';
import {
  NATIONALITIES_SORTED,
  NATIONALITIES,
  DUAL_CITIZENSHIP_STATUS_LABELS,
  type NationalityData,
} from '@/lib/nationality-data';

// ISO codes that have rich dual-citizenship data
const KNOWN_CODES = new Set(NATIONALITIES.map((n) => n.code));

// Flag lookup by ISO code
const FLAG_BY_CODE = new Map(COUNTRIES.map((c) => [c.iso2, c.flag]));

// Full country list minus the 33 we have specific data for
const OTHER_COUNTRIES = COUNTRIES.filter((c) => !KNOWN_CODES.has(c.iso2));

function filterNationalities(query: string) {
  if (!query) return NATIONALITIES_SORTED;
  const q = query.toLowerCase();
  return NATIONALITIES_SORTED.filter((n) => n.name.toLowerCase().includes(q));
}

function filterOther(query: string): Country[] {
  if (!query) return [];
  const q = query.toLowerCase();
  return OTHER_COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.nationality.toLowerCase().includes(q) ||
      c.iso2.toLowerCase() === q,
  );
}

interface Props {
  current: NationalityData | null;
}

export function NationalitySelector({ current }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const specificResults = filterNationalities(query);
  const otherResults = filterOther(query);

  const handleSelectSpecific = useCallback(
    (n: NationalityData) => {
      router.push(`/guide?nationality=${n.code}`);
      setOpen(false);
      setQuery('');
    },
    [router],
  );

  const handleSelectOther = useCallback(
    (c: Country) => {
      router.push(`/guide?nationality=${c.iso2}`);
      setOpen(false);
      setQuery('');
    },
    [router],
  );

  const handleClear = () => {
    router.push('/guide');
    setOpen(false);
    setQuery('');
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const statusMeta = current
    ? DUAL_CITIZENSHIP_STATUS_LABELS[current.dualCitizenshipStatus]
    : null;

  const currentFlag = current ? FLAG_BY_CODE.get(current.code) : null;
  const isOtherCountry = current && !KNOWN_CODES.has(current.code);

  return (
    <div
      style={{
        backgroundColor: current ? statusMeta!.bg : 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      <Globe
        size={16}
        style={{
          color: current ? statusMeta!.colour : 'var(--text-muted)',
          flexShrink: 0,
        }}
      />

      <div style={{ flex: 1, minWidth: 200 }}>
        <p
          className='text-xs font-medium m-0 mb-0.5'
          style={{ color: current ? statusMeta!.colour : 'var(--text-muted)' }}
        >
          {current ? statusMeta!.label : 'Personalise this guide for your nationality'}
        </p>
        {current && (
          <p className='text-xs m-0' style={{ color: 'var(--text-muted)' }}>
            {isOtherCountry
              ? `We don't have detailed dual citizenship data for ${current.name} — we'll point you to your embassy for guidance.`
              : `Showing embassy contacts and dual citizenship information for ${current.name} — where we don't have details, we'll point you to your embassy.`}
          </p>
        )}
      </div>

      {/* Combobox */}
      <div ref={containerRef} style={{ position: 'relative', flexShrink: 0 }}>
        {/* Trigger */}
        <button
          type='button'
          onClick={() => setOpen((o) => !o)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 12px',
            borderRadius: 8,
            border: '1px solid var(--border)',
            backgroundColor: 'var(--background)',
            color: current ? 'var(--text-primary)' : 'var(--text-muted)',
            fontSize: '0.8125rem',
            cursor: 'pointer',
            minWidth: 210,
            textAlign: 'left',
            fontFamily: 'inherit',
          }}
        >
          {current ? (
            <>
              {currentFlag && (
                <span style={{ fontSize: '1.1em', lineHeight: 1 }}>
                  {currentFlag}
                </span>
              )}
              <span style={{ flex: 1 }}>{current.name}</span>
              <span
                style={{
                  fontSize: '0.7em',
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace',
                }}
              >
                {current.code}
              </span>
            </>
          ) : (
            <span style={{ flex: 1 }}>Select nationality…</span>
          )}
          <ChevronDown
            size={13}
            style={{
              color: 'var(--text-muted)',
              flexShrink: 0,
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.15s',
            }}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              right: 0,
              width: 300,
              zIndex: 50,
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Search */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 12px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <Search
                size={13}
                style={{ color: 'var(--text-muted)', flexShrink: 0 }}
              />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search nationality…'
                style={{
                  flex: 1,
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                }}
              />
              {query && (
                <button
                  type='button'
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: 'var(--text-muted)',
                    display: 'flex',
                  }}
                >
                  <X size={12} />
                </button>
              )}
            </div>

            <div style={{ maxHeight: 320, overflowY: 'auto' }}>
              {/* Specific nationalities (our 33) */}
              {specificResults.length > 0 && (
                <>
                  {query && (
                    <div
                      style={{
                        padding: '5px 12px 3px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Full guidance available
                    </div>
                  )}
                  {specificResults.map((n) => {
                    const flag = FLAG_BY_CODE.get(n.code);
                    const isSelected = current?.code === n.code;
                    return (
                      <NationalityItem
                        key={n.code}
                        flag={flag}
                        name={n.name}
                        code={n.code}
                        isSelected={isSelected}
                        onClick={() => handleSelectSpecific(n)}
                      />
                    );
                  })}
                </>
              )}

              {/* Divider + Other countries section */}
              <div
                style={{
                  borderTop: specificResults.length > 0 ? '1px solid var(--border)' : undefined,
                  padding: '6px 12px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  backgroundColor: 'var(--surface)',
                }}
              >
                <Info
                  size={11}
                  style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.3,
                  }}
                >
                  {query
                    ? 'Other countries — embassy referral only, no detailed data'
                    : 'Other countries — search to find yours'}
                </span>
              </div>

              {/* Other countries list (only when searching) */}
              {otherResults.length > 0 ? (
                otherResults.map((c) => {
                  const isSelected = current?.code === c.iso2;
                  return (
                    <NationalityItem
                      key={c.iso2}
                      flag={c.flag}
                      name={c.name}
                      code={c.iso2}
                      isSelected={isSelected}
                      onClick={() => handleSelectOther(c)}
                      muted
                    />
                  );
                })
              ) : query && otherResults.length === 0 && specificResults.length === 0 ? (
                <div
                  style={{
                    padding: '10px 14px',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : !query ? (
                <div
                  style={{
                    padding: '8px 14px 10px',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  e.g. Sweden, Thailand, Egypt…
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* Clear */}
      {current && (
        <button
          onClick={handleClear}
          title='Clear selection'
          style={{
            background: 'none',
            border: 'none',
            padding: 4,
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

// Shared row component used for both sections
function NationalityItem({
  flag,
  name,
  code,
  isSelected,
  onClick,
  muted = false,
}: {
  flag?: string;
  name: string;
  code: string;
  isSelected: boolean;
  onClick: () => void;
  muted?: boolean;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '7px 14px',
        border: 'none',
        background: isSelected
          ? 'color-mix(in oklch, var(--amber) 15%, transparent)'
          : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: '0.8125rem',
        color: muted ? 'var(--text-secondary)' : 'var(--text-primary)',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        if (!isSelected)
          (e.currentTarget as HTMLButtonElement).style.background =
            'var(--border)';
      }}
      onMouseLeave={(e) => {
        if (!isSelected)
          (e.currentTarget as HTMLButtonElement).style.background =
            'transparent';
      }}
    >
      {flag ? (
        <span style={{ fontSize: '1.1em', lineHeight: 1, flexShrink: 0 }}>
          {flag}
        </span>
      ) : (
        <span style={{ width: '1.1em', flexShrink: 0 }} />
      )}
      <span style={{ flex: 1 }}>{name}</span>
      <span
        style={{
          fontSize: '0.65em',
          color: 'var(--text-muted)',
          fontFamily: 'monospace',
        }}
      >
        {code}
      </span>
    </button>
  );
}
