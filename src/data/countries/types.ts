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
  | 'government'           // Auswärtiges Amt, UK Home Office, IRCC, US Dept of State, etc.
  | 'embassy'              // German Embassy Islamabad, British High Commission Islamabad, etc.
  | 'visa_centre'          // VFS Global Pakistan, TLScontact, Gerry's, etc.
  | 'portal'               // VIDEX, uni-assist, UCAS, Campus France, Universitaly, EMGS, etc.
  | 'scholarship'          // DAAD, Chevening, Fulbright, Commonwealth, etc.
  | 'university'           // TUM, Oxford, Toronto, etc.
  | 'immigration_authority'// Official immigration departments
  | string;

export interface OfficialSource {
  title: string;
  url: string;
  publisher: string;
  publisherType: SourcePublisherType;
  accessDate?: string;
  [key: string]: any;
}

export interface VerifiedField<T> {
  value: T;
  sources: OfficialSource[];
  lastVerified: string; // ISO format "YYYY-MM-DD"
  note?: string;
  needsVerification?: boolean;
  [key: string]: any;
}

// ----------------------------------------------------------------------------
// Home Country / Pakistan Localization
// ----------------------------------------------------------------------------

export interface EmbassyLocation {
  city: string;
  jurisdiction: string;
  centreType: 'Embassy' | 'Consulate General' | 'VFS Global' | 'TLScontact' | 'BLS' | 'Gerrys' | string;
  address: string;
  bookingPortalUrl?: string;
  bookingUrl?: string;
  appointmentWaitEstimate?: string;
  averageWaitDays?: string;
  appointmentFeePKR?: number;
  centreName?: string;
  servicesOffered?: string[];
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface AttestationAuthority {
  authority: 'IBCC' | 'HEC' | 'MOFA' | 'Apostille' | string;
  title: string;
  applicableQualifications: string[];
  procedureSummary: string;
  officialPortal: string;
  estimatedFeePKR: number;
  processingTimeDays: string;
  sources: OfficialSource[];
  lastVerified: string;
  [key: string]: any;
}

export interface HomeCountryConfig {
  countryCode: 'PK' | string;
  countryName: string;
  localCurrencyCode?: 'PKR' | string;
  localCurrencySymbol?: string;
  currencyCode?: string;
  currencySymbol?: string;
  exchangeRateToDestCurrency?: number; // e.g. 1 EUR = 303.5 PKR
  exchangeRateToDestinationCurrency?: number;
  exchangeRateDate: string;
  vacProviderName?: string;
  embassyCentres?: EmbassyLocation[];
  attestationRules?: AttestationAuthority[];
  studentCommunityHubs?: Array<{
    name: string;
    platform: 'Facebook' | 'WhatsApp' | 'Discord' | 'Student Association' | 'Website' | string;
    url: string;
    verified: boolean;
    [key: string]: any;
  }>;
  [key: string]: any;
}

// ----------------------------------------------------------------------------
// 17 Core Content Sections
// ----------------------------------------------------------------------------

export interface QuickFacts {
  capital: string;
  currency: { code: string; symbol: string; name: string; [key: string]: any };
  officialLanguages: string[];
  mainIntakes?: string[];
  intakes?: Array<{ name: string; months: string; notes?: string; [key: string]: any }> | string[];
  avgTuitionPerYear: {
    minDomesticCurrency?: number;
    maxDomesticCurrency?: number;
    minLocal?: number;
    maxLocal?: number;
    currencyCode?: string;
    approxPkrMin?: number;
    approxPkrMax?: number;
    exchangeRateDate?: string;
    textSummary?: string;
    sources: OfficialSource[];
    lastVerified: string;
    [key: string]: any;
  };
  monthlyLivingCost: {
    amountDomesticCurrency?: number;
    amountLocal?: number;
    approxPKR?: number;
    approxPkr?: number;
    currencyCode?: string;
    textSummary?: string;
    sources: OfficialSource[];
    lastVerified: string;
    [key: string]: any;
  };
  postStudyWorkDuration: string;
  partTimeWorkHoursTerm?: string;
  partTimeWorkHours?: string;
  visaProcessingTimeAverage?: string;
  visaProcessingTime?: string;
  [key: string]: any;
}

export interface VisaTypeItem {
  id?: string;
  officialName?: string;
  category?: 'student' | 'language_prep' | 'job_seeker' | 'dependent' | 'visitor' | string;
  subCategory?: string;
  purpose?: string;
  eligibility?: string[];
  eligibilitySummary?: string;
  feeDomesticCurrency?: number;
  feePKR?: number;
  feeLocal?: number;
  feeCurrency?: string;
  approxFeePkr?: number;
  fee?: {
    amountLocal: number;
    currencyCode: string;
    approxPkr: number;
    description: string;
    [key: string]: any;
  } | number;
  financialRequirement?: {
    amountLocal: number;
    currencyCode: string;
    approxPkr: number;
    description: string;
    [key: string]: any;
  };
  validity?: string;
  processingTime?: string;
  workPermitted?: boolean;
  workRights?: string;
  workDetails?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
  [key: string]: any;
}

export interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
  portalName?: string;
  portalUrl?: string;
  pakistanSpecificNotes?: string;
  actionRequired?: string;
  sources?: OfficialSource[];
  [key: string]: any;
}

export interface DocumentChecklistItem {
  id?: string;
  title?: string;
  documentName?: string;
  item?: string;
  category?: 'academic' | 'financial' | 'identification' | 'visa_forms' | 'insurance' | string;
  requiredOriginals?: boolean;
  attestationRequired?: 'HEC' | 'IBCC' | 'MOFA' | 'German Consular Notary' | 'None' | string;
  copiesNeeded?: number;
  detail?: string;
  description?: string;
  mandatory?: boolean;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface ApplicationProcedure {
  portalOverview?: string;
  overview?: string;
  officialOnlinePortals?: Array<{
    name: string;
    url: string;
    description: string;
    [key: string]: any;
  }>;
  steps?: ApplicationStep[];
  pakistanAppointmentGuide?: {
    vacOrEmbassy?: string;
    bookingProcedure?: string;
    biometricsDetails?: string;
    interviewPreparationTips?: string[];
    [key: string]: any;
  };
  vacLocationsInHomeCountry?: Array<{
    city: string;
    centreName: string;
    address: string;
    servicesOffered?: string[];
    jurisdiction?: string;
    bookingUrl?: string;
    averageWaitDays?: string;
    [key: string]: any;
  }>;
  pakistanCentres?: Array<{
    city: string;
    centreName: string;
    address: string;
    jurisdiction?: string;
    bookingUrl?: string;
    averageWaitDays?: string;
    [key: string]: any;
  }>;
  interviewGuidelines?: {
    isMandatory?: boolean;
    description?: string;
    tips?: string[];
    [key: string]: any;
  };
  documentChecklist?: DocumentChecklistItem[];
  checklist?: DocumentChecklistItem[];
  [key: string]: any;
}

export interface FinancialRequirements {
  proofOfFundsType?: 'Blocked Account' | 'GIC' | 'Bank Statement' | 'I-20 Sponsor' | 'EMGS Escrow' | string;
  officialMinimumAmount?: {
    amount: number;
    currency: string;
    approxPKR: number;
    period: string;
    [key: string]: any;
  };
  livingCostRequirementPerYear?: number;
  currencyCode?: string;
  approxLivingCostPkr?: number;
  exchangeRateDate?: string;
  proofOfFundsOptions?: Array<{
    methodName: string;
    details: string;
    isPreferred?: boolean;
    [key: string]: any;
  }>;
  tuition?: {
    undergraduatePerYear?: string;
    postgraduatePerYear?: string;
    branchCampusPerYear?: string;
    notes?: string;
    [key: string]: any;
  };
  livingCosts?: {
    monthlyEstimateLocal?: number;
    monthlyEstimatePkr?: number;
    breakdown?: Array<{
      item: string;
      amountLocal: number;
      amountPkr: number;
      description?: string;
      [key: string]: any;
    }>;
    [key: string]: any;
  };
  proofOfFunds?: {
    method: string;
    minimumRequiredLocal?: number;
    minimumRequiredPkr?: number;
    holdingPeriod?: string;
    acceptableSponsors?: string[];
    explanation?: string;
    sources?: OfficialSource[];
    lastVerified?: string;
    [key: string]: any;
  };
  mandatoryFees?: Array<{
    name: string;
    amountLocal: number;
    amountPkr: number;
    notes?: string;
    [key: string]: any;
  }>;
  holdingPeriodDays?: number;
  bankStatementHoldingPeriodDays?: number;
  approvedProvidersOrBanks?: string[];
  healthInsuranceDetails?: {
    type?: string;
    costPerMonthOrYear?: string;
    providers?: string[];
    [key: string]: any;
  };
  visaFeeDetails?: {
    embassyFee?: number;
    embassyFeeCurrency?: string;
    vacServiceFeePKR?: number;
    surcharges?: string;
    [key: string]: any;
  };
  visaApplicationFee?: {
    amount: number;
    currency: string;
    approxPkr: number;
    [key: string]: any;
  };
  otherSurcharges?: Array<{
    name: string;
    amount: number;
    currency: string;
    approxPkr: number;
    mandatory?: boolean;
    notes?: string;
    [key: string]: any;
  }>;
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
  [key: string]: any;
}

export interface AcademicEquivalenceLevel {
  pakistaniCredential?: string;
  minimumEducation?: string;
  localEquivalence?: string;
  minimumGradeCGPA?: string;
  minimumGrades?: string;
  gapAcceptancePolicy?: string;
  studyGapAcceptable?: string;
  attestationSteps?: string[];
  pakistaniEquivalence?: string;
  [key: string]: any;
}

export interface AdmissionCriteria {
  bachelorRequirements?: AcademicEquivalenceLevel;
  masterRequirements?: AcademicEquivalenceLevel;
  phdRequirements?: AcademicEquivalenceLevel;
  undergraduate?: AcademicEquivalenceLevel;
  postgraduateMaster?: AcademicEquivalenceLevel;
  postgraduatePhD?: AcademicEquivalenceLevel;
  ectsOrCreditSystemExplanation?: string;
  evaluationPortals?: Array<{
    name: string;
    role: string;
    fee: string;
    processingWeeks: string;
    url: string;
    [key: string]: any;
  }>;
  mqaAccreditationOverview?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface LanguageRequirements {
  englishRequirements?: {
    ieltsMinScore?: { overall: number; subscore: number; typicalRequirement: string; [key: string]: any };
    toeflMinScore?: number;
    pteMinScore?: number;
    duolingoAccepted?: boolean;
    moiWaiverAllowed?: boolean;
    moiConditions?: string;
    [key: string]: any;
  };
  englishTests?: Array<{
    testName: string;
    undergraduateMinimum: string;
    postgraduateMinimum: string;
    notes?: string;
    [key: string]: any;
  }>;
  moiWaiverAllowed?: boolean;
  moiConditions?: string;
  preparatoryEnglishPrograms?: string;
  localLanguageRequirements?: {
    language: string;
    studyRequirement: string;
    dailyLifeImportance: 'Low' | 'Moderate' | 'High' | 'Essential' | string;
    partTimeJobImportance: 'Low' | 'Moderate' | 'High' | 'Essential' | string;
    postStudyPrImportance: string;
    recognizedTests: string[];
    [key: string]: any;
  };
  localLanguageNecessity?: {
    language: string;
    studyRequirement: string;
    dailyLifeImportance: string;
    dailyLifeNotes?: string;
    partTimeJobImportance: string;
    partTimeNotes?: string;
    prAndSettlementImportance: string;
    [key: string]: any;
  };
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface UniversityItem {
  id?: string;
  name?: string;
  city?: string;
  ranking?: {
    system?: 'QS World' | 'THE World' | 'ARWU' | string;
    year?: number;
    rank?: string;
    rankNumber?: number;
    [key: string]: any;
  };
  tuitionType?: 'Tuition-Free (Admin Fee Only)' | 'Public Nominal' | 'State Fee' | 'Private' | string;
  type?: string;
  estimatedAnnualTuition?: string;
  tuitionRangePerYear?: string;
  internationalStudentPercentage?: string;
  internationalStudentShare?: string;
  strongPrograms?: string[];
  officialWebsite?: string;
  websiteUrl?: string;
  notes?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface ScholarshipItem {
  id?: string;
  name?: string;
  awardingBody?: string;
  provider?: string;
  coverage?: 'Full Tuition + Monthly Stipend' | 'Partial Tuition' | 'Living Allowance Only' | string;
  coverageType?: string;
  coverageDetails?: string;
  stipendAmount?: string;
  eligibilityCriteria?: string[];
  eligibility?: string[] | string;
  pakistanDeadlines?: string;
  applicationPeriod?: string;
  officialLink?: string;
  websiteUrl?: string;
  notes?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface WorkRights {
  termTimeHoursPerWeek?: string;
  termTimeHours?: string;
  vacationTimeHoursPerWeek?: string;
  holidayHours?: string;
  statutoryWorkRules?: string;
  statutoryBasis?: string;
  statutoryMinimumWage?: string;
  minimumWageLocal?: string;
  minimumWagePkr?: string;
  averagePartTimeEarningsMonthly?: string;
  taxExemptionLimits?: string;
  freelancingAllowed?: boolean;
  freelanceAndRemoteWork?: string;
  allowedSectors?: string[];
  prohibitedJobs?: string[];
  procedureToWork?: string;
  averageStudentWageLocal?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface VisaRefusalPoint {
  reasonTitle?: string;
  title?: string;
  category?: string;
  frequency?: string;
  statutoryClause?: string;
  explanation?: string;
  description?: string;
  preventativeMeasures?: string[];
  prevention?: string;
  remedyProcess?: 'Administrative Appeal (Remonstration)' | 'Judicial Review' | 'Fresh Application' | string;
  remedy?: string;
  remedyTimeline?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface PostStudyImmigration {
  postStudyVisaName?: string;
  postStudyWorkVisa?: {
    officialName: string;
    duration: string;
    eligibility: string[];
    applicationSteps?: string;
    [key: string]: any;
  };
  durationMonths?: number;
  eligibilityRequirements?: string[];
  transitionToWorkPermit?: {
    workPermitName: string;
    salaryThreshold: string;
    [key: string]: any;
  };
  prPermanentResidencyRoute?: {
    visaName: string;
    qualificationTimeMonths: string;
    languageRequirement: string;
    [key: string]: any;
  };
  prPathway?: {
    name: string;
    timeline: string;
    requirements: string[];
    notes?: string;
    [key: string]: any;
  };
  deRantauNomadPass?: {
    name: string;
    duration: string;
    details: string;
    [key: string]: any;
  };
  jobSeekerVisaDuration?: string;
  citizenshipTimelineYears?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface DependentRules {
  spousalVisaPermittedDuringStudy?: boolean;
  allowedDuringStudy?: boolean;
  canBringSpouse?: boolean;
  dependentPassName?: string;
  eligibleStudents?: string;
  eligibleDependents?: string[];
  workRightsForSpouse?: string;
  conditions?: string[];
  spousalWorkRights?: string;
  childDependentRules?: string;
  financialSponsorshipRequirementExtraMonthly?: string;
  financialRequirement?: string;
  requiredDocuments?: string[];
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
  [key: string]: any;
}

export interface PolicyTimelineItem {
  effectiveDate?: string;
  date?: string;
  headline?: string;
  summary?: string;
  impact?: string;
  impactOnStudents?: string;
  officialAnnouncementUrl?: string;
  officialSourceUrl?: string;
  publisher?: string;
  lastVerified?: string;
  [key: string]: any;
}

export interface StudentLivingInfo {
  avgAccommodationCostMonthly?: string;
  accommodation?: {
    overview?: string;
    monthlyCostLocal?: string;
    searchPortals?: string[];
    tips?: string;
    [key: string]: any;
  };
  accommodationTypes?: any[];
  housingSearchPortals?: string[];
  healthCareSystemSummary?: string;
  halalFoodAndDining?: {
    status: string;
    description: string;
    [key: string]: any;
  };
  safety?: {
    index: string;
    description: string;
    [key: string]: any;
  };
  safetyIndex?: string;
  climate?: {
    description: string;
    [key: string]: any;
  };
  climateOverview?: string;
  halalFoodAvailability?: 'Abundant' | 'Moderate' | 'Limited' | string;
  pakistaniCommunityPresence?: string;
  pakistaniCommunity?: {
    description: string;
    [key: string]: any;
  };
  simAndBanking?: {
    simProviders: string[];
    bankingInstitutions: string[];
    tips?: string;
    [key: string]: any;
  };
  simAndBankingRecommended?: {
    simProviders: string[];
    digitalBanks: string[];
    [key: string]: any;
  };
  transportation?: {
    overview?: string;
    perks?: string;
    [key: string]: any;
  };
  transportationStudentPerks?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

export interface ArrivalChecklistTask {
  dayWindow?: 'Week 1' | 'Week 2' | 'Month 1' | 'Month 2' | string;
  timing?: string;
  stepNumber?: number;
  title?: string;
  officialTerm?: string;
  tasks?: string[];
  criticalWarning?: string;
  requiredDocuments?: string[];
  consequenceOfDelay?: string;
  officialPortalOrGuide?: string;
  [key: string]: any;
}

export interface StudentFAQItem {
  question?: string;
  answer?: string;
  category?: 'admissions' | 'visa' | 'finances' | 'jobs' | 'settlement' | string;
  sources?: OfficialSource[];
  lastVerified?: string;
  [key: string]: any;
}

// ----------------------------------------------------------------------------
// Master Country Guide Interface
// ----------------------------------------------------------------------------

export interface CountryGuideData {
  slug: TargetCountrySlug;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  heroTagline?: string;
  tagline?: string;
  oneLineSummary?: string;
  metaDescription?: string;
  lastUpdatedDate?: string;
  lastVerified?: string;
  heroDisclaimer?: string;
  officialPortalUrl?: string;

  tags?: {
    noTuitionFees: boolean;
    postStudyWorkYears: number;
    englishTaughtWideAvailability: boolean;
    schengenOrEu: boolean;
    highPrPathway: boolean;
    partTimeJobAvailability?: 'High' | 'Medium' | 'Low' | string;
    [key: string]: any;
  };

  defaultHomeCountry?: HomeCountryConfig;
  quickFacts: QuickFacts;
  visaTypes: VisaTypeItem[];
  applicationGuide?: ApplicationProcedure;
  howToApply?: ApplicationProcedure;
  financialRequirements?: FinancialRequirements;
  money?: FinancialRequirements;
  admissionCriteria?: AdmissionCriteria;
  languageRequirements?: LanguageRequirements;
  topUniversities?: UniversityItem[];
  scholarships?: ScholarshipItem[];
  workRights?: WorkRights;
  refusalReasons?: VisaRefusalPoint[];
  rejectionReasons?: VisaRefusalPoint[];
  postStudyImmigration?: PostStudyImmigration;
  afterGraduation?: PostStudyImmigration;
  dependentRules?: DependentRules;
  bringingFamily?: DependentRules;
  recentPolicyTimeline?: PolicyTimelineItem[];
  recentChanges?: PolicyTimelineItem[];
  studentLiving?: StudentLivingInfo;
  livingThere?: StudentLivingInfo;
  arrivalChecklist?: ArrivalChecklistTask[];
  afterArrivalChecklist?: ArrivalChecklistTask[];
  faqs?: StudentFAQItem[];
  allOfficialSources: OfficialSource[];

  pakistanContext?: HomeCountryConfig;
  [key: string]: any;
}
