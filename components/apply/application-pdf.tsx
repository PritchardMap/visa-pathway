'use client';

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import type { VisaTypeId } from '@/lib/visa-types';

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
  page: { backgroundColor: C.bg, fontFamily: 'Helvetica', paddingBottom: 60 },
  headerTop: {
    backgroundColor: C.white, paddingHorizontal: 32, paddingTop: 18, paddingBottom: 14,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  logo: { height: 26, width: 130, objectFit: 'contain' },
  headerDate: { fontSize: 8, color: C.textMuted, letterSpacing: 0.2 },
  headerBand: { backgroundColor: C.greenDark, paddingHorizontal: 32, paddingVertical: 9 },
  headerBandText: { fontSize: 8.5, color: '#A8C4B0', letterSpacing: 0.5, fontFamily: 'Helvetica-Bold' },
  hero: { backgroundColor: C.amberSubtle, borderBottomWidth: 1, borderBottomColor: C.border, padding: '16 32 14' },
  heroLabel: { fontSize: 7, color: C.amberDark, fontFamily: 'Helvetica-Bold', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4 },
  heroName: { fontSize: 18, color: C.textPrimary, fontFamily: 'Helvetica-Bold', letterSpacing: 0.2, marginBottom: 3 },
  heroId: { fontSize: 9, color: C.textSecondary, letterSpacing: 0.2 },
  body: { padding: '24 32 0' },
  section: { marginBottom: 20 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 8 },
  sectionAccent: { width: 3, height: 14, backgroundColor: C.green, borderRadius: 2 },
  sectionTitle: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: C.green, letterSpacing: 1.2, textTransform: 'uppercase' },
  fieldTable: { borderWidth: 1, borderColor: C.border, borderRadius: 6, overflow: 'hidden' },
  fieldRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: C.border, minHeight: 24, alignItems: 'center' },
  fieldRowAlt: { backgroundColor: C.surface },
  fieldRowLast: { borderBottomWidth: 0 },
  fieldKey: { width: 140, paddingHorizontal: 12, paddingVertical: 6, fontSize: 8, color: C.textMuted, borderRightWidth: 1, borderRightColor: C.border, flexShrink: 0 },
  fieldValue: { flex: 1, paddingHorizontal: 12, paddingVertical: 6, fontSize: 8.5, color: C.textPrimary, fontFamily: 'Helvetica-Bold' },
  formsTable: { borderWidth: 1, borderColor: C.border, borderRadius: 6, overflow: 'hidden' },
  formsHeader: { backgroundColor: C.greenSubtle, flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: C.border },
  formsHeaderCode: { width: 70, fontSize: 7, color: C.green, fontFamily: 'Helvetica-Bold', letterSpacing: 0.8, textTransform: 'uppercase' },
  formsHeaderPurpose: { flex: 1, fontSize: 7, color: C.green, fontFamily: 'Helvetica-Bold', letterSpacing: 0.8, textTransform: 'uppercase' },
  formRow: { flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 7, borderBottomWidth: 1, borderBottomColor: C.border, alignItems: 'flex-start' },
  formRowAlt: { backgroundColor: C.surface },
  formRowLast: { borderBottomWidth: 0 },
  formCode: { width: 70, fontSize: 8.5, color: C.amberDark, fontFamily: 'Helvetica-Bold' },
  formPurpose: { flex: 1, fontSize: 8, color: C.textSecondary, lineHeight: 1.4 },
  notice: { backgroundColor: C.amberSubtle, borderWidth: 1, borderColor: '#E8CC9A', borderRadius: 6, padding: '10 14', marginHorizontal: 32, marginTop: 4, marginBottom: 20 },
  noticeTitle: { fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: C.amberDark, letterSpacing: 0.5, marginBottom: 4 },
  noticeText: { fontSize: 7.5, color: '#7A5C2A', lineHeight: 1.5 },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, borderTopWidth: 1, borderTopColor: C.border, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 12, backgroundColor: C.bg },
  footerText: { fontSize: 7, color: C.textMuted },
  footerBrand: { fontSize: 7, color: C.green, fontFamily: 'Helvetica-Bold' },
});

export interface PdfData {
  visaType: VisaTypeId;
  firstName: string;
  middleNames?: string;
  lastName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  passportNumber: string;
  saIdNumber?: string;
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
  // Citizenship only
  prNumber?: string;
  prReferenceNumber?: string;
  prIssueDate?: string;
  yearsInSA?: string;
  // Address
  streetAddress: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  // Background
  occupation?: string;
  employer?: string;
  languageSpoken?: string;
  criminalRecord: string;
  criminalDetails?: string;
  dualCitizenshipStatus?: string;
  // General Work
  employerRegistration?: string;
  salary?: string;
  doelCertRef?: string;
  // Critical Skills
  saqaRef?: string;
  professionalBodyReg?: string;
  hasJobOffer?: string;
  // Business Visa
  businessName?: string;
  businessSector?: string;
  investmentAmount?: string;
  dticRef?: string;
  // Study Visa
  institutionName?: string;
  courseName?: string;
  studentRef?: string;
  financialSponsor?: string;
  // Permanent Residence
  prCategory?: string;
  currentVisaType?: string;
  currentVisaNumber?: string;
  currentVisaExpiry?: string;
}

interface FieldEntry { key: string; value: string | undefined }

const PDF_HEADER_LABEL: Record<VisaTypeId, string> = {
  'citizenship':         'South African Citizenship Application Summary',
  'general-work':        'General Work Visa Application Summary',
  'critical-skills':     'Critical Skills Work Visa Application Summary',
  'business-visa':       'Business Visa Application Summary',
  'study-visa':          'Study Visa Application Summary',
  'permanent-residence': 'Permanent Residence Application Summary',
};

const PDF_FORMS: Record<VisaTypeId, { code: string; purpose: string }[]> = {
  citizenship: [
    { code: 'DHA-63',     purpose: 'Application for Certificate of Naturalisation' },
    { code: 'DHA-529',    purpose: 'Determination of citizenship status' },
    { code: 'DHA-757',    purpose: 'Naturalisation questionnaire (supporting form)' },
    { code: 'BI-9',       purpose: 'Application for SA identity document post-naturalisation' },
    { code: 'SAPS-91(a)', purpose: 'South African Police Clearance Certificate' },
  ],
  'general-work': [
    { code: 'BI-1738',    purpose: 'Temporary residence visa application (via VFS Global)' },
    { code: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner' },
    { code: 'SAPS-91(a)', purpose: 'South African Police Clearance Certificate' },
  ],
  'critical-skills': [
    { code: 'BI-1738',    purpose: 'Temporary residence visa application (via VFS Global)' },
    { code: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner' },
    { code: 'SAPS-91(a)', purpose: 'South African Police Clearance Certificate' },
  ],
  'business-visa': [
    { code: 'BI-1738',    purpose: 'Temporary residence visa application (via VFS Global)' },
    { code: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner' },
    { code: 'SAPS-91(a)', purpose: 'South African Police Clearance Certificate' },
  ],
  'study-visa': [
    { code: 'BI-1738',    purpose: 'Temporary residence visa application (via VFS Global)' },
    { code: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner' },
  ],
  'permanent-residence': [
    { code: 'BI-947',     purpose: 'Permanent residence application form' },
    { code: 'BI-811',     purpose: 'Medical certificate and radiology report (DHA-approved)' },
    { code: 'SAPS-91(a)', purpose: 'South African Police Clearance Certificate' },
  ],
};

function FieldTable({ rows }: { rows: FieldEntry[] }) {
  const visible = rows.filter((r) => r.value);
  if (visible.length === 0) return null;
  return (
    <View style={styles.fieldTable}>
      {visible.map((row, i) => (
        <View key={row.key} style={[styles.fieldRow, i % 2 === 1 ? styles.fieldRowAlt : {}, i === visible.length - 1 ? styles.fieldRowLast : {}]}>
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

function formatDate(iso: string | undefined) {
  if (!iso) return iso;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export function ApplicationPDF({ data, logoUrl }: { data: PdfData; logoUrl: string }) {
  const fullName = [data.firstName, data.middleNames, data.lastName].filter(Boolean).join(' ');
  const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

  const isCitizenship = data.visaType === 'citizenship';
  const isGeneralWork = data.visaType === 'general-work';
  const isCritical = data.visaType === 'critical-skills';
  const isBusiness = data.visaType === 'business-visa';
  const isStudy = data.visaType === 'study-visa';
  const isPR = data.visaType === 'permanent-residence';

  const forms = PDF_FORMS[data.visaType];

  return (
    <Document
      title={`Visa Pathway — Application Summary — ${fullName}`}
      author='Visa Pathway'
      subject={PDF_HEADER_LABEL[data.visaType]}
    >
      <Page size='A4' style={styles.page}>

        {/* White top bar */}
        <View style={styles.headerTop} fixed>
          <Image src={logoUrl} style={styles.logo} />
          <Text style={styles.headerDate}>Generated {today}</Text>
        </View>

        {/* Green subtitle band */}
        <View style={styles.headerBand} fixed>
          <Text style={styles.headerBandText}>{PDF_HEADER_LABEL[data.visaType]}</Text>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroLabel}>Prepared for</Text>
          <Text style={styles.heroName}>{fullName.toUpperCase()}</Text>
          <Text style={styles.heroId}>
            {isCitizenship && data.saIdNumber
              ? `SA ID ${data.saIdNumber}   ·   Passport ${data.passportNumber}`
              : `Passport ${data.passportNumber}`}
          </Text>
        </View>

        <View style={styles.body}>

          {/* Personal Information */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Personal Information' />
            <FieldTable rows={[
              { key: 'Full Name',        value: fullName },
              { key: 'Date of Birth',    value: formatDate(data.dateOfBirth) },
              { key: 'Country of Birth', value: data.countryOfBirth },
              { key: 'Nationality',      value: data.nationality },
              { key: 'Passport Number',  value: data.passportNumber },
              ...(isCitizenship ? [{ key: 'SA ID Number', value: data.saIdNumber }] : []),
              { key: 'Phone',            value: data.phone },
              { key: 'Email',            value: data.email },
              { key: 'Marital Status',   value: capitalize(data.maritalStatus) },
              { key: "Spouse's Full Name",    value: [data.spouseFirstName, data.spouseMiddleNames, data.spouseLastName].filter(Boolean).join(' ') || undefined },
              { key: "Spouse's Maiden Name",  value: data.spouseMaidenName },
              { key: "Spouse's Date of Birth",value: formatDate(data.spouseDateOfBirth) },
              { key: "Spouse's Nationality",  value: data.spouseNationality },
              { key: 'Date of Marriage',      value: formatDate(data.marriageDate) },
              { key: 'Place of Marriage',     value: data.marriagePlace },
              { key: 'Date of Divorce',       value: formatDate(data.divorceDate) },
              { key: 'Country of Divorce',    value: data.divorceCountry },
              { key: 'Divorce Decree No.',    value: data.divorceDecreeNumber },
              { key: "Deceased Spouse's Name",value: data.deceasedSpouseName },
              { key: 'Date of Death',         value: formatDate(data.deceasedDateOfDeath) },
              ...(isCitizenship ? [
                { key: 'PR Permit Number',    value: data.prNumber },
                { key: 'PR Reference Number', value: data.prReferenceNumber },
                { key: 'PR Issue Date',       value: formatDate(data.prIssueDate) },
                { key: 'Years in South Africa', value: data.yearsInSA },
              ] : []),
            ]} />
          </View>

          {/* Residential Address */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Residential Address' />
            <FieldTable rows={[
              { key: 'Street Address', value: data.streetAddress },
              { key: 'Suburb',         value: data.suburb },
              { key: 'City',           value: data.city },
              { key: 'Province',       value: data.province },
              { key: 'Postal Code',    value: data.postalCode },
            ]} />
          </View>

          {/* Visa-specific details */}
          {isPR && (
            <View style={styles.section} wrap={false}>
              <SectionHeading title='Current Status & PR Category' />
              <FieldTable rows={[
                { key: 'PR Category',         value: data.prCategory },
                { key: 'Current Visa Type',   value: data.currentVisaType },
                { key: 'Current Visa Number', value: data.currentVisaNumber },
                { key: 'Current Visa Expiry', value: formatDate(data.currentVisaExpiry) },
              ]} />
            </View>
          )}

          {isBusiness && (
            <View style={styles.section} wrap={false}>
              <SectionHeading title='Business Details' />
              <FieldTable rows={[
                { key: 'Business Name',    value: data.businessName },
                { key: 'Business Sector', value: data.businessSector },
                { key: 'Investment (ZAR)', value: data.investmentAmount },
                { key: 'DTIC Ref.',        value: data.dticRef },
              ]} />
            </View>
          )}

          {isStudy && (
            <View style={styles.section} wrap={false}>
              <SectionHeading title='Study Details' />
              <FieldTable rows={[
                { key: 'Institution',       value: data.institutionName },
                { key: 'Course',            value: data.courseName },
                { key: 'Student Ref.',      value: data.studentRef },
                { key: 'Financial Sponsor', value: data.financialSponsor },
              ]} />
            </View>
          )}

          {isCritical && (
            <View style={styles.section} wrap={false}>
              <SectionHeading title='Skills & Employment' />
              <FieldTable rows={[
                { key: 'Occupation',           value: data.occupation },
                { key: 'SAQA Eval. Ref.',      value: data.saqaRef },
                { key: 'Professional Body Reg.', value: data.professionalBodyReg },
                { key: 'Job Offer',            value: data.hasJobOffer === 'yes' ? 'Yes' : data.hasJobOffer === 'no' ? 'No (seeking post-arrival)' : undefined },
                { key: 'Employer',             value: data.employer },
                { key: 'Employer Reg. No.',    value: data.employerRegistration },
              ]} />
            </View>
          )}

          {isGeneralWork && (
            <View style={styles.section} wrap={false}>
              <SectionHeading title='Employment Details' />
              <FieldTable rows={[
                { key: 'Occupation',          value: data.occupation },
                { key: 'Employer',            value: data.employer },
                { key: 'Employer Reg. No.',   value: data.employerRegistration },
                { key: 'Monthly Salary (ZAR)', value: data.salary },
                { key: 'DOEL Certificate Ref.', value: data.doelCertRef },
              ]} />
            </View>
          )}

          {/* Background */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='Background' />
            <FieldTable rows={[
              ...(!isGeneralWork && !isCritical && !isBusiness ? [{ key: 'Occupation', value: data.occupation }] : []),
              ...(!isGeneralWork && !isCritical ? [{ key: 'Employer', value: data.employer }] : []),
              { key: 'Official Language', value: data.languageSpoken },
              {
                key: 'Criminal Record',
                value: data.criminalRecord === 'no' ? 'None declared' : `Yes — ${data.criminalDetails ?? 'see attached details'}`,
              },
              ...(isCitizenship && data.dualCitizenshipStatus ? [{
                key: 'Dual Citizenship',
                value: data.dualCitizenshipStatus === 'permitted'
                  ? 'Permitted by home country'
                  : data.dualCitizenshipStatus === 'not-permitted'
                    ? 'Not permitted — renunciation required'
                    : 'Status unknown / to be confirmed',
              }] : []),
            ]} />
          </View>

          {/* DHA Forms */}
          <View style={styles.section} wrap={false}>
            <SectionHeading title='DHA Forms to Complete' />
            <View style={styles.formsTable}>
              <View style={styles.formsHeader}>
                <Text style={styles.formsHeaderCode}>Form</Text>
                <Text style={styles.formsHeaderPurpose}>Purpose</Text>
              </View>
              {forms.map((form, i) => (
                <View key={form.code} style={[styles.formRow, i % 2 === 1 ? styles.formRowAlt : {}, i === forms.length - 1 ? styles.formRowLast : {}]}>
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
          <Text style={styles.footerText}>Reference only — not an official DHA document</Text>
          <Text style={styles.footerText}>Generated {today}</Text>
        </View>

      </Page>
    </Document>
  );
}
