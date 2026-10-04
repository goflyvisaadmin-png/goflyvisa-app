import { CountryGuideData } from './types';

export const italyGuide: CountryGuideData = {
  countryCode: 'IT',
  countryName: 'Italy',
  slug: 'italy',
  flagEmoji: '🇮🇹',
  tagline: 'Historic European Excellence, Generous Need-Based DSU Scholarships, and Full Tuition Fee Waivers',
  metaDescription:
    'Authoritative statutory guide for Pakistani students applying to Italian universities in 2025/2026. National Visa Type D for study, Universitaly pre-enrolment, CIMEA / DOV equivalence, regional DSU scholarships, ISEE Parificato, and BLS-Intiana visa application centres.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'All international degree-seeking students must complete pre-enrolment on the official Ministry of Universities and Research (MUR) Universitaly portal. Long-term students (National Visa D) are legally required to apply for their Permesso di Soggiorno (Residence Permit for Study) via Poste Italiane within 8 business days of arriving in Italy. Need-based regional DSU scholarships can fully cover tuition, accommodation, and provide living stipends up to €8,500/year.',

  defaultHomeCountry: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    currencySymbol: 'Rs.',
    exchangeRateToDestinationCurrency: 305.0, // 1 EUR ≈ 305 PKR (current benchmark)
    exchangeRateDate: '2026-10-04',
  },

  // 1. Quick Facts Bar
  quickFacts: {
    capital: 'Rome',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: 'Euro',
    },
    officialLanguages: ['Italian'],
    intakes: [
      {
        name: 'Autumn Intake (Primary / September / October)',
        months: 'September / October - January',
        notes: 'Primary intake across all Italian public and technical universities. Hosts 90%+ of English-taught Bachelor and Master degree programs, regional DSU scholarship competitions, and Universitaly pre-enrollment quotas. Application deadlines: February - May.',
      },
      {
        name: 'Spring Intake (Secondary / February / March)',
        months: 'February / March - July',
        notes: 'Strictly limited; offered primarily for select postgraduate research positions, executive master programs, and Italian language preparatory tracks.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 900,
      maxLocal: 4000,
      currencyCode: 'EUR',
      approxPkrMin: 274500,
      approxPkrMax: 1220000,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Universitaly - University System & Tuition Fees',
          url: 'https://www.universitaly.it/',
          publisher: 'Ministry of Universities and Research (MUR)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Italian public universities do not charge flat commercial tuition rates; statutory fees are calculated on the family economic index (ISEE Parificato). For Pakistani students whose family income falls below €23,000–€25,000/year, tuition is reduced to the lowest statutory bracket (€156–€900/year) or waived completely (100% waiver) through regional DSU scholarships.',
    },
    monthlyLivingCost: {
      minLocal: 650,
      maxLocal: 950,
      currencyCode: 'EUR',
      approxPkrMin: 198250,
      approxPkrMax: 289750,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Ministry of Foreign Affairs and International Cooperation - Visa Financial Requirements',
          url: 'https://www.esteri.it/en/',
          publisher: 'MAECI / Ministry of the Interior Italy',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Statutory minimum financial means required by Italian immigration decree is €467.65 per month (€6,079.45/year). Living costs in northern hubs (Milan, Bologna) range from €800–€1,100/month; central and southern cities (Turin, Padua, Pisa, Rome, Naples) average €600–€850/month.',
    },
    postStudyWorkDuration: '9 to 12 months under the Permesso di Soggiorno per Ricerca Lavoro o Imprenditorialità (Job Search Permit for Master/PhD graduates)',
    partTimeWorkHoursTerm: '20 hours per week (Maximum statutory limit of 1,040 hours per calendar year under Legislative Decree 286/98)',
    partTimeWorkHoursHolidays: 'Up to 40 hours per week during official university vacation periods (provided annual aggregate remains within 1,040 hours)',
    visaProcessingTimeWeeks: '4 to 8 weeks via BLS-Intiana and the Embassy of Italy in Islamabad / Consulate General in Karachi',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'National Visa (Type D) for Study / University Enrolment',
      subCategory: 'Visto Nazionale D per Studio / Immatricolazione Università',
      purpose: 'The statutory long-stay entry visa permitting non-EU students to enter Italy to attend full-time degree programs exceeding 90 days at an accredited Italian university.',
      eligibilitySummary:
        'Validated pre-enrollment summary (Riepilogo) approved on Universitaly, university Letter of Admission, CIMEA Statement of Comparability / DOV, proof of minimum financial means of €6,079.45 (via seasoned 6-month bank statement), international health insurance covering at least €30,000, and proof of accommodation in Italy.',
      feeLocal: 50,
      feeCurrency: 'EUR',
      approxFeePkr: 15250,
      validity: 'Single or multiple entry, valid for 365 days. Must be converted into a Permesso di Soggiorno within 8 business days of arrival.',
      processingTime: '4 to 8 weeks in Pakistan.',
      sources: [
        {
          title: 'Ministry of Foreign Affairs and International Cooperation (MAECI) - Visa for Italy',
          url: 'https://www.esteri.it/en/',
          publisher: 'MAECI',
          publisherType: 'government',
        },
        {
          title: 'Embassy of Italy in Islamabad - Visa Information',
          url: 'https://ambislamabad.esteri.it/en/',
          publisher: 'Embassy of Italy in Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Permesso di Soggiorno per motivi di Studio (Residence Permit for Study)',
      subCategory: 'Issued by Questura (Immigration Police Headquarters) via Poste Italiane',
      purpose: 'The mandatory domestic residence card granting legal residency, multiple re-entries across the Schengen Area, and legal authorization for 20 hours/week part-time employment.',
      eligibilitySummary:
        'Must be applied for within 8 working days of arrival in Italy by submitting the "Kit Giallo" yellow postal kit at an authorized Sportello Amico post office counter, followed by a fingerprint appointment at the local Questura.',
      feeLocal: 116, // €70.46 electronic card + €16 bollo stamp + €30 post office fee
      feeCurrency: 'EUR',
      approxFeePkr: 35380,
      validity: '1 year, renewable annually upon passing at least 1 academic exam in the first year and 2 exams in subsequent years.',
      processingTime: '1 to 3 months inside Italy (postal receipt serves as legal proof of status).',
      sources: [
        {
          title: 'Polizia di Stato - Permesso di Soggiorno per Studio',
          url: 'https://www.esteri.it/en/',
          publisher: 'Polizia di Stato / Ministero dell’Interno',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Permesso di Soggiorno per Ricerca Lavoro o Imprenditorialità',
      subCategory: 'Post-Graduation Job Search / Entrepreneurship Permit (D.Lgs. 286/98 Art. 39-bis.1)',
      purpose: 'Authorizes foreign graduates of Italian Master’s degrees (Laurea Magistrale) or Doctoral degrees (Dottorato) to remain in Italy for 9 to 12 months to seek employment or launch an innovative startup.',
      eligibilitySummary:
        'Must hold an official Italian Master’s or PhD degree and demonstrate financial resources not lower than the annual social allowance (€6,079.45) plus health insurance.',
      feeLocal: 116,
      feeCurrency: 'EUR',
      approxFeePkr: 35380,
      validity: '9 to 12 months.',
      processingTime: '4 to 8 weeks inside Italy.',
      sources: [
        {
          title: 'Ministero del Lavoro e delle Politiche Sociali - Job Search Permit',
          url: 'https://www.esteri.it/en/',
          publisher: 'Ministry of Labour and Social Policies Italy',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Uniform Schengen Visa (Type C - Short-Term Study)',
      subCategory: 'Studies up to 90 Days',
      purpose: 'Authorizes entry into Italy and the Schengen Area for intensive Italian language courses, summer workshops, or academic training lasting 90 days or less.',
      eligibilitySummary:
        'Admission letter for short course, proof of travel medical insurance (€30,000 cover), confirmed flight bookings, and bank financial proof.',
      feeLocal: 90,
      feeCurrency: 'EUR',
      approxFeePkr: 27450,
      validity: 'Up to 90 days within any 180-day period.',
      processingTime: '15 calendar days.',
      sources: [
        {
          title: 'MAECI - Schengen Visas',
          url: 'https://www.esteri.it/en/',
          publisher: 'MAECI',
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
        name: 'Universitaly Portal (Ministry of Universities & Research - MUR)',
        url: 'https://www.universitaly.it/',
        description: 'Mandatory central Italian government platform for pre-enrolment validation, university quota reservations, and electronic transmission of student profiles to Italian embassies.',
      },
      {
        name: 'CIMEA (Information Centre on Academic Mobility and Equivalence)',
        url: 'https://www.cimea.it/en',
        description: 'Official body providing digital Statements of Comparability and Verification recognized across Italian universities and visa desks.',
      },
      {
        name: 'BLS-Intiana Italy Visa Application Centre Pakistan',
        url: 'https://www.intianaitalyvisa.com',
        description: 'Official outsourced partner authorized by the Embassy of Italy in Islamabad for biometric capture, appointment booking, and visa document submission across Pakistan.',
      },
      {
        name: 'Embassy of Italy in Islamabad',
        url: 'https://ambislamabad.esteri.it/en/',
        description: 'Official diplomatic mission responsible for study visa adjudication for Islamabad, Punjab, KPK, and Northern Pakistan.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Secure University Admission Offer & Complete Universitaly Pre-Enrolment',
        description:
          'Apply directly to your chosen Italian university. Upon receiving an offer letter or eligibility notice, create an account on Universitaly (universitaly.it) and submit your pre-enrolment application under the academic year quota. Specify your visa office (Embassy of Italy in Islamabad or Consulate in Karachi). Your university will review and digitally validate your pre-enrolment summary (Riepilogo).',
      },
      {
        stepNumber: 2,
        title: 'Obtain Academic Credential Evaluation (CIMEA or Declaration of Value)',
        description:
          'Have your Pakistani academic degrees and transcripts attested by HEC / IBCC and authenticated by MOFA Pakistan. Submit your credentials to CIMEA (cimea.it) to obtain a digital Statement of Comparability and Statement of Verification, or apply to the Italian diplomatic mission for a Declaration of Value (Dichiarazione di Valore - DOV).',
      },
      {
        stepNumber: 3,
        title: 'Apply for Regional DSU Scholarship & Prepare ISEE Parificato',
        description:
          'Register on the regional scholarship portal governing your university (e.g., EDISU Piemonte, DSU Toscana, DiSCo Lazio, ER.GO). Assemble family income documents (FBR tax returns, salary certificates), family property records from the local revenue authority (Patwari / Tehsildar), bank statements, and NADRA FRC. Have them translated into Italian by an embassy-approved translator and apostilled by MOFA Pakistan to calculate your ISEE Parificato.',
      },
      {
        stepNumber: 4,
        title: 'Schedule Visa Appointment via BLS-Intiana Pakistan',
        description:
          'Once your university approves and transmits your Universitaly summary to the embassy, book an appointment through BLS-Intiana (intianaitalyvisa.com) at your nearest centre: Islamabad, Lahore, Faisalabad, Multan, or Karachi. Pay the required BLS service charges.',
      },
      {
        stepNumber: 5,
        title: 'Submit Visa File & Biometrics at BLS-Intiana Centre',
        description:
          'Attend your appointment with your original passport, validated Universitaly Riepilogo, admission letter, CIMEA certificate / DOV, 6-month bank statements of student/sponsor showing at least €6,079.45 with FBR tax returns, travel health insurance (€30,000 cover), flight booking, and proof of initial accommodation. Complete biometric fingerprint scans. Pay the €50 statutory visa fee in PKR.',
      },
      {
        stepNumber: 6,
        title: 'Collect Passport with National Visa (Type D) Counterfoil',
        description:
          'Upon visa approval, collect your passport containing the 365-day multiple-entry Type D study visa from the BLS-Intiana counter or via courier delivery.',
      },
      {
        stepNumber: 7,
        title: 'Apply for Permesso di Soggiorno Within 8 Business Days in Italy',
        description:
          'Within 8 working days of stepping foot in Italy, obtain a "Kit Giallo" (yellow envelope application) from an authorized Sportello Amico post office. Fill out Form 1, attach passport copies, visa, Universitaly summary, health insurance, and a €16 Marca da Bollo revenue stamp. Submit the kit at the post office counter and receive your registered postal receipt (Ricevuta) containing your Questura fingerprint appointment date.',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'BLS-Intiana Italy Visa Application Centre - Islamabad',
        address: '1st Floor, Razia Sharif Plaza, 90 Blue Area, Jinnah Avenue, Islamabad, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return', 'Document Photocopy & Photography'],
      },
      {
        city: 'Lahore',
        centreName: 'BLS-Intiana Italy Visa Application Centre - Lahore',
        address: '2nd Floor, 2-B, Gulberg II, Zahoor Elahi Road, Lahore, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return'],
      },
      {
        city: 'Karachi',
        centreName: 'BLS-Intiana Italy Visa Application Centre - Karachi',
        address: 'Bahria Complex IV, 4th Floor, Main Chaudhary Khaliq-uz-Zaman Road, Gizri, Clifton, Karachi, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Submission', 'Courier Delivery'],
      },
      {
        city: 'Multan',
        centreName: 'BLS-Intiana Italy Visa Application Centre - Multan',
        address: '66 Old Bahawalpur Road, Near District Courts, Multan, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Submission'],
      },
      {
        city: 'Faisalabad',
        centreName: 'BLS-Intiana Italy Visa Application Centre - Faisalabad',
        address: 'East Canal Road, Near Regency Plaza, Faisalabad, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Submission'],
      },
    ],
    interviewGuidelines: {
      isMandatory: false,
      description:
        'Interviews are not standard for all candidates, but the Embassy of Italy in Islamabad frequently summons applicants for in-person or telephone interviews if academic qualifications, sponsor financial sources, or English fluency require verification.',
      tips: [
        'Be thoroughly familiar with your degree syllabus, number of ECTS credits (usually 120 ECTS for a 2-year Master), and specific university departments.',
        'Explain why this exact Italian program was selected over Pakistani institutions (e.g. LUMS, NUST, UET) and other European universities.',
        'Detail your family sponsor’s verifiable income: know their FBR Active Taxpayer details, business registrations, and annual turnover.',
        'Clarify whether your program is English-taught or Italian-taught; demonstrate fluent verbal English without hesitation.',
        'Articulate how you will manage initial living costs before regional DSU scholarship installments are disbursed (usually in December/January).',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Validated Universitaly Pre-Enrolment Summary (Riepilogo)',
        description: 'Official digital summary certified by the Italian university registrar and transmitted to the embassy.',
        mandatory: true,
        sources: [
          {
            title: 'Universitaly Official Portal',
            url: 'https://www.universitaly.it/',
            publisher: 'Ministry of Universities and Research',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'University Letter of Admission / Acceptance',
        description: 'Official acceptance letter from the Italian university stating course name, duration, and language of instruction.',
        mandatory: true,
        sources: [
          {
            title: 'Embassy of Italy in Islamabad',
            url: 'https://ambislamabad.esteri.it/en/',
            publisher: 'Embassy of Italy in Pakistan',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'CIMEA Statement of Comparability / Declaration of Value (DOV)',
        description: 'Official academic equivalence credential issued by CIMEA or legal Declaration of Value issued by the Italian embassy.',
        mandatory: true,
        sources: [
          {
            title: 'CIMEA Information Centre',
            url: 'https://www.cimea.it/en',
            publisher: 'CIMEA Italy',
            publisherType: 'portal',
          },
        ],
      },
      {
        documentName: 'Bank Statements & Financial Solvency Proof (€6,079.45+)',
        description: 'Original bank statements covering 6 continuous months for the student or parents, Bank Maintenance Certificate, FBR tax returns (3 years), and wealth statement.',
        mandatory: true,
        sources: [
          {
            title: 'MAECI - Financial Requirements for Study Visa',
            url: 'https://www.esteri.it/en/',
            publisher: 'MAECI',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Valid International Passport',
        description: 'Original passport valid for at least 3 months beyond the intended visa expiry with at least two blank pages.',
        mandatory: true,
        sources: [
          {
            title: 'Embassy of Italy Islamabad',
            url: 'https://ambislamabad.esteri.it/en/',
            publisher: 'Embassy of Italy',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'Schengen Travel Medical Insurance (€30,000 Coverage)',
        description: 'Insurance policy valid for at least 30 to 90 days from the travel date, covering emergency hospitalization and repatriation across the Schengen Area.',
        mandatory: true,
        sources: [
          {
            title: 'Embassy of Italy Islamabad - Insurance Requirements',
            url: 'https://ambislamabad.esteri.it/en/',
            publisher: 'Embassy of Italy',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'Proof of Accommodation in Italy',
        description: 'Confirmed university dormitory booking, hotel/Airbnb reservation for at least 15–30 days, or a registered residential hospitality declaration (Dichiarazione di Ospitalità).',
        mandatory: true,
        sources: [
          {
            title: 'BLS-Intiana Italy Visa Documentation',
            url: 'https://www.intianaitalyvisa.com',
            publisher: 'BLS-Intiana',
            publisherType: 'visa_centre',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Academic Transcripts & Degrees',
        description: 'Matric and FSc certificates attested by IBCC; Bachelor degree and transcripts attested by HEC Pakistan and MOFA.',
        mandatory: true,
        sources: [
          {
            title: 'HEC Pakistan Degree Attestation',
            url: 'https://hec.gov.pk',
            publisher: 'HEC Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'English Proficiency Certificate (IELTS / PTE / TOEFL)',
        description: 'Standardized test scorecard meeting university and consular thresholds (typically IELTS 6.0–6.5 or PTE 58).',
        mandatory: true,
        sources: [
          {
            title: 'Embassy of Italy in Islamabad',
            url: 'https://ambislamabad.esteri.it/en/',
            publisher: 'Embassy of Italy in Pakistan',
            publisherType: 'embassy',
          },
        ],
      },
      {
        documentName: 'NADRA Family Registration Certificate (FRC)',
        description: 'Official NADRA FRC proving lineage to parents or family financial sponsors.',
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
    livingCostRequirementPerYear: 6080,
    currencyCode: 'EUR',
    approxLivingCostPkr: 1854400,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: 'Sponsor Bank Account Statements (6-Month History)',
        details:
          'Original statements from a recognized Pakistani scheduled bank covering 6 consecutive months in the name of the student or parent. Must show consistent cash balances exceeding €6,079.45 (recommended €7,500 to €8,500 / PKR ~2.3M to 2.6M) to comfortably prove living maintenance. Must be supported by FBR tax returns, tax assessment orders, and proof of legitimate business or employment income.',
        isPreferred: true,
      },
      {
        methodName: 'Regional DSU Scholarship Award / Ranking List',
        details:
          'Official provisional ranking or award certificate from regional scholarship bodies (such as EDISU Piemonte, DSU Toscana, ER.GO, DiSCo Lazio) certifying that the student is an eligible beneficiary (Beneficiario or Idoneo Beneficiario) for full tuition waiver, free meals, and living grants.',
        isPreferred: true,
      },
      {
        methodName: 'MAECI Italian Government Fellowship Letter',
        details:
          'Official grant letter from the Italian Ministry of Foreign Affairs confirming a monthly stipend of €900 and statutory tuition fee exemption.',
        isPreferred: true,
      },
      {
        methodName: 'University Merit Scholarship Award',
        details:
          'Letter from an Italian university (e.g. Politecnico di Milano Gold/Platinum, UNIBO Action 2) granting annual stipends of €5,000–€10,000.',
        isPreferred: true,
      },
    ],
    bankStatementHoldingPeriodDays: 180,
    visaApplicationFee: {
      amount: 50, // Statutory national visa fee for study
      currency: 'EUR',
      approxPkr: 15250,
    },
    otherSurcharges: [
      {
        name: 'BLS-Intiana Administrative Service Fee',
        amount: 25,
        currency: 'EUR',
        approxPkr: 7625,
        mandatory: true,
        notes: 'Payable in PKR at the BLS-Intiana visa application centre in Pakistan at the time of appointment.',
      },
      {
        name: 'Permesso di Soggiorno Kit Giallo Application Costs',
        amount: 116,
        currency: 'EUR',
        approxPkr: 35380,
        mandatory: true,
        notes: 'Payable in Italy within 8 days of arrival: €70.46 electronic card fee + €30 post office fee + €16 Marca da Bollo stamp.',
      },
      {
        name: 'Italian National Health Service (SSN) Annual Enrollment',
        amount: 700,
        currency: 'EUR',
        approxPkr: 213500,
        mandatory: false,
        notes: 'Voluntary registration into the Servizio Sanitario Nazionale (SSN) granting full public GP, specialist, and hospital healthcare equivalent to Italian citizens. (Private health insurance can substitute for €120–€180/year).',
      },
    ],
    sources: [
      {
        title: 'MAECI - Financial Requirements for Entry and Stay',
        url: 'https://www.esteri.it/en/',
        publisher: 'MAECI / Ministero dell’Interno',
        publisherType: 'government',
      },
      {
        title: 'Embassy of Italy in Islamabad - Consular Fee Table',
        url: 'https://ambislamabad.esteri.it/en/',
        publisher: 'Embassy of Italy in Pakistan',
        publisherType: 'embassy',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / Intermediate / FSc / ICS) with minimum 65%–70% overall marks, or Cambridge A-Levels (minimum 3 subjects with grades of CCC or better). The Italian education system strictly mandates at least 12 years of continuous formal pre-university schooling for direct admission to a 3-year Bachelor degree (Laurea Triennale).',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Honours / BE / BBA comprising 16 years of formal education / 180–240 ECTS credits) from an HEC-recognized university with a minimum CGPA of 2.8/4.0 (or first division / 60%+). Old 2-year Pakistani BA/BSc degrees (14 years of schooling) do NOT meet the Italian statutory 15–16 year threshold for direct entry to a 2-year Master’s degree (Laurea Magistrale); candidates must complete a 2-year Pakistani Master (MA/MSc) first.',
    doctoralRequirements:
      '18 years of formal education (MS / MPhil with thesis) from an HEC-accredited university, research publications, a comprehensive research proposal aligned with departmental priorities, and participation in the competitive public doctoral competition (Concorso di Dottorato).',
    pakistaniEquivalenceGuide: {
      matriculation: 'Recognized as equivalent to Italian Middle School Diploma (Diploma di Scuola Media); requires IBCC attestation.',
      intermediateFSc: 'Recognized as equivalent to Italian High School Diploma (Diploma di Maturità / Esame di Stato), satisfying the mandatory 12-year pre-university requirement.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees represent only 14 years of total education and are legally insufficient for Master (Laurea Magistrale) admission in Italy.',
      sixteenYearBachelors: '4-year BS / BE / BBA degrees from HEC-accredited Pakistani universities are universally assessed via CIMEA as equivalent to the Italian Laurea (1st cycle Bologna degree).',
      studyGapsAcceptability: 'Italian universities and the Italian Embassy accept study gaps (up to 3 to 6 years) provided they are justified with formal employment, tax records, and professional continuity.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Verification and stamp of all post-secondary Bachelor, Master, and PhD degrees and transcripts.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Verification and attestation of Matric and Intermediate (FSc) mark sheets and certificates.',
        link: 'https://ibcc.edu.pk',
      },
      {
        bodyName: 'CIMEA (Centro di Informazione sulla Mobilità e le Equivalenze Accademiche)',
        mandate: 'Official Italian body issuing digital Statements of Comparability and Verification.',
        link: 'https://www.cimea.it/en',
      },
    ],
    applicationPortals: [
      {
        portalName: 'Universitaly (MUR Official Portal)',
        url: 'https://www.universitaly.it/',
        scope: 'Statutory pre-enrolment portal for all Italian universities, fine arts academies (AFAM), and medical degree quotas.',
      },
      {
        portalName: 'Direct University Application Portals (PoliMi, UniBo, Sapienza)',
        url: 'https://www.universitaly.it/',
        scope: 'Used for academic admission assessments and scholarship nomination evaluations.',
      },
    ],
    deadlinesSummary:
      'Autumn Intake: University academic applications open November to April. Universitaly pre-enrolment opens April and typically closes in July–November (university specific). Regional DSU scholarship deadlines range from July to September.',
    sources: [
      {
        title: 'Universitaly - Guidelines for International Students',
        url: 'https://www.universitaly.it/',
        publisher: 'Ministry of Universities and Research',
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
        minScoreOverall: '6.0 - 6.5',
        subScoreRequirements: 'Minimum 5.5 to 6.0 in each individual band; competitive programs at Politecnico di Milano mandate 6.5 overall.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '58 - 65',
        subScoreRequirements: 'Minimum 50 in each communicative skill.',
      },
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '78 - 90',
        subScoreRequirements: 'Minimum 19 in each subscore.',
      },
      {
        testName: 'English Medium of Instruction (MOI) Certificate',
        minScoreOverall: 'Conditional University Acceptance',
        subScoreRequirements: 'Accepted by select engineering universities (e.g. PoliTo, Sapienza) for academic admission, but the Embassy of Italy in Islamabad strongly expects an official standardized English test (IELTS/PTE) for visa processing.',
      },
    ],
    moiWaiverAcceptability:
      'Moderate at university level, but discouraged for visa issuance. While certain Italian universities grant admission offers based on an MOI letter from an HEC-recognized Pakistani university, the Italian consular visa desk in Islamabad routinely requests an official IELTS or PTE score to confirm language proficiency before issuing a Type D study visa.',
    localLanguageImportance: {
      study: 'Zero Italian language proficiency required for English-taught degree programs. For Italian-taught degrees, certified B2 level proficiency is mandatory.',
      dailyLife: 'Basic survival Italian (A1–A2) is very valuable for daily grocery shopping, renting private apartments, navigating public transport, and interacting with government offices.',
      partTimeJobs: 'Intermediate spoken Italian (B1) is essential for securing local off-campus student employment (retail, customer service, cafes); technical campus lab positions require English.',
      postStudyPR: 'Crucial for long-term career integration. B1 level Italian is legally required to obtain Italian Citizenship by Naturalization.',
    },
    localLanguageTests: [
      {
        name: 'CILS (Certificazione di Italiano come Lingua Straniera - University of Siena)',
        description: 'Official Italian language proficiency certificate recognized worldwide and by Italian immigration.',
      },
      {
        name: 'CELI (Certificati di Lingua Italiana - University for Foreigners Perugia)',
        description: 'Recognized Italian language diploma for university admission and citizenship.',
      },
    ],
    sources: [
      {
        title: 'Universitaly - Language Certification Standards',
        url: 'https://www.universitaly.it/',
        publisher: 'Ministry of Universities and Research',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities
  topUniversities: [
    {
      name: 'Politecnico di Milano (PoliMi)',
      city: 'Milan, Lombardy',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 111,
      },
      strongPrograms: ['Mechanical Engineering', 'Civil & Structural Engineering', 'Architecture', 'Computer Science & AI', 'Design'],
      avgTuitionPerYearLocal: 3890,
      currency: 'EUR',
      approxTuitionPkr: 1186450,
      internationalStudentsPercentage: '21%',
      officialWebsite: 'https://www.polimi.it/en',
      sources: [
        {
          title: 'Politecnico di Milano Official Portal',
          url: 'https://www.polimi.it/en',
          publisher: 'PoliMi',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Sapienza University of Rome',
      city: 'Rome, Lazio',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 132,
      },
      strongPrograms: ['Classics & Ancient History', 'Physics', 'Aerospace Engineering', 'Artificial Intelligence & Robotics', 'Archaeology'],
      avgTuitionPerYearLocal: 2900,
      currency: 'EUR',
      approxTuitionPkr: 884500,
      internationalStudentsPercentage: '11%',
      officialWebsite: 'https://www.uniroma1.it/en',
      sources: [
        {
          title: 'Sapienza University of Rome Portal',
          url: 'https://www.uniroma1.it/en',
          publisher: 'Sapienza University of Rome',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Bologna (UNIBO)',
      city: 'Bologna, Emilia-Romagna',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 133,
      },
      strongPrograms: ['Law', 'Agricultural Sciences', 'Data Science', 'Automotive Engineering', 'International Relations'],
      avgTuitionPerYearLocal: 3000,
      currency: 'EUR',
      approxTuitionPkr: 915000,
      internationalStudentsPercentage: '12%',
      officialWebsite: 'https://www.unibo.it/en',
      sources: [
        {
          title: 'University of Bologna Official Portal',
          url: 'https://www.unibo.it/en',
          publisher: 'University of Bologna',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Università di Padova (University of Padua)',
      city: 'Padua, Veneto',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 236,
      },
      strongPrograms: ['Medicine & Surgery (English)', 'Physics & Astronomy', 'Psychology', 'Biotechnology', 'Environmental Engineering'],
      avgTuitionPerYearLocal: 2600,
      currency: 'EUR',
      approxTuitionPkr: 793000,
      internationalStudentsPercentage: '9%',
      officialWebsite: 'https://www.unipd.it/en/',
      sources: [
        {
          title: 'University of Padua Official Site',
          url: 'https://www.unipd.it/en/',
          publisher: 'University of Padua',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Politecnico di Torino (PoliTo)',
      city: 'Turin, Piedmont',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 241,
      },
      strongPrograms: ['Automotive Engineering', 'Petroleum Engineering', 'Electronic & Telecommunications Engineering', 'Computer Engineering'],
      avgTuitionPerYearLocal: 2600,
      currency: 'EUR',
      approxTuitionPkr: 793000,
      internationalStudentsPercentage: '19%',
      officialWebsite: 'https://www.polito.it/en',
      sources: [
        {
          title: 'Politecnico di Torino Portal',
          url: 'https://www.polito.it/en',
          publisher: 'PoliTo',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Milan (UniMi / La Statale)',
      city: 'Milan, Lombardy',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 285,
      },
      strongPrograms: ['International Medical School (IMS)', 'Pharmacy', 'Data Science & Economics', 'Veterinary Medicine'],
      avgTuitionPerYearLocal: 2400,
      currency: 'EUR',
      approxTuitionPkr: 732000,
      internationalStudentsPercentage: '8%',
      officialWebsite: 'https://www.unimi.it/en',
      sources: [
        {
          title: 'University of Milan Official Site',
          url: 'https://www.unimi.it/en',
          publisher: 'University of Milan',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Naples Federico II',
      city: 'Naples, Campania',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 335,
      },
      strongPrograms: ['Apple Developer Academy', 'Aerospace Engineering', 'Materials Science', 'Medicine'],
      avgTuitionPerYearLocal: 2000,
      currency: 'EUR',
      approxTuitionPkr: 610000,
      internationalStudentsPercentage: '5%',
      officialWebsite: 'https://www.unina.it/en_GB/home',
      sources: [
        {
          title: 'University of Naples Federico II Portal',
          url: 'https://www.unina.it/en_GB/home',
          publisher: 'University of Naples Federico II',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Pisa',
      city: 'Pisa, Tuscany',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 349,
      },
      strongPrograms: ['Computer Science', 'Physics', 'Mathematics', 'Nuclear Engineering', 'Veterinary Medicine'],
      avgTuitionPerYearLocal: 2400,
      currency: 'EUR',
      approxTuitionPkr: 732000,
      internationalStudentsPercentage: '8%',
      officialWebsite: 'https://www.unipi.it/',
      sources: [
        {
          title: 'University of Pisa Official Portal',
          url: 'https://www.unipi.it/',
          publisher: 'University of Pisa',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Florence (UniFI)',
      city: 'Florence, Tuscany',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 375,
      },
      strongPrograms: ['Architecture & Design', 'Economics & Development', 'Agricultural Sciences', 'Biomedicine'],
      avgTuitionPerYearLocal: 2500,
      currency: 'EUR',
      approxTuitionPkr: 762500,
      internationalStudentsPercentage: '9%',
      officialWebsite: 'https://www.unifi.it/',
      sources: [
        {
          title: 'University of Florence Official Portal',
          url: 'https://www.unifi.it/',
          publisher: 'University of Florence',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Rome Tor Vergata',
      city: 'Rome, Lazio',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 393,
      },
      strongPrograms: ['Global Governance', 'Economics & Finance', 'Engineering Sciences', 'Biotechnology'],
      avgTuitionPerYearLocal: 2200,
      currency: 'EUR',
      approxTuitionPkr: 671000,
      internationalStudentsPercentage: '10%',
      officialWebsite: 'https://en.uniroma2.it/',
      sources: [
        {
          title: 'University of Rome Tor Vergata Portal',
          url: 'https://en.uniroma2.it/',
          publisher: 'University of Rome Tor Vergata',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'University of Genoa (UniGe)',
      city: 'Genoa, Liguria',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 542,
      },
      strongPrograms: ['Marine & Maritime Engineering', 'Robotics Engineering', 'Computer Engineering', 'Yacht Design'],
      avgTuitionPerYearLocal: 2100,
      currency: 'EUR',
      approxTuitionPkr: 640500,
      internationalStudentsPercentage: '10%',
      officialWebsite: 'https://unige.it/en/',
      sources: [
        {
          title: 'University of Genoa Portal',
          url: 'https://unige.it/en/',
          publisher: 'University of Genoa',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Ca’ Foscari University of Venice',
      city: 'Venice, Veneto',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 580,
      },
      strongPrograms: ['Economics & Management', 'Languages & Cultural Studies', 'Environmental Humanities', 'Computer Science'],
      avgTuitionPerYearLocal: 2100,
      currency: 'EUR',
      approxTuitionPkr: 640500,
      internationalStudentsPercentage: '14%',
      officialWebsite: 'https://www.unive.it/',
      sources: [
        {
          title: 'Ca’ Foscari University of Venice Portal',
          url: 'https://www.unive.it/',
          publisher: 'Ca’ Foscari University of Venice',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Regional DSU Scholarships (Diritto allo Studio Universitario)',
      grantingBody: 'Regional Governments (EDISU Piemonte, DSU Toscana, DiSCo Lazio, ER.GO, ALiSEO)',
      coverageType: 'Full Funding (100% Tuition Fee Waiver + Free Dormitory Housing + Free Canteen Meals + €5,000–€8,500 Cash Stipend per year)',
      eligibility:
        'Awarded strictly on family financial need based on the ISEE Parificato economic indicator (family income below ~€23,000–€25,000/year). Pakistani applicants universally qualify for the highest support tier when submitting verified FBR tax returns, property valuation records, and NADRA FRC.',
      deadlineMonths: 'July – September (annual regional deadlines)',
      officialLink: 'https://www.universitaly.it/',
      sources: [
        {
          title: 'Universitaly - Regional Scholarships Overview',
          url: 'https://www.universitaly.it/',
          publisher: 'Ministry of Universities and Research',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'MAECI Grants for Foreign Citizens',
      grantingBody: 'Ministry of Foreign Affairs and International Cooperation (MAECI)',
      coverageType: 'Tuition Fee Exemption + Monthly Living Grant of €900 per month (disbursed in quarterly tranches) + Medical Insurance',
      eligibility:
        'Pakistani students holding an appropriate bachelor’s degree applying for Master’s (Laurea Magistrale) or PhD degrees. Age limit: under 28 for Master’s, under 30 for PhD.',
      deadlineMonths: 'May – June (annual)',
      officialLink: 'https://studyinitaly.esteri.it/',
      sources: [
        {
          title: 'Study in Italy - MAECI Scholarships',
          url: 'https://www.esteri.it/en/',
          publisher: 'MAECI',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Politecnico di Milano Merit-Based Scholarships (Platinum / Gold / Silver)',
      grantingBody: 'Politecnico di Milano',
      coverageType: 'Full Tuition Fee Waiver + Up to €10,000 gross cash stipend per year',
      eligibility:
        'Awarded automatically to top-ranked Master of Science international applicants based on outstanding academic percentage and portfolio.',
      deadlineMonths: 'February (Semester 1) / May (Semester 2)',
      officialLink: 'https://www.polimi.it/en',
      sources: [
        {
          title: 'PoliMi International Scholarships',
          url: 'https://www.polimi.it/en',
          publisher: 'PoliMi',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: '20 hours per week (Legislative Decree 286/98 Art. 14 restricts student work to a maximum of 1,040 hours per calendar year)',
    holidayHours: 'Up to 40 hours per week during university vacation periods, provided total annual hours do not exceed 1,040 hours',
    minimumWageLocal: '€8.00 - €10.50 / hour (~PKR 2,450–3,200/hr, governed under sectoral National Collective Labour Agreements / CCNL)',
    averageStudentWageLocal: '€9.00 - €13.00 / hour for hospitality, delivery, campus departmental tutoring (150-hour collaborations / 150 ore), and software development',
    regulationsSummary:
      'International students with a valid Permesso di Soggiorno per motivi di Studio are legally authorized to engage in part-time subordinate employment without an independent work permit, up to a statutory ceiling of 1,040 hours per year. Freelance self-employment (Partita IVA) is prohibited on a student permit. Students must obtain an Italian Tax Code (Codice Fiscale) from the Agenzia delle Entrate.',
    sources: [
      {
        title: 'Ministero dell’Interno - Foreign Students Work Rights (D.Lgs. 286/98)',
        url: 'https://www.esteri.it/en/',
        publisher: 'Ministry of the Interior Italy',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'Inadequate or Unverified Financial Means (€6,079.45 Statutory Requirement)',
      description:
        'Presenting bank accounts with sudden unseasoned deposits shortly before the visa appointment, relying on distant third-party sponsors, or failing to substantiate the source of deposits with FBR tax returns.',
      howToAvoid:
        'Maintain seasoned liquid funds of at least €7,500–€8,500 in the name of the student or parents for at least 6 continuous months. Provide official FBR Active Taxpayer certificates, certified tax returns (3 years), bank account maintenance certificates, and evidence of income (salary slips, business registrations).',
      sources: [
        {
          title: 'Embassy of Italy in Islamabad - Financial Assessment Rules',
          url: 'https://ambislamabad.esteri.it/en/',
          publisher: 'Embassy of Italy in Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Lack of Universitaly Pre-Enrolment Validation',
      description:
        'Applying for a visa without completing pre-enrolment on the Universitaly portal, or without the university having digitally validated and forwarded the summary (Riepilogo) to the embassy.',
      howToAvoid:
        'Never book a visa submission appointment until your university international admissions office confirms on Universitaly that your pre-enrolment application has been officially approved and transmitted.',
      sources: [
        {
          title: 'Universitaly - Pre-Enrolment Validation Guidelines',
          url: 'https://www.universitaly.it/',
          publisher: 'MUR',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Missing Academic Equivalence (CIMEA or DOV)',
      description:
        'Failing to submit a valid CIMEA Statement of Comparability / Verification or a Declaration of Value (DOV) proving 12 years of schooling for Bachelor’s or 16 years for Master’s.',
      howToAvoid:
        'Submit degrees to CIMEA (cimea.it) well in advance (April–June) to receive digital verification certificates prior to your embassy visa submission.',
      sources: [
        {
          title: 'CIMEA - Statements of Comparability',
          url: 'https://www.cimea.it/en',
          publisher: 'CIMEA',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Language Inadequacy During Embassy Verification',
      description:
        'Inability of the applicant to demonstrate fluent verbal English during phone or in-person verification calls from the Italian Embassy consular officers.',
      howToAvoid:
        'Prepare thoroughly to discuss your degree units, research interests, career roadmap in Pakistan, and reason for choosing Italy with spontaneous fluency.',
      sources: [
        {
          title: 'Embassy of Italy Islamabad - Consular Guidelines',
          url: 'https://ambislamabad.esteri.it/en/',
          publisher: 'Embassy of Italy',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'Under Italian administrative law, nonimmigrant visa refusals can be formally appealed by lodging an administrative recourse (Ricorso) through an Italian-licensed lawyer (Avvocato) before the Regional Administrative Tribunal of Lazio (TAR Lazio) in Rome within 60 calendar days of the formal refusal notification.',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: '9 to 12 months under the Permesso di Soggiorno per Ricerca Lavoro o Imprenditorialità',
    workPermitType: 'Permesso di Soggiorno per Lavoro Subordinato (Work Permit) or EU Blue Card',
    prPathwaysSummary:
      'Italy offers clear post-study transition channels for university graduates: (1) Graduates of a Laurea Magistrale (Master) or Dottorato (PhD) can convert their student permit into a 9–12 month Job Search Permit (Ricerca Lavoro); (2) Upon securing a full-time employment contract paying the statutory salary threshold, graduates convert directly into a Permesso di Soggiorno per Lavoro Subordinato outside the restrictive annual immigration quotas (Decreto Flussi quota exemptions apply to Italian degree holders); (3) High-earning graduates qualify for the Italian EU Blue Card (Carta Blu UE).',
    citizenshipTimeline:
      'After 5 continuous years of legal residence on a valid work permit, foreign workers can apply for the EU Long-Term Resident Permit (Permesso UE per soggiornanti di lungo periodo - Permanent Residence). Continuous lawful residence for 10 years qualifies an individual to apply for Italian Citizenship by Naturalization (Cittadinanza per Residenza).',
    sources: [
      {
        title: 'Ministero dell’Interno - Conversion of Student Residence Permits',
        url: 'https://www.esteri.it/en/',
        publisher: 'Ministry of the Interior Italy',
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
      'Spouses entering on family reunification (Ricongiungimento Familiare) or accompanied family visas receive a Permesso di Soggiorno per Motivi Familiari, which grants FULL UNRESTRICTED WORK RIGHTS in Italy (both employed and self-employed).',
    childrenSchooling:
      'Under the Italian Constitution, minor children of foreign residents are legally guaranteed free universal enrollment in Italian public schools (Scuola dell’Infanzia, Primaria, and Secondaria).',
    financialRequirementsPerDependent:
      'Must demonstrate an annual legal income exceeding the social allowance (€6,079.45) increased by 50% for each accompanying dependent family member, plus registered housing adequacy certificate (Idoneità Alloggiativa).',
    sources: [
      {
        title: 'Polizia di Stato - Family Reunification Guidelines',
        url: 'https://www.esteri.it/en/',
        publisher: 'Polizia di Stato',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2023 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2023-03-10',
      headline: 'Decreto Cutro Codifies Quota-Free Work Permit Conversions for Graduates',
      impact:
        'Law Decree 20/2023 (Decreto Cutro) permanently eliminated the requirement for Italian university graduates to compete under annual Decreto Flussi immigration caps when converting study permits to subordinate employment permits.',
      officialSourceUrl: 'https://www.esteri.it/en/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2023-11-01',
      headline: 'EU Blue Card Directives Updated in Italy (D.Lgs. 152/2023)',
      impact:
        'Italy enacted updated EU Blue Card rules lowering the minimum employment contract duration to 6 months and extending eligibility to skilled tertiary graduates with streamlined family reunification rights.',
      officialSourceUrl: 'https://www.esteri.it/en/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-01-01',
      headline: 'Statutory Annual Living Maintenance Set to €6,079.45',
      impact:
        'The Ministry of the Interior updated the minimum annual maintenance figure for study visas to €6,079.45 (€467.65/month), pegged to the national social allowance benchmark.',
      officialSourceUrl: 'https://www.esteri.it/en/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-07-01',
      headline: 'BLS-Intiana Appointed Official Visa Outsourcing Partner in Pakistan',
      impact:
        'The Embassy of Italy in Islamabad officially established BLS-Intiana as the sole authorized partner for biometric intake and visa document submissions across Islamabad, Lahore, Multan, and Faisalabad.',
      officialSourceUrl: 'https://ambislamabad.esteri.it/en/',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in Italy
  studentLiving: {
    accommodationTypes: [
      {
        type: 'On-Campus / Regional DSU Student Residences',
        avgMonthlyCostLocal: 280,
        currencyCode: 'EUR',
        approxCostPkr: 85400,
        description: 'Single or shared rooms in regional university colleges. Free or €200–€350/month for DSU scholarship beneficiaries.',
      },
      {
        type: 'Off-Campus Shared Apartment (Private Room / Camera Singola)',
        avgMonthlyCostLocal: 450,
        currencyCode: 'EUR',
        approxCostPkr: 137250,
        description: 'Private bedroom in a shared flat with Italian/international students. Averages €350–€450 in Turin, Padua, or Pisa; €550–€750 in central Milan or Rome.',
      },
      {
        type: 'Shared Double Room (Posto Letto in Doppia)',
        avgMonthlyCostLocal: 300,
        currencyCode: 'EUR',
        approxCostPkr: 91500,
        description: 'Shared bedroom with another student. Most economical private rental option in high-cost cities like Milan and Bologna.',
      },
    ],
    groceriesAndHalalFood:
      'Certified halal butchers (Macelleria Halal) and South Asian grocery stores are ubiquitous across every Italian university city (Milan, Rome, Turin, Bologna, Padua, Florence). Major Italian supermarket chains (Esselunga, Conad, Coop, Eurospin, Lidl) stock certified halal poultry, fresh pasta, vegetables, and pantry staples. University Mensa cafeterias clearly label ingredients and provide daily halal/vegetarian meal selections.',
    safetyAndCrime:
      'Italy is one of the safest countries in Europe. Violent crime is extremely rare. Petty theft and pickpocketing occur in tourist hubs (Rome Termini, Milan Duomo), but residential university neighborhoods are safe for evening student activities.',
    climateAndWeather:
      'Mediterranean and continental climate. Northern Italy (Milan, Turin, Bologna) experiences cold, foggy winters (0°C to 7°C) with occasional snowfall, and hot summers (28°C to 35°C). Central and Southern Italy (Rome, Naples) enjoy mild, pleasant winters (8°C to 15°C) and hot, sunny summers (30°C to 38°C).',
    pakistaniCommunityPresence:
      'Italy hosts the largest Pakistani diaspora in continental Europe, with over 150,000 Pakistani residents. Major community concentrations are in Lombardy (Milan, Brescia, Bergamo), Emilia-Romagna (Bologna, Carpi), and Rome. Pakistani Student Associations (PSA Italy) operate at PoliMi, PoliTo, and Sapienza, offering airport pickups, accommodation assistance, and ISEE Parificato guidance.',
    simAndBankingRecommended: {
      simProviders: [
        'iliad (Popular transparent low-cost plans with 120GB–150GB 5G data for €7.99–€9.99/mo)',
        'TIM / Vodafone Italia (Extensive nationwide 5G networks)',
        'WindTre (Student promotional bundles)',
      ],
      digitalBanks: [
        'Revolut / N26 (Instant European IBAN mobile banking with zero foreign exchange fees)',
        'Postepay Evolution (Issued by Poste Italiane with Italian IBAN, popular for receiving DSU scholarship stipends)',
        'Intesa Sanpaolo / UniCredit (Major Italian banks offering free banking for youth under 30)',
      ],
    },
    transportationStudentPerks:
      'Italian public transit networks (Trenitalia, Italo high-speed rail, ATM in Milan, ATAC in Rome, GTT in Turin) offer deeply discounted monthly and annual student transit passes (abbonamento studenti) costing €20–€30/month for unlimited urban metro, tram, and bus travel.',
    sources: [
      {
        title: 'Universitaly - Living in Italy',
        url: 'https://www.universitaly.it/',
        publisher: 'Ministry of Universities and Research',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'Obtain Italian Tax Code (Codice Fiscale)',
      description:
        'Your Codice Fiscale (16-character alphanumeric tax code) is essential for renting an apartment, opening a bank account, purchasing a SIM card, and signing employment contracts. It is usually issued by the Italian Embassy with your visa or can be obtained immediately upon landing from the local tax revenue office (Agenzia delle Entrate).',
      timeline: 'Immediately upon arrival in Italy',
      mandatory: true,
      officialPortalOrGuide: 'https://www.agenziaentrate.gov.it/',
    },
    {
      stepNumber: 2,
      title: 'Submit Kit Giallo for Permesso di Soggiorno Within 8 Business Days',
      description:
        'Visit an authorized Sportello Amico post office counter, pick up a yellow postal kit (Kit Giallo), complete Module 1, attach passport copies, visa, Universitaly summary, health insurance, and a €16 Marca da Bollo revenue stamp. Pay postal and electronic card fees (€116 total) and collect your registered postal receipt (Ricevuta) containing your Questura appointment date.',
      timeline: 'Within 8 business days of arrival (Mandatory Statutory Requirement)',
      mandatory: true,
      officialPortalOrGuide: 'https://www.esteri.it/en/',
    },
    {
      stepNumber: 3,
      title: 'Finalize University In-Person Matriculation & Collect Student ID Card',
      description:
        'Report to your university International Desk with your original passport, visa, Ricevuta of Permesso di Soggiorno, and original CIMEA comparability certificate / DOV to finalize matriculation and receive your university smart badge.',
      timeline: 'During first 2 weeks',
      mandatory: true,
      officialPortalOrGuide: 'https://www.universitaly.it/',
    },
    {
      stepNumber: 4,
      title: 'Submit Bank IBAN for DSU Scholarship Stipend Disbursements',
      description:
        'Open an Italian or European bank account (e.g. Postepay Evolution, Revolut, or Intesa Sanpaolo) and register your personal IBAN on your regional DSU portal (EDISU, DSU Toscana, ER.GO) to facilitate automatic direct deposits of scholarship allowances.',
      timeline: 'Within first month',
      mandatory: true,
      officialPortalOrGuide: 'https://www.universitaly.it/',
    },
    {
      stepNumber: 5,
      title: 'Purchase Local SIM Card & Monthly Student Transit Pass',
      description:
        'Visit an iliad or WindTre store with your passport and Codice Fiscale to purchase a monthly mobile package, and register at the municipal transit office for your discounted student transport pass.',
      timeline: 'First 3 to 5 days',
      mandatory: true,
      officialPortalOrGuide: 'https://www.universitaly.it/',
    },
    {
      stepNumber: 6,
      title: 'Attend Questura Appointment for Biometric Fingerprint Capture',
      description:
        'Attend your scheduled appointment at the immigration police headquarters (Questura) on the date printed on your post office Ricevuta. Present original passport, 4 passport photos, and Ricevuta for digital fingerprinting, and await SMS notification to collect your physical plastic Permesso di Soggiorno card.',
      timeline: 'On scheduled date (typically 1 to 3 months post-arrival)',
      mandatory: true,
      officialPortalOrGuide: 'https://www.esteri.it/en/',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'What is a regional DSU scholarship and can Pakistani students get full funding?',
      answer:
        'Yes. DSU (Diritto allo Studio Universitario) scholarships are need-based grants funded by Italian regional governments (e.g. EDISU Piemonte, DSU Toscana, DiSCo Lazio, ER.GO). Because eligibility is determined by family economic status (ISEE Parificato) rather than strict GPA competition, almost all Pakistani middle-class students fall below the income ceiling (€23,000–€25,000/year). A DSU scholarship provides 100% free tuition, free university dormitory accommodation, free cafeteria meals, and a cash living stipend of €5,000 to €8,500 per year.',
      category: 'DSU Scholarships',
      sources: [
        {
          title: 'Universitaly - Regional Scholarships',
          url: 'https://www.universitaly.it/',
          publisher: 'Ministry of Universities and Research',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is Universitaly and why is it mandatory?',
      answer:
        'Universitaly (universitaly.it) is the official central digital portal of the Italian Ministry of Universities and Research (MUR). Every international student seeking a degree in Italy must register and submit a pre-enrolment application. Your chosen university validates your academic eligibility and digitally transmits the official Riepilogo (summary) directly to the Italian Embassy in Islamabad or Consulate in Karachi. Visa applications cannot be lodged without this validated Riepilogo.',
      category: 'Pre-Enrolment',
      sources: [
        {
          title: 'Universitaly Official Platform',
          url: 'https://www.universitaly.it/',
          publisher: 'MUR',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the difference between CIMEA and a Declaration of Value (DOV)?',
      answer:
        'Both documents establish that your Pakistani educational qualification is equivalent to Italian standards (12 years of schooling for Bachelor’s, 16 years for Master’s). A Declaration of Value (Dichiarazione di Valore - DOV) is an official legal document issued physically by the Italian Embassy in Islamabad. A CIMEA Statement of Comparability is a digital equivalence certificate issued online by the Italian academic mobility agency (cimea.it). Most universities and embassies accept CIMEA as a faster digital alternative to the DOV.',
      category: 'Academic Equivalence',
      sources: [
        {
          title: 'CIMEA Equivalence Information',
          url: 'https://www.cimea.it/en',
          publisher: 'CIMEA',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money must I show in my bank account for an Italian study visa from Pakistan?',
      answer:
        'The statutory minimum financial requirement set by the Italian Ministry of the Interior is €467.65 per month for the academic year, which totals €6,079.45 (PKR ~1.85M). However, the Embassy of Italy in Islamabad strongly recommends showing a seasoned liquid bank balance of €7,500 to €8,500 (PKR ~2.3M to 2.6M) in the student’s or parent’s bank account covering 6 continuous months, supported by FBR tax returns.',
      category: 'Finances',
      sources: [
        {
          title: 'MAECI - Study Visa Financial Requirements',
          url: 'https://www.esteri.it/en/',
          publisher: 'MAECI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the Permesso di Soggiorno and what is the 8-day rule?',
      answer:
        'The National Visa (Type D) is merely an entry clearance foil. By statutory Italian law, you must apply for your official Foreigner Residence Permit for Study (Permesso di Soggiorno per motivi di Studio) within 8 business days of arriving in Italy. You submit a yellow application kit (Kit Giallo) at an authorized Sportello Amico post office. The registered postal receipt (Ricevuta) legally protects your stay until your plastic biometric residence card is issued.',
      category: 'Residence Permits',
      sources: [
        {
          title: 'Polizia di Stato - Residence Permit Procedures',
          url: 'https://www.esteri.it/en/',
          publisher: 'Polizia di Stato',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work part-time as a student in Italy?',
      answer:
        'Yes. Under Legislative Decree 286/98, holders of a valid Permesso di Soggiorno for study are legally permitted to work up to 20 hours per week, subject to an annual maximum ceiling of 1,040 hours per calendar year. Common student employment includes campus departmental collaborations (150 ore), restaurant hospitality, food delivery, and private tutoring.',
      category: 'Employment Rights',
      sources: [
        {
          title: 'Ministero dell’Interno - Student Employment Rules',
          url: 'https://www.esteri.it/en/',
          publisher: 'Ministry of the Interior',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I submit my Italian visa application in Pakistan?',
      answer:
        'Visa files are submitted in person at BLS-Intiana Italy Visa Application Centres located in Islamabad, Lahore, Karachi, Multan, or Faisalabad. You must first ensure your university has approved your Universitaly pre-enrolment before booking an appointment on intianaitalyvisa.com.',
      category: 'Visa Centres',
      sources: [
        {
          title: 'BLS-Intiana Italy Visa Application Centres Pakistan',
          url: 'https://www.intianaitalyvisa.com',
          publisher: 'BLS-Intiana',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is a Pakistani 2-year Bachelor’s degree (14 years) eligible for a Master’s in Italy?',
      answer:
        'No. Italian university regulations strictly require at least 15 to 16 years of formal education (equivalent to a 180 ECTS European Bachelor’s degree) for entry into a Laurea Magistrale (Master). Students with an old 2-year BA/BSc must complete a 2-year Master’s in Pakistan (e.g. MA/MSc) to establish 16-year equivalence.',
      category: 'Admissions & Equivalence',
      sources: [
        {
          title: 'Universitaly - Academic Recognition',
          url: 'https://www.universitaly.it/',
          publisher: 'MUR',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the post-study work option in Italy after completing a Master’s degree?',
      answer:
        'Graduates of an Italian Master’s degree (Laurea Magistrale) or PhD can apply for a Permesso di Soggiorno per Ricerca Lavoro o Imprenditorialità, which allows them to remain in Italy for 9 to 12 months to seek employment or start a business. When you find a qualifying job, your permit is converted directly to a standard work permit (Lavoro Subordinato) without being subject to annual immigration quotas (Decreto Flussi).',
      category: 'Post-Graduation',
      sources: [
        {
          title: 'Ministero del Lavoro - Job Search Permit',
          url: 'https://www.esteri.it/en/',
          publisher: 'Ministry of Labour',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What documents are required from Pakistan to calculate my ISEE Parificato for DSU?',
      answer:
        'To calculate your ISEE Parificato, you need: (1) NADRA Family Registration Certificate (FRC); (2) Certified income tax returns (FBR) or salary slips of all working family members for the previous calendar year; (3) Family property valuation certificate from the local land revenue office (Patwari / Tehsildar); and (4) Bank statements of all family members showing balances as of December 31. All documents must be translated into Italian by an approved translator and apostilled by MOFA Pakistan.',
      category: 'DSU Scholarships',
      sources: [
        {
          title: 'EDISU Piemonte - ISEE Parificato Guide',
          url: 'https://www.universitaly.it/',
          publisher: 'EDISU / MUR',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I travel across other European countries on an Italian student visa?',
      answer:
        'Yes. An Italian National Visa (Type D) or Permesso di Soggiorno allows you to travel freely across all 29 Schengen Area countries (including Germany, France, Switzerland, Spain, Netherlands) for up to 90 days in any 180-day period for tourism and academic conferences.',
      category: 'Schengen Mobility',
      sources: [
        {
          title: 'European Commission - Schengen Visa Rules',
          url: 'https://www.esteri.it/en/',
          publisher: 'European Commission / MAECI',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I register for the Italian National Health Service (SSN)?',
      answer:
        'Yes. International students holding a valid Permesso di Soggiorno can voluntarily register with the Italian Servizio Sanitario Nazionale (SSN) by paying an annual contribution (typically €700/year under updated budget laws). This grants full parity with Italian citizens, including a dedicated General Practitioner (family doctor), free emergency care, and subsidized specialist prescriptions.',
      category: 'Healthcare',
      sources: [
        {
          title: 'Ministero della Salute - Health Insurance for Foreign Students',
          url: 'https://www.esteri.it/en/',
          publisher: 'Ministry of Health Italy',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'Universitaly - Italian Ministry of Universities and Research (MUR)',
      url: 'https://www.universitaly.it/',
      publisher: 'Ministry of Universities and Research',
      publisherType: 'government',
    },
    {
      title: 'Ministry of Foreign Affairs and International Cooperation (MAECI)',
      url: 'https://www.esteri.it/en/',
      publisher: 'MAECI Italy',
      publisherType: 'government',
    },
    {
      title: 'Embassy of Italy in Islamabad',
      url: 'https://ambislamabad.esteri.it/en/',
      publisher: 'Embassy of Italy in Pakistan',
      publisherType: 'embassy',
    },
    {
      title: 'BLS-Intiana Italy Visa Application Centre Pakistan',
      url: 'https://www.intianaitalyvisa.com',
      publisher: 'BLS-Intiana',
      publisherType: 'visa_centre',
    },
    {
      title: 'CIMEA - Academic Equivalences and Mobility Centre',
      url: 'https://www.cimea.it/en',
      publisher: 'CIMEA Italy',
      publisherType: 'portal',
    },
    {
      title: 'Agenzia delle Entrate - Italian Tax Code (Codice Fiscale)',
      url: 'https://www.agenziaentrate.gov.it/',
      publisher: 'Agenzia delle Entrate',
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
