// ============================================================================
// Types for Study Destinations Country Guide
// Comprehensive strictly-typed data model covering all 17 core sections
// with official sourcing and Pakistan-specific localization.
// STRICT: ZERO index signatures ([key: string]: any).
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
  }>;
}

// ----------------------------------------------------------------------------
// 17 Core Content Sections
// ----------------------------------------------------------------------------

export interface QuickFacts {
  capital: string;
  currency: { code: string; symbol: string; name: string };
  officialLanguages: string[];
  mainIntakes?: string[];
  intakes?: Array<{ name: string; months: string; notes?: string }> | string[];
  avgTuitionPerYear?: {
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
    note?: string;
  };
  avgAnnualTuition?: {
    amountDomesticCurrency?: number;
    currencyCode?: string;
    approxPKR?: number;
    description?: string;
    sources: OfficialSource[];
    lastVerified: string;
  };
  monthlyLivingCost?: {
    amountDomesticCurrency?: number;
    amountLocal?: number;
    minLocal?: number;
    maxLocal?: number;
    approxPKR?: number;
    approxPkr?: number;
    approxPkrMin?: number;
    approxPkrMax?: number;
    currencyCode?: string;
    exchangeRateDate?: string;
    textSummary?: string;
    sources: OfficialSource[];
    lastVerified: string;
    note?: string;
  };
  postStudyWorkDuration: string;
  postStudyWorkPermit?: {
    name: string;
    duration: string;
    conditions: string;
  };
  partTimeWorkHoursTerm?: string;
  partTimeWorkHoursHolidays?: string;
  partTimeWorkHours?: string;
  partTimeWorkRights?: {
    hoursPerWeek: number;
    regulations: string;
  };
  visaProcessingTimeAverage?: string;
  visaProcessingTimeWeeks?: string;
  visaProcessingTime?: string;
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
  } | number;
  financialRequirement?: {
    amountLocal: number;
    currencyCode: string;
    approxPkr: number;
    description: string;
  };
  validity?: string;
  processingTime?: string;
  workPermitted?: boolean;
  workRights?: string;
  workDetails?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
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
}

export interface ApplicationProcedure {
  portalOverview?: string;
  overview?: string;
  officialOnlinePortals?: Array<{
    name: string;
    url: string;
    description: string;
  }>;
  steps?: ApplicationStep[];
  pakistanAppointmentGuide?: {
    vacOrEmbassy?: string;
    bookingProcedure?: string;
    biometricsDetails?: string;
    interviewPreparationTips?: string[];
  };
  vacLocationsInHomeCountry?: Array<{
    city: string;
    centreName: string;
    address: string;
    servicesOffered?: string[];
    jurisdiction?: string;
    bookingUrl?: string;
    averageWaitDays?: string;
  }>;
  pakistanCentres?: Array<{
    city: string;
    centreName: string;
    address: string;
    jurisdiction?: string;
    bookingUrl?: string;
    averageWaitDays?: string;
  }>;
  interviewGuidelines?: {
    isMandatory?: boolean;
    description?: string;
    tips?: string[];
  };
  documentChecklist?: DocumentChecklistItem[];
  checklist?: DocumentChecklistItem[];
}

export interface FinancialRequirements {
  proofOfFundsType?: 'Blocked Account' | 'GIC' | 'Bank Statement' | 'I-20 Sponsor' | 'EMGS Escrow' | string;
  officialMinimumAmount?: {
    amount: number;
    currency: string;
    approxPKR: number;
    period: string;
  };
  livingCostRequirementPerYear?: number;
  currencyCode?: string;
  approxLivingCostPkr?: number;
  exchangeRateDate?: string;
  proofOfFundsOptions?: Array<{
    methodName: string;
    details: string;
    isPreferred?: boolean;
  }>;
  tuition?: {
    undergraduatePerYear?: string;
    postgraduatePerYear?: string;
    branchCampusPerYear?: string;
    notes?: string;
  };
  livingCosts?: {
    monthlyEstimateLocal?: number;
    monthlyEstimatePkr?: number;
    breakdown?: Array<{
      item: string;
      amountLocal: number;
      amountPkr: number;
      description?: string;
    }>;
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
  };
  mandatoryFees?: Array<{
    name: string;
    amountLocal: number;
    amountPkr: number;
    notes?: string;
  }>;
  holdingPeriodDays?: number;
  bankStatementHoldingPeriodDays?: number;
  approvedProvidersOrBanks?: string[];
  healthInsuranceDetails?: {
    type?: string;
    costPerMonthOrYear?: string;
    providers?: string[];
  };
  visaFeeDetails?: {
    embassyFee?: number;
    embassyFeeCurrency?: string;
    vacServiceFeePKR?: number;
    surcharges?: string;
  };
  visaApplicationFee?: {
    amount: number;
    currency: string;
    approxPkr: number;
  };
  otherSurcharges?: Array<{
    name: string;
    amount: number;
    currency: string;
    approxPkr: number;
    mandatory?: boolean;
    notes?: string;
  }>;
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
  sourceOfFundsRules?: string;
}

export interface AcademicEquivalenceLevel {
  pakistaniCredential?: string;
  minimumEducation?: string;
  localEquivalence?: string;
  academicRequirements?: string;
  minimumGradeCGPA?: string;
  minimumGrades?: string;
  gapAcceptancePolicy?: string;
  studyGapAcceptable?: string;
  attestationSteps?: string[];
  pakistaniEquivalence?: string;
}

export interface AdmissionCriteria {
  bachelorRequirements?: AcademicEquivalenceLevel;
  masterRequirements?: AcademicEquivalenceLevel;
  phdRequirements?: AcademicEquivalenceLevel;
  undergraduate?: AcademicEquivalenceLevel;
  postgraduateMaster?: AcademicEquivalenceLevel;
  postgraduatePhD?: AcademicEquivalenceLevel;
  undergraduateRequirements?: string;
  postgraduateRequirements?: string;
  doctoralRequirements?: string;
  pakistaniEquivalenceGuide?: {
    matriculation?: string;
    intermediateFSc?: string;
    fourteenYearBachelors?: string;
    sixteenYearBachelors?: string;
    studyGapsAcceptability?: string;
  };
  attestationBodies?: Array<{
    bodyName?: string;
    authority?: string;
    mandate?: string;
    procedureSummary?: string;
    link?: string;
    officialPortal?: string;
  }>;
  applicationPortals?: Array<{
    portalName?: string;
    name?: string;
    url?: string;
    scope?: string;
    role?: string;
    fee?: string;
  }>;
  ectsOrCreditSystemExplanation?: string;
  evaluationPortals?: Array<{
    name: string;
    role: string;
    fee: string;
    processingWeeks: string;
    url: string;
  }>;
  deadlinesSummary?: string;
  mqaAccreditationOverview?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface LanguageRequirements {
  englishRequirements?: {
    ieltsMinScore?: { overall: number; subscore: number; typicalRequirement: string };
    toeflMinScore?: number;
    pteMinScore?: number;
    duolingoAccepted?: boolean;
    moiWaiverAllowed?: boolean;
    moiConditions?: string;
  };
  englishTests?: Array<{
    testName: string;
    undergraduateMinimum: string;
    postgraduateMinimum: string;
    notes?: string;
  }>;
  acceptedEnglishTests?: Array<{
    testName: string;
    minScoreOverall: string;
    subScoreRequirements: string;
  }>;
  moiWaiverAllowed?: boolean;
  moiConditions?: string;
  moiWaiverAcceptability?: string;
  preparatoryEnglishPrograms?: string;
  localLanguageImportance?: {
    study?: string;
    dailyLife?: string;
    partTimeJobs?: string;
    postStudyPR?: string;
    recommendedCertifications?: string[];
  };
  localLanguageRequirements?: {
    language: string;
    studyRequirement: string;
    dailyLifeImportance: 'Low' | 'Moderate' | 'High' | 'Essential' | string;
    partTimeJobImportance: 'Low' | 'Moderate' | 'High' | 'Essential' | string;
    postStudyPrImportance: string;
    recognizedTests: string[];
  };
  localLanguageNecessity?: {
    language: string;
    studyRequirement: string;
    dailyLifeImportance: string;
    dailyLifeNotes?: string;
    partTimeJobImportance: string;
    partTimeNotes?: string;
    prAndSettlementImportance: string;
  };
  localLanguageTests?: Array<string | { name: string; description: string }>;
  sources?: OfficialSource[];
  lastVerified?: string;
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
  };
  tuitionType?: 'Tuition-Free (Admin Fee Only)' | 'Public Nominal' | 'State Fee' | 'Private' | string;
  type?: string;
  estimatedAnnualTuition?: string;
  tuitionRangePerYear?: string;
  avgTuitionPerYearLocal?: number;
  currency?: string;
  approxTuitionPkr?: number;
  internationalStudentsPercentage?: string;
  internationalStudentPercentage?: string;
  internationalStudentShare?: string;
  strongPrograms?: string[];
  officialWebsite?: string;
  websiteUrl?: string;
  notes?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface ScholarshipItem {
  id?: string;
  name?: string;
  awardingBody?: string;
  grantingBody?: string;
  provider?: string;
  coverage?: 'Full Tuition + Monthly Stipend' | 'Partial Tuition' | 'Living Allowance Only' | string;
  coverageType?: string;
  coverageDetails?: string;
  stipendAmount?: string;
  eligibilityCriteria?: string[];
  eligibility?: string[] | string;
  pakistanDeadlines?: string;
  deadlineMonths?: string;
  applicationPeriod?: string;
  officialLink?: string;
  websiteUrl?: string;
  notes?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
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
  regulationsSummary?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface VisaRefusalPoint {
  reasonTitle?: string;
  title?: string;
  category?: string;
  refusalCategory?: string;
  frequency?: string;
  statutoryClause?: string;
  explanation?: string;
  description?: string;
  preventativeMeasures?: string[];
  howToAvoid?: string;
  prevention?: string;
  avoidanceTips?: string[];
  remedyProcess?: 'Administrative Appeal (Remonstration)' | 'Judicial Review' | 'Fresh Application' | string;
  remedy?: string;
  remedyTimeline?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface PostStudyImmigration {
  postStudyVisaName?: string;
  postStudyWorkVisa?: {
    officialName: string;
    duration: string;
    eligibility: string[];
    applicationSteps?: string;
  };
  durationMonths?: number;
  eligibilityRequirements?: string[];
  transitionToWorkPermit?: {
    workPermitName: string;
    salaryThreshold: string;
  };
  prPermanentResidencyRoute?: {
    visaName: string;
    qualificationTimeMonths: string;
    languageRequirement: string;
  };
  prPathway?: {
    name: string;
    timeline: string;
    requirements: string[];
    notes?: string;
  };
  deRantauNomadPass?: {
    name: string;
    duration: string;
    details: string;
  };
  jobSeekerVisaDuration?: string;
  jobSeekingPermitDuration?: string;
  workVisaOptions?: string;
  workPermitType?: string;
  prPathwaysSummary?: string;
  permanentResidencyTimeline?: string;
  prPathwayDuration?: string;
  citizenshipTimeline?: string;
  citizenshipTimelineYears?: string;
  citizenshipPathwayDuration?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface DependentRules {
  spousalVisaPermittedDuringStudy?: boolean;
  allowedDuringStudy?: boolean;
  canBringSpouse?: boolean;
  canBringChildren?: boolean;
  dependentPassName?: string;
  eligibleStudents?: string;
  eligibleDependents?: string[];
  workRightsForSpouse?: string;
  conditions?: string[];
  eligibilityCriteria?: string[];
  spousalWorkRights?: string;
  spouseWorkRights?: string;
  childDependentRules?: string;
  childrenSchooling?: string;
  financialSponsorshipRequirementExtraMonthly?: string;
  financialRequirementsPerDependent?: string;
  financialRequirement?: string;
  additionalFundsRequired?: string;
  requiredDocuments?: string[];
  sources?: OfficialSource[];
  lastVerified?: string;
  note?: string;
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
}

export interface StudentLivingInfo {
  avgAccommodationCostMonthly?: string;
  averageMonthlyRent?: string;
  accommodation?: {
    overview?: string;
    monthlyCostLocal?: string;
    searchPortals?: string[];
    tips?: string;
  };
  accommodationTypes?: Array<{
    type: string;
    avgMonthlyCostLocal?: number;
    currencyCode?: string;
    approxCostPkr?: number;
    description: string;
  }>;
  housingSearchPortals?: string[];
  healthCareSystemSummary?: string;
  halalFoodAndDining?: {
    status: string;
    description: string;
  };
  groceriesAndHalalFood?: string;
  safety?: {
    index: string;
    description: string;
  };
  safetyIndex?: string;
  safetyAndCrime?: string;
  climate?: {
    description: string;
  };
  climateOverview?: string;
  climateAndWeather?: string;
  halalFoodAvailability?: 'Abundant' | 'Moderate' | 'Limited' | string;
  pakistaniCommunityPresence?: string;
  pakistaniCommunity?: {
    description: string;
  };
  simAndBanking?: {
    simProviders: string[];
    bankingInstitutions: string[];
    tips?: string;
  };
  simAndBankingRecommended?: {
    simProviders: string[];
    digitalBanks: string[];
  };
  transportation?: {
    overview?: string;
    perks?: string;
  };
  transportationStudentPerks?: string;
  sources?: OfficialSource[];
  lastVerified?: string;
}

export interface ArrivalChecklistTask {
  dayWindow?: 'Week 1' | 'Week 2' | 'Month 1' | 'Month 2' | string;
  timing?: string;
  stepNumber?: number;
  title?: string;
  officialTerm?: string;
  description?: string;
  timeline?: string;
  mandatory?: boolean;
  tasks?: string[];
  criticalWarning?: string;
  requiredDocuments?: string[];
  consequenceOfDelay?: string;
  officialPortalOrGuide?: string;
}

export interface StudentFAQItem {
  question?: string;
  answer?: string;
  category?: 'admissions' | 'visa' | 'finances' | 'jobs' | 'settlement' | string;
  sources?: OfficialSource[];
  lastVerified?: string;
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
  appealProcessSummary?: string;
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
}
