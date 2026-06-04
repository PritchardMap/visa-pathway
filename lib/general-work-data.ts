import type { VisaGuideData } from './visa-types';

export const GENERAL_WORK_DATA: VisaGuideData = {
  id: 'general-work',
  name: 'General Work Visa',
  shortName: 'General Work',
  slug: 'general-work',
  tagline: 'For skilled foreign workers with a confirmed SA job offer',
  legalBasis: 'Section 19(1) of the Immigration Act 13 of 2002 (as amended)',
  processingTime: '4–8 weeks',
  validity: 'Up to 3 years (tied to employment contract), renewable',
  icon: '💼',
  color: 'amber',
  summaryDescription:
    'The General Work Visa allows a foreign national to take up employment with a specific South African employer. Unlike the Critical Skills Work Visa, a concrete job offer is mandatory. The employer must demonstrate that no suitable South African citizen or permanent resident is available for the position, supported by a certificate from the Department of Employment and Labour (DOEL). The visa is tied to the specific employer — you must reapply if you change jobs.',
  alertMessage:
    'The General Work Visa is tied to your specific employer. If you change jobs while holding this visa, your visa becomes invalid and you must apply for a new one. Plan accordingly before accepting any new employment.',
  sourceNote:
    'Sources: Immigration Act 13 of 2002, section 19(1); Immigration Regulations (GN 413 of 2014, as amended); VFS Global South Africa DHA services portal (https://visa.vfsglobal.com/zaf/en/dha); Department of Employment and Labour (https://www.labour.gov.za). Fees should be verified directly with VFS Global or DHA before submission.',

  eligibility: [
    {
      id: 'job-offer',
      title: 'Confirmed Job Offer from a SA Employer',
      description:
        'You must have a signed employment contract or formal offer letter from a South African employer. The position must be in South Africa and the employer must be a registered South African company.',
      tip: 'The offer must be in writing and signed by both parties. A conditional offer or letter of intent is not sufficient — you need a signed employment contract.',
    },
    {
      id: 'labour-market-test',
      title: 'Employer Completed a Labour Market Test',
      description:
        'Your employer must prove that no suitable South African citizen or permanent resident is available for the position. This requires advertising the position through prescribed channels (newspapers, job portals, the DOEL database) for at least 60 days and documenting that no qualified SA applicants were found or available.',
      tip: 'Ensure your employer has completed the full 60-day advertising period and has documentation of all applications received and why they were not suitable. DHA scrutinises this closely.',
    },
    {
      id: 'doel-certificate',
      title: 'Department of Employment and Labour (DOEL) Certificate',
      description:
        'The employer must obtain a certificate from DOEL (formerly the Department of Labour) confirming that a diligent search for a suitable South African worker was conducted and that no suitable person was found. This is a mandatory prerequisite — without the DOEL certificate, the application cannot proceed.',
      tip: 'The DOEL certificate process can take 4–8 weeks. Your employer must apply for it before your visa application is submitted. Start this process as soon as your employment is confirmed.',
    },
    {
      id: 'qualification',
      title: 'Qualifications Match the Role',
      description:
        'You must hold the required qualifications and experience for the position offered. Foreign qualifications must be evaluated by the South African Qualifications Authority (SAQA).',
      tip: 'If the role requires a professional registration in South Africa (e.g., for engineers, doctors, or accountants), that registration is also required. Check with your employer which registrations apply.',
    },
    {
      id: 'good-character',
      title: 'No Criminal Record',
      description:
        'You must not have an unspent criminal record in South Africa or in any country where you have lived for 12 months or more in the past ten years.',
      tip: 'Order all police clearances simultaneously with the DOEL and SAQA applications to avoid delays.',
    },
  ],

  documents: [
    {
      id: 'passport',
      title: 'Valid Passport',
      description:
        'Current passport with at least 30 days of validity beyond your intended departure date. All pages must be included. Present previous passports if relevant.',
      copies: 'Original + certified copy of all pages',
      where: [
        {
          name: 'Already in your possession',
          notes: 'Renew your passport before applying if it will expire within 12 months.',
        },
      ],
      tips: [
        'Your passport must remain valid for the full duration of your employment',
        'Include all previous passports to show your complete immigration history',
      ],
    },
    {
      id: 'dha-form-bi1738',
      title: 'DHA Application Form (BI-1738)',
      description:
        'The completed and signed BI-1738 application form for a temporary residence visa, available from VFS Global or the DHA website.',
      copies: '1 completed original',
      where: [
        {
          name: 'VFS Global South Africa',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download or collect the BI-1738 form from a VFS Global application centre.',
        },
      ],
      tips: [
        'Complete in full — no sections should be left blank',
        'Sign and date in the presence of a commissioner of oaths',
      ],
    },
    {
      id: 'employment-contract',
      title: 'Signed Employment Contract',
      description:
        'A signed employment contract between you and the South African employer. Must include the position title, salary, employment terms, and start date. Both parties must sign the contract.',
      copies: '1 certified copy',
      where: [
        {
          name: 'From your employer',
          notes: 'Request a certified copy from your employer\'s HR department. The contract must be signed by both you and an authorised representative of the employer.',
        },
      ],
      tips: [
        'The contract must be for employment in South Africa specifically',
        'Ensure the contract terms reflect the position described in the DOEL application',
        'The salary must comply with applicable SA minimum wage or sectoral determinations',
      ],
    },
    {
      id: 'doel-certificate',
      title: 'DOEL Certificate (Labour Market Test)',
      description:
        'The official certificate from the Department of Employment and Labour confirming that the employer conducted a diligent search for South African citizens or permanent residents and that no suitable candidate was found. This is obtained by the employer, not the applicant, and must accompany the visa application.',
      copies: '1 certified copy (employer holds the original)',
      where: [
        {
          name: 'Department of Employment and Labour',
          website: 'https://www.labour.gov.za',
          notes: 'Your employer applies for this certificate. DOEL has offices in all major cities. The application must be made by the employer with supporting documentation of the labour market test.',
        },
      ],
      tips: [
        'This certificate takes 4–8 weeks to obtain — your employer must apply early',
        'If DHA is not satisfied with the employer\'s labour market test, the application may be refused',
        'Ensure the certificate is addressed to the correct DHA office and is not expired',
      ],
    },
    {
      id: 'employer-registration',
      title: 'Employer\'s Company Registration Documents',
      description:
        'Proof that the South African employer is a legally registered company. This typically includes the CIPC company registration certificate and a recent letter from SARS confirming tax compliance.',
      copies: '1 certified copy each',
      where: [
        {
          name: 'CIPC – Companies and Intellectual Property Commission',
          website: 'https://www.cipc.co.za',
          notes: 'The employer can obtain their registration certificate from CIPC.',
        },
        {
          name: 'SARS – South African Revenue Service',
          website: 'https://www.sars.gov.za',
          notes: 'A valid SARS tax clearance certificate or tax compliance status (TCS) may be required from the employer.',
        },
      ],
      tips: [
        'Your employer must provide these documents — request them from their HR or legal department',
        'Ensure the employer\'s documents are current — expired registrations will cause delays',
      ],
    },
    {
      id: 'saqa-evaluation',
      title: 'SAQA Foreign Qualification Evaluation',
      description:
        'A certificate from the South African Qualifications Authority (SAQA) confirming the South African equivalent of your foreign academic qualification. Mandatory for all qualifications obtained outside South Africa.',
      copies: 'Original + 1 certified copy',
      cost: 'R1,350 per qualification (2024)',
      validity: '5 years from date of issue',
      where: [
        {
          name: 'SAQA Online Application Portal',
          website: 'https://www.saqa.org.za',
          notes: 'Apply online at the SAQA website. Processing takes 4–6 weeks from receipt of complete documentation.',
          phone: '+27 12 431 5000',
          city: 'Pretoria',
        },
      ],
      tips: [
        'Apply for the SAQA evaluation at the same time as the DOEL process — both take several weeks',
        'You will need certified copies of your degree certificate and academic transcripts',
        'Ensure the SAQA level matches or exceeds the qualification required for the role',
      ],
    },
    {
      id: 'medical-certificate',
      title: 'Medical Certificate (Form BI-811)',
      description:
        'A medical certificate on Form BI-811 completed by a DHA-approved medical practitioner confirming you are in good health.',
      copies: 'Original (completed by the doctor)',
      cost: 'R500–R1,200',
      validity: '6 months from date of examination',
      where: [
        {
          name: 'DHA-approved medical practitioners (list via VFS Global)',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download the list of approved practitioners from the VFS Global portal. Only approved doctors can complete the BI-811.',
        },
      ],
      tips: [
        'Use a DHA-approved doctor only — your own GP may not be on the approved list',
        'Book your appointment early — approved practitioners can be busy',
        'The certificate is valid for 6 months — time your medical to your intended submission date',
      ],
    },
    {
      id: 'radiology-report',
      title: 'Radiology Report (Chest X-Ray)',
      description:
        'A chest X-ray and radiologist\'s report to screen for tuberculosis. Required unless exempt based on nationality or length of stay.',
      copies: 'Original report + X-ray image',
      cost: 'R300–R600',
      validity: '6 months',
      where: [
        {
          name: 'Registered radiology centre or hospital',
          notes: 'Any registered radiologist can provide this. The report must be on official letterhead.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'Combine this with your BI-811 medical appointment if possible',
        'Check with VFS whether a radiology report is required for your specific nationality',
      ],
    },
    {
      id: 'police-clearances',
      title: 'Police Clearance Certificates',
      description:
        'Police clearance from your country of nationality and from any country where you have lived for 12 months or more in the past 10 years. A SA police clearance is also required if you have lived in South Africa for 12+ consecutive months.',
      copies: 'Originals + certified copies',
      cost: 'SA: R190 | Foreign: varies',
      validity: '6 months from date of issue',
      where: [
        {
          name: 'SAPS (SA clearance)',
          notes: 'Walk in to any police station. SAPS LCRC processing takes 4–8 weeks.',
          hours: 'Monday–Friday, 7:30am–4pm',
          website: 'https://www.saps.gov.za/contact.php',
        },
        {
          name: 'Your home country\'s police authority or embassy in SA',
          website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
          notes: 'Contact your home country\'s embassy to arrange foreign police clearance from South Africa.',
        },
      ],
      tips: [
        'Order all police clearances simultaneously to avoid delays',
        'Foreign clearances may need apostilling — check with VFS or DHA',
        'All non-English documents must be accompanied by a certified translation',
      ],
    },
    {
      id: 'proof-of-medical-aid',
      title: 'Proof of Medical Aid / Health Insurance',
      description:
        'A certificate or letter confirming you have medical aid or health insurance cover for yourself and any dependants during your stay.',
      copies: '1 copy',
      where: [
        {
          name: 'Your medical aid or health insurer',
          notes: 'Request a certificate of cover or confirmation letter on the insurer\'s letterhead.',
        },
        {
          name: 'Discovery Health',
          website: 'https://www.discovery.co.za/medical-aid',
          notes: 'Individual plans available if not covered by an employer scheme.',
          city: 'Nationwide',
        },
        {
          name: 'Momentum Health',
          website: 'https://www.momentum.co.za/momentum/products/health',
          notes: 'Range of plans from hospital-only to comprehensive. Individual plans available if not yet on an employer scheme.',
          city: 'Nationwide',
        },
        {
          name: 'Bonitas Medical Fund',
          website: 'https://www.bonitas.co.za',
          notes: 'Competitive plans including BonEssential for those seeking budget-friendly cover.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'Cover must be valid for the full duration of your planned stay',
        'Most SA employers arrange group medical aid membership — check with your employer',
      ],
    },
    {
      id: 'photographs',
      title: 'Passport-Sized Photographs',
      description: 'Two recent passport-sized photographs: full face, neutral expression, white background, taken within the last 3 months.',
      copies: '2 originals',
      cost: 'R40–R80',
      where: [
        {
          name: 'PostNet, 3@1, or any licensed photo studio',
          notes: 'Ask for \'Home Affairs passport photos\'. Available nationwide.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'Ask for \'Home Affairs passport photos\' to ensure the correct specifications',
        'Take photos within 3 months of your application date',
      ],
    },
  ],

  phases: [
    {
      id: 'secure-offer',
      number: 1,
      title: 'Secure a Job Offer',
      summary:
        'The General Work Visa process starts with a confirmed job offer. Before your employer begins the DOEL process, ensure the employment terms, start date, and salary are agreed upon in writing.',
      estimatedTime: 'Varies',
      steps: [
        'Secure a signed offer letter or employment contract from the SA employer',
        'Confirm the employer is a registered South African company (CIPC registered)',
        'Agree on a realistic start date that accounts for visa processing time (allow 3–6 months from start)',
      ],
    },
    {
      id: 'employer-doel',
      number: 2,
      title: 'Employer Completes the Labour Market Test',
      summary:
        'Your employer must conduct a 60-day labour market test and apply for the DOEL certificate. This is the most time-consuming step and must happen before you submit your visa application. You and your employer should run this in parallel with gathering your own documents.',
      estimatedTime: '8–12 weeks',
      steps: [
        'Employer advertises the position for at least 60 days via prescribed channels',
        'Employer documents all applications received and provides reasons for non-selection',
        'Employer applies to DOEL for the certificate confirming no suitable SA applicant was found',
        'DOEL processes and issues the certificate (4–8 weeks)',
        'Employer provides you with a certified copy of the DOEL certificate',
      ],
    },
    {
      id: 'gather-documents',
      number: 3,
      title: 'Gather Your Documents',
      summary:
        'While your employer handles the DOEL process, start gathering your own documents. Begin with the longest lead-time items: SAQA evaluation and police clearances.',
      estimatedTime: '6–10 weeks (parallel with DOEL)',
      steps: [
        'Apply for SAQA foreign qualification evaluation (https://www.saqa.org.za)',
        'Apply for all required police clearances simultaneously',
        'Book and attend medical appointment with a DHA-approved doctor',
        'Arrange proof of medical aid coverage',
        'Complete the BI-1738 application form',
      ],
    },
    {
      id: 'submit',
      number: 4,
      title: 'Book Appointment and Submit',
      summary:
        'Once you have the DOEL certificate and all your documents, book your appointment at VFS Global and submit your application.',
      estimatedTime: '1 day',
      steps: [
        'Book your appointment at VFS Global (https://visa.vfsglobal.com/zaf/en/dha)',
        'Attend with all original documents and required copies',
        'Biometrics are taken at VFS at submission',
        'Pay the VFS service fee (~R1,520) and biometric fee (~R230) — confirm current amounts at VFS',
        'Receive your application reference number',
      ],
    },
    {
      id: 'await',
      number: 5,
      title: 'Await the Decision',
      summary: 'DHA processes complete applications within 4–8 weeks. Track your application via VFS Global.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Track your application status online at the VFS Global or DHA portal',
        'Respond promptly to any requests for additional information',
        'Do not commence employment until the visa is issued',
      ],
    },
    {
      id: 'collect',
      number: 6,
      title: 'Collect Your Visa',
      summary: 'On approval, collect your passport with the visa endorsement from VFS Global, or have it couriered to you.',
      estimatedTime: '1 day',
      steps: [
        'Collect your passport from VFS Global or receive it via courier',
        'Verify all visa details — employer name, validity dates, conditions',
        'Report any errors immediately — do not begin employment with incorrect endorsement details',
      ],
    },
  ],

  fees: [
    {
      item: 'VFS Global service fee (within SA)',
      amount: '~R1,520',
      notes: 'Verify current amount at VFS before your appointment',
    },
    {
      item: 'Biometric fee (within SA)',
      amount: '~R230',
      notes: 'Fingerprinting and photograph at VFS Global centre',
    },
    {
      item: 'SAQA foreign qualification evaluation',
      amount: 'R1,350',
      notes: 'Per qualification — paid to SAQA',
    },
    {
      item: 'DOEL certificate (employer cost)',
      amount: 'Varies',
      notes: 'Your employer is responsible for this cost — confirm with them',
    },
    {
      item: 'Medical certificate (BI-811)',
      amount: 'R500–R1,200',
      notes: 'DHA-approved medical practitioner only',
    },
    {
      item: 'Radiology report (chest X-ray)',
      amount: 'R300–R600',
      notes: 'May be included in the medical fee or billed separately',
    },
    {
      item: 'SA Police Clearance Certificate',
      amount: 'R190',
      notes: 'SAPS (if you have been resident in SA for 12+ months)',
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
