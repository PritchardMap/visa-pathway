import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#1A3829',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow — top right, sunrise / veld horizon feel */}
        <div
          style={{
            position: 'absolute',
            top: -280,
            right: -280,
            width: 680,
            height: 680,
            borderRadius: '50%',
            backgroundColor: 'rgba(212,147,10,0.14)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            backgroundColor: 'rgba(212,147,10,0.09)',
            display: 'flex',
          }}
        />

        {/* Subtle bottom-left circle */}
        <div
          style={{
            position: 'absolute',
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.03)',
            display: 'flex',
          }}
        />

        {/* Wordmark + tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 88px 24px',
          }}
        >
          {/* VISA → */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontSize: 118,
                fontWeight: 900,
                color: '#D4930A',
                letterSpacing: '-4px',
                lineHeight: 1,
              }}
            >
              VISA
            </span>
            <span
              style={{
                fontSize: 84,
                fontWeight: 900,
                color: '#D4930A',
                marginTop: 10,
                lineHeight: 1,
              }}
            >
              ➔
            </span>
          </div>

          {/* PATHWAY */}
          <span
            style={{
              fontSize: 118,
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-4px',
              marginTop: -14,
              lineHeight: 1,
            }}
          >
            PATHWAY
          </span>

          {/* Amber rule */}
          <div
            style={{
              width: 72,
              height: 3,
              backgroundColor: '#D4930A',
              marginTop: 36,
              marginBottom: 28,
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <span
            style={{
              fontSize: 26,
              color: 'rgba(255,255,255,0.62)',
              letterSpacing: '0.5px',
            }}
          >
            South African Visa &amp; Immigration Guides
          </span>

          {/* Domain */}
          <span
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.32)',
              marginTop: 14,
              letterSpacing: '2px',
            }}
          >
            visapathway.co.za
          </span>
        </div>

        {/* SA flag colour accent — bottom edge */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 7,
            display: 'flex',
          }}
        >
          <div style={{ flex: 1, backgroundColor: '#007A4D', display: 'flex' }} />
          <div style={{ flex: 1, backgroundColor: '#FFB612', display: 'flex' }} />
          <div style={{ flex: 1, backgroundColor: '#FFFFFF', display: 'flex' }} />
          <div style={{ flex: 1, backgroundColor: '#DE3831', display: 'flex' }} />
          <div style={{ flex: 1, backgroundColor: '#002395', display: 'flex' }} />
          <div style={{ flex: 1, backgroundColor: '#000000', display: 'flex' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
