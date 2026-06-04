import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/critical-skills/guide', label: 'Critical Skills' },
  { href: '/general-work/guide', label: 'Work Visa' },
  { href: '/study-visa/guide', label: 'Study' },
  { href: '/permanent-residence/guide', label: 'Permanent Residence' },
  { href: '/guide', label: 'Citizenship' },
];

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
      </div>
    </header>
  );
}
