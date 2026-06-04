'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { COUNTRIES, searchCountries, type Country } from '@/lib/countries';

interface CountrySelectProps {
  value: string; // country name
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  /** If true, shows nationality adjective instead of country name in the list */
  mode?: 'country' | 'nationality';
}

export function CountrySelect({
  value,
  onChange,
  placeholder = 'Select country…',
  error,
  mode = 'country',
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const results = searchCountries(query);

  const selected = COUNTRIES.find(
    (c) =>
      (mode === 'nationality' ? c.nationality : c.name).toLowerCase() ===
      value.toLowerCase(),
  );

  const getLabel = (c: Country) =>
    mode === 'nationality' ? c.nationality : c.name;

  const handleSelect = useCallback(
    (c: Country) => {
      onChange(getLabel(c));
      setOpen(false);
      setQuery('');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, mode],
  );

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

  // Focus search when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Trigger button */}
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: 8,
          border: `1px solid ${error ? 'oklch(50% 0.18 25)' : 'var(--border)'}`,
          backgroundColor: 'var(--background)',
          color: value ? 'var(--text-primary)' : 'var(--text-muted)',
          fontSize: '0.875rem',
          outline: 'none',
          boxSizing: 'border-box' as const,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {selected ? (
          <>
            <span style={{ fontSize: '1.2em', lineHeight: 1 }}>
              {selected.flag}
            </span>
            <span style={{ flex: 1 }}>{getLabel(selected)}</span>
            <span
              style={{
                fontSize: '0.7em',
                color: 'var(--text-muted)',
                fontFamily: 'monospace',
              }}
            >
              {selected.iso2}
            </span>
          </>
        ) : (
          <span style={{ flex: 1 }}>{placeholder}</span>
        )}
        <ChevronDown
          size={14}
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
              placeholder='Search country or code…'
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

          {/* List */}
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
                  key={c.iso2}
                  type='button'
                  onClick={() => handleSelect(c)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 14px',
                    border: 'none',
                    background:
                      selected?.iso2 === c.iso2
                        ? 'var(--amber-light, color-mix(in oklch, var(--amber) 15%, transparent))'
                        : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                  }}
                  onMouseEnter={(e) => {
                    if (selected?.iso2 !== c.iso2)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        'var(--border)';
                  }}
                  onMouseLeave={(e) => {
                    if (selected?.iso2 !== c.iso2)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        'transparent';
                  }}
                >
                  <span
                    style={{ fontSize: '1.1em', lineHeight: 1, flexShrink: 0 }}
                  >
                    {c.flag}
                  </span>
                  <span style={{ flex: 1 }}>{getLabel(c)}</span>
                  <span
                    style={{
                      fontSize: '0.7em',
                      color: 'var(--text-muted)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {c.iso2}
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
