'use client';

import { useState } from 'react';
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
  CheckCircle2,
  User,
  Home,
  FileText,
  ClipboardList,
  Download,
} from 'lucide-react';
import { APPLICATION_FORMS } from '@/lib/citizenship-data';
import { CountrySelect } from '@/components/apply/country-select';
import { PhoneInput } from '@/components/apply/phone-input';
import LinkifyText from '@/lib/linkify';

// --- Schema ---

const personalSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleNames: z.string().optional(),
  lastName: z.string().min(1, 'Surname is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  countryOfBirth: z.string().min(1, 'Country of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  passportNumber: z.string().min(1, 'Passport number is required'),
  saIdNumber: z.string().min(1, 'SA ID number is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Valid email required'),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
});

const residenceSchema = z.object({
  streetAddress: z.string().min(1, 'Street address is required'),
  suburb: z.string().min(1, 'Suburb is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  postalCode: z.string().min(4, 'Postal code is required'),
  prNumber: z.string().min(1, 'PR permit number is required'),
  prIssueDate: z.string().min(1, 'PR issue date is required'),
  yearsInSA: z.string().min(1, 'Required'),
});

const backgroundSchema = z.object({
  occupation: z.string().min(1, 'Occupation is required'),
  employer: z.string().optional(),
  languageSpoken: z.string().min(1, 'Please select a language'),
  criminalRecord: z.enum(['no', 'yes']),
  criminalDetails: z.string().optional(),
  dualCitizenshipStatus: z.enum(['permitted', 'not-permitted', 'unknown']),
});

type PersonalData = z.infer<typeof personalSchema>;
type ResidenceData = z.infer<typeof residenceSchema>;
type BackgroundData = z.infer<typeof backgroundSchema>;

type AllData = PersonalData & ResidenceData & BackgroundData;

const PROVINCES = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Free State',
  'Northern Cape',
];

const LANGUAGES = [
  'English',
  'Afrikaans',
  'Zulu',
  'Xhosa',
  'Northern Sotho',
  'Tswana',
  'Sotho',
  'Tsonga',
  'Swati',
  'Venda',
  'Ndebele',
];

const STEPS = [
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'residence', label: 'Residence', icon: Home },
  { id: 'background', label: 'Background', icon: FileText },
  { id: 'review', label: 'Review & Export', icon: ClipboardList },
];

// --- Main component ---

export default function ApplyPage() {
  const [step, setStep] = useState(0);
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

  const handlePersonal: SubmitHandler<PersonalData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(1);
  };

  const handleResidence: SubmitHandler<ResidenceData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleBackground: SubmitHandler<BackgroundData> = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

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
          Enter your details once.
        </h1>
        <p
          className='text-base leading-relaxed'
          style={{ color: 'var(--text-secondary)', maxWidth: '50ch' }}
        >
          Fill in this form and we&apos;ll generate a pre-filled summary
          matching all the DHA forms you need to submit. No data is stored on
          our servers.
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
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDone
                      ? 'var(--green)'
                      : isCurrent
                        ? 'var(--amber)'
                        : 'var(--border)',
                    color:
                      isDone || isCurrent
                        ? 'var(--background)'
                        : 'var(--text-muted)',
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
                    width: 48,
                    height: 1,
                    backgroundColor:
                      i < step ? 'var(--green)' : 'var(--border)',
                    margin: '0 8px',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Forms */}
      <div style={{ maxWidth: 920 }}>
        {step === 0 && (
          <StepPersonal form={personalForm} onSubmit={handlePersonal} />
        )}
        {step === 1 && (
          <StepResidence
            form={residenceForm}
            onSubmit={handleResidence}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <StepBackground
            form={backgroundForm}
            onSubmit={handleBackground}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <StepReview data={allData as AllData} onBack={() => setStep(2)} />
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
      <label
        className='block text-sm font-medium mb-1.5'
        style={{ color: 'var(--text-primary)' }}
      >
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className='text-xs mt-1 m-0' style={{ color: 'var(--text-muted)' }}>
          {hint}
        </p>
      )}
      {error && (
        <p className='text-xs mt-1 m-0' style={{ color: 'oklch(50% 0.18 25)' }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: 8,
  border: '1px solid var(--border)',
  backgroundColor: 'var(--background)',
  color: 'var(--text-primary)',
  fontSize: '0.875rem',
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const selectStyle = { ...inputStyle };

function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '28px 32px',
      }}
    >
      {children}
    </div>
  );
}

function NavButtons({
  onBack,
  submitLabel = 'Continue',
}: {
  onBack?: () => void;
  submitLabel?: string;
}) {
  return (
    <div className='flex items-center justify-between pt-2'>
      {onBack ? (
        <button
          type='button'
          onClick={onBack}
          className='flex items-center gap-2 text-sm font-medium'
          style={{
            color: 'var(--text-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <ArrowLeft size={14} />
          Back
        </button>
      ) : (
        <div />
      )}
      <button
        type='submit'
        className='inline-flex items-center gap-2 font-semibold text-sm'
        style={{
          backgroundColor: 'var(--amber)',
          color: 'var(--background)',
          padding: '10px 24px',
          borderRadius: 9,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {submitLabel} <ArrowRight size={14} />
      </button>
    </div>
  );
}

// --- Controlled wrappers ---

function CountrySelectField({
  name,
  control,
  error,
  mode,
  placeholder,
}: {
  name: 'countryOfBirth' | 'nationality';
  control: Control<PersonalData>;
  error?: boolean;
  mode: 'country' | 'nationality';
  placeholder?: string;
}) {
  const { field } = useController({ name, control });
  return (
    <CountrySelect
      value={field.value ?? ''}
      onChange={field.onChange}
      error={error}
      mode={mode}
      placeholder={placeholder}
    />
  );
}

function PhoneInputField({
  name,
  control,
  error,
}: {
  name: 'phone';
  control: Control<PersonalData>;
  error?: boolean;
}) {
  const { field } = useController({ name, control });
  return (
    <PhoneInput
      value={field.value ?? ''}
      onChange={field.onChange}
      error={error}
    />
  );
}

// --- Step 1: Personal ---

function StepPersonal({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<PersonalData>>;
  onSubmit: SubmitHandler<PersonalData>;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2
          className='heading-section text-lg mb-6'
          style={{ color: 'var(--text-primary)' }}
        >
          Personal Information
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
          <Field label='First Name' error={errors.firstName?.message}>
            <input
              {...register('firstName')}
              style={inputStyle}
              placeholder='e.g. Tendai'
            />
          </Field>
          <Field label='Middle Name(s)' error={errors.middleNames?.message}>
            <input
              {...register('middleNames')}
              style={inputStyle}
              placeholder='Optional'
            />
          </Field>
          <Field label='Surname' error={errors.lastName?.message}>
            <input
              {...register('lastName')}
              style={inputStyle}
              placeholder='e.g. Moyo'
            />
          </Field>
          <Field label='Date of Birth' error={errors.dateOfBirth?.message}>
            <input
              {...register('dateOfBirth')}
              type='date'
              style={inputStyle}
            />
          </Field>
          <Field
            label='Country of Birth'
            error={errors.countryOfBirth?.message}
          >
            <CountrySelectField
              name='countryOfBirth'
              control={control}
              error={!!errors.countryOfBirth}
              mode='country'
              placeholder='Select country of birth…'
            />
          </Field>
          <Field label='Nationality' error={errors.nationality?.message}>
            <CountrySelectField
              name='nationality'
              control={control}
              error={!!errors.nationality}
              mode='nationality'
              placeholder='Select nationality…'
            />
          </Field>
          <Field label='Passport Number' error={errors.passportNumber?.message}>
            <input
              {...register('passportNumber')}
              style={inputStyle}
              placeholder='e.g. AN123456'
            />
          </Field>
          <Field
            label='SA ID Number'
            error={errors.saIdNumber?.message}
            hint='Enter your South African ID number (required for PR holders)'
          >
            <input
              {...register('saIdNumber')}
              style={inputStyle}
              placeholder='e.g. 9412086243183'
            />
          </Field>
          <Field label='Phone Number' error={errors.phone?.message}>
            <PhoneInputField
              name='phone'
              control={control}
              error={!!errors.phone}
            />
          </Field>
          <Field label='Email Address' error={errors.email?.message}>
            <input
              {...register('email')}
              type='email'
              style={inputStyle}
              placeholder='your@email.com'
            />
          </Field>
        </div>

        <div className='mb-6'>
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

        <NavButtons />
      </StepCard>
    </form>
  );
}

// --- Step 2: Residence ---

function StepResidence({
  form,
  onSubmit,
  onBack,
}: {
  form: ReturnType<typeof useForm<ResidenceData>>;
  onSubmit: SubmitHandler<ResidenceData>;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2
          className='heading-section text-lg mb-6'
          style={{ color: 'var(--text-primary)' }}
        >
          Residence & Permit Details
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
          <div className='sm:col-span-2'>
            <Field label='Street Address' error={errors.streetAddress?.message}>
              <input
                {...register('streetAddress')}
                style={inputStyle}
                placeholder='e.g. 14 Main Road'
              />
            </Field>
          </div>
          <Field label='Suburb' error={errors.suburb?.message}>
            <input
              {...register('suburb')}
              style={inputStyle}
              placeholder='e.g. Sandton'
            />
          </Field>
          <Field label='City' error={errors.city?.message}>
            <input
              {...register('city')}
              style={inputStyle}
              placeholder='e.g. Johannesburg'
            />
          </Field>
          <Field label='Province' error={errors.province?.message}>
            <select {...register('province')} style={selectStyle}>
              <option value=''>Select province…</option>
              {PROVINCES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
          <Field label='Postal Code' error={errors.postalCode?.message}>
            <input
              {...register('postalCode')}
              style={inputStyle}
              placeholder='e.g. 2196'
            />
          </Field>
          <Field
            label='PR Permit Number'
            error={errors.prNumber?.message}
            hint='From your permanent residence certificate'
          >
            <input
              {...register('prNumber')}
              style={inputStyle}
              placeholder='e.g. PR-12345/2019'
            />
          </Field>
          <Field label='PR Issue Date' error={errors.prIssueDate?.message}>
            <input
              {...register('prIssueDate')}
              type='date'
              style={inputStyle}
            />
          </Field>
          <div className='sm:col-span-2'>
            <Field
              label='Years lived in South Africa'
              error={errors.yearsInSA?.message}
            >
              <input
                {...register('yearsInSA')}
                style={inputStyle}
                placeholder='e.g. 7 years'
              />
            </Field>
          </div>
        </div>

        <NavButtons onBack={onBack} />
      </StepCard>
    </form>
  );
}

// --- Step 3: Background ---

function StepBackground({
  form,
  onSubmit,
  onBack,
}: {
  form: ReturnType<typeof useForm<BackgroundData>>;
  onSubmit: SubmitHandler<BackgroundData>;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  const criminalRecord = watch('criminalRecord');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepCard>
        <h2
          className='heading-section text-lg mb-6'
          style={{ color: 'var(--text-primary)' }}
        >
          Background & Language
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6'>
          <Field label='Occupation' error={errors.occupation?.message}>
            <input
              {...register('occupation')}
              style={inputStyle}
              placeholder='e.g. Software Engineer'
            />
          </Field>
          <Field
            label='Employer / Business Name'
            error={errors.employer?.message}
          >
            <input
              {...register('employer')}
              style={inputStyle}
              placeholder='Optional'
            />
          </Field>
          <div className='sm:col-span-2'>
            <Field
              label='Official SA language you speak'
              error={errors.languageSpoken?.message}
            >
              <select {...register('languageSpoken')} style={selectStyle}>
                <option value=''>Select language…</option>
                {LANGUAGES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <div className='sm:col-span-2'>
            <Field
              label='Do you have any criminal convictions?'
              error={errors.criminalRecord?.message}
            >
              <select {...register('criminalRecord')} style={selectStyle}>
                <option value=''>Select…</option>
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
              </select>
            </Field>
          </div>
          {criminalRecord === 'yes' && (
            <div className='sm:col-span-2'>
              <Field
                label='Please provide brief details'
                error={errors.criminalDetails?.message}
              >
                <textarea
                  {...register('criminalDetails')}
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder='Briefly describe the conviction(s)'
                />
              </Field>
            </div>
          )}
          <div className='sm:col-span-2'>
            <Field
              label='Does your home country allow dual citizenship?'
              error={errors.dualCitizenshipStatus?.message}
              hint='Zimbabwe permits dual citizenship only for citizens by birth under the 2013 Constitution; citizens by descent or registration may be required to renounce other citizenships — confirm with your embassy or consulate'
            >
              <select
                {...register('dualCitizenshipStatus')}
                style={selectStyle}
              >
                <option value=''>Select…</option>
                <option value='permitted'>Yes, permitted</option>
                <option value='not-permitted'>
                  No, not permitted (renunciation required)
                </option>
                <option value='unknown'>I&apos;m not sure yet</option>
              </select>
            </Field>
          </div>
        </div>

        <NavButtons onBack={onBack} submitLabel='Review Summary' />
      </StepCard>
    </form>
  );
}

// --- Step 4: Review & Export ---

function StepReview({ data, onBack }: { data: AllData; onBack: () => void }) {
  const [printed, setPrinted] = useState(false);

  const handlePrint = () => {
    setPrinted(true);
    window.print();
  };

  const sections: {
    label: string;
    fields: { key: string; value: string | undefined }[];
  }[] = [
    {
      label: 'Personal Information',
      fields: [
        {
          key: 'Full Name',
          value: [data.firstName, data.middleNames, data.lastName]
            .filter(Boolean)
            .join(' '),
        },
        { key: 'Date of Birth', value: data.dateOfBirth },
        { key: 'Country of Birth', value: data.countryOfBirth },
        { key: 'Nationality', value: data.nationality },
        { key: 'Passport Number', value: data.passportNumber },
        { key: 'SA ID Number', value: data.saIdNumber },
        { key: 'Phone', value: data.phone },
        { key: 'Email', value: data.email },
        {
          key: 'Marital Status',
          value: data.maritalStatus
            ? data.maritalStatus.charAt(0).toUpperCase() +
              data.maritalStatus.slice(1)
            : undefined,
        },
      ],
    },
    {
      label: 'Residential Address',
      fields: [
        { key: 'Street', value: data.streetAddress },
        { key: 'Suburb', value: data.suburb },
        { key: 'City', value: data.city },
        { key: 'Province', value: data.province },
        { key: 'Postal Code', value: data.postalCode },
        { key: 'PR Permit Number', value: data.prNumber },
        { key: 'PR Issue Date', value: data.prIssueDate },
        { key: 'Years in SA', value: data.yearsInSA },
      ],
    },
    {
      label: 'Background',
      fields: [
        { key: 'Occupation', value: data.occupation },
        { key: 'Employer', value: data.employer },
        { key: 'Language Proficiency', value: data.languageSpoken },
        {
          key: 'Criminal Record',
          value:
            data.criminalRecord === 'no'
              ? 'None'
              : `Yes — ${data.criminalDetails ?? 'see details'}`,
        },
        {
          key: 'Dual Citizenship',
          value:
            data.dualCitizenshipStatus === 'permitted'
              ? 'Permitted by home country'
              : data.dualCitizenshipStatus === 'not-permitted'
                ? 'Not permitted — renunciation required'
                : 'Status unknown',
        },
      ],
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '28px 32px',
          marginBottom: 24,
        }}
      >
        <div className='flex items-start justify-between gap-4 mb-6 flex-wrap'>
          <h2
            className='heading-section text-lg m-0'
            style={{ color: 'var(--text-primary)' }}
          >
            Your Application Summary
          </h2>
          <button
            onClick={handlePrint}
            className='inline-flex items-center gap-2 text-sm font-semibold'
            style={{
              backgroundColor: 'var(--green)',
              color: 'var(--background)',
              padding: '9px 20px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Download size={14} />
            Print / Save PDF
          </button>
        </div>

        <p
          className='text-sm mb-6'
          style={{ color: 'var(--text-secondary)', maxWidth: '54ch' }}
        >
          Use the details below to complete your DHA forms. Each section maps
          directly to the fields you&apos;ll encounter across DHA-63, DHA-529,
          and BI-9.
        </p>

        <div className='space-y-6'>
          {sections.map((section) => (
            <div key={section.label}>
              <p
                className='label-caps mb-3'
                style={{ color: 'var(--text-muted)' }}
              >
                {section.label}
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8'>
                {section.fields
                  .filter((f) => f.value)
                  .map((f) => (
                    <div key={f.key} className='flex gap-2 text-sm'>
                      <span
                        style={{
                          color: 'var(--text-muted)',
                          minWidth: 140,
                          flexShrink: 0,
                        }}
                      >
                        {f.key}
                      </span>
                      <span
                        style={{
                          color: 'var(--text-primary)',
                          fontWeight: 500,
                          flex: 1,
                          whiteSpace: 'normal',
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }}
                      >
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
        style={{
          backgroundColor: 'var(--background)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '22px 26px',
          marginBottom: 24,
        }}
      >
        <p className='label-caps mb-4' style={{ color: 'var(--text-muted)' }}>
          DHA Forms to complete using the above details
        </p>
        <div className='space-y-3'>
          {APPLICATION_FORMS.map((form) => (
            <div
              key={form.id}
              className='flex items-center justify-between gap-4 text-sm'
            >
              <div>
                <span
                  className='font-bold font-mono'
                  style={{ color: 'var(--amber-dark)' }}
                >
                  {form.title}
                </span>
                <span
                  className='ml-3'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {form.purpose}
                </span>
                {form.notes && (
                  <span
                    className='ml-2 text-xs'
                    style={{ color: 'var(--text-muted)' }}
                  >
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

      {printed && (
        <div
          className='flex items-center gap-2 text-sm p-4 mb-4'
          style={{
            backgroundColor: 'oklch(96% 0.03 155)',
            borderRadius: 8,
            color: 'var(--green-dark)',
          }}
        >
          <CheckCircle2 size={16} />
          Summary printed. Use the values above to complete your DHA forms.
        </div>
      )}

      <div className='flex items-center justify-between'>
        <button
          type='button'
          onClick={onBack}
          className='flex items-center gap-2 text-sm font-medium'
          style={{
            color: 'var(--text-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
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
