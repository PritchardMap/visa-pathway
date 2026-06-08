import type { VisaTypeId } from './visa-types';

export interface PathwayMeta {
  id: VisaTypeId;
  shortName: string;
  icon: string;
  guideHref: string;
  checklistHref: string;
  tagline: string;
  relatedIds: VisaTypeId[];
}

export const ALL_PATHWAYS: PathwayMeta[] = [
  {
    id: 'critical-skills',
    shortName: 'Critical Skills',
    icon: '🔬',
    guideHref: '/critical-skills/guide',
    checklistHref: '/critical-skills/checklist',
    tagline: 'For qualified professionals in high-demand occupations',
    relatedIds: ['permanent-residence', 'general-work'],
  },
  {
    id: 'general-work',
    shortName: 'General Work',
    icon: '💼',
    guideHref: '/general-work/guide',
    checklistHref: '/general-work/checklist',
    tagline: 'Employment-tied permit requiring a confirmed SA job offer',
    relatedIds: ['critical-skills', 'permanent-residence'],
  },
  {
    id: 'business-visa',
    shortName: 'Business Visa',
    icon: '🏢',
    guideHref: '/business-visa/guide',
    checklistHref: '/business-visa/checklist',
    tagline: 'For entrepreneurs establishing or investing in a SA business',
    relatedIds: ['permanent-residence', 'critical-skills'],
  },
  {
    id: 'study-visa',
    shortName: 'Study Visa',
    icon: '🎓',
    guideHref: '/study-visa/guide',
    checklistHref: '/study-visa/checklist',
    tagline: 'For students enrolled at accredited SA institutions',
    relatedIds: ['general-work', 'critical-skills'],
  },
  {
    id: 'permanent-residence',
    shortName: 'Perm. Residence',
    icon: '🏡',
    guideHref: '/permanent-residence/guide',
    checklistHref: '/permanent-residence/checklist',
    tagline: 'Make South Africa your permanent home — no expiry, no renewals',
    relatedIds: ['citizenship', 'critical-skills'],
  },
  {
    id: 'citizenship',
    shortName: 'Citizenship',
    icon: '🇿🇦',
    guideHref: '/guide',
    checklistHref: '/checklist',
    tagline: 'Become a SA citizen after 5+ years of permanent residence',
    relatedIds: ['permanent-residence', 'general-work'],
  },
];

export function getRelatedPathways(currentId: VisaTypeId): PathwayMeta[] {
  const current = ALL_PATHWAYS.find((p) => p.id === currentId);
  if (!current) return [];
  return current.relatedIds
    .map((id) => ALL_PATHWAYS.find((p) => p.id === id))
    .filter((p): p is PathwayMeta => p !== undefined);
}
