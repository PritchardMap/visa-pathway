'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { COUNTRIES, searchCountries, type Country } from '@/lib/countries';

interface PhoneInputProps {
  value: string; // full value like "+27 82 123 4567"
  onChange: (value: string) => void;
  error?: boolean;
}

function splitPhone(value: string): { dialCode: string; number: string } {
  for (const c of [...COUNTRIES].sort(
    (a, b) => b.dialCode.length - a.dialCode.length,
  )) {
    if (value.startsWith(c.dialCode)) {
      return {
        dialCode: c.dialCode,
        number: value.slice(c.dialCode.length).trimStart(),
      };
    }
  }
  // fallback — if starts with + but no match, try splitting at space
  if (value.startsWith('+')) {
    const spaceIdx = value.indexOf(' ');
    if (spaceIdx > 0) {
      return {
        dialCode: value.slice(0, spaceIdx),
        number: value.slice(spaceIdx + 1),
      };
    }
    return { dialCode: value, number: '' };
  }
  return { dialCode: '+27', number: value };
}

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const { dialCode: initialDial, number: initialNumber } = splitPhone(
    value || '+27',
  );

  const [dialCode, setDialCode] = useState(initialDial || '+27');
  const [number, setNumber] = useState(initialNumber || '');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedCountry =
    COUNTRIES.find((c) => c.dialCode === dialCode) ??
    COUNTRIES.find((c) => c.iso2 === 'ZA')!;
  const results = searchCountries(query);

  const emit = (code: string, num: string) => {
    onChange(`${code} ${num}`.trim());
  };

  const handleDialSelect = (c: Country) => {
    setDialCode(c.dialCode);
    setOpen(false);
    setQuery('');
    emit(c.dialCode, number);
  };

  const handleNumberChange = (num: string) => {
    setNumber(num);
    emit(dialCode, num);
  };

  // Close on outside click
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

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          borderRadius: 8,
          border: `1px solid ${error ? 'oklch(50% 0.18 25)' : 'var(--border)'}`,
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
        }}
      >
        {/* Flag + dial code trigger */}
        <button
          type='button'
          onClick={() => setOpen((o) => !o)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            padding: '10px 10px',
            background: 'transparent',
            border: 'none',
            borderRight: '1px solid var(--border)',
            cursor: 'pointer',
            flexShrink: 0,
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
          }}
        >
          <span style={{ fontSize: '1.2em', lineHeight: 1 }}>
            {selectedCountry?.flag ?? '🌐'}
          </span>
          <span style={{ fontVariantNumeric: 'tabular-nums', minWidth: 36 }}>
            {dialCode}
          </span>
          <ChevronDown
            size={12}
            style={{
              color: 'var(--text-muted)',
              transform: open ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.15s',
            }}
          />
        </button>

        {/* Number input */}
        <input
          type='tel'
          value={number}
          onChange={(e) => handleNumberChange(e.target.value)}
          placeholder='82 123 4567'
          style={{
            flex: 1,
            padding: '10px 12px',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            minWidth: 0,
          }}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }}
        >
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
              placeholder='Search country or +code…'
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '0.8125rem',
                color: 'var(--text-primary)',
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
          <div style={{ maxHeight: 220, overflowY: 'auto' }}>
            {results.length === 0 ? (
              <div
                style={{
                  padding: '12px 16px',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                }}
              >
                No countries found
              </div>
            ) : (
              results.map((c) => (
                <button
                  key={`${c.iso2}-${c.dialCode}`}
                  type='button'
                  onClick={() => handleDialSelect(c)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 14px',
                    border: 'none',
                    background:
                      selectedCountry?.iso2 === c.iso2
                        ? 'var(--amber-light, color-mix(in oklch, var(--amber) 15%, transparent))'
                        : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCountry?.iso2 !== c.iso2)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        'var(--border)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCountry?.iso2 !== c.iso2)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        'transparent';
                  }}
                >
                  <span
                    style={{ fontSize: '1.1em', lineHeight: 1, flexShrink: 0 }}
                  >
                    {c.flag}
                  </span>
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <span
                    style={{
                      fontVariantNumeric: 'tabular-nums',
                      color: 'var(--text-muted)',
                      fontSize: '0.8em',
                      fontFamily: 'monospace',
                    }}
                  >
                    {c.dialCode}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
