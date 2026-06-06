import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Visa Pathway handles your information — what we collect, how it is used, and how your data is protected.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className='container-page py-16 md:py-24'>
      <div style={{ maxWidth: '68ch' }}>
        <p className='label-caps mb-4' style={{ color: 'var(--amber-dark)' }}>
          Legal
        </p>
        <h1
          className='heading-display text-3xl md:text-4xl mb-4'
          style={{ color: 'var(--text-primary)' }}
        >
          Privacy Policy
        </h1>
        <p className='text-sm mb-12' style={{ color: 'var(--text-muted)' }}>
          Last updated: June 2025
        </p>

        <div className='space-y-10' style={{ color: 'var(--text-secondary)' }}>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              What Visa Pathway is
            </h2>
            <p className='text-base leading-relaxed'>
              Visa Pathway is an informational website providing guides, document checklists, and an application
              preparation tool for South African visa, permit, and citizenship pathways. We are not a law firm,
              immigration consultant, or agent. Nothing on this site constitutes legal or immigration advice.
            </p>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              The Application Assistant — data you enter
            </h2>
            <p className='text-base leading-relaxed mb-4'>
              The Application Assistant lets you enter personal details (name, date of birth, passport number,
              address, etc.) to generate a pre-filled reference document for your DHA application forms.
            </p>
            <ul className='space-y-2 list-none p-0 m-0'>
              {[
                'Your data is processed entirely in your browser and is never sent to our servers.',
                'We do not store, log, or transmit any personal information you enter.',
                'Generated PDF documents are created on your device and downloaded directly — no copy is retained by us.',
                'Closing or refreshing the page clears your session data.',
              ].map((item) => (
                <li key={item} className='flex items-start gap-3 text-sm'>
                  <span
                    style={{
                      width: 6, height: 6, borderRadius: '50%',
                      backgroundColor: 'var(--green)', flexShrink: 0, marginTop: 7,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              Document checklists
            </h2>
            <p className='text-base leading-relaxed'>
              Checklist progress (which items you have ticked) is saved in your browser&apos;s local storage.
              This data never leaves your device. You can clear it at any time using the Reset button on
              any checklist page, or by clearing your browser&apos;s site data.
            </p>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              Analytics
            </h2>
            <p className='text-base leading-relaxed'>
              We use Vercel Analytics to collect anonymous, aggregated usage data — page views and referral
              sources. Vercel Analytics does not use cookies and does not collect personal information or
              fingerprint individual visitors. No data is shared with third-party advertising networks.
            </p>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              Cookies
            </h2>
            <p className='text-base leading-relaxed'>
              This site does not use tracking or advertising cookies. Browser local storage is used solely
              for checklist progress as described above.
            </p>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              External links
            </h2>
            <p className='text-base leading-relaxed'>
              This site links to external websites including the Department of Home Affairs, VFS Global,
              SAQA, and SAPS. We have no control over those sites and are not responsible for their
              privacy practices or content.
            </p>
          </div>

          <div>
            <h2 className='heading-section text-xl mb-3' style={{ color: 'var(--text-primary)' }}>
              Changes to this policy
            </h2>
            <p className='text-base leading-relaxed'>
              If we make material changes to how we handle data, we will update the date at the top of
              this page. Continued use of the site after changes constitutes acceptance.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '18px 22px',
            }}
          >
            <p className='text-sm' style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Not legal advice.</strong>{' '}
              Visa Pathway is for informational purposes only. Always verify current requirements directly
              with the Department of Home Affairs and VFS Global before submitting any application.
              Immigration requirements, fees, and processing times change — confirm before applying.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
