import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className='container-page py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
          <div>
            <Image
              src='/brand/visa-pathway-logo.png'
              alt='Visa Pathway'
              height={32}
              width={144}
              style={{
                objectFit: 'contain',
                objectPosition: 'left',
                marginBottom: 12,
              }}
            />
            <p
              className='text-sm'
              style={{ color: 'var(--text-muted)', maxWidth: '28ch' }}
            >
              Helping immigrants navigate South African visas and citizenship.
            </p>
          </div>

          <div>
            <p
              className='label-caps mb-4'
              style={{ color: 'var(--text-muted)', marginBottom: 16 }}
            >
              Sections
            </p>
            <ul className='space-y-2 list-none p-0 m-0'>
              {[
                { href: '/guide', label: 'Step-by-Step Guide' },
                { href: '/checklist', label: 'Document Checklist' },
                { href: '/apply', label: 'Application Assistant' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='text-sm no-underline hover:underline'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className='label-caps mb-4'
              style={{ color: 'var(--text-muted)', marginBottom: 16 }}
            >
              Official Resources
            </p>
            <ul className='space-y-2 list-none p-0 m-0'>
              {[
                {
                  href: 'https://www.dha.gov.za',
                  label: 'Department of Home Affairs',
                },
                {
                  href: 'https://www.saps.gov.za',
                  label: 'South African Police Service',
                },
                {
                  href: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
                  label: 'Foreign Embassies in SA',
                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm no-underline hover:underline'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p className='text-sm m-0' style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Visa Pathway. Not affiliated with the
            Department of Home Affairs.
          </p>
          <p className='text-sm m-0' style={{ color: 'var(--text-muted)' }}>
            Always verify requirements directly with DHA — rules change.
          </p>
        </div>
      </div>
    </footer>
  );
}
