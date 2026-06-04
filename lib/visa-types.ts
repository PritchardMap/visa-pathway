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
  steps?: string[];
}

export interface EligibilityCriterion {
  id: string;
  title: string;
  description: string;
  tip: string;
}

export interface FeeItem {
  item: string;
  amount: string;
  notes: string;
}

export interface VisaApplicationForm {
  id: string;
  title: string;
  purpose: string;
  downloadUrl?: string;
  notes?: string;
}

export interface PathwaySummary {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  tagline: string;
  legalBasis: string;
  processingTime: string;
  validity: string;
  icon: string;
  color: 'amber' | 'green' | 'blue' | 'purple' | 'teal' | 'rose';
}

export interface VisaGuideData extends PathwaySummary {
  summaryDescription: string;
  eligibility: EligibilityCriterion[];
  documents: RequiredDocument[];
  phases: Phase[];
  fees: FeeItem[];
  forms?: VisaApplicationForm[];
  applyHref?: string;
  alertMessage?: string;
  sourceNote: string;
}
