import { CountryGuideData } from './types';

export const usaGuide: CountryGuideData = {
  countryCode: 'US',
  countryName: 'United States',
  slug: 'usa',
  flagEmoji: '🇺🇸',
  tagline: 'Global Research Dominance, Cutting-Edge STEM OPT, and Unrivaled Academic Funding',
  metaDescription:
    'Authoritative, statutory guide for Pakistani students applying to American universities in 2025/2026. Form I-20, F-1 student visa, SEVIS I-901 fee ($350), MRV fee ($185), Visa Integrity Fee ($250), INA §214(b) interview strategies, STEM OPT (3 years), and full tuition assistantships.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'Under Section 214(b) of the U.S. Immigration and Nationality Act (INA), every F-1 visa applicant is legally presumed to have immigrant intent until proven otherwise during the in-person consular interview at the U.S. Embassy in Islamabad or U.S. Consulate General in Karachi. Familiarize yourself with statutory SEVIS fee payments, Form I-20 cost of attendance requirements, and OPT regulations.',

  defaultHomeCountry: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    currencySymbol: 'Rs.',
    exchangeRateToDestinationCurrency: 278.0, // 1 USD ≈ 278 PKR (current benchmark)
    exchangeRateDate: '2026-10-04',
  },

  // 1. Quick Facts Bar
  quickFacts: {
    capital: 'Washington, D.C.',
    currency: {
      code: 'USD',
      symbol: '$',
      name: 'United States Dollar',
    },
    officialLanguages: ['English'],
    intakes: [
      {
        name: 'Fall Intake (Primary)',
        months: 'August / September - December',
        notes: 'Largest intake across all SEVP-certified institutions. Carries over 75% of academic scholarships, Graduate Teaching Assistantships (GTA), and Graduate Research Assistantships (GRA). Deadlines: December 1 - February 15.',
      },
      {
        name: 'Spring Intake (Secondary)',
        months: 'January - May',
        notes: 'Substantial intake for computer science, data science, engineering, and business. Deadlines: August 1 - October 15.',
      },
      {
        name: 'Summer Intake (Minor)',
        months: 'May / June - August',
        notes: 'Primarily restricted to accelerated executive degrees, intensive English pathway programs, or continuing graduate research.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 22000,
      maxLocal: 55000,
      currencyCode: 'USD',
      approxPkrMin: 6116000,
      approxPkrMax: 15290000,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'College Board - Trends in College Pricing and Student Aid',
          url: 'https://research.collegeboard.org/trends/college-pricing',
          publisher: 'College Board',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'In-state public university tuition averages $22,000–$32,000/year; out-of-state public averages $28,000–$42,000/year; private research universities (Ivy League, MIT, Stanford) range from $50,000–$65,000/year. Many STEM Master and PhD candidates receive full tuition waivers + stipends via Graduate Assistantships.',
    },
    monthlyLivingCost: {
      minLocal: 1200,
      maxLocal: 2400,
      currencyCode: 'USD',
      approxPkrMin: 333600,
      approxPkrMax: 667200,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'U.S. Department of Homeland Security - Study in the States Cost Guidelines',
          url: 'https://studyinthestates.dhs.gov/',
          publisher: 'U.S. Department of Homeland Security (DHS)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Midwest and Southern college towns (Texas, Indiana, Ohio, North Carolina) cost $1,000–$1,400/month; metropolitan coastal hubs (New York City, Boston, San Francisco Bay Area, Los Angeles) cost $2,000–$2,800/month.',
    },
    postStudyWorkDuration: 'Up to 3 years (12 Months Standard OPT + 24 Months STEM OPT Extension)',
    partTimeWorkHoursTerm: '20 hours per week on-campus (Off-campus work during study is strictly prohibited during the first academic year)',
    partTimeWorkHoursHolidays: 'Up to 40 hours per week on-campus during official school vacations (summer, winter breaks)',
    visaProcessingTimeWeeks: '3 to 8 weeks after consular interview appointment (Expedited appointments available within 60 days of program start)',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'F-1 Academic Student Visa',
      subCategory: 'INA §101(a)(15)(F)(i)',
      purpose: 'The primary nonimmigrant visa for international students pursuing full-time degree programs at accredited American universities, colleges, or academic language institutions.',
      eligibilitySummary:
        'Must possess a valid Form I-20 issued by an SEVP-certified institution, receipt of $350 SEVIS I-901 fee payment, completed DS-160 application, verified liquid financial support covering Box 7 of Form I-20, and successful rebuttal of immigrant intent under INA §214(b) during the consular interview. Mandatory statutory fees: $185 MRV fee + $250 Visa Integrity Fee (OBBBA; refundable upon compliance/departure) + $350 SEVIS fee = $785 USD total.',
      feeLocal: 185, // Consular MRV fee $185 (plus $250 Visa Integrity Fee & $350 SEVIS)
      feeCurrency: 'USD',
      approxFeePkr: 51430,
      validity: 'Duration of Status (D/S) - remains valid as long as student maintains full-time enrollment and an active SEVIS record.',
      processingTime: 'Issued within 5 to 10 business days following an approved consular interview (subject to §221(g) administrative processing).',
      sources: [
        {
          title: 'U.S. Department of State - Student Visa (F-1)',
          url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'J-1 Exchange Visitor Visa (Student Category)',
      subCategory: 'INA §101(a)(15)(J)',
      purpose: 'Nonimmigrant visa for participants in federally funded, bilateral government exchange or university fellowship programs, including the prestigious Fulbright Foreign Student Program.',
      eligibilitySummary:
        'Official Form DS-2019 issued by a designated sponsor organization (e.g. USEFP / IIE). More than 50% of total program funding must originate from an institutional sponsor, government, or international organization rather than personal/family funds. Commonly subject to the INA §212(e) Two-Year Home-Country Physical Presence Requirement.',
      feeLocal: 185,
      feeCurrency: 'USD',
      approxFeePkr: 51430,
      validity: 'Duration of Status (D/S) for academic program duration plus 30 days departure grace period.',
      processingTime: '5 to 10 business days following interview.',
      sources: [
        {
          title: 'U.S. Department of State - Exchange Visitor Visa (J-1)',
          url: 'https://travel.state.gov/content/travel/en/us-visas/study/exchange.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'M-1 Non-Academic / Vocational Student Visa',
      subCategory: 'INA §101(a)(15)(M)',
      purpose: 'Nonimmigrant visa for students pursuing full-time non-academic, technical, trade, or vocational training programs (such as flight schools or technical culinary institutes).',
      eligibilitySummary:
        'Form I-20 (M-1) issued by an approved vocational institution. Evidence of immediate liquid funds to cover the full duration of the vocational program (up to 1 year). Employment during study is strictly prohibited.',
      feeLocal: 185,
      feeCurrency: 'USD',
      approxFeePkr: 51430,
      validity: 'Duration of the vocational course plus 30 days, up to a maximum statutory limit of 1 year per issuance.',
      processingTime: '5 to 10 business days post-interview.',
      sources: [
        {
          title: 'U.S. Department of State - Student Visas Overview',
          url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'F-2 Dependent Visa',
      subCategory: 'Spouse & Unmarried Minor Children Under 21 of F-1 Students',
      purpose: 'Authorizes lawful presence in the United States for the immediate legal spouse and minor children of an active F-1 student.',
      eligibilitySummary:
        'Separate Form I-20 issued for each dependent by the F-1 student’s Designated School Official (DSO). Must demonstrate additional financial maintenance ($5,000–$7,000 per dependent on Form I-20). F-2 dependents are strictly prohibited from engaging in any employment in the United States under 8 CFR §214.2(f)(15)(i). F-2 minor children can attend public primary and secondary schools (K-12).',
      feeLocal: 185,
      feeCurrency: 'USD',
      approxFeePkr: 51430,
      validity: 'Co-terminus with the principal F-1 student’s Duration of Status (D/S).',
      processingTime: 'Processed concurrently with or subsequent to the principal student.',
      sources: [
        {
          title: 'DHS Study in the States - Dependents of F-1 Students',
          url: 'https://studyinthestates.dhs.gov/students/dependents',
          publisher: 'U.S. Department of Homeland Security (DHS)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'J-2 Dependent Visa',
      subCategory: 'Spouse & Minor Children of J-1 Exchange Visitors',
      purpose: 'Authorizes entry and stay for dependents of J-1 scholars and Fulbright fellows.',
      eligibilitySummary:
        'Individual Form DS-2019 for each dependent. Unlike F-2 spouses, J-2 spouses are legally eligible to apply to USCIS for an Employment Authorization Document (EAD - Form I-765) once in the United States, provided their income is not used to financially support the principal J-1.',
      feeLocal: 185,
      feeCurrency: 'USD',
      approxFeePkr: 51430,
      validity: 'Co-terminus with principal J-1 visitor validity.',
      processingTime: '5 to 10 business days post-interview.',
      sources: [
        {
          title: 'U.S. Department of State - Exchange Visitor Program Dependents',
          url: 'https://travel.state.gov/content/travel/en/us-visas/study/exchange.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 3. Step-by-Step How to Apply
  applicationGuide: {
    officialOnlinePortals: [
      {
        name: 'CEAC (Consular Electronic Application Center)',
        url: 'https://ceac.state.gov/genniv/',
        description: 'Official U.S. Department of State portal for completing online Form DS-160 (Nonimmigrant Visa Application).',
      },
      {
        name: 'FMJfee.com (SEVP SEVIS Fee Payment)',
        url: 'https://www.fmjfee.com/',
        description: 'Official Department of Homeland Security platform for paying the mandatory $350 SEVIS I-901 fee.',
      },
      {
        name: 'U.S. Visa Scheduling Portal (ustraveldocs / usvisascheduling)',
        url: 'https://www.ustraveldocs.com/',
        description: 'Official appointment booking and MRV fee payment platform for U.S. diplomatic missions in Pakistan (Islamabad and Karachi).',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Secure Admission and Obtain Form I-20',
        description:
          'Apply to and gain acceptance from an SEVP-certified American college or university. Submit financial guarantee documents to the university international office to receive your official Form I-20 (Certificate of Eligibility) bearing your unique 10-digit SEVIS ID number (starts with N).',
      },
      {
        stepNumber: 2,
        title: 'Pay the Mandatory SEVIS I-901 Fee ($350)',
        description:
          'Visit FMJfee.com and pay the $350 USD SEVIS I-901 fee using a credit card or international wire. Print the official Form I-901 Payment Confirmation Receipt with barcode, which is mandatory for your embassy interview.',
      },
      {
        stepNumber: 3,
        title: 'Complete Online Nonimmigrant Visa Application (Form DS-160)',
        description:
          'Access CEAC (ceac.state.gov/genniv) and complete Form DS-160. Select your interview location (Islamabad or Karachi). Accurately input education history, travel history, and SEVIS information. Upload a 2x2 inch compliant digital photo. Print the DS-160 Confirmation Page with barcode.',
      },
      {
        stepNumber: 4,
        title: 'Create Scheduling Profile & Pay Consular Fees ($185 MRV + $250 Visa Integrity Fee)',
        description:
          'Create a profile on the U.S. Visa Service portal for Pakistan. Pay the consular MRV fee ($185 USD / PKR ~51,430) and the mandatory $250 USD (PKR ~69,500) Visa Integrity Fee enacted under OBBBA (refundable to the applicant upon timely departure or compliant change of status). Total consular fees: $435 USD (PKR ~120,930), in addition to the $350 SEVIS fee.',
      },
      {
        stepNumber: 5,
        title: 'Schedule In-Person Consular Visa Interview',
        description:
          'Book your interview appointment at the U.S. Embassy in Islamabad or U.S. Consulate General in Karachi. If appointment wait times exceed your program start date, book the earliest available slot and submit an Expedited / Emergency Appointment Request via the portal (eligible within 60 days of program start).',
      },
      {
        stepNumber: 6,
        title: 'Attend the In-Person Consular Interview',
        description:
          'Arrive 30 minutes before your scheduled appointment. Hand over electronic devices outside. Undergo security screening, ten-print digital fingerprint scanning, and proceed to the consular officer interview window. Interviews last 2 to 4 minutes and focus on your academic purpose and return intent.',
      },
      {
        stepNumber: 7,
        title: 'Passport Collection via Courier',
        description:
          'If approved, the consular officer will retain your passport. You will receive an SMS/email notification within 5 to 7 business days to collect your stamped passport from your designated courier drop-off location (e.g. American Express / Gerry’s in Pakistan).',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'Embassy of the United States of America - Consular Section',
        address: 'Diplomatic Enclave, Ramna 5, Islamabad, Pakistan',
        servicesOffered: ['In-Person Consular Interviews', 'Biometric Fingerprint Collection', 'American Citizen Services'],
      },
      {
        city: 'Karachi',
        centreName: 'Consulate General of the United States of America',
        address: 'Plot 3-5, New TSP 61, Old Clifton, Karachi, Pakistan',
        servicesOffered: ['In-Person Consular Interviews', 'Biometric Fingerprint Collection', 'Nonimmigrant Visa Adjudication'],
      },
    ],
    interviewGuidelines: {
      isMandatory: true,
      description:
        'In-person consular interviews are statutorily mandatory for all applicants aged 14 to 79. Under INA §214(b), the consular officer is legally required to assume you intend to stay permanently in the United States unless you convince them otherwise through confident, articulate verbal answers. Consular interviews typically last between 90 and 180 seconds; officers make decisions based primarily on verbal engagement rather than reviewing paper documents.',
      tips: [
        'Concisely explain your chosen university and degree within the first 15 seconds without reciting canned scripts.',
        'Articulate specific career prospects in Pakistan: name 2–3 target employers (e.g. Systems Ltd, Jazz, Engro, NUST, Fatima Group) and projected domestic salary levels upon graduation.',
        'Never state an intent to work in the US permanently; frame OPT strictly as practical internship experience to bring back to the Pakistani economy.',
        'If receiving an assistantship (GTA/GRA) or fellowship (Fulbright), highlight that your tuition is fully funded and explain your advisor’s research lab.',
        'Be completely honest about any relatives in the US; consular records reveal familial relationships instantly.',
        'Dress in professional business attire, maintain natural eye contact, speak loud and clear through the intercom microphone.',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Original Form I-20 (Signed by DSO and Student)',
        description: 'Official Certificate of Eligibility with student signature and Designated School Official endorsement.',
        mandatory: true,
        sources: [
          {
            title: 'U.S. Department of State - Student Visa Documents',
            url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
            publisher: 'U.S. Department of State',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'SEVIS I-901 Fee Payment Receipt ($350)',
        description: 'Official payment receipt generated from FMJfee.com verifying registration in the Student and Exchange Visitor Information System.',
        mandatory: true,
        sources: [
          {
            title: 'FMJfee.com Official Portal',
            url: 'https://www.fmjfee.com/',
            publisher: 'U.S. Immigration and Customs Enforcement (ICE)',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'DS-160 Nonimmigrant Visa Confirmation Page',
        description: 'Printed confirmation sheet featuring applicant photo, personal details, and scannable CEAC barcode.',
        mandatory: true,
        sources: [
          {
            title: 'CEAC Nonimmigrant Visa Application Portal',
            url: 'https://ceac.state.gov/genniv/',
            publisher: 'U.S. Department of State',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Valid Original Passport',
        description: 'Passport valid for at least 6 months beyond intended period of stay in the US, with at least two blank visa pages.',
        mandatory: true,
        sources: [
          {
            title: 'U.S. Department of State - Travel Documentation Requirements',
            url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
            publisher: 'U.S. Department of State',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'U.S. Visa Appointment Confirmation Letter',
        description: 'Printed appointment confirmation letter displaying barcode, UID, and appointment date/time.',
        mandatory: true,
        sources: [
          {
            title: 'U.S. Visa Scheduling Service Pakistan',
            url: 'https://www.ustraveldocs.com/',
            publisher: 'U.S. Department of State Service Partner',
            publisherType: 'visa_centre',
          },
        ],
      },
      {
        documentName: 'Two U.S. Visa Specification Photographs',
        description: '2 x 2 inches (51 x 51 mm) color photographs taken within the last 6 months against a plain white background, showing full face with neutral expression.',
        mandatory: true,
        sources: [
          {
            title: 'U.S. Department of State - Photograph Requirements',
            url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html',
            publisher: 'U.S. Department of State',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Bank Statements & Liquid Financial Proof (Matching Form I-20)',
        description: 'Original bank statements of sponsor covering 6 months, account maintenance certificate, fixed deposit receipts, and income tax returns proving funds equal or exceed Box 7 on Form I-20.',
        mandatory: true,
        sources: [
          {
            title: 'DHS Study in the States - Financial Ability',
            url: 'https://studyinthestates.dhs.gov/',
            publisher: 'U.S. Department of Homeland Security (DHS)',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Academic Transcripts & Degrees',
        description: 'Official university transcripts, degree certificates, and Intermediate / A-Level mark sheets attested by HEC and IBCC Pakistan.',
        mandatory: true,
        sources: [
          {
            title: 'HEC Degree Verification System',
            url: 'https://hec.gov.pk',
            publisher: 'Higher Education Commission Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Standardized Test Scores (GRE / GMAT / SAT / IELTS / TOEFL)',
        description: 'Official test scorecards matching credentials submitted during the university admission evaluation.',
        mandatory: false,
        sources: [
          {
            title: 'USEFP - Testing Services in Pakistan',
            url: 'https://www.usefp.org/',
            publisher: 'USEFP Pakistan',
            publisherType: 'portal',
          },
        ],
      },
      {
        documentName: 'Detailed Academic CV & Research Plan (Mandatory for STEM/PhD)',
        description: 'Comprehensive curriculum vitae, list of publications, advisor research abstract, and statement of intended study (crucial for clearing INA §221(g) administrative processing).',
        mandatory: false,
        sources: [
          {
            title: 'U.S. Department of State - Administrative Processing',
            url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html',
            publisher: 'U.S. Department of State',
            publisherType: 'government',
          },
        ],
      },
    ],
  },

  // 4. Financial Requirements & Proof of Funds
  financialRequirements: {
    livingCostRequirementPerYear: 18000,
    currencyCode: 'USD',
    approxLivingCostPkr: 5004000,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: 'Liquid Bank Account Statements (Checking / Savings)',
        details:
          'Original, bank-certified statements covering 6 continuous months for the student or parents/family sponsors. Must demonstrate unencumbered cash balances that readily cover the total 1-year Cost of Attendance on Form I-20 (Tuition + Living + Health Insurance). Avoid large sudden unseasoned deposits right before the interview.',
        isPreferred: true,
      },
      {
        methodName: 'Graduate Teaching / Research Assistantship (GTA / GRA)',
        details:
          'Official university funding award letter specifying full tuition remission and monthly stipend ($1,500–$2,800/month). When total institutional funding covers Box 7 on Form I-20, no personal family bank statement is necessary.',
        isPreferred: true,
      },
      {
        methodName: 'Government or Fellowship Sponsorship (e.g. Fulbright)',
        details:
          'Official sponsorship letter from USEFP / IIE or international donor organizations guaranteeing full tuition, living allowance, and health insurance.',
        isPreferred: true,
      },
      {
        methodName: 'Fixed Term Deposits (Certificates of Deposit / CD)',
        details:
          'Fixed deposits with recognized Pakistani scheduled banks accompanied by a bank certificate verifying that the funds are mature, unencumbered, and can be liquidated immediately upon request.',
        isPreferred: false,
      },
    ],
    bankStatementHoldingPeriodDays: 180,
    visaApplicationFee: {
      amount: 185,
      currency: 'USD',
      approxPkr: 51430,
    },
    otherSurcharges: [
      {
        name: 'Visa Integrity Fee (OBBBA Statutory Surcharge)',
        amount: 250,
        currency: 'USD',
        approxPkr: 69500,
        mandatory: true,
        notes: 'Mandatory statutory fee enacted under the Omnibus Budget Bill (OBBBA) effective October 1, 2025. Assessed for nonimmigrant visa processing; refundable to the applicant upon timely departure or compliant change of status.',
      },
      {
        name: 'SEVIS I-901 Statutory Fee',
        amount: 350,
        currency: 'USD',
        approxPkr: 97300,
        mandatory: true,
        notes: 'Mandatory fee paid directly to the U.S. Department of Homeland Security (DHS) via FMJfee.com prior to scheduling the consular interview.',
      },
      {
        name: 'Mandatory University Health Insurance (Annual)',
        amount: 2500,
        currency: 'USD',
        approxPkr: 695000,
        mandatory: true,
        notes: 'Required by nearly all U.S. universities. Billed directly on the student term bill ($1,800–$3,500/year depending on state and campus plan).',
      },
    ],
    sources: [
      {
        title: 'U.S. Department of State - Visa Fees',
        url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html',
        publisher: 'U.S. Department of State',
        publisherType: 'government',
      },
      {
        title: 'DHS SEVP - SEVIS I-901 Fee',
        url: 'https://www.fmjfee.com/',
        publisher: 'U.S. Immigration and Customs Enforcement (ICE)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / FSc / ICS) with minimum 70%–80% overall grade, or British A-Levels (minimum 3 subjects with grades of ABB or better). Competitive universities typically expect SAT scores (1350–1550) or ACT scores (29–34), though many institutions maintain test-optional policies.',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Hons / BE / BBA comprising 16 years of formal education) from an HEC-recognized university with a minimum cumulative GPA of 3.0/4.0. Old 2-year Pakistani BA/BSc degrees (14 years of education) are strictly ineligible for direct entry into U.S. master programs without completing a 2-year Pakistani Master degree (MA/MSc) first. GRE General Test scores (315–330) are strongly recommended or required for top engineering, computer science, and data programs.',
    doctoralRequirements:
      '18 years of formal education (MS / MPhil with thesis) or exceptional 4-year BS graduates with published research papers. Requires 3 academic letters of recommendation (LORs), a polished Statement of Purpose (SOP), GRE scores (where required), and research synergy with departmental faculty.',
    pakistaniEquivalenceGuide: {
      matriculation: 'Evaluated as equivalent to U.S. Grade 10 secondary school education; requires IBCC attestation.',
      intermediateFSc: 'Evaluated as equivalent to U.S. High School Diploma (Grade 12). FSc Pre-Engineering and Pre-Medical graduates qualify for direct undergraduate freshman admissions.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees are treated as associate degree equivalents (approximately 60 U.S. semester credit hours) and do not meet the 16-year requirement for U.S. master entry.',
      sixteenYearBachelors: '4-year BS / BE / BBA degrees from HEC-accredited Pakistani universities are universally recognized as equivalent to U.S. 4-year Bachelor degrees.',
      studyGapsAcceptability: 'U.S. universities and consular officers readily accept study gaps of 2 to 7 years provided the candidate demonstrates continuous, relevant corporate or research employment.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Attestation of all Bachelor, Master, and PhD degrees and official academic transcripts.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Attestation of SSC (Matric) and HSSC (Intermediate / FSc) certificates and mark sheets.',
        link: 'https://ibcc.edu.pk',
      },
      {
        bodyName: 'World Education Services (WES) / Educational Credential Evaluators (ECE)',
        mandate: 'Course-by-course academic credential evaluations required by select U.S. graduate admission committees.',
        link: 'https://www.wes.org/',
      },
    ],
    applicationPortals: [
      {
        portalName: 'The Common Application (Common App)',
        url: 'https://www.commonapp.org/',
        scope: 'Primary centralized undergraduate application portal serving over 1,000 U.S. colleges and universities.',
      },
      {
        portalName: 'Direct University Graduate Admissions Portals',
        url: 'https://studyinthestates.dhs.gov/school-search',
        scope: 'Used for Master and PhD applications across all U.S. universities (e.g. Slate application systems).',
      },
    ],
    deadlinesSummary:
      'Fall Intake: Early Action / Early Decision deadlines are November 1 – November 15; Regular Decision deadlines range from December 15 to February 1. Spring Intake: Deadlines range from August 1 to October 15.',
    sources: [
      {
        title: 'EducationUSA Pakistan - U.S. Higher Education Advising Network',
        url: 'https://www.usefp.org/',
        publisher: 'USEFP / EducationUSA',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 6. English and Local Language Requirements
  languageRequirements: {
    acceptedEnglishTests: [
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '80 - 100',
        subScoreRequirements: 'Minimum 20–22 in each individual section (Reading, Listening, Speaking, Writing). Top research institutions expect 100+ overall.',
      },
      {
        testName: 'IELTS Academic',
        minScoreOverall: '6.5 - 7.5',
        subScoreRequirements: 'Minimum 6.0 in all bands; competitive graduate programs mandate 7.0 overall with no band below 6.5.',
      },
      {
        testName: 'Duolingo English Test (DET)',
        minScoreOverall: '110 - 130',
        subScoreRequirements: 'Accepted by over 2,000 U.S. higher education institutions; confirm departmental policies.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '58 - 68',
        subScoreRequirements: 'Minimum 55 in each communicative skill band.',
      },
    ],
    moiWaiverAcceptability:
      'Available at select U.S. universities if the applicant graduated from an English-medium Pakistani institution. However, U.S. consular officers evaluate English proficiency verbally in real-time during the consular visa interview. Inability to answer questions fluently in English triggers an immediate INA §214(b) visa refusal regardless of university admission waivers.',
    localLanguageImportance: {
      study: 'English is the exclusive language of instruction across virtually all accredited U.S. colleges and universities.',
      dailyLife: 'English is universal across all 50 states. Spanish is widely spoken as a secondary language in southern and metropolitan states (California, Texas, Florida, New York).',
      partTimeJobs: 'Fluent English is essential for all on-campus student employment (dining, library, tutoring, lab administration).',
      postStudyPR: 'Professional, articulate corporate English is mandatory for technical interviews, H-1B employment sponsorships, and corporate promotions.',
    },
    localLanguageTests: [],
    sources: [
      {
        title: 'EducationUSA - Standardized Tests Guidelines',
        url: 'https://www.usefp.org/',
        publisher: 'USEFP / EducationUSA',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities
  topUniversities: [
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      city: 'Cambridge, Massachusetts',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 1,
      },
      strongPrograms: ['Computer Science & AI', 'Mechanical Engineering', 'Physics', 'Economics', 'Sloan School of Management'],
      avgTuitionPerYearLocal: 60150,
      currency: 'USD',
      approxTuitionPkr: 16721700,
      internationalStudentsPercentage: '33%',
      officialWebsite: 'https://www.mit.edu/',
      sources: [
        {
          title: 'MIT Official Portal',
          url: 'https://www.mit.edu/',
          publisher: 'MIT',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Harvard University',
      city: 'Cambridge, Massachusetts',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 4,
      },
      strongPrograms: ['Business (HBS)', 'Law (HLS)', 'Medicine (HMS)', 'Public Policy (HKS)', 'Biomedical Data Science'],
      avgTuitionPerYearLocal: 59000,
      currency: 'USD',
      approxTuitionPkr: 16402000,
      internationalStudentsPercentage: '26%',
      officialWebsite: 'https://www.harvard.edu/',
      sources: [
        {
          title: 'Harvard University Official Site',
          url: 'https://www.harvard.edu/',
          publisher: 'Harvard University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Stanford University',
      city: 'Stanford, California',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 6,
      },
      strongPrograms: ['Computer Science', 'Electrical Engineering', 'Stanford GSB (MBA)', 'Artificial Intelligence', 'Clean Energy'],
      avgTuitionPerYearLocal: 62480,
      currency: 'USD',
      approxTuitionPkr: 17369440,
      internationalStudentsPercentage: '24%',
      officialWebsite: 'https://www.stanford.edu/',
      sources: [
        {
          title: 'Stanford University Official Site',
          url: 'https://www.stanford.edu/',
          publisher: 'Stanford University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'California Institute of Technology (Caltech)',
      city: 'Pasadena, California',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 10,
      },
      strongPrograms: ['Astrophysics', 'Quantum Computing', 'Chemical Engineering', 'Planetary Sciences (JPL)'],
      avgTuitionPerYearLocal: 63250,
      currency: 'USD',
      approxTuitionPkr: 17583500,
      internationalStudentsPercentage: '34%',
      officialWebsite: 'https://www.caltech.edu/',
      sources: [
        {
          title: 'Caltech Official Portal',
          url: 'https://www.caltech.edu/',
          publisher: 'Caltech',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Pennsylvania (UPenn)',
      city: 'Philadelphia, Pennsylvania',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 11,
      },
      strongPrograms: ['Wharton School of Business', 'Biotechnology', 'Computer & Information Science', 'Health Economics'],
      avgTuitionPerYearLocal: 66100,
      currency: 'USD',
      approxTuitionPkr: 18375800,
      internationalStudentsPercentage: '22%',
      officialWebsite: 'https://www.upenn.edu/',
      sources: [
        {
          title: 'UPenn Official Site',
          url: 'https://www.upenn.edu/',
          publisher: 'University of Pennsylvania',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of California, Berkeley (UC Berkeley)',
      city: 'Berkeley, California',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 12,
      },
      strongPrograms: ['EECS (Electrical Engineering & CS)', 'Haas MBA', 'Chemistry', 'Data Science', 'Economics'],
      avgTuitionPerYearLocal: 45000,
      currency: 'USD',
      approxTuitionPkr: 12510000,
      internationalStudentsPercentage: '19%',
      officialWebsite: 'https://www.berkeley.edu/',
      sources: [
        {
          title: 'UC Berkeley Admissions',
          url: 'https://www.berkeley.edu/',
          publisher: 'University of California, Berkeley',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Columbia University',
      city: 'New York, New York',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 34,
      },
      strongPrograms: ['Columbia Business School', 'SIPA (International Affairs)', 'Biomedical Informatics', 'Computer Engineering'],
      avgTuitionPerYearLocal: 65500,
      currency: 'USD',
      approxTuitionPkr: 18209000,
      internationalStudentsPercentage: '36%',
      officialWebsite: 'https://www.columbia.edu/',
      sources: [
        {
          title: 'Columbia University Portal',
          url: 'https://www.columbia.edu/',
          publisher: 'Columbia University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of California, Los Angeles (UCLA)',
      city: 'Los Angeles, California',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 42,
      },
      strongPrograms: ['Samueli Engineering', 'Anderson School of Management', 'Film & Television', 'Life Sciences'],
      avgTuitionPerYearLocal: 44500,
      currency: 'USD',
      approxTuitionPkr: 12371000,
      internationalStudentsPercentage: '17%',
      officialWebsite: 'https://www.ucla.edu/',
      sources: [
        {
          title: 'UCLA Official Portal',
          url: 'https://www.ucla.edu/',
          publisher: 'UCLA',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Michigan, Ann Arbor',
      city: 'Ann Arbor, Michigan',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 44,
      },
      strongPrograms: ['Ross School of Business', 'Aerospace Engineering', 'Robotics', 'Public Health', 'Information Science'],
      avgTuitionPerYearLocal: 55000,
      currency: 'USD',
      approxTuitionPkr: 15290000,
      internationalStudentsPercentage: '18%',
      officialWebsite: 'https://umich.edu/',
      sources: [
        {
          title: 'University of Michigan Official Site',
          url: 'https://umich.edu/',
          publisher: 'University of Michigan',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Carnegie Mellon University (CMU)',
      city: 'Pittsburgh, Pennsylvania',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 58,
      },
      strongPrograms: ['School of Computer Science', 'Robotics Institute', 'Tepper Business', 'Software Engineering'],
      avgTuitionPerYearLocal: 61500,
      currency: 'USD',
      approxTuitionPkr: 17097000,
      internationalStudentsPercentage: '44%',
      officialWebsite: 'https://www.cmu.edu/',
      sources: [
        {
          title: 'Carnegie Mellon University Portal',
          url: 'https://www.cmu.edu/',
          publisher: 'Carnegie Mellon University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Texas at Austin',
      city: 'Austin, Texas',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 66,
      },
      strongPrograms: ['Cockrell Engineering', 'McCombs MBA', 'Computer Science', 'Petroleum Engineering'],
      avgTuitionPerYearLocal: 41000,
      currency: 'USD',
      approxTuitionPkr: 11398000,
      internationalStudentsPercentage: '12%',
      officialWebsite: 'https://www.utexas.edu/',
      sources: [
        {
          title: 'UT Austin Official Portal',
          url: 'https://www.utexas.edu/',
          publisher: 'University of Texas at Austin',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Georgia Institute of Technology (Georgia Tech)',
      city: 'Atlanta, Georgia',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 114,
      },
      strongPrograms: ['Industrial & Systems Engineering', 'Biomedical Engineering', 'Cybersecurity', 'Electrical Engineering'],
      avgTuitionPerYearLocal: 33000,
      currency: 'USD',
      approxTuitionPkr: 9174000,
      internationalStudentsPercentage: '28%',
      officialWebsite: 'https://www.gatech.edu/',
      sources: [
        {
          title: 'Georgia Tech Official Site',
          url: 'https://www.gatech.edu/',
          publisher: 'Georgia Institute of Technology',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Fulbright Foreign Student Program (Pakistan)',
      grantingBody: 'U.S. Department of State & USEFP',
      coverageType: 'Full Funding (Tuition, living stipend, airfare, textbooks, health insurance)',
      eligibility:
        'Pakistani citizens residing in Pakistan with 16 years of formal education (for Master’s) or 18 years (for PhD). Evaluated on academic merit, leadership, and a mandatory commitment to return to Pakistan for at least 2 years under the INA §212(e) rule.',
      deadlineMonths: 'April – May (annual cycle administered by USEFP)',
      officialLink: 'https://www.usefp.org/',
      sources: [
        {
          title: 'USEFP Fulbright Program for Pakistan',
          url: 'https://www.usefp.org/',
          publisher: 'United States Educational Foundation in Pakistan (USEFP)',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Graduate Teaching & Research Assistantships (GTA / GRA)',
      grantingBody: 'Individual U.S. Academic Departments & Faculty PIs',
      coverageType: 'Full / Partial Tuition Remission + Monthly Living Stipend ($1,500 – $2,800/mo)',
      eligibility:
        'Awarded competitively based on GRE scores, prior research publications, programming skills, and strong faculty recommendations in STEM, business, and humanities graduate programs.',
      deadlineMonths: 'December – February (concurrent with graduate application)',
      officialLink: 'https://studyinthestates.dhs.gov/',
      sources: [
        {
          title: 'DHS Study in the States - Graduate Assistantships',
          url: 'https://studyinthestates.dhs.gov/',
          publisher: 'U.S. Department of Homeland Security',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Hubert H. Humphrey Fellowship Program',
      grantingBody: 'U.S. Department of State',
      coverageType: 'Full tuition, living allowance, travel, and professional development grant',
      eligibility:
        'Mid-career Pakistani professionals with at least 5 years of public service leadership and demonstrated policy commitment.',
      deadlineMonths: 'June – July (annual)',
      officialLink: 'https://www.usefp.org/',
      sources: [
        {
          title: 'USEFP Humphrey Fellowship Overview',
          url: 'https://www.usefp.org/',
          publisher: 'USEFP Pakistan',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: '20 hours per week on-campus (Off-campus work is strictly prohibited during the first academic year)',
    holidayHours: 'Up to 40 hours per week on-campus during official school vacations (summer break, winter break)',
    minimumWageLocal: '$7.25 / hour (Federal minimum wage; state minimum wages range up to $16.00–$17.00/hr in California, New York, Washington)',
    averageStudentWageLocal: '$12.00 - $18.00 / hour for campus dining, library, tutoring, and departmental lab positions',
    regulationsSummary:
      'F-1 students may only work on-campus during their first academic year (authorized by DSO without USCIS filing). After one full academic year (9 months), students become eligible for Curricular Practical Training (CPT) for off-campus internships directly tied to course credit. Unauthorized off-campus employment constitutes a severe status violation resulting in immediate termination of the SEVIS record and required departure from the U.S.',
    sources: [
      {
        title: 'U.S. Citizenship and Immigration Services - Students and Employment',
        url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment',
        publisher: 'U.S. Citizenship and Immigration Services (USCIS)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'INA §214(b) - Failure to Overcome Immigrant Intent',
      description:
        'The applicant failed to convince the consular officer that they maintain strong, unbreakable social, economic, and familial ties to Pakistan that will compel them to return home upon completing their studies.',
      howToAvoid:
        'Consular interviews last only 2–3 minutes. Answer immediately with concise, specific career roadmaps: name 3 prospective employers in Pakistan (such as Systems Ltd, Engro, NUST, Jazz), cite typical domestic salary scales for returnees, and articulate why this specific degree cannot be duplicated in Pakistan. Never express an intention to settle permanently in the US.',
      sources: [
        {
          title: 'U.S. Department of State - INA Section 214(b) Denials',
          url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Inability to Articulate Academic Purpose & University Fit',
      description:
        'Vague, rehearsed answers regarding why the university was selected, inability to explain the curriculum or professors, or applying to low-tier institutions that do not logically match previous academic qualifications.',
      howToAvoid:
        'Master the specifics of your academic syllabus: explain the precise concentration, elective tracks, research labs, or faculty publications that attracted you. Explain what alternative Pakistani or international institutions you considered and why this particular program best serves your professional trajectory.',
      sources: [
        {
          title: 'EducationUSA - Visa Preparation Guidance',
          url: 'https://www.usefp.org/',
          publisher: 'USEFP Pakistan',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'INA §221(g) - Administrative Processing (STEM / TAL Scrutiny)',
      description:
        'The application is put on temporary hold for specialized security advisory opinions (SAO), typically triggered by sensitive technology research areas on the Technology Alert List (TAL) such as advanced AI, nuclear physics, biotechnology, or robotics.',
      howToAvoid:
        'Ensure you carry a clean, detailed academic CV, a complete list of research publications, and a concise 1-page research summary letter signed by your prospective U.S. academic advisor explaining that your work is unclassified fundamental research.',
      sources: [
        {
          title: 'U.S. Department of State - Administrative Processing Information',
          url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'INA §212(a)(6)(C)(i) - Fraud & Willful Misrepresentation',
      description:
        'Presenting fraudulent financial records, counterfeit educational documents, or failing to declare prior US visa refusals or criminal history on Form DS-160.',
      howToAvoid:
        'Maintain 100% integrity. The U.S. government maintains biometric and fraud detection units in Pakistan. Non-disclosure of past visa refusals or submission of altered bank statements triggers an irreversible lifetime statutory bar from entering the United States.',
      sources: [
        {
          title: 'U.S. Department of State - Ineligibilities and Waivers',
          url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'Under U.S. immigration law, there is no administrative appeal mechanism for nonimmigrant visa refusals under INA §214(b). If refused, an applicant may reapply by submitting a new DS-160, paying a new $185 MRV fee, and securing a new interview appointment. However, consular officers will rarely reverse a prior refusal unless the applicant demonstrates significant, materially altered circumstances (such as an upgraded university admission, new full assistantship funding, or strengthened financial ties).',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: 'Up to 3 years total (12 Months Initial Post-Completion OPT + 24 Months STEM OPT Extension)',
    workPermitType: 'Employment Authorization Document (EAD card under Form I-765)',
    prPathwaysSummary:
      'Statutory Rule: The F-1 visa is strictly a nonimmigrant classification; there is NO direct pathway from F-1 student status or OPT to lawful permanent residence (Green Card). International graduates wishing to settle permanently must transition via employer-sponsored dual-intent status: (1) Post-Completion OPT (12 months) and STEM OPT extension (24 months); (2) Employer sponsorship for the H-1B Specialty Occupation visa (annual cap lottery with 20,000 slots reserved for U.S. advanced degree holders); (3) Employer PERM Labor Certification with the U.S. Department of Labor; (4) Form I-140 Immigrant Petition and Form I-485 Adjustment of Status under employment categories (EB-2 Advanced Degree or EB-3 Skilled Worker), or self-petitioned EB-2 NIW (National Interest Waiver). This entire sequence typically takes 3 to 7+ years of continuous status maintenance.',
    permanentResidencyTimeline:
      'No direct PR route on F-1. Employer-sponsored Green Card (H-1B → EB-2/EB-3) typically takes 3–7+ years.',
    citizenshipTimeline:
      'After obtaining Permanent Residence (Green Card), continuous permanent lawful residence in the United States for at least 5 years (or 3 years if married to a U.S. citizen) qualifies an individual to apply for U.S. Naturalization (Form N-400). Time spent on F-1 student status or OPT does not count toward the permanent residency requirement.',
    sources: [
      {
        title: 'USCIS - Optional Practical Training (OPT) for F-1 Students',
        url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students',
        publisher: 'U.S. Citizenship and Immigration Services (USCIS)',
        publisherType: 'immigration_authority',
      },
      {
        title: 'USCIS - STEM OPT Extension Guidelines',
        url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt',
        publisher: 'U.S. Citizenship and Immigration Services (USCIS)',
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
      'Strictly prohibited for F-2 spouses. Under 8 CFR §214.2(f)(15)(i), an F-2 spouse is legally barred from engaging in any employment in the United States under any circumstances. However, an F-2 spouse is permitted to enroll in part-time recreational or avocational courses. (Note: Spouses of J-1 exchange visitors holding J-2 status may apply for USCIS work authorization via Form I-765).',
    childrenSchooling:
      'Minor unmarried children holding F-2 status are legally entitled to enroll in full-time public primary and secondary education (Kindergarten through Grade 12) without requiring an independent student visa.',
    financialRequirementsPerDependent:
      'Universities typically require an additional liquid financial guarantee of $5,000 to $7,000 USD per year for an accompanying spouse, and $3,000 to $5,000 USD per year for each dependent child, itemized on Box 7 of each dependent’s Form I-20.',
    sources: [
      {
        title: 'DHS Study in the States - Dependents of F-1 Students',
        url: 'https://studyinthestates.dhs.gov/students/dependents',
        publisher: 'U.S. Department of Homeland Security',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2023 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2023-06-17',
      headline: 'Nonimmigrant Visa (MRV) Application Fee Increased to $185',
      impact:
        'The Department of State raised the consular MRV application fee for student and exchange visitor visas (F, M, J categories) from $160 to $185 USD worldwide.',
      officialSourceUrl: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2023-11-01',
      headline: 'Permanent Authorization of Electronic Form I-20 Transmission',
      impact:
        'SEVP permanently codified regulations permitting Designated School Officials (DSOs) to electronically sign and transmit Form I-20 via email or secure student portals, eliminating the requirement for physical mail courier delivery.',
      officialSourceUrl: 'https://studyinthestates.dhs.gov/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-02-26',
      headline: 'USCIS Premium Processing Fee Adjusted for Form I-765 (OPT)',
      impact:
        'USCIS increased the premium processing fee for Form I-765 (F-1 Optional Practical Training) to $1,685 USD (under Form I-907), guaranteeing adjudication within 30 calendar days for applicants facing urgent employment start dates.',
      officialSourceUrl: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-07-15',
      headline: 'DHS STEM Designated Degree Program List Expanded',
      impact:
        'The Department of Homeland Security added specialized emerging academic disciplines (including Landscape Architecture, Developmental and Adolescent Psychology, and Composite Materials) to the qualifying STEM list, granting graduates 24 additional months of OPT work authorization.',
      officialSourceUrl: 'https://studyinthestates.dhs.gov/eligible-cip-codes-for-the-stem-opt-extension',
      lastVerified: '2026-10-04',
    },
    {
      date: '2025-01-01',
      headline: 'Beneficiary-Centric H-1B Registration Selection Codified',
      impact:
        'USCIS implemented the beneficiary-centric selection process for the annual H-1B cap lottery, ensuring each candidate is entered only once based on their passport number regardless of how many job offers or registrations are submitted, curbing lottery manipulation and improving selection odds for legitimate international student graduates.',
      officialSourceUrl: 'https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in the United States
  studentLiving: {
    accommodationTypes: [
      {
        type: 'On-Campus Residence Halls (Dormitories)',
        avgMonthlyCostLocal: 1100,
        currencyCode: 'USD',
        approxCostPkr: 305800,
        description: 'Furnished shared rooms typically paired with university dining meal plans. Mandatory for first-year undergraduate freshmen at many U.S. campuses.',
      },
      {
        type: 'Off-Campus Shared Student Apartment',
        avgMonthlyCostLocal: 650,
        currencyCode: 'USD',
        approxCostPkr: 180700,
        description: 'Private bedroom in a 2–4 bedroom shared apartment in surrounding campus transit corridors. Most cost-effective option for Pakistani graduate students.',
      },
      {
        type: 'Private 1-Bedroom Apartment / Studio',
        avgMonthlyCostLocal: 1400,
        currencyCode: 'USD',
        approxCostPkr: 389200,
        description: 'Self-contained private apartment. Averages $900–$1,200 in the Midwest/South, rising to $2,200–$2,800 in metropolitan New York, Boston, or the Bay Area.',
      },
    ],
    groceriesAndHalalFood:
      'Halal food and specialty South Asian grocery stores (featuring Pakistani basmati rice, Shan masalas, halal hand-slaughtered poultry and meat) are readily available across all major U.S. metropolitan areas and university towns. Prominent national supermarket chains (Costco, Trader Joe’s, Whole Foods, Kroger) stock certified halal products, and campus dining halls increasingly feature designated halal certified stations.',
    safetyAndCrime:
      'U.S. university campuses are governed under federal Clery Act safety compliance. Institutions provide 24/7 campus police escorts, blue emergency call towers, real-time emergency text alert systems, and nightly campus shuttle van services.',
    climateAndWeather:
      'Varied geographic climate. Northeast and Midwest (Boston, Chicago, Michigan) experience cold, snowy winters (-10°C to 2°C) requiring insulated thermal wear and heavy down coats. Southern and Southwestern states (Texas, California, Florida, Arizona) enjoy warm, sunny weather year-round with temperatures ranging from 15°C in winter to 38°C in peak summer.',
    pakistaniCommunityPresence:
      'Over 600,000 Pakistani-Americans reside in the United States. Major community hubs include the New York-New Jersey tri-state area, Greater Houston and Dallas (Texas), Chicago (Devon Avenue), Northern and Southern California, and the Washington D.C. metropolitan area. Virtually every major university hosts an active Pakistani Student Association (PSA) organizing cultural galas, cricket tournaments, and community dinners.',
    simAndBankingRecommended: {
      simProviders: [
        'Mint Mobile (Cost-effective T-Mobile network plans popular with students)',
        'T-Mobile (Generous international texting and data packages)',
        'AT&T / Cricket Wireless',
        'Visible (Unlimited Verizon network plans)',
      ],
      digitalBanks: [
        'Chase Bank (Chase College Checking with no monthly fees for up to 5 years)',
        'Bank of America (Student Advantage Banking)',
        'Discover Bank / Capital One (Zero-fee student savings and credit cards)',
        'Deserve EDU / Discover it Student Chrome (Credit cards available without requiring a U.S. Social Security Number to build early credit history)',
      ],
    },
    transportationStudentPerks:
      'Most university towns operate free or highly subsidized campus bus networks connecting residential areas with academic departments upon showing student ID. Intercity student discounts are available via Amtrak rail and intercity bus lines (Megabus, FlixBus).',
    sources: [
      {
        title: 'College Board - Living Expense Estimations',
        url: 'https://research.collegeboard.org/trends/college-pricing',
        publisher: 'College Board',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'U.S. Port of Entry Clearance & Form I-94 Electronic Arrival Record',
      description:
        'Present your valid passport with F-1 visa foil and original Form I-20 to the U.S. Customs and Border Protection (CBP) officer at your port of entry. The officer will verify your SEVIS record and admit you under Duration of Status (D/S). Immediately retrieve and print your electronic Form I-94 arrival record from i94.cbp.dhs.gov to verify that you were admitted under F-1 D/S status.',
      timeline: 'Immediately upon clearing U.S. airport immigration',
      mandatory: true,
      officialPortalOrGuide: 'https://i94.cbp.dhs.gov/',
    },
    {
      stepNumber: 2,
      title: 'Mandatory International Student SEVIS Check-In with DSO',
      description:
        'Report to your university’s International Student and Scholar Services (ISSS) office. Submit your local U.S. residential address, copy of F-1 visa, and Form I-94 so your Designated School Official (DSO) can officially activate your SEVIS record to "ACTIVE" status.',
      timeline: 'Within first 3 to 10 days of arrival (mandatory before classes begin)',
      mandatory: true,
      officialPortalOrGuide: 'https://studyinthestates.dhs.gov/',
    },
    {
      stepNumber: 3,
      title: 'Open U.S. Student Bank Account',
      description:
        'Visit a campus branch (Chase, Bank of America, or local credit union) with your passport, Form I-20, Form I-94, and university admission letter to open a student checking account and obtain a debit card. No SSN is required to open a student bank account.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://studyinthestates.dhs.gov/',
    },
    {
      stepNumber: 4,
      title: 'Apply for U.S. Social Security Number (SSN) (If Employed On-Campus)',
      description:
        'If you secure an on-campus student job or graduate assistantship, obtain an employment letter from your employer and a DSO endorsement. Visit the local Social Security Administration (SSA) office with your passport, I-20, and I-94 to receive your 9-digit SSN.',
      timeline: 'Within first 30 days once campus job offer is secured',
      mandatory: false,
      officialPortalOrGuide: 'https://www.ssa.gov/ssnumber/',
    },
    {
      stepNumber: 5,
      title: 'Enroll in Mandatory University Health Insurance Plan',
      description:
        'Confirm active coverage under the university student health insurance plan and complete mandatory immunizations / TB screening at the campus health center.',
      timeline: 'During campus orientation week',
      mandatory: true,
      officialPortalOrGuide: 'https://studyinthestates.dhs.gov/',
    },
    {
      stepNumber: 6,
      title: 'Collect Campus Student ID Card & Local Mobile SIM',
      description:
        'Pick up your official student university ID card and activate a U.S. mobile plan (Mint Mobile, T-Mobile, or AT&T).',
      timeline: 'First 3 to 5 days',
      mandatory: true,
      officialPortalOrGuide: 'https://studyinthestates.dhs.gov/',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'What is Section 214(b) and how can I avoid being rejected under it?',
      answer:
        'Section 214(b) of the U.S. Immigration and Nationality Act statutorily mandates that consular officers view every nonimmigrant applicant as an intending immigrant until they establish otherwise. In a 2–3 minute interview, you must clearly articulate a compelling return-to-Pakistan plan: explain how your specific degree prepares you for named Pakistani employers (e.g. Systems Ltd, Engro, Jazz, NUST faculty), cite domestic salary potential, and convey genuine enthusiasm for returning home.',
      category: 'Visa Interview & Refusals',
      sources: [
        {
          title: 'U.S. Department of State - INA §214(b) Denials',
          url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money must I show on Form I-20 and in my sponsor’s bank account?',
      answer:
        'You must prove immediate liquid financial ability to cover at least the full first academic year (typically 9 to 12 months) as stated in Box 7 of Form I-20 (Tuition + Living + Health Insurance + Books). For a university with an I-20 cost of $45,000, your sponsor bank statements must show liquid cash of at least $45,000 USD (PKR ~12.5M). If you receive a Graduate Assistantship (GTA/GRA) covering tuition and providing a stipend, your funding covers Box 7 directly.',
      category: 'Finances',
      sources: [
        {
          title: 'DHS Study in the States - Financial Ability',
          url: 'https://studyinthestates.dhs.gov/',
          publisher: 'U.S. Department of Homeland Security',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What are the mandatory visa fees for an F-1 student applying from Pakistan?',
      answer:
        'Applicants must pay three statutory government fees totaling $785 USD (PKR ~218,230): (1) Mandatory $350 USD SEVIS I-901 fee paid online at FMJfee.com; (2) $185 USD Machine Readable Visa (MRV) application fee paid upon scheduling the consular interview; and (3) $250 USD Visa Integrity Fee implemented under OBBBA effective October 1, 2025 (refundable to the applicant upon timely departure or lawful change of status in compliance with visa terms).',
      category: 'Statutory Fees',
      sources: [
        {
          title: 'FMJfee.com Official Portal',
          url: 'https://www.fmjfee.com/',
          publisher: 'U.S. Immigration and Customs Enforcement',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is STEM OPT and how does it give 3 years of work rights in the US?',
      answer:
        'Standard Optional Practical Training (OPT) grants 12 months of temporary employment authorization related to your degree. Graduates with degrees on the DHS STEM Designated Degree Program List (Science, Technology, Engineering, Mathematics) who are employed by E-Verify employers are eligible for a 24-month STEM OPT extension, granting a total of 36 months (3 years) of post-graduation work authorization in the U.S.',
      category: 'Post-Graduation & Work',
      sources: [
        {
          title: 'USCIS - STEM OPT Extension',
          url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt',
          publisher: 'USCIS',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work off-campus while studying on an F-1 visa?',
      answer:
        'No. During your first academic year (first 9 months), off-campus employment is strictly prohibited by U.S. law. You may only work on-campus for up to 20 hours per week during academic terms. After completing one full academic year, off-campus employment is permitted exclusively through Curricular Practical Training (CPT) for internships integral to your curriculum.',
      category: 'Employment Rights',
      sources: [
        {
          title: 'USCIS - Students and Employment',
          url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment',
          publisher: 'USCIS',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can my spouse work in the US on an F-2 dependent visa?',
      answer:
        'No. Under 8 CFR §214.2(f)(15)(i), holders of an F-2 dependent visa are strictly prohibited from engaging in any employment in the United States under any circumstances. Unauthorized work violates federal immigration law and results in visa revocation.',
      category: 'Family & Dependents',
      sources: [
        {
          title: 'DHS Study in the States - Dependents',
          url: 'https://studyinthestates.dhs.gov/students/dependents',
          publisher: 'U.S. Department of Homeland Security',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is INA §221(g) administrative processing and how long does it take?',
      answer:
        'Section 221(g) is a temporary hold issued when a consular officer requires additional security advisory opinions (SAO) or background checks. In Pakistan, it frequently occurs in STEM fields (under the Technology Alert List / TAL) or common names. Processing typically resolves within 3 to 8 weeks after submitting your detailed CV and research plan.',
      category: 'Visa Refusals',
      sources: [
        {
          title: 'U.S. Department of State - Administrative Processing',
          url: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html',
          publisher: 'U.S. Department of State',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I apply for an emergency / expedited interview appointment in Pakistan?',
      answer:
        'Yes. If your program start date on Form I-20 is within 60 days and no regular interview slots are available prior to that date, you may book the earliest available regular appointment and then submit an Expedited Appointment Request through the visa scheduling portal with your I-20 attached. Emergency requests are routinely approved for genuine academic students.',
      category: 'Appointment Scheduling',
      sources: [
        {
          title: 'U.S. Visa Service Portal Pakistan',
          url: 'https://www.ustraveldocs.com/',
          publisher: 'U.S. Department of State Partner',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is a Pakistani 2-year Bachelor’s degree (14 years) accepted for a Master’s in the US?',
      answer:
        'No. U.S. graduate programs strictly require 16 years of formal education (equivalent to a 4-year U.S. Bachelor’s degree). Holders of 2-year Pakistani BA/BSc degrees must complete a 2-year Pakistani Master’s degree (MA/MSc) or an HEC-approved 2-year conversion program to establish 16-year equivalence before applying to U.S. master’s programs.',
      category: 'Admissions & Equivalence',
      sources: [
        {
          title: 'EducationUSA Pakistan - Academic Advising',
          url: 'https://www.usefp.org/',
          publisher: 'USEFP',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the route from F-1 student status to an H-1B visa and Green Card?',
      answer:
        'While on 12-month OPT or 24-month STEM OPT, your U.S. employer can sponsor you for an H-1B Specialty Occupation visa through the annual April lottery (which reserves 20,000 extra slots for U.S. master’s/PhD graduates). Once on H-1B, your employer can initiate an Employment-Based Green Card petition (EB-2 or EB-3), or you may petition yourself via the EB-2 National Interest Waiver (NIW) if you demonstrate significant research merit.',
      category: 'Post-Graduation & PR',
      sources: [
        {
          title: 'USCIS - H-1B Specialty Occupations',
          url: 'https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations',
          publisher: 'USCIS',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I transfer to another U.S. university after arriving in the United States?',
      answer:
        'Yes. You can initiate a SEVIS transfer to another SEVP-certified institution through your current university’s DSO. However, you must first report and register at the school listed on your original visa before requesting a transfer release date.',
      category: 'SEVIS & Regulations',
      sources: [
        {
          title: 'DHS Study in the States - Maintaining Status',
          url: 'https://studyinthestates.dhs.gov/students/maintaining-status',
          publisher: 'U.S. Department of Homeland Security',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is Duration of Status (D/S) on my Form I-94?',
      answer:
        'Duration of Status (D/S) means you are legally authorized to stay in the United States as long as you maintain full-time enrollment, observe F-1 status rules, and keep an active SEVIS record. Unlike visitor visas, your stay does not expire on a specific fixed calendar date, but remains valid throughout your degree plus a 60-day departure grace period.',
      category: 'Visa Status',
      sources: [
        {
          title: 'CBP - Electronic Form I-94 Official Site',
          url: 'https://i94.cbp.dhs.gov/',
          publisher: 'U.S. Customs and Border Protection (CBP)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'U.S. Department of State - Student Visas (F-1 / M-1)',
      url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
      publisher: 'U.S. Department of State',
      publisherType: 'government',
    },
    {
      title: 'U.S. Department of Homeland Security - Study in the States',
      url: 'https://studyinthestates.dhs.gov/',
      publisher: 'U.S. Department of Homeland Security (DHS)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'FMJfee.com - Official SEVIS I-901 Fee Payment Portal',
      url: 'https://www.fmjfee.com/',
      publisher: 'U.S. Immigration and Customs Enforcement (ICE)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'CEAC - Consular Electronic Application Center (Form DS-160)',
      url: 'https://ceac.state.gov/genniv/',
      publisher: 'U.S. Department of State',
      publisherType: 'government',
    },
    {
      title: 'U.S. Visa Scheduling Portal for Pakistan',
      url: 'https://www.ustraveldocs.com/',
      publisher: 'U.S. Department of State Partner',
      publisherType: 'visa_centre',
    },
    {
      title: 'U.S. Embassy and Consulates in Pakistan (Islamabad & Karachi)',
      url: 'https://pk.usembassy.gov/',
      publisher: 'U.S. Mission Pakistan',
      publisherType: 'embassy',
    },
    {
      title: 'USEFP - United States Educational Foundation in Pakistan',
      url: 'https://www.usefp.org/',
      publisher: 'USEFP / Fulbright Commission',
      publisherType: 'scholarship',
    },
    {
      title: 'USCIS - Optional Practical Training (OPT) for F-1 Students',
      url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students',
      publisher: 'U.S. Citizenship and Immigration Services (USCIS)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'USCIS - STEM OPT Extension Guidelines',
      url: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt',
      publisher: 'U.S. Citizenship and Immigration Services (USCIS)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'U.S. Customs and Border Protection - Electronic I-94 System',
      url: 'https://i94.cbp.dhs.gov/',
      publisher: 'U.S. Customs and Border Protection (CBP)',
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
      title: 'The Common Application (Common App)',
      url: 'https://www.commonapp.org/',
      publisher: 'The Common Application Inc.',
      publisherType: 'portal',
    },
    {
      title: 'College Board - Trends in Higher Education Pricing',
      url: 'https://research.collegeboard.org/trends/college-pricing',
      publisher: 'College Board',
      publisherType: 'portal',
    },
  ],
};
