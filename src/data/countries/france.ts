import { CountryGuideData } from './types';

export const franceGuide: CountryGuideData = {
  countryCode: 'FR',
  countryName: 'France',
  slug: 'france',
  flagEmoji: '🇫🇷',
  tagline: 'European Innovation Epicentre, Subsidized Public Tuition, CAF Student Housing Aid, and 2-Year Accelerated Naturalization',
  metaDescription:
    'Comprehensive statutory guide for Pakistani students applying to French universities in 2025/2026. Campus France Pakistan EEF procedure, VLS-TS student visa, €615/month living requirement, CAF housing aid, Eiffel scholarships, and RECE post-study permits.',
  lastVerified: '2026-10-04',
  heroDisclaimer:
    'All degree-seeking Pakistani applicants must complete the mandatory "Études en France" (EEF) procedure with Campus France Pakistan (Alliance Française in Islamabad, Lahore, or Karachi) before lodging their visa application with TLScontact. Long-stay student visas (VLS-TS) must be validated online via the ANEF portal within 3 months of entering France. International students benefit from 100% free French social security and monthly CAF housing subsidies (€100–€250/mo).',

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
    capital: 'Paris',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: 'Euro',
    },
    officialLanguages: ['French'],
    intakes: [
      {
        name: 'Autumn Intake (Primary / September / October)',
        months: 'September / October - January',
        notes: 'Primary intake across all French public universities and Grandes Écoles. Hosts 90%+ of English-taught and French-taught Master’s degrees, Eiffel Excellence Scholarships, and Campus France EEF campaigns. Application deadlines: December - April.',
      },
      {
        name: 'Spring Intake (Secondary / January / February)',
        months: 'January / February - June',
        notes: 'Available primarily at private business schools (Grandes Écoles de Commerce), intensive French language institutes, and specialized MBA/MSc tracks.',
      },
    ],
    avgTuitionPerYear: {
      minLocal: 2770,
      maxLocal: 3770,
      currencyCode: 'EUR',
      approxPkrMin: 844850,
      approxPkrMax: 1149850,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'Campus France - Tuition Fees at Higher Education Institutions in France',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'Under the "Bienvenue en France" policy, statutory national non-EU tuition is €2,770/year for Bachelor’s (Licence) and €3,770/year for Master’s at public universities (PhD is €380/year). However, dozens of leading universities (including Paris-Saclay, Grenoble Alpes, Aix-Marseille) automatically grant partial fee waivers reducing tuition to the domestic EU rate: €175/year for Bachelor’s and €250/year for Master’s! Elite business schools (HEC, INSEAD, ESSEC) charge commercial fees (€15,000–€35,000/year).',
    },
    monthlyLivingCost: {
      minLocal: 650,
      maxLocal: 1100,
      currencyCode: 'EUR',
      approxPkrMin: 198250,
      approxPkrMax: 335500,
      exchangeRateDate: '2026-10-04',
      sources: [
        {
          title: 'France-Visas - Financial Resources for International Students',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Ministère de l’Intérieur / France-Visas',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'The statutory minimum resource requirement set by French law is €615 per month (€7,380 per year for 12 months). Provincial university cities (Lyon, Toulouse, Grenoble, Montpellier, Strasbourg) cost €650–€850/month; living in central Paris typically requires €1,000–€1,300/month. The French CAF state housing subsidy (APL) reimburses €100–€250/month of student rent!',
    },
    postStudyWorkDuration: '12 months under the RECE permit (Recherche d’Emploi ou Création d’Entreprise - non-renewable)',
    partTimeWorkHoursTerm: 'Up to 964 hours per year (~20.5 hours per week during academic terms; 60% of annual statutory working time under French labor law)',
    partTimeWorkHoursHolidays: 'Up to 35 hours per week (full-time) during summer/winter university holidays (within the 964-hour annual limit)',
    visaProcessingTimeWeeks: '3 to 6 weeks via Campus France Pakistan (EEF) and TLScontact (Islamabad, Lahore, Karachi)',
  },

  // 2. Visa Types
  visaTypes: [
    {
      officialName: 'Long-Stay Visa equivalent to a Residence Permit (VLS-TS)',
      subCategory: 'VLS-TS Mention "Étudiant" (CESEDA Art. L422-1)',
      purpose: 'The primary statutory visa for international students admitted to degree programs or academic courses exceeding 90 days at an accredited French higher education institution.',
      eligibilitySummary:
        'Official acceptance letter, validated Campus France Pakistan EEF interview attestation, financial guarantee showing at least €615 per month for 1 academic year (via seasoned 6-month bank statements or irrevocable blocked bank guarantee), proof of accommodation for the first 3 months, and travel medical insurance.',
      feeLocal: 50, // Reduced statutory student consular fee
      feeCurrency: 'EUR',
      approxFeePkr: 15250,
      validity: '1 year, multiple entries across Schengen Area. Must be validated online on the ANEF portal within 3 months of landing in France.',
      processingTime: '3 to 6 weeks in Pakistan.',
      sources: [
        {
          title: 'France-Visas - Student Long-Stay Visa (VLS-TS)',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Ministère de l’Intérieur',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Recherche d’Emploi ou Création d’Entreprise (RECE) Permit',
      subCategory: 'Post-Graduation Job Search / Business Creation Permit (former APS)',
      purpose: 'Authorizes foreign graduates of French Master’s degrees (Grade de Master / Bac+5) or specialized Master’s (MS) to stay in France for 12 months to seek skilled employment or establish a company.',
      eligibilitySummary:
        'Must hold a valid student VLS-TS and graduate with an eligible French Master’s degree or PhD. Holders can work full-time in any job until they secure a contract matching their degree paying at least 1.5x the SMIC minimum wage (~€2,650 gross/month).',
      feeLocal: 225, // Statutory residence permit tax
      feeCurrency: 'EUR',
      approxFeePkr: 68625,
      validity: '12 months (non-renewable; must convert to Salarié work permit or Passeport Talent upon securing a contract).',
      processingTime: '4 to 8 weeks inside France.',
      sources: [
        {
          title: 'Campus France - The Job Search and Business Creation Residence Permit (RECE)',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Temporary Long-Stay Visa (VLS-T Étudiant)',
      subCategory: 'Studies Lasting Between 4 to 6 Months',
      purpose: 'Issued for short academic semesters or language courses lasting 4 to 6 months. Does not require validation on the ANEF portal and cannot be renewed inside France.',
      eligibilitySummary:
        'Admission for a program lasting 4 to 6 months, verified financial means of €615/month, and accommodation proof.',
      feeLocal: 50,
      feeCurrency: 'EUR',
      approxFeePkr: 15250,
      validity: '4 to 6 months, multiple entries across Schengen.',
      processingTime: '3 to 4 weeks.',
      sources: [
        {
          title: 'France-Visas - Temporary Long-Stay Visa',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'France-Visas',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      officialName: 'Passeport Talent (Chercheur / Researcher Permit)',
      subCategory: 'Doctoral Researchers & Postdoctoral Fellows (CESEDA Art. L421-14)',
      purpose: 'Multi-year residence authorization for PhD candidates and researchers employed by an accredited French academic institution with an official hosting agreement (Convention d’Accueil).',
      eligibilitySummary:
        'Official Hosting Agreement (Convention d’Accueil) signed by a French university or public research institute (CNRS, INSERM, CEA) and a formal employment contract or research fellowship.',
      feeLocal: 225,
      feeCurrency: 'EUR',
      approxFeePkr: 68625,
      validity: 'Up to 4 years (co-terminus with the research contract), grants direct full-time work rights and automatic family reunification.',
      processingTime: '3 to 6 weeks.',
      sources: [
        {
          title: 'Campus France - The Talent Passport for Researchers',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
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
        name: 'Études en France (EEF) Portal - Campus France',
        url: 'https://pastel.diplomatie.gouv.fr/etudesenfrance/',
        description: 'Mandatory French government portal where Pakistani students create their academic file, upload degrees, and schedule their Campus France academic interview.',
      },
      {
        name: 'France-Visas (Official French Visa Portal)',
        url: 'https://france-visas.gouv.fr/',
        description: 'Official digital visa application platform for completing the visa application form and generating the statutory document checklist.',
      },
      {
        name: 'TLScontact Pakistan',
        url: 'https://fr.tlscontact.com/',
        description: 'Official outsourced consular partner in Islamabad, Lahore, and Karachi for biometric fingerprint collection and passport intake.',
      },
      {
        name: 'ANNEF (Administration des Étrangers en France)',
        url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
        description: 'Official online portal for validating the VLS-TS visa, paying the €50 OFII residence tax stamp, and renewing student residence permits.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Secure University Admission Offer & Create Études en France (EEF) File',
        description:
          'Apply directly to an accredited French university or Grande École (or via the EEF pre-consular catalogue). Upon receiving an admission letter, create a profile on the official "Études en France" (EEF) platform (pastel.diplomatie.gouv.fr/etudesenfrance). Fill out the "Je suis accepté" (I have been accepted) dossier, upload academic credentials, admission letter, and passport.',
      },
      {
        stepNumber: 2,
        title: 'Attend Mandatory Campus France In-Person Academic Interview',
        description:
          'Pay the Campus France Pakistan procedural fee (~PKR 15,000–20,000) and book your academic interview at the Alliance Française in Islamabad, Lahore, or Karachi. Bring original attested degrees and transcripts. The Campus France officer interviews you regarding your academic project, course syllabus, and career goals in Pakistan. Receive your official Campus France Interview Attestation.',
      },
      {
        stepNumber: 3,
        title: 'Complete Digital Visa Application on France-Visas',
        description:
          'Access the official France-Visas portal (france-visas.gouv.fr). Complete the online application for a Long-Stay Student Visa (VLS-TS). Input your unique Campus France EEF registration number (starts with PK). Print the completed France-Visas form and the generated receipt checklist.',
      },
      {
        stepNumber: 4,
        title: 'Book Appointment & Submit Dossier at TLScontact Pakistan',
        description:
          'Create an account on the TLScontact Pakistan portal and book an appointment at the Visa Application Centre in Islamabad, Lahore, or Karachi. Submit your France-Visas application, Campus France attestation, original passport, university acceptance, 6-month bank statements of sponsor showing at least €615/month (€7,380/year) with FBR tax returns, accommodation proof (for at least 3 months), and travel insurance. Undergo biometric fingerprinting. Pay the €50 statutory visa fee in PKR.',
      },
      {
        stepNumber: 5,
        title: 'Collect Passport with VLS-TS Visa Foil',
        description:
          'Track your file online. Upon consular approval by the Embassy of France in Islamabad, collect your stamped passport from the TLScontact centre or receive it via secure courier.',
      },
      {
        stepNumber: 6,
        title: 'Validate VLS-TS Online Within 3 Months of Arrival (ANEF / OFII)',
        description:
          'Within 3 months of landing in France, visit the official ANEF portal (administration-etrangers-en-france.interieur.gouv.fr). Enter your visa number, date of arrival, residential address in France, and purchase the €50 electronic residence tax stamp (Taxe de séjour). Download your official Confirmation de Validation de l’Enregistrement du VLS-TS, which serves as your legal residence permit.',
      },
      {
        stepNumber: 7,
        title: 'Register for 100% Free French Social Security & Apply for CAF Housing Aid',
        description:
          'Register on the dedicated student healthcare portal (etudiant-etranger.ameli.fr) to obtain your French Social Security number (Numéro de Sécurité Sociale) granting 100% free public healthcare. Apply on caf.fr for the monthly APL (Aide Personnalisée au Logement) housing subsidy to receive €100–€250/month rent reimbursement directly into your French bank account.',
      },
    ],
    vacLocationsInHomeCountry: [
      {
        city: 'Islamabad',
        centreName: 'TLScontact Visa Application Centre - Islamabad',
        address: 'Park Road, Chattha Bakhtawar, Chak Shahzad, Islamabad, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return', 'Premium Lounge'],
      },
      {
        city: 'Lahore',
        centreName: 'TLScontact Visa Application Centre - Lahore',
        address: '20 Ex-American Centre Building, Opposite Ganga Ram Hospital, Queens Road, Lahore, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Intake', 'Passport Return'],
      },
      {
        city: 'Karachi',
        centreName: 'TLScontact Visa Application Centre - Karachi',
        address: 'Bahria Complex IV, 4th Floor, Main Chaudhary Khaliq-uz-Zaman Road, Gizri, Clifton, Karachi, Pakistan',
        servicesOffered: ['Biometric Collection', 'Document Submission', 'Courier Delivery'],
      },
    ],
    interviewGuidelines: {
      isMandatory: true,
      description:
        'The Campus France in-person academic interview is statutorily mandatory for all students applying from Pakistan. Conducted by a Campus France officer at the Alliance Française (Islamabad, Lahore, or Karachi), the interview focuses on assessing academic authenticity, study project coherence, understanding of the French educational system, and career prospects upon returning to Pakistan.',
      tips: [
        'Concisely explain your chosen French university, faculty specializations, course modules, and ECTS credit breakdown.',
        'Articulate why France was chosen over universities in Pakistan and other European countries (highlighting France’s R&D leadership in aerospace, AI, and mathematics).',
        'State 3–5 specific target employers in Pakistan (such as Engro, Systems Ltd, SUPARCO, Jazz, Nestle Pakistan) and expected starting salaries upon return.',
        'Demonstrate clear financial readiness: explain your sponsor’s business and tax profile without hesitation.',
        'If enrolled in an English-taught program, speak clear fluent English; learning basic conversational French (A1/A2) shows strong motivation and cultural adaptability.',
      ],
    },
    documentChecklist: [
      {
        documentName: 'Campus France Interview Attestation (Accord Préalable)',
        description: 'Mandatory certificate issued by Campus France Pakistan confirming completion of the pre-consular academic interview.',
        mandatory: true,
        sources: [
          {
            title: 'Campus France Pakistan Procedures',
            url: 'https://www.campusfrance.org/en',
            publisher: 'Campus France',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Official University Admission Letter (Attestation d’Inscription)',
        description: 'Official acceptance certificate issued by the French higher education institution indicating course title, dates, and language of instruction.',
        mandatory: true,
        sources: [
          {
            title: 'France-Visas - Student Requirements',
            url: 'https://france-visas.gouv.fr/',
            publisher: 'Ministère de l’Intérieur',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Financial Resources Proof (€615 / month = €7,380 / year)',
        description: 'Certified 6-month bank statements of sponsor or student showing at least €7,380 in seasoned liquid cash, Account Maintenance Certificate, FBR tax returns (3 years), and notarized sponsorship affidavit.',
        mandatory: true,
        sources: [
          {
            title: 'France-Visas - Proof of Means',
            url: 'https://france-visas.gouv.fr/',
            publisher: 'Ministère de l’Intérieur',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Valid International Passport',
        description: 'Passport valid for at least 3 months beyond the intended visa expiry with at least two blank visa pages.',
        mandatory: true,
        sources: [
          {
            title: 'France-Visas Requirements',
            url: 'https://france-visas.gouv.fr/',
            publisher: 'France-Visas',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'Proof of Accommodation for First 3 Months',
        description: 'Confirmed university CROUS residence booking, private studio lease, hotel/Airbnb reservation for at least 30 days, or a sworn hospitality certificate (Attestation d’Hébergement) with host utility bills.',
        mandatory: true,
        sources: [
          {
            title: 'Campus France - Finding Student Accommodation',
            url: 'https://www.campusfrance.org/en',
            publisher: 'Campus France',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'Travel Medical Insurance (€30,000 Coverage)',
        description: 'Schengen travel insurance policy covering medical emergencies and repatriation for the initial 3 months of stay.',
        mandatory: true,
        sources: [
          {
            title: 'France-Visas - Travel Insurance',
            url: 'https://france-visas.gouv.fr/',
            publisher: 'France-Visas',
            publisherType: 'immigration_authority',
          },
        ],
      },
      {
        documentName: 'HEC & IBCC Attested Academic Credentials',
        description: 'Secondary and Higher Secondary certificates attested by IBCC; University degrees and official transcripts attested by HEC Pakistan and MOFA.',
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
        documentName: 'English / French Language Proficiency Certificate',
        description: 'IELTS Academic (6.0+), PTE (58+), TOEFL iBT (80+), or official MOI certificate for English programs; DELF B2/DALF C1 for French programs.',
        mandatory: true,
        sources: [
          {
            title: 'Campus France Language Guidelines',
            url: 'https://www.campusfrance.org/en',
            publisher: 'Campus France',
            publisherType: 'government',
          },
        ],
      },
      {
        documentName: 'NADRA Family Registration Certificate (FRC)',
        description: 'Official NADRA FRC proving familial relationship between applicant and financial sponsors.',
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
    livingCostRequirementPerYear: 7380,
    currencyCode: 'EUR',
    approxLivingCostPkr: 2250900,
    exchangeRateDate: '2026-10-04',
    proofOfFundsOptions: [
      {
        methodName: 'Sponsor Bank Account Statements (6-Month History)',
        details:
          'Original statements from an SBP-scheduled Pakistani bank covering 6 consecutive months in the name of the student or parents. Must demonstrate continuous cash balances exceeding €7,380 (recommended €8,500 to €9,500 / PKR ~2.6M to 2.9M). Must be accompanied by a Bank Account Maintenance Certificate, 3 years of FBR tax returns (IT-2 / CPRs), and proof of legitimate business/employment income.',
        isPreferred: true,
      },
      {
        methodName: 'Irrevocable Blocked Bank Guarantee (Caution Bancaire Bloquée / ABI)',
        details:
          'Irrevocable bank guarantee issued by a financial institution certifying that at least €615 per month will be transferred monthly to the student’s bank account in France for the 12-month academic duration.',
        isPreferred: true,
      },
      {
        methodName: 'Eiffel Excellence / French Government Scholarship Award',
        details:
          'Official scholarship award certificate from Campus France Paris or the French Embassy confirming full monthly living stipend (€1,181/mo for Master’s, €1,800/mo for PhD) and tuition exemption. Requires zero personal bank statement.',
        isPreferred: true,
      },
    ],
    bankStatementHoldingPeriodDays: 180,
    visaApplicationFee: {
      amount: 50, // Reduced statutory student rate
      currency: 'EUR',
      approxPkr: 15250,
    },
    otherSurcharges: [
      {
        name: 'Campus France Pakistan Procedural Fee',
        amount: 65,
        currency: 'EUR',
        approxPkr: 19825,
        mandatory: true,
        notes: 'Payable directly to Campus France Pakistan at designated Allied Bank branches prior to booking the academic interview.',
      },
      {
        name: 'TLScontact Administrative Service Fee',
        amount: 32,
        currency: 'EUR',
        approxPkr: 9760,
        mandatory: true,
        notes: 'Payable in PKR at the TLScontact visa application centre at the time of biometric capture.',
      },
      {
        name: 'ANEF / OFII Online Visa Validation Tax Stamp',
        amount: 50,
        currency: 'EUR',
        approxPkr: 15250,
        mandatory: true,
        notes: 'Statutory residence tax (Taxe de séjour) paid online via credit card when validating the VLS-TS within 3 months of landing in France.',
      },
      {
        name: 'CVEC (Contribution Vie Étudiante et de Campus) Student Tax',
        amount: 103,
        currency: 'EUR',
        approxPkr: 31415,
        mandatory: true,
        notes: 'Mandatory annual student life contribution payable on cvec.etudiant.gouv.fr before university enrollment (scholarship holders are exempt).',
      },
    ],
    sources: [
      {
        title: 'France-Visas - Financial Proof Guidelines for Students',
        url: 'https://france-visas.gouv.fr/',
        publisher: 'Ministère de l’Intérieur',
        publisherType: 'immigration_authority',
      },
      {
        title: 'Campus France - Preparing Your Financial Budget',
        url: 'https://www.campusfrance.org/en',
        publisher: 'Campus France',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 5. Admission Criteria & Pakistani Qualification Equivalence
  admissionCriteria: {
    undergraduateRequirements:
      'Completion of Higher Secondary School Certificate (HSSC / Intermediate / FSc / ICS) with minimum 65%–70% overall marks, or Cambridge A-Levels (minimum 3 subjects with grades of BCC or better). The French educational framework strictly requires 12 years of formal primary/secondary schooling for direct admission to a 3-year Bachelor degree (Licence - 180 ECTS).',
    postgraduateRequirements:
      'Completion of a 4-year Bachelor degree (BS / BSc Honours / BE / BBA comprising 16 years of formal education / 240 ECTS credits) from an HEC-recognized university with a minimum CGPA of 2.8/4.0 (or first division / 60%+). Old 2-year Pakistani BA/BSc degrees (14 years of schooling) do not meet the 16-year requirement for direct entry into a 2-year French Master (Master 1 / Master 2); candidates must complete a 2-year Pakistani Master (MA/MSc) first.',
    doctoralRequirements:
      '18 years of formal education (MS / MPhil with thesis) from an HEC-accredited university, verified research publications, a detailed doctoral research proposal, and a confirmed thesis supervisor acceptance (Directeur de Thèse) from an affiliated French Doctoral School (École Doctorale).',
    pakistaniEquivalenceGuide: {
      matriculation: 'Recognized as equivalent to French Collège graduation (Brevet des Collèges); requires IBCC attestation.',
      intermediateFSc: 'Recognized as equivalent to the French Baccalauréat (Bac), fulfilling the statutory 12-year pre-university requirement.',
      fourteenYearBachelors: 'Old 2-year Pakistani BA/BSc degrees represent only 14 years of education and are evaluated as equivalent to a French DEUG / BTS / DUT (Bac+2), falling short of direct Master entry.',
      sixteenYearBachelors: '4-year BS / BE degrees from HEC-accredited Pakistani universities are universally assessed as equivalent to a French 4-year degree (Maitrise / Bac+4), qualifying for direct entry into Master 2 or 2-year Master programs.',
      studyGapsAcceptability: 'French universities and Campus France accept study gaps of 2 to 6 years provided they are substantiated with formal employment, tax documents, and relevance to the prospective program.',
    },
    attestationBodies: [
      {
        bodyName: 'Higher Education Commission (HEC) Pakistan',
        mandate: 'Attestation of all Bachelor, Master, and PhD degrees and official transcripts.',
        link: 'https://hec.gov.pk',
      },
      {
        bodyName: 'Inter Board Coordination Commission (IBCC) Pakistan',
        mandate: 'Attestation of SSC (Matric) and HSSC (Intermediate / FSc) certificates and mark sheets.',
        link: 'https://ibcc.edu.pk',
      },
      {
        bodyName: 'ENIC-NARIC France (France Éducation International)',
        mandate: 'Official French body issuing Statements of Comparability (Attestation de Comparabilité) for foreign academic degrees.',
        link: 'https://www.france-education-international.fr/',
      },
    ],
    applicationPortals: [
      {
        portalName: 'Études en France (Campus France Official Portal)',
        url: 'https://pastel.diplomatie.gouv.fr/etudesenfrance/',
        scope: 'Mandatory central pre-consular application system for Pakistani students applying to French institutions.',
      },
      {
        portalName: 'Direct University Admissions Portals (Grandes Écoles & Research Hubs)',
        url: 'https://www.campusfrance.org/en',
        scope: 'Used for direct Master and PhD admissions across Paris-Saclay, PSL, IP Paris, and elite business schools.',
      },
    ],
    deadlinesSummary:
      'Autumn Intake: University academic applications range from December to April. Campus France EEF "Je suis accepté" files must be submitted by July 15. Eiffel Scholarship applications close in January.',
    sources: [
      {
        title: 'Campus France - Higher Education System in France',
        url: 'https://www.campusfrance.org/en',
        publisher: 'Campus France',
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
        subScoreRequirements: 'Minimum 5.5 to 6.0 in each band; competitive Grandes Écoles require 6.5 to 7.0 overall.',
      },
      {
        testName: 'TOEFL iBT',
        minScoreOverall: '80 - 90',
        subScoreRequirements: 'Minimum 19 in all individual sections.',
      },
      {
        testName: 'PTE Academic',
        minScoreOverall: '58 - 65',
        subScoreRequirements: 'Minimum 50 in each communicative skill.',
      },
      {
        testName: 'English Medium of Instruction (MOI) Certificate',
        minScoreOverall: 'Institution Specific',
        subScoreRequirements: 'Accepted by select engineering schools and universities for academic admission if the bachelor degree was taught in English.',
      },
    ],
    moiWaiverAcceptability:
      'High at university level, but standardized tests are strongly advised for visa processing. While numerous French engineering schools and universities accept an official MOI letter from an HEC-accredited Pakistani university for admission, presenting an IELTS (6.5) or TOEFL scorecard during the Campus France interview significantly expedites consular clearance.',
    localLanguageImportance: {
      study: 'Zero French required for officially designated English-taught Master and PhD programs (France offers over 1,700 programs taught 100% in English). For French-taught programs, certified B2 proficiency (DELF B2) is mandatory.',
      dailyLife: 'Basic conversational French (A1–A2) is immensely helpful for grocery shopping, renting private housing, and navigating administrative bureaus (CAF, CPAM, Préfecture).',
      partTimeJobs: 'Intermediate spoken French (B1) is essential for local customer-facing part-time student employment (restaurants, retail); technical lab assistantships operate in English.',
      postStudyPR: 'Significant legal advantage. Under Article 21-18 of the French Civil Code, foreign graduates of French universities who complete 2 years of higher education can apply for French Citizenship after only 2 years of residency if they demonstrate B1/B2 French fluency!',
    },
    localLanguageTests: [
      {
        name: 'DELF (Diplôme d’Études en Langue Française - B1/B2)',
        description: 'Official lifelong French proficiency diploma awarded by the French Ministry of National Education.',
      },
      {
        name: 'DALF (Diplôme Approfondi de Langue Française - C1/C2)',
        description: 'Advanced French language diploma for university faculty and specialized graduate studies.',
      },
      {
        name: 'TCF (Test de Connaissance du Français)',
        description: 'Standardized French language level test valid for 2 years.',
      },
    ],
    sources: [
      {
        title: 'Campus France - Programs Taught in English',
        url: 'https://www.campusfrance.org/en',
        publisher: 'Campus France',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 7. Top 12 Universities & Grandes Écoles
  topUniversities: [
    {
      name: 'Université PSL (Paris Sciences & Lettres)',
      city: 'Paris, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 24,
      },
      strongPrograms: ['Physics & Quantum Computing', 'Mathematics (Dauphine)', 'Chemistry (Chimie ParisTech)', 'Astrophysics (Observatoire de Paris)', 'Economics'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '20%',
      officialWebsite: 'https://psl.eu/en',
      sources: [
        {
          title: 'Université PSL Official Portal',
          url: 'https://psl.eu/en',
          publisher: 'Université PSL',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Institut Polytechnique de Paris (IP Paris)',
      city: 'Palaiseau, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 46,
      },
      strongPrograms: ['École Polytechnique Engineering', 'Data Science & AI', 'Telecom ParisTech', 'Energy & Climate Technologies', 'Cybersecurity'],
      avgTuitionPerYearLocal: 15000, // Grande École engineering tuition
      currency: 'EUR',
      approxTuitionPkr: 4575000,
      internationalStudentsPercentage: '41%',
      officialWebsite: 'https://www.ip-paris.fr/en',
      sources: [
        {
          title: 'Institut Polytechnique de Paris Official Site',
          url: 'https://www.ip-paris.fr/en',
          publisher: 'IP Paris',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Sorbonne Université',
      city: 'Paris, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 63,
      },
      strongPrograms: ['Mathematics', 'Oceanography & Marine Biology', 'Medicine & Public Health', 'Computer Science', 'Philosophy'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '18%',
      officialWebsite: 'https://www.sorbonne-universite.fr/en',
      sources: [
        {
          title: 'Sorbonne Université Official Portal',
          url: 'https://www.sorbonne-universite.fr/en',
          publisher: 'Sorbonne Université',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université Paris-Saclay',
      city: 'Saclay / Orsay, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 73,
      },
      strongPrograms: ['Mathematics (Ranked #1 in World in Shanghai Ranking)', 'Physics', 'Artificial Intelligence', 'Agricultural Sciences', 'Pharmacology'],
      avgTuitionPerYearLocal: 250, // Paris-Saclay grants broad partial fee exemptions down to national rate
      currency: 'EUR',
      approxTuitionPkr: 76250,
      internationalStudentsPercentage: '16%',
      officialWebsite: 'https://www.universite-paris-saclay.fr/en',
      sources: [
        {
          title: 'Université Paris-Saclay Official Portal',
          url: 'https://www.universite-paris-saclay.fr/en',
          publisher: 'Université Paris-Saclay',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'École Normale Supérieure de Lyon (ENS Lyon)',
      city: 'Lyon, Auvergne-Rhône-Alpes',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 184,
      },
      strongPrograms: ['Theoretical Physics', 'Mathematics', 'Computer Science', 'Molecular Biology'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '14%',
      officialWebsite: 'https://www.ens-lyon.fr/en/',
      sources: [
        {
          title: 'ENS Lyon Official Portal',
          url: 'https://www.ens-lyon.fr/en/',
          publisher: 'ENS Lyon',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'École des Ponts ParisTech',
      city: 'Champs-sur-Marne, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 205,
      },
      strongPrograms: ['Civil & Environmental Engineering', 'Quantitative Finance', 'Applied Mathematics', 'Transportation Systems'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '36%',
      officialWebsite: 'https://ecoledesponts.fr/en',
      sources: [
        {
          title: 'École des Ponts ParisTech Portal',
          url: 'https://ecoledesponts.fr/en',
          publisher: 'École des Ponts ParisTech',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Sciences Po (Paris Institute of Political Studies)',
      city: 'Paris, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 247,
      },
      strongPrograms: ['Politics & International Studies (Ranked #2 Globally)', 'Public Policy', 'Development Economics', 'Human Rights'],
      avgTuitionPerYearLocal: 14500,
      currency: 'EUR',
      approxTuitionPkr: 4422500,
      internationalStudentsPercentage: '50%',
      officialWebsite: 'https://www.sciencespo.fr/en',
      sources: [
        {
          title: 'Sciences Po Official Portal',
          url: 'https://www.sciencespo.fr/en',
          publisher: 'Sciences Po',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université Paris Cité',
      city: 'Paris, Île-de-France',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 260,
      },
      strongPrograms: ['Medicine & Biomedical Sciences', 'Dentistry', 'Neuroscience', 'Mathematics', 'Earth Sciences'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '18%',
      officialWebsite: 'https://u-paris.fr/en/',
      sources: [
        {
          title: 'Université Paris Cité Official Site',
          url: 'https://u-paris.fr/en/',
          publisher: 'Université Paris Cité',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université Grenoble Alpes (UGA)',
      city: 'Grenoble, Auvergne-Rhône-Alpes',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 334,
      },
      strongPrograms: ['Nanoscience & Nanotechnology', 'Microelectronics', 'Computer Science', 'Alpine Environmental Science'],
      avgTuitionPerYearLocal: 250, // UGA grants partial fee waiver to all non-EU students
      currency: 'EUR',
      approxTuitionPkr: 76250,
      internationalStudentsPercentage: '15%',
      officialWebsite: 'https://www.univ-grenoble-alpes.fr/',
      sources: [
        {
          title: 'Université Grenoble Alpes Official Portal',
          url: 'https://www.univ-grenoble-alpes.fr/',
          publisher: 'Université Grenoble Alpes',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Aix-Marseille Université (AMU)',
      city: 'Marseille / Aix-en-Provence, PACA',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 380,
      },
      strongPrograms: ['Oceanography', 'Mediterranean Archeology', 'Neuroscience', 'Law', 'Environmental Sciences'],
      avgTuitionPerYearLocal: 250, // Partial waiver down to national fee
      currency: 'EUR',
      approxTuitionPkr: 76250,
      internationalStudentsPercentage: '12%',
      officialWebsite: 'https://www.univ-amu.fr/en',
      sources: [
        {
          title: 'Aix-Marseille Université Official Site',
          url: 'https://www.univ-amu.fr/en',
          publisher: 'Aix-Marseille Université',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université de Strasbourg',
      city: 'Strasbourg, Grand Est',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 456,
      },
      strongPrograms: ['Chemistry (5 Nobel Laureates)', 'Biotechnology', 'European Law & Human Rights', 'Pharmacy'],
      avgTuitionPerYearLocal: 250, // Partial waiver down to national fee
      currency: 'EUR',
      approxTuitionPkr: 76250,
      internationalStudentsPercentage: '20%',
      officialWebsite: 'https://www.unistra.fr/',
      sources: [
        {
          title: 'Université de Strasbourg Official Site',
          url: 'https://www.unistra.fr/',
          publisher: 'Université de Strasbourg',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université de Montpellier',
      city: 'Montpellier, Occitanie',
      ranking: {
        system: 'QS World University Rankings',
        year: 2025,
        rankNumber: 485,
      },
      strongPrograms: ['Ecology & Biodiversity', 'Agronomy', 'Health Biology', 'Law', 'Water Management'],
      avgTuitionPerYearLocal: 3770,
      currency: 'EUR',
      approxTuitionPkr: 1149850,
      internationalStudentsPercentage: '16%',
      officialWebsite: 'https://www.umontpellier.fr/',
      sources: [
        {
          title: 'Université de Montpellier Official Portal',
          url: 'https://www.umontpellier.fr/',
          publisher: 'Université de Montpellier',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 8. Scholarships
  scholarships: [
    {
      name: 'Eiffel Excellence Scholarship Program (Bourses Eiffel)',
      grantingBody: 'French Ministry for Europe and Foreign Affairs (Campus France Paris)',
      coverageType: 'Full Funding (Monthly living allowance of €1,181/mo for Master’s, €1,800/mo for PhD + International Return Airfare + Medical Insurance + Housing Subsidies)',
      eligibility:
        'Awarded to elite international candidates nominated directly by French higher education institutions in Engineering, Sciences, Economics, Management, Law, and Political Science. Age limit: under 27 for Master’s, under 32 for PhD.',
      deadlineMonths: 'October – January (institutional nomination window)',
      officialLink: 'https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence',
      sources: [
        {
          title: 'Campus France - Eiffel Scholarship Program',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'French Embassy in Pakistan Scholarships (Joint HEC-France Program)',
      grantingBody: 'Embassy of France in Pakistan & Higher Education Commission (HEC)',
      coverageType: 'Full tuition fee waiver, monthly living allowance, return international airfare, and visa fee exemption',
      eligibility:
        'Pakistani citizens nominated by HEC Pakistan for postgraduate master’s and PhD studies in French universities in key strategic disciplines.',
      deadlineMonths: 'March – May (annual cycle)',
      officialLink: 'https://pk.ambafrance.org/',
      sources: [
        {
          title: 'Embassy of France in Pakistan - Educational Scholarships',
          url: 'https://pk.ambafrance.org/',
          publisher: 'French Embassy Pakistan',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Université Paris-Saclay International Master’s Scholarships',
      grantingBody: 'Université Paris-Saclay',
      coverageType: '€10,000 per year + Up to €1,000 travel and visa expenses',
      eligibility:
        'Newly admitted international students enrolled in a Paris-Saclay Master of Science program evaluated on top academic excellence.',
      deadlineMonths: 'February – May (annual)',
      officialLink: 'https://www.universite-paris-saclay.fr/en',
      sources: [
        {
          title: 'Paris-Saclay Scholarships',
          url: 'https://www.universite-paris-saclay.fr/en',
          publisher: 'Université Paris-Saclay',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 9. Work Rights During Study
  workRights: {
    termTimeHours: 'Up to 964 hours per year (~20.5 hours per week; 60% of statutory annual working hours under French labor law)',
    holidayHours: 'Up to 35 hours per week (standard French full-time working week) during academic vacation intersessions',
    minimumWageLocal: '€11.65 / hour gross (SMIC - Salaire Minimum Interprofessionnel de Croissance, yielding ~€9.22/hr net)',
    averageStudentWageLocal: '€10.00 - €14.00 / hour net for tutoring, hospitality, retail, university library assistantships, and delivery',
    regulationsSummary:
      'Holding a valid VLS-TS automatically authorizes international students to work without requiring an independent temporary work authorization (APT). Employers must submit an online declaration of hiring (DPAE) to the departmental labor authorities. Working more than 964 hours in a calendar year violates CESEDA Article L422-1 and leads to mandatory visa revocation.',
    sources: [
      {
        title: 'Service-Public.fr - Working as a Foreign Student in France',
        url: 'https://france-visas.gouv.fr/',
        publisher: 'Service Public France',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 10. Why Visas Get Rejected & How to Avoid
  refusalReasons: [
    {
      reasonTitle: 'Lack of Financial Coherence or Unverifiable Sponsor Funds',
      description:
        'Submitting bank statements with sudden large unseasoned deposits right before the visa appointment, relying on non-immediate distant sponsors, or failing to substantiate the origin of funds with FBR income tax returns.',
      howToAvoid:
        'Maintain seasoned liquid funds of at least €8,500–€9,500 in the name of the student or parents for at least 6 continuous months. Provide official FBR Active Taxpayer certificates, certified tax returns (3 years), bank account maintenance certificates, and evidence of income (salary slips, business registrations). Alternatively, obtain an irrevocable bank blocked guarantee (Caution Bancaire Bloquée / ABI) guaranteeing €615/month transfers.',
      sources: [
        {
          title: 'France-Visas - Financial Evaluation Standards',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Ministère de l’Intérieur',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Poor Performance in Campus France Pakistan Academic Interview',
      description:
        'Inability of the applicant to articulate the structure of their chosen French degree, course modules, or why France was chosen over Pakistan, leading to an unfavorable Campus France evaluation report transmitted to the consular visa officer.',
      howToAvoid:
        'Prepare thoroughly for your Campus France interview at the Alliance Française: master your syllabus, explain research synergy with faculty, detail 3–5 prospective Pakistani corporate employers, and convey genuine academic passion.',
      sources: [
        {
          title: 'Campus France Pakistan - Interview Preparation Guidelines',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Dubious Accommodation Documents for First 3 Months',
      description:
        'Submitting fake hotel reservations, expired leases, or hospitality certificates (Attestation d’Hébergement) without supporting utility bills and host identification.',
      howToAvoid:
        'Provide genuine accommodation documentation: official CROUS dormitory reservation, signed private lease, confirmed Airbnb for at least 30 days, or a legally registered hospitality certificate signed by an authentic host in France with their French residence card and EDF electricity bill.',
      sources: [
        {
          title: 'France-Visas - Accommodation Requirements',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'France-Visas',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Mismatched Academic Progression & Severe Study Gaps',
      description:
        'Applying for a course that does not logically build upon past Pakistani qualifications, or presenting unverified multi-year study gaps.',
      howToAvoid:
        'Ensure the chosen French program represents a logical vertical specialization. Substantiate any study gaps with verified corporate employment letters, salary account statements, and tax returns.',
      sources: [
        {
          title: 'France-Visas - Visa Refusal Grounds',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Ministère de l’Intérieur',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],
  appealProcessSummary:
    'If a French study visa is refused, the formal decision must be appealed within 30 days before the Commission de Recours contre les Décisions de Refus de Visa d’Entrée en France (CRRV) in Nantes, France. This administrative appeal is a mandatory statutory prerequisite before filing a judicial recourse before the Administrative Tribunal of Nantes (Tribunal Administratif de Nantes).',

  // 11. After Graduation & Post-Study Work
  postStudyImmigration: {
    jobSeekerVisaDuration: '12 months under the RECE permit (Recherche d’Emploi ou Création d’Entreprise)',
    workPermitType: 'Titre de Séjour Salarié / Travailleur Temporaire or Passeport Talent',
    prPathwaysSummary:
      'France provides one of Europe’s most streamlined graduate immigration frameworks: (1) Graduates of a French Master’s degree (Bac+5) receive a 12-month RECE job search permit; (2) Once employed under a contract paying at least 1.5x the SMIC minimum wage (~€2,650 gross/month), graduates convert directly to a standard Salarié work permit without labor market tests (opposabilité de la situation de l’emploi is waived for French degree holders); (3) Graduates earning at least €43,000/year qualify for the prestigious 4-year multi-entry Passeport Talent (Salarié Qualifié / Carte Bleue Européenne).',
    citizenshipTimeline:
      'Under Article 21-18 of the French Civil Code, the standard 5-year residency requirement for French Naturalization is REDUCED to only 2 YEARS for foreign nationals who have successfully completed 2 years of higher education and obtained a degree from a French university or Grande École, provided they demonstrate stable employment and B1/B2 French fluency!',
    sources: [
      {
        title: 'Service-Public.fr - French Citizenship by Naturalization (Article 21-18)',
        url: 'https://france-visas.gouv.fr/',
        publisher: 'Ministère de l’Intérieur',
        publisherType: 'government',
      },
      {
        title: 'Campus France - Career After Graduation',
        url: 'https://www.campusfrance.org/en',
        publisher: 'Campus France',
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
      'Spouses accompanying international students cannot work on a standard visitor visa. However, spouses entering under the Regroupement Familial (family reunification procedure after 18 months of residence) or spouses of Passeport Talent researchers receive full, unrestricted statutory employment authorization in France.',
    childrenSchooling:
      'Under the French Education Code, all children aged 3 to 16 residing in France (regardless of nationality or immigration status) are entitled to free, compulsory education in French public schools (École Maternelle, Élémentaire, and Collège).',
    financialRequirementsPerDependent:
      'Must demonstrate monthly financial resources equal to the statutory net SMIC (~€1,398/month) for a couple, increased by 10% for each dependent child, plus verified proof of adequate residential housing floor space (minimum 28m² for a couple).',
    sources: [
      {
        title: 'Service-Public.fr - Family Accompaniment for Foreign Students',
        url: 'https://france-visas.gouv.fr/',
        publisher: 'Service Public France',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 13. Recent Law & Policy Changes (2023 - 2026 Timeline)
  recentPolicyTimeline: [
    {
      date: '2023-01-01',
      headline: 'Statutory Living Requirement Maintained at €615 / Month',
      impact:
        'The French Ministry of the Interior confirmed that the minimum financial resources threshold for long-stay student visas remains stabilized at €615 per month (€7,380 per year).',
      officialSourceUrl: 'https://france-visas.gouv.fr/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2023-09-01',
      headline: 'Extension of Institutional Partial Fee Waivers for Non-EU Students',
      impact:
        'Multiple leading French universities (including Paris-Saclay, Grenoble Alpes, and Aix-Marseille) renewed regional decrees exempting international students from differentiated tuition, maintaining nominal public fees (€250/year for Master’s).',
      officialSourceUrl: 'https://www.campusfrance.org/en',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-01-26',
      headline: 'Immigration Law (Loi Immigration 2024) - Key Student Protections Upheld',
      impact:
        'The French Constitutional Council officially struck down proposed contentious restrictions (such as student return deposit guarantees and increased tuition penalties), ensuring that international student rights, RECE permits, and CAF housing aid remain fully intact.',
      officialSourceUrl: 'https://france-visas.gouv.fr/',
      lastVerified: '2026-10-04',
    },
    {
      date: '2024-05-01',
      headline: 'Digitization of Residence Permit Renewals on the ANEF Portal',
      impact:
        'All student residence permit extensions, VLS-TS validations, and RECE post-study work permit applications were shifted 100% online through the ANEF digital platform, eliminating the need to queue at local Préfectures.',
      officialSourceUrl: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      lastVerified: '2026-10-04',
    },
  ],

  // 14. Living as a Student in France
  studentLiving: {
    accommodationTypes: [
      {
        type: 'Public CROUS Student Residences (Cité U)',
        avgMonthlyCostLocal: 320,
        currencyCode: 'EUR',
        approxCostPkr: 97600,
        description: 'Subsidized single studio rooms with private bathroom and kitchen. Extremely affordable (€250–€450/month before CAF housing aid); high demand managed through the annual CROUS student housing portal.',
      },
      {
        type: 'Private Student Residences (Résidences Étudiantes Privées)',
        avgMonthlyCostLocal: 650,
        currencyCode: 'EUR',
        approxCostPkr: 198250,
        description: 'Modern furnished studios (Nexity Studea, Cardinal Campus, Studelites) with gym, laundry, and internet included. Averages €500–€650 in provinces; €750–€950 in Paris.',
      },
      {
        type: 'Private Apartment Share (Colocation)',
        avgMonthlyCostLocal: 480,
        currencyCode: 'EUR',
        approxCostPkr: 146400,
        description: 'Private bedroom in a shared flat with other French and international students. Highly popular option in Lyon, Lille, Toulouse, and Grenoble.',
      },
    ],
    groceriesAndHalalFood:
      'Certified halal butcher shops (Boucherie Halal) and North African / South Asian grocery markets are widespread across every French town and city. National supermarket chains (Carrefour, Auchan, Leclerc, Monoprix, Lidl) maintain extensive certified halal poultry and beef sections. CROUS university canteens serve nutritious, freshly prepared 3-course student meals (starter, main, dessert) for a legally subsidized price of only €3.30 (or €1.00 for scholarship recipients).',
    safetyAndCrime:
      'France is a safe European nation with low rates of violent crime. Campuses feature card-access security and video surveillance. As in any large global metropolis, basic vigilance against pickpockets is prudent in crowded tourist zones and Paris metro stations.',
    climateAndWeather:
      'Temperate oceanic and continental climate. Northern and central France (Paris, Lille, Strasbourg) experience cool, cloudy winters (2°C to 8°C) with occasional snow, and pleasant warm summers (22°C to 28°C). Southern France (Marseille, Nice, Montpellier) enjoys a sunny Mediterranean climate with warm winters (8°C to 15°C) and hot summers (28°C to 35°C).',
    pakistaniCommunityPresence:
      'France is home to over 105,000 Pakistani residents. Major community hubs thrive in Île-de-France (Paris, Sarcelles, Saint-Denis, Bobigny) and Lyon. Pakistani student associations operate actively across Paris and Lyon, organizing community dinners, Eid celebrations, and peer mentorship.',
    simAndBankingRecommended: {
      simProviders: [
        'Free Mobile (Legendary low-cost mobile plan offering 140GB–250GB 5G data for €9.99–€19.99/mo without contracts)',
        'Orange / Sosh (Premier 5G network coverage across France)',
        'Bouygues Telecom / B&You (Affordable student 5G packages)',
      ],
      digitalBanks: [
        'Revolut / N26 (Instant French/European IBAN mobile banking with zero currency conversion fees)',
        'BNP Paribas / Société Générale (Major retail banks offering student welcome bonuses and free debit cards)',
        'LCL / Crédit Agricole (Strong presence in regional campus towns)',
      ],
    },
    transportationStudentPerks:
      'France boasts the world-renowned TGV high-speed rail network. International students under 28 qualify for the SNCF Carte Avantage Jeune (€49/year), guaranteeing 30% off all TGV and Intercités rail tickets across France and Europe. In Paris, students under 26 get the Imagine R annual student transport pass (50% off regular Navigo transit passes) for unlimited metro, RER, bus, and tram travel.',
    sources: [
      {
        title: 'Campus France - Daily Life in France',
        url: 'https://www.campusfrance.org/en',
        publisher: 'Campus France',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // 15. After Arrival Checklist
  arrivalChecklist: [
    {
      stepNumber: 1,
      title: 'Validate Your VLS-TS Online on the ANEF Portal',
      description:
        'Within 3 months of landing in France, visit administration-etrangers-en-france.interieur.gouv.fr to validate your VLS-TS student visa. Enter your visa details, arrival date, French address, and pay the €50 electronic residence tax stamp. Download your official Confirmation de Validation de l’Enregistrement du VLS-TS.',
      timeline: 'Within 3 months of arrival (Statutory Legal Requirement)',
      mandatory: true,
      officialPortalOrGuide: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
    },
    {
      stepNumber: 2,
      title: 'Register for 100% Free French Social Security (L’Assurance Maladie)',
      description:
        'Log in to etudiant-etranger.ameli.fr to register for French healthcare. Upload your passport, VLS-TS validation receipt, student university certificate, and bank IBAN. Receive your provisional Social Security number (and later your Carte Vitale) granting 100% free French public medical and hospital coverage.',
      timeline: 'Within first 2 weeks of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://etudiant-etranger.ameli.fr/',
    },
    {
      stepNumber: 3,
      title: 'Open French Bank Account & Collect RIB',
      description:
        'Open a student checking account at BNP Paribas, Société Générale, or via Revolut to receive your Relevé d’Identité Bancaire (RIB). Your RIB is essential for paying rent, receiving salary, and claiming your monthly CAF housing subsidies.',
      timeline: 'Within first week of arrival',
      mandatory: true,
      officialPortalOrGuide: 'https://www.campusfrance.org/en',
    },
    {
      stepNumber: 4,
      title: 'Apply for CAF Housing Aid (Aide Personnalisée au Logement - APL)',
      description:
        'Visit caf.fr to apply for the monthly student housing allowance (APL). Enter your room rent, address, and French bank RIB. The French government pays €100 to €250 per month directly into your bank account (or towards your rent) throughout your studies.',
      timeline: 'Within first month once rental lease is signed',
      mandatory: true,
      officialPortalOrGuide: 'https://www.caf.fr/',
    },
    {
      stepNumber: 5,
      title: 'Pay CVEC Tax & Complete University In-Person Enrollment',
      description:
        'Pay the €103 CVEC student life contribution on cvec.etudiant.gouv.fr (scholarship recipients receive automatic free exemption). Visit your university registrar’s office to present your CVEC attestation, passport, and finalize your course timetable and campus ID card.',
      timeline: 'During orientation week',
      mandatory: true,
      officialPortalOrGuide: 'https://cvec.etudiant.gouv.fr/',
    },
    {
      stepNumber: 6,
      title: 'Purchase Local SIM Card & Transit Smart Card (Imagine R / Navigo)',
      description:
        'Activate a Free Mobile or Orange mobile plan and purchase your discounted student transit smart card at the local metro station.',
      timeline: 'First 2 to 3 days',
      mandatory: true,
      officialPortalOrGuide: 'https://www.campusfrance.org/en',
    },
  ],

  // 16. FAQs (12 Comprehensive Real Student Questions)
  faqs: [
    {
      question: 'What is the "Études en France" (EEF) procedure and why is it mandatory for Pakistani students?',
      answer:
        'The "Études en France" (EEF) procedure is a mandatory pre-consular academic evaluation established by the French Government. Pakistani applicants must register on pastel.diplomatie.gouv.fr/etudesenfrance and complete an in-person academic interview at the Alliance Française (in Islamabad, Lahore, or Karachi). The resulting Campus France Attestation is a mandatory statutory document without which TLScontact will not accept a student visa application.',
      category: 'Campus France & Procedures',
      sources: [
        {
          title: 'Campus France Pakistan - EEF Procedure',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money must I demonstrate in my bank account for a French student visa from Pakistan?',
      answer:
        'Under French statutory immigration law, international students must demonstrate minimum living resources of €615 per month for the duration of the academic year, which totals €7,380 for 12 months (PKR ~2.25M). It is strongly recommended to maintain a seasoned bank balance of €8,500 to €9,500 (PKR ~2.6M to 2.9M) in the student’s or parent’s bank account for 6 continuous months, accompanied by certified FBR tax returns.',
      category: 'Finances',
      sources: [
        {
          title: 'France-Visas - Financial Proof Guidelines',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Ministère de l’Intérieur',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the CAF housing allowance and do international students qualify?',
      answer:
        'Yes! France is unique in offering universal housing assistance through the Caisse d’Allocations Familiales (CAF). Under the APL (Aide Personnalisée au Logement) scheme, all registered international students holding a valid VLS-TS are legally eligible to receive a monthly rent subsidy of €100 to €250 per month, deposited directly into their French bank account, regardless of nationality.',
      category: 'Student Subsidies',
      sources: [
        {
          title: 'CAF Official Portal - Aide Personnalisée au Logement',
          url: 'https://www.caf.fr/',
          publisher: 'Caisse d’Allocations Familiales (CAF)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much are tuition fees at public universities in France?',
      answer:
        'Statutory differentiated non-EU fees at public universities under "Bienvenue en France" are €2,770/year for Bachelor’s (Licence) and €3,770/year for Master’s (PhD is €380/year). However, many top universities (including Paris-Saclay, Grenoble Alpes, and Aix-Marseille) automatically grant institutional partial waivers reducing tuition to the domestic EU fee: only €175/year for Bachelor’s and €250/year for Master’s!',
      category: 'Tuition Fees',
      sources: [
        {
          title: 'Campus France - Higher Education Tuition Fees',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How many hours can I work part-time while studying in France?',
      answer:
        'Holding a valid VLS-TS allows you to work up to 964 hours per calendar year (approximately 20.5 hours per week during academic semesters, and full-time 35 hours per week during vacations). The statutory gross minimum wage in France (SMIC) is €11.65 per hour, giving you approximately €9.22 per hour net take-home pay.',
      category: 'Work Rights',
      sources: [
        {
          title: 'Service-Public.fr - Student Employment Regulations',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Service Public France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the RECE post-study work permit in France?',
      answer:
        'The RECE (Recherche d’Emploi ou Création d’Entreprise) is a 12-month post-graduation residence authorization available to international graduates holding a French Master’s degree (Bac+5) or PhD. It allows graduates to work without job restrictions while searching for skilled employment paying at least 1.5x the SMIC minimum wage (~€2,650 gross/month), after which you convert directly into a Salarié or Passeport Talent work permit.',
      category: 'Post-Graduation',
      sources: [
        {
          title: 'Campus France - RECE Permit Guidelines',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is it true that studying in France reduces the path to French Citizenship to only 2 years?',
      answer:
        'Yes! Under Article 21-18 of the French Civil Code, the standard 5-year residency requirement for French Naturalization is legally reduced to just 2 YEARS for foreign nationals who have successfully obtained a postgraduate degree from a French higher education institution, provided they have integrated, secured stable employment, and demonstrate B1/B2 French language proficiency.',
      category: 'Immigration & Naturalization',
      sources: [
        {
          title: 'Legifrance - French Civil Code Article 21-18',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'Gouvernement Français',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Do I need to speak French to study in France?',
      answer:
        'No. French higher education institutions offer over 1,700 programs taught 100% in English, particularly in Engineering, Computer Science, Business, and Natural Sciences. For English-taught programs, no French language test is required. However, learning basic French (A1/A2) is very helpful for everyday life and part-time off-campus jobs.',
      category: 'Language Requirements',
      sources: [
        {
          title: 'Campus France - Programs Taught in English Catalog',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is French healthcare free for international students?',
      answer:
        'Yes! Healthcare in France is 100% free for all registered international students. Once you land, you register online at etudiant-etranger.ameli.fr to join the French National Health Insurance (Sécurité Sociale / CPAM), which reimburses approximately 70% of doctor visits and prescription medications, with optional student top-up insurance (Mutuelle) covering the remainder.',
      category: 'Healthcare',
      sources: [
        {
          title: 'Ameli.fr - Health Insurance for Foreign Students',
          url: 'https://etudiant-etranger.ameli.fr/',
          publisher: 'Assurance Maladie France',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Where do I submit my visa application in Pakistan?',
      answer:
        'After completing your Campus France EEF interview, you submit your physical passport and visa documents at TLScontact Visa Application Centres located in Islamabad, Lahore, or Karachi.',
      category: 'Visa Centres',
      sources: [
        {
          title: 'TLScontact Pakistan - France Visa Centres',
          url: 'https://fr.tlscontact.com/',
          publisher: 'TLScontact',
          publisherType: 'visa_centre',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the Eiffel Excellence Scholarship and what does it cover?',
      answer:
        'The Eiffel Excellence Scholarship (Bourses Eiffel) is the premier flagship grant funded by the French Ministry for Europe and Foreign Affairs. It covers a monthly living allowance of €1,181/month for Master’s candidates and €1,800/month for PhD researchers, international round-trip airfare, cultural activities, and comprehensive insurance. Applications are submitted via university nominations between October and January.',
      category: 'Scholarships',
      sources: [
        {
          title: 'Campus France - Eiffel Excellence Scholarships',
          url: 'https://www.campusfrance.org/en',
          publisher: 'Campus France',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I travel to other European countries with my French student visa?',
      answer:
        'Yes. Your VLS-TS visa (once validated on the ANEF portal) allows you to travel freely throughout all 29 countries of the Schengen Area (such as Germany, Italy, Switzerland, Spain, Belgium) for up to 90 days in any 180-day period without needing separate entry visas.',
      category: 'Schengen Mobility',
      sources: [
        {
          title: 'France-Visas - Schengen Travel Rights',
          url: 'https://france-visas.gouv.fr/',
          publisher: 'France-Visas',
          publisherType: 'immigration_authority',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // 17. Consolidated Official Sources
  allOfficialSources: [
    {
      title: 'France-Visas - Official Visa Portal for France',
      url: 'https://france-visas.gouv.fr/',
      publisher: 'Ministère de l’Intérieur / Ministère de l’Europe et des Affaires Étrangères',
      publisherType: 'immigration_authority',
    },
    {
      title: 'Campus France - French Agency for the Promotion of Higher Education',
      url: 'https://www.campusfrance.org/en',
      publisher: 'Campus France',
      publisherType: 'government',
    },
    {
      title: 'Études en France (EEF) Official Application Platform',
      url: 'https://pastel.diplomatie.gouv.fr/etudesenfrance/',
      publisher: 'Ministère de l’Europe et des Affaires Étrangères',
      publisherType: 'portal',
    },
    {
      title: 'ANEF (Administration des Étrangers en France) - VLS-TS Validation',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      publisher: 'Ministère de l’Intérieur',
      publisherType: 'government',
    },
    {
      title: 'L’Assurance Maladie - Healthcare Registration for Foreign Students',
      url: 'https://etudiant-etranger.ameli.fr/',
      publisher: 'Assurance Maladie (Sécurité Sociale)',
      publisherType: 'government',
    },
    {
      title: 'CAF (Caisse d’Allocations Familiales) - Student Housing Subsidies (APL)',
      url: 'https://www.caf.fr/',
      publisher: 'Caisse d’Allocations Familiales',
      publisherType: 'government',
    },
    {
      title: 'Embassy of France in Pakistan',
      url: 'https://pk.ambafrance.org/',
      publisher: 'French Embassy in Islamabad',
      publisherType: 'embassy',
    },
    {
      title: 'TLScontact Pakistan - Visa Application Centre',
      url: 'https://fr.tlscontact.com/',
      publisher: 'TLScontact',
      publisherType: 'visa_centre',
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
