import type { VisaGuideData } from './visa-types';

export const BUSINESS_VISA_DATA: VisaGuideData = {
  id: 'business-visa',
  name: 'Business Visa',
  shortName: 'Business Visa',
  slug: 'business-visa',
  tagline: 'For entrepreneurs establishing or investing in a South African business',
  legalBasis: 'Section 15 of the Immigration Act 13 of 2002 (as amended)',
  processingTime: '4–8 weeks',
  validity: '3 years, renewable',
  icon: '🏢',
  color: 'purple',
  summaryDescription:
    'The Business Visa is intended for foreign nationals who intend to establish, invest in, or operate a business in South Africa. The applicant must demonstrate a prescribed minimum capital investment, provide a business plan, and obtain a recommendation from the Department of Trade, Industry and Competition (DTIC). The business must create employment opportunities for South African citizens or permanent residents.',
  alertMessage:
    'The Business Visa has strict capital requirements and requires a recommendation from DTIC before application. Engage an accredited immigration practitioner before starting — the requirements and process are complex and frequently change.',
  sourceNote:
    'Sources: Immigration Act 13 of 2002, section 15; Immigration Regulations (GN 413 of 2014, as amended); Department of Trade, Industry and Competition (https://www.thedtic.gov.za); VFS Global South Africa (https://visa.vfsglobal.com/zaf/en/dha). Capital requirements and fees are subject to change — verify current requirements with DTIC and DHA before applying.',

  eligibility: [
    {
      id: 'investment-capital',
      title: 'Prescribed Minimum Capital Investment',
      description:
        'You must invest a minimum prescribed capital amount in a South African business. The exact amount is prescribed by the Minister of Home Affairs in the Government Gazette. Verify the current prescribed amount with DHA or VFS Global before applying, as this has changed over time. The investment must be genuine and verifiable — it cannot be a loan or encumbered funds.',
      tip: 'Confirm the current prescribed minimum investment amount directly with DHA or an accredited immigration practitioner before making your investment. Unencumbered capital must be demonstrated through a chartered accountant\'s report.',
    },
    {
      id: 'business-plan',
      title: 'Viable Business Plan',
      description:
        'You must present a credible, detailed business plan for the business you intend to operate or establish in South Africa. The plan must demonstrate the business\'s viability, projected employment creation, and economic contribution.',
      tip: 'Your business plan should be professional and detailed — include financial projections, market analysis, and a specific plan for how many South African citizens or PRs the business will employ.',
    },
    {
      id: 'dtic-recommendation',
      title: 'DTIC Recommendation',
      description:
        'A formal recommendation from the Department of Trade, Industry and Competition (DTIC) that your proposed business or investment is in the interest of South Africa. This must be obtained before submitting your visa application to DHA.',
      tip: 'The DTIC recommendation process can take several weeks. Contact DTIC directly or through an accredited immigration practitioner to begin this process early.',
    },
    {
      id: 'sa-employment',
      title: 'Employment Creation for SA Citizens/PRs',
      description:
        'The business must create employment opportunities for South African citizens or permanent residents. DHA and DTIC assess the number of jobs the business will create as part of the evaluation.',
      tip: 'Your business plan should specifically commit to the number of South African jobs that will be created and include a projected hiring timeline.',
    },
    {
      id: 'no-criminal',
      title: 'No Criminal Record',
      description:
        'You must have no unspent criminal record in South Africa or any country where you have lived for 12+ months in the past 10 years.',
      tip: 'Order all required police clearances early — they take several weeks in most jurisdictions.',
    },
  ],

  documents: [
    {
      id: 'passport',
      title: 'Valid Passport',
      description: 'Current passport with at least 30 days of validity beyond your intended departure date.',
      copies: 'Original + certified copy of all pages',
      where: [{ name: 'Already in your possession', notes: 'Renew before applying if expiring within 12 months.' }],
      tips: ['Include all previous passports to show your complete travel and immigration history'],
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
      tips: ['Complete all sections fully — incomplete forms are rejected'],
    },
    {
      id: 'business-plan',
      title: 'Business Plan',
      description:
        'A comprehensive business plan for the business you intend to establish or operate in South Africa. Must include: executive summary, business description, market analysis, financial projections (3–5 years), employment plan (number of SA citizens/PRs to be employed), and funding/capital plan.',
      copies: '1 original',
      where: [
        {
          name: 'Prepared by you or a business consultant',
          notes: 'A professional business plan writer familiar with South African immigration requirements can improve the quality and acceptance rate of your application.',
        },
      ],
      tips: [
        'The plan must be credible and detailed — vague or unrealistic plans are a common reason for refusal',
        'Quantify employment creation commitments — DHA and DTIC require specific numbers',
        'Include realistic financial projections with supporting assumptions',
        'Align your business plan with sectors prioritised by DTIC (manufacturing, tourism, services, etc.)',
      ],
    },
    {
      id: 'capital-proof',
      title: 'Proof of Investment Capital',
      description:
        'Documentary proof that you have the prescribed minimum capital available for investment. This includes recent bank statements (typically the last 3 months), a letter from a South African bank confirming your account balance, and a report from a South African chartered accountant confirming the availability and source of the capital.',
      copies: '1 set of certified copies',
      where: [
        {
          name: 'Your South African or international bank',
          notes: 'Obtain official bank statements and a confirmation letter on bank letterhead.',
        },
        {
          name: 'A South African Chartered Accountant (CA(SA))',
          notes: 'You will need a South African CA to certify the availability of your capital. The CA\'s report must confirm the amount, source, and that the capital is unencumbered.',
        },
      ],
      tips: [
        'Capital must be unencumbered — loans, pledged assets, or mortgaged funds do not qualify',
        'The source of capital must be clear and lawful — be prepared to explain and document the origin of funds',
        'The CA must be registered with SAICA (South African Institute of Chartered Accountants)',
      ],
    },
    {
      id: 'dtic-recommendation',
      title: 'DTIC Recommendation Letter',
      description:
        'An official recommendation letter from the Department of Trade, Industry and Competition (DTIC) stating that your proposed business or investment is in the interest of South Africa. This is a prerequisite for the DHA application.',
      copies: '1 original',
      where: [
        {
          name: 'Department of Trade, Industry and Competition (DTIC)',
          website: 'https://www.thedtic.gov.za',
          notes: 'Apply directly to DTIC or through your immigration practitioner. DTIC may require your business plan, capital proof, and other supporting documents.',
          phone: '+27 12 394 9500',
          city: 'Pretoria',
        },
      ],
      tips: [
        'Apply for the DTIC recommendation before your visa application — it is a prerequisite',
        'DTIC processing time varies — allow 4–8 weeks',
        'An accredited immigration practitioner can assist with the DTIC application process',
      ],
    },
    {
      id: 'company-documents',
      title: 'Company Registration Documents (if applicable)',
      description:
        'If the business is already incorporated in South Africa or in your home country, provide the company registration documents, memorandum of incorporation, and share register.',
      copies: '1 certified copy each',
      optional: true,
      conditionalOn: 'If a company is already registered',
      where: [
        {
          name: 'CIPC – Companies and Intellectual Property Commission',
          website: 'https://www.cipc.co.za',
          notes: 'For South African company registration documents.',
        },
        {
          name: 'Your home country company registration authority',
          notes: 'For foreign companies — translated and apostilled if required.',
        },
      ],
      tips: [
        'South African company registration through CIPC is straightforward — consider registering before applying',
        'The company name and description should align closely with your business plan',
      ],
    },
    {
      id: 'net-worth',
      title: 'Personal Net Worth Statement',
      description:
        'A statement of your personal net worth prepared or certified by a South African or internationally recognised chartered accountant. This demonstrates your financial standing beyond the investment capital.',
      copies: '1 certified original',
      where: [
        {
          name: 'A South African or internationally recognised CA',
          notes: 'Must be a registered chartered accountant. The statement should list all assets and liabilities.',
        },
      ],
      tips: [
        'Be comprehensive — list all assets (property, investments, cash, business interests) and liabilities',
        'The net worth statement should be recent (within 3 months of application)',
      ],
    },
    {
      id: 'medical-certificate',
      title: 'Medical Certificate (Form BI-811)',
      description: 'Medical certificate on Form BI-811 from a DHA-approved practitioner confirming good health.',
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
      tips: ['Book early — approved doctors can have waiting lists'],
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
          notes: 'Report must be on official letterhead from a registered radiologist.',
          city: 'Nationwide',
        },
      ],
      tips: ['Combine with medical appointment to save time'],
    },
    {
      id: 'police-clearances',
      title: 'Police Clearance Certificates',
      description:
        'Police clearances from your country of nationality and from any country where you have lived for 12+ months in the past 10 years. SA police clearance if resident in SA for 12+ months.',
      copies: 'Originals + certified copies',
      cost: 'SA: R190 | Foreign: varies',
      validity: '6 months',
      where: [
        {
          name: 'SAPS (SA clearance)',
          website: 'https://www.saps.gov.za/contact.php',
          notes: 'Any police station. SAPS LCRC takes 4–8 weeks.',
          hours: 'Monday–Friday, 7:30am–4pm',
        },
        {
          name: 'Your home country authority or embassy in SA',
          website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
          notes: 'Contact your home country\'s embassy or police authority for clearances.',
        },
      ],
      tips: [
        'Order all clearances simultaneously — do not wait for one before starting another',
        'Foreign clearances may require apostilling — check with VFS or DHA',
      ],
    },
    {
      id: 'proof-of-medical-aid',
      title: 'Proof of Medical Aid / Health Insurance',
      description: 'Certificate or letter confirming medical aid or health insurance cover for your stay.',
      copies: '1 copy',
      where: [
        {
          name: 'Your medical aid or health insurer',
          notes: 'Request a cover confirmation letter on the insurer\'s letterhead.',
        },
        {
          name: 'Discovery Health',
          website: 'https://www.discovery.co.za/medical-aid',
          notes: 'Individual plans available for non-employer members. Request a membership certificate once enrolled.',
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
          notes: 'Range of plans including BonEssential for affordable in-hospital cover.',
          city: 'Nationwide',
        },
      ],
      tips: ['Cover must be valid for the full duration of the intended stay'],
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
      tips: ['Ask specifically for \'Home Affairs passport photos\' to ensure correct specifications'],
    },
  ],

  phases: [
    {
      id: 'plan',
      number: 1,
      title: 'Develop Your Business Plan',
      summary: 'Before engaging with DHA, develop a thorough business plan and confirm your capital position. Engage a business consultant and immigration practitioner early.',
      estimatedTime: '2–6 weeks',
      steps: [
        'Develop a detailed business plan with financial projections and employment commitments',
        'Engage a South African chartered accountant to review your capital position',
        'Identify the sector your business will operate in and confirm DTIC interest',
        'Engage an accredited immigration practitioner familiar with Section 15 applications',
      ],
    },
    {
      id: 'dtic',
      number: 2,
      title: 'Obtain DTIC Recommendation',
      summary: 'Apply to the Department of Trade, Industry and Competition for a formal recommendation. This is a prerequisite for the DHA application.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Submit your business plan and capital documents to DTIC',
        'Engage with DTIC\'s investment promotion team if necessary',
        'Await the DTIC recommendation letter (4–8 weeks)',
      ],
    },
    {
      id: 'documents',
      number: 3,
      title: 'Gather All Documents',
      summary: 'While waiting for the DTIC recommendation, gather your personal documents: medical certificate, radiology, police clearances, and the BI-1738 form.',
      estimatedTime: '4–8 weeks (parallel with DTIC)',
      steps: [
        'Attend DHA-approved medical examination and obtain radiology report',
        'Apply for police clearances from all required jurisdictions',
        'Obtain net worth statement from chartered accountant',
        'Complete and certify the BI-1738 application form',
      ],
    },
    {
      id: 'submit',
      number: 4,
      title: 'Book and Submit at VFS Global',
      summary: 'Once you have all documents including the DTIC recommendation, book and attend your VFS Global appointment.',
      estimatedTime: '1 day',
      steps: [
        'Book appointment at VFS Global (https://visa.vfsglobal.com/zaf/en/dha)',
        'Attend with all originals and copies',
        'Pay VFS service fee (~R1,520) and biometric fee (~R230)',
        'Receive application reference number',
      ],
    },
    {
      id: 'await',
      number: 5,
      title: 'Await Decision',
      summary: 'DHA processes Business Visa applications within 4–8 weeks for complete applications. Track via VFS Global.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Track your application on the VFS Global portal',
        'Respond promptly to any information requests',
        'Do not begin trading until the visa is issued',
      ],
    },
    {
      id: 'collect',
      number: 6,
      title: 'Collect Your Visa',
      summary: 'Collect your passport with visa endorsement from VFS Global or via courier.',
      estimatedTime: '1 day',
      steps: [
        'Collect your passport from VFS Global or receive via courier',
        'Verify all details — visa type, conditions, validity dates',
        'Keep the DTIC recommendation and all business documents — they may be needed for renewals',
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
      item: 'DTIC recommendation (government process)',
      amount: 'Varies / free',
      notes: 'Contact DTIC directly — practitioner fees may apply',
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
      notes: 'If resident in SA for 12+ months',
    },
    {
      item: 'Chartered accountant reports (capital + net worth)',
      amount: 'Varies',
      notes: 'CA fees vary — allow R2,000–R10,000 depending on the practitioner and scope',
    },
    {
      item: 'Immigration practitioner fees',
      amount: 'Varies',
      notes: 'Strongly recommended for Business Visa applications — fees vary by firm',
    },
    {
      item: 'Passport photos (2)',
      amount: 'R40–R80',
      notes: 'PostNet, 3@1, or photo studio',
    },
  ],

  applyHref: 'https://visa.vfsglobal.com/zaf/en/dha',
};
