'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';
import { ApplicationPDF, type PdfData } from './application-pdf';
import type { VisaTypeId } from '@/lib/visa-types';

interface Props {
  data: Omit<PdfData, 'visaType'>;
  visaType: VisaTypeId;
  fileName?: string;
}

export function PdfDownloadButton({ data, visaType, fileName }: Props) {
  const fullName = [data.firstName, data.middleNames, data.lastName]
    .filter(Boolean)
    .join('_')
    .replace(/\s+/g, '_');

  const name = fileName ?? `visa-pathway-summary-${fullName}.pdf`;
  const logoUrl = `${window.location.origin}/brand/visa-pathway-logo.png`;
  const pdfData: PdfData = { ...data, visaType };

  return (
    <PDFDownloadLink
      document={<ApplicationPDF data={pdfData} logoUrl={logoUrl} />}
      fileName={name}
    >
      {({ loading }) => (
        <span
          className='inline-flex items-center gap-2 text-sm font-semibold'
          style={{
            backgroundColor: 'var(--green)',
            color: 'var(--background)',
            padding: '9px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.75 : 1,
            userSelect: 'none',
            textDecoration: 'none',
          }}
        >
          {loading ? (
            <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
          ) : (
            <Download size={14} />
          )}
          {loading ? 'Preparing PDF…' : 'Download PDF'}
        </span>
      )}
    </PDFDownloadLink>
  );
}
