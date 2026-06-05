'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/critical-skills/guide', label: 'Critical Skills' },
  { href: '/general-work/guide', label: 'Work Visa' },
  { href: '/business-visa/guide', label: 'Business Visa' },
  { href: '/study-visa/guide', label: 'Study' },
  { href: '/permanent-residence/guide', label: 'Permanent Residence' },
  { href: '/guide', label: 'Citizenship' },
];

const MOBILE_EXTRA_LINKS = [
  { href: '/checklist', label: 'Citizenship Checklist' },
  { href: '/apply', label: 'Application Assistant' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}
      className='sticky top-0 z-50'
    >
      <div className='container-page flex items-center justify-between h-16'>
        <Link href='/' className='flex items-center no-underline group shrink-0'>
          <Image
            src='/brand/visa-pathway-logo.png'
            alt='Visa Pathway'
            height={22}
            width={120}
            style={{ objectFit: 'contain', objectPosition: 'left', width: 'auto' }}
            priority
          />
        </Link>

        <nav className='hidden lg:flex items-center gap-5 mx-6'>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-sm font-medium no-underline transition-colors whitespace-nowrap'
              style={{ color: 'var(--text-secondary)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <Link
            href='/'
            className='no-underline shrink-0'
            style={{
              backgroundColor: 'var(--amber)',
              color: 'var(--background)',
              padding: '8px 20px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            All Pathways
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className='lg:hidden flex items-center justify-center'
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          style={{
            backgroundColor: 'var(--background)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
          className='lg:hidden'
        >
          <div className='container-page py-3 flex flex-col'>
            {[...NAV_LINKS, ...MOBILE_EXTRA_LINKS].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className='text-sm font-medium no-underline py-3'
                style={{
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
