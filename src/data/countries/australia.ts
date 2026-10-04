import { CountryGuideData } from './types';

export const australiaGuide: CountryGuideData = {
  countryCode: 'AU',
  countryName: 'Australia',
  slug: 'australia',
  flagEmoji: '🇦🇺',
  tagline: 'World-Leading Group of Eight Research, 48-Hour Fortnight Work Rights, and Subclass 485 Graduate Pathways',
  metaDescription:
    'Comprehensive, verified statutory guide for Pakistani students applying to Australian universities in 2025/2026. Subclass 500 visa rules, AUD $2,000 visa fee, AUD $29,710 living funds requirement, Genuine Student (GS) criterion, OSHC, and Subclass 485 graduate streams.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'Australian immigration rules underwent major legislative revisions: the Student Visa (Subclass 500) application fee was increased to AUD $2,000 on July 1, 2025 (additional applicant 18+ AUD $1,225, under 18 AUD $400), the Genuine Student (GS) criterion replaced GTE on March 23, 2024, and the annual living cost requirement was raised to AUD $29,710. Always verify live statutory guidelines directly on the Department of Home Affairs (DHA) portal.',

  defaultHomeCountry: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    currencySymbol: 'Rs.',
    exchangeRateToDestinationCurrency: 187.0, // 1 AUD ≈ 187 PKR (current benchmark)
    exchangeRateDate: '2026-10-04',
  },

  // 1. Quick Facts Bar
  quickFacts: {
    capital: 'Canberra',
    currency: {
      code: 'AUD',
      symbol: '$',
      name: 'Australian Dollar',
    },
    officialLanguages: ['English'],
    intakes: [
      {
        name: 'Semester 1 (Primary Intake)',
        months: 'February / March - June',
        notes: 'Largest intake across all Australian universities. Offers maximum course selections, institutional scholarships, and campus accommodation allocations. Application deadline: October - December.',
      },
      {
        name: 'Semester 2 (Secondary Intake)',
        months: 'July - November',
        notes: 'Substantial intake across business, computer science, information technology, and engineering disciplines. Application deadline: April - June.',
      },
      {
        name: 'Trimester / Term 3 (Minor Intake)',
        months: 'October / November - February',
        notes: 'Offered by universities operating trimester models (e.g. UNSW Sydney, Deakin, Griffith) for accelerated degree completion.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 26000,
      maxLocal: 48000,
      currencyCode: 'AUD',
      approxPkrMin: 4862000,
      approxPkrMax: 8976000,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Study Australia - Tuition and Living Costs in Australia',
          url: 'https://www.studyaustralia.gov.au/',
          publisher: 'Australian Trade and Investment Commission (Austrade)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Undergraduate degrees range from AUD $28,000–$45,000/year; postgraduate master degrees range from AUD $26,000–$48,000/year. Group of Eight (Go8) research universities (Melbourne, Sydney, UNSW, ANU) sit at the higher end.',
    },
    monthlyLivingCost: {
      minLocal: 2100,
      maxLocal: 2700,
      currencyCode: 'AUD',
      approxPkrMin: 392700,
      approxPkrMax: 504900,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Department of Home Affairs - Financial Capacity for Student Visa',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs (DHA)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'DHA statutory living cost benchmark is AUD $29,710 per year (~AUD $2,475/month) for an individual student. Living in Sydney and Melbourne averages AUD $2,400–$2,800/month; regional cities (Adelaide, Perth, Wollongong) average AUD $1,800–$2,200/month.',
    },
    postStudyWorkDuration: '2 to 3 years under Subclass 485 Post-higher Education Work stream (2 years for Bachelor/Master Coursework, 3 years for Master by Research/PhD)',
    partTimeWorkHoursTerm: '48 hours per fortnight during study terms (Condition 8105; research masters and PhD candidates have uncapped work rights once course commences)',
    partTimeWorkHoursHolidays: 'Unlimited full-time hours during recognized university vacation periods',
    visaProcessingTimeWeeks: '4 to 8 weeks for Pakistani applications processed via ImmiAccount and Australian Biometric Collection Centres (ABCC)',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'Student Visa (Subclass 500)',
      subCategory: 'Higher Education / Postgraduate Research Sector',
      purpose: 'Primary immigration visa allowing non-Australian citizens to participate in an eligible full-time course of study registered on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS).',
      eligibilitySummary:
        'Must possess a valid electronic Confirmation of Enrolment (CoE), meet the Genuine Student (GS) requirement, hold active Overseas Student Health Cover (OSHC) for the full proposed visa length, demonstrate financial capacity of AUD $29,710 plus 1st year tuition, meet English requirements (IELTS 6.0 minimum for visa), and pass medical/biometric clearances.',
      feeLocal: 2000, // Updated to AUD $2,000 (additional applicant 18+ AUD $1,225, under 18 AUD $400)
      feeCurrency: 'AUD',
      approxFeePkr: 374000,
      validity: 'Duration of course of study plus 1 to 2 months depending on graduation date (up to a maximum of 5 years).',
      processingTime: '4 to 8 weeks from Pakistan.',
      sources: [
        {
          title: 'Department of Home Affairs - Student Visa (Subclass 500)',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Temporary Graduate Visa (Subclass 485)',
      subCategory: 'Post-higher Education Work Stream',
      purpose: 'Post-study work visa allowing recent international graduates from Australian tertiary institutions to live, study, and work full-time in Australia.',
      eligibilitySummary:
        'Must have completed an eligible CRICOS-registered Australian degree of at least 2 academic years (92 CRICOS weeks) inside Australia. The maximum age threshold is 35 years for all qualification levels (the age 50 exemption applies solely to Hong Kong and British National Overseas passport holders). Duration: 2 years for Bachelor’s; 2 years for Master’s (coursework); 3 years for Master’s (research) and PhD. English requirement: IELTS 6.5 (min 5.5 each band) achieved within 1 year of application.',
      feeLocal: 1945,
      feeCurrency: 'AUD',
      approxFeePkr: 363715,
      validity: '2 to 3 years depending on academic credential level (plus potential regional second visa extensions).',
      processingTime: '8 to 12 weeks inside Australia.',
      sources: [
        {
          title: 'Department of Home Affairs - Temporary Graduate Visa (Subclass 485)',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Student Guardian Visa (Subclass 590)',
      subCategory: 'Parent or Legal Guardian Accompaniment',
      purpose: 'Allows a parent, legal custodian, or nominated relative over 21 to live in Australia to provide care and support for an international student under 18 years of age.',
      eligibilitySummary:
        'Must demonstrate sufficient independent financial capacity to support oneself and the student without recourse to Australian public funds. Employment in Australia is strictly prohibited under Condition 8101.',
      feeLocal: 2000,
      feeCurrency: 'AUD',
      approxFeePkr: 374000,
      validity: 'Co-terminus with student’s stay or until the student turns 18 years of age.',
      processingTime: '6 to 12 weeks.',
      sources: [
        {
          title: 'Department of Home Affairs - Student Guardian Visa (Subclass 590)',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Training Visa (Subclass 407)',
      subCategory: 'Occupational Traineeship & Professional Development',
      purpose: 'Allows foreign nationals to participate in workplace-based occupational training to enhance skills in their current occupation, tertiary field of study, or field of expertise.',
      eligibilitySummary:
        'Must be nominated by an approved Australian temporary activities sponsor. Program must involve structured workplace-based training tailored to enhance specific vocational competencies.',
      feeLocal: 415,
      feeCurrency: 'AUD',
      approxFeePkr: 77605,
      validity: 'Up to 2 years.',
      processingTime: '6 to 10 weeks.',
      sources: [
        {
          title: 'Department of Home Affairs - Training Visa (Subclass 407)',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 3. Step-by-Step How to Apply
  applicationGuide: {
    officialOnlinePortals: [
      {
        name: 'ImmiAccount (Department of Home Affairs)',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        description: 'The sole official Australian government digital platform for lodging visa applications, uploading statutory evidence, and tracking visa grant notices.',
      },
      {
        name: 'Australian Biometric Collection Centre (VFS Global / Gerry’s Pakistan)',
        url: 'https://visa.vfsglobal.com/pak/en/aus',
        description: 'Official biometric collection partner in Islamabad, Lahore, and Karachi for digital facial photography and ten-digit fingerprint scans.',
      },
      {
        name: 'Study Australia Course & CRICOS Directory',
        url: 'https://www.studyaustralia.gov.au/',
        description: 'Official Australian Government repository of accredited CRICOS courses and higher education institutions.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Receive Unconditional Offer & Electronic Confirmation of Enrolment (CoE)',
        description:
          'Apply to a CRICOS-registered Australian university. Submit academic transcripts and English test scores. Upon receiving an offer, pay the initial tuition deposit (usually 1st semester tuition). The institution registers your enrollment in PRISMS and issues your electronic Confirmation of Enrolment (CoE).',
      },
      {
        stepNumber: 2,
        title: 'Purchase Overseas Student Health Cover (OSHC)',
        description:
          'Purchase mandatory OSHC insurance coverage for the entire duration of your proposed student visa from an approved Australian provider (Allianz Care, Medibank, Bupa, NIB, or AHM). Your CoE typically references whether your university arranged OSHC or if you purchased private cover.',
      },
      {
        stepNumber: 3,
        title: 'Draft Genuine Student (GS) Submission Responses',
        description:
          'Prepare targeted responses to the statutory Genuine Student (GS) questions within your ImmiAccount application. Detail your current academic and employment circumstances in Pakistan, reasons for choosing Australia and your specific university, and concrete career benefits upon returning to Pakistan.',
      },
      {
        stepNumber: 4,
        title: 'Lodge Online Application in ImmiAccount & Pay Visa Fee',
        description:
          'Create an ImmiAccount (online.immi.gov.au). Fill out all required fields for Subclass 500. Upload color scans of passport, CoE, OSHC policy certificate, financial capacity documents, HEC/IBCC attested academic records, and GS evidence. Pay the AUD $2,000 visa fee via credit card or PayPal.',
      },
      {
        stepNumber: 5,
        title: 'Enroll Biometrics at Australian Biometric Collection Centre (ABCC)',
        description:
          'Receive the Requirement to Provide Biometrics letter containing your VLN. Book an appointment at VFS Global / Gerry’s in Islamabad, Lahore, or Karachi within 14 days. Present your passport and biometric letter for ten-print fingerprint scans and digital photograph.',
      },
      {
        stepNumber: 6,
        title: 'Complete Upfront Medical Examination with Panel Physician',
        description:
          'Generate your eMedical referral letter (HAP ID) from ImmiAccount. Book a medical examination with an approved panel physician in Pakistan (IOM Migration Health Assessment Centres in Islamabad, Lahore, or Karachi). The clinic transmits your medical results directly to the Department of Home Affairs.',
      },
      {
        stepNumber: 7,
        title: 'Visa Grant Notification & VEVO Verification',
        description:
          'When approved, you will receive an official Visa Grant Notification letter via email detailing your Visa Grant Number, validity dates, and attached conditions (e.g., Condition 8105 work limitation). Australia issues electronic visas; no physical passport label is required. Verify your status on VEVO (Visa Entitlement Verification Online).',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'Australian Biometric Collection Centre (ABCC) - Islamabad',
        address: 'Park Road, Chattha Bakhtawar, Chak Shahzad, Islamabad, Pakistan',
        servicesOffered: ['Digital Biometric Collection', 'Facial Photograph Recording', 'Document Verification'],
      },
      {
        city: 'Lahore',
        centreName: 'Australian Biometric Collection Centre (ABCC) - Lahore',
        address: '20 Ex-American Centre Building, Opposite Ganga Ram Hospital, Queens Road, Lahore, Pakistan',
        servicesOffered: ['Digital Biometric Collection', 'Facial Photograph Recording'],
      },
      {
        city: 'Karachi',
        centreName: 'Australian Biometric Collection Centre (ABCC) - Karachi',
        address: 'Bahria Complex IV, 4th Floor, Main Chaudhary Khaliq-uz-Zaman Road, Gizri, Clifton, Karachi, Pakistan',
        servicesOffered: ['Digital Biometric Collection', 'Facial Photograph Recording'],
      },
    ],
    interviewGuidelines: {
      isMandatory: false,
      description:
        'Interviews are not universally conducted, but Australian High Commission visa officers frequently initiate unannounced telephone interviews with Pakistani applicants. The phone interview scrutinizes the applicant’s Genuine Student (GS) intent, course knowledge, provider choices, and career return plans in Pakistan.',
      tips: [
        'Keep your phone accessible during embassy working hours (08:30 to 16:30 PKT) after lodging your application.',
        'Know the exact CRICOS course code, major subjects, credit point structure, and tuition fee of your degree.',
        'Explain specifically why you chose your Australian university over options in Pakistan (e.g. LUMS, NUST) and other overseas destinations.',
        'Detail target corporate employers in Pakistan (e.g., Engro, Systems Ltd, Jazz, Fauji Fertilizer, Habib Bank) and demonstrate realistic knowledge of domestic starting salaries for foreign postgraduates.',
        'Explain the exact source of your sponsor’s funds (business income, FBR tax returns, property transactions) without hesitation.',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Electronic Confirmation of Enrolment (CoE)',
        description: 'Statutory registration document issued through PRISMS by the Australian university verifying course enrollment and tuition payment.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Document Checklist Tool',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Overseas Student Health Cover (OSHC) Certificate',
        description: 'Policy certificate proving continuous medical and hospital insurance cover for the entire visa period from an approved Australian provider.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Health Insurance',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Genuine Student (GS) Comprehensive Statement',
        description: 'Detailed written submission answering statutory GS questions regarding academic background, course suitability, and Pakistan career prospects.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Genuine Student Requirement',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Financial Capacity Proof (AUD $29,710 + 1st Year Tuition)',
        description: 'Certified 6-month bank statements of sponsor, Bank Account Maintenance Certificate, FBR tax returns (3 years), Wealth Statement, and affidavit of support.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Financial Capacity',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Valid International Passport',
        description: 'Passport copy (all pages including bio-data page, previous visas, and entry/exit stamps).',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Student Visa Requirements',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'English Language Test Certificate (IELTS / PTE Academic)',
        description: 'Test report form meeting the statutory minimum score of IELTS 6.0 (or PTE 50) for visa issuance, or university direct entry requirements.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - English Language Requirements',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Educational Certificates & Transcripts',
        description: 'Secondary and Higher Secondary certificates attested by IBCC; University degrees and official transcripts attested by HEC Pakistan.',
        mandatory: true,
        sources: [
          {
            title: 'HEC Pakistan Degree Attestation System',
            url: 'https://hec.gov.pk',
            publisher: 'Higher Education Commission Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'eMedical Examination Information Sheet (HAP ID)',
        description: 'Panel physician medical exam report completed through IOM Pakistan addressing chest x-ray, HIV/Hepatitis screening, and physical fitness.',
        mandatory: true,
        sources: [
          {
            title: 'Department of Home Affairs - Health Requirements',
            url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
            publisher: 'Department of Home Affairs',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'NADRA Family Registration Certificate (FRC)',
        description: 'Official NADRA FRC document establishing verified family lineage between applicant and financial sponsors.',
        mandatory: true,
        sources: [
          {
            title: 'NADRA Official Portal',
            url: 'https://www.nadra.gov.pk/',
            publisher: 'NADRA Pakistan',
            publisherType: 'government',
          },
        ],
      },
    ],
  },

  // 4. Financial Requirements & Proof of Funds
  financialRequirements: {
    livingCostRequirementPerYear: 29710,
    currencyCode: 'AUD',
    approxLivingCostPkr: 5555770,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: '6-Month Consecutive Bank Balance Statements',
        details:
          'Original statements from a recognized Pakistani scheduled bank covering 6 consecutive months showing seasoned cash balances exceeding 1st year tuition plus AUD $29,710 living expenses plus AUD $2,500 travel allowance. Must be accompanied by a bank account maintenance certificate and verifiable FBR tax returns showing legitimate taxable income generation.',
        isPreferred: true,
      },
      {
        methodName: 'Annual Household Income Proof (Government Option)',
        details:
          'Official evidence that parents or legal spouse have a personal annual taxable income of at least AUD $87,856 (or AUD $102,500 if bringing secondary applicants), verified via official FBR income tax assessment returns.',
        isPreferred: false,
      },
      {
        methodName: 'Approved Education Bank Loan',
        details:
          'Sanction letter for an educational loan from a major scheduled bank in Pakistan, specifying clear disbursement terms, property/asset collateral, and institutional release schedules.',
        isPreferred: true,
      },
      {
        methodName: 'Government / University Full Fellowship (e.g. Australia Awards / RTP)',
        details:
          'Official scholarship award notification confirming 100% tuition remission and statutory annual living allowance.',
        isPreferred: true,
      },
    ],
    bankStatementHoldingPeriodDays: 180,
    visaApplicationFee: {
      amount: 2000, // Statutory fee updated to AUD $2,000 (additional applicant 18+ $1,225, under 18 $400)
      currency: 'AUD',
      approxPkr: 374000,
    },
    otherSurcharges: [
      {
        name: 'Overseas Student Health Cover (OSHC - 2 Years)',
        amount: 1100,
        currency: 'AUD',
        approxPkr: 205700,
        mandatory: true,
        notes: 'Mandatory private health insurance for the entire 2-year visa duration. Averages AUD $550–$650 per year for a single student.',
      },
      {
        name: 'ABCC Biometrics Enrollment Fee',
        amount: 45,
        currency: 'AUD',
        approxPkr: 8415,
        mandatory: true,
        notes: 'Payable at Gerry’s / VFS Global Visa Application Centre in Pakistan at the time of biometric capture.',
      },
      {
        name: 'IOM Panel Physician Medical Examination',
        amount: 180,
        currency: 'AUD',
        approxPkr: 33660,
        mandatory: true,
        notes: 'Payable directly in PKR (approx PKR 32,000–36,000) at IOM clinics in Islamabad, Lahore, or Karachi.',
      },
    ],
    sources: [
      {
        title: 'Department of Home Affairs - Financial Capacity for Student Visa',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        publisher: 'Department of Home Affairs',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / Intermediate / FSc / ICS) with minimum 70%–80% overall marks, or Cambridge A-Levels (minimum 3 subjects with grades of BBB or better). Direct entry into top Go8 universities typically requires 75%+ in FSc Pre-Engineering or Pre-Medical; students falling between 60%–70% can enter via a 1-year university foundation / diploma pathway program.',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Honours / BE / BBA comprising 16 years of formal education) from an HEC-recognized university with a minimum cumulative GPA of 2.8–3.2/4.0 (or first division / 60%+). Old 2-year Pakistani BA/BSc degrees (14 years of education) are strictly ineligible for direct entry into Australian master programs without completing a 2-year Pakistani Master degree (MA/MSc) first.',
    doctoralRequirements:
      '18 years of formal education (MS / MPhil with thesis) from an HEC-accredited university, verified research publications, a refined research proposal, and a confirmed academic supervisor acceptance from an Australian university faculty member.',
    pakistaniEquivalenceGuide: {
      matriculation: 'Recognized as equivalent to Australian Year 10 secondary school education; requires IBCC attestation.',
      intermediateFSc: 'Recognized as equivalent to Australian Year 12 Senior Secondary Certificate of Education (SSCE / ATAR equivalent). FSc Pre-Engineering / Pre-Medical graduates qualify for direct bachelor entry.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees are assessed as equivalent to an Australian Advanced Diploma / Associate Degree and do not meet the 16-year requirement for postgraduate master admissions.',
      sixteenYearBachelors: '4-year BS / BE / BBA degrees from HEC-accredited Pakistani universities are universally assessed as equivalent to Australian 4-year Bachelor degrees.',
      studyGapsAcceptability: 'Australian universities and the Department of Home Affairs accept study gaps of 1 to 5 years provided the gap is supported by formal employment verification, salary accounts, tax returns, and relevance to the prospective program.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Attestation of all Bachelor, Master, and PhD degrees and final transcripts.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Attestation of SSC (Matric) and HSSC (Intermediate / FSc) certificates and mark sheets.',
        link: 'https://ibcc.edu.pk',
      },
    ],
    applicationPortals: [
      {
        portalName: 'Direct University International Admissions Portals',
        url: 'https://www.studyaustralia.gov.au/',
        scope: 'Virtually all Australian universities manage direct online applications through their proprietary portals or authorized representative agent networks.',
      },
      {
        portalName: 'PRISMS (Provider Registration and International Student Management System)',
        url: 'https://prisms.education.gov.au/',
        scope: 'Australian Government system used by universities to generate official Confirmation of Enrolment (CoE) records.',
      },
    ],
    deadlinesSummary:
      'Semester 1 (February/March): Deadlines range from October 15 to December 15. Semester 2 (July): Deadlines range from March 31 to May 31. Early application is critical due to Australian national enrollment planning caps.',
    sources: [
      {
        title: 'Study Australia - Admissions Standards Overview',
        url: 'https://www.studyaustralia.gov.au/',
        publisher: 'Australian Trade and Investment Commission',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 6. English and Local Language Requirements
  languageRequirements: {
    acceptedEnglishTests: [
      {
        testName: 'IELTS Academic',
        minScoreOverall: '6.0 (Visa minimum) / 6.5 (University Master entry)',
        subScoreRequirements: 'Department of Home Affairs mandates IELTS 6.0 overall for Subclass 500 visa issuance (effective March 23, 2024); universities typically require 6.5 overall with no individual band below 6.0 for master programs.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '50 (Visa minimum) / 58 - 64 (University Master entry)',
        subScoreRequirements: 'Minimum score of 50 for visa grant; top universities require 58 to 64 with no communicative skill below 50.',
      },
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '64 (Visa minimum) / 79 - 90 (University Master entry)',
        subScoreRequirements: 'Minimum subscores of 13 in Reading, 12 in Listening, 18 in Speaking, and 21 in Writing for direct degree admission.',
      },
    ],
    moiWaiverAcceptability:
      'Not accepted for visa processing. While some Australian universities may occasionally issue a conditional offer based on an English Medium of Instruction (MOI) letter, the Department of Home Affairs statutorily mandates an approved standardized English language test (IELTS, PTE, or TOEFL iBT) for Subclass 500 visa issuance from Pakistan.',
    localLanguageImportance: {
      study: 'English is the sole official language of instruction across all accredited Australian tertiary education providers.',
      dailyLife: 'English is universal across all Australian states and territories.',
      partTimeJobs: 'Fluent conversational English is essential for securing student employment in retail, customer service, hospitality, and tutoring across Australian cities.',
      postStudyPR: 'Vital for Permanent Residency points. Scoring Superior English (IELTS 8.0 in all bands or PTE 79 in all skills) awards 20 points under the General Skilled Migration (GSM) points grid, while Proficient English (IELTS 7.0 / PTE 65) awards 10 points.',
    },
    localLanguageTests: [],
    sources: [
      {
        title: 'Department of Home Affairs - English Language Requirements for Subclass 500',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        publisher: 'Department of Home Affairs',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities
  topUniversities: [
    {
      name: 'The University of Melbourne',
      city: 'Melbourne, Victoria',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 13,
      },
      strongPrograms: ['Computer Science & IT', 'Melbourne Business School (MBA)', 'Biomedical Engineering', 'Law', 'Architecture'],
      avgTuitionPerYearLocal: 46000,
      currency: 'AUD',
      approxTuitionPkr: 8602000,
      internationalStudentsPercentage: '44%',
      officialWebsite: 'https://www.unimelb.edu.au/',
      sources: [
        {
          title: 'The University of Melbourne Official Portal',
          url: 'https://www.unimelb.edu.au/',
          publisher: 'The University of Melbourne',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'The University of Sydney',
      city: 'Sydney, New South Wales',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 18,
      },
      strongPrograms: ['Medicine & Health', 'Civil & Structural Engineering', 'Master of Management', 'Data Science', 'Law'],
      avgTuitionPerYearLocal: 48000,
      currency: 'AUD',
      approxTuitionPkr: 8976000,
      internationalStudentsPercentage: '40%',
      officialWebsite: 'https://www.sydney.edu.au/',
      sources: [
        {
          title: 'The University of Sydney Portal',
          url: 'https://www.sydney.edu.au/',
          publisher: 'The University of Sydney',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of New South Wales (UNSW Sydney)',
      city: 'Sydney, New South Wales',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 19,
      },
      strongPrograms: ['Engineering & Technology', 'Photovoltaics & Renewable Energy', 'AGSM MBA', 'Computer Science', 'Finance'],
      avgTuitionPerYearLocal: 47500,
      currency: 'AUD',
      approxTuitionPkr: 8882500,
      internationalStudentsPercentage: '38%',
      officialWebsite: 'https://www.unsw.edu.au/',
      sources: [
        {
          title: 'UNSW Sydney Official Portal',
          url: 'https://www.unsw.edu.au/',
          publisher: 'UNSW Sydney',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Australian National University (ANU)',
      city: 'Canberra, Australian Capital Territory',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 30,
      },
      strongPrograms: ['Public Policy (Crawford School)', 'International Relations', 'Philosophy', 'Physics & Astronomy', 'Cybernetics'],
      avgTuitionPerYearLocal: 44000,
      currency: 'AUD',
      approxTuitionPkr: 8228000,
      internationalStudentsPercentage: '32%',
      officialWebsite: 'https://www.anu.edu.au/',
      sources: [
        {
          title: 'ANU Official Portal',
          url: 'https://www.anu.edu.au/',
          publisher: 'Australian National University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Monash University',
      city: 'Melbourne, Victoria',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 37,
      },
      strongPrograms: ['Pharmacy & Pharmacology', 'Chemical Engineering', 'Banking & Finance', 'Data Science', 'Nursing'],
      avgTuitionPerYearLocal: 45000,
      currency: 'AUD',
      approxTuitionPkr: 8415000,
      internationalStudentsPercentage: '35%',
      officialWebsite: 'https://www.monash.edu/',
      sources: [
        {
          title: 'Monash University Official Portal',
          url: 'https://www.monash.edu/',
          publisher: 'Monash University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'The University of Queensland (UQ)',
      city: 'Brisbane, Queensland',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 40,
      },
      strongPrograms: ['Environmental Sciences', 'Biotechnology', 'Mineral & Mining Engineering', 'Agriculture', 'Public Health'],
      avgTuitionPerYearLocal: 43000,
      currency: 'AUD',
      approxTuitionPkr: 8041000,
      internationalStudentsPercentage: '30%',
      officialWebsite: 'https://www.uq.edu.au/',
      sources: [
        {
          title: 'The University of Queensland Portal',
          url: 'https://www.uq.edu.au/',
          publisher: 'The University of Queensland',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'The University of Western Australia (UWA)',
      city: 'Perth, Western Australia',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 77,
      },
      strongPrograms: ['Mining Engineering', 'Marine Science', 'Agricultural Science', 'Petroleum Engineering', 'Business Analytics'],
      avgTuitionPerYearLocal: 41000,
      currency: 'AUD',
      approxTuitionPkr: 7667000,
      internationalStudentsPercentage: '25%',
      officialWebsite: 'https://www.uwa.edu.au/',
      sources: [
        {
          title: 'UWA Official Portal',
          url: 'https://www.uwa.edu.au/',
          publisher: 'The University of Western Australia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'The University of Adelaide',
      city: 'Adelaide, South Australia',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 82,
      },
      strongPrograms: ['Wine Business & Oenology', 'Dentistry', 'Artificial Intelligence (AIML)', 'Mechanical Engineering'],
      avgTuitionPerYearLocal: 40000,
      currency: 'AUD',
      approxTuitionPkr: 7480000,
      internationalStudentsPercentage: '28%',
      officialWebsite: 'https://www.adelaide.edu.au/',
      sources: [
        {
          title: 'The University of Adelaide Official Site',
          url: 'https://www.adelaide.edu.au/',
          publisher: 'The University of Adelaide',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Technology Sydney (UTS)',
      city: 'Sydney, New South Wales',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 88,
      },
      strongPrograms: ['Computer Science & IT', 'Nursing', 'Telecommunications Engineering', 'Design & Architecture'],
      avgTuitionPerYearLocal: 42000,
      currency: 'AUD',
      approxTuitionPkr: 7854000,
      internationalStudentsPercentage: '31%',
      officialWebsite: 'https://www.uts.edu.au/',
      sources: [
        {
          title: 'UTS Official Portal',
          url: 'https://www.uts.edu.au/',
          publisher: 'University of Technology Sydney',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'RMIT University',
      city: 'Melbourne, Victoria',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 123,
      },
      strongPrograms: ['Art & Design', 'Civil Engineering', 'Computer Science', 'Supply Chain Management'],
      avgTuitionPerYearLocal: 38000,
      currency: 'AUD',
      approxTuitionPkr: 7106000,
      internationalStudentsPercentage: '34%',
      officialWebsite: 'https://www.rmit.edu.au/',
      sources: [
        {
          title: 'RMIT University Portal',
          url: 'https://www.rmit.edu.au/',
          publisher: 'RMIT University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Macquarie University',
      city: 'Sydney, New South Wales',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 133,
      },
      strongPrograms: ['Actuarial Studies', 'Linguistics', 'Accounting & Finance', 'Cybersecurity', 'Hearing & Speech Sciences'],
      avgTuitionPerYearLocal: 39000,
      currency: 'AUD',
      approxTuitionPkr: 7293000,
      internationalStudentsPercentage: '26%',
      officialWebsite: 'https://www.mq.edu.au/',
      sources: [
        {
          title: 'Macquarie University Official Site',
          url: 'https://www.mq.edu.au/',
          publisher: 'Macquarie University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Wollongong (UOW)',
      city: 'Wollongong, New South Wales',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 167,
      },
      strongPrograms: ['Mining Engineering', 'Materials Science', 'Computer Engineering', 'Business Information Systems'],
      avgTuitionPerYearLocal: 34000,
      currency: 'AUD',
      approxTuitionPkr: 6358000,
      internationalStudentsPercentage: '32%',
      officialWebsite: 'https://www.uow.edu.au/',
      sources: [
        {
          title: 'University of Wollongong Portal',
          url: 'https://www.uow.edu.au/',
          publisher: 'University of Wollongong',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Australia Awards Scholarships',
      grantingBody: 'Department of Foreign Affairs and Trade (DFAT)',
      coverageType: 'Full Funding (100% tuition, return airfare, establishment allowance, and fortnightly living stipend)',
      eligibility:
        'Pakistani citizens residing in Pakistan with at least 2 years of relevant professional work experience. Priority areas include economic development, energy, agriculture, education, and health. Recipients must return to Pakistan for at least 2 years post-graduation.',
      deadlineMonths: 'February – April (annual application window)',
      officialLink: 'https://www.dfat.gov.au/people-to-people/australia-awards',
      sources: [
        {
          title: 'DFAT - Australia Awards Scholarships',
          url: 'https://www.dfat.gov.au/people-to-people/australia-awards',
          publisher: 'Department of Foreign Affairs and Trade',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Australian Government Research Training Program (RTP)',
      grantingBody: 'Commonwealth Government of Australia',
      coverageType: 'Tuition Fee Offset + Annual Living Stipend (AUD $32,000–$36,000/yr) for up to 3.5 years',
      eligibility:
        'High-achieving Master by Research and PhD applicants nominated by participating Australian universities, evaluated on research track record, publications, and academic merit.',
      deadlineMonths: 'August – October (annual institutional deadlines)',
      officialLink: 'https://www.education.gov.au/research-block-grants/research-training-program',
      sources: [
        {
          title: 'Department of Education - Research Training Program (RTP)',
          url: 'https://www.education.gov.au/research-block-grants/research-training-program',
          publisher: 'Department of Education Australia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Group of Eight (Go8) International Excellence Scholarships',
      grantingBody: 'Individual Universities (Melbourne, Sydney, UNSW, UQ, Monash, ANU)',
      coverageType: '20% to 50% Tuition Fee Remission for the duration of the degree',
      eligibility:
        'Automatically assessed upon submission of standard university admission application based on top undergraduate academic percentage (typically 80%+ in Pakistani Bachelor degrees).',
      deadlineMonths: 'November (Semester 1) / May (Semester 2)',
      officialLink: 'https://www.studyaustralia.gov.au/',
      sources: [
        {
          title: 'Study Australia - Scholarships in Australia',
          url: 'https://www.studyaustralia.gov.au/',
          publisher: 'Austrade',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: '48 hours per fortnight (Condition 8105; research masters and PhD students have unrestricted work hours once course begins)',
    holidayHours: 'Unlimited full-time hours during recognized semester and holiday breaks',
    minimumWageLocal: 'AUD $24.10 / hour (National Minimum Wage set by Fair Work Commission, effective 1 July 2024)',
    averageStudentWageLocal: 'AUD $25.00 - $32.00 / hour depending on sector (hospitality, retail, tutoring, aged care)',
    regulationsSummary:
      'Students cannot work until their course of study has officially commenced. Work is calculated over a rolling 14-day fortnight (maximum 48 hours). Breaching Condition 8105 constitutes grounds for mandatory visa cancellation under Section 116(1)(b) of the Migration Act 1958. Every student must obtain an Australian Tax File Number (TFN) from the Australian Taxation Office (ATO).',
    sources: [
      {
        title: 'Department of Home Affairs - Check Visa Work Conditions (8105)',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        publisher: 'Department of Home Affairs',
        publisherType: 'immigration_authority',
      },
      {
        title: 'Fair Work Ombudsman - Minimum Wages in Australia',
        url: 'https://www.fairwork.gov.au/pay-and-wages/minimum-wages',
        publisher: 'Fair Work Ombudsman',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'Genuine Student (GS) Criterion Failure',
      description:
        'The case officer concludes that the applicant is using student status as a pretext for migration rather than genuine academic advancement, typically triggered by generic statements, lack of knowledge about the specific Australian university, or choosing courses disconnected from past education.',
      howToAvoid:
        'Address all statutory GS prompts with tailored, articulate evidence: explain the specific course curriculum and unit subjects, describe alternative universities considered in Pakistan (LUMS, NUST) and abroad, and articulate a detailed Pakistan career roadmap naming 3–5 prospective corporate employers and anticipated domestic starting salaries.',
      sources: [
        {
          title: 'Department of Home Affairs - Genuine Student Requirement',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Unverifiable Financial Funds / Dubious Third-Party Sponsors',
      description:
        'Submitting bank statements with sudden large unseasoned deposits right before visa lodgment, using distant relatives as sponsors, or failing to substantiate the legitimate source of cash deposits with FBR tax returns.',
      howToAvoid:
        'Funds must be seasoned for 6 months. Sponsors should ideally be parents or self. Submit 6 months of continuous, verified bank statements, Bank Account Maintenance Certificates, 3 years of certified FBR tax returns (IT-2 / CPRs), business registrations (Form C / SECP), and wealth statements explaining the origin of all funds.',
      sources: [
        {
          title: 'Department of Home Affairs - Financial Evidentiary Framework',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Public Interest Criterion (PIC) 4020 - Fraud & Bogus Documents',
      description:
        'Presenting forged educational transcripts, fake work experience letters, or altered bank records, or making misleading statements on statutory questions.',
      howToAvoid:
        'Never submit unverifiable documentation. The Australian High Commission in Islamabad maintains specialized Document Verification Officers who conduct on-site physical and phone audits with Pakistani banks, employers, and boards. PIC 4020 triggers a mandatory 3-year or 10-year worldwide ban from all Australian visas.',
      sources: [
        {
          title: 'Department of Home Affairs - Public Interest Criterion 4020',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Failure in Phone Verification Interview',
      description:
        'Inability of the applicant or their financial sponsor to answer detailed questions regarding course fees, living arrangements, university units, or business tax specifics during unannounced verification calls from the Australian High Commission in Islamabad.',
      howToAvoid:
        'Prepare thoroughly for telephone verification: ensure you and your sponsors know every figure on your application, understand the exact CRICOS units, and can discuss career return goals with natural fluency.',
      sources: [
        {
          title: 'Study Australia - Visa Verification Guidelines',
          url: 'https://www.studyaustralia.gov.au/',
          publisher: 'Austrade',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'Offshore visa refusals (applications submitted outside Australia) generally do not carry merits review rights before the Administrative Review Tribunal (ART, formerly AAT). If an application is refused from Pakistan, the applicant’s primary recourse is to review the formal Decision Record, remedy every specific deficiency highlighted by the case officer, and submit a fresh, comprehensively documented application through ImmiAccount, paying a new AUD $2,000 visa fee.',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: '2 to 3 years under Subclass 485 Post-higher Education Work stream',
    workPermitType: 'Subclass 485 Temporary Graduate Visa (Full unrestricted work rights)',
    prPathwaysSummary:
      'Australia operates a points-based General Skilled Migration (GSM) system: (1) Subclass 189 (Skilled Independent Visa - points-tested PR); (2) Subclass 190 (Skilled Nominated Visa - state-sponsored PR awarding 5 extra points); (3) Subclass 491 (Skilled Work Regional Provisional Visa - 15 extra points, 5-year provisional visa leading to Subclass 191 permanent residence after 3 years). Graduates also qualify for Employer Nomination Scheme (Subclass 186) or Temporary Skill Shortage (TSS Subclass 482) sponsorships.',
    citizenshipTimeline:
      'After obtaining Permanent Residence (PR), living in Australia for at least 4 years on lawful visas (including at least 12 continuous months as a permanent resident immediately before applying) qualifies an individual for Australian Citizenship by Conferral.',
    sources: [
      {
        title: 'Department of Home Affairs - General Skilled Migration Points Table',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        publisher: 'Department of Home Affairs',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 12. Bringing Family & Dependent Rules
  dependentRules: {
    canBringSpouse: true,
    canBringChildren: true,
    spouseWorkRights:
      'Spouses of students enrolled in Bachelor degree programs can work up to 48 hours per fortnight. Spouses of students enrolled in Master degree programs (both coursework and research) and Doctoral programs have UNRESTRICTED full-time work rights in Australia under Condition 8104 once the student commences studies.',
    childrenSchooling:
      'School-age dependent children (5 to 18 years) must be enrolled in an Australian primary or secondary school. Tuition fees for international dependents in public schools vary by state: Western Australia and Australian Capital Territory provide tuition fee waivers or discounts for children of postgraduate research students, while New South Wales and Victoria charge standard international student dependent school fees ($6,000–$10,000/year).',
    financialRequirementsPerDependent:
      'Additional AUD $10,394 per year for an accompanying spouse/partner, and AUD $4,449 per year for each dependent child, plus estimated school fees (AUD $8,296/year per school-aged child).',
    sources: [
      {
        title: 'Department of Home Affairs - Student Visa Family Members',
        url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
        publisher: 'Department of Home Affairs',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2024 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2024-03-23',
      headline: 'Genuine Student (GS) Requirement Replaces Genuine Temporary Entrant (GTE)',
      impact:
        'The Department of Home Affairs officially retired the GTE requirement and introduced the Genuine Student (GS) criterion, emphasizing academic credibility while acknowledging post-study skilled migration pathways.',
      officialSourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-03-23',
      headline: 'English Language Test Score Thresholds Increased',
      impact:
        'Minimum score for Subclass 500 student visas increased from IELTS 5.5 to 6.0 (or PTE 50). Minimum score for Subclass 485 Temporary Graduate visas increased from IELTS 6.0 to 6.5 (with 5.5 in each component).',
      officialSourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-05-10',
      headline: 'Statutory Financial Savings Benchmark Increased to AUD $29,710',
      impact:
        'The annual living capacity requirement for international students was raised from AUD $24,505 to AUD $29,710 to align with 75% of the national minimum wage.',
      officialSourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      lastVerified: '2026-10-04',
    },
    {
      date: '2025-07-01',
      headline: 'Student Visa (Subclass 500) Application Fee Raised to AUD $2,000',
      impact:
        'The Australian Government updated the student visa application fee to AUD $2,000 (with accompanying adult applicants paying AUD $1,225 and minor dependents AUD $400) to manage net overseas migration and fund tertiary education capacity.',
      officialSourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-07-01',
      headline: 'Subclass 485 Temporary Graduate Visa Overhauled (Age Limit 35)',
      impact:
        'The maximum eligible age for the Post-higher Education Work stream was set to 35 years across all qualification levels (the age 50 exemption applies solely to Hong Kong and British National Overseas passport holders). Durations were set to 2 years for Bachelor’s/Master’s coursework and 3 years for research graduates.',
      officialSourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-07-01',
      headline: 'National Minimum Wage Increased to AUD $24.10 / Hour',
      impact:
        'The Fair Work Commission raised the federal minimum wage to AUD $24.10 per hour (AUD $915.90 per 38-hour week), benefiting working international students.',
      officialSourceUrl: 'https://www.fairwork.gov.au/pay-and-wages/minimum-wages',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in Australia
  studentLiving: {
    accommodationTypes: [
      {
        type: 'On-Campus University Colleges & Halls of Residence',
        avgMonthlyCostLocal: 1400,
        currencyCode: 'AUD',
        approxCostPkr: 261800,
        description: 'Furnished residential rooms adjacent to campus departments, frequently including full or partial meal plans.',
      },
      {
        type: 'Off-Campus Shared Student Apartment (Private Room)',
        avgMonthlyCostLocal: 950,
        currencyCode: 'AUD',
        approxCostPkr: 177650,
        description: 'Private bedroom in a shared 2–3 bedroom flat in middle-ring suburban transit corridors. Preferred by over 80% of Pakistani postgraduate students.',
      },
      {
        type: 'Purpose-Built Student Accommodation (PBSA - Scape, Iglu, UniLodge)',
        avgMonthlyCostLocal: 1600,
        currencyCode: 'AUD',
        approxCostPkr: 299200,
        description: 'Modern studio apartments with all utilities, Wi-Fi, gym facilities, and 24/7 security included.',
      },
      {
        type: 'Homestay with Australian Family',
        avgMonthlyCostLocal: 1200,
        currencyCode: 'AUD',
        approxCostPkr: 224400,
        description: 'Furnished room including breakfast and dinner, popular with incoming undergraduate students.',
      },
    ],
    groceriesAndHalalFood:
      'Certified halal food is exceptionally widespread across Australia. Major supermarket giants (Coles, Woolworths, ALDI) stock halal-certified fresh chicken, lamb, and pantry staples. Suburbs with established Pakistani and Muslim populations (Auburn and Lakemba in Sydney; Broadmeadows and Dandenong in Melbourne; Cannington in Perth) host dozens of Pakistani grocery shops, halal butchers, and authentic Pakistani restaurants (biryani, karahi, seekh kabab).',
    safetyAndCrime:
      'Australia ranks consistently among the top 15 most peaceful and safest countries in the world. Cities feature comprehensive CCTV coverage, well-lit transit precincts, and 24-hour university campus security escorts.',
    climateAndWeather:
      'Southern hemisphere climate (seasons reversed from Pakistan). Summers (December to February) are warm to hot (26°C to 38°C). Winters (June to August) are mild in Sydney and Perth (9°C to 17°C) and cooler with occasional frost in Melbourne and Canberra (2°C to 12°C). Queensland (Brisbane) enjoys subtropical warmth year-round.',
    pakistaniCommunityPresence:
      'Australia is home to over 100,000 Pakistani-Australians. The largest community concentrations are in Greater Western Sydney (Parramatta, Blacktown, Liverpool), Melbourne (Tarneit, Point Cook, Craigieburn), and Perth. Every university boasts an energetic Pakistani Society (PakSoc) or South Asian Student Association hosting Eid galas, cricket tournaments, and orientation workshops.',
    simAndBankingRecommended: {
      simProviders: [
        'Optus (Student discount plans and wide 5G coverage)',
        'Telstra (Best regional and rural network coverage)',
        'Vodafone Australia (Generous international calling allowances to Pakistan)',
        'Boost Mobile (Prepaid plans operating on full Telstra network)',
      ],
      digitalBanks: [
        'Commonwealth Bank of Australia (CommBank Everyday Account - can be opened online 14 days before arrival)',
        'ANZ (ANZ Access Advantage with fee-free student banking)',
        'Westpac (Westpac Choice Student Account)',
        'National Australia Bank (NAB Classic Banking with no monthly account-keeping fees)',
      ],
    },
    transportationStudentPerks:
      'Transport concession policies vary by state: Victoria (Melbourne) offers an International Student Travel Pass (50% discount on annual Myki passes); Queensland (Brisbane) provides 50% concession on Translink networks; New South Wales (Sydney) does not offer general tertiary concessions to international students on Opal cards, but private campus shuttle services operate free of charge.',
    sources: [
      {
        title: 'Study Australia - Living Costs in Australian Cities',
        url: 'https://www.studyaustralia.gov.au/',
        publisher: 'Austrade',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'Airport Customs Clearance & Biosecurity Declaration',
      description:
        'Pass through Australian Border Force and Department of Agriculture biosecurity screening at your port of entry (Sydney SYD, Melbourne MEL, Brisbane BNE, or Perth PER). Strictly declare any food, spices, plants, or herbal products on your Incoming Passenger Card; failing to declare biosecurity items incurs instant fines of up to AUD $6,260 and potential visa cancellation.',
      timeline: 'Immediately upon arrival at Australian international airport',
      mandatory: true,
      officialPortalOrGuide: 'https://www.agriculture.gov.au/biosecurity-trade/travelling/to-australia',
    },
    {
      stepNumber: 2,
      title: 'Apply for Australian Tax File Number (TFN)',
      description:
        'Apply online for your Tax File Number (TFN) through the Australian Taxation Office (ATO) website once you are physically inside Australia. Your TFN is legally required before beginning any part-time employment to ensure you are taxed at the correct resident individual threshold.',
      timeline: 'Within first 7 days of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.ato.gov.au/individuals-and-families/tax-file-number',
    },
    {
      stepNumber: 3,
      title: 'Finalize Australian Bank Account Activation',
      description:
        'Visit a local branch of your chosen bank (CommBank, ANZ, Westpac, or NAB) with your original passport and proof of local address to complete in-person identity verification and collect your contactless debit card.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.studyaustralia.gov.au/',
    },
    {
      stepNumber: 4,
      title: 'Activate Overseas Student Health Cover (OSHC) Member Card',
      description:
        'Register your online account on your OSHC provider’s portal (Allianz, Medibank, Bupa, NIB) to download your digital health insurance membership card and locate partnered direct-billing medical clinics (GP practices) near campus.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.studyaustralia.gov.au/',
    },
    {
      stepNumber: 5,
      title: 'Complete University Enrolment & Collect Student ID Card',
      description:
        'Attend mandatory international student orientation week (O-Week), finalize unit timetable allocations, and collect your student campus photo card.',
      timeline: 'During campus orientation week',
      mandatory: true,
      officialPortalOrGuide: 'https://www.studyaustralia.gov.au/',
    },
    {
      stepNumber: 6,
      title: 'Update Australian Residential Address in University Portal (Condition 8533)',
      description:
        'Under mandatory statutory visa Condition 8533, you must notify your education provider of your residential Australian address within 7 days of arriving in Australia, and within 7 days of any subsequent change of address.',
      timeline: 'Within 7 days of arrival (Mandatory Visa Condition)',
      mandatory: true,
      officialPortalOrGuide: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'What is the Genuine Student (GS) requirement and how does it differ from GTE?',
      answer:
        'On March 23, 2024, the Department of Home Affairs replaced the Genuine Temporary Entrant (GTE) statement with the Genuine Student (GS) requirement. Unlike GTE, which penalized applicants for any interest in post-study immigration, GS assesses whether the student genuinely intends to study in Australia. It focuses on your academic history, course suitability, and career goals upon returning home, while acknowledging that graduates may legitimately pursue skilled post-study pathways if they meet GSM criteria.',
      category: 'Visa Regulations',
      sources: [
        {
          title: 'Department of Home Affairs - Genuine Student Requirement',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Why did the student visa fee increase to AUD $2,000?',
      answer:
        'The Australian Government updated the base application charge for the Student Visa (Subclass 500) to AUD $2,000 (with accompanying adult dependents paying AUD $1,225 and minor dependents AUD $400). The policy was implemented to manage post-pandemic net overseas migration and ensure incoming international students possess robust financial resources.',
      category: 'Statutory Fees',
      sources: [
        {
          title: 'Department of Home Affairs - Visa Pricing Changes',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money must I demonstrate in total for an Australian student visa from Pakistan?',
      answer:
        'You must prove: (1) First-year tuition fee (as shown on your CoE); (2) Living costs of AUD $29,710 for the principal applicant (PKR ~5.55M); (3) Return travel allowance of AUD $2,500; and (4) OSHC insurance (~AUD $1,100 for 2 years). If bringing a spouse, add AUD $10,394; for each child, add AUD $4,449 plus estimated schooling costs of AUD $8,296. Total funds must be seasoned in verifiable bank accounts for 6 months.',
      category: 'Finances',
      sources: [
        {
          title: 'Department of Home Affairs - Financial Capacity',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How many hours can I work while studying in Australia?',
      answer:
        'Under Condition 8105, international students can work up to 48 hours per fortnight (a 14-day rolling cycle) while their course of study is in session. During scheduled university vacations (summer and winter intersessions), students can work unlimited full-time hours. Students undertaking a Master by Research or Doctoral degree have unrestricted work hours once their course commences.',
      category: 'Employment Rights',
      sources: [
        {
          title: 'Department of Home Affairs - Work Conditions for Student Visa',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What are the new rules for the Subclass 485 Temporary Graduate Visa?',
      answer:
        'Key rules include: (1) Maximum eligible age is 35 years across all qualification levels (the age 50 exemption applies solely to Hong Kong and British National Overseas passport holders); (2) Duration is 2 years for Bachelor’s, 2 years for Master’s by coursework, and 3 years for Master’s by research/PhD; (3) English requirement is IELTS 6.5 (minimum 5.5 in each component); (4) The previous automatic 2-year COVID extensions have ended.',
      category: 'Post-Graduation',
      sources: [
        {
          title: 'Department of Home Affairs - Temporary Graduate Visa (Subclass 485)',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can my spouse work full-time in Australia while I study?',
      answer:
        'Yes, if you are enrolled in a Master degree program (both coursework and research) or a Doctoral degree, your spouse has UNRESTRICTED full-time work rights under Condition 8104 once your studies begin. If you are enrolled in a Bachelor degree, your spouse is limited to 48 hours per fortnight.',
      category: 'Family & Dependents',
      sources: [
        {
          title: 'Department of Home Affairs - Condition 8104',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is Overseas Student Health Cover (OSHC) and is it mandatory?',
      answer:
        'Yes. Under visa Condition 8501, maintaining continuous OSHC from an approved Australian health insurer (such as Allianz Care, Medibank, Bupa, NIB, or AHM) is legally mandatory for the entire duration of your stay in Australia. It covers hospital treatments, emergency ambulance services, and general practitioner (GP) visits.',
      category: 'Health Insurance',
      sources: [
        {
          title: 'Department of Home Affairs - OSHC Guidelines',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I apply for a student visa using an English Medium of Instruction (MOI) letter?',
      answer:
        'No. The Department of Home Affairs statutorily requires a formal, approved English language test score (such as IELTS Academic, PTE Academic, or TOEFL iBT) for Subclass 500 visa applications from Pakistan. The minimum visa score is IELTS 6.0 overall (or PTE 50). MOI letters are not accepted by Australian immigration.',
      category: 'Language Requirements',
      sources: [
        {
          title: 'Department of Home Affairs - English Language Requirements',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is my 2-year Pakistani BA/BSc degree accepted for a Master’s in Australia?',
      answer:
        'No. Australian Master’s programs require 16 years of formal education (equivalent to an Australian 4-year Bachelor’s degree). Holders of 2-year Pakistani BA/BSc degrees (14 years) must complete a 2-year Pakistani Master’s degree (MA/MSc) or an approved post-graduate diploma in Pakistan before applying for an Australian Master’s.',
      category: 'Admissions & Equivalence',
      sources: [
        {
          title: 'Study Australia - Admissions Standards',
          url: 'https://www.studyaustralia.gov.au/',
          publisher: 'Austrade',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I give biometrics for Australia in Pakistan?',
      answer:
        'Biometrics (digital ten-print fingerprint scans and facial photography) are collected at the Australian Biometric Collection Centre (ABCC) operated by VFS Global / Gerry’s in Islamabad, Lahore, and Karachi. You must lodge your application on ImmiAccount first and receive your Biometric Requirement Letter.',
      category: 'Biometrics & Centres',
      sources: [
        {
          title: 'VFS Global Pakistan - Australian Biometrics',
          url: 'https://visa.vfsglobal.com/pak/en/aus',
          publisher: 'VFS Global',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is Public Interest Criterion (PIC) 4020?',
      answer:
        'PIC 4020 is a statutory provision that mandates visa refusal if an applicant provides bogus documents or false or misleading information in their current application or any application in the preceding 12 months. It carries an automatic 3-year or 10-year ban from entering Australia.',
      category: 'Visa Refusals',
      sources: [
        {
          title: 'Department of Home Affairs - PIC 4020',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How does studying in Australia lead to Permanent Residency (PR)?',
      answer:
        'Graduating from an eligible 2-year Australian degree grants you 5 points for Australian study and unlocks the Subclass 485 graduate visa. While on Subclass 485, you gain skilled work experience in an occupation on the Medium and Long-term Strategic Skills List (MLTSSL), pass a skills assessment, and submit an Expression of Interest (EOI) via SkillSelect for Subclass 189, 190, or 491 visas.',
      category: 'Post-Graduation & PR',
      sources: [
        {
          title: 'Department of Home Affairs - SkillSelect Points Table',
          url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
          publisher: 'Department of Home Affairs',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'Department of Home Affairs - Student Visa (Subclass 500)',
      url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      publisher: 'Department of Home Affairs (DHA)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'Department of Home Affairs - Temporary Graduate Visa (Subclass 485)',
      url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485',
      publisher: 'Department of Home Affairs (DHA)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'Study Australia - Official Australian Government Guide for Students',
      url: 'https://www.studyaustralia.gov.au/',
      publisher: 'Australian Trade and Investment Commission (Austrade)',
      publisherType: 'government',
    },
    {
      title: 'VFS Global Pakistan - Australian Biometric Collection Centre',
      url: 'https://visa.vfsglobal.com/pak/en/aus',
      publisher: 'VFS Global',
      publisherType: 'visa_centre',
    },
    {
      title: 'Department of Foreign Affairs and Trade - Australia Awards',
      url: 'https://www.dfat.gov.au/people-to-people/australia-awards',
      publisher: 'Department of Foreign Affairs and Trade (DFAT)',
      publisherType: 'scholarship',
    },
    {
      title: 'Fair Work Ombudsman - Minimum Wage Rates in Australia',
      url: 'https://www.fairwork.gov.au/pay-and-wages/minimum-wages',
      publisher: 'Fair Work Ombudsman',
      publisherType: 'government',
    },
    {
      title: 'Department of Agriculture - Australian Biosecurity Screening',
      url: 'https://www.agriculture.gov.au/biosecurity-trade/travelling/to-australia',
      publisher: 'Department of Agriculture, Fisheries and Forestry',
      publisherType: 'government',
    },
    {
      title: 'Australian Taxation Office (ATO) - Tax File Number Application',
      url: 'https://www.ato.gov.au/individuals-and-families/tax-file-number',
      publisher: 'Australian Taxation Office',
      publisherType: 'government',
    },
    {
      title: 'Department of Education - Research Training Program (RTP)',
      url: 'https://www.education.gov.au/research-block-grants/research-training-program',
      publisher: 'Department of Education Australia',
      publisherType: 'government',
    },
    {
      title: 'Higher Education Commission (HEC) Pakistan',
      url: 'https://hec.gov.pk',
      publisher: 'Higher Education Commission Pakistan',
      publisherType: 'government',
    },
    {
      title: 'Inter Board Coordination Commission (IBCC) Pakistan',
      url: 'https://ibcc.edu.pk',
      publisher: 'IBCC Pakistan',
      publisherType: 'government',
    },
    {
      title: 'NADRA Official Portal',
      url: 'https://www.nadra.gov.pk/',
      publisher: 'NADRA Pakistan',
      publisherType: 'government',
    },
  ],
};
