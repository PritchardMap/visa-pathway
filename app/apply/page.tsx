'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  useForm,
  useController,
  type SubmitHandler,
  type Control,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  ArrowLeft,
  User,
  Home,
  FileText,
  ClipboardList,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import { CountrySelect } from '@/components/apply/country-select';
import { PhoneInput } from '@/components/apply/phone-input';
import LinkifyText from '@/lib/linkify';
import type { VisaTypeId } from '@/lib/visa-types';

const PdfDownloadButton = dynamic(
  () => import('@/components/apply/pdf-download-button').then((m) => m.PdfDownloadButton),
  { ssr: false, loading: () => null }
);

// --- Visa type config ---

const VISA_TYPE_CONFIG: { id: VisaTypeId; name: string; tagline: string; legalBasis: string }[] = [
  { id: 'citizenship',          name: 'South African Citizenship',   tagline: 'Naturalisation for permanent residents',                    legalBasis: 'SA Citizenship Act, s5'       },
  { id: 'general-work',         name: 'General Work Visa',           tagline: 'For skilled workers with a confirmed SA job offer',          legalBasis: 'Immigration Act, s19(1)'      },
  { id: 'critical-skills',      name: 'Critical Skills Work Visa',   tagline: 'For professionals in high-demand occupations',               legalBasis: 'Immigration Act, s19(2)'      },
  { id: 'business-visa',        name: 'Business Visa',               tagline: 'For entrepreneurs investing in a SA business',               legalBasis: 'Immigration Act, s15'         },
  { id: 'study-visa',           name: 'Study Visa',                  tagline: 'For students at accredited SA institutions',                 legalBasis: 'Immigration Act, s18'         },
  { id: 'permanent-residence',  name: 'Permanent Residence Permit',  tagline: 'Indefinite right to live and work in South Africa',          legalBasis: 'Immigration Act, s26–27'      },
];

// --- Forms per visa type ---

interface AppForm {
  id: string;
  title: string;
  purpose: string;
  downloadUrl?: string;
  notes?: string;
}

const FORMS_BY_VISA_TYPE: Record<VisaTypeId, AppForm[]> = {
  citizenship: [
    { id: 'dha-63',   title: 'DHA-63',     purpose: 'Application for Certificate of Naturalisation — the primary statutory form.',    downloadUrl: '/forms/DHA63.pdf',  notes: 'Primary statutory form under the Citizenship Regulations.'                                        },
    { id: 'dha-529',  title: 'DHA-529',    purpose: 'Determination of citizenship status — confirms PR and eligibility before naturalisation.', downloadUrl: '/forms/DHA529.pdf', notes: 'Often required before a naturalisation application is accepted.'                                    },
    { id: 'dha-757',  title: 'DHA-757',    purpose: 'Naturalisation questionnaire (supporting form).',                                notes: 'Supporting questionnaire commonly required alongside DHA-63. Obtain from your Home Affairs office.'  },
    { id: 'bi-9',     title: 'BI-9',       purpose: 'Application for a South African identity document post-naturalisation.',          notes: 'Apply at the same Home Affairs office after naturalisation is granted.'                               },
    { id: 'saps-91a', title: 'SAPS 91(a)', purpose: 'South African Police Clearance Certificate — criminal background check.',         notes: 'Apply at any SAPS station. Fingerprint processing takes 4–8 weeks via the Criminal Record Centre.'   },
  ],
  'general-work': [
    { id: 'bi-1738',  title: 'BI-1738',    purpose: 'Temporary residence visa application — standard DHA form submitted through VFS Global.', downloadUrl: 'https://visa.vfsglobal.com/zaf/en/dha', notes: 'Complete all sections. Sign before a commissioner of oaths.' },
    { id: 'bi-811',   title: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner confirming good health.',    notes: 'Only DHA-approved doctors accepted. Practitioner list available at VFS Global.'                         },
    { id: 'saps-91a', title: 'SAPS 91(a)', purpose: 'South African Police Clearance Certificate.',                                     notes: 'Apply at any SAPS station. Allow 4–8 weeks.'                                                          },
  ],
  'critical-skills': [
    { id: 'bi-1738',  title: 'BI-1738',    purpose: 'Temporary residence visa application form, submitted through VFS Global.',        downloadUrl: 'https://visa.vfsglobal.com/zaf/en/dha', notes: 'Complete all sections in full. Sign before a commissioner of oaths.' },
    { id: 'bi-811',   title: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner.',                          notes: 'Only DHA-approved practitioners accepted.'                                                              },
    { id: 'saps-91a', title: 'SAPS 91(a)', purpose: 'South African Police Clearance Certificate.',                                     notes: 'Apply at any SAPS station. Allow 4–8 weeks.'                                                          },
  ],
  'business-visa': [
    { id: 'bi-1738',  title: 'BI-1738',    purpose: 'Temporary residence visa application form, submitted through VFS Global.',        downloadUrl: 'https://visa.vfsglobal.com/zaf/en/dha', notes: 'Complete all sections. Sign before a commissioner of oaths.' },
    { id: 'bi-811',   title: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner.',                          notes: 'Only DHA-approved practitioners accepted.'                                                              },
    { id: 'saps-91a', title: 'SAPS 91(a)', purpose: 'South African Police Clearance Certificate.',                                     notes: 'Apply at any SAPS station. Allow 4–8 weeks.'                                                          },
  ],
  'study-visa': [
    { id: 'bi-1738',  title: 'BI-1738',    purpose: 'Temporary residence visa application form, submitted through VFS Global.',        downloadUrl: 'https://visa.vfsglobal.com/zaf/en/dha', notes: 'Complete all sections. Sign before a commissioner of oaths.' },
    { id: 'bi-811',   title: 'BI-811',     purpose: 'Medical certificate from a DHA-approved practitioner.',                          notes: 'Only DHA-approved practitioners accepted.'                                                              },
  ],
  'permanent-residence': [
    { id: 'bi-947',   title: 'BI-947',     purpose: 'Permanent residence application form — specific DHA form for PR (distinct from BI-1738 used for temporary visas).', downloadUrl: 'https://visa.vfsglobal.com/zaf/en/dha', notes: 'A detailed form — complete carefully. Allow extra time.' },
    { id: 'bi-811',   title: 'BI-811',     purpose: 'Medical certificate and radiology report from a DHA-approved practitioner.',      notes: 'Book early — certificate valid 6 months and must not expire before submission.'                         },
    { id: 'saps-91a', title: 'SAPS 91(a)', purpose: 'South African Police Clearance Certificate.',                                     notes: 'Apply at any SAPS station. Allow 4–8 weeks.'                                                          },
  ],
};

const REVIEW_DESCRIPTION: Record<VisaTypeId, string> = {
  'citizenship':         "Use the details below to complete your DHA forms. Each section maps directly to the fields you'll encounter across DHA-63, DHA-529, and BI-9.",
  'general-work':        "Use the details below to complete your BI-1738 temporary residence visa application. Submit through a VFS Global application centre with your supporting documents.",
  'critical-skills':     "Use the details below to complete your BI-1738 application. Submit through VFS Global with your SAQA evaluation and proof of professional body registration.",
  'business-visa':       "Use the details below to complete your BI-1738 application. Ensure your DTIC recommendation letter is ready before submitting to VFS Global.",
  'study-visa':          "Use the details below to complete your BI-1738 study visa application. Your acceptance letter and proof of funds are the most critical supporting documents.",
  'permanent-residence': "Use the details below to complete your BI-947 permanent residence application. Submit through VFS Global with your full supporting document package.",
};

// --- Schemas ---

const personalSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleNames: z.string().optional(),
  lastName: z.string().min(1, 'Surname is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  countryOfBirth: z.string().min(1, 'Country of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  passportNumber: z.string().min(1, 'Passport number is required'),
  saIdNumber: z.string().optional(),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Valid email required'),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
  // Married
  spouseFirstName: z.string().optional(),
  spouseMiddleNames: z.string().optional(),
  spouseLastName: z.string().optional(),
  spouseMaidenName: z.string().optional(),
  spouseDateOfBirth: z.string().optional(),
  spouseNationality: z.string().optional(),
  marriageDate: z.string().optional(),
  marriagePlace: z.string().optional(),
  // Divorced
  divorceDate: z.string().optional(),
  divorceCountry: z.string().optional(),
  divorceDecreeNumber: z.string().optional(),
  // Widowed
  deceasedSpouseName: z.string().optional(),
  deceasedDateOfDeath: z.string().optional(),
  // Citizenship only
  prNumber: z.string().optional(),
  prReferenceNumber: z.string().optional(),
  prIssueDate: z.string().optional(),
  yearsInSA: z.string().optional(),
});

const residenceSchema = z.object({
  streetAddress: z.string().min(1, 'Street address is required'),
  suburb: z.string().min(1, 'Suburb is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  postalCode: z.string().min(4, 'Postal code is required'),
});

const backgroundSchema = z.object({
  occupation: z.string().optional(),
  employer: z.string().optional(),
  languageSpoken: z.string().optional(),
  criminalRecord: z.enum(['no', 'yes']),
  criminalDetails: z.string().optional(),
  // Citizenship only
  dualCitizenshipStatus: z.enum(['permitted', 'not-permitted', 'unknown']).optional(),
  // General Work
  employerRegistration: z.string().optional(),
  salary: z.string().optional(),
  doelCertRef: z.string().optional(),
  // Critical Skills
  saqaRef: z.string().optional(),
  professionalBodyReg: z.string().optional(),
  hasJobOffer: z.enum(['yes', 'no']).optional(),
  // Business Visa
  businessName: z.string().optional(),
  businessSector: z.string().optional(),
  investmentAmount: z.string().optional(),
  dticRef: z.string().optional(),
  // Study Visa
  institutionName: z.string().optional(),
  courseName: z.string().optional(),
  studentRef: z.string().optional(),
  financialSponsor: z.string().optional(),
  // Permanent Residence
  prCategory: z.string().optional(),
  currentVisaType: z.string().optional(),
  currentVisaNumber: z.string().optional(),
  currentVisaExpiry: z.string().optional(),
});

type PersonalData = z.infer<typeof personalSchema>;
type ResidenceData = z.infer<typeof residenceSchema>;
type BackgroundData = z.infer<typeof backgroundSchema>;

type AllData = PersonalData & ResidenceData & BackgroundData;

const PROVINCES = [
  'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape',
  'Limpopo', 'Mpumalanga', 'North West', 'Free State', 'Northern Cape',
];

const LANGUAGES = [
  'English', 'Afrikaans', 'Zulu', 'Xhosa', 'Northern Sotho',
  'Tswana', 'Sotho', 'Tsonga', 'Swati', 'Venda', 'Ndebele',
];

const STEPS = [
  { id: 'visa-type',  label: 'Visa Type',      icon: Briefcase     },
  { id: 'personal',   label: 'Personal Info',   icon: User          },
  { id: 'residence',  label: 'Residence',       icon: Home          },
  { id: 'background', label: 'Background',      icon: FileText      },
  { id: 'review',     label: 'Review & Export', icon: ClipboardList },
];

// --- Main component ---

function ApplyPageContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') as VisaTypeId | null;
  const preselected = typeParam && VISA_TYPE_CONFIG.some((v) => v.id === typeParam) ? typeParam : null;

  const [step, setStep] = useState(() => (preselected ? 1 : 0));
  const [visaType, setVisaType] = useState<VisaTypeId | null>(() => preselected);
  const [allData, setAllData] = useState<Partial<AllData>>({});

  const personalForm = useForm<PersonalData>({
    resolver: zodResolver(personalSchema),
    defaultValues: allData,
  });
  const residenceForm = useForm<ResidenceData>({
    resolver: zodResolver(residenceSchema),
    defaultValues: allData,
  });
  const backgroundForm = useForm<BackgroundData>({
    resolver: zodResolver(backgroundSchema),
    defaultValues: allData,
  });

  const handleVisaType = (type: VisaTypeId) => {
    setVisaType(type);
    setStep(1);
  };

  const handlePersonal: SubmitHandler<PersonalData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleResidence: SubmitHandler<ResidenceData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleBackground: SubmitHandler<BackgroundData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(4);
  };

  const selectedConfig = VISA_TYPE_CONFIG.find((v) => v.id === visaType);

  return (
    <div className='container-page py-12 md:py-16'>
      {/* Header */}
      <div className='max-w-[580px] mb-10'>
        <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>
          Application Assistant
        </p>
        <h1
          className='heading-display text-3xl md:text-4xl mb-4'
          style={{ color: 'var(--text-primary)' }}
        >
          {selectedConfig ? selectedConfig.name : 'Enter your details once.'}
        </h1>
        <p
          className='text-base leading-relaxed'
          style={{ color: 'var(--text-secondary)', maxWidth: '50ch' }}
        >
          {selectedConfig
            ? `Fill in this form and we'll generate a pre-filled summary for your ${selectedConfig.name} application. No data is stored on our servers.`
            : "Fill in this form and we'll generate a pre-filled summary matching all the DHA forms you need to submit. No data is stored on our servers."}
        </p>
      </div>

      {/* Step nav */}
      <div className='flex items-center gap-0 mb-10 overflow-x-auto pb-2'>
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isDone = i < step;
          const isCurrent = i === step;
          return (
            <div key={s.id} className='flex items-center'>
              <div
                className='flex items-center gap-2 text-sm font-medium whitespace-nowrap'
                style={{
                  color: isCurrent
                    ? 'var(--text-primary)'
                    : isDone
                      ? 'var(--green-dark)'
                      : 'var(--text-muted)',
                }}
              >
                <div
                  style={{
                    width: 28, height: 28, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: isDone ? 'var(--green)' : isCurrent ? 'var(--amber)' : 'var(--border)',
                    color: isDone || isCurrent ? 'var(--background)' : 'var(--text-muted)',
                    flexShrink: 0,
                  }}
                >
                  {isDone ? <CheckCircle2 size={14} /> : <Icon size={14} />}
                </div>
                <span className='hidden sm:inline'>{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: 48, height: 1,
                    backgroundColor: i < step ? 'var(--green)' : 'var(--border)',
                    margin: '0 8px', flexShrink: 0,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Forms */}
      <div style={{ maxWidth: 920 }}>
        {step === 0 && <StepVisaType onSelect={handleVisaType} />}
        {step === 1 && (
          <StepPersonal form={personalForm} onSubmit={handlePersonal} visaType={visaType!} />
        )}
        {step === 2 && (
          <StepResidence form={residenceForm} onSubmit={handleResidence} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <StepBackground
            form={backgroundForm}
            onSubmit={handleBackground}
            onBack={() => setStep(2)}
            visaType={visaType!}
          />
        )}
        {step === 4 && (
          <StepReview
            data={allData as AllData}
            visaType={visaType!}
            onBack={() => setStep(3)}
          />
        )}
      </div>
    </div>
  );
}

// --- Field helpers ---

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className='block text-sm font-medium mb-1.5' style={{ color: 'var(--text-primary)' }}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className='text-xs mt-1 m-0' style={{ color: 'var(--text-muted)' }}>{hint}</p>
      )}
      {error && (
        <p className='text-xs mt-1 m-0' style={{ color: 'oklch(50% 0.18 25)' }}>{error}</p>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '10px 14px', borderRadius: 8,
  border: '1px solid var(--border)', backgroundColor: 'var(--background)',
  color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none',
  boxSizing: 'border-box' as const,
};

const selectStyle = { ...inputStyle };

function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px 32px' }}>
      {children}
    </div>
  );
}

function NavButtons({ onBack, submitLabel = 'Continue' }: { onBack?: () => void; submitLabel?: string }) {
  return (
    <div className='flex items-center justify-between pt-2'>
      {onBack ? (
        <button
          type='button'
          onClick={onBack}
          className='flex items-center gap-2 text-sm font-medium'
          style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={14} />
          Back
        </button>
      ) : <div />}
      <button
        type='submit'
        className='inline-flex items-center gap-2 font-semibold text-sm'
        style={{ backgroundColor: 'var(--amber)', color: 'var(--background)', padding: '10px 24px', borderRadius: 9, border: 'none', cursor: 'pointer' }}
      >
        {submitLabel} <ArrowRight size={14} />
      </button>
    </div>
  );
}

// --- Controlled wrappers ---

function CountrySelectField({
  name, control, error, mode, placeholder,
}: {
  name: 'countryOfBirth' | 'nationality' | 'spouseNationality';
  control: Control<PersonalData>;
  error?: boolean;
  mode: 'country' | 'nationality';
  placeholder?: string;
}) {
  const { field } = useController({ name, control });
  return (
    <CountrySelect value={field.value ?? ''} onChange={field.onChange} error={error} mode={mode} placeholder={placeholder} />
  );
}

function PhoneInputField({ name, control, error }: { name: 'phone'; control: Control<PersonalData>; error?: boolean }) {
  const { field } = useController({ name, control });
  return <PhoneInput value={field.value ?? ''} onChange={field.onChange} error={error} />;
}

// --- Step 0: Visa Type ---

function StepVisaType({ onSelect }: { onSelect: (type: VisaTypeId) => void }) {
  return (
    <StepCard>
      <h2 className='heading-section text-lg mb-2' style={{ color: 'var(--text-primary)' }}>
        What are you applying for?
      </h2>
      <p className='text-sm mb-6' style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}>
        Select your visa type. The form will show only the fields and DHA documents relevant to your application.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {VISA_TYPE_CONFIG.map((vt) => (
          <button
            key={vt.id}
            type='button'
            onClick={() => onSelect(vt.id)}
            className='text-left'
            style={{
              padding: '16px 18px', borderRadius: 10, cursor: 'pointer',
              border: '1px solid var(--border)', backgroundColor: 'var(--background)',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--amber)';
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--surface)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--background)';
            }}
          >
            <div className='font-semibold text-sm mb-0.5' style={{ color: 'var(--text-primary)' }}>
              {vt.name}
            </div>
            <div className='text-xs' style={{ color: 'var(--text-secondary)' }}>
              {vt.tagline}
            </div>
            <div className='text-xs mt-1.5 font-medium' style={{ color: 'var(--amber-dark)' }}>
              {vt.legalBasis}
            </div>
          </button>
        ))}
      </div>
    </StepCard>
  );
}

// --- Step 1: Personal ---

function SectionDivider({ label }: { label: string }) {
  return (
    <div className='sm:col-span-2 flex items-center gap-3 pt-2' style={{ borderTop: '1px solid var(--border)' }}>
      <p className='label-caps m-0' style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</p>
      <div style={{ flex: 1, height: 1, backgroundColor: 'var(--border)' }} />
    </div>
  );
}

function StepPersonal({
  form,
  onSubmit,
  visaType,
}: {
  form: ReturnType<typeof useForm<PersonalData>>;
  onSubmit: SubmitHandler<PersonalData>;
  visaType: VisaTypeId;
}) {
  const { register, handleSubmit, control, watch, formState: { errors } } = form;
  const maritalStatus = watch('maritalStatus');
  const isCitizenship = visaType === 'citizenship';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2 className='heading-section text-lg mb-6' style={{ color: 'var(--text-primary)' }}>
          Personal Information
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
          <Field label='First Name' error={errors.firstName?.message}>
            <input {...register('firstName')} style={inputStyle} placeholder='e.g. Tendai' />
          </Field>
          <Field label='Middle Name(s)' error={errors.middleNames?.message}>
            <input {...register('middleNames')} style={inputStyle} placeholder='Optional' />
          </Field>
          <Field label='Surname' error={errors.lastName?.message}>
            <input {...register('lastName')} style={inputStyle} placeholder='e.g. Moyo' />
          </Field>
          <Field label='Date of Birth' error={errors.dateOfBirth?.message}>
            <input {...register('dateOfBirth')} type='date' style={inputStyle} />
          </Field>
          <Field label='Country of Birth' error={errors.countryOfBirth?.message}>
            <CountrySelectField name='countryOfBirth' control={control} error={!!errors.countryOfBirth} mode='country' placeholder='Select country of birth…' />
          </Field>
          <Field label='Nationality' error={errors.nationality?.message}>
            <CountrySelectField name='nationality' control={control} error={!!errors.nationality} mode='nationality' placeholder='Select nationality…' />
          </Field>
          <Field label='Passport Number' error={errors.passportNumber?.message}>
            <input {...register('passportNumber')} style={inputStyle} placeholder='e.g. AN123456' />
          </Field>

          {isCitizenship && (
            <Field label='SA ID Number' error={errors.saIdNumber?.message} hint='Your South African ID number (issued with permanent residence)'>
              <input {...register('saIdNumber')} style={inputStyle} placeholder='e.g. 8001015009087' />
            </Field>
          )}

          <Field label='Phone Number' error={errors.phone?.message}>
            <PhoneInputField name='phone' control={control} error={!!errors.phone} />
          </Field>
          <Field label='Email Address' error={errors.email?.message}>
            <input {...register('email')} type='email' style={inputStyle} placeholder='your@email.com' />
          </Field>

          {/* Marital status */}
          <div className='sm:col-span-2'>
            <Field label='Marital Status' error={errors.maritalStatus?.message}>
              <select {...register('maritalStatus')} style={selectStyle}>
                <option value=''>Select…</option>
                <option value='single'>Single</option>
                <option value='married'>Married</option>
                <option value='divorced'>Divorced</option>
                <option value='widowed'>Widowed</option>
              </select>
            </Field>
          </div>

          {maritalStatus === 'married' && (
            <>
              <SectionDivider label='Spouse Details' />
              <Field label="Spouse's First Name" error={errors.spouseFirstName?.message}>
                <input {...register('spouseFirstName')} style={inputStyle} placeholder='As per marriage certificate' />
              </Field>
              <Field label="Spouse's Middle Name(s)" error={errors.spouseMiddleNames?.message}>
                <input {...register('spouseMiddleNames')} style={inputStyle} placeholder='Optional' />
              </Field>
              <Field label="Spouse's Surname" error={errors.spouseLastName?.message}>
                <input {...register('spouseLastName')} style={inputStyle} placeholder='As per marriage certificate' />
              </Field>
              <Field label="Spouse's Maiden Name" error={errors.spouseMaidenName?.message}>
                <input {...register('spouseMaidenName')} style={inputStyle} placeholder='If applicable' />
              </Field>
              <Field label="Spouse's Date of Birth" error={errors.spouseDateOfBirth?.message}>
                <input {...register('spouseDateOfBirth')} type='date' style={inputStyle} />
              </Field>
              <Field label="Spouse's Nationality" error={errors.spouseNationality?.message}>
                <CountrySelectField name='spouseNationality' control={control} error={!!errors.spouseNationality} mode='nationality' placeholder='Select nationality…' />
              </Field>
              <Field label='Date of Marriage' error={errors.marriageDate?.message}>
                <input {...register('marriageDate')} type='date' style={inputStyle} />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='Place of Marriage' error={errors.marriagePlace?.message} hint='City and country where the marriage was solemnised'>
                  <input {...register('marriagePlace')} style={inputStyle} placeholder='e.g. Harare, Zimbabwe' />
                </Field>
              </div>
            </>
          )}

          {maritalStatus === 'divorced' && (
            <>
              <SectionDivider label='Divorce Details' />
              <Field label='Date of Divorce' error={errors.divorceDate?.message}>
                <input {...register('divorceDate')} type='date' style={inputStyle} />
              </Field>
              <Field label='Country of Divorce' error={errors.divorceCountry?.message}>
                <input {...register('divorceCountry')} style={inputStyle} placeholder='e.g. South Africa' />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='Divorce Decree / Court Order Number' error={errors.divorceDecreeNumber?.message} hint='Reference number on your divorce order'>
                  <input {...register('divorceDecreeNumber')} style={inputStyle} placeholder='e.g. 12345/2015' />
                </Field>
              </div>
            </>
          )}

          {maritalStatus === 'widowed' && (
            <>
              <SectionDivider label='Deceased Spouse Details' />
              <Field label="Deceased Spouse's Full Name" error={errors.deceasedSpouseName?.message}>
                <input {...register('deceasedSpouseName')} style={inputStyle} placeholder='As per death certificate' />
              </Field>
              <Field label='Date of Death' error={errors.deceasedDateOfDeath?.message}>
                <input {...register('deceasedDateOfDeath')} type='date' style={inputStyle} />
              </Field>
            </>
          )}

          {/* PR Permit — citizenship only */}
          {isCitizenship && (
            <>
              <SectionDivider label='Permanent Residence Permit' />
              <Field label='Permit Number' error={errors.prNumber?.message} hint='From your permanent residence certificate'>
                <input {...register('prNumber')} style={inputStyle} placeholder='e.g. PRP/00000/2020 PRT' />
              </Field>
              <Field label='Reference Number' error={errors.prReferenceNumber?.message} hint='Case reference on your PR approval letter'>
                <input {...register('prReferenceNumber')} style={inputStyle} placeholder='e.g. PRP0000000' />
              </Field>
              <Field label='Issue Date' error={errors.prIssueDate?.message}>
                <input {...register('prIssueDate')} type='date' style={inputStyle} />
              </Field>
              <Field label='Years Lived in South Africa' error={errors.yearsInSA?.message}>
                <input {...register('yearsInSA')} style={inputStyle} placeholder='e.g. 7' />
              </Field>
            </>
          )}
        </div>

        <NavButtons />
      </StepCard>
    </form>
  );
}

// --- Step 2: Residence ---

function StepResidence({
  form, onSubmit, onBack,
}: {
  form: ReturnType<typeof useForm<ResidenceData>>;
  onSubmit: SubmitHandler<ResidenceData>;
  onBack: () => void;
}) {
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2 className='heading-section text-lg mb-6' style={{ color: 'var(--text-primary)' }}>
          Residential Address
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
          <div className='sm:col-span-2'>
            <Field label='Street Address' error={errors.streetAddress?.message}>
              <input {...register('streetAddress')} style={inputStyle} placeholder='e.g. 14 Main Road' />
            </Field>
          </div>
          <Field label='Suburb' error={errors.suburb?.message}>
            <input {...register('suburb')} style={inputStyle} placeholder='e.g. Sandton' />
          </Field>
          <Field label='City' error={errors.city?.message}>
            <input {...register('city')} style={inputStyle} placeholder='e.g. Johannesburg' />
          </Field>
          <Field label='Province' error={errors.province?.message}>
            <select {...register('province')} style={selectStyle}>
              <option value=''>Select province…</option>
              {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </Field>
          <Field label='Postal Code' error={errors.postalCode?.message}>
            <input {...register('postalCode')} style={inputStyle} placeholder='e.g. 2196' />
          </Field>
        </div>
        <NavButtons onBack={onBack} />
      </StepCard>
    </form>
  );
}

// --- Step 3: Background ---

function StepBackground({
  form, onSubmit, onBack, visaType,
}: {
  form: ReturnType<typeof useForm<BackgroundData>>;
  onSubmit: SubmitHandler<BackgroundData>;
  onBack: () => void;
  visaType: VisaTypeId;
}) {
  const { register, handleSubmit, watch, formState: { errors } } = form;
  const criminalRecord = watch('criminalRecord');
  const hasJobOffer = watch('hasJobOffer');

  const isCitizenship = visaType === 'citizenship';
  const isGeneralWork = visaType === 'general-work';
  const isCritical = visaType === 'critical-skills';
  const isBusiness = visaType === 'business-visa';
  const isStudy = visaType === 'study-visa';
  const isPR = visaType === 'permanent-residence';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2 className='heading-section text-lg mb-6' style={{ color: 'var(--text-primary)' }}>
          Background & Details
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>

          {/* Permanent Residence: current status & category */}
          {isPR && (
            <>
              <div className='sm:col-span-2'>
                <Field label='PR Application Category' error={errors.prCategory?.message}>
                  <select {...register('prCategory')} style={selectStyle}>
                    <option value=''>Select category…</option>
                    <option value='critical-skills'>Critical Skills — s27(a)</option>
                    <option value='general-work'>General Work — s27(b) (5 consecutive years)</option>
                    <option value='marriage'>Spouse of SA Citizen or PR Holder — s26(b)</option>
                    <option value='financial-independence'>Financial Independence — s27(f)</option>
                    <option value='long-residence'>Long-term Residence — 10+ years, s27(d)</option>
                  </select>
                </Field>
              </div>
              <Field label='Current Visa / Permit Type' error={errors.currentVisaType?.message} hint='Your current legal status in South Africa'>
                <input {...register('currentVisaType')} style={inputStyle} placeholder='e.g. Critical Skills Work Visa' />
              </Field>
              <Field label='Current Permit / Visa Number' error={errors.currentVisaNumber?.message}>
                <input {...register('currentVisaNumber')} style={inputStyle} placeholder='As per your current permit' />
              </Field>
              <Field label='Current Permit Expiry Date' error={errors.currentVisaExpiry?.message}>
                <input {...register('currentVisaExpiry')} type='date' style={inputStyle} />
              </Field>
              <SectionDivider label='Employment' />
            </>
          )}

          {/* Business Visa: business details */}
          {isBusiness && (
            <>
              <Field label='Business Name' error={errors.businessName?.message}>
                <input {...register('businessName')} style={inputStyle} placeholder='Proposed or existing business name' />
              </Field>
              <Field label='Business Sector / Industry' error={errors.businessSector?.message}>
                <input {...register('businessSector')} style={inputStyle} placeholder='e.g. Technology, Manufacturing' />
              </Field>
              <Field label='Proposed Investment Amount (ZAR)' error={errors.investmentAmount?.message} hint='Unencumbered capital to be invested in the business'>
                <input {...register('investmentAmount')} style={inputStyle} placeholder='e.g. 5,000,000' />
              </Field>
              <Field label='DTIC Recommendation Reference' error={errors.dticRef?.message} hint='Reference from the Dept of Trade, Industry and Competition recommendation letter'>
                <input {...register('dticRef')} style={inputStyle} placeholder='e.g. DTIC/BV/2024/0001' />
              </Field>
              <SectionDivider label='Personal Background' />
            </>
          )}

          {/* Study Visa: study details */}
          {isStudy && (
            <>
              <div className='sm:col-span-2'>
                <Field label='Institution Name' error={errors.institutionName?.message} hint='Full name of the accredited South African institution'>
                  <input {...register('institutionName')} style={inputStyle} placeholder='e.g. University of Cape Town' />
                </Field>
              </div>
              <Field label='Course / Qualification' error={errors.courseName?.message}>
                <input {...register('courseName')} style={inputStyle} placeholder='e.g. BSc Computer Science' />
              </Field>
              <Field label='Student / Application Reference' error={errors.studentRef?.message} hint='Reference number from your acceptance letter'>
                <input {...register('studentRef')} style={inputStyle} placeholder='e.g. UCT/2024/00001' />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='Financial Sponsor / Guarantor' error={errors.financialSponsor?.message} hint='Name of person or organisation sponsoring your studies (if applicable)'>
                  <input {...register('financialSponsor')} style={inputStyle} placeholder='Optional' />
                </Field>
              </div>
              <SectionDivider label='Personal Background' />
            </>
          )}

          {/* Occupation — all types except business-visa */}
          {!isBusiness && (
            <Field
              label={isStudy ? 'Current Occupation' : 'Occupation'}
              error={errors.occupation?.message}
            >
              <input
                {...register('occupation')}
                style={inputStyle}
                placeholder={isStudy ? 'Optional — current job if applicable' : 'e.g. Software Engineer'}
              />
            </Field>
          )}

          {/* Employer — citizenship, general-work, PR */}
          {(isCitizenship || isGeneralWork || isPR) && (
            <Field
              label='Employer / Company Name'
              error={errors.employer?.message}
              hint={isCitizenship ? 'Optional' : undefined}
            >
              <input {...register('employer')} style={inputStyle} placeholder={isCitizenship ? 'Optional' : 'Registered company name'} />
            </Field>
          )}

          {/* General Work: employment details */}
          {isGeneralWork && (
            <>
              <SectionDivider label='Employment Details' />
              <Field label='Employer Registration Number' error={errors.employerRegistration?.message} hint='CIPC registration number of the SA employer'>
                <input {...register('employerRegistration')} style={inputStyle} placeholder='e.g. 1999/123456/07' />
              </Field>
              <Field label='Monthly Salary (ZAR)' error={errors.salary?.message} hint='As per employment contract'>
                <input {...register('salary')} style={inputStyle} placeholder='e.g. 45,000' />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='DOEL Certificate Reference' error={errors.doelCertRef?.message} hint='Reference from the Dept of Employment and Labour labour market test certificate'>
                  <input {...register('doelCertRef')} style={inputStyle} placeholder='e.g. MP/EC/2024/0001' />
                </Field>
              </div>
            </>
          )}

          {/* Critical Skills: qualifications & job offer */}
          {isCritical && (
            <>
              <SectionDivider label='Skills & Qualifications' />
              <Field label='SAQA Evaluation Reference' error={errors.saqaRef?.message} hint='Reference from your SAQA foreign qualification evaluation'>
                <input {...register('saqaRef')} style={inputStyle} placeholder='e.g. SAQA/001234/2024' />
              </Field>
              <Field label='Professional Body Registration No.' error={errors.professionalBodyReg?.message} hint='Registration with the relevant SA professional body'>
                <input {...register('professionalBodyReg')} style={inputStyle} placeholder='e.g. ECSA/123456' />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='Do you have a confirmed job offer?' error={errors.hasJobOffer?.message}>
                  <select {...register('hasJobOffer')} style={selectStyle}>
                    <option value=''>Select…</option>
                    <option value='yes'>Yes — I have a confirmed job offer</option>
                    <option value='no'>No — I will seek employment after arriving</option>
                  </select>
                </Field>
              </div>
              {hasJobOffer === 'yes' && (
                <>
                  <Field label='Employer / Company Name' error={errors.employer?.message}>
                    <input {...register('employer')} style={inputStyle} placeholder='Registered company name' />
                  </Field>
                  <Field label='Employer Registration Number' error={errors.employerRegistration?.message} hint='CIPC registration number'>
                    <input {...register('employerRegistration')} style={inputStyle} placeholder='e.g. 1999/123456/07' />
                  </Field>
                </>
              )}
            </>
          )}

          {/* Language — citizenship and PR */}
          {(isCitizenship || isPR) && (
            <div className='sm:col-span-2'>
              <Field label='Official SA language you speak' error={errors.languageSpoken?.message}>
                <select {...register('languageSpoken')} style={selectStyle}>
                  <option value=''>Select language…</option>
                  {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </Field>
            </div>
          )}

          {/* Criminal record — all types */}
          <div className='sm:col-span-2'>
            <Field label='Do you have any criminal convictions?' error={errors.criminalRecord?.message}>
              <select {...register('criminalRecord')} style={selectStyle}>
                <option value=''>Select…</option>
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
              </select>
            </Field>
          </div>
          {criminalRecord === 'yes' && (
            <div className='sm:col-span-2'>
              <Field label='Please provide brief details' error={errors.criminalDetails?.message}>
                <textarea {...register('criminalDetails')} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder='Briefly describe the conviction(s)' />
              </Field>
            </div>
          )}

          {/* Dual citizenship — citizenship only */}
          {isCitizenship && (
            <div className='sm:col-span-2'>
              <Field
                label='Does your home country allow dual citizenship?'
                error={errors.dualCitizenshipStatus?.message}
                hint='Zimbabwe permits dual citizenship only for citizens by birth under the 2013 Constitution; citizens by descent or registration may be required to renounce other citizenships — confirm with your embassy or consulate'
              >
                <select {...register('dualCitizenshipStatus')} style={selectStyle}>
                  <option value=''>Select…</option>
                  <option value='permitted'>Yes, permitted</option>
                  <option value='not-permitted'>No, not permitted (renunciation required)</option>
                  <option value='unknown'>I&apos;m not sure yet</option>
                </select>
              </Field>
            </div>
          )}

        </div>

        <NavButtons onBack={onBack} submitLabel='Review Summary' />
      </StepCard>
    </form>
  );
}

// --- Step 4: Review & Export ---

function StepReview({
  data,
  visaType,
  onBack,
}: {
  data: AllData;
  visaType: VisaTypeId;
  onBack: () => void;
}) {
  const isCitizenship = visaType === 'citizenship';
  const isGeneralWork = visaType === 'general-work';
  const isCritical = visaType === 'critical-skills';
  const isBusiness = visaType === 'business-visa';
  const isStudy = visaType === 'study-visa';
  const isPR = visaType === 'permanent-residence';

  const personalFields: { key: string; value: string | undefined }[] = [
    { key: 'Full Name',      value: [data.firstName, data.middleNames, data.lastName].filter(Boolean).join(' ') },
    { key: 'Date of Birth',  value: data.dateOfBirth },
    { key: 'Country of Birth', value: data.countryOfBirth },
    { key: 'Nationality',    value: data.nationality },
    { key: 'Passport Number', value: data.passportNumber },
    ...(isCitizenship ? [{ key: 'SA ID Number', value: data.saIdNumber }] : []),
    { key: 'Phone',          value: data.phone },
    { key: 'Email',          value: data.email },
    { key: 'Marital Status', value: data.maritalStatus ? data.maritalStatus.charAt(0).toUpperCase() + data.maritalStatus.slice(1) : undefined },
    { key: "Spouse's Full Name", value: [data.spouseFirstName, data.spouseMiddleNames, data.spouseLastName].filter(Boolean).join(' ') || undefined },
    { key: "Spouse's Maiden Name",   value: data.spouseMaidenName },
    { key: "Spouse's Date of Birth", value: data.spouseDateOfBirth },
    { key: "Spouse's Nationality",   value: data.spouseNationality },
    { key: 'Date of Marriage',       value: data.marriageDate },
    { key: 'Place of Marriage',      value: data.marriagePlace },
    { key: 'Date of Divorce',        value: data.divorceDate },
    { key: 'Country of Divorce',     value: data.divorceCountry },
    { key: 'Divorce Decree No.',     value: data.divorceDecreeNumber },
    { key: "Deceased Spouse's Name", value: data.deceasedSpouseName },
    { key: 'Date of Death',          value: data.deceasedDateOfDeath },
    ...(isCitizenship ? [
      { key: 'PR Permit Number',   value: data.prNumber },
      { key: 'PR Reference Number', value: data.prReferenceNumber },
      { key: 'PR Issue Date',      value: data.prIssueDate },
      { key: 'Years in SA',        value: data.yearsInSA },
    ] : []),
  ];

  const visaSpecificFields: { key: string; value: string | undefined }[] = isPR ? [
    { key: 'PR Category',          value: data.prCategory },
    { key: 'Current Visa Type',    value: data.currentVisaType },
    { key: 'Current Visa Number',  value: data.currentVisaNumber },
    { key: 'Current Visa Expiry',  value: data.currentVisaExpiry },
  ] : isBusiness ? [
    { key: 'Business Name',        value: data.businessName },
    { key: 'Business Sector',      value: data.businessSector },
    { key: 'Investment Amount',    value: data.investmentAmount },
    { key: 'DTIC Recommendation Ref.', value: data.dticRef },
  ] : isStudy ? [
    { key: 'Institution',          value: data.institutionName },
    { key: 'Course / Qualification', value: data.courseName },
    { key: 'Student Reference',    value: data.studentRef },
    { key: 'Financial Sponsor',    value: data.financialSponsor },
  ] : isCritical ? [
    { key: 'SAQA Evaluation Ref.', value: data.saqaRef },
    { key: 'Professional Body Reg.', value: data.professionalBodyReg },
    { key: 'Job Offer',            value: data.hasJobOffer === 'yes' ? 'Yes' : data.hasJobOffer === 'no' ? 'No (seeking post-arrival)' : undefined },
  ] : isGeneralWork ? [
    { key: 'Employer Reg. No.',    value: data.employerRegistration },
    { key: 'Monthly Salary',       value: data.salary },
    { key: 'DOEL Certificate Ref.', value: data.doelCertRef },
  ] : [];

  const backgroundFields: { key: string; value: string | undefined }[] = [
    ...(data.occupation ? [{ key: 'Occupation', value: data.occupation }] : []),
    ...(data.employer ? [{ key: 'Employer', value: data.employer }] : []),
    ...(data.languageSpoken ? [{ key: 'Language Proficiency', value: data.languageSpoken }] : []),
    { key: 'Criminal Record', value: data.criminalRecord === 'no' ? 'None' : `Yes — ${data.criminalDetails ?? 'see details'}` },
    ...(isCitizenship && data.dualCitizenshipStatus ? [{
      key: 'Dual Citizenship',
      value: data.dualCitizenshipStatus === 'permitted'
        ? 'Permitted by home country'
        : data.dualCitizenshipStatus === 'not-permitted'
          ? 'Not permitted — renunciation required'
          : 'Status unknown',
    }] : []),
  ];

  const sections: { label: string; fields: { key: string; value: string | undefined }[] }[] = [
    { label: 'Personal Information', fields: personalFields },
    { label: 'Residential Address', fields: [
      { key: 'Street',      value: data.streetAddress },
      { key: 'Suburb',      value: data.suburb },
      { key: 'City',        value: data.city },
      { key: 'Province',    value: data.province },
      { key: 'Postal Code', value: data.postalCode },
    ]},
    ...(visaSpecificFields.length > 0 ? [{
      label: isBusiness ? 'Business Details' : isStudy ? 'Study Details' : isCritical ? 'Skills & Employment' : isGeneralWork ? 'Employment Details' : 'Current Status & PR Category',
      fields: visaSpecificFields,
    }] : []),
    { label: 'Background', fields: backgroundFields },
  ];

  const forms = FORMS_BY_VISA_TYPE[visaType];

  return (
    <div>
      <div
        style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px 32px', marginBottom: 24 }}
      >
        <div className='flex items-start justify-between gap-4 mb-6 flex-wrap'>
          <h2 className='heading-section text-lg m-0' style={{ color: 'var(--text-primary)' }}>
            Your Application Summary
          </h2>
          <PdfDownloadButton data={data} visaType={visaType} />
        </div>

        <p className='text-sm mb-6' style={{ color: 'var(--text-secondary)', maxWidth: '54ch' }}>
          {REVIEW_DESCRIPTION[visaType]}
        </p>

        <div className='space-y-6'>
          {sections.map((section) => (
            <div key={section.label}>
              <p className='label-caps mb-3' style={{ color: 'var(--text-muted)' }}>{section.label}</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8'>
                {section.fields.filter((f) => f.value).map((f) => (
                  <div key={f.key} className='flex gap-2 text-sm'>
                    <span style={{ color: 'var(--text-muted)', minWidth: 140, flexShrink: 0 }}>{f.key}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500, flex: 1, overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forms reference */}
      <div
        style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 12, padding: '22px 26px', marginBottom: 24 }}
      >
        <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
          DHA Forms to complete using the above details
        </p>
        <div className='space-y-3'>
          {forms.map((form) => (
            <div key={form.id} className='flex items-center justify-between gap-4 text-sm'>
              <div>
                <span className='font-bold font-mono' style={{ color: 'var(--amber-dark)' }}>{form.title}</span>
                <span className='ml-3' style={{ color: 'var(--text-secondary)' }}>{form.purpose}</span>
                {form.notes && (
                  <span className='ml-2 text-xs' style={{ color: 'var(--text-muted)' }}>
                    — <LinkifyText text={form.notes} />
                  </span>
                )}
              </div>
              {form.downloadUrl && (
                <a
                  href={form.downloadUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs font-medium no-underline shrink-0'
                  style={{ color: 'var(--amber-dark)' }}
                >
                  Download ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <button
          type='button'
          onClick={onBack}
          className='flex items-center gap-2 text-sm font-medium'
          style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <p className='text-xs m-0' style={{ color: 'var(--text-muted)' }}>
          No data is stored on our servers. Clear your browser to remove it.
        </p>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={null}>
      <ApplyPageContent />
    </Suspense>
  );
}
