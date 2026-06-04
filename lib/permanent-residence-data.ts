import type { VisaGuideData } from './visa-types';

export const PERMANENT_RESIDENCE_DATA: VisaGuideData = {
  id: 'permanent-residence',
  name: 'Permanent Residence Permit',
  shortName: 'Permanent Residence',
  slug: 'permanent-residence',
  tagline: 'Make South Africa your permanent home',
  legalBasis: 'Sections 26 and 27 of the Immigration Act 13 of 2002 (as amended)',
  processingTime: '12–24 months',
  validity: 'Permanent — no expiry date',
  icon: '🏡',
  color: 'teal',
  summaryDescription:
    'Permanent Residence (PR) allows you to live, work, and study in South Africa indefinitely without further visa applications. There are multiple bases on which you can apply, including through employment (critical skills or general work), through marriage or partnership with a South African citizen or PR holder, through long-term residence, or through financial independence. Processing times are long — typically 12–24 months — due to DHA backlogs. Once granted, permanent residence does not expire but can be withdrawn for serious violations.',
  alertMessage:
    'Permanent residence applications have long processing times (12–24 months). Maintain your current valid visa or permit throughout the process — do not allow it to lapse while waiting. Contact DHA directly if your current visa expires before a decision is made.',
  sourceNote:
    'Sources: Immigration Act 13 of 2002, sections 26 and 27; Immigration Regulations (GN 413 of 2014, as amended); VFS Global South Africa (https://visa.vfsglobal.com/zaf/en/dha); Department of Home Affairs (https://www.dha.gov.za). Processing times and fees are indicative — confirm current requirements with DHA or VFS Global before applying.',

  eligibility: [
    {
      id: 'qualifying-basis',
      title: 'A Qualifying Basis for Permanent Residence',
      description:
        'You must qualify under one of the categories set out in the Immigration Act. The most common bases are: (1) Critical Skills — after holding a Critical Skills Work Visa; (2) Employment — after working for a SA employer for 5 years on a general work visa; (3) Marriage or partnership — after 5 years of marriage or partnership to a SA citizen (2 years as a dependent spouse); (4) Long-term residence — after 5 consecutive years of lawful temporary residence; (5) Financial independence — demonstrated net worth above the prescribed minimum; (6) Close relatives of SA citizens. Each category has specific additional requirements.',
      tip: 'Identify your strongest qualifying basis before applying. If you qualify under more than one, apply under the basis with the most complete documentation and most straightforward eligibility.',
    },
    {
      id: 'lawful-residence',
      title: 'Continuous Lawful Residence',
      description:
        'For most categories, you must have been lawfully resident in South Africa for the qualifying period without your visa lapsing or being violated. DHA will check your immigration history and any prior overstays, deportations, or violations will be considered.',
      tip: 'Maintain your current visa status throughout the PR application process — which can take 1–2 years. Renew your current visa before it expires and keep all renewal receipts.',
    },
    {
      id: 'no-criminal',
      title: 'No Unspent Criminal Record',
      description:
        'You must have a clean criminal record in South Africa and in every other country where you have resided for 12+ months in the past 10 years. Police clearances are required from each relevant jurisdiction.',
      tip: 'PR applications involve a more thorough background check than temporary visa applications. Order clearances from all countries where you have lived, even briefly.',
    },
    {
      id: 'tax-compliance',
      title: 'SA Tax Compliance (SARS Clearance)',
      description:
        'You must have a South African income tax number and be tax compliant with SARS (South African Revenue Service). A tax clearance certificate or tax compliance status (TCS) confirmation is required.',
      tip: 'Register with SARS as a taxpayer (if not already) well before applying. Obtain your TCS confirmation — this is available online through the SARS eFiling portal.',
    },
    {
      id: 'health',
      title: 'Medical Fitness',
      description:
        'A medical certificate (Form BI-811) from a DHA-approved medical practitioner, along with a radiology report, is required.',
      tip: 'Book your DHA-approved medical as soon as you start gathering documents — the certificate is valid for 6 months and must not expire before your submission.',
    },
  ],

  documents: [
    {
      id: 'passport',
      title: 'Valid Passport',
      description:
        'Current passport and all previous passports (to show your full travel and immigration history in South Africa). All pages, including blank ones, must be included.',
      copies: 'Original + certified copy of ALL pages of all passports',
      where: [{ name: 'Already in your possession', notes: 'Include all passports you have held — current and expired.' }],
      tips: [
        'PR applications require your full immigration history — every stamp, visa, and endorsement is relevant',
        'Never discard old passports — keep them for immigration purposes',
      ],
    },
    {
      id: 'dha-form-bi947',
      title: 'DHA Application Form (BI-947)',
      description:
        'The completed and signed BI-947 application form, which is the specific form for permanent residence applications. This is distinct from the BI-1738 used for temporary residence visas.',
      copies: '1 completed original',
      where: [
        {
          name: 'VFS Global South Africa',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download the BI-947 from the VFS Global portal or collect from a VFS application centre.',
        },
        {
          name: 'Department of Home Affairs website',
          website: 'https://www.dha.gov.za',
          notes: 'Available under the immigration / permanent residence forms section.',
        },
      ],
      tips: [
        'The BI-947 is a detailed form — complete it carefully and truthfully',
        'Sign and date in the presence of a commissioner of oaths',
        'Ensure the qualifying basis you select (Section 26 or 27 subcategory) matches your actual circumstances',
      ],
    },
    {
      id: 'current-visa',
      title: 'Current Valid Visa or Permit',
      description:
        'A certified copy of your current valid South African visa or permit. This demonstrates that you are in South Africa lawfully at the time of application.',
      copies: '1 certified copy',
      where: [{ name: 'Already in your possession (endorsed in your passport)', notes: 'Make a certified copy of the visa page and the personal details page of your passport.' }],
      tips: [
        'If your current visa is about to expire, renew it before submitting your PR application',
        'Keep receipts of any renewal applications while the PR is pending',
      ],
    },
    {
      id: 'proof-of-qualifying-basis',
      title: 'Proof of Qualifying Basis',
      description:
        'Documents proving the basis on which you qualify for PR. These vary by category: employment — letter from employer + employment record; critical skills — proof of 5 years on CS visa + professional body registration; marriage — marriage certificate + proof of 5-year relationship; long-term residence — proof of 5 consecutive years of lawful residence; financial independence — chartered accountant\'s net worth report confirming prescribed minimum net worth.',
      copies: '1 set of originals or certified copies',
      where: [
        {
          name: 'From your employer (if work-based)',
          notes: 'An official letter confirming your employment history, positions held, and duration. Attach employment contracts and payslips.',
        },
        {
          name: 'Your spouse\'s Home Affairs records (if marriage-based)',
          notes: 'Include your SA citizen or PR spouse\'s ID and/or PR permit, your marriage certificate (original + certified copy), and proof of cohabitation (utility bills, joint bank statements, lease agreements).',
        },
        {
          name: 'A South African Chartered Accountant (if financially independent)',
          notes: 'The CA must certify a net worth statement demonstrating assets above the prescribed minimum. Contact SAICA for a list of registered CAs.',
          website: 'https://www.saica.co.za',
        },
      ],
      tips: [
        'The more comprehensive your proof, the stronger the application — DHA scrutinises these documents carefully',
        'For marriage-based applications, include evidence of a genuine and subsisting relationship (photos, correspondence, joint accounts)',
        'For employment-based, a detailed reference letter from each employer is more compelling than a generic confirmation',
      ],
    },
    {
      id: 'sars-tax-clearance',
      title: 'SARS Tax Clearance / Tax Compliance Status',
      description:
        'Proof that you are registered as a taxpayer with SARS and that your tax affairs are in order. This can be a Tax Compliance Status (TCS) confirmation from SARS eFiling or a formal tax clearance certificate.',
      copies: '1 original or certified copy',
      where: [
        {
          name: 'SARS eFiling',
          website: 'https://efiling.sars.gov.za',
          notes: 'Log into SARS eFiling to obtain your Tax Compliance Status (TCS) confirmation. Register as a taxpayer first if you have not already done so.',
        },
        {
          name: 'SARS branch (walk-in)',
          notes: 'Visit any SARS branch with your passport and any supporting documents if you need to register for a tax number or resolve compliance issues.',
          city: 'Nationwide',
          hours: 'Monday–Friday, 8am–4pm',
        },
      ],
      tips: [
        'Register as a taxpayer as early as possible — do not wait until you are ready to apply for PR',
        'Resolve any outstanding tax issues before applying — non-compliance can cause delays or refusal',
        'The TCS confirmation is issued instantly on eFiling once you are compliant',
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
          notes: 'Download the approved practitioners list from VFS. Only DHA-approved doctors are accepted.',
        },
      ],
      tips: [
        'Given the long processing times, time your medical so the certificate does not expire before submission',
        'Some applicants need to renew their medical certificate during a long PR process — check with DHA if this applies to you',
      ],
    },
    {
      id: 'radiology-report',
      title: 'Radiology Report (Chest X-Ray)',
      description: 'Chest X-ray and radiologist\'s report for TB screening.',
      copies: 'Original report + X-ray image',
      cost: 'R300–R600',
      validity: '6 months',
      where: [
        {
          name: 'Any registered radiology centre',
          notes: 'Must be on official letterhead from a registered radiologist.',
          city: 'Nationwide',
        },
      ],
      tips: ['Combine with medical appointment. Note the 6-month validity — plan accordingly given PR processing times.'],
    },
    {
      id: 'police-clearances',
      title: 'SA and Foreign Police Clearance Certificates',
      description:
        'Police clearances from South Africa (SAPS) and from every country where you have lived for 12+ months in the past 10 years. For PR applications, these must be comprehensive and are scrutinised closely.',
      copies: 'Originals + certified copies',
      cost: 'SA: R190 | Foreign: varies',
      validity: '6 months',
      where: [
        {
          name: 'SAPS Criminal Record Centre',
          website: 'https://www.saps.gov.za/contact.php',
          notes: 'Apply at any SAPS police station. SAPS LCRC processing takes 4–8 weeks. Private services like LexisNexis (https://www.lexisnexis.com/en-za/lexisrefcheck/fingerprint-hub) are faster.',
        },
        {
          name: 'Foreign authorities and embassies in SA',
          website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
          notes: 'Contact your home country\'s embassy or police authority. Allow extra time for foreign clearances.',
        },
      ],
      tips: [
        'Order all clearances simultaneously — they are the longest-lead documents',
        'Given that PR processing takes 12–24 months, you may need to refresh clearances during the process — plan for this',
        'Foreign clearances often need apostilling for SA immigration purposes — confirm this with DHA',
      ],
    },
    {
      id: 'proof-of-medical-aid',
      title: 'Proof of Medical Aid / Health Insurance',
      description: 'Proof of medical aid or health insurance coverage for yourself and any dependants.',
      copies: '1 copy',
      where: [
        {
          name: 'Your medical aid or health insurer',
          notes: 'Request a certificate of cover or membership confirmation on the insurer\'s letterhead.',
        },
        {
          name: 'Discovery Health',
          website: 'https://www.discovery.co.za/medical-aid',
          notes: 'Individual plans available. Request a membership certificate as proof of cover.',
          city: 'Nationwide',
        },
        {
          name: 'Momentum Health',
          website: 'https://www.momentum.co.za/momentum/products/health',
          notes: 'Range of plans from hospital-only to comprehensive cover. Individual plans available online.',
          city: 'Nationwide',
        },
        {
          name: 'Bonitas Medical Fund',
          website: 'https://www.bonitas.co.za',
          notes: 'Multiple plan options including BonEssential for cost-effective in-hospital coverage.',
          city: 'Nationwide',
        },
      ],
      tips: ['Cover must be valid at the time of application'],
    },
    {
      id: 'marriage-birth-certificates',
      title: 'Marriage / Birth Certificates (if applicable)',
      description:
        'If applying on the basis of marriage or relationship to a SA citizen or PR holder, provide your original marriage certificate. If applying for dependent children\'s PR simultaneously, include their birth certificates.',
      copies: 'Original + 2 certified copies',
      optional: true,
      conditionalOn: 'If applying on a marriage/family basis',
      where: [
        {
          name: 'Department of Home Affairs',
          notes: 'For marriages registered in South Africa. Apply for an unabridged marriage certificate at any Home Affairs office.',
          website: 'https://www.dha.gov.za',
        },
        {
          name: 'Your home country marriage authority (for foreign marriages)',
          notes: 'Obtain the official marriage certificate from the relevant authority. May require apostilling and translation.',
        },
      ],
      tips: [
        'The marriage certificate must be unabridged — the short version is not accepted',
        'Foreign marriage certificates not in English must have a certified translation',
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
      tips: ['Ask for \'Home Affairs passport photos\' to ensure the correct specifications'],
    },
  ],

  phases: [
    {
      id: 'confirm-basis',
      number: 1,
      title: 'Identify Your Qualifying Basis',
      summary:
        'Permanent residence has multiple qualifying categories. Confirm which category you qualify under before gathering any documents — the required documents differ significantly between categories.',
      estimatedTime: '1–2 days',
      steps: [
        'Review sections 26 and 27 of the Immigration Act to identify your qualifying basis',
        'Check how long you have been on your current visa and whether you meet the qualifying period',
        'Confirm your SA tax compliance status with SARS',
        'Consider engaging an accredited immigration practitioner — PR applications are complex',
      ],
    },
    {
      id: 'tax-compliance',
      number: 2,
      title: 'Ensure Tax Compliance',
      summary: 'Register as a SARS taxpayer and resolve any outstanding tax issues before starting the PR process.',
      estimatedTime: '1–4 weeks',
      steps: [
        'Register for a SARS tax number if not yet registered (https://efiling.sars.gov.za)',
        'Submit any outstanding tax returns',
        'Resolve any tax debts or issues',
        'Obtain your Tax Compliance Status (TCS) confirmation from eFiling',
      ],
    },
    {
      id: 'gather-documents',
      number: 3,
      title: 'Gather All Documents',
      summary:
        'This is the most complex document-gathering exercise in the SA immigration system. Start all long-lead documents simultaneously. Allow 8–12 weeks for all documents to arrive.',
      estimatedTime: '8–12 weeks',
      steps: [
        'Apply for SAPS police clearance (4–8 weeks)',
        'Apply for foreign police clearances from all required jurisdictions simultaneously',
        'Book and attend DHA-approved medical examination and radiology',
        'Collect proof of your qualifying basis (employment records, marriage certificate, etc.)',
        'Obtain SARS TCS confirmation',
        'Complete the BI-947 application form',
        'Compile all certified copies',
      ],
    },
    {
      id: 'submit',
      number: 4,
      title: 'Submit at VFS Global',
      summary: 'PR applications are submitted through VFS Global application centres. Ensure your entire package is complete and correctly organised before attending your appointment.',
      estimatedTime: '1 day',
      steps: [
        'Book your appointment at VFS Global (https://visa.vfsglobal.com/zaf/en/dha)',
        'Attend with the complete application package — every document, original and copy',
        'Pay the VFS service fee (~R1,520) and biometric fee (~R230) — confirm current amounts with VFS',
        'Receive your application reference number',
        'Keep your submission receipt — you will need it to follow up and if your current visa expires during processing',
      ],
    },
    {
      id: 'await',
      number: 5,
      title: 'Await the Decision (12–24 months)',
      summary:
        'DHA\'s current processing times for permanent residence are 12–24 months due to backlogs. Maintain your current visa status throughout this period. If your visa expires while the PR is pending, you must notify DHA and maintain proof of your pending application.',
      estimatedTime: '12–24 months',
      steps: [
        'Track your application through the DHA online portal or by contacting DHA directly',
        'Renew your current temporary visa before it expires while the PR is pending — keep all receipts',
        'Respond promptly to any information requests from DHA',
        'Follow up with DHA after 12 months if you have not received a decision',
        'Keep all original documents — they may be requested again during the process',
      ],
    },
    {
      id: 'collect',
      number: 6,
      title: 'Collect Your PR Permit',
      summary: 'On approval, you will be issued a Permanent Residence permit. This is a separate document issued by DHA (not an endorsement in your passport). Your PR permit has no expiry date.',
      estimatedTime: '1 day',
      steps: [
        'Collect your Permanent Residence permit from VFS Global or via courier',
        'Verify all details on the permit — your full name, nationality, and permit number',
        'Keep your PR permit safe — losing it requires a replacement application and fee',
        'Apply for a SAPO ID document or passport amendment if required',
        'Note: PR can still be withdrawn for serious violations of the Immigration Act',
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
      item: 'DHA PR permit fee (on issue)',
      amount: '~R520',
      notes: 'Paid to DHA when the permit is issued — confirm current amount with DHA',
    },
    {
      item: 'Medical certificate (BI-811)',
      amount: 'R500–R1,200',
      notes: 'DHA-approved practitioner only',
    },
    {
      item: 'Radiology report',
      amount: 'R300–R600',
      notes: 'May be included in the medical fee',
    },
    {
      item: 'SA Police Clearance Certificate',
      amount: 'R190',
      notes: 'SAPS processing or private service (LexisNexis, NeVeTeC)',
    },
    {
      item: 'Foreign police clearances',
      amount: 'Varies',
      notes: 'Depends on your home country — allow R200–R1,000+ per jurisdiction',
    },
    {
      item: 'Immigration practitioner fees (if used)',
      amount: 'R5,000–R25,000+',
      notes: 'Strongly recommended for PR applications — varies by firm and complexity',
    },
    {
      item: 'Passport photos (2)',
      amount: 'R40–R80',
      notes: 'PostNet, 3@1, or photo studio',
    },
    {
      item: 'Certified copies',
      amount: 'R10–R30 per copy',
      notes: 'Commissioner of oaths — per copy',
    },
  ],

  applyHref: 'https://visa.vfsglobal.com/zaf/en/dha',
};
