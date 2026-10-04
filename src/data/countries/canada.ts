import { CountryGuideData } from './types';

export const canadaGuide: CountryGuideData = {
  countryCode: 'CA',
  countryName: 'Canada',
  slug: 'canada',
  flagEmoji: '🇨🇦',
  tagline: 'World-Class Post-Secondary Education, Robust Co-op Programs, and Multi-Year Post-Graduation Work Permits',
  metaDescription:
    'Complete, authoritative guide for Pakistani students applying to Canadian universities in 2025/2026. IRCC Study Permit rules, CAD $20,635 living funds, Provincial Attestation Letter (PAL), VFS Global Pakistan VACs, PGWP pathways, and tuition fees.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'Canadian immigration policies underwent comprehensive structural updates in 2024 and 2025. The Student Direct Stream (SDS) was discontinued on November 8, 2024; all applicants now apply through the regular study permit process. Study permit applicants require a Provincial Attestation Letter (PAL), and statutory cost-of-living funds are CAD $20,635. Always verify current instructions via Immigration, Refugees and Citizenship Canada (IRCC).',

  defaultHomeCountry: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    currencySymbol: 'Rs.',
    exchangeRateToDestinationCurrency: 202.0, // 1 CAD ≈ 202 PKR (October 2024 / current benchmark)
    exchangeRateDate: '2026-10-04',
  },

  // 1. Quick Facts Bar
  quickFacts: {
    capital: 'Ottawa',
    currency: {
      code: 'CAD',
      symbol: '$',
      name: 'Canadian Dollar',
    },
    officialLanguages: ['English', 'French'],
    intakes: [
      {
        name: 'Fall Intake (Primary)',
        months: 'September - December',
        notes: 'Largest intake across all Designated Learning Institutions (DLIs). Features maximum course availability, research assistantships, and entrance scholarships. Application deadline: January - March.',
      },
      {
        name: 'Winter Intake (Secondary)',
        months: 'January - April',
        notes: 'Significant intake for business, computing, engineering, and select arts programs. Application deadline: June - September.',
      },
      {
        name: 'Spring / Summer Intake (Minor)',
        months: 'May - August',
        notes: 'Limited course selection, commonly utilized for ESL bridge pathways, foundational coursework, and accelerated master degrees.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 16000,
      maxLocal: 45000,
      currencyCode: 'CAD',
      approxPkrMin: 3232000,
      approxPkrMax: 9090000,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Statistics Canada - Canadian and International Tuition Fees',
          url: 'https://www.statcan.gc.ca/',
          publisher: 'Statistics Canada',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Undergraduate tuition averages CAD $25,000–$45,000/year; graduate master programs average CAD $16,000–$35,000/year depending on discipline and province.',
    },
    monthlyLivingCost: {
      minLocal: 1720,
      maxLocal: 2300,
      currencyCode: 'CAD',
      approxPkrMin: 347440,
      approxPkrMax: 464600,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'IRCC - Study Permit Financial Support Requirements',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'IRCC statutory living fund benchmark is CAD $20,635 per year (~CAD $1,720/month) for a single student outside Quebec. Living expenses in Toronto and Vancouver typically reach CAD $2,000–$2,500/month.',
    },
    postStudyWorkDuration: 'Up to 3 years (Post-Graduation Work Permit - PGWP)',
    partTimeWorkHoursTerm: '24 hours per week off-campus (Effective Nov 8, 2024; on-campus work is uncapped)',
    partTimeWorkHoursHolidays: 'Unlimited full-time hours during designated academic breaks (summer, winter breaks)',
    visaProcessingTimeWeeks: '6 to 12 weeks for Pakistani applicants (standard processing via IRCC Portal and VFS Global)',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'Study Permit (and Temporary Resident Visa / TRV)',
      subCategory: 'IMM 1442 (Permit) + V-1 Visa Counterfoil in Passport',
      purpose: 'Primary immigration authorization enabling non-Canadians to enroll in degree, diploma, or certificate programs exceeding 6 months at an approved Designated Learning Institution (DLI).',
      eligibilitySummary:
        'Unconditional Letter of Acceptance (LOA) from an approved DLI, valid Provincial Attestation Letter (PAL) or Territorial Attestation Letter (unless exempt), proof of tuition payment, unencumbered financial proof of CAD $20,635 living funds (via GIC or seasoned bank statement), upfront medical examination, and valid police clearance.',
      feeLocal: 150,
      feeCurrency: 'CAD',
      approxFeePkr: 30300,
      validity: 'Duration of the study program plus an extra 90 days to prepare for departure or apply to extend status.',
      processingTime: '6 to 12 weeks for offshore applications submitted from Pakistan.',
      sources: [
        {
          title: 'IRCC Study Permit - About the Process',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Post-Graduation Work Permit (PGWP)',
      subCategory: 'Open Work Permit under IRPR §205(c)(ii) (LMIA-Exempt C43)',
      purpose: 'Post-study open work permit granting eligible graduates the legal authority to work full-time for any Canadian employer anywhere in Canada.',
      eligibilitySummary:
        'Graduated from an eligible full-time DLI program of at least 8 months. Master degree graduates of at least 8 months qualify for a full 3-year PGWP (policy established 2024). Applicants must meet language proficiency standards (CLB 7 in English or French for university degree graduates) and submit within 180 days of receiving final completion marks.',
      feeLocal: 255, // $155 work permit fee + $100 open work permit holder fee
      feeCurrency: 'CAD',
      approxFeePkr: 51510,
      validity: '8 months up to 3 years, correlated to program length (minimum 3 years for master degree programs).',
      processingTime: '8 to 16 weeks inside Canada (implied status / maintained status applies while awaiting decision).',
      sources: [
        {
          title: 'IRCC - Work in Canada After Graduation (PGWP)',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Spousal Open Work Permit (SOWP)',
      subCategory: 'C42 Open Work Permit for Spouses of International Students',
      purpose: 'Authorizes the legal spouse or common-law partner of an active international student to work full-time in Canada without an LMIA.',
      eligibilitySummary:
        'Effective March 19, 2024, SOWP eligibility is restricted to spouses of students enrolled in master degree programs of at least 16 months duration, doctoral programs, or designated professional degree programs (medicine, dentistry, law, engineering). Spouses of undergraduate college/university students are no longer eligible.',
      feeLocal: 255,
      feeCurrency: 'CAD',
      approxFeePkr: 51510,
      validity: 'Co-terminus with the principal student study permit validity.',
      processingTime: '8 to 16 weeks.',
      sources: [
        {
          title: 'IRCC - Help your spouse or common-law partner work in Canada',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Co-op or Intern Work Permit',
      subCategory: 'C32 / C33 Academic Co-op Authorization',
      purpose: 'Authorizes international students to undertake essential, credit-bearing mandatory work placements, practicums, or internships that constitute an integral part of their academic curriculum.',
      eligibilitySummary:
        'Must hold a valid study permit. Employment must be certified by the DLI as an essential component of the academic program (certified via official academic letter) and comprise no more than 50% of the total program of study.',
      feeLocal: 0, // $0 fee for co-op work permits
      feeCurrency: 'CAD',
      approxFeePkr: 0,
      validity: 'Issued concurrently with or matching the duration of the study permit.',
      processingTime: 'Processed concurrently with study permit or 4 to 8 weeks if applied internally.',
      sources: [
        {
          title: 'IRCC - Work as a Co-op Student or Intern',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/intern.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Temporary Resident Visa (Visitor Visa - V-1)',
      subCategory: 'Short-Term Studies under 6 Months',
      purpose: 'Entry visa allowing entry to Canada for educational training, exchange semesters, or language courses lasting 6 months or less.',
      eligibilitySummary:
        'Acceptance letter for a course under 6 months. Under IRPR §188(1)(c), a study permit is not legally required for courses completing within 6 months. However, students intending to continue into a longer degree should still apply for a Study Permit.',
      feeLocal: 100,
      feeCurrency: 'CAD',
      approxFeePkr: 20200,
      validity: 'Up to 10 years (or until passport expiry), allowing multiple entries up to 6 months per visit.',
      processingTime: '4 to 8 weeks from Pakistan.',
      sources: [
        {
          title: 'IRCC - Visit Canada as a Visitor',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
          publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
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
        name: 'IRCC Secure Account / IRCC Portal',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/account.html',
        description: 'Official Government of Canada digital platform where study permits, biometric validation, and document uploads are processed.',
      },
      {
        name: 'VFS Global Pakistan - Canada Visa Application Centre',
        url: 'https://visa.vfsglobal.com/pak/en/can',
        description: 'Official outsourced partner in Pakistan for biometric fingerprinting, facial photography, and physical passport transmission upon IRCC approval.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Obtain DLI Acceptance and Provincial Attestation Letter (PAL)',
        description:
          'Secure an unconditional Letter of Acceptance (LOA) from an approved Canadian Designated Learning Institution (DLI). Pay the required tuition deposit. Your university will then coordinate with the provincial government to issue your official Provincial Attestation Letter (PAL), which is mandatory for post-secondary study permits.',
      },
      {
        stepNumber: 2,
        title: 'Establish Guaranteed Investment Certificate (GIC) & Financial Proof',
        description:
          'Open a Canadian student investment account with a CDIC-insured Canadian bank (such as Scotiabank, CIBC, or RBC) and transfer CAD $20,635 to purchase your GIC certificate. Gather supplementary sponsor bank statements (6 months) showing consistent, seasoned funds and official tax returns.',
      },
      {
        stepNumber: 3,
        title: 'Undergo Upfront Medical Examination with a Panel Physician',
        description:
          'Book an upfront medical examination with an IRCC-approved Panel Physician in Pakistan (IOM Migration Health Assessment Centres in Islamabad, Lahore, or Karachi). Receive the E-Medical Information Sheet (eMedical printout) with your UMI number.',
      },
      {
        stepNumber: 4,
        title: 'Obtain Character / Police Clearance Certificate',
        description:
          'Acquire a Police Clearance Certificate (Character Certificate) from the Senior Superintendent of Police (SSP) or Police Khidmat Markaz covering all districts in Pakistan where you have resided for 6 consecutive months or more since age 18.',
      },
      {
        stepNumber: 5,
        title: 'Complete IRCC Online Portal Application & Pay Statutory Fees',
        description:
          'Fill out digital forms IMM 1294 (Application for Study Permit Made Outside of Canada), IMM 5645 / 5707 (Family Information), and submit your comprehensive Statement of Purpose / Study Plan. Pay the CAD $150 study permit processing fee and CAD $85 biometrics fee (total CAD $235 / PKR ~47,470).',
      },
      {
        stepNumber: 6,
        title: 'Attend Biometrics Appointment at VFS Global Pakistan',
        description:
          'Upon submission, receive the Biometric Instruction Letter (BIL) within 24–48 hours. Book an appointment at your nearest VFS Global Canada VAC in Islamabad, Lahore, or Karachi. Bring your original passport, appointment confirmation, and printed BIL for ten-digit fingerprint scans and digital photo.',
      },
      {
        stepNumber: 7,
        title: 'Passport Transmission (Original Passport Request - OPR)',
        description:
          'Once the visa officer approves your application, you will receive an Original Passport Request (OPR). Submit your physical passport via VFS Global Pakistan for visa counterfoil stamping. Receive your passport with the V-1 entry sticker and Port of Entry (POE) Introduction Letter.',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'VFS Global Canada Visa Application Centre - Islamabad',
        address: 'Park Road, Chattha Bakhtawar, Chak Shahzad, Islamabad, Pakistan',
        servicesOffered: ['Biometric Collection', 'Passport Submission & Return', 'Premium Lounge', 'Courier Services'],
      },
      {
        city: 'Lahore',
        centreName: 'VFS Global Canada Visa Application Centre - Lahore',
        address: '20 Ex-American Centre Building, Opposite Ganga Ram Hospital, Queens Road, Lahore, Pakistan',
        servicesOffered: ['Biometric Collection', 'Passport Submission & Return', 'Self-Service Workstations', 'Photocopy & Photography'],
      },
      {
        city: 'Karachi',
        centreName: 'VFS Global Canada Visa Application Centre - Karachi',
        address: 'Bahria Complex IV, 4th Floor, Main Chaudhary Khaliq-uz-Zaman Road, Gizri, Clifton, Karachi, Pakistan',
        servicesOffered: ['Biometric Collection', 'Passport Submission & Return', 'SMS Status Alerts', 'Document Verification'],
      },
    ],
    interviewGuidelines: {
      isMandatory: false,
      description:
        'In-person interviews are rare for Canadian study permits. Decisions are primarily adjudicated on the strength, clarity, and authenticity of the documentary record submitted through the IRCC Portal. However, if an officer issues a Procedural Fairness Letter (PFL) or summons an interview at the High Commission of Canada in Islamabad, rigorous preparation regarding your academic plan, family ties, and home country career opportunities is essential.',
      tips: [
        'Demonstrate articulate knowledge of your exact Canadian syllabus, course credits, and faculty specializations.',
        'Articulate why this specific program in Canada represents a logical next career step compared to programs available at Pakistani universities (LUMS, NUST, IBA).',
        'Show concrete economic ties to Pakistan: identify 3–5 specific prospective employers in Karachi, Lahore, or Islamabad and current Pakistani corporate salary scales for foreign postgraduates.',
        'Explain the exact breakdown and legitimate source of every rupee deposited in your sponsor bank accounts.',
        'Be completely transparent regarding any previous visa refusals to the US, UK, Schengen, or Australia; failure to disclose triggers a 5-year ban under Section 40 misrepresentation.',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Letter of Acceptance (LOA) from Canadian DLI',
        description: 'Official acceptance letter containing DLI number, program title, start/end dates, tuition fees, and conditions.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Study Permit Document Checklist',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Provincial Attestation Letter (PAL)',
        description: 'Statutory verification issued by the provincial higher education ministry verifying the student falls within the federal intake cap.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Study Permit Document Checklist',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Guaranteed Investment Certificate (GIC) of CAD $20,635',
        description: 'Proof of funds held in a CDIC-insured Canadian financial institution (Scotiabank, CIBC, RBC) guaranteeing first-year living allowance.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Financial Support for Study Permit',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'First Year Tuition Payment Receipt',
        description: 'Official university receipt or telegraphic transfer confirmation (Flywire / CIBC International Student Pay) proving tuition payment.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Financial Support for Study Permit',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Valid Original Passport',
        description: 'Passport with at least 6 months validity beyond intended stay and at least two empty visa stamp pages.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Study Permit Document Checklist',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Academic Credentials',
        description: 'Matric/FSc certificates attested by IBCC; Bachelor/Master degrees, official transcripts, and grading scale attested by HEC Pakistan.',
        mandatory: true,
        sources: [
          {
            title: 'HEC Degree Attestation System',
            url: 'https://hec.gov.pk',
            publisher: 'Higher Education Commission Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Standardized English Proficiency Test (IELTS / PTE / TOEFL)',
        description: 'Official test report form (IELTS Academic 6.5+, PTE Academic 60+, or TOEFL iBT 86+) verified directly through the testing authority.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Language Requirements for Study in Canada',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Detailed Statement of Purpose (Study Plan)',
        description: 'Comprehensive 2–4 page narrative addressing academic intent, reasons for choosing Canada and the DLI, career opportunities in Pakistan, and financial feasibility.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC Study Plan Guidelines',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Upfront Medical Exam Sheet (eMedical UMI)',
        description: 'Official receipt from an approved IOM Migration Health Assessment Centre panel physician in Islamabad, Lahore, or Karachi.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Medical Exam for Visitors, Students and Workers',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Police Character Certificate',
        description: 'Original police clearance certificate issued by the SSP or Police Khidmat Markaz covering districts of residence in Pakistan.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Police Certificates for Immigration Applications',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Sponsor Financial Affidavit & 6-Month Bank Statements',
        description: 'Notarized sponsorship affidavit, certified bank statements showing 6 months seasoned balance, bank account maintenance certificate, FBR tax returns (3 years), and wealth statement.',
        mandatory: true,
        sources: [
          {
            title: 'IRCC - Financial Support for Study Permit',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
            publisher: 'IRCC',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'NADRA Family Registration Certificate (FRC)',
        description: 'Official NADRA FRC proving family lineage and relationship to financial sponsors and home-country dependents.',
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
    livingCostRequirementPerYear: 20635,
    currencyCode: 'CAD',
    approxLivingCostPkr: 4168270,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: 'Guaranteed Investment Certificate (GIC) of CAD $20,635',
        details:
          'The gold-standard method for proving living funds to IRCC. Students deposit CAD $20,635 with a participating CDIC-insured Canadian institution (Scotiabank, CIBC, RBC, ICICI Bank Canada, Simplii Financial). Upon arrival in Canada and identity verification, approximately CAD $4,000–$5,000 is released immediately, and the remainder is disbursed in equal monthly installments over 10–12 months.',
        isPreferred: true,
      },
      {
        methodName: 'Sponsor Bank Statement (6 Months Consecutive History)',
        details:
          'If relying on family sponsorship, submit 6 months of continuous, verified bank statements showing consistent cash balances exceeding first-year tuition plus CAD $20,635. Avoid large sudden unexplained lump-sum deposits within 90 days of application without official documentary proof of source (e.g., sale of real estate, mature provident fund disinvestments).',
        isPreferred: false,
      },
      {
        methodName: 'Educational Bank Loan from Pakistani Financial Institution',
        details:
          'Sanction letter for an education loan from an approved State Bank of Pakistan scheduled bank, accompanied by disbursement conditions and collateral deeds.',
        isPreferred: false,
      },
      {
        methodName: 'Institutional Scholarship / Government Fellowship Award Letter',
        details:
          'Official letter from Canadian university, provincial authority, or international body confirming full or partial tuition waiver and living stipend disbursements.',
        isPreferred: true,
      },
    ],
    bankStatementHoldingPeriodDays: 180, // 6 months of historical statements required to prove funds are seasoned
    visaApplicationFee: {
      amount: 150,
      currency: 'CAD',
      approxPkr: 30300,
    },
    otherSurcharges: [
      {
        name: 'Biometrics Enrollment Fee',
        amount: 85,
        currency: 'CAD',
        approxPkr: 17170,
        mandatory: true,
        notes: 'Mandatory for all Pakistani applicants aged 14 to 79. Covers biometric fingerprint collection and facial photography at VFS Global.',
      },
      {
        name: 'Designated Medical Exam (Panel Physician IOM)',
        amount: 160,
        currency: 'CAD',
        approxPkr: 32320,
        mandatory: true,
        notes: 'Payable directly in PKR at IOM clinics in Islamabad, Lahore, or Karachi (approx PKR 30,000–35,000 depending on clinic).',
      },
      {
        name: 'VFS Global Passport Transmission Courier Fee',
        amount: 35,
        currency: 'CAD',
        approxPkr: 7070,
        mandatory: false,
        notes: 'Applies when using two-way secure courier service for physical passport stamping in Islamabad.',
      },
    ],
    sources: [
      {
        title: 'IRCC - Proof of Financial Support for Study Permit',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
        publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / Intermediate / FSc / ICS / I.Com) with minimum 65%–75% overall grade, or British A-Levels (minimum 3 subjects with grades of BBB or better). STEM programs (Computer Science, Engineering) mandate specific minimum scores in Mathematics and Physics.',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Honours / BE / BBA comprising 16 years of formal education) from an HEC-recognized university with a minimum cumulative GPA of 3.0/4.0 (or 65% first division). Old 2-year BA/BSc degrees (14 years education) are NOT eligible for direct entry into Canadian Master programs without completing a 2-year bridging degree or MSc in Pakistan.',
    doctoralRequirements:
      '18 years of formal education comprising an MS / MPhil degree with a thesis component, minimum CGPA 3.3/4.0, strong peer-reviewed research publications, an academic portfolio, and a confirmed supervisor acceptance letter from a Canadian faculty member.',
    pakistaniEquivalenceGuide: {
      matriculation: 'Recognized as equivalent to Canadian Grade 10 secondary school education; requires IBCC attestation.',
      intermediateFSc: 'Recognized as equivalent to Canadian Grade 12 High School Diploma. FSc Pre-Engineering and Pre-Medical graduates qualify for direct undergraduate university admissions provided marks exceed 65%–70%.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees are evaluated by WES (World Education Services) as equivalent to 2–3 years of Canadian undergraduate post-secondary study; candidates must complete a 2-year Pakistani Master degree (MA/MSc) or an HEC-approved post-graduate diploma to establish 16-year equivalence for Canadian master entry.',
      sixteenYearBachelors: '4-year BS / BSc (Hons) / BE / BBA degrees from HEC-accredited institutions are recognized as full equivalents to Canadian 4-year Bachelor degrees.',
      studyGapsAcceptability: 'Canadian universities and IRCC accept reasonable study gaps (up to 3–5 years for Master applicants) provided the gap is substantiated with continuous formal employment, tax returns, verifiable appointment letters, and professional development.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Verification and stamp of all post-secondary Bachelor, Master, and PhD degrees, final transcripts, and grading schemes.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Verification and attestation of Matric (SSC) and Intermediate (HSSC / FSc) certificates and mark sheets.',
        link: 'https://ibcc.edu.pk',
      },
      {
        bodyName: 'World Education Services (WES) Canada',
        mandate: 'Official third-party educational credential evaluation required by select Canadian universities (such as Toronto, McMaster) and later for Express Entry PR.',
        link: 'https://www.wes.org/ca/',
      },
    ],
    applicationPortals: [
      {
        portalName: 'OUAC (Ontario Universities Application Centre)',
        url: 'https://www.ouac.on.ca/',
        scope: 'Centralized application portal for all undergraduate programs across universities in the province of Ontario.',
      },
      {
        portalName: 'Direct University Admissions Portals',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html',
        scope: 'Used for graduate programs (Master and PhD) across Canada, and for undergraduate programs outside Ontario (e.g. UBC, Alberta, McGill).',
      },
    ],
    deadlinesSummary:
      'Fall Intake (September): Major deadlines range from December 15 to March 1 (early application is essential to secure PAL allocations). Winter Intake (January): Deadlines range from June 15 to September 1.',
    sources: [
      {
        title: 'Universities Canada - Study in Canada Admission Standards',
        url: 'https://www.univcan.ca/',
        publisher: 'Universities Canada',
        publisherType: 'university',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 6. English and Local Language Requirements
  languageRequirements: {
    acceptedEnglishTests: [
      {
        testName: 'IELTS Academic',
        minScoreOverall: '6.5',
        subScoreRequirements: 'Minimum 6.0 in each individual band (Reading, Writing, Listening, Speaking). Select competitive programs require 7.0 overall.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '60 - 65',
        subScoreRequirements: 'Minimum 58 in all communicative skills sections.',
      },
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '86 - 90',
        subScoreRequirements: 'Minimum 20–22 in Reading and Writing, 20 in Listening and Speaking.',
      },
      {
        testName: 'Duolingo English Test (DET)',
        minScoreOverall: '115 - 125',
        subScoreRequirements: 'Accepted by select universities for admissions; check specific DLI policies as acceptance varies by institution.',
      },
    ],
    moiWaiverAcceptability:
      'Strictly limited. While select Canadian universities may consider an English Medium of Instruction (MOI) letter from Pakistani universities for academic admission, IRCC visa officers routinely expect a standardized English test result (such as IELTS or PTE). Relying on an MOI letter for visa processing drastically increases the risk of refusal.',
    localLanguageImportance: {
      study: 'English is the medium of instruction across all major Canadian provinces except Quebec. In Quebec, French is dominant at institutions such as Université de Montréal, though McGill University and Concordia University teach exclusively in English.',
      dailyLife: 'English is universal across English-speaking provinces. In Quebec (Montreal, Quebec City), French is the official provincial language, making basic French conversational proficiency valuable for daily social life.',
      partTimeJobs: 'In Ontario, British Columbia, Alberta, and Saskatchewan, fluent English is sufficient for all part-time employment. In Quebec, Bill 96 prioritizes French; bilingualism (French/English) is strongly required for customer-facing service jobs in Montreal.',
      postStudyPR: 'Significant advantage. Under Express Entry, proficiency in French (NCLC 7+) unlocks targeted Category-Based Express Entry draws with dramatically lower CRS score cut-offs, plus up to 50 additional CRS bonus points.',
    },
    localLanguageTests: [
      {
        name: 'TEF Canada (Test d’Évaluation de Français)',
        description: 'Official French language examination recognized by IRCC for immigration points and Quebec educational admission.',
      },
      {
        name: 'TCF Canada (Test de Connaissance du Français)',
        description: 'Approved French language test for permanent residence, citizenship, and Francophone post-secondary institutions.',
      },
    ],
    sources: [
      {
        title: 'IRCC - Language Test Equivalency Charts (CLB/NCLC)',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html',
        publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities
  topUniversities: [
    {
      name: 'University of Toronto',
      city: 'Toronto, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 25,
      },
      strongPrograms: ['Computer Science', 'Artificial Intelligence', 'Rotman MBA & Finance', 'Biomedical Engineering', 'Data Science'],
      avgTuitionPerYearLocal: 42000,
      currency: 'CAD',
      approxTuitionPkr: 8484000,
      internationalStudentsPercentage: '28%',
      officialWebsite: 'https://www.utoronto.ca/',
      sources: [
        {
          title: 'University of Toronto Official Portal',
          url: 'https://www.utoronto.ca/',
          publisher: 'University of Toronto',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'McGill University',
      city: 'Montreal, Quebec',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 29,
      },
      strongPrograms: ['Medicine & Life Sciences', 'Law', 'Neuroscience', 'Mechanical Engineering', 'Economics'],
      avgTuitionPerYearLocal: 36000,
      currency: 'CAD',
      approxTuitionPkr: 7272000,
      internationalStudentsPercentage: '31%',
      officialWebsite: 'https://www.mcgill.ca/',
      sources: [
        {
          title: 'McGill University Admissions',
          url: 'https://www.mcgill.ca/',
          publisher: 'McGill University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of British Columbia (UBC)',
      city: 'Vancouver, British Columbia',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 38,
      },
      strongPrograms: ['Computer Science', 'Sauder Business School', 'Environmental Science', 'Civil Engineering', 'Forestry'],
      avgTuitionPerYearLocal: 41000,
      currency: 'CAD',
      approxTuitionPkr: 8282000,
      internationalStudentsPercentage: '29%',
      officialWebsite: 'https://www.ubc.ca/',
      sources: [
        {
          title: 'UBC International Student Portal',
          url: 'https://www.ubc.ca/',
          publisher: 'University of British Columbia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Alberta',
      city: 'Edmonton, Alberta',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 96,
      },
      strongPrograms: ['Petroleum & Mining Engineering', 'Machine Learning / AMII', 'Pharmacy', 'Agricultural Sciences', 'Nursing'],
      avgTuitionPerYearLocal: 31000,
      currency: 'CAD',
      approxTuitionPkr: 6262000,
      internationalStudentsPercentage: '24%',
      officialWebsite: 'https://www.ualberta.ca/',
      sources: [
        {
          title: 'University of Alberta Official Site',
          url: 'https://www.ualberta.ca/',
          publisher: 'University of Alberta',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Waterloo',
      city: 'Waterloo, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 115,
      },
      strongPrograms: ['Software Engineering', 'Computer Science', 'Actuarial Science', 'Quantum Computing', 'Co-op Education'],
      avgTuitionPerYearLocal: 45000,
      currency: 'CAD',
      approxTuitionPkr: 9090000,
      internationalStudentsPercentage: '22%',
      officialWebsite: 'https://uwaterloo.ca/',
      sources: [
        {
          title: 'University of Waterloo Admissions',
          url: 'https://uwaterloo.ca/',
          publisher: 'University of Waterloo',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Western University',
      city: 'London, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 120,
      },
      strongPrograms: ['Ivey School of Business (HBA/MBA)', 'Medical Sciences', 'Civil Engineering', 'Kinesiology'],
      avgTuitionPerYearLocal: 38000,
      currency: 'CAD',
      approxTuitionPkr: 7676000,
      internationalStudentsPercentage: '17%',
      officialWebsite: 'https://www.uwo.ca/',
      sources: [
        {
          title: 'Western University Official Site',
          url: 'https://www.uwo.ca/',
          publisher: 'Western University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université de Montréal',
      city: 'Montreal, Quebec',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 159,
      },
      strongPrograms: ['Artificial Intelligence (MILA)', 'Public Health', 'Mathematics', 'HEC Montréal Business'],
      avgTuitionPerYearLocal: 26000,
      currency: 'CAD',
      approxTuitionPkr: 5252000,
      internationalStudentsPercentage: '25%',
      officialWebsite: 'https://www.umontreal.ca/',
      sources: [
        {
          title: 'Université de Montréal International Portal',
          url: 'https://www.umontreal.ca/',
          publisher: 'Université de Montréal',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'McMaster University',
      city: 'Hamilton, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 176,
      },
      strongPrograms: ['Health Sciences', 'Nuclear Engineering', 'Materials Science', 'DeGroote School of Business'],
      avgTuitionPerYearLocal: 39000,
      currency: 'CAD',
      approxTuitionPkr: 7878000,
      internationalStudentsPercentage: '18%',
      officialWebsite: 'https://www.mcmaster.ca/',
      sources: [
        {
          title: 'McMaster University Official Site',
          url: 'https://www.mcmaster.ca/',
          publisher: 'McMaster University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Ottawa',
      city: 'Ottawa, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 189,
      },
      strongPrograms: ['Public Policy & Governance', 'Civil Law / Common Law', 'Biomedical Science', 'Computer Engineering'],
      avgTuitionPerYearLocal: 34000,
      currency: 'CAD',
      approxTuitionPkr: 6868000,
      internationalStudentsPercentage: '26%',
      officialWebsite: 'https://www.uottawa.ca/',
      sources: [
        {
          title: 'University of Ottawa International Admissions',
          url: 'https://www.uottawa.ca/',
          publisher: 'University of Ottawa',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Queen’s University',
      city: 'Kingston, Ontario',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 193,
      },
      strongPrograms: ['Smith School of Business', 'Mining Engineering', 'Law', 'Astrophysics (SNOLAB)'],
      avgTuitionPerYearLocal: 37000,
      currency: 'CAD',
      approxTuitionPkr: 7474000,
      internationalStudentsPercentage: '15%',
      officialWebsite: 'https://www.queensu.ca/',
      sources: [
        {
          title: 'Queen’s University Official Portal',
          url: 'https://www.queensu.ca/',
          publisher: 'Queen’s University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Calgary',
      city: 'Calgary, Alberta',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 198,
      },
      strongPrograms: ['Schulich School of Engineering', 'Geosciences', 'Veterinary Medicine', 'Haskayne MBA'],
      avgTuitionPerYearLocal: 29000,
      currency: 'CAD',
      approxTuitionPkr: 5858000,
      internationalStudentsPercentage: '20%',
      officialWebsite: 'https://www.ucalgary.ca/',
      sources: [
        {
          title: 'University of Calgary International Site',
          url: 'https://www.ucalgary.ca/',
          publisher: 'University of Calgary',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Dalhousie University',
      city: 'Halifax, Nova Scotia',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 275,
      },
      strongPrograms: ['Oceanography & Marine Biology', 'Rowe School of Business', 'Computer Science', 'Agriculture'],
      avgTuitionPerYearLocal: 27000,
      currency: 'CAD',
      approxTuitionPkr: 5454000,
      internationalStudentsPercentage: '24%',
      officialWebsite: 'https://www.dal.ca/',
      sources: [
        {
          title: 'Dalhousie University Official Portal',
          url: 'https://www.dal.ca/',
          publisher: 'Dalhousie University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Vanier Canada Graduate Scholarships (Vanier CGS)',
      grantingBody: 'Government of Canada (CIHR, NSERC, SSHRC)',
      coverageType: 'Full Funding (Stipend CAD $50,000 per year for up to 3 years)',
      eligibility:
        'World-class doctoral (PhD) applicants nominated by an eligible Canadian institution. Evaluated on academic excellence, research potential, and demonstrated leadership capabilities.',
      deadlineMonths: 'July – November (institutional internal deadlines precede national November deadline)',
      officialLink: 'https://vanier.gc.ca/en/home-accueil.html',
      sources: [
        {
          title: 'Vanier Canada Graduate Scholarships Official Portal',
          url: 'https://vanier.gc.ca/en/home-accueil.html',
          publisher: 'Government of Canada',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Banting Postdoctoral Fellowships',
      grantingBody: 'Government of Canada',
      coverageType: 'CAD $70,000 per year (taxable) for 2 years',
      eligibility:
        'Postdoctoral researchers of extraordinary merit who have completed their PhD/MD and are proposed by host Canadian institutions.',
      deadlineMonths: 'September (annual)',
      officialLink: 'https://banting.fellowships-bourses.gc.ca/en/home-accueil.html',
      sources: [
        {
          title: 'Banting Postdoctoral Fellowships Official Portal',
          url: 'https://banting.fellowships-bourses.gc.ca/en/home-accueil.html',
          publisher: 'Government of Canada',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Pierre Elliott Trudeau Foundation Doctoral Scholarships',
      grantingBody: 'Pierre Elliott Trudeau Foundation',
      coverageType: 'Up to CAD $60,000 per year for 3 years (stipend + research allowance)',
      eligibility:
        'Doctoral candidates in social sciences and humanities whose research aligns with human rights, responsible citizenship, Canada in the world, or people and the environment.',
      deadlineMonths: 'December (annual)',
      officialLink: 'https://www.trudeaufoundation.ca/',
      sources: [
        {
          title: 'Pierre Elliott Trudeau Foundation Scholarships',
          url: 'https://www.trudeaufoundation.ca/',
          publisher: 'Pierre Elliott Trudeau Foundation',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Lester B. Pearson International Student Scholarship',
      grantingBody: 'University of Toronto',
      coverageType: 'Full tuition, books, incidental fees, and full residence support for 4 years of undergraduate study',
      eligibility:
        'High-achieving international undergraduate applicants nominated by their high school (A-Level / FSc) in Pakistan who demonstrate exceptional academic achievement and creative leadership.',
      deadlineMonths: 'November (school nomination) - January (student application)',
      officialLink: 'https://future.utoronto.ca/pearson/',
      sources: [
        {
          title: 'University of Toronto Pearson Scholarships',
          url: 'https://future.utoronto.ca/pearson/',
          publisher: 'University of Toronto',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: '24 hours per week off-campus (updated November 8, 2024; on-campus work has no statutory hour ceiling)',
    holidayHours: 'Unlimited full-time hours during designated academic breaks (scheduled summer/winter intersessions)',
    minimumWageLocal: 'CAD $17.30 / hour (Federal minimum wage; Ontario CAD $17.20/hr, British Columbia CAD $17.40/hr, Alberta CAD $15.00/hr)',
    averageStudentWageLocal: 'CAD $18.00 - $24.00 / hour depending on role and location',
    regulationsSummary:
      'Students must hold a valid study permit containing explicit conditions authorizing off-campus work. Students must be enrolled in full-time studies at an eligible DLI. Off-campus employment without a valid Social Insurance Number (SIN) is illegal. Exceeding 24 hours per week during term constitutes unauthorized work under IRPA §30(1) and invalidates PGWP eligibility.',
    sources: [
      {
        title: 'IRCC - Work Off Campus as an International Student',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html',
        publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'Section 216(1) of IRPR - Home Ties & Risk of Not Leaving Canada',
      description:
        'The visa officer is not satisfied that the applicant will depart Canada at the end of their authorized stay. This is the single most common ground for Canadian study permit refusals from Pakistan.',
      howToAvoid:
        'Construct a comprehensive Statement of Purpose / Study Plan detailing strong economic, familial, and career ties to Pakistan. Provide a detailed return-to-Pakistan career road map: name specific target multinational employers in Pakistan (such as Engro, Unilever Pakistan, Jazz, Systems Ltd, Nestle Pakistan), cite domestic industry salary benchmarks, and document family real estate or immovable assets through official NADRA FRC and property evaluation certificates.',
      sources: [
        {
          title: 'IRCC - Refusals and How Decisions are Made',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Financial Inadequacy or Unverified Source of Funds (IRPR §220)',
      description:
        'Sudden, unexplained large deposits into sponsor bank accounts shortly before application submission, lack of proof regarding legitimate income generation, or failure to demonstrate funds to cover subsequent academic years.',
      howToAvoid:
        'Always obtain a CAD $20,635 Guaranteed Investment Certificate (GIC) to establish clear liquid living funds. Provide 6 continuous months of bank statements for all family sponsors accompanied by FBR Active Taxpayer certificates, certified tax returns (IT-2 / CPRs), business registrations (Form C / SECP), and verifiable source documents (salary slips, property sale deeds).',
      sources: [
        {
          title: 'IRCC - Financial Proof Guidelines',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Illogical Course Progression / Mismatched Academic Purpose',
      description:
        'Applying for a course that does not represent a logical advancement over existing Pakistani qualifications (e.g., an applicant holding a Pakistani Master degree applying for a 1-year community college diploma, or switching fields with no academic background).',
      howToAvoid:
        'Ensure the chosen Canadian qualification is an upward progression (e.g., Bachelor to Master, or Master to PhD/Specialized Post-Graduate Certificate). Articulate in the SOP why this exact curriculum provides specialized skills unavailable in Pakistan and how it bridges directly to targeted corporate positions upon return.',
      sources: [
        {
          title: 'IRCC - Study Plan Requirements',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Section 40 Misrepresentation (Undisclosed Prior Visa Refusals)',
      description:
        'Failure to disclose any prior visa refusal to Canada or any other country (such as the US, UK, Schengen countries, or Australia) in statutory question 2(b) of form IMM 1294.',
      howToAvoid:
        'Never omit a prior refusal. Canada participates in the Five Eyes biometric intelligence sharing agreement (FCC) with the US, UK, Australia, and New Zealand. Officers possess instant biometric records of past applications. Non-disclosure triggers a mandatory finding of misrepresentation under IRPA Section 40, resulting in an automatic 5-year entry ban.',
      sources: [
        {
          title: 'IRCC - Inadmissibility and Misrepresentation',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility/reasons.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'Canadian visa refusals do not feature an administrative review mechanism. If an application is refused, applicants can: (1) Order GCMS Notes (Global Case Management System notes via an Access to Information and Privacy / ATIP request) to view the visa officer’s internal case notes and specific rejection rationale; (2) Submit a fresh, comprehensively addressed re-application remedying every officer concern; or (3) Seek Judicial Review at the Federal Court of Canada through a Canadian immigration lawyer within 60 days of refusal.',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: 'Up to 3 years under the Post-Graduation Work Permit (PGWP)',
    workPermitType: 'Open Work Permit (LMIA-Exempt, enabling employment with any Canadian employer)',
    prPathwaysSummary:
      'Canada maintains multiple economic immigration pathways for international graduates: (1) Express Entry - Canadian Experience Class (CEC), requiring 1 year of Canadian skilled work experience in TEER 0, 1, 2, or 3; (2) Category-Based Express Entry draws prioritizing STEM, Healthcare, Trades, and French-language speakers; (3) Provincial Nominee Programs (PNPs) offering dedicated streams for graduates (e.g., Ontario Masters/PhD Graduate Streams, BC PNP International Post-Graduate Stream, Alberta AAIP).',
    citizenshipTimeline:
      'After obtaining Permanent Residence (PR), living in Canada for 3 out of 5 years (1,095 days) qualifies an applicant for Canadian Citizenship. Days spent in Canada on a valid Study Permit or PGWP count as half-days (up to a maximum credit of 365 days) toward the 1,095-day requirement.',
    sources: [
      {
        title: 'IRCC - Canadian Experience Class (Express Entry)',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/canadian-experience-class.html',
        publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
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
      'Restricted. Effective March 19, 2024, Spousal Open Work Permits (SOWP) are only available to spouses of students enrolled in master degree programs of at least 16 months duration, doctoral programs, or select professional degree programs (e.g., medicine, law, engineering). Spouses of undergraduate students are not eligible for open work permits but may apply for a standard visitor visa or their own employer-specific work permit.',
    childrenSchooling:
      'Minor accompanying children of international study permit holders are entitled to free public elementary and secondary education in most Canadian provinces without requiring an independent study permit under IRPA §30(2).',
    financialRequirementsPerDependent:
      'Additional CAD $5,055 for the first accompanying family member; CAD $5,893 for each subsequent family member, in addition to the principal applicant’s CAD $20,635 living funds.',
    sources: [
      {
        title: 'IRCC - Changes to Open Work Permits for Spouses of International Students',
        url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
        publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        publisherType: 'immigration_authority',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2024 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2024-01-01',
      headline: 'Statutory Living Funds Raised from CAD $10,000 to CAD $20,635',
      impact:
        'IRCC updated the cost-of-living financial requirement for study permits to CAD $20,635 (75% of Statistics Canada Low-Income Cut-Off / LICO) to prevent student financial vulnerability in response to national inflation.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-01-22',
      headline: 'National Study Permit Cap & Provincial Attestation Letter (PAL) Introduced',
      impact:
        'IRCC established an intake cap on international study permit applications and mandated that every post-secondary undergraduate and college applicant submit a PAL from their provincial government.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-02-15',
      headline: '3-Year PGWP Extended to All Master Degree Graduates',
      impact:
        'Graduates of master degree programs of at least 8 months became eligible for the maximum 3-year PGWP, even if their academic program was under 2 years in length.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-03-19',
      headline: 'Spousal Open Work Permits (SOWP) Restricted to Master’s & Doctoral Students',
      impact:
        'SOWP eligibility was terminated for spouses of undergraduate college and university students; only spouses of students in master’s (16+ months) and doctoral programs retain open work rights.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-11-08',
      headline: 'Discontinuation of the Student Direct Stream (SDS) Worldwide',
      impact:
        'IRCC ended the Student Direct Stream (SDS) globally. All international students, including Pakistani applicants, now apply through the regular study permit stream with comprehensive financial verification.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-11-08',
      headline: 'Off-Campus Work Hours Set to 24 Hours Per Week',
      impact:
        'IRCC permanently increased the off-campus work limit during regular academic sessions from 20 to 24 hours per week for eligible students.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-11-08',
      headline: 'Mandatory Study Permit Approval Required Before Changing DLI',
      impact:
        'Students must apply for and receive approval for a new study permit before transferring to a different Designated Learning Institution; simple portal notification is no longer permitted.',
      officialSourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in Canada
  studentLiving: {
    accommodationTypes: [
      {
        type: 'On-Campus Student Residences (Dormitories)',
        avgMonthlyCostLocal: 950,
        currencyCode: 'CAD',
        approxCostPkr: 191900,
        description: 'Single or shared furnished dorm rooms, often bundled with mandatory campus meal plans. High demand; requires application early in spring.',
      },
      {
        type: 'Off-Campus Shared Apartment (Private Room in 2–3 Bed Suite)',
        avgMonthlyCostLocal: 750,
        currencyCode: 'CAD',
        approxCostPkr: 151500,
        description: 'Most popular option among Pakistani students. Rented in suburban transit corridors across Greater Toronto (Mississauga, Scarborough), Metro Vancouver (Surrey, Burnaby), or Calgary.',
      },
      {
        type: 'Private 1-Bedroom Apartment / Studio',
        avgMonthlyCostLocal: 1650,
        currencyCode: 'CAD',
        approxCostPkr: 333300,
        description: 'Self-contained apartment in urban cores. Premium pricing in Toronto and Vancouver (CAD $2,000–$2,400); more affordable in Edmonton, Winnipeg, or Halifax (CAD $1,200–$1,500).',
      },
      {
        type: 'Homestay with Canadian Family',
        avgMonthlyCostLocal: 1050,
        currencyCode: 'CAD',
        approxCostPkr: 212100,
        description: 'Private furnished room including 2–3 daily home-cooked meals, ideal for first-year undergraduate students adapting to Canadian culture.',
      },
    ],
    groceriesAndHalalFood:
      'Halal food is ubiquitous across Canada, particularly in Ontario, Alberta, British Columbia, and Quebec. Major Canadian supermarket chains (No Frills, Walmart Supercentres, FreshCo, Food Basics, Real Canadian Superstore) feature dedicated certified halal poultry and beef sections. Independent Pakistani and South Asian grocers (Iqbal Foods, Al-Premium, Kohinoor, Sabzi Mandi) are prevalent across suburban transit hubs.',
    safetyAndCrime:
      'Canada consistently ranks among the top 10 safest countries globally on the Global Peace Index. Campuses maintain dedicated 24/7 campus security patrols, emergency blue-light stations, and safe-walk escort programs.',
    climateAndWeather:
      'Four distinct seasons. Winters (December to March) are cold with snow across most provinces (temperatures range from -5°C to -20°C in Ontario and Quebec, and -15°C to -30°C in the Prairies). Vancouver enjoys much milder coastal weather (0°C to 8°C in winter with frequent rain). Summers (June to August) are warm and pleasant (22°C to 30°C). High-grade winter coats (down jackets rated to -25°C) and waterproof boots are essential.',
    pakistaniCommunityPresence:
      'Canada hosts one of the world’s most dynamic Pakistani diasporas, with over 350,000 Pakistani-Canadians. The largest community concentrations are in the Greater Toronto Area (Mississauga, Brampton, Milton, Scarborough), Calgary, Edmonton, and Metro Vancouver (Surrey). Every major Canadian university features an active Pakistani Students Association (PSA) hosting independence day celebrations, cricket matches, and newcomer mentorship.',
    simAndBankingRecommended: {
      simProviders: [
        'Fido (Rogers network, popular student promo plans)',
        'Koodo Mobile (Telus network)',
        'Virgin Plus (Bell network)',
        'Freedom Mobile (Cost-effective urban plans)',
        'PhoneBox (Pre-arrival SIM cards shipped to Pakistan)',
      ],
      digitalBanks: [
        'Scotiabank (Scotiabank Student Banking Advantage Plan with no monthly fees and SCENE+ reward points)',
        'CIBC (Smart Account for Students with unlimited free Interac e-Transfers)',
        'RBC Royal Bank (RBC Student Advantage Banking)',
        'TD Canada Trust (Student Chequing Account)',
        'Simplii Financial / Tangerine (No-fee digital banking)',
      ],
    },
    transportationStudentPerks:
      'Most university student unions include a subsidized universal transit pass (U-Pass) within student incidental fees, granting unlimited travel on municipal transit networks (TTC in Toronto, TransLink in Vancouver, OC Transpo in Ottawa, STM in Montreal, Calgary Transit).',
    sources: [
      {
        title: 'Statistics Canada - Consumer Price Index & Living Standards',
        url: 'https://www.statcan.gc.ca/',
        publisher: 'Statistics Canada',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'Port of Entry Border Processing & Study Permit Issuance',
      description:
        'Present your passport with V-1 visa sticker, Port of Entry (POE) Introduction Letter, DLI Letter of Acceptance, and proof of funds to the Canada Border Services Agency (CBSA) border services officer at your first point of entry (Toronto Pearson YYZ, Vancouver YVR, or Montreal YUL). The officer will print and hand you your physical Study Permit (IMM 1442). Verify that your personal details and off-campus work conditions are correctly printed before leaving the immigration booth.',
      timeline: 'Immediately upon landing at Canadian airport',
      mandatory: true,
      officialPortalOrGuide: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare-arrival.html',
    },
    {
      stepNumber: 2,
      title: 'Apply for Social Insurance Number (SIN)',
      description:
        'Apply for your 9-digit Social Insurance Number (SIN) through Service Canada (either online or in person at a Service Canada Centre, or at dedicated airport welcome kiosks). Your SIN is legally mandatory before undertaking any paid on-campus or off-campus employment in Canada.',
      timeline: 'Within first 3 to 7 days of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.canada.ca/en/employment-social-development/services/sin.html',
    },
    {
      stepNumber: 3,
      title: 'Activate Canadian Bank Account & Unlock GIC Funds',
      description:
        'Visit a local branch of the Canadian bank holding your GIC (e.g., Scotiabank, CIBC, or RBC) with your original passport, study permit, and proof of residential address. Activate your chequing account to receive the initial disbursement of your GIC funds (typically CAD $4,000–$5,000) and establish your monthly allowance schedule.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
    },
    {
      stepNumber: 4,
      title: 'Register for Provincial Health Insurance / Campus Health Plan',
      description:
        'Enroll in your mandatory provincial or university student health insurance plan (such as UHIP in Ontario, MSP in British Columbia, AHCIP in Alberta, or RAMQ in Quebec). Health insurance is mandatory throughout your study duration in Canada.',
      timeline: 'Within first 2 weeks of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare-arrival.html',
    },
    {
      stepNumber: 5,
      title: 'Complete On-Campus University Registration & Collect Student ID Card',
      description:
        'Attend mandatory international student orientation at your DLI. Present your original study permit and passport to the registrar’s office to finalize course registration and receive your campus photo ID card.',
      timeline: 'During campus orientation week',
      mandatory: true,
      officialPortalOrGuide: 'https://www.univcan.ca/',
    },
    {
      stepNumber: 6,
      title: 'Obtain Local SIM Card & Collect Municipal Transit Card (U-Pass)',
      description:
        'Purchase a Canadian monthly post-paid or pre-paid mobile plan. Pick up your student transit smart card (Presto in Ontario, Compass in BC, Opus in Montreal) or activate your institutional digital transit pass.',
      timeline: 'Within first 3 to 5 days',
      mandatory: true,
      officialPortalOrGuide: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare-arrival.html',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'What happened to the Student Direct Stream (SDS) for Pakistani students?',
      answer:
        'On November 8, 2024, IRCC officially discontinued the Student Direct Stream (SDS) worldwide. Pakistani students now apply through the regular study permit process. While SDS no longer exists, holding an official GIC of CAD $20,635 and a strong IELTS/PTE score remains the most effective, credible way to demonstrate financial solvency and English proficiency in the regular stream.',
      category: 'Visa Application',
      sources: [
        {
          title: 'IRCC - Study Permit Application Guidelines',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is a Provincial Attestation Letter (PAL) and how do I get one?',
      answer:
        'A Provincial Attestation Letter (PAL) is a statutory document issued by a Canadian provincial government confirming that an applicant has been allocated a slot within the province’s federal study permit cap. You do not apply to the province directly; your university or college requests and issues the PAL on your behalf after you accept your offer of admission and pay your tuition deposit.',
      category: 'Admissions & Visas',
      sources: [
        {
          title: 'IRCC - Provincial Attestation Letter Requirements',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money must I show in total for a Canadian study permit from Pakistan?',
      answer:
        'You must prove: (1) First-year tuition fee (paid or unencumbered in bank); (2) Statutory cost-of-living funds of CAD $20,635 (PKR ~4.17M), preferably via a GIC; and (3) Approximately CAD $2,000–$3,000 for return airfare. For a student with a CAD $25,000 tuition fee, total liquid funds required equal approximately CAD $48,000 (PKR ~9.7M). If bringing an eligible spouse, add CAD $5,055, and CAD $5,893 for each child.',
      category: 'Finances',
      sources: [
        {
          title: 'IRCC - Financial Support Requirements',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work while studying in Canada, and what are the new hour limits?',
      answer:
        'Yes. Effective November 8, 2024, eligible full-time international students can work up to 24 hours per week off-campus during regular academic semesters (increased from 20 hours). During official academic breaks (such as winter holidays and summer break), you are legally permitted to work unlimited full-time hours. On-campus employment at your institution is uncapped throughout the year.',
      category: 'Employment',
      sources: [
        {
          title: 'IRCC - Work Off Campus as an International Student',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I bring my spouse with me, and can they work in Canada?',
      answer:
        'Under policy changes implemented on March 19, 2024, Spousal Open Work Permits (SOWP) are only available if the principal student is enrolled in a master degree program of at least 16 months duration, a doctoral program, or select professional degree programs (e.g. medicine, law). Spouses of undergraduate college and university students are no longer eligible for open work permits.',
      category: 'Family & Dependents',
      sources: [
        {
          title: 'IRCC - Open Work Permits for Spouses',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How long can I work in Canada after completing a Master’s degree?',
      answer:
        'Under updated PGWP criteria established in 2024, all graduates of eligible Canadian master degree programs (even those lasting only 1 or 1.5 years) are eligible to receive a full 3-year Post-Graduation Work Permit (PGWP), provided the program is at least 8 months long.',
      category: 'Post-Graduation',
      sources: [
        {
          title: 'IRCC - Post-Graduation Work Permit Rules',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is my Pakistani 2-year Bachelor’s degree (14 years education) eligible for a Master’s in Canada?',
      answer:
        'No. Canadian master degree programs strictly require a 4-year Bachelor degree (16 years of formal education). Holders of old Pakistani 2-year BA/BSc degrees must either complete a 2-year Master degree in Pakistan (e.g. MA/MSc) or an HEC-recognized conversion/post-graduate diploma to attain the necessary 16 years of education before applying for a Canadian master’s.',
      category: 'Admissions & Academics',
      sources: [
        {
          title: 'Universities Canada - Admission Equivalence Standards',
          url: 'https://www.univcan.ca/',
          publisher: 'Universities Canada',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the most frequent reason for study permit refusals from Pakistan?',
      answer:
        'Section 216(1) of the Immigration and Refugee Protection Regulations (IRPR)—where the officer doubts the applicant will leave Canada at the conclusion of their stay. This is usually triggered by a weak, generic Statement of Purpose, poor academic progression, or an inability to demonstrate tangible economic and familial ties to Pakistan.',
      category: 'Visa Refusals',
      sources: [
        {
          title: 'IRCC - Study Permit Application Guidelines',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I change my university or college after arriving in Canada?',
      answer:
        'Under regulations enacted in November 2024, international students must apply for and receive approval for a brand new study permit before transferring to a new Designated Learning Institution (DLI). You cannot simply change your DLI through an online portal notification as was permitted previously.',
      category: 'Regulations',
      sources: [
        {
          title: 'IRCC - Changing Your School or Program',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I give biometrics for Canada in Pakistan?',
      answer:
        'Biometrics (ten-fingerprint scans and digital facial photograph) are collected at VFS Global Canada Visa Application Centres located in Islamabad, Lahore, and Karachi. You must receive a Biometric Instruction Letter (BIL) from IRCC before booking an appointment.',
      category: 'Biometrics & Portals',
      sources: [
        {
          title: 'VFS Global Pakistan Canada Visa Application Centre',
          url: 'https://visa.vfsglobal.com/pak/en/can',
          publisher: 'VFS Global',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Does Canadian study experience count toward Permanent Residency (PR)?',
      answer:
        'Yes. Canadian educational credentials grant extra points under the Comprehensive Ranking System (CRS) for Express Entry (15 points for 1–2 year diplomas/degrees, 30 points for 3+ year degrees or master’s/PhD). After graduating and completing 1 year of skilled work experience under PGWP, you qualify for the Canadian Experience Class (CEC) stream.',
      category: 'Immigration & PR',
      sources: [
        {
          title: 'IRCC - Comprehensive Ranking System (CRS) Criteria',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/criteria-comprehensive-ranking-system/grid.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Do I need an upfront medical examination before submitting my application from Pakistan?',
      answer:
        'Yes. Submitting an upfront medical exam conducted by an IRCC-approved Panel Physician (IOM Migration Health Assessment Centres in Islamabad, Lahore, or Karachi) is strongly recommended. It prevents processing delays and allows the officer to finalize medical clearance simultaneously with your document review.',
      category: 'Medical Examination',
      sources: [
        {
          title: 'IRCC - Panel Physicians in Pakistan',
          url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
          publisher: 'IRCC',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'IRCC - Study in Canada as an International Student (Official Portal)',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - Study Permit Eligibility Criteria',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - How to Apply for a Study Permit',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - Proof of Financial Support and Statutory Document Checklist',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - Post-Graduation Work Permit Program (PGWP)',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - Off-Campus Work Regulations for Students',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'IRCC - Open Work Permits for Spouses of Students',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
      publisher: 'Immigration, Refugees and Citizenship Canada (IRCC)',
      publisherType: 'immigration_authority',
    },
    {
      title: 'VFS Global Pakistan - Canadian Visa Application Centre',
      url: 'https://visa.vfsglobal.com/pak/en/can',
      publisher: 'VFS Global',
      publisherType: 'visa_centre',
    },
    {
      title: 'High Commission of Canada in Pakistan (Islamabad)',
      url: 'https://www.international.gc.ca/country-pays/pakistan/islamabad.aspx?lang=eng',
      publisher: 'Global Affairs Canada',
      publisherType: 'embassy',
    },
    {
      title: 'Universities Canada - Official University Directory & Standards',
      url: 'https://www.univcan.ca/',
      publisher: 'Universities Canada',
      publisherType: 'university',
    },
    {
      title: 'Statistics Canada - International Student Tuition and Living Statistics',
      url: 'https://www.statcan.gc.ca/',
      publisher: 'Statistics Canada',
      publisherType: 'government',
    },
    {
      title: 'Vanier Canada Graduate Scholarships',
      url: 'https://vanier.gc.ca/en/home-accueil.html',
      publisher: 'Government of Canada',
      publisherType: 'scholarship',
    },
    {
      title: 'Banting Postdoctoral Fellowships',
      url: 'https://banting.fellowships-bourses.gc.ca/en/home-accueil.html',
      publisher: 'Government of Canada',
      publisherType: 'scholarship',
    },
    {
      title: 'Pierre Elliott Trudeau Foundation',
      url: 'https://www.trudeaufoundation.ca/',
      publisher: 'Pierre Elliott Trudeau Foundation',
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
      title: 'NADRA Official Portal',
      url: 'https://www.nadra.gov.pk/',
      publisher: 'NADRA Pakistan',
      publisherType: 'government',
    },
    {
      title: 'OUAC - Ontario Universities Application Centre',
      url: 'https://www.ouac.on.ca/',
      publisher: 'OUAC',
      publisherType: 'portal',
    },
  ],
};
