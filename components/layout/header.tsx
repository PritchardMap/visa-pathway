import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
      }}
      className='sticky top-0 z-50'
    >
      <div className='container-page flex items-center justify-between h-16'>
        <Link href='/' className='flex items-center no-underline group'>
          <Image
            src='/brand/visa-pathway-logo.png'
            alt='Visa Pathway'
            height={22}
            width={120}
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
          />
        </Link>

        <nav className='hidden md:flex items-center gap-6'>
          {[
            { href: '/guide', label: 'Guide' },
            { href: '/checklist', label: 'Checklist' },
            { href: '/apply', label: 'Apply' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-sm font-medium no-underline transition-colors'
              style={{ color: 'var(--text-secondary)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href='/apply'
          className='no-underline'
          style={{
            backgroundColor: 'var(--amber)',
            color: 'var(--background)',
            padding: '8px 20px',
            borderRadius: 8,
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'background-color 0.15s ease',
          }}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
