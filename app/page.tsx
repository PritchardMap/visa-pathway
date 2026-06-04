import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Clock, Shield } from 'lucide-react';
import { APPLICATION_PHASES, FEES_SUMMARY } from '@/lib/citizenship-data';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='container-page pt-20 pb-16 md:pt-28 md:pb-24'>
        <div className='max-w-[680px]'>
          <p className='label-caps mb-5' style={{ color: 'var(--amber-dark)' }}>
            South African Citizenship by Naturalisation
          </p>
          <h1
            className='heading-display text-4xl md:text-5xl lg:text-[3.5rem] mb-6 text-balance'
            style={{ color: 'var(--text-primary)' }}
          >
            Everything you need to become a South African citizen.
          </h1>
          <p
            className='text-lg md:text-xl leading-relaxed mb-10'
            style={{ color: 'var(--text-secondary)', maxWidth: '58ch' }}
          >
            We&apos;ve done the research. This guide gives you every document,
            every cost, every address, and every form — so you can focus on the
            process, not the paperwork chase.
          </p>

          <div className='flex flex-wrap gap-4'>
            <Link
              href='/guide'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--amber)',
                color: 'var(--background)',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: '0.9375rem',
              }}
            >
              Read the guide <ArrowRight size={16} />
            </Link>
            <Link
              href='/checklist'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--surface)',
                color: 'var(--text-primary)',
                padding: '12px 28px',
                borderRadius: 10,
                fontSize: '0.9375rem',
                border: '1px solid var(--border)',
              }}
            >
              Start checklist
            </Link>
          </div>
        </div>

        {/* Trust signals */}
        <div
          className='flex flex-wrap gap-6 mt-12 pt-8'
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {[
            { icon: CheckCircle, text: 'Based on DHA official requirements' },
            { icon: MapPin, text: 'Nationwide locations & addresses' },
            { icon: Clock, text: 'Real processing times & costs' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className='flex items-center gap-2'>
              <Icon size={16} style={{ color: 'var(--green)' }} />
              <span className='text-sm' style={{ color: 'var(--text-muted)' }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        style={{ backgroundColor: 'var(--surface)' }}
        className='py-16 md:py-20'
      >
        <div className='container-page'>
          <p className='label-caps mb-2' style={{ color: 'var(--text-muted)' }}>
            The process
          </p>
          <h2
            className='heading-section text-2xl md:text-3xl mb-12'
            style={{ color: 'var(--text-primary)' }}
          >
            Six phases, clearly explained.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {APPLICATION_PHASES.map((phase) => (
              <div
                key={phase.id}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '24px',
                }}
              >
                <div className='flex items-start gap-4 mb-3'>
                  <span
                    className='heading-display text-4xl tabular-nums leading-none'
                    style={{ color: 'var(--amber-light)', lineHeight: 1 }}
                  >
                    {String(phase.number).padStart(2, '0')}
                  </span>
                  <div>
                    <p
                      className='font-semibold text-sm mb-1'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {phase.title}
                    </p>
                    <span
                      className='label-caps'
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {phase.estimatedTime}
                    </span>
                  </div>
                </div>
                <p
                  className='text-sm leading-relaxed m-0'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {phase.summary.slice(0, 120)}
                  {phase.summary.length > 120 ? '…' : ''}
                </p>
              </div>
            ))}
          </div>

          <div className='mt-8 text-center'>
            <Link
              href='/guide'
              className='no-underline inline-flex items-center gap-2 font-medium text-sm'
              style={{ color: 'var(--amber-dark)' }}
            >
              Read the full guide with all document details{' '}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll need */}
      <section className='container-page py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          <div>
            <p
              className='label-caps mb-2'
              style={{ color: 'var(--text-muted)' }}
            >
              Documents
            </p>
            <h2
              className='heading-section text-2xl md:text-3xl mb-4'
              style={{ color: 'var(--text-primary)' }}
            >
              Know before you gather.
            </h2>
            <p
              className='text-base leading-relaxed mb-8'
              style={{ color: 'var(--text-secondary)', maxWidth: '48ch' }}
            >
              The citizenship application requires approximately 10–12
              documents. Many take weeks to obtain — especially police
              clearances and foreign documents. Start early.
            </p>

            <div className='space-y-3'>
              {[
                'SA Police Clearance Certificate (allow 4–8 weeks)',
                'Police clearance from your home country',
                'Dual citizenship confirmation from your embassy',
                'Unabridged birth certificate',
                'All foreign passports with entry/exit stamps',
                '12 months proof of continuous SA residence',
                '4 completed DHA application forms',
              ].map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'var(--amber)',
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className='text-sm m-0'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href='/checklist'
              className='no-underline inline-flex items-center gap-2 font-semibold mt-8'
              style={{
                color: 'var(--green-dark)',
                fontSize: '0.875rem',
              }}
            >
              See the complete checklist with locations <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cost summary */}
          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '28px',
            }}
          >
            <div className='flex items-center gap-2 mb-6'>
              <Shield size={16} style={{ color: 'var(--green)' }} />
              <p
                className='label-caps m-0'
                style={{ color: 'var(--text-muted)' }}
              >
                Estimated costs
              </p>
            </div>

            <div className='space-y-4'>
              {FEES_SUMMARY.map((fee) => (
                <div key={fee.item}>
                  <div className='flex justify-between items-start gap-4 mb-1'>
                    <span
                      className='text-sm font-medium'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {fee.item}
                    </span>
                    <span
                      className='text-sm font-bold tabular-nums shrink-0'
                      style={{ color: 'var(--amber-dark)' }}
                    >
                      {fee.amount}
                    </span>
                  </div>
                  <p
                    className='text-xs m-0'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {fee.notes}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border)',
                marginTop: 24,
                paddingTop: 20,
              }}
            >
              <p className='text-xs m-0' style={{ color: 'var(--text-muted)' }}>
                Total out-of-pocket costs vary. Budget approximately
                R1,500–R2,500 for the full application. Fees exclude any
                immigration consultant fees if you choose to use one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, oklch(44% 0.09 155) 0%, oklch(34% 0.08 155) 100%)`,
        }}
        className='py-16 md:py-20'
      >
        <div className='container-narrow text-center'>
          <p
            className='label-caps mb-4'
            style={{ color: 'oklch(75% 0.07 155)' }}
          >
            Get started today
          </p>
          <h2
            className='heading-display text-3xl md:text-4xl mb-5 text-balance'
            style={{ color: 'oklch(97% 0.004 155)' }}
          >
            Ready to start your application?
          </h2>
          <p
            className='text-base leading-relaxed mb-8 mx-auto'
            style={{ color: 'oklch(82% 0.05 155)', maxWidth: '44ch' }}
          >
            Use our application assistant to enter your details once and
            generate a pre-filled summary for all the DHA forms you need.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href='/apply'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'var(--amber)',
                color: 'oklch(18% 0.012 75)',
                padding: '13px 32px',
                borderRadius: 10,
                fontSize: '0.9375rem',
              }}
            >
              Start application assistant <ArrowRight size={16} />
            </Link>
            <Link
              href='/guide'
              className='no-underline inline-flex items-center gap-2 font-semibold'
              style={{
                backgroundColor: 'transparent',
                color: 'oklch(90% 0.04 155)',
                padding: '13px 32px',
                borderRadius: 10,
                fontSize: '0.9375rem',
                border: '1px solid oklch(65% 0.07 155)',
              }}
            >
              Read the guide first
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className='container-page py-6'>
        <p
          className='text-xs text-center'
          style={{ color: 'var(--text-muted)' }}
        >
          This guide is for informational purposes. Always verify current
          requirements directly with the Department of Home Affairs.
          Requirements, fees, and processing times change — confirm before
          submitting your application.
        </p>
      </section>
    </>
  );
}
