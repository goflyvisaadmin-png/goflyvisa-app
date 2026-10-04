import { CountryGuideData } from './types';

export const UK_GUIDE_DATA: CountryGuideData = {
  slug: 'uk',
  countryName: 'United Kingdom',
  countryCode: 'GB',
  flagEmoji: '🇬🇧',
  heroTagline: '1-Year Master Degrees, Russell Group Prestige & 2-Year Graduate Route Work Permit',
  oneLineSummary: 'Accelerated 1-year Master programs, 2-year post-study work visa (Graduate Route), 20 hours/week term-time work rights, and world-renowned university heritage.',
  lastUpdatedDate: '2026-10-04',
  officialPortalUrl: 'https://www.gov.uk/student-visa',

  tags: {
    noTuitionFees: false,
    postStudyWorkYears: 2,
    englishTaughtWideAvailability: true,
    schengenOrEu: false,
    highPrPathway: false,
    partTimeJobAvailability: 'High',
  },

  // --------------------------------------------------------------------------
  // 1. Quick Facts Bar
  // --------------------------------------------------------------------------
  quickFacts: {
    capital: 'London',
    currency: {
      code: 'GBP',
      symbol: '£',
      name: 'British Pound Sterling',
    },
    officialLanguages: ['English'],
    mainIntakes: [
      'Autumn Intake (September/October - Primary, all courses available)',
      'Spring Intake (January/February - Secondary, limited STEM/Business courses)',
    ],
    avgTuitionPerYear: {
      minDomesticCurrency: 13000,
      maxDomesticCurrency: 32000,
      textSummary: '£13,000–£24,000/year for classroom-based Bachelor and Master programs; £20,000–£32,000/year for laboratory STEM programs; clinical/MBA programs reach £35,000–£50,000+.',
      sources: [
        {
          title: 'GOV.UK Student Visa Guidance',
          url: 'https://www.gov.uk/student-visa',
          publisher: 'UK Visas and Immigration (UKVI)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    monthlyLivingCost: {
      amountDomesticCurrency: 1171,
      approxPKR: 424500,
      textSummary: 'UKVI Statutory Maintenance (effective 11 Nov 2025): £1,171/month outside London (total £10,539 for 9 months, ≈ 3,820,400 PKR); £1,529/month in London (total £13,761 for 9 months, ≈ 4,988,360 PKR). Must be held for 28 consecutive days.',
      sources: [
        {
          title: 'GOV.UK Student Visa Financial Evidence',
          url: 'https://www.gov.uk/student-visa/money',
          publisher: 'Home Office / UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    postStudyWorkDuration: '2 Years for applications before 1 Jan 2027 (reduced to 18 Months for Bachelor/Master applications submitted on or after 1 Jan 2027; PhD remains 3 Years).',
    partTimeWorkHoursTerm: '20 hours per week during term time (degree-level studies RQF 6+); full-time during official vacation periods.',
    visaProcessingTimeAverage: 'Standard service: 3 weeks (15 working days) from biometric appointment at VFS Global Pakistan. Priority service (5 working days) and Super Priority (24 hours) available for an extra fee.',
  },

  // --------------------------------------------------------------------------
  // 2. Visa Types
  // --------------------------------------------------------------------------
  visaTypes: [
    {
      id: 'uk-visa-student-route',
      officialName: 'Student Visa (Student Route - Appendix Student / ST)',
      category: 'student',
      purpose: 'Enrolment on full-time degree-level courses (RQF Level 6 Bachelor, Level 7 Master, Level 8 PhD) with a licensed Student Sponsor holding a Confirmation of Acceptance for Studies (CAS).',
      eligibility: [
        'Valid Confirmation of Acceptance for Studies (CAS) issued by a licensed UK higher education sponsor',
        'Proof of financial maintenance (£1,171/mo outside London or £1,529/mo inside London for 9 months) + outstanding first-year tuition',
        'Strict 28-day bank statement holding period ending within 31 days of application date',
        'Academic Progression rule (RQF level must be higher than previous qualification)',
        'Approved Tuberculosis (TB) medical test certificate from IOM/AMC Pakistan',
      ],
      feeDomesticCurrency: 490,
      feePKR: 177625,
      validity: 'Course duration + 4 months extra post-completion grace period (for courses of 12+ months)',
      processingTime: '3 weeks (15 working days)',
      workPermitted: true,
      workDetails: '20 hours/week during active academic terms; full-time during published vacation periods. Self-employment, freelancing, and gig-economy contract work (Uber, Deliveroo) strictly barred.',
      sources: [
        {
          title: 'GOV.UK Student Visa Fee & Eligibility',
          url: 'https://www.gov.uk/student-visa',
          publisher: 'UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'uk-visa-graduate-route',
      officialName: 'Graduate Visa (Graduate Route - Appendix Graduate)',
      category: 'job_seeker',
      purpose: 'Post-study unsponsored work visa enabling university graduates to work or look for work in the UK at any skill level.',
      eligibility: [
        'Successfully completed an eligible UK undergraduate, Master’s, or PhD degree at a Higher Education Provider with a track record of compliance',
        'Must hold a valid, unexpired Student visa when applying inside the UK',
        'University sponsor must have formally reported successful completion to the Home Office',
      ],
      feeDomesticCurrency: 822,
      feePKR: 297975,
      validity: '2 years for Bachelor/Master; 3 years for PhD/Doctoral graduates (non-extendable, but directly switches to Skilled Worker visa).',
      processingTime: '8 weeks inside the UK',
      workPermitted: true,
      workDetails: '100% unrestricted employment permitted across all industries and skill levels (except professional sportsperson). Self-employment is permitted.',
      sources: [
        {
          title: 'GOV.UK Graduate Visa Overview',
          url: 'https://www.gov.uk/graduate-visa',
          publisher: 'UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'uk-visa-short-term-study',
      officialName: 'Short-Term Study Visa (English Language Courses)',
      category: 'language_prep',
      purpose: 'Study English language courses lasting between 6 and 11 months at an accredited institution.',
      eligibility: [
        'Accepted on an English language course lasting 11 months or less',
        'Proof of funds to support yourself and pay for accommodation without working',
        'Intention to leave the UK at the end of the course',
      ],
      feeDomesticCurrency: 200,
      feePKR: 72500,
      validity: 'Up to 11 months (strictly non-extendable, cannot switch to Student visa inside the UK)',
      processingTime: '3 weeks',
      workPermitted: false,
      workDetails: 'Work of any kind (paid or unpaid) is strictly prohibited.',
      sources: [
        {
          title: 'GOV.UK Short-Term Study Visa',
          url: 'https://www.gov.uk/study-visit-visa',
          publisher: 'UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'uk-visa-dependent',
      officialName: 'Student Dependent Visa (Spouse & Children)',
      category: 'dependent',
      purpose: 'Allows spouse/civil partner and minor children to accompany an international student.',
      eligibility: [
        'RESTRICTED RULE (effective Jan 1, 2024): Student MUST be enrolled in a postgraduate research course (PhD, doctoral, or research-based Master) OR be receiving a government scholarship of 6+ months.',
        'Taught Master students (1-year MSc/MA/MBA) are STRICTLY INELIGIBLE to bring dependents.',
        'Proof of maintenance funds: £680/month outside London or £845/month in London per dependent for up to 9 months.',
      ],
      feeDomesticCurrency: 490,
      feePKR: 177625,
      validity: 'Tied to principal student visa duration',
      processingTime: '3 weeks',
      workPermitted: true,
      workDetails: 'Spouse receives unrestricted full work authorization (except sportsperson / doctor in training).',
      sources: [
        {
          title: 'GOV.UK Student Dependants Guidance',
          url: 'https://www.gov.uk/student-visa/family-members',
          publisher: 'UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Since January 1, 2024, international students starting 1-year postgraduate taught master degrees can no longer bring spouses or children.',
    },
  ],

  // --------------------------------------------------------------------------
  // 3. How to Apply (Step by Step)
  // --------------------------------------------------------------------------
  applicationGuide: {
    portalOverview: 'Pakistani applicants apply online through the official GOV.UK portal (Access UK / visa-apply.service.gov.uk). After paying the visa fee (£490) and mandatory Immigration Health Surcharge (IHS, £776/year), applicants book an in-person biometric appointment at a VFS Global UK Visa Application Centre (Islamabad, Lahore, Karachi, or Mirpur). An approved Tuberculosis (TB) certificate from IOM/AMC Pakistan is mandatory.',
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Unconditional Offer & CAS from University',
        description: 'Meet all academic and English language conditions to receive an unconditional offer. Pay the required tuition deposit (typically £2,000–£5,000). The university issues a unique electronic Confirmation of Acceptance for Studies (CAS) reference number.',
        portalName: 'University Admissions Portal / UCAS',
        portalUrl: 'https://www.ucas.com/',
        pakistanSpecificNotes: 'Pakistani 4-year BS degrees must be verified with complete DMC transcripts. Some universities conduct an internal pre-CAS credibility interview.',
        actionRequired: 'Verify that course dates, fees paid, tuition balance, and English assessment method on the CAS are 100% accurate.',
        sources: [
          {
            title: 'UCAS International Student Application Portal',
            url: 'https://www.ucas.com/',
            publisher: 'UCAS',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Complete 28-Day Bank Holding Period',
        description: 'Deposit remaining first-year tuition plus 9 months of maintenance funds (£10,539 outside London; £13,761 in London) into a recognized commercial bank account. Funds must remain untouched above the threshold for at least 28 consecutive days.',
        portalName: 'GOV.UK Financial Requirements Guide',
        portalUrl: 'https://www.gov.uk/student-visa/money',
        pakistanSpecificNotes: 'Must be in the applicant’s name or parent’s/legal guardian’s name. If using a parent’s account, provide original birth certificate, FRC (Family Registration Certificate from NADRA), and a signed sponsorship consent letter.',
        actionRequired: 'Download official bank statement with bank branch stamp, dated within 31 days prior to online application submission.',
        sources: [
          {
            title: 'UKVI Financial Evidence Guidance',
            url: 'https://www.gov.uk/student-visa/money',
            publisher: 'Home Office',
            publisherType: 'government',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Complete Mandatory Tuberculosis (TB) Screening',
        description: 'Undergo a chest X-ray screening at an official Home Office-approved clinic operated by the International Organization for Migration (IOM) or Aziz Medical Centre (AMC) in Islamabad, Lahore, Karachi, or Mirpur.',
        portalName: 'IOM Online Medical Appointment System (OMAS)',
        portalUrl: 'https://mymedical.iom.int/apps/omas/',
        pakistanSpecificNotes: 'Cost is approx. 20,000–25,000 PKR. Book 3-4 weeks in advance of intended visa submission. The TB clearance certificate is valid for 6 months.',
        actionRequired: 'Collect the signed and stamped IOM TB clearance certificate to upload with the visa application.',
        sources: [
          {
            title: 'GOV.UK TB Testing in Pakistan Approved Clinics',
            url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan',
            publisher: 'Home Office',
            publisherType: 'government',
          },
        ],
      },
      {
        stepNumber: 4,
        title: 'Submit Online Application & Pay Fees (Visa + IHS)',
        description: 'Complete the online visa application on Access UK. Pay the Student Visa fee (£490) and the mandatory Immigration Health Surcharge (£776 per year of study) via international credit/debit card.',
        portalName: 'GOV.UK Student Visa Application Portal',
        portalUrl: 'https://www.gov.uk/student-visa/apply',
        pakistanSpecificNotes: 'Ensure your Pakistani card has international e-commerce limits raised to cover £490 + £776 (approx. 460,000 PKR total for a 1-year Master).',
        actionRequired: 'Record your unique 16-digit Global Web Form (GWF) reference number and download the completed application summary.',
        sources: [
          {
            title: 'Apply for a Student Visa - GOV.UK',
            url: 'https://www.gov.uk/student-visa/apply',
            publisher: 'UKVI',
            publisherType: 'government',
          },
        ],
      },
      {
        stepNumber: 5,
        title: 'Book VFS Global Biometrics Appointment & Upload Dossier',
        description: 'Book an appointment slot at VFS Global Pakistan (Islamabad, Lahore, Karachi, or Mirpur). Self-upload all scanned supporting documents to the VFS portal or purchase Document Scanning Assistance at the centre.',
        portalName: 'VFS Global UK Visa Booking Portal',
        portalUrl: 'https://www.vfsglobal.co.uk/pk/en',
        pakistanSpecificNotes: 'VFS User-Pay centres (e.g. Mirpur or premium lounges) charge optional service fees. Standard appointment at main centres (Islamabad/Lahore/Karachi) is included in base fee.',
        actionRequired: 'Attend biometrics (fingerprints & facial photo) and submit your original physical passport.',
        sources: [
          {
            title: 'VFS Global Pakistan Official Portal',
            url: 'https://www.vfsglobal.co.uk/pk/en',
            publisher: 'VFS Global',
            publisherType: 'visa_centre',
          },
        ],
      },
      {
        stepNumber: 6,
        title: 'UKVI Credibility Assessment & Visa Decision',
        description: 'UKVI assesses your application and may schedule a video credibility interview. Once approved, you receive a decision letter and your passport with a 90-day travel vignette (or digital eVisa via UKVI account).',
        portalName: 'GOV.UK View and Prove Your Immigration Status (eVisa)',
        portalUrl: 'https://www.gov.uk/view-prove-immigration-status',
        pakistanSpecificNotes: 'The UK has transitioned to digital eVisas (replacing physical Biometric Residence Permits - BRPs). Link your passport to your UKVI account.',
        actionRequired: 'Verify personal details, validity dates, and work rights conditions on your vignette or digital share code.',
        sources: [
          {
            title: 'GOV.UK eVisa Information',
            url: 'https://www.gov.uk/view-prove-immigration-status',
            publisher: 'Home Office',
            publisherType: 'government',
          },
        ],
      },
    ],
    pakistanAppointmentGuide: {
      vacOrEmbassy: 'VFS Global UK Visa Application Centres in Islamabad, Lahore, Karachi, and Mirpur.',
      bookingProcedure: 'After submitting the online application on GOV.UK, applicants are redirected to the VFS Global booking platform to select a centre, date, and appointment category.',
      biometricsDetails: 'Digital scan of all 10 fingerprints and digital facial photograph.',
      interviewPreparationTips: [
        'UKVI Credibility Interviews: You may receive an email inviting you to a video interview conducted by UKVI caseworkers in Sheffield.',
        'Know your course syllabus inside out: be ready to name 3–4 specific modules, assessment methods (coursework vs exam), and dissertation topics.',
        'Why this university over others? Explain why you selected this institution compared to competing UK or Pakistani programs.',
        'Career progression in Pakistan: State realistic job titles, target multinational employers (e.g. Unilever, Jazz, HBL, Systems Ltd), and realistic salary multipliers.',
        'Financial awareness: Know the exact tuition fee, deposit paid, remaining balance, and monthly living budget down to the exact pound.',
      ],
    },
    documentChecklist: [
      {
        id: 'uk-doc-cas',
        title: 'Confirmation of Acceptance for Studies (CAS) Statement',
        category: 'academic',
        requiredOriginals: false,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'Official electronic CAS email from university showing unique CAS number, course title, start/end dates, tuition fees paid, and English verification.',
        sources: [{ title: 'UKVI CAS Guidance', url: 'https://www.gov.uk/student-visa', publisher: 'Home Office', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-passport',
        title: 'Original Valid Passport',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'Valid for full duration of intended stay with at least one blank page on both sides.',
        sources: [{ title: 'Passport Rules', url: 'https://www.gov.uk/student-visa', publisher: 'UKVI', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-bank',
        title: '28-Day Bank Statement & Bank Letter',
        category: 'financial',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'Official stamped statement showing funds (£10,539 or £13,761 + unpaid tuition) held for 28 consecutive days. Dated within 31 days of visa submission.',
        sources: [{ title: 'Money Guidance', url: 'https://www.gov.uk/student-visa/money', publisher: 'UKVI', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-tb',
        title: 'IOM / AMC Tuberculosis (TB) Clearance Certificate',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'Mandatory certificate issued by Home Office-approved clinic in Pakistan (IOM Islamabad, Lahore, Karachi, Mirpur or AMC). Valid for 6 months.',
        sources: [{ title: 'TB Clinics Pakistan', url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan', publisher: 'Home Office', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-degrees',
        title: 'Academic Certificates & Complete Transcripts Listed on CAS',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'HEC',
        copiesNeeded: 1,
        detail: 'Bachelor degree and DMC transcripts exactly as referenced in the "Documents used to obtain offer" section of the CAS. HEC attestation recommended.',
        sources: [{ title: 'Academic Evidence', url: 'https://www.gov.uk/student-visa', publisher: 'UKVI', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-english',
        title: 'English Language Test Certificate (IELTS / PTE / LanguageCert)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'IELTS Academic, IELTS for UKVI, or PTE Academic score report matching CAS specifications (unless university assessed English internally as HEI).',
        sources: [{ title: 'SELT Guidance', url: 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt', publisher: 'Home Office', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-parental',
        title: 'Parental Consent Letter & Birth Certificate / FRC (If using Parent’s Bank Account)',
        category: 'financial',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'NADRA Birth Certificate or Family Registration Certificate (FRC), plus signed affidavit of financial support from parent confirming full permission to use funds.',
        sources: [{ title: 'Parental Sponsorship Rules', url: 'https://www.gov.uk/student-visa/money', publisher: 'UKVI', publisherType: 'government' }],
      },
      {
        id: 'uk-doc-atas',
        title: 'ATAS Certificate (Academic Technology Approval Scheme - If Applicable)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 1,
        detail: 'Required only for sensitive STEM/defence-related postgraduate subjects (e.g. nuclear, aerospace, advanced materials). Applied free via Foreign Office.',
        sources: [{ title: 'ATAS Guidance', url: 'https://www.gov.uk/guidance/academic-technology-approval-scheme', publisher: 'FCDO', publisherType: 'government' }],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. Money & Proof of Funds
  // --------------------------------------------------------------------------
  financialRequirements: {
    proofOfFundsType: 'Bank Statement',
    officialMinimumAmount: {
      amount: 10539,
      currency: 'GBP',
      approxPKR: 3820400,
      period: '£1,171 per month for 9 months = £10,539 (Outside London, ≈ 3,820,400 PKR); £1,529 per month for 9 months = £13,761 (Inside London, ≈ 4,988,360 PKR). Plus any unpaid tuition balance.',
    },
    holdingPeriodDays: 28,
    approvedProvidersOrBanks: [
      'Recognized Commercial Banks in Pakistan (Habib Bank Limited - HBL, United Bank Limited - UBL, Meezan Bank, Standard Chartered, MCB Bank, Allied Bank, Bank Alfalah)',
      'Bank must allow electronic verification (UKVI regularly calls or emails bank branches to verify statement authenticity)',
      'Account must be cash savings/current account. Fixed deposits (Term Deposit Receipts - TDR) are acceptable ONLY if funds are liquid and withdrawable at any time without restriction.',
    ],
    healthInsuranceDetails: {
      type: 'Immigration Health Surcharge (IHS) - Grants full access to UK National Health Service (NHS)',
      costPerMonthOrYear: '£776 per year of study for students and student dependants (mandatory fee paid online during application).',
      providers: ['National Health Service (NHS) England, Scotland, Wales, and Northern Ireland'],
    },
    visaFeeDetails: {
      embassyFee: 490,
      embassyFeeCurrency: 'GBP',
      vacServiceFeePKR: 0,
      surcharges: 'Mandatory Immigration Health Surcharge (IHS): £776/year (approx. 281,300 PKR/year). For a 1-year Master program (which includes 12 months study + 4 months wrap-up = 16 months total), UKVI calculates IHS for 1.5 years = £1,164 (approx. 421,950 PKR).',
    },
    sources: [
      {
        title: 'GOV.UK Student Visa Financial Requirements',
        url: 'https://www.gov.uk/student-visa/money',
        publisher: 'UKVI',
        publisherType: 'government',
      },
      {
        title: 'GOV.UK Pay for Healthcare (IHS)',
        url: 'https://www.gov.uk/healthcare-immigration-application',
        publisher: 'Home Office',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'The 28-day holding rule is the single most common cause of refusal for Pakistani applicants. Never allow the closing balance to drop below the required amount even by a single rupee for even one day during the 28-day window.',
  },

  // --------------------------------------------------------------------------
  // 5. Admission Criteria & Academic Equivalence
  // --------------------------------------------------------------------------
  admissionCriteria: {
    bachelorRequirements: {
      pakistaniCredential: '12 Years Schooling: Intermediate (FSc / FA / ICS) or Cambridge A-Levels.',
      localEquivalence: 'Pakistani FSc (12 years) is evaluated at RQF Level 3 but does not generally qualify for direct Bachelor entry into top UK universities without an International Foundation Year (typically 9-12 months). Cambridge A-Levels (grades A*AA to BBB) qualify for direct 3-year Bachelor admission.',
      minimumGradeCGPA: 'Minimum 65–70% in FSc for International Foundation Year entry; A-Levels: typically minimum 3 subjects with grades BBB–ABB.',
      gapAcceptancePolicy: 'Gaps of up to 1-2 years acceptable if supported by preparation for language tests or relevant work experience.',
      attestationSteps: [
        'BISE Board verification of Matric and Intermediate certificates.',
        'IBCC (Inter Board Coordination Commission) attestation.',
      ],
    },
    masterRequirements: {
      pakistaniCredential: '16 Years Education: 4-Year Bachelor of Science (BS/BSc Hons), BE/B.Tech (4 years), or 2-Year Bachelor + 2-Year Master (Old 14+2 system).',
      localEquivalence: 'A 4-year Pakistani Bachelor’s degree from an HEC-recognized university with a CGPA of 2.8 to 3.2/4.0 is evaluated as equivalent to a UK 2:1 (Upper Second-Class Honours) or 2:2 (Lower Second-Class Honours), granting direct entry to a 1-year Master (RQF Level 7). Old 2-year BA/BSc degrees (14 years) require a Pre-Master’s program.',
      minimumGradeCGPA: 'Minimum CGPA 2.6–3.0/4.0 for standard universities; CGPA 3.3–3.5+ for Russell Group institutions.',
      gapAcceptancePolicy: 'Gaps of 2 to 7+ years are widely accepted by UK universities provided formal employment experience, promotion letters, or CV history are demonstrated.',
      attestationSteps: [
        'Higher Education Commission (HEC) degree and transcript attestation (e-portal verification ticket).',
      ],
    },
    phdRequirements: {
      pakistaniCredential: '18 Years Education: MS / MPhil degree with formal research thesis.',
      localEquivalence: 'Direct entry to 3 to 4-year doctoral research program (RQF Level 8). Requires a compelling Research Proposal (2,000–3,000 words) and academic supervisor agreement.',
      minimumGradeCGPA: 'Minimum CGPA 3.3/4.0 in MS/MPhil.',
      gapAcceptancePolicy: 'Gaps are not an impediment if academic research or industry technical achievements are solid.',
      attestationSteps: ['HEC attestation of MS/MPhil credentials + supervisor interview.'],
    },
    ectsOrCreditSystemExplanation: 'The UK uses the Credit Accumulation and Transfer Scheme (CATS). 1 UK credit equals 10 notional hours of learning. A standard 1-year UK Master comprises 180 CATS credits (equivalent to 90 ECTS credits). A 3-year UK Bachelor degree requires 360 CATS credits (equivalent to 180 ECTS credits).',
    evaluationPortals: [
      {
        name: 'UCAS (Universities and Colleges Admissions Service)',
        role: 'Centralized admissions service for all undergraduate (Bachelor) degree applications in the UK.',
        fee: '£28.50 for up to 5 university choices.',
        processingWeeks: 'Rolling admissions / January 31 equal-consideration deadline.',
        url: 'https://www.ucas.com/',
      },
      {
        name: 'UK ENIC (National Information Centre, formerly UK NARIC)',
        role: 'Official UK agency for the recognition and comparison of international qualifications against the UK framework.',
        fee: '£49.50 + VAT for Statement of Comparability.',
        processingWeeks: '10 to 15 working days.',
        url: 'https://www.enic.org.uk/',
      },
    ],
    sources: [
      {
        title: 'UK ENIC National Information Centre',
        url: 'https://www.enic.org.uk/',
        publisher: 'UK ENIC',
        publisherType: 'government',
      },
      {
        title: 'UCAS Application Process',
        url: 'https://www.ucas.com/',
        publisher: 'UCAS',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 6. English & Local Language Requirements
  // --------------------------------------------------------------------------
  languageRequirements: {
    englishRequirements: {
      ieltsMinScore: {
        overall: 6.5,
        subscore: 6.0,
        typicalRequirement: 'Most UK Master programs require IELTS 6.5 overall with minimum 6.0 in each sub-skill (Reading, Writing, Listening, Speaking). High-ranking universities and law/humanities courses often require 7.0 overall with no band below 6.5.',
      },
      toeflMinScore: 88,
      pteMinScore: 62,
      duolingoAccepted: false,
      moiWaiverAllowed: true,
      moiConditions: 'UK Higher Education Institutions (HEIs) with a Track Record of Compliance have the statutory authority under UKVI rules to assess English language proficiency themselves (Higher Education Provider self-assessment). Some UK universities waive external IELTS requirements for Pakistani students if their 4-year Bachelor degree was taught in English and they scored 70%+ in Intermediate/FSc English. However, taking IELTS Academic / UKVI is strongly recommended to protect against CAS refusals.',
    },
    localLanguageRequirements: {
      language: 'English',
      studyRequirement: '100% English. UKVI mandates minimum CEFR B2 level for degree-level courses (equivalent to IELTS 5.5–6.0 across all bands).',
      dailyLifeImportance: 'Essential',
      partTimeJobImportance: 'Essential',
      postStudyPrImportance: 'Essential (CEFR B1 required for Indefinite Leave to Remain / Citizenship, plus Life in the UK test).',
      recognizedTests: [
        'IELTS Academic / IELTS for UKVI (SELT)',
        'PTE Academic / PTE Academic UKVI (Pearson Test of English)',
        'TOEFL iBT (accepted directly by most universities, though not a SELT for below-degree courses)',
        'Oxford ELLT (English Language Level Test) - Accepted by many modern UK universities',
      ],
    },
    sources: [
      {
        title: 'GOV.UK Prove Your English Language Abilities (SELT)',
        url: 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt',
        publisher: 'Home Office',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 7. Top Universities
  // --------------------------------------------------------------------------
  topUniversities: [
    {
      id: 'oxford',
      name: 'University of Oxford',
      city: 'Oxford, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '3',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£33,000–£48,000/year',
      internationalStudentPercentage: '46%',
      strongPrograms: ['Philosophy, Politics & Economics (PPE)', 'Computer Science', 'Medicine', 'Law'],
      officialWebsite: 'https://www.ox.ac.uk/',
      sources: [{ title: 'University of Oxford Official Profile', url: 'https://www.ox.ac.uk/', publisher: 'University of Oxford', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'cambridge',
      name: 'University of Cambridge',
      city: 'Cambridge, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '5',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£31,000–£46,000/year',
      internationalStudentPercentage: '40%',
      strongPrograms: ['Engineering', 'Mathematics', 'Natural Sciences', 'Economics'],
      officialWebsite: 'https://www.cam.ac.uk/',
      sources: [{ title: 'University of Cambridge Official Profile', url: 'https://www.cam.ac.uk/', publisher: 'University of Cambridge', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'imperial',
      name: 'Imperial College London',
      city: 'London, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '2',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£36,000–£42,000/year',
      internationalStudentPercentage: '60%',
      strongPrograms: ['Artificial Intelligence', 'Mechanical & Aerospace Engineering', 'Biomedical Engineering', 'Data Science'],
      officialWebsite: 'https://www.imperial.ac.uk/',
      sources: [{ title: 'Imperial College London Profile', url: 'https://www.imperial.ac.uk/', publisher: 'Imperial College London', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'ucl',
      name: 'University College London (UCL)',
      city: 'London, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '9',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£26,000–£37,000/year',
      internationalStudentPercentage: '53%',
      strongPrograms: ['Architecture & Bartlett', 'Law', 'Computer Science', 'Education & Institute of Education'],
      officialWebsite: 'https://www.ucl.ac.uk/',
      sources: [{ title: 'UCL Profile', url: 'https://www.ucl.ac.uk/', publisher: 'UCL', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'edinburgh',
      name: 'University of Edinburgh',
      city: 'Edinburgh, Scotland',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '27',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£25,000–£35,000/year',
      internationalStudentPercentage: '44%',
      strongPrograms: ['Informatics / Data Science', 'Biotechnology', 'Linguistics', 'Veterinary Medicine'],
      officialWebsite: 'https://www.ed.ac.uk/',
      sources: [{ title: 'University of Edinburgh Profile', url: 'https://www.ed.ac.uk/', publisher: 'University of Edinburgh', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'manchester',
      name: 'University of Manchester',
      city: 'Manchester, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '34',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£24,000–£33,000/year',
      internationalStudentPercentage: '40%',
      strongPrograms: ['Chemical Engineering', 'Alliance Manchester Business School', 'Computer Science', 'Materials Science'],
      officialWebsite: 'https://www.manchester.ac.uk/',
      sources: [{ title: 'University of Manchester Profile', url: 'https://www.manchester.ac.uk/', publisher: 'University of Manchester', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'kcl',
      name: 'King’s College London (KCL)',
      city: 'London, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '40',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£25,000–£34,000/year',
      internationalStudentPercentage: '48%',
      strongPrograms: ['War Studies', 'Nursing & Health Sciences', 'Law & Dickson Poon', 'Digital Humanities'],
      officialWebsite: 'https://www.kcl.ac.uk/',
      sources: [{ title: 'King’s College London Profile', url: 'https://www.kcl.ac.uk/', publisher: 'KCL', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'lse',
      name: 'London School of Economics (LSE)',
      city: 'London, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '50',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£26,000–£36,000/year',
      internationalStudentPercentage: '70%',
      strongPrograms: ['Economics', 'Finance', 'International Relations', 'Social Policy'],
      officialWebsite: 'https://www.lse.ac.uk/',
      sources: [{ title: 'LSE Official Profile', url: 'https://www.lse.ac.uk/', publisher: 'LSE', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'bristol',
      name: 'University of Bristol',
      city: 'Bristol, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '54',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£22,000–£30,000/year',
      internationalStudentPercentage: '28%',
      strongPrograms: ['Aerospace Engineering', 'Robotics', 'Law', 'Life Sciences'],
      officialWebsite: 'https://www.bristol.ac.uk/',
      sources: [{ title: 'University of Bristol Profile', url: 'https://www.bristol.ac.uk/', publisher: 'University of Bristol', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'warwick',
      name: 'University of Warwick',
      city: 'Coventry, England',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '69',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '£23,000–£32,000/year',
      internationalStudentPercentage: '38%',
      strongPrograms: ['Warwick Business School (WBS)', 'Warwick Manufacturing Group (WMG)', 'Mathematics', 'Economics'],
      officialWebsite: 'https://warwick.ac.uk/',
      sources: [{ title: 'University of Warwick Profile', url: 'https://warwick.ac.uk/', publisher: 'University of Warwick', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 8. Scholarships
  // --------------------------------------------------------------------------
  scholarships: [
    {
      name: 'Chevening Scholarships (UK Government’s Global Flagship Award)',
      awardingBody: 'Foreign, Commonwealth & Development Office (FCDO)',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: 'Full university tuition + approx. £1,300–£1,600/month living stipend + economy return flights + visa costs.',
      eligibilityCriteria: [
        'Pakistani citizen holding a recognized undergraduate degree (equivalent to UK 2:1 honours)',
        'Minimum 2 years (2,800 hours) of demonstrable professional work or leadership experience',
        'Commitment to return to Pakistan for a minimum of 2 years post-study to contribute to national development',
      ],
      pakistanDeadlines: 'August to early November annually (for following year autumn entry).',
      officialLink: 'https://www.chevening.org/',
      sources: [
        {
          title: 'Chevening Official Portal',
          url: 'https://www.chevening.org/',
          publisher: 'FCDO',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Commonwealth Master’s & PhD Scholarships',
      awardingBody: 'Commonwealth Scholarship Commission (CSC UK) in partnership with HEC Pakistan',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: 'Approved airfare + full tuition fees + monthly stipend (£1,347/month or £1,652/month in London) + warm clothing allowance.',
      eligibilityCriteria: [
        'Pakistani citizen permanently resident in Pakistan',
        'Hold minimum 16 years education (4-year BS or 2-year Master) with high first-class honours',
        'Nominated through HEC Pakistan nominating portal',
      ],
      pakistanDeadlines: 'September to October annually via HEC and CSC portals.',
      officialLink: 'https://cscuk.fcdo.gov.uk/apply/masters-scholarships/',
      sources: [
        {
          title: 'Commonwealth Scholarships Portal',
          url: 'https://cscuk.fcdo.gov.uk/',
          publisher: 'CSC UK',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'British Council GREAT Scholarships Pakistan',
      awardingBody: 'British Council & Participating UK Universities',
      coverage: 'Partial Tuition',
      stipendAmount: '£10,000 tuition fee discount applied directly towards 1-year postgraduate Master course.',
      eligibilityCriteria: [
        'Passport holder of Pakistan holding an offer from a participating UK university',
        'Strong undergraduate academic record and leadership potential',
      ],
      pakistanDeadlines: 'Deadlines vary by university from March to May annually.',
      officialLink: 'https://study-uk.britishcouncil.org/scholarships-funding',
      sources: [
        {
          title: 'British Council Study UK Scholarships',
          url: 'https://study-uk.britishcouncil.org/scholarships-funding',
          publisher: 'British Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 9. Work Rights During Study
  // --------------------------------------------------------------------------
  workRights: {
    termTimeHoursPerWeek: 'Up to 20 hours per week during term time for degree-level courses (RQF Level 6+)',
    vacationTimeHoursPerWeek: 'Full-time (up to 40 hours per week) during official published university vacations',
    statutoryWorkRules: 'Students enrolled at Higher Education Institutions on full-time degree courses are authorized to work up to 20 hours per week during term time. Working as a professional entertainer, professional sportsperson, or business owner/freelancer (including gig-work delivery contracts like Deliveroo/Uber Eats as self-employed) is strictly illegal and will result in visa curtailment.',
    statutoryMinimumWage: '£11.44/hour (National Living Wage for workers 21+ as of April 2024; raised to £12.21/hour in April 2025). Workers aged 18-20 earn £8.60/hr (raised to £10.00/hr in 2025).',
    averagePartTimeEarningsMonthly: '£700 to £1,100 per month (working 15–20 hours/week), sufficient to cover food and basic living expenses.',
    taxExemptionLimits: 'Personal Tax Allowance is £12,570 per tax year (April to April). Earnings below this annual figure are 100% income-tax free.',
    freelancingAllowed: false,
    sources: [
      {
        title: 'GOV.UK Student Visa Work Conditions',
        url: 'https://www.gov.uk/student-visa',
        publisher: 'UKVI',
        publisherType: 'government',
      },
      {
        title: 'GOV.UK National Minimum Wage Rates',
        url: 'https://www.gov.uk/national-minimum-wage-rates',
        publisher: 'Low Pay Commission / HMRC',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 10. Why Visas Get Rejected & How to Avoid
  // --------------------------------------------------------------------------
  refusalReasons: [
    {
      reasonTitle: '28-Day Financial Rule Violation (Appendix Finance)',
      statutoryClause: 'Appendix Finance (FIN 2.1 & FIN 7.1) - Inadequate Funds Holding Period',
      explanation: 'The closing balance dropped below the mandated maintenance sum (£10,539 or £13,761 + remaining tuition) for even a single day during the 28-day window. Or the bank statement is dated more than 31 days before the online visa application date.',
      preventativeMeasures: [
        'Calculate funds in GBP using the exact OANDA exchange rate on the day of checking.',
        'Deposit a buffer of at least 200,000–300,000 PKR above the minimum requirement to guard against PKR currency depreciation during the 28 days.',
        'Obtain bank statements printed on the exact day of online visa submission.',
      ],
      remedyProcess: 'Fresh Application with Validated 28-Day Bank Statement',
      remedyTimeline: 'Re-apply immediately once a fresh 28-day holding cycle is completed with a new CAS.',
      sources: [
        {
          title: 'Immigration Rules Appendix Finance',
          url: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
          publisher: 'Home Office',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Credibility Interview Failure (Appendix Student ST 5.1)',
      statutoryClause: 'Appendix Student ST 5.1 - Genuine Student Requirement',
      explanation: 'The consular caseworker is not satisfied that the applicant is a genuine student. The applicant cannot explain specific module names, university location, reason for choosing this institution over others, or gave vague answers about financing and post-study career progression.',
      preventativeMeasures: [
        'Thoroughly study the course specification, core and elective modules, and credit structure.',
        'Prepare realistic post-graduation career targets in Pakistan with specific company names and domestic salary ranges.',
        'Articulate why this course represents logical career progression from your undergraduate degree.',
      ],
      remedyProcess: 'Administrative Review (AR) or Fresh Application',
      remedyTimeline: 'Submit Administrative Review within 28 days of refusal notice.',
      sources: [
        {
          title: 'Immigration Rules Appendix Student',
          url: 'https://www.gov.uk/guidance/immigration-rules/appendix-student',
          publisher: 'Home Office',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Academic Progression Violation (ST 5.2)',
      statutoryClause: 'Appendix Student ST 5.2 - Lack of Academic Progression',
      explanation: 'Applying for a course at the same or lower RQF level than previously completed studies without the university sponsor explicitly justifying why this represents genuine progression or career specialization on the CAS.',
      preventativeMeasures: [
        'Ensure the new program is at a higher RQF level (e.g. RQF Level 6 Bachelor to RQF Level 7 Master).',
        'If studying a second Master’s degree at RQF Level 7, ensure the CAS includes a detailed justification statement from the admissions department.',
      ],
      remedyProcess: 'Fresh Application with Detailed University Progression Statement',
      remedyTimeline: 'Obtain updated CAS with explicit progression justification.',
      sources: [
        {
          title: 'Academic Progression Guidance',
          url: 'https://www.gov.uk/student-visa',
          publisher: 'UKVI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Tuberculosis (TB) Testing from Non-Approved Medical Centre',
      statutoryClause: 'Paragraph A39 & Appendix T - Approved Medical Screening',
      explanation: 'Submitting a TB screening certificate from an unauthorized local hospital or laboratory in Pakistan instead of the mandatory Home Office-approved clinics (IOM or AMC).',
      preventativeMeasures: [
        'Only book appointments directly with IOM (Islamabad, Lahore, Karachi, Mirpur) or AMC.',
        'Never trust agents who offer to obtain TB certificates from alternative private labs.',
      ],
      remedyProcess: 'Fresh Application with Official IOM/AMC Certificate',
      remedyTimeline: 'Complete official IOM screening and re-apply.',
      sources: [
        {
          title: 'Tuberculosis Testing in Pakistan',
          url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan',
          publisher: 'Home Office',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 11. After Graduation (Graduate Route & PR Pathways)
  // --------------------------------------------------------------------------
  postStudyImmigration: {
    postStudyVisaName: 'Graduate Visa (Graduate Route)',
    durationMonths: 24,
    eligibilityRequirements: [
      'Successfully completed an eligible undergraduate or postgraduate Master degree at a UK Higher Education Provider with a track record of compliance',
      'Applied inside the UK before your Student visa expires',
      'University has officially notified UKVI of your successful course completion',
    ],
    transitionToWorkPermit: {
      workPermitName: 'Skilled Worker Visa (Appendix Skilled Worker)',
      salaryThreshold: 'General salary threshold was increased to £38,700/year (or going rate for code) under 2024 reforms. However, "New Entrants" (including Graduate Route holders and student switchers under 26 or recent graduates) benefit from a 30% discount on the going rate and a lowered minimum threshold of £30,960/year.',
    },
    prPermanentResidencyRoute: {
      visaName: 'Indefinite Leave to Remain (ILR)',
      qualificationTimeMonths: '5 years of continuous residence on a Skilled Worker visa (time spent on Student and Graduate visas does NOT count towards the 5-year ILR clock, but counts towards the 10-Year Long Residence ILR route).',
      languageRequirement: 'CEFR B1 English + passing the Life in the UK test.',
    },
    citizenshipTimelineYears: '1 year after acquiring Indefinite Leave to Remain (ILR), representing 6 years total continuous residence (or 5 years if married to a British citizen). Dual nationality is recognized between the UK and Pakistan.',
    sources: [
      {
        title: 'GOV.UK Graduate Visa Details',
        url: 'https://www.gov.uk/graduate-visa',
        publisher: 'UKVI',
        publisherType: 'government',
      },
      {
        title: 'Skilled Worker Visa Salary Thresholds (New Entrants)',
        url: 'https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less',
        publisher: 'Home Office',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 12. Bringing Family & Dependent Rules
  // --------------------------------------------------------------------------
  dependentRules: {
    spousalVisaPermittedDuringStudy: false,
    conditions: [
      'MAJOR RESTRICTION: Since January 1, 2024, international students starting postgraduate taught Master’s degrees (1-year MA, MSc, MBA) are NO LONGER permitted to bring dependents.',
      'Dependents (spouse and children) are ONLY permitted if: (A) The student is enrolled on a PhD or doctoral level program (RQF Level 8), (B) The student is on a research-based Master program (MPhil/MSc by Research), or (C) The student is receiving an official government scholarship of 6+ months.',
      'Maintenance requirement: £680/month outside London or £845/month inside London per dependent for up to 9 months.',
    ],
    spousalWorkRights: 'If eligible under research/PhD programs, spouses hold unrestricted work rights across all skill levels in the UK.',
    childDependentRules: 'Children must be under 18 at time of application. Both parents must be legally resident in the UK unless one parent has sole custody.',
    financialSponsorshipRequirementExtraMonthly: '£680/month outside London; £845/month in London per dependent for 9 months.',
    sources: [
      {
        title: 'GOV.UK Student Dependants Rules',
        url: 'https://www.gov.uk/student-visa/family-members',
        publisher: 'Home Office',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'Students planning to study a standard 1-year taught Master cannot bring their spouse or children during their study period. Once the student completes the degree and transitions to a Skilled Worker visa, they can sponsor family dependents.',
  },

  // --------------------------------------------------------------------------
  // 13. Recent Law & Policy Changes
  // --------------------------------------------------------------------------
  recentPolicyTimeline: [
    {
      effectiveDate: '2025-11-11',
      headline: 'UKVI Statutory Maintenance Rates Updated',
      summary: 'Living maintenance requirements rose to £1,529/month in London (£13,761 total for 9 months) and £1,171/month outside London (£10,539 total for 9 months) to reflect statutory inflation metrics.',
      impactOnStudents: 'Pakistani applicants must demonstrate higher 28-day bank balances for student visa applications.',
      officialAnnouncementUrl: 'https://www.gov.uk/student-visa/money',
      publisher: 'Home Office / UKVI',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2025-10-15',
      headline: 'Graduate Route Post-Study Work Reduced to 18 Months From 1 Jan 2027',
      summary: 'Confirmed in the October 2025 Statement of Changes to Immigration Rules: Graduate Route duration will be 18 months for Bachelor and Master degree applications submitted on or after 1 January 2027 (PhD/Doctoral graduates remain at 3 years). Current 2-year duration remains valid for applications submitted before 1 January 2027.',
      impactOnStudents: 'Students graduating and applying on or after 1 Jan 2027 will receive an 18-month stay instead of 2 years to transition into Skilled Worker employment.',
      officialAnnouncementUrl: 'https://www.gov.uk/graduate-visa',
      publisher: 'Home Office',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-04-04',
      headline: 'Skilled Worker Salary Threshold Increases with New Entrant Discount',
      summary: 'General Skilled Worker threshold raised to £38,700/year, but international graduates qualify as "New Entrants" with a 30% discount (minimum £30,960/year).',
      impactOnStudents: 'Graduate visa holders switching to Skilled Worker status require a lower salary threshold to qualify.',
      officialAnnouncementUrl: 'https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less',
      publisher: 'Home Office',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-02-06',
      headline: 'Immigration Health Surcharge (IHS) Increases to £776/year',
      summary: 'The statutory annual health surcharge for students and their dependents was increased from £470 to £776 per year of visa duration.',
      impactOnStudents: 'Applicants must budget an extra £306/year for mandatory NHS healthcare coverage.',
      officialAnnouncementUrl: 'https://www.gov.uk/healthcare-immigration-application',
      publisher: 'Home Office',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-01-01',
      headline: 'Dependent Ban Takes Effect for Postgraduate Taught Master Students',
      summary: 'Implemented a ban preventing students on non-research postgraduate taught courses from bringing spousal and child dependents.',
      impactOnStudents: '1-year Master students must study unaccompanied unless enrolled on research-based PhD/MPhil programs.',
      officialAnnouncementUrl: 'https://www.gov.uk/student-visa/family-members',
      publisher: 'Home Office',
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 14. Living in the United Kingdom
  // --------------------------------------------------------------------------
  studentLiving: {
    avgAccommodationCostMonthly: '£450 to £750 outside London (student halls / flatshare); £800 to £1,300 in Greater London (private student accommodation / flatshare). En-suite rooms in purpose-built student accommodation (PBSA) cost £600–£900/month.',
    housingSearchPortals: [
      'Rightmove (rightmove.co.uk) & Zoopla (zoopla.co.uk)',
      'SpareRoom (spareroom.co.uk) - UK’s premier flatshare platform',
      'Student.com & AmberStudent (Verified student accommodation)',
      'University Accommodation Office (Guaranteed halls for first-year international students)',
    ],
    healthCareSystemSummary: 'Full access to the National Health Service (NHS). International students register with a local General Practitioner (GP) doctor and receive free doctor appointments, medical treatment, and emergency care (prescriptions capped at approx. £9.90 in England, completely free in Scotland/Wales).',
    safetyIndex: 'High. Strict gun control laws and comprehensive community policing. Campus security operates 24/7 across all major institutions.',
    climateOverview: 'Temperate maritime climate. Frequent rainfall, mild summers (18°C to 25°C), and chilly, overcast winters (2°C to 8°C). Snow is infrequent except in Scotland and Northern England.',
    halalFoodAvailability: 'Abundant',
    pakistaniCommunityPresence: 'Massive and historically rooted. Over 1.5 million people of Pakistani heritage reside in the UK. Major community clusters exist in London, Birmingham, Manchester, Bradford, Leeds, Glasgow, and Luton with active Pakistan student societies (PakSoc) at virtually every UK university.',
    simAndBankingRecommended: {
      simProviders: ['giffgaff (Free SIM delivered to Pakistan before departure, O2 network)', 'VOXI (Unlimited social media data, Vodafone network)', 'EE', 'Lycamobile'],
      digitalBanks: ['Monzo (Instant digital bank with UK account number & sort code)', 'Revolut', 'Lloyds Bank', 'Barclays', 'HSBC'],
    },
    transportationStudentPerks: '16-25 Railcard (or Student Railcard) gives 1/3 off all national train fares across Great Britain. In London, 18+ Student Oyster photocard gives 30% off travelcards and bus passes.',
    sources: [
      {
        title: 'British Council - Living in the UK',
        url: 'https://study-uk.britishcouncil.org/',
        publisher: 'British Council',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 15. After Arrival Checklist
  // --------------------------------------------------------------------------
  arrivalChecklist: [
    {
      dayWindow: 'Week 1',
      title: 'University In-Person Registration & ID Card Issuance',
      officialTerm: 'In-person enrolment & CAS verification',
      requiredDocuments: [
        'Original Passport with 90-day entry vignette or digital eVisa share code',
        'CAS statement and official final degree transcripts',
        'UK contact address and UK phone number',
      ],
      consequenceOfDelay: 'Failure to enrol by the university’s final CAS reporting deadline results in CAS withdrawal and mandatory visa curtailment.',
      officialPortalOrGuide: 'https://www.gov.uk/student-visa',
    },
    {
      dayWindow: 'Week 1',
      title: 'Open UK Bank Account (Monzo / High Street Bank)',
      officialTerm: 'Bank account opening with Bank Letter',
      requiredDocuments: [
        'Passport and entry vignette',
        'Official Student Status & Address Verification Letter (Bank Letter) issued by university',
        'UK mobile number',
      ],
      consequenceOfDelay: 'Inability to receive wages from part-time jobs or pay accommodation deposits.',
      officialPortalOrGuide: 'https://monzo.com/',
    },
    {
      dayWindow: 'Week 2',
      title: 'Register with a Local NHS General Practitioner (GP)',
      officialTerm: 'NHS GP Registration (Family Doctor)',
      requiredDocuments: [
        'Passport and eVisa / BRP proof',
        'Proof of address (tenancy agreement or student halls letter)',
        'IHS reference number',
      ],
      consequenceOfDelay: 'Inability to access routine healthcare or obtain prescriptions without visiting emergency A&E.',
      officialPortalOrGuide: 'https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/',
    },
    {
      dayWindow: 'Month 1',
      title: 'Apply for National Insurance (NI) Number',
      officialTerm: 'National Insurance Number Application for Employment',
      requiredDocuments: [
        'Passport and eVisa share code / biometric residence vignette',
        'UK residential address and proof of right to work',
      ],
      consequenceOfDelay: 'Higher emergency tax code deductions from part-time job earnings until permanent NI number is allocated.',
      officialPortalOrGuide: 'https://www.gov.uk/apply-national-insurance-number',
    },
    {
      dayWindow: 'Month 2',
      title: 'Obtain Student Council Tax Exemption Certificate',
      officialTerm: 'Council Tax Student Exemption',
      requiredDocuments: ['Council Tax Exemption Letter downloaded from university student portal'],
      consequenceOfDelay: 'Full-time students are legally exempt from UK local Council Tax. Failing to notify the local council results in billing notices of £1,200–£2,000/year.',
      officialPortalOrGuide: 'https://www.gov.uk/council-tax/discounts-for-full-time-students',
    },
  ],

  // --------------------------------------------------------------------------
  // 16. Student FAQs
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: 'What is the exact 28-day rule for bank statements, and what are the most common mistakes?',
      answer: 'The 28-day rule requires that your maintenance funds (£10,539 outside London; £13,761 in London) PLUS any unpaid first-year tuition fees must be held continuously in your (or your parents\') bank account for at least 28 consecutive days. The closing balance must never fall below the required sum even for an hour. Crucially, the bank statement must be dated no more than 31 days before the date you submit your online application. The most common mistake is spending funds or receiving a statement dated on day 27 rather than completing the full 28 days.',
      category: 'finances',
      sources: [{ title: 'UKVI Financial Evidence Guidance', url: 'https://www.gov.uk/student-visa/money', publisher: 'UKVI', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I bring my spouse and children with me on a 1-year Master’s degree?',
      answer: 'NO. Effective January 1, 2024, the UK government introduced strict restrictions barring international students on postgraduate taught Master’s courses (such as 1-year MSc, MA, or MBA programs) from bringing dependents. You can only bring family dependents if you are enrolled on a postgraduate research program (such as a PhD, doctorate, or research-based Master) or receiving a government scholarship of 6+ months.',
      category: 'visa',
      sources: [{ title: 'GOV.UK Student Dependants Rules', url: 'https://www.gov.uk/student-visa/family-members', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the Graduate Route, and is it still available for 2 years?',
      answer: 'For applications submitted before 1 January 2027, the Graduate Route provides 2 full years of post-study work authorization (3 years for PhD/doctoral graduates). Under the October 2025 Statement of Changes, applications submitted on or after 1 January 2027 will receive an 18-month grant for undergraduate and Master’s graduates (PhD remains 3 years). It allows you to work unrestricted in any job without needing an immediate employer sponsor.',
      category: 'settlement',
      sources: [{ title: 'GOV.UK Graduate Visa Overview', url: 'https://www.gov.uk/graduate-visa', publisher: 'UKVI', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I get my Tuberculosis (TB) test in Pakistan, and can I use any local lab?',
      answer: 'You MUST take your TB test at an officially approved clinic operated by the International Organization for Migration (IOM) or Aziz Medical Centre (AMC) located in Islamabad, Lahore, Karachi, or Mirpur. Certificates from unauthorized hospitals, laboratories, or private clinics will NOT be accepted and will result in visa refusal. The test costs approx. 20,000–25,000 PKR and is valid for 6 months.',
      category: 'visa',
      sources: [{ title: 'Tuberculosis Testing in Pakistan', url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is a CAS (Confirmation of Acceptance for Studies) and how do I get one?',
      answer: 'A CAS is an electronic confirmation issued by a licensed UK university directly to the Home Office database. It contains a unique 14-digit reference number confirming that the university has accepted you on a course, verified your academic qualifications, and assessed your English language proficiency. You receive your CAS after meeting all academic conditions, submitting requested financial documents, and paying the university’s tuition deposit.',
      category: 'admissions',
      sources: [{ title: 'UKVI Student Guidance', url: 'https://www.gov.uk/student-visa', publisher: 'UKVI', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work part-time while studying in the UK, and how much can I earn?',
      answer: 'Yes. Students on degree-level courses (RQF Level 6 and above) are legally permitted to work up to 20 hours per week during term time and full-time during published holiday periods. With the statutory National Living Wage at £11.44/hour (£12.21 in 2025), working 20 hours per week yields between £900 and £1,050 gross per month—which covers monthly groceries, transit, and shared flat rent outside London.',
      category: 'jobs',
      sources: [{ title: 'National Minimum Wage Rates', url: 'https://www.gov.uk/national-minimum-wage-rates', publisher: 'Low Pay Commission', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What happens during a UKVI Credibility Interview?',
      answer: 'A Credibility Interview is an assessment conducted by UKVI to verify that you are a genuine student. You will be questioned about: why you chose this specific university and course, specific modules you will study, how this course bridges knowledge gaps for career advancement in Pakistan, realistic target employers in Pakistan, how you will finance your stay, and your accommodation plans. Providing vague, rehearsed, or unconvincing answers can lead to refusal under Appendix ST 5.1.',
      category: 'visa',
      sources: [{ title: 'Appendix Student Credibility Assessment', url: 'https://www.gov.uk/guidance/immigration-rules/appendix-student', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I use a Medium of Instruction (MOI) letter from my Pakistani university instead of IELTS?',
      answer: 'Many UK universities categorized as Higher Education Providers with a Track Record of Compliance have the legal right to assess your English internally. Some universities accept an MOI letter from an HEC-recognized university if your Bachelor was taught in English. However, taking IELTS Academic or IELTS for UKVI (with 6.5 overall) gives you access to a much wider range of institutions and protects against visa processing scrutiny.',
      category: 'admissions',
      sources: [{ title: 'SELT Guidance', url: 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How does the transition from Graduate Route to Permanent Residency (PR / ILR) work?',
      answer: 'Time spent on a Student or Graduate visa does NOT directly count towards the 5-year Indefinite Leave to Remain (ILR) route. During your 2-year Graduate visa, you must secure a job with an approved UK sponsor who sponsors you for a Skilled Worker visa. As a "New Entrant" switching from a Graduate visa, you benefit from a 30% salary discount (minimum £30,960/year instead of £38,700). After completing 5 continuous years on a Skilled Worker visa, you can apply for ILR.',
      category: 'settlement',
      sources: [{ title: 'Skilled Worker Visa New Entrant Rules', url: 'https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the Immigration Health Surcharge (IHS), and do I need private health insurance?',
      answer: 'The IHS is a mandatory statutory surcharge of £776 per year of study that gives international students full access to the UK National Health Service (NHS). You do NOT need private medical insurance. With the IHS, you can see NHS doctors (GPs), visit hospitals, and receive emergency treatment with zero out-of-pocket fees, identical to British citizens.',
      category: 'finances',
      sources: [{ title: 'GOV.UK Healthcare Surcharge', url: 'https://www.gov.uk/healthcare-immigration-application', publisher: 'Home Office', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 17. Master Official Sources List
  // --------------------------------------------------------------------------
  allOfficialSources: [
    {
      title: 'GOV.UK - Official UK Government Student Visa Guidance',
      url: 'https://www.gov.uk/student-visa',
      publisher: 'UK Visas and Immigration (UKVI)',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Student Visa Financial Evidence & Money Rules',
      url: 'https://www.gov.uk/student-visa/money',
      publisher: 'Home Office',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Immigration Health Surcharge (IHS) Rates & Portal',
      url: 'https://www.gov.uk/healthcare-immigration-application',
      publisher: 'Home Office',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Approved Tuberculosis (TB) Testing Clinics in Pakistan',
      url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan/tuberculosis-testing-in-pakistan',
      publisher: 'Home Office',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Graduate Visa Post-Study Work Permit',
      url: 'https://www.gov.uk/graduate-visa',
      publisher: 'UKVI',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Skilled Worker Visa Salary Thresholds & New Entrants',
      url: 'https://www.gov.uk/skilled-worker-visa/when-you-can-be-paid-less',
      publisher: 'Home Office',
      publisherType: 'government',
    },
    {
      title: 'GOV.UK - Secure English Language Tests (SELT) Approved List',
      url: 'https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt',
      publisher: 'Home Office',
      publisherType: 'government',
    },
    {
      title: 'VFS Global Pakistan - UK Visa Application Centres',
      url: 'https://www.vfsglobal.co.uk/pk/en',
      publisher: 'VFS Global',
      publisherType: 'visa_centre',
    },
    {
      title: 'UCAS - Universities and Colleges Admissions Service',
      url: 'https://www.ucas.com/',
      publisher: 'UCAS',
      publisherType: 'portal',
    },
    {
      title: 'British Council - Study UK Scholarships & Funding',
      url: 'https://study-uk.britishcouncil.org/scholarships-funding',
      publisher: 'British Council',
      publisherType: 'scholarship',
    },
    {
      title: 'Chevening Official Portal - UK Government Scholarships',
      url: 'https://www.chevening.org/',
      publisher: 'Foreign, Commonwealth & Development Office (FCDO)',
      publisherType: 'scholarship',
    },
    {
      title: 'Commonwealth Scholarship Commission UK (CSC)',
      url: 'https://cscuk.fcdo.gov.uk/',
      publisher: 'Commonwealth Scholarship Commission',
      publisherType: 'scholarship',
    },
  ],

  // --------------------------------------------------------------------------
  // Home Country Configuration (Pakistan Specifics)
  // --------------------------------------------------------------------------
  pakistanContext: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    localCurrencyCode: 'PKR',
    localCurrencySymbol: 'Rs',
    exchangeRateToDestCurrency: 362.5, // 1 GBP ≈ 362.50 PKR
    exchangeRateDate: '2026-10-04',
    vacProviderName: 'VFS Global Pakistan (Islamabad, Lahore, Karachi, Mirpur)',
    embassyCentres: [
      {
        city: 'Islamabad',
        jurisdiction: 'Nationwide (UK Visas & Immigration decision hub)',
        centreType: 'VFS Global',
        address: 'Park Road, Chattha Bakhtawar, Chak Shahzad, Islamabad, Pakistan',
        bookingPortalUrl: 'https://www.vfsglobal.co.uk/pk/en',
        appointmentWaitEstimate: 'Standard: 3 weeks (15 working days). Priority: 5 working days.',
        appointmentFeePKR: 0,
        sources: [{ title: 'VFS Global Islamabad', url: 'https://www.vfsglobal.co.uk/pk/en', publisher: 'VFS Global', publisherType: 'visa_centre' }],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Lahore',
        jurisdiction: 'Punjab Region',
        centreType: 'VFS Global',
        address: 'Gerry’s Building, 20 Ex-Airport Road, Lahore, Pakistan',
        bookingPortalUrl: 'https://www.vfsglobal.co.uk/pk/en',
        appointmentWaitEstimate: 'Standard: 3 weeks. Priority: 5 working days.',
        appointmentFeePKR: 0,
        sources: [{ title: 'VFS Global Lahore', url: 'https://www.vfsglobal.co.uk/pk/en', publisher: 'VFS Global', publisherType: 'visa_centre' }],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Karachi',
        jurisdiction: 'Sindh & Balochistan',
        centreType: 'VFS Global',
        address: 'Bahria Complex IV, 4th Floor, Main Gizri Road, Clifton, Karachi, Pakistan',
        bookingPortalUrl: 'https://www.vfsglobal.co.uk/pk/en',
        appointmentWaitEstimate: 'Standard: 3 weeks. Priority: 5 working days.',
        appointmentFeePKR: 0,
        sources: [{ title: 'VFS Global Karachi', url: 'https://www.vfsglobal.co.uk/pk/en', publisher: 'VFS Global', publisherType: 'visa_centre' }],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Mirpur',
        jurisdiction: 'Azad Jammu & Kashmir (AJK)',
        centreType: 'VFS Global',
        address: 'Kalyal Hotel Building, Allama Iqbal Road, Mirpur, AJK',
        bookingPortalUrl: 'https://www.vfsglobal.co.uk/pk/en',
        appointmentWaitEstimate: 'Standard: 3 weeks. User-pay premium fee applies.',
        appointmentFeePKR: 28000,
        sources: [{ title: 'VFS Global Mirpur', url: 'https://www.vfsglobal.co.uk/pk/en', publisher: 'VFS Global', publisherType: 'visa_centre' }],
        lastVerified: '2026-10-04',
      },
    ],
    attestationRules: [
      {
        authority: 'HEC',
        title: 'Higher Education Commission (HEC) Degree Attestation',
        applicableQualifications: ['4-Year Bachelor (BS/BE)', '2-Year Master (MA/MSc)', 'MS/MPhil'],
        procedureSummary: 'Create an e-portal profile on eservices.hec.gov.pk. Enter academic credentials and book an appointment or send via courier (TCS/Leopards) for QR-code verification on reverse of degree.',
        officialPortal: 'https://eservices.hec.gov.pk',
        estimatedFeePKR: 5000,
        processingTimeDays: '7-14 business days via courier',
        sources: [{ title: 'HEC Degree Attestation', url: 'https://hec.gov.pk', publisher: 'HEC', publisherType: 'government' }],
        lastVerified: '2026-10-04',
      },
      {
        authority: 'IBCC',
        title: 'Inter Board Coordination Commission (IBCC) Secondary Attestation',
        applicableQualifications: ['Matriculation (SSC)', 'Intermediate (HSSC / FSc)'],
        procedureSummary: 'Verify original certificates with the relevant BISE board first, then submit to IBCC for official QR-code seal.',
        officialPortal: 'https://ibcc.edu.pk',
        estimatedFeePKR: 3200,
        processingTimeDays: '5-10 business days',
        sources: [{ title: 'IBCC Attestation Guidelines', url: 'https://ibcc.edu.pk', publisher: 'IBCC', publisherType: 'government' }],
        lastVerified: '2026-10-04',
      },
    ],
    studentCommunityHubs: [
      {
        name: 'UK Pakistani Students Network',
        platform: 'Student Association',
        url: 'https://study-uk.britishcouncil.org/',
        verified: true,
      },
      {
        name: 'British Council Pakistan Study UK Alumni',
        platform: 'Website',
        url: 'https://www.britishcouncil.pk/study-uk',
        verified: true,
      },
    ],
  },
};
