export type DualCitizenshipStatus =
  | 'allowed'
  | 'conditional'
  | 'not-allowed'
  | 'unknown';

export interface EmbassyInSA {
  name: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
}

export interface NationalityData {
  code: string;
  name: string;
  dualCitizenshipStatus: DualCitizenshipStatus;
  dualCitizenshipNote: string;
  embassy?: EmbassyInSA;
}

export const NATIONALITIES: NationalityData[] = [
  // ── SADC ───────────────────────────────────────────────────────────────────
  {
    code: 'ZW',
    name: 'Zimbabwe',
    dualCitizenshipStatus: 'conditional',
    dualCitizenshipNote:
      "Under Zimbabwe's 2013 Constitution, dual citizenship is permitted only for citizens by birth. If you acquired Zimbabwean citizenship by descent or registration, you may be required to renounce it before or after naturalisation. Confirm your specific category with the Zimbabwe Consulate before proceeding.",
    embassy: {
      name: 'Zimbabwe Consulate General, Johannesburg',
      address: '20 Ernest Oppenheimer Avenue, Bruma',
      city: 'Johannesburg',
      phone: '+27 11 037 3400',
      email: 'admin@zimbabweconsulate.co.za',
      hours: 'Mon–Fri, 8am–3pm (confirm by phone)',
    },
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Mozambique permits dual citizenship. You still need an official letter from the Mozambican High Commission confirming this for your DHA application.',
    embassy: {
      name: 'Mozambique High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'MW',
    name: 'Malawi',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Malawi does not currently permit dual citizenship. Naturalising as a South African citizen may result in automatic loss of your Malawian citizenship. Seek legal advice and confirm the renunciation process with the Malawian High Commission before proceeding.',
    embassy: {
      name: 'Malawi High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'ZM',
    name: 'Zambia',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Zambia does not permit dual citizenship. Acquiring South African citizenship may result in loss of Zambian citizenship. Confirm the renunciation process with the Zambian High Commission.',
    embassy: {
      name: 'Zambia High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'LS',
    name: 'Lesotho',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Lesotho permits dual citizenship. You still need an official letter from the Lesotho High Commission confirming this for your DHA application.',
    embassy: {
      name: 'Lesotho High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'SZ',
    name: 'Eswatini (Swaziland)',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Eswatini does not permit dual citizenship. Confirm the implications with the Eswatini High Commission before proceeding.',
    embassy: {
      name: 'Eswatini High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'BW',
    name: 'Botswana',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Botswana does not permit dual citizenship. Naturalising as a South African citizen may result in loss of Botswana citizenship. Confirm the process with the Botswana High Commission.',
    embassy: {
      name: 'Botswana High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'NA',
    name: 'Namibia',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Namibia permits dual citizenship under the Namibian Citizenship Act. You still need an official letter from the Namibian High Commission confirming this for your DHA application.',
    embassy: {
      name: 'Namibia High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Tanzania does not permit dual citizenship. Acquiring South African citizenship may result in loss of Tanzanian citizenship. Confirm the implications with the Tanzania High Commission.',
    embassy: {
      name: 'Tanzania High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'CD',
    name: 'DR Congo (DRC)',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'The Democratic Republic of Congo does not permit dual citizenship. Confirm the implications with the DRC Embassy in South Africa.',
    embassy: {
      name: 'DRC Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'AO',
    name: 'Angola',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      "Angola does not permit dual citizenship. Naturalising as a South African citizen may result in loss of Angolan citizenship. Confirm the implications with the Angolan Embassy. Angola's position on dual citizenship can change — always verify the current position with the embassy.",
    embassy: {
      name: 'Angola Embassy, Pretoria',
      city: 'Pretoria',
    },
  },

  // ── Rest of Africa ─────────────────────────────────────────────────────────
  {
    code: 'NG',
    name: 'Nigeria',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      "Nigeria's 1999 Constitution permits dual citizenship. You still need an official letter from the Nigerian High Commission confirming this for your DHA application.",
    embassy: {
      name: 'Nigeria High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'GH',
    name: 'Ghana',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Ghana permits dual citizenship under the Citizenship Act, 2000. You still need an official letter from the Ghanaian High Commission confirming this for your DHA application.',
    embassy: {
      name: 'Ghana High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'KE',
    name: 'Kenya',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      "Kenya's 2010 Constitution allows dual citizenship. You still need an official letter from the Kenyan High Commission confirming this for your DHA application.",
    embassy: {
      name: 'Kenya High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Ethiopia does not permit dual citizenship. Naturalising as a South African citizen may result in loss of Ethiopian citizenship. Confirm the implications with the Ethiopian Embassy.',
    embassy: {
      name: 'Ethiopia Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'CM',
    name: 'Cameroon',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Cameroon permits dual citizenship. You still need an official letter from the Cameroonian Embassy confirming this for your DHA application.',
    embassy: {
      name: 'Cameroon Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'RW',
    name: 'Rwanda',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Rwanda permits dual citizenship. You still need an official letter from the Rwandan Embassy confirming this for your DHA application.',
    embassy: {
      name: 'Rwanda Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'UG',
    name: 'Uganda',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      "Uganda permits dual citizenship under the Constitution. You still need an official letter from the Ugandan High Commission confirming this for your DHA application.",
    embassy: {
      name: 'Uganda High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'SO',
    name: 'Somalia',
    dualCitizenshipStatus: 'unknown',
    dualCitizenshipNote:
      "Somalia's position on dual citizenship is unclear. Contact your nearest Somali diplomatic mission for guidance before proceeding — they will advise you on whether you need to renounce Somali citizenship and what the dual citizenship letter should state.",
    embassy: {
      name: 'Somalia Embassy / Diplomatic Mission',
      notes: 'Contact details via DIRCO',
    } as EmbassyInSA,
  },

  // ── Asia ───────────────────────────────────────────────────────────────────
  {
    code: 'IN',
    name: 'India',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'India does not permit dual citizenship. Acquiring South African citizenship will result in automatic loss of Indian citizenship. Note: the Overseas Citizen of India (OCI) card is not equivalent to dual citizenship — it does not make you an Indian citizen. Confirm the renunciation process with the Indian High Commission.',
    embassy: {
      name: 'India High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'PK',
    name: 'Pakistan',
    dualCitizenshipStatus: 'conditional',
    dualCitizenshipNote:
      'Pakistan permits dual citizenship with certain countries under bilateral agreements. Confirm with the Pakistani High Commission whether South Africa is an included country and what conditions apply before proceeding.',
    embassy: {
      name: 'Pakistan High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'CN',
    name: 'China',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'China does not permit dual citizenship. Acquiring South African citizenship will result in automatic loss of Chinese citizenship. Confirm the renunciation process with the Chinese Embassy.',
    embassy: {
      name: 'China Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    dualCitizenshipStatus: 'not-allowed',
    dualCitizenshipNote:
      'Bangladesh does not permit dual citizenship. Acquiring South African citizenship may result in loss of Bangladeshi citizenship. Confirm the implications with the Bangladeshi High Commission.',
    embassy: {
      name: 'Bangladesh High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'PH',
    name: 'Philippines',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'The Philippines permits dual citizenship under Republic Act 9225 (Citizenship Retention and Re-acquisition Act). You still need an official letter from the Philippine Embassy confirming this for your DHA application.',
    embassy: {
      name: 'Philippines Embassy, Pretoria',
      city: 'Pretoria',
    },
  },

  // ── Europe ─────────────────────────────────────────────────────────────────
  {
    code: 'GB',
    name: 'United Kingdom',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'The United Kingdom allows dual citizenship and places no restrictions on holding a foreign nationality. You still need an official letter from the British High Commission confirming this for your DHA application.',
    embassy: {
      name: 'British High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'DE',
    name: 'Germany',
    dualCitizenshipStatus: 'conditional',
    dualCitizenshipNote:
      "Germany generally requires renunciation of other nationalities when naturalising, with some exceptions (e.g. EU/EEA citizens, hardship cases). However, Germany's rules on dual citizenship have been evolving. Confirm your specific situation with the German Embassy before proceeding.",
    embassy: {
      name: 'German Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'FR',
    name: 'France',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'France allows dual citizenship and imposes no restrictions on holding a foreign nationality. You still need an official letter from the French Embassy confirming this for your DHA application.',
    embassy: {
      name: 'French Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'NL',
    name: 'Netherlands',
    dualCitizenshipStatus: 'conditional',
    dualCitizenshipNote:
      'The Netherlands generally requires renunciation of other nationalities, with certain exceptions. Confirm your specific situation with the Dutch Embassy before proceeding, as the rules depend on how you acquired Dutch citizenship.',
    embassy: {
      name: 'Netherlands Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'PT',
    name: 'Portugal',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Portugal allows dual citizenship with no restrictions. You still need an official letter from the Portuguese Embassy confirming this for your DHA application.',
    embassy: {
      name: 'Portuguese Embassy, Pretoria',
      city: 'Pretoria',
    },
  },

  // ── Americas ───────────────────────────────────────────────────────────────
  {
    code: 'US',
    name: 'United States',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'The United States allows its citizens to hold dual nationality. While the US does not formally endorse it, there is no US law prohibiting dual citizenship. You still need an official letter from the US Embassy confirming this for your DHA application.',
    embassy: {
      name: 'US Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'CA',
    name: 'Canada',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Canada allows dual citizenship with no restrictions. You still need an official letter from the Canadian High Commission confirming this for your DHA application.',
    embassy: {
      name: 'Canadian High Commission, Pretoria',
      city: 'Pretoria',
    },
  },
  {
    code: 'BR',
    name: 'Brazil',
    dualCitizenshipStatus: 'allowed',
    dualCitizenshipNote:
      'Brazil allows dual citizenship with no restrictions. You still need an official letter from the Brazilian Embassy confirming this for your DHA application.',
    embassy: {
      name: 'Brazilian Embassy, Pretoria',
      city: 'Pretoria',
    },
  },
];

export const NATIONALITIES_SORTED = [...NATIONALITIES].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export function getNationality(code: string): NationalityData | undefined {
  return NATIONALITIES.find((n) => n.code === code);
}

export const DUAL_CITIZENSHIP_STATUS_LABELS: Record<
  DualCitizenshipStatus,
  { label: string; colour: string; bg: string }
> = {
  allowed: {
    label: 'Dual citizenship permitted',
    colour: 'var(--green-dark)',
    bg: 'var(--green-subtle)',
  },
  conditional: {
    label: 'Dual citizenship — conditions apply',
    colour: 'var(--amber-dark)',
    bg: 'var(--amber-subtle)',
  },
  'not-allowed': {
    label: 'Dual citizenship not permitted',
    colour: 'oklch(45% 0.18 25)',
    bg: 'oklch(97% 0.02 25)',
  },
  unknown: {
    label: 'Dual citizenship status — confirm with embassy',
    colour: 'var(--text-muted)',
    bg: 'var(--surface)',
  },
};
