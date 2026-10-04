import { CountryGuideData } from './types';

export const chinaGuide: CountryGuideData = {
  countryCode: 'CN',
  countryName: 'China',
  slug: 'china',
  flagEmoji: '🇨🇳',
  tagline: 'World-Class STEM Research, Fully Funded CSC Scholarships, and Bilateral China-Pakistan Strategic Education Ties',
  metaDescription:
    'Complete authoritative guide for Pakistani students applying to Chinese universities in 2025/2026. X1/X2 student visas, JW201/JW202 forms, CSC Type A & Type B scholarships, COVA portal, CVASC Gerry’s visa centres, and Foreigner Residence Permits.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'China and Pakistan maintain a privileged educational and diplomatic partnership. Pakistani passport holders are exempt from standard Chinese consular visa fees under a bilateral reciprocal agreement (only CVASC service fees apply). Long-term students (X1 visa) must convert their single-entry 30-day visa into a Foreigner Residence Permit for Study at the local Public Security Bureau (PSB) within 30 days of entering China.',

  defaultHomeCountry: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    currencySymbol: 'Rs.',
    exchangeRateToDestinationCurrency: 39.0, // 1 RMB / CNY ≈ 39.0 PKR (current benchmark)
    exchangeRateDate: '2026-10-04',
  },

  // 1. Quick Facts Bar
  quickFacts: {
    capital: 'Beijing',
    currency: {
      code: 'CNY',
      symbol: '¥',
      name: 'Chinese Yuan Renminbi (RMB)',
    },
    officialLanguages: ['Standard Mandarin Chinese'],
    intakes: [
      {
        name: 'Autumn Intake (Primary / September)',
        months: 'September - January',
        notes: 'Primary intake across all Chinese higher education institutions. Hosts virtually all Chinese Government Scholarship (CSC) awards, provincial grants, and university degree programs. Deadlines: January - April.',
      },
      {
        name: 'Spring Intake (Secondary / March)',
        months: 'March - July',
        notes: 'Available for non-degree Chinese language preparatory programs, select Master by Research tracks, and English-medium MBBS bridge courses. Deadlines: October - December.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 18000,
      maxLocal: 45000,
      currencyCode: 'CNY',
      approxPkrMin: 702000,
      approxPkrMax: 1755000,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'China Scholarship Council - Study in China Overview',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council (CSC)',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Liberal arts and humanities degrees average 18,000–26,000 RMB/year; science and engineering average 24,000–35,000 RMB/year; English-taught clinical MBBS degrees range from 30,000–45,000 RMB/year. Over 65% of Pakistani postgraduate students in China receive 100% full tuition waivers through government or university scholarships.',
    },
    monthlyLivingCost: {
      minLocal: 2000,
      maxLocal: 4500,
      currencyCode: 'CNY',
      approxPkrMin: 78000,
      approxPkrMax: 175500,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Campus China - Cost of Living for International Students',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'On-campus dormitories cost 500–1,200 RMB/month. Subsidized campus university canteens provide full daily meals for 25–40 RMB/day. Tier 2 and Tier 3 cities (Wuhan, Xi’an, Chengdu, Nanjing) cost 2,000–3,000 RMB/month; Tier 1 metropolises (Beijing, Shanghai, Shenzhen) range from 3,500–5,000 RMB/month.',
    },
    postStudyWorkDuration: '1 to 2 years under the Z-Visa Foreigner Work Permit (Category A or B points system) or entrepreneurial incubator passes',
    partTimeWorkHoursTerm: 'Up to 8 hours per week during academic semesters (Subject to university approval and official endorsement on Residence Permit by the local Public Security Bureau)',
    partTimeWorkHoursHolidays: 'Up to 40 hours per week during winter and summer university vacation periods (with approved PSB endorsement)',
    visaProcessingTimeWeeks: '1 to 3 weeks via Chinese Visa Application Service Centres (CVASC) in Islamabad, Lahore, or Karachi',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'X1 Visa (Long-Term Study Visa)',
      subCategory: 'Study Exceeding 180 Days (Degree & Extended Language Studies)',
      purpose: 'The statutory entry visa for international students admitted to degree programs (Bachelor’s, Master’s, PhD) or advanced Chinese language courses lasting more than 6 months.',
      eligibilitySummary:
        'Original Admission Notice from an accredited Chinese university, official statutory Visa Application Form (JW201 for CSC/government scholarship recipients, or JW202 for self-funded/university scholarship students), completed COVA online form, Foreigner Physical Examination Form, and Police Character Certificate attested by MOFA Pakistan.',
      feeLocal: 0, // Reciprocal consular fee waiver for Pakistani citizens
      feeCurrency: 'CNY',
      approxFeePkr: 0, // CVASC service fee (~PKR 8,500–12,000) payable separately
      validity: 'Single entry valid for 30 days from the date of arrival in China. Must be converted into a Foreigner Residence Permit for Study at the local Public Security Bureau (PSB) within 30 days.',
      processingTime: '4 to 7 business days at CVASC Pakistan.',
      sources: [
        {
          title: 'Embassy of the People’s Republic of China in Pakistan - Consular Services',
          url: 'http://pk.china-embassy.gov.cn/eng/',
          publisher: 'Embassy of China in Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'X2 Visa (Short-Term Study Visa)',
      subCategory: 'Study of 180 Days or Less',
      purpose: 'Issued to students pursuing short-term courses, summer exchange programs, clinical observerships, or short semester language immersions lasting up to 180 days.',
      eligibilitySummary:
        'Official Admission Notice and university registration letter clearly stating study duration does not exceed 180 days. Does not require a JW201/JW202 form or a Foreigner Residence Permit conversion.',
      feeLocal: 0,
      feeCurrency: 'CNY',
      approxFeePkr: 0,
      validity: 'Single or double entry, valid for duration specified on visa foil (up to 180 days).',
      processingTime: '4 to 7 business days.',
      sources: [
        {
          title: 'Chinese Visa Application Service Center - Visa Categories',
          url: 'https://www.visaforchina.cn/',
          publisher: 'CVASC',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'S1 / S2 Family Dependent Visa',
      subCategory: 'Spouse and Minor Children of International Students',
      purpose: 'Authorizes lawful entry for the legal spouse and minor children under 18 of an active international student studying in China.',
      eligibilitySummary:
        'Invitation letter from the student, copy of student’s passport and Foreigner Residence Permit, university enrollment certificate, and NADRA Family Registration Certificate (FRC) or Marriage Registration Certificate (MRC) attested by MOFA Pakistan. S1 (stays >180 days, converted to Residence Permit); S2 (stays <=180 days). Employment is strictly prohibited.',
      feeLocal: 0,
      feeCurrency: 'CNY',
      approxFeePkr: 0,
      validity: 'Co-terminus with student’s residence permit duration.',
      processingTime: '4 to 7 business days.',
      sources: [
        {
          title: 'National Immigration Administration (NIA) - Family Reunion Visas',
          url: 'https://en.nia.gov.cn/',
          publisher: 'National Immigration Administration of China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Foreigner Residence Permit for Study (学习类居留证件)',
      subCategory: 'Issued by Public Security Bureau (PSB) Exit-Entry Administration',
      purpose: 'The mandatory domestic residence document replacing the X1 visa counterfoil, granting multiple re-entries and legal residency inside China.',
      eligibilitySummary:
        'Lodged in China within 30 days of entry with X1 visa. Requires official university registration certificate, JW201/JW202 form, Verification Certificate of Physical Examination issued by the provincial International Travel Healthcare Center, and temporary accommodation registration slip.',
      feeLocal: 400, // Statutory PSB fee: 400 RMB for 1 year, 800 RMB for 2-3 years
      feeCurrency: 'CNY',
      approxFeePkr: 15600,
      validity: '1 to 5 years (matching the official academic length of the degree program).',
      processingTime: '7 to 15 business days inside China.',
      sources: [
        {
          title: 'National Immigration Administration of China - Residence Permits',
          url: 'https://en.nia.gov.cn/',
          publisher: 'National Immigration Administration',
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
        name: 'COVA (China Online Visa Application)',
        url: 'https://cova.mfa.gov.cn/',
        description: 'Official Ministry of Foreign Affairs electronic platform where all Chinese visa applications must be completed and submitted.',
      },
      {
        name: 'AVAS (Appointment for Visa Application Submission)',
        url: 'https://avas.mfa.gov.cn/',
        description: 'Official appointment scheduling system for booking in-person document submission slots at CVASC centres in Pakistan.',
      },
      {
        name: 'Chinese Visa Application Service Center (CVASC Pakistan)',
        url: 'https://www.visaforchina.cn/',
        description: 'Official outsourced consular visa partner managing biometric collection, document intake, and passport collection in Islamabad, Karachi, and Lahore.',
      },
      {
        name: 'Campus China (China Scholarship Council Portal)',
        url: 'https://www.campuschina.org/',
        description: 'Official digital application repository for Chinese Government Scholarships (CSC Type A and Type B).',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Secure University Admission and Official JW201 / JW202 Form',
        description:
          'Apply directly to an accredited Chinese university or via the CSC portal. Upon admission, the university submits your credentials to provincial education authorities to generate your official statutory JW201 (for CSC / government scholarship recipients) or JW202 (for self-funded students) form, alongside the official Admission Notice.',
      },
      {
        stepNumber: 2,
        title: 'Complete Physical Examination (Foreigner Physical Examination Form)',
        description:
          'Undergo a comprehensive medical examination using the standardized Foreigner Physical Examination Form. Complete chest X-rays, ECG, blood serology (HIV, Syphilis, Hepatitis B/C), and general medical checkups at an approved government hospital or diagnostic lab in Pakistan. Ensure each test is stamped and signed by an authorized physician with hospital seal.',
      },
      {
        stepNumber: 3,
        title: 'Attest Academic Credentials and Police Clearance',
        description:
          'Attest your degrees and transcripts with HEC Pakistan (and Matric/FSc with IBCC). Obtain a Character Certificate from the local Police Khidmat Markaz / SSP office and attest it with the Ministry of Foreign Affairs (MOFA) Pakistan. Note: Following China’s accession to the Hague Apostille Convention on November 7, 2023, documents authenticated via MOFA Apostille are directly recognized in China.',
      },
      {
        stepNumber: 4,
        title: 'Complete Online Application Form on COVA',
        description:
          'Log in to the China Online Visa Application system (cova.mfa.gov.cn). Select your submission centre (Islamabad, Karachi, or Lahore). Fill out comprehensive educational, professional, and family history. Upload a compliant passport photograph against a white background. Print the full completed COVA form and confirmation page.',
      },
      {
        stepNumber: 5,
        title: 'Book Appointment on AVAS & Submit Documents at CVASC',
        description:
          'Book an appointment via AVAS (avas.mfa.gov.cn). Visit your designated Chinese Visa Application Service Center in Islamabad (ISE Towers), Karachi (Clifton), or Lahore (Queens Road). Submit original passport, JW201/JW202 form, Admission Notice, physical exam records, police clearance, and COVA printout. Complete digital ten-print biometric fingerprinting. Pay CVASC service charges.',
      },
      {
        stepNumber: 6,
        title: 'Collect Passport with X1 Visa Foil',
        description:
          'Track status online. Once processed (typically 4–7 business days), collect your passport bearing the single-entry X1 visa foil from the CVASC counter or receive it via courier.',
      },
      {
        stepNumber: 7,
        title: 'Convert to Foreigner Residence Permit Within 30 Days in China',
        description:
          'Upon arriving in China, register temporary accommodation at the local police station within 24 hours (automatic if staying in campus dorms). Report to your university international office, undergo health verification at the local International Travel Healthcare Center, and apply to the Public Security Bureau (PSB) Exit-Entry Administration for your Foreigner Residence Permit for Study before your 30-day X1 visa expires.',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'Chinese Visa Application Service Center (CVASC) - Islamabad',
        address: '4th Floor, ISE Towers, 55-B, Jinnah Avenue, Blue Area, Islamabad, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return', 'VIP Premium Lounge'],
      },
      {
        city: 'Karachi',
        centreName: 'Chinese Visa Application Service Center (CVASC) - Karachi',
        address: '6th Floor, World Trade Center, Block 5, Clifton, Karachi, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return'],
      },
      {
        city: 'Lahore',
        centreName: 'Chinese Visa Application Service Center (CVASC) - Lahore',
        address: 'Gerry’s Visa Centre, 20 Ex-American Centre Building, Opposite Ganga Ram Hospital, Queens Road, Lahore, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Submission', 'Courier Delivery'],
      },
    ],
    interviewGuidelines: {
      isMandatory: false,
      description:
        'In-person consular interviews are rarely mandated for Pakistani students holding verified JW201/JW202 forms and university admission notices. However, consular officers reserve the statutory right to summon applicants for an in-person or telephone interview if document discrepancies or security flags emerge.',
      tips: [
        'Be thoroughly familiar with your Chinese university name (both English and Pinyin), department, and city.',
        'Clearly distinguish whether your program is English-taught or Mandarin-taught; if Mandarin-taught, explain your preparatory 1-year language plan.',
        'Understand the specific details of your scholarship (e.g. CSC Type A Bilateral, CSC Type B University Program, or Provincial Government Grant).',
        'State clearly how your technical or engineering specialization supports China-Pakistan Economic Corridor (CPEC) initiatives upon your return to Pakistan.',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Original JW201 or JW202 Form',
        description: 'Statutory Visa Application Form for Study in China issued by the Ministry of Education / MOFCOM.',
        mandatory: true,
        sources: [
          {
            title: 'Chinese Embassy in Pakistan - Visa Requirements',
            url: 'http://pk.china-embassy.gov.cn/eng/',
            publisher: 'Embassy of China in Pakistan',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'Original University Admission Notice',
        description: 'Official acceptance letter issued by the Chinese university bearing institutional red seal and registrar signature.',
        mandatory: true,
        sources: [
          {
            title: 'CVASC Pakistan - Document Requirements',
            url: 'https://www.visaforchina.cn/',
            publisher: 'CVASC',
            publisherType: 'visa_centre',
          },
        ],
      },
      {
        documentName: 'Completed COVA Visa Form & Confirmation Page',
        description: 'Printed China Online Visa Application form and barcode confirmation page signed by the applicant.',
        mandatory: true,
        sources: [
          {
            title: 'COVA Portal',
            url: 'https://cova.mfa.gov.cn/',
            publisher: 'Ministry of Foreign Affairs of China',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Valid International Passport',
        description: 'Original passport with at least 6 months remaining validity and minimum 2 blank visa pages, plus copy of photo page.',
        mandatory: true,
        sources: [
          {
            title: 'Chinese Embassy Pakistan',
            url: 'http://pk.china-embassy.gov.cn/eng/',
            publisher: 'Embassy of China',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'Foreigner Physical Examination Form (Standardized Q2 Form)',
        description: 'Completed medical examination form including chest X-ray, ECG, and blood serology lab reports stamped by an authorized hospital physician with hospital seal.',
        mandatory: true,
        sources: [
          {
            title: 'Campus China - Medical Examination Form',
            url: 'https://www.campuschina.org/',
            publisher: 'China Scholarship Council',
            publisherType: 'scholarship',
          },
        ],
      },
      {
        documentName: 'Non-Criminal Record (Police Character Certificate)',
        description: 'Police clearance certificate issued by Police Khidmat Markaz / SSP office and attested by Ministry of Foreign Affairs (MOFA) Pakistan.',
        mandatory: true,
        sources: [
          {
            title: 'Chinese Embassy Pakistan - Consular Documents',
            url: 'http://pk.china-embassy.gov.cn/eng/',
            publisher: 'Embassy of China',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Academic Degrees & Transcripts',
        description: 'All degrees and transcripts attested by HEC / IBCC and authenticated by MOFA Pakistan.',
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
        documentName: 'Bank Statement (For Self-Funded Students)',
        description: 'Bank statement showing seasoned liquid balance of at least $3,000 to $5,000 USD (PKR ~1.0M–1.5M). (Note: Full CSC scholarship holders are exempt from personal bank statements as funding is state-guaranteed).',
        mandatory: false,
        sources: [
          {
            title: 'CVASC Financial Guidelines',
            url: 'https://www.visaforchina.cn/',
            publisher: 'CVASC',
            publisherType: 'visa_centre',
          },
        ],
      },
    ],
  },

  // 4. Financial Requirements & Proof of Funds
  financialRequirements: {
    livingCostRequirementPerYear: 24000,
    currencyCode: 'CNY',
    approxLivingCostPkr: 936000,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: 'Chinese Government Scholarship (CSC) Award / JW201 Form',
        details:
          'Official JW201 form certifying full Chinese state sponsorship. Covers 100% tuition, free university campus housing, comprehensive medical insurance, and a monthly living allowance (2,500 RMB for Bachelor’s, 3,000 RMB for Master’s, 3,500 RMB for PhD). No personal bank statement is required by the embassy for JW201 holders.',
        isPreferred: true,
      },
      {
        methodName: 'Self-Funded Student Bank Statement',
        details:
          'If applying on a JW202 form without a full living scholarship, submit a 6-month bank statement of the student or parent showing liquid funds of at least $3,000 to $5,000 USD (or equivalent in PKR ~1,000,000 to 1,500,000) accompanied by an account maintenance certificate.',
        isPreferred: true,
      },
      {
        methodName: 'Provincial Government / University Merit Scholarship Letter',
        details:
          'Official award letter from provincial education commissions (e.g. Beijing Government Scholarship, Shanghai Government Scholarship) or university presidential funds confirming tuition reduction and stipend.',
        isPreferred: true,
      },
    ],
    bankStatementHoldingPeriodDays: 90,
    visaApplicationFee: {
      amount: 0, // Reciprocal consular fee waiver for Pakistani citizens
      currency: 'CNY',
      approxPkr: 0,
    },
    otherSurcharges: [
      {
        name: 'CVASC Pakistan Service Fee (Regular Service)',
        amount: 250,
        currency: 'CNY',
        approxPkr: 9750,
        mandatory: true,
        notes: 'Payable in PKR at the Chinese Visa Application Service Center in Islamabad, Lahore, or Karachi.',
      },
      {
        name: 'Foreigner Residence Permit Statutory Fee (1 Year)',
        amount: 400,
        currency: 'CNY',
        approxPkr: 15600,
        mandatory: true,
        notes: 'Payable in RMB at the local municipal Public Security Bureau (PSB) Exit-Entry Administration in China.',
      },
      {
        name: 'International Travel Healthcare Center Health Verification',
        amount: 400,
        currency: 'CNY',
        approxPkr: 15600,
        mandatory: true,
        notes: 'Payable in China for verification and re-testing of the Pakistani health examination report.',
      },
    ],
    sources: [
      {
        title: 'Chinese Visa Application Service Center - Fee Schedule',
        url: 'https://www.visaforchina.cn/',
        publisher: 'CVASC',
        publisherType: 'visa_centre',
      },
      {
        title: 'National Immigration Administration - Residence Permit Pricing',
        url: 'https://en.nia.gov.cn/',
        publisher: 'NIA China',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / Intermediate / FSc / ICS) with minimum 65%–70% overall marks, or Cambridge A-Levels (minimum 3 subjects with grades of BCC or better). English-medium MBBS and engineering programs typically mandate 70%+ in FSc Pre-Medical or Pre-Engineering subjects.',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Hons / BE / BBA comprising 16 years of formal education) from an HEC-recognized university with a minimum cumulative GPA of 2.8/4.0 (or first division / 60%+). Old 2-year Pakistani BA/BSc degrees (14 years of education) are not recognized for direct postgraduate master admission; applicants must complete a 2-year Pakistani Master degree (MA/MSc) first.',
    doctoralRequirements:
      '18 years of formal education comprising an MS / MPhil degree with thesis, strong published research papers, a detailed 3-page research proposal, and a Pre-Admission Letter or Acceptance Letter from an active Chinese university doctoral supervisor.',
    pakistaniEquivalenceGuide: {
      matriculation: 'Recognized as equivalent to Chinese Junior Middle School graduation (Grade 9/10); requires IBCC attestation.',
      intermediateFSc: 'Recognized as equivalent to Chinese Senior High School Diploma (Gaokao equivalent). FSc graduates qualify for direct undergraduate admissions.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees are evaluated as equivalent to Chinese junior college diplomas (Dazhuan / 大专) and do not qualify for direct master entry.',
      sixteenYearBachelors: '4-year BS / BE degrees from HEC-accredited Pakistani universities are fully equivalent to Chinese 4-year Bachelor degrees (Benke / 本科).',
      studyGapsAcceptability: 'Chinese universities are highly accommodating of study gaps (up to 5 years for Master’s and 7 years for PhDs) when accompanied by a work certificate or research portfolio.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Attestation of all Bachelor, Master, and PhD degrees and final transcripts.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Attestation of SSC (Matric) and HSSC (Intermediate / FSc) mark sheets and certificates.',
        link: 'https://ibcc.edu.pk',
      },
      {
        bodyName: 'Ministry of Foreign Affairs (MOFA) Pakistan',
        mandate: 'Apostille and consular authentication of educational records, police character certificates, and family certificates for use in China.',
        link: 'https://mofa.gov.pk/',
      },
    ],
    applicationPortals: [
      {
        portalName: 'Campus China (CSC Online Application System)',
        url: 'https://www.campuschina.org/',
        scope: 'Primary official portal for applying for Chinese Government Scholarships (Type A bilateral and Type B university programs).',
      },
      {
        portalName: 'Direct University International Student Portals',
        url: 'https://www.campuschina.org/',
        scope: 'Used for direct institutional admissions, provincial scholarships, and university presidential awards.',
      },
    ],
    deadlinesSummary:
      'Autumn Intake: CSC Type A (HEC Pakistan) deadlines are typically December to February; CSC Type B (University) deadlines range from January to April. Spring Intake: Deadlines range from October to December.',
    sources: [
      {
        title: 'China Scholarship Council - Application Guidelines',
        url: 'https://www.campuschina.org/',
        publisher: 'China Scholarship Council',
        publisherType: 'scholarship',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 6. English and Local Language Requirements
  languageRequirements: {
    acceptedEnglishTests: [
      {
        testName: 'IELTS Academic',
        minScoreOverall: '6.0',
        subScoreRequirements: 'Minimum 5.5 in each individual band; top universities (Tsinghua, Peking) prefer 6.5+ for competitive graduate programs.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '50 - 58',
        subScoreRequirements: 'Minimum 46 in all communicative skills.',
      },
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '80',
        subScoreRequirements: 'Minimum 18 in all subscores.',
      },
      {
        testName: 'English Medium of Instruction (MOI) Certificate',
        minScoreOverall: 'Full Waiver',
        subScoreRequirements: 'Officially issued letter from an HEC-accredited Pakistani university confirming that the previous degree was taught 100% in English.',
      },
    ],
    moiWaiverAcceptability:
      'Extremely high. Unlike Western destinations, the vast majority of Chinese universities actively accept an official English Medium of Instruction (MOI) certificate from Pakistani universities for admission into English-taught Bachelor, Master, and PhD programs, waiving the requirement for IELTS or TOEFL.',
    localLanguageImportance: {
      study: 'Zero Chinese language requirement for officially designated English-taught programs. For Chinese-taught programs, HSK 4 (for STEM) or HSK 5 (for liberal arts/business) is mandatory.',
      dailyLife: 'Basic survival Mandarin (numbers, ordering food, ordering DiDi cabs, Taobao shopping) is immensely useful for day-to-day life off-campus.',
      partTimeJobs: 'Intermediate conversational Mandarin (HSK 3–4) is essential for any local company internship or part-time campus lab assistantship.',
      postStudyPR: 'Significant advantage for long-term employment. Multinational and state-owned Chinese corporations require fluent bilingual English-Mandarin communicators to manage overseas CPEC and Belt & Road infrastructure projects.',
    },
    localLanguageTests: [
      {
        name: 'HSK (Hanyu Shuiping Kaoshi / 汉语水平考试)',
        description: 'Standardized national Chinese proficiency test administered by Hanban / Center for Language Education and Cooperation (Levels 1 to 6).',
      },
      {
        name: 'HSKK (HSK Speaking Test / 汉语水平口语考试)',
        description: 'Oral Chinese language examination evaluating spoken fluency.',
      },
    ],
    sources: [
      {
        title: 'Center for Language Education and Cooperation - HSK Test Portal',
        url: 'http://www.chinesetest.cn/',
        publisher: 'Ministry of Education of China',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities
  topUniversities: [
    {
      name: 'Peking University',
      city: 'Beijing',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 14,
      },
      strongPrograms: ['Computer Science', 'Economics & Guanghua MBA', 'Chemistry', 'International Relations', 'Mathematics'],
      avgTuitionPerYearLocal: 30000,
      currency: 'CNY',
      approxTuitionPkr: 1170000,
      internationalStudentsPercentage: '15%',
      officialWebsite: 'https://english.pku.edu.cn/',
      sources: [
        {
          title: 'Peking University International Portal',
          url: 'https://english.pku.edu.cn/',
          publisher: 'Peking University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Tsinghua University',
      city: 'Beijing',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 20,
      },
      strongPrograms: ['Computer Science & AI', 'Civil Engineering', 'Electrical Engineering', 'Materials Science', 'Schwarzman Scholars'],
      avgTuitionPerYearLocal: 30000,
      currency: 'CNY',
      approxTuitionPkr: 1170000,
      internationalStudentsPercentage: '16%',
      officialWebsite: 'https://www.tsinghua.edu.cn/en/',
      sources: [
        {
          title: 'Tsinghua University Official Site',
          url: 'https://www.tsinghua.edu.cn/en/',
          publisher: 'Tsinghua University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Fudan University',
      city: 'Shanghai',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 39,
      },
      strongPrograms: ['Clinical Medicine (MBBS)', 'International Business', 'Philosophy', 'Physics', 'Biomedical Engineering'],
      avgTuitionPerYearLocal: 32000,
      currency: 'CNY',
      approxTuitionPkr: 1248000,
      internationalStudentsPercentage: '14%',
      officialWebsite: 'https://www.fudan.edu.cn/en/',
      sources: [
        {
          title: 'Fudan University Official Site',
          url: 'https://www.fudan.edu.cn/en/',
          publisher: 'Fudan University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Shanghai Jiao Tong University (SJTU)',
      city: 'Shanghai',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 45,
      },
      strongPrograms: ['Mechanical Engineering', 'Naval Architecture', 'Computer Science', 'Antai MBA', 'Medicine'],
      avgTuitionPerYearLocal: 28900,
      currency: 'CNY',
      approxTuitionPkr: 1127100,
      internationalStudentsPercentage: '12%',
      officialWebsite: 'https://en.sjtu.edu.cn/',
      sources: [
        {
          title: 'Shanghai Jiao Tong University Portal',
          url: 'https://en.sjtu.edu.cn/',
          publisher: 'SJTU',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Zhejiang University (ZJU)',
      city: 'Hangzhou, Zhejiang',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 47,
      },
      strongPrograms: ['Chemical Engineering', 'Agricultural Science', 'Computer Technology', 'Civil Engineering', 'Robotics'],
      avgTuitionPerYearLocal: 26800,
      currency: 'CNY',
      approxTuitionPkr: 1045200,
      internationalStudentsPercentage: '13%',
      officialWebsite: 'https://www.zju.edu.cn/english/',
      sources: [
        {
          title: 'Zhejiang University Official Portal',
          url: 'https://www.zju.edu.cn/english/',
          publisher: 'Zhejiang University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Science and Technology of China (USTC)',
      city: 'Hefei, Anhui',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 133,
      },
      strongPrograms: ['Quantum Information Science', 'Physics', 'Nanoscience', 'Chemistry', 'Nuclear Science'],
      avgTuitionPerYearLocal: 26000,
      currency: 'CNY',
      approxTuitionPkr: 1014000,
      internationalStudentsPercentage: '8%',
      officialWebsite: 'https://en.ustc.edu.cn/',
      sources: [
        {
          title: 'USTC Official Portal',
          url: 'https://en.ustc.edu.cn/',
          publisher: 'USTC',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Nanjing University',
      city: 'Nanjing, Jiangsu',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 145,
      },
      strongPrograms: ['Geology & Earth Sciences', 'Astronomy', 'Environmental Engineering', 'Physics'],
      avgTuitionPerYearLocal: 24000,
      currency: 'CNY',
      approxTuitionPkr: 936000,
      internationalStudentsPercentage: '10%',
      officialWebsite: 'https://www.nju.edu.cn/en/',
      sources: [
        {
          title: 'Nanjing University Official Site',
          url: 'https://www.nju.edu.cn/en/',
          publisher: 'Nanjing University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Tongji University',
      city: 'Shanghai',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 192,
      },
      strongPrograms: ['Civil & Structural Engineering', 'Architecture & Urban Planning', 'Automotive Engineering', 'Environmental Science'],
      avgTuitionPerYearLocal: 28000,
      currency: 'CNY',
      approxTuitionPkr: 1092000,
      internationalStudentsPercentage: '11%',
      officialWebsite: 'https://en.tongji.edu.cn/',
      sources: [
        {
          title: 'Tongji University Portal',
          url: 'https://en.tongji.edu.cn/',
          publisher: 'Tongji University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Wuhan University',
      city: 'Wuhan, Hubei',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 194,
      },
      strongPrograms: ['Remote Sensing & Geodesy', 'Water Resources & Hydro Engineering', 'MBBS Clinical Medicine', 'Law'],
      avgTuitionPerYearLocal: 26000,
      currency: 'CNY',
      approxTuitionPkr: 1014000,
      internationalStudentsPercentage: '12%',
      officialWebsite: 'https://en.whu.edu.cn/',
      sources: [
        {
          title: 'Wuhan University Official Portal',
          url: 'https://en.whu.edu.cn/',
          publisher: 'Wuhan University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Harbin Institute of Technology (HIT)',
      city: 'Harbin, Heilongjiang',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 252,
      },
      strongPrograms: ['Aerospace Engineering', 'Robotics & Control', 'Materials Processing', 'Welding Engineering'],
      avgTuitionPerYearLocal: 26000,
      currency: 'CNY',
      approxTuitionPkr: 1014000,
      internationalStudentsPercentage: '9%',
      officialWebsite: 'http://en.hit.edu.cn/',
      sources: [
        {
          title: 'HIT Official Portal',
          url: 'http://en.hit.edu.cn/',
          publisher: 'Harbin Institute of Technology',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Xi’an Jiaotong University (XJTU)',
      city: 'Xi’an, Shaanxi',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 295,
      },
      strongPrograms: ['Energy & Power Engineering', 'Electrical Engineering', 'Mechanical Science', 'Clinical Medicine'],
      avgTuitionPerYearLocal: 24000,
      currency: 'CNY',
      approxTuitionPkr: 936000,
      internationalStudentsPercentage: '11%',
      officialWebsite: 'http://en.xjtu.edu.cn/',
      sources: [
        {
          title: 'Xi’an Jiaotong University Portal',
          url: 'http://en.xjtu.edu.cn/',
          publisher: 'Xi’an Jiaotong University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Huazhong University of Science and Technology (HUST)',
      city: 'Wuhan, Hubei',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 300,
      },
      strongPrograms: ['Optics & Photonics', 'Mechanical Engineering', 'Tongji Medical College', 'Computer Science'],
      avgTuitionPerYearLocal: 28000,
      currency: 'CNY',
      approxTuitionPkr: 1092000,
      internationalStudentsPercentage: '10%',
      officialWebsite: 'http://english.hust.edu.cn/',
      sources: [
        {
          title: 'HUST Official Portal',
          url: 'http://english.hust.edu.cn/',
          publisher: 'HUST',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Chinese Government Scholarship (CSC) - Type A (Bilateral Program)',
      grantingBody: 'Ministry of Education of China & HEC Pakistan',
      coverageType: 'Full Funding (100% tuition, free university accommodation, medical insurance, monthly stipend)',
      eligibility:
        'Pakistani citizens nominated by the Higher Education Commission (HEC) of Pakistan under the bilateral quota. Monthly stipend: Bachelor’s 2,500 RMB/mo, Master’s 3,000 RMB/mo, PhD 3,500 RMB/mo.',
      deadlineMonths: 'December – February (annual HEC application cycle)',
      officialLink: 'https://www.campuschina.org/',
      sources: [
        {
          title: 'CSC - Chinese Government Scholarship Program',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Chinese Government Scholarship (CSC) - Type B (University Postgraduate Program)',
      grantingBody: 'Individual Chinese Universities under CSC Block Grants',
      coverageType: 'Full Tuition Remission + Free Campus Housing + Monthly Stipend (3,000–3,500 RMB/mo)',
      eligibility:
        'Master’s and PhD applicants applying directly to designated Chinese universities using the university’s unique Agency Code.',
      deadlineMonths: 'January – April (university specific)',
      officialLink: 'https://www.campuschina.org/',
      sources: [
        {
          title: 'CSC Type B University Program Guidelines',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'ANSO Scholarship for Young Talents (CAS-TWAS)',
      grantingBody: 'Alliance of International Science Organizations / Chinese Academy of Sciences (CAS)',
      coverageType: 'Full tuition, comprehensive medical insurance, travel allowance, monthly stipend (Master’s 3,000 RMB, PhD up to 6,000–7,000 RMB/mo)',
      eligibility:
        'Open to non-Chinese citizens pursuing Master’s or PhD degrees at the University of Chinese Academy of Sciences (UCAS) or USTC in natural and technical sciences.',
      deadlineMonths: 'January – February (annual)',
      officialLink: 'http://www.anso.org.cn/',
      sources: [
        {
          title: 'ANSO Scholarship Official Portal',
          url: 'https://www.campuschina.org/',
          publisher: 'Alliance of International Science Organizations',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: 'Up to 8 hours per week (Must obtain written consent from university and an official part-time work endorsement on Residence Permit from local Public Security Bureau)',
    holidayHours: 'Up to 40 hours per week during winter and summer vacation periods (with approved PSB endorsement)',
    minimumWageLocal: '18 - 25 RMB / hour (~PKR 700 - 975/hr depending on municipality: Shanghai 24 RMB/hr, Beijing 25.3 RMB/hr)',
    averageStudentWageLocal: '25.00 - 45.00 RMB / hour for on-campus research assistance, lab support, or authorized off-campus tech internships',
    regulationsSummary:
      'Under statutory joint regulations issued by the Ministry of Education, Ministry of Foreign Affairs, and Ministry of Public Security, international students enrolled in degree programs can engage in off-campus internships or part-time work provided: (1) They obtain an approval letter from their university; and (2) They present the employer agreement to the municipal Public Security Bureau (PSB) Exit-Entry Administration to print a "Part-time Work / Internship" endorsement on their Residence Permit. Working without this official PSB endorsement constitutes illegal employment under Article 43 of the Exit and Entry Administration Law, punishable by fines (5,000–20,000 RMB), detention, and deportation.',
    sources: [
      {
        title: 'National Immigration Administration - Work Regulations for Foreign Students',
        url: 'https://en.nia.gov.cn/',
        publisher: 'National Immigration Administration of China',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'Incomplete or Unverified Medical Examination Records',
      description:
        'Omitting required lab tests (ECG, Chest X-ray, or blood serology for Hepatitis/HIV), submitting forms lacking physician signatures, or missing hospital seals across the photograph on the Foreigner Physical Examination Form.',
      howToAvoid:
        'Use the official standardized Foreigner Physical Examination Form. Ensure that every test is completed, an official hospital seal overlaps the passport photograph on page 1, and the final conclusion is signed by a certified civil medical officer.',
      sources: [
        {
          title: 'CVASC - Medical Exam Requirements',
          url: 'https://www.visaforchina.cn/',
          publisher: 'CVASC',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Missing MOFA Attestation on Police Character Certificate',
      description:
        'Submitting a local Police Character Certificate without official attestation by the Ministry of Foreign Affairs (MOFA) Pakistan.',
      howToAvoid:
        'Obtain your Police Character Certificate from the local Police Khidmat Markaz or SSP office and ensure it receives the official QR-coded authentication stamp from MOFA Pakistan.',
      sources: [
        {
          title: 'Embassy of China in Pakistan - Consular Documents',
          url: 'http://pk.china-embassy.gov.cn/eng/',
          publisher: 'Embassy of China',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Mismatched Information Between COVA and JW201/JW202 Form',
      description:
        'Discrepancies in passport number, name spelling, degree major, or university name between the digital COVA visa submission and the statutory JW form issued by the education ministry.',
      howToAvoid:
        'Cross-check every single character on your COVA application against Box 1 to Box 8 of your original JW201/JW202 form and Admission Notice prior to submitting.',
      sources: [
        {
          title: 'COVA Application Guide',
          url: 'https://cova.mfa.gov.cn/',
          publisher: 'Ministry of Foreign Affairs of China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Overstaying Entry Limits or Violating Visa Terms',
      description:
        'Failing to convert the single-entry X1 visa into a Foreigner Residence Permit within 30 days of arrival in China.',
      howToAvoid:
        'Immediately report to your university international office upon landing. Submit your residence permit paperwork to the local PSB within the first 10 days of arrival.',
      sources: [
        {
          title: 'NIA China - Exit and Entry Administration Law',
          url: 'https://en.nia.gov.cn/',
          publisher: 'National Immigration Administration',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'Consular visa decisions are final and not subject to administrative appeal. If an X1 visa is refused, the applicant must inspect the specific deficiency (usually a missing document, flawed medical form, or unverified police record), rectify the issue, and resubmit a fresh application at CVASC.',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: '1 to 2 years under the Z-Visa (Foreigner Work Permit) or Entrepreneurial Residence Permit',
    workPermitType: 'Notification Letter of Foreigner’s Work Permit (Class A or Class B) + Z Visa',
    prPathwaysSummary:
      'China maintains a points-based Foreigner Work Permit evaluation system (Class A: High-Level Talent, Class B: Professional Talent). Foreign graduates of Chinese universities who attain a Master’s degree or PhD with good academic standing can directly apply for a Class B Work Permit without the previously mandatory 2 years of overseas work experience. Leading technology hubs (Shanghai Free Trade Zone, Beijing Zhongguancun, Shenzhen Qianhai) also offer Entrepreneurial Residence Permits for graduates launching tech startups. Permanent Residence (Chinese Green Card / 中国绿卡) is available to Class A talents holding senior research positions or high tax contributions.',
    citizenshipTimeline:
      'Chinese Nationality Law strictly does not recognize dual citizenship and naturalization of foreign nationals without direct Chinese kinship is exceptionally rare. International graduates build long-term residency through renewable 1- to 5-year Foreigner Residence Permits for Work or Chinese Permanent Residence (Green Card).',
    sources: [
      {
        title: 'Ministry of Human Resources and Social Security - Work Permit Regulations',
        url: 'https://en.nia.gov.cn/',
        publisher: 'MOHRSS / National Immigration Administration',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 12. Bringing Family & Dependent Rules
  dependentRules: {
    canBringSpouse: true,
    canBringChildren: true,
    spouseWorkRights:
      'Strictly prohibited on S1 / S2 dependent status. Under Chinese immigration law, an accompanying dependent spouse holds a private affairs residence status and cannot engage in any paid employment in China. If the spouse secures their own full-time job offer with a registered company in China, they must independently apply for a Z-Visa and Foreigner Work Permit.',
    childrenSchooling:
      'Minor children holding S1 residence permits can enroll in international schools or approved local Chinese public schools accepting foreign students in major municipal districts.',
    financialRequirementsPerDependent:
      'Proof of sufficient accommodation (renting a private off-campus apartment with landlord registration at the local police station) and financial bank support showing at least 2,000 RMB/month per accompanying dependent.',
    sources: [
      {
        title: 'National Immigration Administration - Family Accompaniment Guidelines',
        url: 'https://en.nia.gov.cn/',
        publisher: 'NIA China',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2023 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2023-01-08',
      headline: 'Full Resumption of In-Person International Student Admissions & Travel',
      impact:
        'China fully normalized all international student visa issuance and removed quarantine controls, restoring physical classroom instruction across all universities.',
      officialSourceUrl: 'https://en.nia.gov.cn/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2023-11-07',
      headline: 'China Officially Enters the Hague Apostille Convention',
      impact:
        'China’s accession to the Apostille Convention eliminated the time-consuming two-tier consular legalization process for Pakistani educational and civil documents; documents attested via MOFA Apostille are now directly recognized by Chinese authorities.',
      officialSourceUrl: 'http://pk.china-embassy.gov.cn/eng/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-01-01',
      headline: 'Permanent Exemption of Consular Visa Fees for Pakistani Citizens Reaffirmed',
      impact:
        'The Chinese Embassy reaffirmed that Pakistani passport holders remain exempt from statutory consular visa fees under reciprocal bilateral treaties, paying only outsourced CVASC administrative service charges.',
      officialSourceUrl: 'http://pk.china-embassy.gov.cn/eng/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-06-01',
      headline: 'Expansion of Direct Post-Graduation Work Permits for Master & PhD Grads',
      impact:
        'The Ministry of Human Resources officially codified nationwide exemptions from the 2-year overseas work experience requirement for all foreign graduates holding a Master’s degree or PhD from accredited Chinese universities.',
      officialSourceUrl: 'https://en.nia.gov.cn/',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in China
  studentLiving: {
    accommodationTypes: [
      {
        type: 'On-Campus International Student Dormitories (Single or Twin Room)',
        avgMonthlyCostLocal: 750,
        currencyCode: 'CNY',
        approxCostPkr: 29250,
        description: 'Furnished room with private bathroom, air conditioning, heating, and high-speed campus internet. Free or heavily subsidized for CSC scholarship holders.',
      },
      {
        type: 'Off-Campus Rented Apartment (1-Bedroom / Shared 2-Bedroom)',
        avgMonthlyCostLocal: 2200,
        currencyCode: 'CNY',
        approxCostPkr: 85800,
        description: 'Private apartment near university metro stations. Costs 1,500–2,200 RMB in Wuhan, Xi’an, or Chengdu; 3,500–5,000 RMB in Shanghai or Beijing.',
      },
    ],
    groceriesAndHalalFood:
      'Halal food (清真 / Qīngzhēn) is exceptionally accessible across every Chinese university and city. Chinese law requires every public university to maintain a dedicated Halal Student Canteen (清真餐厅 / Qīngzhēn Cāntīng) supervised by Muslim culinary staff serving fresh lamb, beef, and hand-pulled noodles (Lanzhou Lamian) at subsidized prices (10–18 RMB/meal). Authentic Xinjiang and Hui halal restaurants are ubiquitous on street corners across China.',
    safetyAndCrime:
      'China is widely recognized as one of the safest countries in the world. Violent crime is virtually nonexistent in university precincts. High-definition municipal surveillance, safe public parks, and round-the-clock campus security make walking outdoors at any hour completely safe.',
    climateAndWeather:
      'Northern China (Beijing, Harbin) experiences cold, dry, freezing winters (-5°C to -25°C) with universal central indoor heating, and hot summers (30°C to 35°C). Central and Southern China (Wuhan, Shanghai, Hangzhou, Guangzhou) experience hot, humid summers (35°C to 40°C) and chilly winters (0°C to 8°C).',
    pakistaniCommunityPresence:
      'China hosts over 28,000 Pakistani students, constituting one of the largest foreign student cohorts in the nation. Major student communities thrive in Beijing, Wuhan, Shanghai, Xi’an, and Nanjing. The Embassy of Pakistan in Beijing maintains a dedicated Education Wing supporting Pakistani students, and university Pakistani student unions organize regular cricket matches, national day galas, and academic mentorship.',
    simAndBankingRecommended: {
      simProviders: [
        'China Mobile (中国移动 - Largest nationwide coverage and widespread campus student promo plans)',
        'China Unicom (中国联通 - Excellent 5G data packages and broad international compatibility)',
        'China Telecom (中国电信)',
      ],
      digitalBanks: [
        'Industrial and Commercial Bank of China (ICBC / 中国工商银行)',
        'Bank of China (BOC / 中国银行)',
        'China Construction Bank (CCB / 中国建设银行)',
        'Digital Payments: WeChat Pay (微信支付) and Alipay (支付宝) are universal and linked directly to your Chinese bank account; physical cash and credit cards are rarely used in daily commerce.',
      ],
    },
    transportationStudentPerks:
      'China’s high-speed rail network (CRH / Fuxing) connects major cities within hours. Metro subway systems in all major university cities are clean, efficient, and cost 2–6 RMB per trip. Subsidized student transit cards and bike-sharing apps (Meituan, Hellobike at ~1 RMB/ride) provide effortless urban mobility.',
    sources: [
      {
        title: 'Campus China - Life in China Guide',
        url: 'https://www.campuschina.org/',
        publisher: 'China Scholarship Council',
        publisherType: 'scholarship',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'Complete 24-Hour Temporary Accommodation Police Registration',
      description:
        'By statutory law, foreign nationals must register their residence with the local police station within 24 hours of arrival. If living in an on-campus international student dormitory, the university front desk registers you automatically. If renting off-campus, you and your landlord must visit the local police sub-station (派出所 / Pàichūsuǒ) with lease and passport to collect the Registration Form of Temporary Residence.',
      timeline: 'Within 24 hours of arrival in China',
      mandatory: true,
      officialPortalOrGuide: 'https://en.nia.gov.cn/',
    },
    {
      stepNumber: 2,
      title: 'Complete University In-Person Registration',
      description:
        'Report to the International Student Office at your university with your original Admission Notice, JW201/JW202 form, and passport to finalize matriculation and collect your campus student ID card.',
      timeline: 'On scheduled orientation dates',
      mandatory: true,
      officialPortalOrGuide: 'https://www.campuschina.org/',
    },
    {
      stepNumber: 3,
      title: 'Health Examination Verification at Healthcare Quarantine Bureau',
      description:
        'Visit the municipal International Travel Healthcare Center (国际旅行卫生保健中心) with your Pakistani medical reports and photos to receive the official Verification Certificate of Health Examination. If tests are missing or expired, complete blood and X-ray checks locally.',
      timeline: 'Within first 7 to 10 days of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://en.nia.gov.cn/',
    },
    {
      stepNumber: 4,
      title: 'Apply for Foreigner Residence Permit for Study at the PSB',
      description:
        'Apply to the municipal Public Security Bureau (PSB) Exit-Entry Administration for your Foreigner Residence Permit for Study before your 30-day X1 visa expires. Submit your passport, JW201/JW202 form, university registration letter, health verification certificate, and accommodation registration slip.',
      timeline: 'Within 30 days of arrival (Critical Statutory Deadline)',
      mandatory: true,
      officialPortalOrGuide: 'https://en.nia.gov.cn/',
    },
    {
      stepNumber: 5,
      title: 'Open Local Chinese Bank Account & Link WeChat Pay / Alipay',
      description:
        'Visit a campus branch of ICBC or Bank of China with your passport and student card to open a bank account and debit card. Immediately link your debit card to WeChat Pay and Alipay to enable cashless mobile payments across China.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.campuschina.org/',
    },
    {
      stepNumber: 6,
      title: 'Purchase Chinese Mobile SIM Card',
      description:
        'Visit a China Mobile or China Unicom service outlet with your original passport to register a local Chinese mobile number for high-speed 5G data and campus app authentications.',
      timeline: 'First 2 to 3 days',
      mandatory: true,
      officialPortalOrGuide: 'https://www.campuschina.org/',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'Is it true that Pakistani citizens pay zero consular visa fees for China?',
      answer:
        'Yes. Under a longstanding bilateral reciprocal treaty between the Government of the People’s Republic of China and the Government of the Islamic Republic of Pakistan, Pakistani passport holders are exempt from standard Chinese consular visa fees. Applicants only pay the outsourced Chinese Visa Application Service Center (CVASC) administrative processing fee (approx PKR 8,500–12,000).',
      category: 'Visa Fees',
      sources: [
        {
          title: 'Chinese Embassy Pakistan - Fee Waiver Agreement',
          url: 'http://pk.china-embassy.gov.cn/eng/',
          publisher: 'Embassy of China in Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the difference between JW201 and JW202 forms?',
      answer:
        'Both are official statutory visa application forms issued by the Chinese Ministry of Education and provincial governments. Form JW201 is issued exclusively to students receiving Chinese Government Scholarships (CSC awards or bilateral state scholarships). Form JW202 is issued to self-funded students or students on university/provincial scholarships.',
      category: 'Statutory Documents',
      sources: [
        {
          title: 'Campus China - Study Visa Documentation',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What does the Chinese Government Scholarship (CSC) cover for Pakistani students?',
      answer:
        'A full CSC scholarship covers: (1) 100% tuition fee waiver; (2) Free on-campus international student dormitory housing; (3) Comprehensive Medical Insurance in China; and (4) A monthly living stipend disbursed directly to your bank account: 2,500 RMB/month for Bachelor’s, 3,000 RMB/month for Master’s, and 3,500 RMB/month for PhD candidates.',
      category: 'Scholarships',
      sources: [
        {
          title: 'CSC - Scholarship Coverage Breakdown',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How do I apply for CSC Type A vs CSC Type B scholarships?',
      answer:
        'CSC Type A is the Bilateral Program administered directly through the Higher Education Commission (HEC) of Pakistan (Agency Code 5861). You apply through both HEC and the CSC portal. CSC Type B is the Chinese University Program, where you apply directly to your chosen Chinese university’s international student portal using that specific university’s unique Agency Code.',
      category: 'Scholarships',
      sources: [
        {
          title: 'HEC Pakistan - Chinese Government Scholarship Program',
          url: 'https://hec.gov.pk',
          publisher: 'HEC Pakistan',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Do I need IELTS to study in China in English?',
      answer:
        'Most Chinese universities do not require IELTS or TOEFL if you hold a degree from Pakistan where English was the Medium of Instruction. An official English Medium of Instruction (MOI) Certificate from your Pakistani university is widely accepted for admission to English-taught Bachelor, Master, and PhD programs.',
      category: 'Language Requirements',
      sources: [
        {
          title: 'Campus China - Language Proficiency Standards',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work part-time while studying in China?',
      answer:
        'Yes, under joint statutory regulations, international students can engage in part-time work or off-campus internships for up to 8 hours per week during semesters (and 40 hours per week during holidays). However, you must first obtain written approval from your university and an official "Part-time Work / Internship" endorsement stamped on your Residence Permit by the local Public Security Bureau (PSB). Working without this PSB endorsement is strictly illegal.',
      category: 'Work Rights',
      sources: [
        {
          title: 'National Immigration Administration - Student Employment Rules',
          url: 'https://en.nia.gov.cn/',
          publisher: 'NIA China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What must I do within 30 days of arriving in China on an X1 visa?',
      answer:
        'An X1 visa is only valid for a single entry and 30 days of stay. You must convert it into a multi-entry Foreigner Residence Permit for Study (学习类居留证件) at the local municipal Public Security Bureau (PSB) Exit-Entry Administration before the 30 days expire. Failing to do so constitutes an illegal overstay under Chinese law.',
      category: 'Residence Permits',
      sources: [
        {
          title: 'NIA China - Residence Permit Application Procedures',
          url: 'https://en.nia.gov.cn/',
          publisher: 'NIA China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is halal food readily available in Chinese universities?',
      answer:
        'Yes. Every public university in China is legally mandated to operate a dedicated Halal Canteen (清真餐厅 / Qīngzhēn Cāntīng) serving fresh, affordable halal meals (beef, chicken, lamb) prepared by Muslim staff. In addition, Lanzhou halal hand-pulled noodle shops and Xinjiang restaurants are abundant throughout Chinese towns and cities.',
      category: 'Student Living',
      sources: [
        {
          title: 'Campus China - Campus Dining and Living Guide',
          url: 'https://www.campuschina.org/',
          publisher: 'China Scholarship Council',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I submit my visa application in Pakistan?',
      answer:
        'Visa applications are submitted in person at Chinese Visa Application Service Centers (CVASC) located in Islamabad (ISE Towers, Blue Area), Karachi (World Trade Center, Clifton), or Lahore (Gerry’s, Queens Road) after completing your online form on COVA and booking an AVAS appointment.',
      category: 'Visa Centres',
      sources: [
        {
          title: 'CVASC Pakistan Contact and Locations',
          url: 'https://www.visaforchina.cn/',
          publisher: 'CVASC',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I stay and work in China after completing my Master’s or PhD?',
      answer:
        'Yes. Foreign students graduating with a Master’s degree or PhD from an accredited Chinese university can apply directly for a Class B Foreigner Work Permit (Z-Visa) without needing the previously mandatory 2 years of post-study overseas work experience.',
      category: 'Post-Graduation',
      sources: [
        {
          title: 'National Immigration Administration - Foreign Talent Policies',
          url: 'https://en.nia.gov.cn/',
          publisher: 'NIA China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I bring my family while studying in China?',
      answer:
        'Yes. Students enrolled in long-term degree programs can sponsor their spouse and minor children for S1 (long-term) or S2 (short-term) Family Dependent Visas. An S1 visa is converted into a private affairs residence permit co-terminus with the student’s studies. Note that dependents cannot work in China.',
      category: 'Family & Dependents',
      sources: [
        {
          title: 'NIA China - Family Dependents Guidelines',
          url: 'https://en.nia.gov.cn/',
          publisher: 'NIA China',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How has China’s accession to the Hague Apostille Convention helped Pakistani students?',
      answer:
        'On November 7, 2023, China officially joined the Hague Apostille Convention. Pakistani applicants no longer need the tedious double-attestation process involving the Chinese Embassy in Islamabad; educational degrees and police certificates authenticated with a MOFA Pakistan Apostille stamp are directly accepted across Chinese universities and immigration authorities.',
      category: 'Attestations & Policies',
      sources: [
        {
          title: 'Chinese Embassy Pakistan - Apostille Implementation',
          url: 'http://pk.china-embassy.gov.cn/eng/',
          publisher: 'Embassy of China in Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'Embassy of the People’s Republic of China in the Islamic Republic of Pakistan',
      url: 'http://pk.china-embassy.gov.cn/eng/',
      publisher: 'Embassy of China in Pakistan',
      publisherType: 'embassy',
    },
    {
      title: 'Chinese Visa Application Service Center (CVASC Pakistan)',
      url: 'https://www.visaforchina.cn/',
      publisher: 'CVASC',
      publisherType: 'visa_centre',
    },
    {
      title: 'COVA - China Online Visa Application Platform',
      url: 'https://cova.mfa.gov.cn/',
      publisher: 'Ministry of Foreign Affairs of China',
      publisherType: 'government',
    },
    {
      title: 'National Immigration Administration of the People’s Republic of China (NIA)',
      url: 'https://en.nia.gov.cn/',
      publisher: 'National Immigration Administration (NIA)',
      publisherType: 'government',
    },
    {
      title: 'Campus China - China Scholarship Council (CSC Official Portal)',
      url: 'https://www.campuschina.org/',
      publisher: 'China Scholarship Council (CSC)',
      publisherType: 'scholarship',
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
      title: 'Ministry of Foreign Affairs (MOFA) Pakistan',
      url: 'https://mofa.gov.pk/',
      publisher: 'MOFA Pakistan',
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
