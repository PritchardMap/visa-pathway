import type { VisaGuideData } from './visa-types';

export const CRITICAL_SKILLS_DATA: VisaGuideData = {
  id: 'critical-skills',
  name: 'Critical Skills Work Visa',
  shortName: 'Critical Skills',
  slug: 'critical-skills',
  tagline: 'For qualified professionals in high-demand occupations',
  legalBasis: 'Section 19(2) of the Immigration Act 13 of 2002 (as amended)',
  processingTime: '4–8 weeks',
  validity: '5 years, renewable',
  icon: '🔬',
  color: 'green',
  summaryDescription:
    'The Critical Skills Work Visa is designed for foreign nationals with skills in occupations identified on the South African Critical Skills List. Unlike the General Work Visa, it does not require a prior job offer — but you must demonstrate that your skill appears on the gazetted list and that you hold the relevant qualifications and, where applicable, registration with a professional body.',
  alertMessage:
    'Confirm that your occupation appears on the current Critical Skills List before starting your application. The DHA publishes this list periodically — verify the latest version on the DHA website (https://www.dha.gov.za) before proceeding.',
  sourceNote:
    'Sources: Immigration Act 13 of 2002, section 19(2); Immigration Regulations (GN 413 of 2014, as amended); VFS Global South Africa DHA services portal (https://visa.vfsglobal.com/zaf/en/dha); Department of Home Affairs (https://www.dha.gov.za). Fees should be verified directly with VFS Global or DHA before submission — they are subject to change.',

  eligibility: [
    {
      id: 'critical-skill',
      title: 'Skill on the Critical Skills List',
      description:
        'Your occupation or skill must appear on the Critical Skills List as gazetted by the Department of Home Affairs. The list includes categories such as medicine, engineering, information technology, finance, education, and skilled trades. Download the current list from the DHA website before applying.',
      tip: 'The list is updated periodically. Even if your occupation was on a previous list, confirm it appears on the current published version. Your specific role must match the listed category.',
    },
    {
      id: 'qualification',
      title: 'Recognised Qualification or Expertise',
      description:
        'You must hold a formal qualification (degree, diploma, or professional certificate) in the relevant field, or be able to demonstrate expertise and experience. Qualifications obtained outside South Africa must be evaluated by the South African Qualifications Authority (SAQA).',
      tip: 'Apply for your SAQA foreign qualification evaluation early — it typically takes 4–6 weeks. SAQA evaluations are mandatory for foreign qualifications and are submitted along with your application.',
    },
    {
      id: 'professional-body',
      title: 'Professional Body Registration (Where Required)',
      description:
        'If your critical skill requires registration with a South African professional or statutory body (e.g., HPCSA for health professionals, ECSA for engineers, SAICA for chartered accountants), you must hold that registration. Provisional or conditional registration may be accepted — confirm with the relevant body.',
      tip: 'Begin registration with the professional body as early as possible. Some bodies require proof of your foreign credential evaluation from SAQA, so start both processes in parallel.',
    },
    {
      id: 'good-character',
      title: 'No Criminal Record',
      description:
        'You must not have an unspent criminal record in South Africa, your home country, or any other country where you have lived for 12 months or more in the past ten years. Police clearance certificates are required from each relevant jurisdiction.',
      tip: 'Order police clearances from all required jurisdictions at the same time — processing can take weeks in some countries. SA clearances must be less than 6 months old at submission.',
    },
    {
      id: 'health',
      title: 'Medical Fitness',
      description:
        'You must be in good health. A medical certificate (Form BI-811) from a DHA-approved medical practitioner is required. A radiology report (chest X-ray to screen for tuberculosis) may also be required depending on your country of origin and length of stay in South Africa.',
      tip: 'Use a DHA-approved doctor only — other medical certificates will not be accepted. A list of approved practitioners is available from VFS Global centers. Radiology reports must be on official radiological letterhead.',
    },
  ],

  documents: [
    {
      id: 'passport',
      title: 'Valid Passport',
      description:
        'Your current passport with at least 30 days of validity beyond the intended date of departure from South Africa. All pages (including blank ones) must be presented. Include all old/expired passports if they contain relevant endorsements or visas.',
      copies: 'Original + certified copy of all pages',
      where: [
        {
          name: 'Already in your possession',
          notes: 'Ensure your passport does not expire while your application is pending. If it will expire within 12 months, renew it before applying.',
        },
      ],
      tips: [
        'Your passport must be valid throughout the intended visa period, not just at the time of application',
        'Present all previous passports — they show your travel and residence history',
      ],
    },
    {
      id: 'dha-form-bi1738',
      title: 'DHA Application Form (BI-1738)',
      description:
        'The completed and signed BI-1738 application form for a temporary residence visa. This is the standard DHA form required for all temporary visa applications, submitted through VFS Global.',
      copies: '1 completed original',
      where: [
        {
          name: 'VFS Global South Africa',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download the BI-1738 form from the VFS Global DHA portal or collect it at a VFS Global application centre.',
        },
        {
          name: 'Department of Home Affairs website',
          website: 'https://www.dha.gov.za',
          notes: 'Available for download from the official DHA website under immigration forms.',
        },
      ],
      tips: [
        'Complete the form in black ink or digitally before printing',
        'Sign and date the form in the presence of a commissioner of oaths',
        'All sections must be complete — incomplete forms are rejected',
      ],
    },
    {
      id: 'saqa-evaluation',
      title: 'SAQA Foreign Qualification Evaluation',
      description:
        'A certificate from the South African Qualifications Authority (SAQA) evaluating your foreign academic qualifications. This is mandatory for any qualification obtained outside South Africa. The evaluation confirms the South African equivalent level of your qualification.',
      copies: 'Original certificate + 1 certified copy',
      cost: 'R1,350 per qualification (SAQA fee, 2024)',
      validity: '5 years from date of issue',
      where: [
        {
          name: 'SAQA Online Application Portal',
          website: 'https://www.saqa.org.za',
          notes: 'Apply for a foreign qualification evaluation online at the SAQA website. Processing takes 4–6 weeks from receipt of complete documentation.',
          hours: 'Online applications: 24/7. Enquiries: Monday–Friday, 8am–4pm',
        },
        {
          name: 'SAQA Head Office – Pretoria',
          address: 'SAQA House, 1067 Arcadia Street, Hatfield',
          city: 'Pretoria',
          phone: '+27 12 431 5000',
          email: 'info@saqa.org.za',
        },
      ],
      tips: [
        'Start the SAQA evaluation before anything else — it has the longest lead time',
        'You will need certified copies of your degree certificate and academic transcripts to apply',
        'Track your application online using the reference number provided by SAQA',
        'If you have multiple qualifications in the field, evaluate the highest one',
      ],
    },
    {
      id: 'professional-body-certificate',
      title: 'Professional Body Registration Certificate',
      description:
        'Proof of registration with the relevant South African professional or statutory body for your critical skill. Examples: HPCSA (health professionals), ECSA (engineers), SAICA (chartered accountants), SACAP (architects), IITPSA (ICT professionals), SACSSP (social workers), SACE (teachers).',
      copies: 'Original letter or certificate + 1 certified copy',
      optional: true,
      conditionalOn: 'Required where your occupation has a statutory body',
      where: [
        {
          name: 'HPCSA – Health Professions Council of SA',
          website: 'https://www.hpcsa.co.za',
          notes: 'For all registered health professionals: doctors, dentists, nurses, psychologists, pharmacists, radiographers, and others.',
          phone: '+27 12 338 9300',
          city: 'Pretoria',
        },
        {
          name: 'ECSA – Engineering Council of SA',
          website: 'https://www.ecsa.co.za',
          notes: 'For professional engineers, engineering technologists, and engineering technicians.',
          phone: '+27 11 607 9500',
          city: 'Johannesburg',
        },
        {
          name: 'SAICA – SA Institute of Chartered Accountants',
          website: 'https://www.saica.co.za',
          notes: 'For chartered accountants (CA(SA)) and associate general accountants.',
          phone: '+27 11 621 6600',
          city: 'Johannesburg',
        },
        {
          name: 'SACAP – SA Council for the Architectural Profession',
          website: 'https://www.sacap.org.za',
          notes: 'For architects and architectural draughtspersons.',
          city: 'Johannesburg',
        },
        {
          name: 'IITPSA – Institute of IT Professionals SA',
          website: 'https://www.iitpsa.org.za',
          notes: 'For ICT professionals in software development, systems analysis, IT management, cybersecurity, and related fields. IITPSA is the recognised professional body for the ICT sector on the Critical Skills List.',
          phone: '+27 11 803 3515',
          city: 'Johannesburg',
        },
      ],
      tips: [
        'Apply for professional body registration in parallel with your SAQA evaluation',
        'Some bodies require your SAQA evaluation before they will register you — check their specific requirements',
        'Provisional registration is accepted in many cases — confirm with DHA before submitting',
        'Keep your registration current — an expired professional registration will result in visa refusal',
      ],
    },
    {
      id: 'proof-of-experience',
      title: 'Proof of Work Experience',
      description:
        'Documentary evidence of your work experience in the relevant critical skills field. This includes employer reference letters on company letterhead, employment contracts, and a curriculum vitae (CV). Reference letters should state your job title, responsibilities, employment dates, and the employer\'s contact details.',
      copies: '1 set of originals or certified copies',
      where: [
        {
          name: 'From your current and previous employers',
          notes: 'Request reference letters on official company letterhead signed by a senior HR representative or direct supervisor. Letters must include contact details so DHA can verify them if needed.',
        },
      ],
      tips: [
        'Reference letters must be on company letterhead with contactable details',
        'Your CV should be detailed — list all positions held, responsibilities, and dates',
        'If self-employed, provide company registration documents, bank statements, and signed client references',
        'Even if a job offer is not required, evidence of an offer or contract strengthens the application',
      ],
    },
    {
      id: 'medical-certificate',
      title: 'Medical Certificate (Form BI-811)',
      description:
        'A medical certificate completed by a DHA-approved medical practitioner using the official Form BI-811. The certificate confirms you are in good health and free of communicable diseases that could present a public health risk in South Africa.',
      copies: 'Original (no copies required — completed by the doctor)',
      cost: 'R500–R1,200 depending on the practitioner',
      validity: '6 months from date of examination',
      where: [
        {
          name: 'VFS Global – List of DHA-Approved Doctors',
          website: 'https://visa.vfsglobal.com/zaf/en/dha',
          notes: 'Download the list of DHA-approved medical practitioners from the VFS Global South Africa portal. Only approved doctors can complete the BI-811 form.',
        },
        {
          name: 'International SOS (DHA-approved)',
          notes: 'International SOS clinics in Johannesburg, Cape Town, and Durban are DHA-approved and experienced with immigration medicals.',
          city: 'Nationwide',
          website: 'https://www.internationalsos.com',
        },
      ],
      tips: [
        'Only use a DHA-approved medical practitioner — private GPs who are not on the list are not accepted',
        'The medical examination typically takes 30–60 minutes and includes a blood test and physical examination',
        'Book early as approved doctors can be busy, especially near popular application periods',
        'Once issued, the certificate is valid for 6 months — time your medical to your planned submission date',
      ],
    },
    {
      id: 'radiology-report',
      title: 'Radiology Report (Chest X-Ray)',
      description:
        'A chest X-ray and radiologist\'s report to screen for pulmonary tuberculosis (TB). Required for all applicants from countries with medium or high TB incidence, and for all applicants who have been residing in South Africa for more than 12 months. The report must be on official radiological letterhead and include the X-ray film or digital image.',
      copies: 'Original report + X-ray film or digital image',
      cost: 'R300–R600',
      validity: '6 months from date of examination',
      where: [
        {
          name: 'Any registered radiologist or radiology centre',
          notes: 'Most hospitals and private radiology centres can provide this. The report must be on official letterhead from a registered radiologist.',
          city: 'Nationwide',
        },
        {
          name: 'DHA-approved doctors (who may arrange radiology)',
          notes: 'Some approved medical practitioners will refer you directly to a radiology partner — ask at the time of your medical appointment.',
        },
      ],
      tips: [
        'Combine the radiology report with your medical appointment where possible to save time',
        'Some nationalities may be exempt — confirm with VFS Global whether this applies to you',
        'The X-ray film/image itself must be submitted — not just the written report',
      ],
    },
    {
      id: 'sa-police-clearance',
      title: 'SA Police Clearance Certificate',
      description:
        'A police clearance from the South African Police Service (SAPS), confirming you have no unspent criminal convictions in South Africa. Required if you have been residing in South Africa for 12 months or more.',
      copies: 'Original (no copies required)',
      cost: 'R190',
      validity: '6 months from date of issue',
      optional: true,
      conditionalOn: 'Required if you have lived in SA for 12+ consecutive months',
      where: [
        {
          name: 'Any SAPS Police Station (Nationwide)',
          notes: 'Walk in with your passport or SA ID. Fingerprints are taken on the SAPS 91(a) form. Processing through the SAPS Criminal Record Centre in Pretoria typically takes 4–8 weeks.',
          hours: 'Monday–Friday, 7:30am–4pm',
          website: 'https://www.saps.gov.za/contact.php',
        },
        {
          name: 'LexisNexis Fingerprint Hub (Private – Expedited)',
          notes: 'Faster digital fingerprinting service available in Johannesburg, Pretoria, Cape Town, Durban, Port Elizabeth, and Bloemfontein. Faster processing at an additional cost.',
          website: 'https://www.lexisnexis.com/en-za/lexisrefcheck/fingerprint-hub',
        },
      ],
      tips: [
        'Start the SA police clearance early — SAPS processing takes 4–8 weeks',
        'Once received, submit your application within 6 months while the clearance is still valid',
        'Private services like LexisNexis offer faster turnaround but cost more',
      ],
    },
    {
      id: 'home-country-police-clearance',
      title: 'Police Clearance from Country of Nationality',
      description:
        'A police clearance certificate from your country of nationality and from any country where you have lived for 12 months or more in the past 10 years. These must confirm you have no unspent criminal convictions in those jurisdictions.',
      copies: 'Original + certified copy',
      where: [
        {
          name: 'Your home country\'s police authority or embassy in SA',
          notes: 'Contact your home country\'s relevant authority for police clearances. Many embassies in Pretoria and Johannesburg can facilitate applications — contact yours directly.',
          website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
        },
      ],
      tips: [
        'Allow extra time for foreign police clearances — some countries take 6–12 weeks',
        'Documents not in English must be accompanied by a certified translation',
        'Some countries require apostilling — check with DHA or VFS Global whether this is required for your nationality',
      ],
    },
    {
      id: 'proof-of-medical-aid',
      title: 'Proof of Medical Aid / Health Insurance',
      description:
        'Evidence that you have medical aid or health insurance coverage for yourself and any dependants for the duration of your intended stay in South Africa. A letter or certificate from your insurance provider confirming the scope and validity of cover is required.',
      copies: '1 copy (original if it\'s a letter)',
      where: [
        {
          name: 'Your medical aid or health insurer',
          notes: 'Request a certificate of cover or confirmation letter on the insurer\'s letterhead. International health insurance is accepted if it provides adequate in-hospital coverage in South Africa.',
        },
        {
          name: 'Discovery Health',
          website: 'https://www.discovery.co.za/medical-aid',
          notes: 'One of SA\'s largest medical aids. Individual plans available — request a membership certificate once enrolled.',
          city: 'Nationwide',
        },
        {
          name: 'Momentum Health',
          website: 'https://www.momentum.co.za/momentum/products/health',
          notes: 'Range of plans from hospital-only to comprehensive. Individual plans available — compare options on their site.',
          city: 'Nationwide',
        },
        {
          name: 'Bonitas Medical Fund',
          website: 'https://www.bonitas.co.za',
          notes: 'Competitive premiums with multiple plan tiers including BonEssential for budget-conscious applicants.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'The cover must be valid for the full duration of your intended stay',
        'If you join a SA medical aid, get a membership certificate letter — this is the most reliable proof',
        'International travel insurance is generally not sufficient — it must be medical aid or comprehensive health insurance',
      ],
    },
    {
      id: 'photographs',
      title: 'Passport-Sized Photographs',
      description:
        'Two recent passport-sized photographs meeting DHA specifications: full face, neutral expression, white or off-white background, taken within the last 3 months.',
      copies: '2 originals',
      cost: 'R40–R80',
      where: [
        {
          name: 'PostNet or 3@1 (nationwide)',
          notes: 'Most branches offer passport photo services for approximately R40–R60.',
          city: 'Nationwide',
        },
        {
          name: 'Any licensed photo studio',
          notes: 'Ask specifically for \'South African Home Affairs passport photos\' to ensure the correct specifications.',
          city: 'Nationwide',
        },
      ],
      tips: [
        'Ask for \'Home Affairs passport photos\' — the specifications differ slightly from regular passport photos',
        'Wear neutral clothing; avoid white shirts that blend into the background',
        'Photos must be taken within 3 months of your application submission',
      ],
    },
  ],

  phases: [
    {
      id: 'check-eligibility',
      number: 1,
      title: 'Confirm Eligibility',
      summary:
        'Before spending time or money on documentation, confirm that your occupation is on the current Critical Skills List and that you meet the qualification and professional body requirements.',
      estimatedTime: '1–2 days',
      steps: [
        'Download the current Critical Skills List from the DHA website (https://www.dha.gov.za)',
        'Confirm your specific occupation is listed — if in doubt, call DHA at 0800 601 190',
        'Identify which professional body (if any) governs your occupation in South Africa',
        'Confirm whether you need a SAQA foreign qualification evaluation (required for all foreign degrees)',
      ],
    },
    {
      id: 'long-lead-docs',
      number: 2,
      title: 'Start Long-Lead Documents',
      summary:
        'Several documents require weeks to obtain. Submit these applications simultaneously and as early as possible. The SAQA evaluation and professional body registration are typically the longest lead items.',
      estimatedTime: '4–12 weeks',
      steps: [
        'Apply for your SAQA foreign qualification evaluation (https://www.saqa.org.za) — allow 4–6 weeks',
        'Apply for professional body registration (if applicable) — timelines vary by body',
        'Order your home country police clearance — allow 2–8 weeks depending on jurisdiction',
        'Apply for your SA police clearance at SAPS (if you have been in SA for 12+ months) — allow 4–8 weeks',
        'Book your medical appointment with a DHA-approved practitioner',
      ],
    },
    {
      id: 'gather-documents',
      number: 3,
      title: 'Compile Your Application',
      summary:
        'Once your long-lead documents arrive, compile your complete application package. Ensure every document is present, certified where required, and not expired.',
      estimatedTime: '1–2 weeks',
      steps: [
        'Complete and sign the BI-1738 application form',
        'Collect certified copies of all documents where required',
        'Organise documents in the order specified on the VFS Global checklist',
        'Prepare your employment reference letters and CV',
        'Ensure all non-English documents are accompanied by certified translations',
      ],
    },
    {
      id: 'book-and-submit',
      number: 4,
      title: 'Book Appointment and Submit',
      summary:
        'Book an appointment at a VFS Global application centre (if applying within South Africa) or at a South African embassy or consulate (if applying from abroad). Submit your complete application and pay the fees.',
      estimatedTime: '1 day',
      steps: [
        'Book your appointment at VFS Global (https://visa.vfsglobal.com/zaf/en/dha)',
        'Attend your appointment with all original documents and copies',
        'Biometrics (fingerprints and photograph) are taken at VFS Global at submission',
        'Pay the VFS Global service fee (~R1,520) and biometric fee (~R230) — confirm current amounts at VFS',
        'Receive your application reference number and track status online',
      ],
    },
    {
      id: 'await-decision',
      number: 5,
      title: 'Await the Decision',
      summary:
        'DHA processes Critical Skills Work Visa applications within 4–8 weeks for complete applications. Track your application online using the reference number from VFS Global. If additional information is requested, respond promptly.',
      estimatedTime: '4–8 weeks',
      steps: [
        'Track your application online at the VFS Global or DHA portal',
        'Respond immediately to any requests for additional information',
        'Do not travel outside South Africa while your application is pending if you are in SA on a visa that does not allow re-entry',
        'VFS Global will contact you when the decision is ready — either for passport collection or courier delivery',
      ],
    },
    {
      id: 'collect-visa',
      number: 6,
      title: 'Collect Your Visa',
      summary:
        'On approval, your visa is endorsed in your passport. Collect your passport from VFS Global or have it couriered to you. Review your visa carefully — ensure the validity dates, conditions, and name are all correct.',
      estimatedTime: '1 day',
      steps: [
        'Collect your passport from the VFS Global centre or via courier (if that option was selected)',
        'Check the visa endorsement carefully — name, dates, permit type, and any conditions',
        'Report any errors to VFS Global immediately — do not leave errors in your endorsement',
        'Plan your stay and any required activities to comply with the visa conditions',
      ],
    },
  ],

  fees: [
    {
      item: 'VFS Global service fee (within SA)',
      amount: '~R1,520',
      notes: 'Paid to VFS Global at time of application — verify current amount at VFS before appointment',
    },
    {
      item: 'Biometric fee (within SA)',
      amount: '~R230',
      notes: 'Paid to VFS Global at time of application for fingerprinting and photograph',
    },
    {
      item: 'SAQA foreign qualification evaluation',
      amount: 'R1,350',
      notes: 'Per qualification. Paid to SAQA when submitting your evaluation application',
    },
    {
      item: 'Medical certificate (DHA-approved doctor)',
      amount: 'R500–R1,200',
      notes: 'Varies by practitioner. Includes the BI-811 form completion',
    },
    {
      item: 'Radiology report (chest X-ray)',
      amount: 'R300–R600',
      notes: 'May be included in the medical practitioner\'s fee or billed separately',
    },
    {
      item: 'SA Police Clearance Certificate',
      amount: 'R190',
      notes: 'Paid at SAPS station (if applicable to your circumstances)',
    },
    {
      item: 'Passport photos (2)',
      amount: 'R40–R80',
      notes: 'At PostNet, 3@1, or a photo studio',
    },
    {
      item: 'Certified copies of documents',
      amount: 'R10–R30 per copy',
      notes: 'Commissioner of oaths at police station, bank, or post office',
    },
    {
      item: 'Courier for passport return (optional)',
      amount: '~R200',
      notes: 'Optional but recommended. Verify the current amount with VFS Global',
    },
  ],

  applyHref: 'https://visa.vfsglobal.com/zaf/en/dha',
};
