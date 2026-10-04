// ============================================================================
// Types for Study Destinations Country Guide
// Comprehensive typed data model covering 17 core sections per destination
// with strict official sourcing and Pakistan-specific localization.
// ============================================================================

export type TargetCountrySlug = 
  | 'germany' 
  | 'uk' 
  | 'canada' 
  | 'usa' 
  | 'australia' 
  | 'china' 
  | 'italy' 
  | 'france' 
  | 'malaysia';

export type SourcePublisherType = 
  | 'government'    // Auswärtiges Amt, UK Home Office, IRCC, US Dept of State, etc.
  | 'embassy'       // German Embassy Islamabad, British High Commission Islamabad, etc.
  | 'visa_centre'   // VFS Global Pakistan, TLScontact, Gerry's, etc.
  | 'portal'        // VIDEX, uni-assist, UCAS, Campus France, Universitaly, EMGS, etc.
  | 'scholarship'   // DAAD, Chevening, Fulbright, Commonwealth, etc.
  | 'university';   // TUM, Oxford, Toronto, etc.

export interface OfficialSource {
  title: string;
  url: string;
  publisher: string;
  publisherType: SourcePublisherType;
  accessDate?: string;
}

export interface VerifiedField<T> {
  value: T;
  sources: OfficialSource[];
  lastVerified: string; // ISO format "YYYY-MM-DD"
  note?: string;
  needsVerification?: boolean;
}

// ----------------------------------------------------------------------------
// Home Country / Pakistan Localization
// ----------------------------------------------------------------------------

export interface EmbassyLocation {
  city: string;
  jurisdiction: string;
  centreType: 'Embassy' | 'Consulate General' | 'VFS Global' | 'TLScontact' | 'BLS' | 'Gerrys';
  address: string;
  bookingPortalUrl: string;
  appointmentWaitEstimate: string;
  appointmentFeePKR?: number;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface AttestationAuthority {
  authority: 'IBCC' | 'HEC' | 'MOFA' | 'Apostille';
  title: string;
  applicableQualifications: string[];
  procedureSummary: string;
  officialPortal: string;
  estimatedFeePKR: number;
  processingTimeDays: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface HomeCountryConfig {
  countryCode: 'PK' | string;
  countryName: string;
  localCurrencyCode: 'PKR' | string;
  localCurrencySymbol: string;
  exchangeRateToDestCurrency: number; // e.g. 1 EUR = 303.5 PKR
  exchangeRateDate: string;
  vacProviderName: string;
  embassyCentres: EmbassyLocation[];
  attestationRules: AttestationAuthority[];
  studentCommunityHubs: Array<{
    name: string;
    platform: 'Facebook' | 'WhatsApp' | 'Discord' | 'Student Association' | 'Website';
    url: string;
    verified: boolean;
  }>;
}

// ----------------------------------------------------------------------------
// 17 Core Content Sections
// ----------------------------------------------------------------------------

export interface QuickFacts {
  capital: string;
  currency: { code: string; symbol: string; name: string };
  officialLanguages: string[];
  mainIntakes: string[];
  avgTuitionPerYear: {
    minDomesticCurrency: number;
    maxDomesticCurrency: number;
    textSummary: string;
    sources: OfficialSource[];
    lastVerified: string;
  };
  monthlyLivingCost: {
    amountDomesticCurrency: number;
    approxPKR: number;
    textSummary: string;
    sources: OfficialSource[];
    lastVerified: string;
  };
  postStudyWorkDuration: string;
  partTimeWorkHoursTerm: string;
  visaProcessingTimeAverage: string;
}

export interface VisaTypeItem {
  id: string;
  officialName: string;
  category: 'student' | 'language_prep' | 'job_seeker' | 'dependent' | 'visitor';
  purpose: string;
  eligibility: string[];
  feeDomesticCurrency: number;
  feePKR: number;
  validity: string;
  processingTime: string;
  workPermitted: boolean;
  workDetails?: string;
  sources: OfficialSource[];
  lastVerified: string;
  note?: string;
}

export interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
  portalName: string;
  portalUrl: string;
  pakistanSpecificNotes?: string;
  actionRequired: string;
  sources: OfficialSource[];
}

export interface DocumentChecklistItem {
  id: string;
  title: string;
  category: 'academic' | 'financial' | 'identification' | 'visa_forms' | 'insurance';
  requiredOriginals: boolean;
  attestationRequired?: 'HEC' | 'IBCC' | 'MOFA' | 'German Consular Notary' | 'None';
  copiesNeeded: number;
  detail: string;
  sources: OfficialSource[];
}

export interface ApplicationProcedure {
  portalOverview: string;
  steps: ApplicationStep[];
  pakistanAppointmentGuide: {
    vacOrEmbassy: string;
    bookingProcedure: string;
    biometricsDetails: string;
    interviewPreparationTips: string[];
  };
  documentChecklist: DocumentChecklistItem[];
}

export interface FinancialRequirements {
  proofOfFundsType: 'Blocked Account' | 'GIC' | 'Bank Statement' | 'I-20 Sponsor' | 'EMGS Escrow';
  officialMinimumAmount: {
    amount: number;
    currency: string;
    approxPKR: number;
    period: string;
  };
  holdingPeriodDays?: number;
  approvedProvidersOrBanks: string[];
  healthInsuranceDetails: {
    type: string;
    costPerMonthOrYear: string;
    providers: string[];
  };
  visaFeeDetails: {
    embassyFee: number;
    embassyFeeCurrency: string;
    vacServiceFeePKR?: number;
    surcharges?: string;
  };
  sources: OfficialSource[];
  lastVerified: string;
  note?: string;
}

export interface AcademicEquivalenceLevel {
  pakistaniCredential: string;
  localEquivalence: string;
  minimumGradeCGPA: string;
  gapAcceptancePolicy: string;
  attestationSteps: string[];
}

export interface AdmissionCriteria {
  bachelorRequirements: AcademicEquivalenceLevel;
  masterRequirements: AcademicEquivalenceLevel;
  phdRequirements: AcademicEquivalenceLevel;
  ectsOrCreditSystemExplanation: string;
  evaluationPortals: Array<{
    name: string;
    role: string;
    fee: string;
    processingWeeks: string;
    url: string;
  }>;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface LanguageRequirements {
  englishRequirements: {
    ieltsMinScore: { overall: number; subscore: number; typicalRequirement: string };
    toeflMinScore?: number;
    pteMinScore?: number;
    duolingoAccepted: boolean;
    moiWaiverAllowed: boolean;
    moiConditions?: string;
  };
  localLanguageRequirements: {
    language: string;
    studyRequirement: string;
    dailyLifeImportance: 'Low' | 'Moderate' | 'High' | 'Essential';
    partTimeJobImportance: 'Low' | 'Moderate' | 'High' | 'Essential';
    postStudyPrImportance: string;
    recognizedTests: string[];
  };
  sources: OfficialSource[];
  lastVerified: string;
}

export interface UniversityItem {
  id: string;
  name: string;
  city: string;
  ranking: {
    system: 'QS World' | 'THE World' | 'ARWU';
    year: number;
    rank: string;
  };
  tuitionType: 'Tuition-Free (Admin Fee Only)' | 'Public Nominal' | 'State Fee' | 'Private';
  estimatedAnnualTuition: string;
  internationalStudentPercentage: string;
  strongPrograms: string[];
  officialWebsite: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface ScholarshipItem {
  name: string;
  awardingBody: string;
  coverage: 'Full Tuition + Monthly Stipend' | 'Partial Tuition' | 'Living Allowance Only';
  stipendAmount?: string;
  eligibilityCriteria: string[];
  pakistanDeadlines: string;
  officialLink: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface WorkRights {
  termTimeHoursPerWeek: string;
  vacationTimeHoursPerWeek: string;
  statutoryWorkRules: string;
  statutoryMinimumWage: string;
  averagePartTimeEarningsMonthly: string;
  taxExemptionLimits: string;
  freelancingAllowed: boolean;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface VisaRefusalPoint {
  reasonTitle: string;
  statutoryClause: string;
  explanation: string;
  preventativeMeasures: string[];
  remedyProcess: 'Administrative Appeal (Remonstration)' | 'Judicial Review' | 'Fresh Application' | string;
  remedyTimeline: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface PostStudyImmigration {
  postStudyVisaName: string;
  durationMonths: number;
  eligibilityRequirements: string[];
  transitionToWorkPermit: {
    workPermitName: string;
    salaryThreshold: string;
  };
  prPermanentResidencyRoute: {
    visaName: string;
    qualificationTimeMonths: string;
    languageRequirement: string;
  };
  citizenshipTimelineYears: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface DependentRules {
  spousalVisaPermittedDuringStudy: boolean;
  conditions: string[];
  spousalWorkRights: string;
  childDependentRules: string;
  financialSponsorshipRequirementExtraMonthly: string;
  sources: OfficialSource[];
  lastVerified: string;
  note?: string;
}

export interface PolicyTimelineItem {
  effectiveDate: string;
  headline: string;
  summary: string;
  impactOnStudents: string;
  officialAnnouncementUrl: string;
  publisher: string;
  lastVerified: string;
}

export interface StudentLivingInfo {
  avgAccommodationCostMonthly: string;
  housingSearchPortals: string[];
  healthCareSystemSummary: string;
  safetyIndex: string;
  climateOverview: string;
  halalFoodAvailability: 'Abundant' | 'Moderate' | 'Limited';
  pakistaniCommunityPresence: string;
  simAndBankingRecommended: {
    simProviders: string[];
    digitalBanks: string[];
  };
  transportationStudentPerks: string;
  sources: OfficialSource[];
  lastVerified: string;
}

export interface ArrivalChecklistTask {
  dayWindow: 'Week 1' | 'Week 2' | 'Month 1' | 'Month 2';
  title: string;
  officialTerm: string;
  requiredDocuments: string[];
  consequenceOfDelay: string;
  officialPortalOrGuide: string;
}

export interface StudentFAQItem {
  question: string;
  answer: string;
  category: 'admissions' | 'visa' | 'finances' | 'jobs' | 'settlement';
  sources: OfficialSource[];
  lastVerified: string;
}

// ----------------------------------------------------------------------------
// Master Country Guide Interface
// ----------------------------------------------------------------------------

export interface CountryGuideData {
  slug: TargetCountrySlug;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  heroTagline: string;
  oneLineSummary: string;
  lastUpdatedDate: string;
  officialPortalUrl: string;

  tags: {
    noTuitionFees: boolean;
    postStudyWorkYears: number;
    englishTaughtWideAvailability: boolean;
    schengenOrEu: boolean;
    highPrPathway: boolean;
    partTimeJobAvailability: 'High' | 'Medium' | 'Low';
  };

  quickFacts: QuickFacts;
  visaTypes: VisaTypeItem[];
  applicationGuide: ApplicationProcedure;
  financialRequirements: FinancialRequirements;
  admissionCriteria: AdmissionCriteria;
  languageRequirements: LanguageRequirements;
  topUniversities: UniversityItem[];
  scholarships: ScholarshipItem[];
  workRights: WorkRights;
  refusalReasons: VisaRefusalPoint[];
  postStudyImmigration: PostStudyImmigration;
  dependentRules: DependentRules;
  recentPolicyTimeline: PolicyTimelineItem[];
  studentLiving: StudentLivingInfo;
  arrivalChecklist: ArrivalChecklistTask[];
  faqs: StudentFAQItem[];
  allOfficialSources: OfficialSource[];

  pakistanContext: HomeCountryConfig;
}
