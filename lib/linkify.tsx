'use client';

import React from 'react';

export default function LinkifyText({ text }: { text?: string | null }) {
  if (!text) return null;
  // Use a global regex for splitting, but a non-global regex for testing
  const splitRegex = /(https?:\/\/[^\s]+)/g;
  const testRegex = /^(https?:\/\/[^\s]+)$/;
  const parts = text.split(splitRegex);
  return (
    <span>
      {parts.map((part, i) =>
        testRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline hover:underline'
            style={{ color: 'var(--green-dark)' }}
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
