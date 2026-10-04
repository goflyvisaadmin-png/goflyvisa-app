import { OfficialSource, TargetCountrySlug } from './types';

// ============================================================================
// Canonical View-Model for Study Destination Guides
// Strongly typed, normalized representation of all 17 core sections.
// Eliminates schema disparities, removes fabricated defaults, and guarantees
// consistent, accurate data rendering for all 9 study destinations.
// ============================================================================

export interface CanonicalQuickFacts {
  capital: string;
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
  officialLanguages: string[];
  intakesDisplay: string;
  intakesSubtext: string;
  tuitionDisplay: string;
  tuitionSubtext: string;
  livingCostDisplay: string;
  livingCostSubtext: string;
  postStudyDuration: string;
  partTimeHours: string;
  visaProcessingTime: string;
}

export interface CanonicalVisaType {
  officialName: string;
  subCategory: string;
  purpose: string;
  eligibilitySummary: string;
  feeLocal: number | null;
  feeCurrency: string;
  approxFeePkr: number | null;
  validity: string;
  processingTime: string;
  sources: OfficialSource[];
}

export interface CanonicalOnlinePortal {
  name: string;
  url: string;
  description: string;
}

export interface CanonicalAppStep {
  stepNumber: number;
  title: string;
  description: string;
  portalName?: string;
  portalUrl?: string;
  actionRequired?: string;
}

export interface CanonicalDocChecklistItem {
  title: string;
  category?: string;
  mandatory: boolean;
  detail?: string;
  attestationRequired?: string;
}

export interface CanonicalPakistanCentre {
  city: string;
  centreName: string;
  address: string;
  jurisdiction?: string;
  bookingUrl?: string;
  averageWaitDays?: string;
}

export interface CanonicalInterviewGuidelines {
  isMandatory: boolean;
  description: string;
  tips: string[];
}

export interface CanonicalApplicationGuide {
  portalOverview: string;
  officialOnlinePortals: CanonicalOnlinePortal[];
  steps: CanonicalAppStep[];
  documentChecklist: CanonicalDocChecklistItem[];
  pakistanCentres: CanonicalPakistanCentre[];
  interviewGuidelines: CanonicalInterviewGuidelines;
}

export interface CanonicalProofMethod {
  name: string;
  details: string;
  isPreferred?: boolean;
}

export interface CanonicalSurcharge {
  name: string;
  amount: number;
  currency: string;
  approxPkr: number | null;
  mandatory: boolean;
  notes?: string;
}

export interface CanonicalHealthInsurance {
  costPerMonthOrYear?: string;
  providers?: string[];
  description?: string;
}

export interface CanonicalFinancialRequirements {
  statutoryLivingFunds: {
    amount: number | null;
    currency: string;
    approxPkr: number | null;
    period: string;
    rules?: string;
  };
  proofMethods: CanonicalProofMethod[];
  holdingPeriodDays: number | null;
  visaFee: {
    amount: number | null;
    currency: string;
    approxPkr: number | null;
  };
  otherSurcharges: CanonicalSurcharge[];
  healthInsurance: CanonicalHealthInsurance;
  note?: string;
}

export interface CanonicalAcademicRequirement {
  text: string;
  attestationSteps?: string[];
}

export interface CanonicalAttestationBody {
  name: string;
  mandate: string;
  link?: string;
}

export interface CanonicalEvalPortal {
  name: string;
  url?: string;
  role?: string;
  fee?: string;
}

export interface CanonicalAdmissionCriteria {
  undergraduate: CanonicalAcademicRequirement;
  postgraduate: CanonicalAcademicRequirement;
  doctoral?: CanonicalAcademicRequirement;
  studyGapsAcceptability?: string;
  attestationBodies: CanonicalAttestationBody[];
  portals: CanonicalEvalPortal[];
}

export interface CanonicalEnglishTest {
  name: string;
  score: string;
  details?: string;
}

export interface CanonicalLocalLanguage {
  language: string;
  studyRequirement: string;
  dailyLifeImportance: string;
  partTimeJobImportance: string;
  postStudyPrImportance: string;
  recognizedTests: string[];
}

export interface CanonicalLanguageRequirements {
  englishTests: CanonicalEnglishTest[];
  moiPolicy: {
    allowed: boolean;
    conditions: string;
  };
  localLanguage: CanonicalLocalLanguage;
}

export interface CanonicalUniversity {
  name: string;
  city: string;
  ranking: {
    system: string;
    year: number;
    rank: string;
  };
  strongPrograms: string[];
  tuitionLocal: number | null;
  tuitionText: string;
  currency: string;
  approxTuitionPkr: number | null;
  internationalStudentsPercentage: string;
  officialWebsite: string;
}

export interface CanonicalScholarship {
  name: string;
  awardingBody: string;
  coverage: string;
  stipendAmount?: string;
  eligibilityCriteria: string[];
  deadlineForPakistanis: string;
  officialLink?: string;
}

export interface CanonicalWorkRights {
  inTermLimit: string;
  vacationLimit: string;
  statutoryMinimumWage: string;
  statutoryWorkRules: string;
  averagePartTimeEarningsMonthly?: string;
  taxExemptionLimits?: string;
}

export interface CanonicalRefusalReason {
  title: string;
  explanation: string;
  preventativeMeasures: string[];
  remedyProcess?: string;
  remedyTimeline?: string;
}

export interface CanonicalPostStudyImmigration {
  jobSeekerDuration: string;
  workPermitRoute: string;
  permanentResidencyTimeline: string;
  prPathwaysSummary: string;
  citizenshipTimeline?: string;
}

export interface CanonicalDependentRules {
  canBringSpouse: boolean;
  canBringChildren: boolean;
  conditions: string[];
  spouseWorkRights: string;
  childrenSchooling: string;
  financialSurcharge: string;
  note?: string;
}

export interface CanonicalPolicyTimelineItem {
  effectiveDate: string;
  headline: string;
  summary: string;
  impactOnStudents: string;
  officialAnnouncementUrl?: string;
  publisher?: string;
}

export interface CanonicalStudentLiving {
  avgAccommodationCostMonthly: string;
  halalFoodAvailability: string;
  pakistaniCommunityPresence: string;
  housingSearchPortals: string[];
  digitalBanks: string[];
  simProviders: string[];
  transportationStudentPerks?: string;
}

export interface CanonicalArrivalChecklistTask {
  dayWindow: string;
  title: string;
  officialTerm?: string;
  requiredDocuments: string[];
  consequenceOfDelay?: string;
}

export interface CanonicalFAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface CanonicalHomeCountry {
  countryName: string;
  currencyCode: string;
  currencySymbol: string;
  exchangeRateToDestinationCurrency: number | null;
  exchangeRateDate: string;
}

export interface CanonicalCountryGuide {
  slug: TargetCountrySlug;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  heroTagline: string;
  metaDescription: string;
  heroDisclaimer: string;
  lastUpdatedDate: string;
  officialPortalUrl: string;
  tags?: {
    noTuitionFees: boolean;
    postStudyWorkYears: number;
    englishTaughtWideAvailability: boolean;
    schengenOrEu: boolean;
    highPrPathway: boolean;
  };
  homeCountry: CanonicalHomeCountry;
  quickFacts: CanonicalQuickFacts;
  visaTypes: CanonicalVisaType[];
  applicationGuide: CanonicalApplicationGuide;
  financialRequirements: CanonicalFinancialRequirements;
  admissionCriteria: CanonicalAdmissionCriteria;
  languageRequirements: CanonicalLanguageRequirements;
  topUniversities: CanonicalUniversity[];
  scholarships: CanonicalScholarship[];
  workRights: CanonicalWorkRights;
  refusalReasons: CanonicalRefusalReason[];
  appealProcessSummary?: string;
  postStudyImmigration: CanonicalPostStudyImmigration;
  dependentRules: CanonicalDependentRules;
  recentPolicyTimeline: CanonicalPolicyTimelineItem[];
  studentLiving: CanonicalStudentLiving;
  arrivalChecklist: CanonicalArrivalChecklistTask[];
  faqs: CanonicalFAQ[];
  allOfficialSources: OfficialSource[];
}
