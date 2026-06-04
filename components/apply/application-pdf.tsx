'use client';

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

const C = {
  greenDark: '#2A5C3F',
  green: '#3B7050',
  greenSubtle: '#E8F2EC',
  amber: '#C47E2A',
  amberDark: '#7A5019',
  amberSubtle: '#F7EDD8',
  bg: '#FAF8F3',
  surface: '#F4F1EB',
  textPrimary: '#1C1913',
  textSecondary: '#4A4540',
  textMuted: '#7C7870',
  border: '#DEDAD2',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    fontFamily: 'Helvetica',
    paddingBottom: 60,
  },

  // ── Header: white band (logo + date) ──
  headerTop: {
    backgroundColor: C.white,
    paddingHorizontal: 32,
    paddingTop: 18,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  logo: {
    height: 26,
    width: 130,
    objectFit: 'contain',
  },
  headerDate: {
    fontSize: 8,
    color: C.textMuted,
    letterSpacing: 0.2,
  },

  // ── Header: green subtitle band ──
  headerBand: {
    backgroundColor: C.greenDark,
    paddingHorizontal: 32,
    paddingVertical: 9,
  },
  headerBandText: {
    fontSize: 8.5,
    color: '#A8C4B0',
    letterSpacing: 0.5,
    fontFamily: 'Helvetica-Bold',
  },

  // ── Hero strip ──
  hero: {
    backgroundColor: C.amberSubtle,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    padding: '16 32 14',
  },
  heroLabel: {
    fontSize: 7,
    color: C.amberDark,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  heroName: {
    fontSize: 18,
    color: C.textPrimary,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.2,
    marginBottom: 3,
  },
  heroId: {
    fontSize: 9,
    color: C.textSecondary,
    letterSpacing: 0.2,
  },

  // ── Body ──
  body: {
    padding: '24 32 0',
  },

  // ── Section ──
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  sectionAccent: {
    width: 3,
    height: 14,
    backgroundColor: C.green,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.green,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  // ── Field rows ──
  fieldTable: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 6,
    overflow: 'hidden',
  },
  fieldRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    minHeight: 24,
    alignItems: 'center',
  },
  fieldRowAlt: {
    backgroundColor: C.surface,
  },
  fieldRowLast: {
    borderBottomWidth: 0,
  },
  fieldKey: {
    width: 130,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 8,
    color: C.textMuted,
    borderRightWidth: 1,
    borderRightColor: C.border,
    flexShrink: 0,
  },
  fieldValue: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 8.5,
    color: C.textPrimary,
    fontFamily: 'Helvetica-Bold',
  },

  // ── Forms table ──
  formsTable: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 6,
    overflow: 'hidden',
  },
  formsHeader: {
    backgroundColor: C.greenSubtle,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  formsHeaderCode: {
    width: 70,
    fontSize: 7,
    color: C.green,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  formsHeaderPurpose: {
    flex: 1,
    fontSize: 7,
    color: C.green,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  formRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    alignItems: 'flex-start',
  },
  formRowAlt: {
    backgroundColor: C.surface,
  },
  formRowLast: {
    borderBottomWidth: 0,
  },
  formCode: {
    width: 70,
    fontSize: 8.5,
    color: C.amberDark,
    fontFamily: 'Helvetica-Bold',
  },
  formPurpose: {
    flex: 1,
    fontSize: 8,
    color: C.textSecondary,
    lineHeight: 1.4,
  },

  // ── Notice ──
  notice: {
    backgroundColor: C.amberSubtle,
    borderWidth: 1,
    borderColor: '#E8CC9A',
    borderRadius: 6,
    padding: '10 14',
    marginHorizontal: 32,
    marginTop: 4,
    marginBottom: 20,
  },
  noticeTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.amberDark,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  noticeText: {
    fontSize: 7.5,
    color: '#7A5C2A',
    lineHeight: 1.5,
  },

  // ── Footer ──
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: C.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor: C.bg,
  },
  footerText: {
    fontSize: 7,
    color: C.textMuted,
  },
  footerBrand: {
    fontSize: 7,
    color: C.green,
    fontFamily: 'Helvetica-Bold',
  },
});

interface PdfData {
  firstName: string;
  middleNames?: string;
  lastName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  passportNumber: string;
  saIdNumber: string;
  phone: string;
  email: string;
  maritalStatus: string;
  // Married
  spouseFirstName?: string;
  spouseMiddleNames?: string;
  spouseLastName?: string;
  spouseMaidenName?: string;
  spouseDateOfBirth?: string;
  spouseNationality?: string;
  marriageDate?: string;
  marriagePlace?: string;
  // Divorced
  divorceDate?: string;
  divorceCountry?: string;
  divorceDecreeNumber?: string;
  // Widowed
  deceasedSpouseName?: string;
  deceasedDateOfDeath?: string;
  // PR
  prNumber: string;
  prReferenceNumber?: string;
  prIssueDate: string;
  yearsInSA: string;
  // Address
  streetAddress: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  // Background
  occupation: string;
  employer?: string;
  languageSpoken: string;
  criminalRecord: string;
  criminalDetails?: string;
  dualCitizenshipStatus: string;
}

interface FieldEntry {
  key: string;
  value: string | undefined;
}

function FieldTable({ rows }: { rows: FieldEntry[] }) {
  const visible = rows.filter((r) => r.value);
  return (
    <View style={styles.fieldTable}>
      {visible.map((row, i) => (
        <View
          key={row.key}
          style={[
            styles.fieldRow,
            i % 2 === 1 ? styles.fieldRowAlt : {},
            i === visible.length - 1 ? styles.fieldRowLast : {},
          ]}
        >
          <Text style={styles.fieldKey}>{row.key}</Text>
          <Text style={styles.fieldValue}>{row.value}</Text>
        </View>
      ))}
    </View>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionAccent} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

const DHA_FORMS = [
  { code: 'DHA-63',     purpose: 'Application for Certificate of Naturalisation — primary statutory form' },
  { code: 'DHA-529',    purpose: 'Determination of citizenship status — confirms PR and eligibility' },
  { code: 'DHA-757',    purpose: 'Naturalisation questionnaire (supporting form)' },
  { code: 'BI-9',       purpose: 'Application for South African identity document post-naturalisation' },
  { code: 'SAPS-91(a)', purpose: 'Police clearance certificate for criminal background check' },
];

function formatDate(iso: string) {
  if (!iso) return iso;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function dualCitizenshipLabel(v: string) {
  if (v === 'permitted') return 'Permitted by home country';
  if (v === 'not-permitted') return 'Not permitted — renunciation required';
  return 'Status unknown / to be confirmed';
}

export function ApplicationPDF({ data, logoUrl }: { data: PdfData; logoUrl: string }) {
  const fullName = [data.firstName, data.middleNames, data.lastName]
    .filter(Boolean)
    .join(' ');

  const today = new Date().toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Document
      title={`Visa Pathway — Application Summary — ${fullName}`}
      author='Visa Pathway'
      subject='South African Citizenship Application Summary'
    >
      <Page size='A4' style={styles.page}>

        {/* White top bar: logo + date */}
        <View style={styles.headerTop} fixed>
          <Image src={logoUrl} style={styles.logo} />
          <Text style={styles.headerDate}>Generated {today}</Text>
        </View>

        {/* Green subtitle band */}
        <View style={styles.headerBand} fixed>
          <Text style={styles.headerBandText}>
            South African Citizenship Application Summary
          </Text>
        </View>

        {/* Hero: applicant name */}
        <View style={styles.hero}>
          <Text style={styles.heroLabel}>Prepared for</Text>
          <Text style={styles.heroName}>{fullName.toUpperCase()}</Text>
          <Text style={styles.heroId}>
            SA ID {data.saIdNumber}{'   ·   '}Passport {data.passportNumber}
          </Text>
        </View>

        {/* Body */}
        <View style={styles.body}>

          {/* Personal Information */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Personal Information' />
            <FieldTable
              rows={[
                { key: 'Full Name',        value: fullName },
                { key: 'Date of Birth',    value: formatDate(data.dateOfBirth) },
                { key: 'Country of Birth', value: data.countryOfBirth },
                { key: 'Nationality',      value: data.nationality },
                { key: 'Passport Number',  value: data.passportNumber },
                { key: 'SA ID Number',     value: data.saIdNumber },
                { key: 'Phone',            value: data.phone },
                { key: 'Email',            value: data.email },
                { key: 'Marital Status',   value: capitalize(data.maritalStatus) },
                // Married
                {
                  key: "Spouse's Full Name",
                  value: [data.spouseFirstName, data.spouseMiddleNames, data.spouseLastName].filter(Boolean).join(' ') || undefined,
                },
                { key: "Spouse's Maiden Name",  value: data.spouseMaidenName },
                { key: "Spouse's Date of Birth",value: data.spouseDateOfBirth ? formatDate(data.spouseDateOfBirth) : undefined },
                { key: "Spouse's Nationality", value: data.spouseNationality },
                { key: 'Date of Marriage',     value: data.marriageDate ? formatDate(data.marriageDate) : undefined },
                { key: 'Place of Marriage',    value: data.marriagePlace },
                // Divorced
                { key: 'Date of Divorce',      value: data.divorceDate ? formatDate(data.divorceDate) : undefined },
                { key: 'Country of Divorce',   value: data.divorceCountry },
                { key: 'Divorce Decree No.',   value: data.divorceDecreeNumber },
                // Widowed
                { key: "Deceased Spouse's Name", value: data.deceasedSpouseName },
                { key: 'Date of Death',          value: data.deceasedDateOfDeath ? formatDate(data.deceasedDateOfDeath) : undefined },
                // PR
                { key: 'PR Permit Number',     value: data.prNumber },
                { key: 'PR Reference Number',  value: data.prReferenceNumber },
                { key: 'PR Issue Date',        value: formatDate(data.prIssueDate) },
                { key: 'Years in South Africa',value: data.yearsInSA },
              ]}
            />
          </View>

          {/* Residential Address */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Residential Address' />
            <FieldTable
              rows={[
                { key: 'Street Address', value: data.streetAddress },
                { key: 'Suburb',         value: data.suburb },
                { key: 'City',           value: data.city },
                { key: 'Province',       value: data.province },
                { key: 'Postal Code',    value: data.postalCode },
              ]}
            />
          </View>

          {/* Background */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Background & Language' />
            <FieldTable
              rows={[
                { key: 'Occupation',       value: data.occupation },
                { key: 'Employer',         value: data.employer },
                { key: 'Official Language',value: data.languageSpoken },
                {
                  key: 'Criminal Record',
                  value: data.criminalRecord === 'no'
                    ? 'None declared'
                    : `Yes — ${data.criminalDetails ?? 'see attached details'}`,
                },
                {
                  key: 'Dual Citizenship',
                  value: dualCitizenshipLabel(data.dualCitizenshipStatus),
                },
              ]}
            />
          </View>

          {/* DHA Forms */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='DHA Forms to Complete' />
            <View style={styles.formsTable}>
              <View style={styles.formsHeader}>
                <Text style={styles.formsHeaderCode}>Form</Text>
                <Text style={styles.formsHeaderPurpose}>Purpose</Text>
              </View>
              {DHA_FORMS.map((form, i) => (
                <View
                  key={form.code}
                  style={[
                    styles.formRow,
                    i % 2 === 1 ? styles.formRowAlt : {},
                    i === DHA_FORMS.length - 1 ? styles.formRowLast : {},
                  ]}
                >
                  <Text style={styles.formCode}>{form.code}</Text>
                  <Text style={styles.formPurpose}>{form.purpose}</Text>
                </View>
              ))}
            </View>
          </View>

        </View>

        {/* Notice */}
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>IMPORTANT NOTICE</Text>
          <Text style={styles.noticeText}>
            This document is a reference summary only. No personal data has been stored on our servers — all information was entered locally in your browser. Verify all requirements with the Department of Home Affairs or a registered immigration practitioner before submitting your application.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerBrand}>visapathway.co.za</Text>
          <Text style={styles.footerText}>
            Reference only — not an official DHA document
          </Text>
          <Text style={styles.footerText}>Generated {today}</Text>
        </View>

      </Page>
    </Document>
  );
}
