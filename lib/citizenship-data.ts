export interface DocumentLocation {
  name: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  notes?: string;
}

export interface RequiredDocument {
  id: string;
  title: string;
  description: string;
  copies: string;
  cost?: string;
  validity?: string;
  where: DocumentLocation[];
  tips: string[];
  optional?: boolean;
  conditionalOn?: string;
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  summary: string;
  estimatedTime: string;
  documents?: RequiredDocument[];
  steps?: string[];
}

export interface ApplicationForm {
  id: string;
  title: string;
  purpose: string;
  downloadUrl?: string;
  notes?: string;
}

export const APPLICATION_FORMS: ApplicationForm[] = [
  {
    id: 'dha-63',
    title: 'DHA-63',
    purpose:
      'Application for Certificate of Naturalisation — the primary statutory application form under the South African Citizenship Regulations.',
    downloadUrl: '/forms/DHA63.pdf',
    notes:
      'Primary statutory form used to apply for naturalisation. See also the Government of South Africa guidance: https://www.gov.za/services/services-residents/citizenship/personal-identification/apply-for-sa-citizenship and the Citizenship Regulations: https://www.saflii.org/za/legis/consol_reg/rotsaca1995458/',
  },
  {
    id: 'dha-529',
    title: 'DHA-529',
    purpose:
      'Determination of citizenship status — used by Home Affairs to confirm whether you are already a South African citizen or require further action before naturalisation.',
    downloadUrl: '/forms/DHA529.pdf',
    notes:
      'Often required before a naturalisation application is accepted. Requirements vary by office — see guidance: https://homeaffairsguide.co.za/citizenship/determination-of-citizenship-status/',
  },
  {
    id: 'dha-757',
    title: 'DHA-757',
    purpose: 'Naturalisation questionnaire (supporting form)',
    notes:
      'Supporting naturalisation questionnaire commonly required alongside DHA-63. Complete fully and submit with your application package.',
  },
  {
    id: 'bi-9',
    title: 'BI-9',
    purpose: 'Application for South African identity document (BI-9 / DHA-9)',
    downloadUrl: '/forms/BI-9.pdf',
    notes:
      'Required for issuance/re-issue of a South African ID following naturalisation. Bring passport photos and supporting documents as instructed by Home Affairs.',
  },
  {
    id: 'saps-91a',
    title: 'SAPS 91(a)',
    purpose: 'Fingerprint submission for police clearance',
    downloadUrl:
      '/forms/SAPS-91a.pdf',
    notes:
      'Provided at SAPS police stations — used for your SA police clearance. The SAPS 91(a) form (PDF) is available to download.',
  },
];

export const ELIGIBILITY_CRITERIA = [
  {
    id: 'permanent-residence',
    title: '5+ Years Permanent Residency',
    description:
      'You must have held a valid South African Permanent Residency permit or certificate for more than five years.',
    tip: 'Count from the date on your PR permit, not from when you first arrived in SA.',
  },
  {
    id: 'continuous-presence',
    title: 'Continuous Physical Presence',
    description:
      'You must have been physically present in South Africa for the past year before applying. Avoid absences exceeding 90 days per year during your qualifying period.',
    tip: 'Check your passport entry/exit stamps. Extended stays outside SA could reset your qualifying period.',
  },
  {
    id: 'good-character',
    title: 'Good Character',
    description:
      'You must be of good character and no outstanding criminal convictions or pending charges.',
    tip: 'This is assessed via your police clearances — both SA and from your country of origin.',
  },
  {
    id: 'language',
    title: 'Official Language Proficiency',
    description:
      "You must demonstrate that you can speak and understand at least one of South Africa's 11 official languages.",
    tip: 'A letter from your employer, school, or community organisation confirming your language proficiency is sufficient.',
  },
  {
    id: 'dual-citizenship',
    title: 'Dual Citizenship Permission',
    description:
      "Your home country must confirm whether it permits dual citizenship. You need official written confirmation of this from your country's embassy or high commission in South Africa.",
    tip: 'Under the 2013 Constitution, Zimbabwe permits dual citizenship only for citizens by birth; citizens by descent or registration may be required to renounce other citizenships — confirm with the Zimbabwean embassy or consulate.',
  },
];

export const REQUIRED_DOCUMENTS: RequiredDocument[] = [
  {
    id: 'permanent-residence-permit',
    title: 'Permanent Residence Permit / Certificate',
    description:
      'Your South African Permanent Residence permit or certificate showing the issue date. Note: a Proof of PR is now required for all citizenship by naturalisation applicants; if you do not have the physical certificate, obtain a Proof of PR before submitting. Proof of PR applications are handled via VFS Global for DHA services — see the VFS Global DHA service page for details.',
    copies: 'Original + 2 certified copies',
    where: [
      {
        name: 'Already in your possession',
        notes:
          'This is the document you already hold. Make certified copies at any commissioner of oaths.',
      },
      {
        name: 'VFS Global (DHA services)',
        website:
          'https://visa.vfsglobal.com/zaf/en/dha/visa-type#proofofpermanentresidence',
        notes:
          'VFS Global handles Proof of PR submissions for DHA services — follow the instructions on the VFS site for documentation and appointments.',
      },
      {
        name: 'Commissioner of Oaths',
        notes:
          'Certified copies can be made at any police station, bank, post office, or legal firm with a commissioner of oaths.',
      },
    ],
    tips: [
      'Permanent Residence permits do not expire; use the issue date as your qualifying start date',
      'A Proof of PR is required for all naturalisation applicants — if you have lost your certificate, apply for a Proof of PR before proceeding (applications are handled via VFS Global for DHA services)',
      'The date on your permit is your qualifying start date — 5 years from this date',
    ],
  },
  {
    id: 'foreign-passport',
    title: 'Foreign Passport(s)',
    description:
      'All pages of your current and any previous passports, showing all entry and exit stamps for South Africa and other countries.',
    copies: 'Original + certified copies of all pages (including blank pages)',
    where: [
      {
        name: 'Already in your possession',
        notes:
          'If you have had multiple passports, include all of them. The stamps prove your physical presence.',
      },
    ],
    tips: [
      'Include ALL passports — current and expired — to show your complete travel history',
      'Do NOT remove any pages — present all pages including the blank ones',
      "This is how DHA verifies you haven't been absent for more than 90 days per year",
    ],
  },
  {
    id: 'birth-certificate',
    title: 'Unabridged Birth Certificate',
    description:
      'Your full (unabridged) birth certificate from your country of birth. Abridged versions are not accepted by DHA.',
    copies: 'Original + 2 certified copies',
    where: [
      {
        name: 'Zimbabwe',
        notes:
          "Apply at the Registrar General's Office in Harare, or through the Zimbabwe Embassy/Consulate in your city.",
        city: 'Harare / Johannesburg',
      },
      {
        name: 'Zimbabwe Consulate Johannesburg',
        address: '20 Ernest Oppenheimer Avenue, Bruma',
        city: 'Johannesburg',
        phone: '+27 11 037 3400',
        email: 'admin@zimbabweconsulate.co.za',
        notes: 'Can assist with obtaining Zimbabwean documents',
      },
      {
        name: "Your country's High Commission/Embassy",
        notes:
          "For other nationalities, contact your country's official representation in South Africa for guidance on obtaining your birth certificate.",
        website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
      },
    ],
    tips: [
      'Processing time varies by country — start this early, it can take weeks or months',
      'The certificate may need to be apostilled (internationally authenticated) — check with DHA',
      'For documents not in English, you will need a certified translation',
    ],
  },
  {
    id: 'sa-police-clearance',
    title: 'SA Police Clearance Certificate',
    description:
      'A police clearance certificate from the South African Police Service (SAPS), issued on the SAPS 91(a) form. Must be less than 6 months old at time of submission.',
    copies: 'Original only (no copies required)',
    cost: 'R190',
    validity: '6 months from date of issue',
    where: [
      {
        name: 'Any SAPS Police Station (Nationwide)',
        notes:
          'Walk in with your ID or passport. Fingerprints taken on SAPS 91(a) form. You can ask the station to submit the application on your behalf, or submit it yourself to the SAPS Criminal Record Centre in Pretoria.',
        hours: 'Monday–Friday, 7:30am–4pm',
        website: 'https://www.saps.gov.za/contact.php',
      },
      {
        name: 'SAPS 91(a) form (PDF)',
        website:
          '/forms/SAPS-91a.pdf',
        notes:
          'Download and print the SAPS 91(a) form for fingerprint submission if required by the police station or a private agent.',
      },
      {
        name: 'SAPS Criminal Record Centre (LCRC) – Pretoria',
        address: 'Bathong Plaza West Building, Pretoria CBD',
        city: 'Pretoria',
        notes:
          'You can submit your fingerprints directly here. Take your own prints to a police station first, then bring the completed SAPS 91(a) form to LCRC.',
      },
      {
        name: 'LexisNexis Fingerprint Hub (Private – Expedited)',
        notes:
          'Private digital fingerprinting service. Faster processing. Branches in Johannesburg, Pretoria, Cape Town, Durban, Port Elizabeth, Bloemfontein, and more.',
        website:
          'https://www.lexisnexis.com/en-za/lexisrefcheck/fingerprint-hub',
      },
      {
        name: 'NeVeTeC Police Clearance Agents (Private – Nationwide)',
        notes:
          'Nationwide network of accredited agents offering police clearance services. Available in virtually all major cities and towns.',
        website: 'https://nevetec.co.za/sace-police-clearance-agents/',
      },
    ],
    tips: [
      'Start this early — the SAPS Criminal Record Centre can take 4–8 weeks to process',
      'Once received, plan your application submission within 6 months',
      'Private services like LexisNexis and NeVeTeC are faster but cost more',
      'You must take your SA non-citizen ID or passport to the police station',
    ],
  },
  {
    id: 'home-country-police-clearance',
    title: 'Police Clearance from Country of Origin',
    description:
      'Police clearance certificate(s) from every country where you have held citizenship. This confirms you have no criminal record in your home country.',
    copies: 'Original + certified copies',
    where: [
      {
        name: 'Zimbabwe',
        notes:
          'Apply at any Zimbabwe Republic Police (ZRP) charge office or station. You may also be able to apply through the Zimbabwe Embassy in South Africa.',
        city: 'Nationwide Zimbabwe / through Embassy',
      },
      {
        name: 'Zimbabwe Consulate Johannesburg',
        address: '20 Ernest Oppenheimer Avenue, Bruma',
        city: 'Johannesburg',
        phone: '+27 11 037 3400',
        email: 'admin@zimbabweconsulate.co.za',
        notes: 'May assist with ZRP police clearance application from SA',
      },
      {
        name: "Your country's High Commission/Embassy in SA",
        notes:
          "Contact your home country's embassy for guidance on obtaining police clearance from abroad.",
        website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
      },
    ],
    tips: [
      'May require apostilling — check whether DHA requires authentication',
      'Documents not in English must be accompanied by a certified translation',
      'Processing can take several weeks — factor this into your timeline',
      "If you've lived in other countries, you may need clearances from those countries too",
    ],
  },
  {
    id: 'dual-citizenship-letter',
    title: 'Dual Citizenship Confirmation Letter',
    description:
      "An original letter from your home country's High Commission or Embassy confirming whether your country allows or does not allow dual citizenship. This is a mandatory document regardless of the answer — DHA needs the official confirmation either way.",
    copies: 'Original (keep copies for your own records)',
    where: [
      {
        name: 'Zimbabwe Consulate Johannesburg',
        address: '20 Ernest Oppenheimer Avenue, Bruma',
        city: 'Johannesburg',
        phone: '+27 11 037 3400',
        email: 'admin@zimbabweconsulate.co.za',
        notes:
          "Citizenship letter confirming Zimbabwe's position on dual citizenship. Under the 2013 Constitution, dual citizenship is permitted only for citizens by birth; citizens by descent or registration may be required to renounce other citizenships. Confirm your status and documentary requirements with the Zimbabwe Consulate.",
        hours: 'Monday–Friday, 8am–3pm (confirm by phone)',
      },
      {
        name: "Your country's High Commission or Embassy in SA",
        notes:
          "Contact your home country's official representation. Search for embassies in South Africa on the DIRCO website.",
        website: 'https://dirco.gov.za/foreign-representation-in-south-africa/',
      },
    ],
    cost: 'Zimbabwe: R500 | Other countries: varies',
    tips: [
      'Call ahead to confirm the process — some embassies require appointments',
      'Under the 2013 Constitution, Zimbabwe permits dual citizenship only for citizens by birth; citizens by descent or registration may be required to renounce other citizenships — confirm with the Zimbabwean embassy or consulate',
      "Keep a copy of this letter for your own records — it's an important document",
      'If your country does not allow dual citizenship, DHA will guide you through the renunciation process',
    ],
  },
  {
    id: 'proof-of-residence',
    title: 'Proof of Continuous Residence',
    description:
      'Documents proving you have lived continuously in South Africa for the year immediately before your application. Recommended: at least 2 documents per quarter.',
    copies: 'Copies (carry originals too)',
    where: [
      {
        name: 'Already in your possession',
        notes:
          'Gather: rental agreements, utility bills (water, electricity), bank statements, salary slips, municipal rates account, cellphone contracts, subscription bills (DSTV, internet).',
      },
    ],
    tips: [
      'The more documents covering more dates, the stronger your case',
      'Rental agreements + monthly utility bills + bank statements are ideal',
      'Documents must show your name and your SA residential address',
      'SA bank account statements are excellent proof — most people already have these',
    ],
  },
  {
    id: 'photographs',
    title: 'Passport-Sized Photographs',
    description:
      'Two recent passport-sized photographs meeting DHA specifications: full face, neutral expression, white or light-coloured background.',
    copies: '2 photos (originals)',
    cost: 'R40–R80 at most photo studios',
    where: [
      {
        name: 'PostNet or 3@1',
        notes:
          'Most PostNet and 3@1 branches offer passport photo services. Cost approximately R40–R60.',
        city: 'Nationwide',
      },
      {
        name: 'Post Office (South African Post Office)',
        notes: 'Many Post Office branches offer passport photo services.',
        city: 'Nationwide',
      },
      {
        name: 'Any Photo Studio',
        notes:
          'Specialize in passport photos. Often the best quality and most knowledgeable about DHA specifications.',
        city: 'Nationwide',
      },
    ],
    tips: [
      "Take the photos specifically for DHA — ask for 'Home Affairs passport photos'",
      'Photos must be recent — taken within the last 3 months',
      'Wear neutral clothing; avoid white tops that blend with the background',
    ],
  },
  {
    id: 'marriage-certificate',
    title: 'Marriage Certificate',
    description:
      'If you are married, provide your unabridged marriage certificate.',
    copies: 'Original + 2 certified copies',
    optional: true,
    conditionalOn: 'If you are currently married',
    where: [
      {
        name: 'Department of Home Affairs',
        notes:
          'For SA marriages. Can apply for an unabridged marriage certificate at any Home Affairs office.',
        city: 'Nationwide',
        website: 'https://www.dha.gov.za',
      },
      {
        name: "Your country's authority for foreign marriages",
        notes:
          'For marriages conducted outside SA, obtain from the relevant authority in that country.',
      },
    ],
    tips: [
      'Must be unabridged (full certificate), not the shortened abbreviated version',
      'If the certificate is not in English, have it translated by a certified translator',
    ],
  },
  {
    id: 'divorce-decree',
    title: 'Divorce Decree / Order',
    description:
      'If you have been divorced, provide the final divorce decree or order.',
    copies: 'Original + 2 certified copies',
    optional: true,
    conditionalOn: 'If you have been divorced',
    where: [
      {
        name: 'The court that granted your divorce',
        notes:
          "Obtain a certified copy of the divorce order from the Master of the High Court or magistrate's court.",
      },
    ],
    tips: [
      'Ensure the final order is included, not just the summons or citation',
    ],
  },
  {
    id: 'language-proficiency',
    title: 'Language Proficiency Evidence',
    description:
      "Evidence that you can speak and understand at least one of South Africa's 11 official languages (Zulu, Xhosa, Afrikaans, English, Northern Sotho, Tswana, Sotho, Tsonga, Swati, Venda, or Ndebele).",
    copies: 'Original or certified copy',
    where: [
      {
        name: 'Your employer',
        notes:
          'A simple letter from your employer on company letterhead confirming your language proficiency is sufficient.',
      },
      {
        name: 'School or educational institution',
        notes:
          'If you studied at a SA school or university, a letter from the institution.',
      },
      {
        name: 'Community or religious organisation',
        notes:
          'A letter from a church, mosque, community centre, or similar organisation where you are known.',
      },
    ],
    tips: [
      'A simple one-page letter from your employer is the easiest route',
      'The letter should state which language you speak, your name, and how long they have known you',
      'Most South African professionals speak English — a letter confirming your English is sufficient',
    ],
  },
];

export const APPLICATION_PHASES: Phase[] = [
  {
    id: 'check-eligibility',
    number: 1,
    title: 'Check Your Eligibility',
    summary:
      'Before collecting any documents, confirm you meet all the requirements for citizenship by naturalisation. This takes about 30 minutes.',
    estimatedTime: '30 minutes',
    steps: [
      'Confirm your PR permit has been valid for 5+ years',
      'Review your passport stamps to verify continuous residence',
      'Confirm you have no outstanding criminal charges or convictions',
      'Identify which official SA language you speak',
      'Check whether your home country allows dual citizenship',
    ],
  },
  {
    id: 'gather-documents',
    number: 2,
    title: 'Gather Your Documents',
    summary:
      'Collecting and preparing your documents is the most time-consuming phase. Start with items that require the longest lead time (police clearances, foreign documents). Allow 4–8 weeks.',
    estimatedTime: '4–8 weeks',
  },
  {
    id: 'complete-forms',
    number: 3,
    title: 'Complete the DHA Forms',
    summary:
      'Download and complete the required Department of Home Affairs forms. Use our form assistant to pre-fill your details and generate a completed summary to reference.',
    estimatedTime: '2–3 hours',
  },
  {
    id: 'submit-application',
    number: 4,
    title: 'Submit Your Application',
    summary:
      'Submit your complete application package in person at any Department of Home Affairs office. Bring all originals and certified copies. Pay the application fees at the counter.',
    estimatedTime: 'Half a day',
    steps: [
      'Book an appointment at your nearest Home Affairs office (recommended)',
      'Arrive early — queues can be long',
      'Bring ALL originals and certified copies of every document',
      'Pay fees: R300 for citizenship application + R140 for new SA ID',
      'Get a receipt for every payment — keep these safe',
      'Request a reference number for your application',
    ],
  },
  {
    id: 'await-decision',
    number: 5,
    title: 'Await the Decision',
    summary:
      'Processing times vary. Expect 12–24 months due to current DHA backlogs. You may be called for an interview. Stay reachable on the contact details you provided.',
    estimatedTime: '12–24 months',
    steps: [
      'Keep your contact details current — DHA will contact you if they need anything',
      'Do not make extended travel plans outside SA during this period',
      "Follow up with your Home Affairs office after 12 months if you haven't heard",
      'If called for an interview, attend promptly and bring all your original documents',
    ],
  },
  {
    id: 'citizenship-ceremony',
    number: 6,
    title: 'Citizenship Ceremony',
    summary:
      'Upon approval, you will be invited to a formal citizenship ceremony where you take the constitutional oath of allegiance. This is your final step to becoming a South African citizen.',
    estimatedTime: '1–2 hours',
    steps: [
      'Attend the ceremony on the date notified by DHA',
      'Take the oath of allegiance to the South African Constitution',
      'Receive your Certificate of Naturalisation',
      'Apply for your South African passport',
    ],
  },
];

export const FEES_SUMMARY = [
  {
    item: 'Citizenship application fee (DHA)',
    amount: 'R300',
    notes: 'Paid at Home Affairs counter',
  },
  {
    item: 'New SA Identity Document (BI-9)',
    amount: 'R140',
    notes: 'Paid at Home Affairs counter',
  },
  {
    item: 'SA Police Clearance Certificate',
    amount: 'R190',
    notes: 'Paid at police station or private agent',
  },
  {
    item: 'Zimbabwe Citizenship Confirmation Letter',
    amount: 'R500',
    notes: 'Zimbabwe Consulate, Bruma, Johannesburg',
  },
  {
    item: 'Passport photos (2)',
    amount: 'R40–R80',
    notes: 'PostNet, 3@1, or photo studio',
  },
  {
    item: 'Certified copies of documents',
    amount: 'R10–R30 per copy',
    notes: 'Commissioner of oaths at police station, bank, or post office',
  },
];
