import type { VisaGuideData } from './visa-types';

export const STUDY_VISA_DATA: VisaGuideData = {
  id: 'study-visa',
  name: 'Study Visa',
  shortName: 'Study Visa',
  slug: 'study-visa',
  tagline: 'For students enrolled at accredited South African institutions',
  legalBasis: 'Section 18 of the Immigration Act 13 of 2002 (as amended)',
  processingTime: '4–8 weeks',
  validity: 'Duration of the course (up to 4 years), renewable',
  icon: '🎓',
  color: 'blue',
  summaryDescription:
    'The Study Visa (also called a Study Permit) allows foreign nationals to undertake full-time study at an accredited South African educational institution — a university, college, school, or registered training provider. You must provide proof of acceptance by the institution, evidence of sufficient funds to cover tuition fees and living expenses, and demonstrate that your stay is genuinely for study purposes. Work is limited to 20 hours per week during the academic term.',
  alertMessage:
    'You may not work more than 20 hours per week while on a Study Visa during the academic term. Working without authorisation or exceeding 20 hours is a violation that can result in deportation and a future ban from South Africa.',
  sourceNote:
    'Sources: Immigration Act 13 of 2002, section 18; Immigration Regulations (GN 413 of 2014, as amended); VFS Global South Africa (https://visa.vfsglobal.com/zaf/en/dha); Department of Home Affairs (https://www.dha.gov.za). Verify all fees and current requirements with VFS Global or DHA before applying.',

  eligibility: [
    {
      id: 'acceptance',
      title: 'Acceptance by an Accredited SA Institution',
      description:
        'You must have a letter of acceptance from a South African educational institution that is accredited by the relevant body (e.g., the Council on Higher Education for universities, the Education and Training Quality Assurance bodies for other institutions). You must be registered or enrolling as a full-time student.',
      tip: 'Check that your institution is accredited — applying to an unaccredited institution will result in visa refusal. The CHE database lists accredited institutions in South Africa.',
    },
    {
      id: 'funds',
      title: 'Sufficient Financial Means',
      description:
        'You must demonstrate you have sufficient funds to cover your tuition fees for the duration of your course AND your living expenses while in South Africa. Bank statements, bursary or scholarship letters, or a financial undertaking from a sponsor or parent/guardian are acceptable.',
      tip: 'Be thorough with financial proof — show funds that comfortably cover both tuition and monthly living costs. DHA wants to be satisfied that you will not be a financial burden on the state.',
    },
    {
      id: 'genuine-student',
      title: 'Genuinely Intending to Study',
      description:
        'Your application must demonstrate that your purpose in South Africa is genuinely to study. DHA may consider your study pathway, your academic record, and the nature of the institution and course.',
      tip: 'Choose a course that aligns logically with your academic or career path. Applications for courses that seem inconsistent with your background or goals may attract greater scrutiny.',
    },
    {
      id: 'no-criminal',
      title: 'No Criminal Record',
      description:
        'You must have no unspent criminal record in South Africa or any country where you have lived for 12+ months in the past 10 years.',
      tip: 'Order police clearances early — they are often the longest-lead document for student applicants.',
    },
    {
      id: 'health',
      title: 'Medical Fitness',
      description:
        'A medical certificate (Form BI-811) from a DHA-approved practitioner is required, along with a radiology report if applicable based on your nationality or circumstances.',
      tip: 'Book your DHA-approved medical appointment early — approved practitioners can be busy during peak application periods.',
    },
  ],

  documents: [
    {
      id: 'passport',
      title: 'Valid Passport',
      description:
        'Current passport with at least 30 days of validity beyond your intended departure date. If you are studying for multiple years, ensure your passport covers the intended study period or plan for renewal.',
      copies: 'Original + certified copy of all pages',
      where: [{ name: 'Already in your possession', notes: 'Renew before applying if expiring soon.' }],
      tips: ['Renew your passport before starting a multi-year course to avoid interruption'],
    },
    {
      id: 'dha-form-bi1738',
      title: 'DHA Application Form (BI-1738)',
      description: 'Completed and signed BI-1738 application form for a temporary residence visa.',
      copies: '1 completed original',
      where: [
        {
          name: 'VFS Global South Africa',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download or collect from a VFS Global application centre.',
        },
      ],
      tips: ['Complete all sections — no fields should be left blank'],
    },
    {
      id: 'acceptance-letter',
      title: 'Letter of Acceptance / Registration',
      description:
        'An official letter from the South African educational institution confirming your acceptance as a student. The letter must include: your full name, the course name and duration, the registration or student number, and the institution\'s accreditation status or registration number.',
      copies: '1 original + 1 certified copy',
      where: [
        {
          name: 'The admissions office of your SA institution',
          notes: 'Request this from the admissions or international students office of the institution you have been accepted to. It must be on official institutional letterhead and signed by an authorised person.',
        },
      ],
      tips: [
        'The letter must come from the institution directly — not from a third-party agent',
        'Ensure the letter clearly states the accreditation status or registration number of the institution',
        'The course duration stated in the letter should match the visa validity you are requesting',
      ],
    },
    {
      id: 'proof-of-registration-and-payment',
      title: 'Proof of Registration and Tuition Fee Payment',
      description:
        'Confirmation of your registration at the institution and proof of payment of tuition fees (or confirmation of a bursary/scholarship covering fees). A fee invoice and proof of payment (receipt or bank confirmation) from the institution is ideal.',
      copies: '1 certified copy',
      where: [
        {
          name: 'Your institution\'s student accounts / bursary office',
          notes: 'Request a fee statement or official receipt. If on a bursary, request the bursary award letter as well.',
        },
      ],
      tips: [
        'Paying fees upfront before applying demonstrates commitment and strengthens the application',
        'If on a scholarship or bursary, include the full award letter with payment terms',
      ],
    },
    {
      id: 'proof-of-funds',
      title: 'Proof of Financial Means',
      description:
        'Evidence that you have sufficient funds to pay for your tuition and living expenses in South Africa for the duration of your course. This can be your own bank statements, a letter from your parent/guardian (with their bank statements), a sponsor letter, or a bursary/scholarship award.',
      copies: '3 months of bank statements + covering letter if applicable',
      where: [
        {
          name: 'Your bank (or your sponsor/parent\'s bank)',
          notes: 'Request official bank statements showing sufficient funds. If a sponsor is funding you, include a signed letter from the sponsor with their bank statements.',
        },
      ],
      tips: [
        'The funds must cover both tuition AND living costs — demonstrate this clearly',
        'Bank statements should show consistent balances, not a sudden large deposit just before application',
        'A sponsor letter must include the sponsor\'s ID/passport copy, contact details, and signed undertaking to fund your studies',
      ],
    },
    {
      id: 'medical-certificate',
      title: 'Medical Certificate (Form BI-811)',
      description: 'Medical certificate from a DHA-approved practitioner on Form BI-811.',
      copies: 'Original',
      cost: 'R500–R1,200',
      validity: '6 months',
      where: [
        {
          name: 'DHA-approved medical practitioners (list via VFS Global)',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Only DHA-approved practitioners are accepted.',
        },
      ],
      tips: ['Book early', 'The certificate is valid for 6 months — time it to your planned application date'],
    },
    {
      id: 'radiology-report',
      title: 'Radiology Report (Chest X-Ray)',
      description: 'Chest X-ray and radiologist\'s report for TB screening (required for most applicants).',
      copies: 'Original + X-ray image',
      cost: 'R300–R600',
      validity: '6 months',
      where: [
        {
          name: 'Any registered radiology centre',
          notes: 'Report must be on official letterhead from a registered radiologist.',
          city: 'Nationwide',
        },
      ],
      tips: ['Combine with your medical appointment to save time'],
    },
    {
      id: 'police-clearances',
      title: 'Police Clearance Certificates',
      description:
        'Police clearances from your country of nationality and from any country where you have lived for 12+ months in the past 10 years. SA police clearance if you have been resident in SA for 12+ months.',
      copies: 'Originals + certified copies',
      cost: 'SA: R190 | Foreign: varies',
      validity: '6 months',
      where: [
        {
          name: 'SAPS (for SA clearance)',
          website: 'https://www.saps.gov.za/contact.php',
          notes: 'Any SAPS station. SAPS LCRC processing takes 4–8 weeks.',
        },
        {
          name: 'Home country police authority or embassy in SA',
          website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
          notes: 'Contact your embassy to arrange a clearance from your home country.',
        },
      ],
      tips: [
        'Order all clearances early — they are often the longest-lead document',
        'Foreign clearances may need apostilling — confirm with VFS',
      ],
    },
    {
      id: 'proof-of-accommodation',
      title: 'Proof of Accommodation',
      description:
        'Evidence of where you will live during your studies. This can be a student residence confirmation letter, a signed lease agreement, or a letter from a host family/guardian in South Africa.',
      copies: '1 certified copy',
      where: [
        {
          name: 'Your institution\'s student housing office (if in res)',
          notes: 'Request a student residence confirmation letter from the institution\'s housing office.',
        },
        {
          name: 'Your SA landlord (if renting privately)',
          notes: 'A signed lease agreement on official letterhead, together with the landlord\'s ID/passport copy.',
        },
        {
          name: 'SA sponsor/host family',
          notes: 'A letter from the host confirming you will live with them, along with their proof of residence and ID.',
        },
      ],
      tips: [
        'Student residence confirmation is the simplest option — book your room before applying for the visa',
        'If staying privately, ensure the lease is signed and includes your name, the address, and the rental period',
      ],
    },
    {
      id: 'proof-of-medical-aid',
      title: 'Proof of Medical Aid / Health Insurance',
      description: 'Certificate or letter confirming you have medical aid or health insurance for your stay.',
      copies: '1 copy',
      where: [
        {
          name: 'Your medical aid or health insurer',
          notes: 'Many universities require students to have institutional medical aid — check your institution\'s requirements first.',
        },
        {
          name: 'Discovery Health',
          website: 'https://www.discovery.co.za/medical-aid',
          notes: 'Individual plans available if your institution does not have a mandatory scheme.',
          city: 'Nationwide',
        },
        {
          name: 'Momentum Health — Ingwe Option',
          website: 'https://www.momentum.co.za/momentum/products/health/ingwe',
          notes: 'Affordable hospital plan from Momentum — a practical option for students on a budget.',
          city: 'Nationwide',
        },
        {
          name: 'Bonitas Medical Fund',
          website: 'https://www.bonitas.co.za',
          notes: 'Multiple plan tiers including budget-friendly options.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'Many SA universities require students to join the institution\'s medical aid scheme — check this requirement',
        'If joining the institution\'s scheme, request the membership certificate from student services',
      ],
    },
    {
      id: 'parental-consent',
      title: 'Parental / Guardian Consent (if under 18)',
      description:
        'If you are under 18 years old, you must provide a notarially certified consent letter from both parents or your legal guardian, along with their passports or IDs and your birth certificate.',
      copies: '1 certified copy',
      optional: true,
      conditionalOn: 'Required if you are under 18 years old',
      where: [
        {
          name: 'Notary public or commissioner of oaths',
          notes: 'The consent letter must be signed by both parents (or the sole guardian if only one parent is involved) and notarially certified.',
        },
      ],
      tips: [
        'If only one parent signs, you must provide a court order or death certificate explaining the absence of the other parent',
        'The consent letter must explicitly state the child is travelling to study in South Africa',
      ],
    },
    {
      id: 'photographs',
      title: 'Passport-Sized Photographs',
      description: 'Two recent passport-sized photographs: full face, neutral expression, white background.',
      copies: '2 originals',
      cost: 'R40–R80',
      where: [
        {
          name: 'PostNet, 3@1, or any licensed photo studio',
          notes: 'Ask for \'Home Affairs passport photos\'.',
          city: 'Nationwide',
        },
      ],
      tips: ['Ask for \'Home Affairs passport photos\' to ensure correct specifications'],
    },
  ],

  phases: [
    {
      id: 'apply-institution',
      number: 1,
      title: 'Apply and Get Accepted',
      summary: 'Secure your acceptance at an accredited South African institution before starting the visa process.',
      estimatedTime: 'Varies by institution',
      steps: [
        'Research and apply to an accredited SA institution',
        'Confirm the institution is accredited by the CHE or relevant quality body',
        'Receive and keep your official acceptance letter',
        'Arrange and pay your tuition deposit or first semester fees',
        'Book student accommodation if applicable',
      ],
    },
    {
      id: 'gather-documents',
      number: 2,
      title: 'Gather Your Documents',
      summary: 'Begin collecting documents as soon as you receive your acceptance letter. Police clearances take the longest.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Apply for police clearances from all required jurisdictions',
        'Book your DHA-approved medical appointment',
        'Collect proof of financial means (bank statements, bursary letters)',
        'Arrange proof of accommodation',
        'Obtain proof of medical aid cover',
        'Complete the BI-1738 application form',
      ],
    },
    {
      id: 'submit',
      number: 3,
      title: 'Book and Submit at VFS Global',
      summary: 'Book your VFS Global appointment and submit your complete application package.',
      estimatedTime: '1 day',
      steps: [
        'Book at VFS Global (https://visa.vfsglobal.com/zaf/en/dha)',
        'Attend with all originals and required copies',
        'Pay the VFS service fee (~R1,520) and biometric fee (~R230)',
        'Receive your application reference number',
      ],
    },
    {
      id: 'await',
      number: 4,
      title: 'Await the Decision',
      summary: 'Processing takes 4–8 weeks for complete applications. Track your application on the VFS portal.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Track your application via the VFS Global or DHA portal',
        'Respond quickly to any information requests',
        'Book your flights once you have a visa decision date',
      ],
    },
    {
      id: 'collect',
      number: 5,
      title: 'Collect Your Visa',
      summary: 'Collect your passport with study visa endorsement from VFS Global.',
      estimatedTime: '1 day',
      steps: [
        'Collect your passport from VFS Global or via courier',
        'Verify the visa details — institution name, validity, and work conditions',
        'Note your visa conditions — you may only work up to 20 hours per week during term',
      ],
    },
  ],

  fees: [
    {
      item: 'VFS Global service fee (within SA)',
      amount: '~R1,520',
      notes: 'Verify current amount at VFS before appointment',
    },
    {
      item: 'Biometric fee (within SA)',
      amount: '~R230',
      notes: 'Fingerprinting and photograph at VFS',
    },
    {
      item: 'Medical certificate (BI-811)',
      amount: 'R500–R1,200',
      notes: 'DHA-approved practitioner only',
    },
    {
      item: 'Radiology report',
      amount: 'R300–R600',
      notes: 'May be combined with medical appointment',
    },
    {
      item: 'SA Police Clearance Certificate',
      amount: 'R190',
      notes: 'If resident in SA for 12+ months',
    },
    {
      item: 'Passport photos (2)',
      amount: 'R40–R80',
      notes: 'PostNet, 3@1, or photo studio',
    },
    {
      item: 'Certified copies',
      amount: 'R10–R30 per copy',
      notes: 'Commissioner of oaths at police station, bank, or post office',
    },
  ],

  applyHref: 'https://visa.vfsglobal.com/zaf/en/dha',
};
