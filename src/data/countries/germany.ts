import { CountryGuideData } from './types';

export const GERMANY_GUIDE_DATA: CountryGuideData = {
  slug: 'germany',
  countryName: 'Germany',
  countryCode: 'DE',
  flagEmoji: '🇩🇪',
  heroTagline: 'World-Class Engineering, Zero Tuition Public Universities & Fast-Track European PR',
  oneLineSummary: 'Tuition-free higher education, 18-month post-study work visa, 140 working days per year, and direct EU Blue Card pathways.',
  lastUpdatedDate: '2026-10-04',
  officialPortalUrl: 'https://pakistan.diplo.de/',

  tags: {
    noTuitionFees: true,
    postStudyWorkYears: 1.5,
    englishTaughtWideAvailability: true,
    schengenOrEu: true,
    highPrPathway: true,
    partTimeJobAvailability: 'High',
  },

  // --------------------------------------------------------------------------
  // 1. Quick Facts Bar
  // --------------------------------------------------------------------------
  quickFacts: {
    capital: 'Berlin',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: 'Euro',
    },
    officialLanguages: ['German'],
    mainIntakes: [
      'Winter Semester (Starts October; Application deadline typically July 15)',
      'Summer Semester (Starts April; Application deadline typically January 15)',
    ],
    avgTuitionPerYear: {
      minDomesticCurrency: 0,
      maxDomesticCurrency: 3000,
      textSummary: '€0 tuition at almost all public universities. Students pay only a statutory semester contribution (Semesterbeitrag) of €150–€400/semester covering public transit. (Exception: Baden-Württemberg state charges €1,500/semester for non-EU students; TUM charges moderate fees for non-EU graduates).',
      sources: [
        {
          title: 'Tuition Fees in Germany - DAAD Official Guide',
          url: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/costs-of-education-and-living/',
          publisher: 'DAAD (Deutscher Akademischer Austauschdienst)',
          publisherType: 'scholarship',
        },
        {
          title: 'Study in Germany - Costs & Financing',
          url: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany/financing',
          publisher: 'Federal Ministry for Economic Affairs and Climate Action (Make it in Germany)',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    monthlyLivingCost: {
      amountDomesticCurrency: 992,
      approxPKR: 301000,
      textSummary: '€992 per month (statutory BAföG benchmark set by Federal Ministry of the Interior, €11,904 per annum). Covers student dorm, statutory health insurance, groceries, and communication.',
      sources: [
        {
          title: 'Proof of Financial Resources (Sperrkonto / Blocked Account)',
          url: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600',
          publisher: 'Federal Foreign Office (Auswärtiges Amt)',
          publisherType: 'government',
        },
        {
          title: 'German Missions in Pakistan Official Portal',
          url: 'https://pakistan.diplo.de/',
          publisher: 'German Embassy Islamabad',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    postStudyWorkDuration: '18 Months (AufenthG §20 Job-Seeker Permit with unrestricted employment rights)',
    partTimeWorkHoursTerm: '140 full days or 280 half days per calendar year (expanded under Skilled Immigration Act, March 2024)',
    visaProcessingTimeAverage: '6 to 12 weeks following in-person biometric appointment at German Embassy Islamabad or Consulate General Karachi.',
  },

  // --------------------------------------------------------------------------
  // 2. Visa Types
  // --------------------------------------------------------------------------
  visaTypes: [
    {
      id: 'de-visa-student-16b',
      officialName: 'National Visa for Study (Aufenthaltserlaubnis §16b AufenthG)',
      category: 'student',
      purpose: 'Enrolment in full-time degree programs (Bachelor, Master, State Examination, PhD) at state-accredited higher education institutions in Germany.',
      eligibility: [
        'Unconditional Admission Letter (Zulassungsbescheid) or conditional letter with preparatory language condition',
        'Proof of financial resources (€11,904/year blocked account or formal obligation Verpflichtungserklärung)',
        'Statutory student health insurance coverage (or incoming private travel insurance transition)',
        'Recognized academic qualification congruent with German higher education entrance standards (Anabin / uni-assist VPD)',
      ],
      feeDomesticCurrency: 75,
      feePKR: 22760,
      validity: 'Initially issued as 3 to 6-month National D visa; converted to 1-to-2-year renewable electronic residence title (eAT) after city registration.',
      processingTime: '6 to 12 weeks after appointment interview',
      workPermitted: true,
      workDetails: 'Permitted up to 140 full days or 280 half days per calendar year. Academic student assistant (HiWi) work permitted without deduction.',
      sources: [
        {
          title: 'German Residence Act (Aufenthaltsgesetz - AufenthG §16b)',
          url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html',
          publisher: 'Federal Ministry of Justice (BMJ)',
          publisherType: 'government',
        },
        {
          title: 'Visa for Studying in Germany',
          url: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
          publisher: 'Make it in Germany',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'de-visa-applicant-17',
      officialName: 'Study Applicant Visa (Visum zur Studienbewerbung §17 AufenthG)',
      category: 'language_prep',
      purpose: 'Entry for students holding prospective admissions or invited to write on-campus entrance examinations (e.g. Studienkolleg Aufnahmetest).',
      eligibility: [
        'Written confirmation of university application or invitation to an entrance assessment',
        'Proof of €11,904 blocked account funds',
        'Direct pathway to university entrance qualification',
      ],
      feeDomesticCurrency: 75,
      feePKR: 22760,
      validity: 'Up to 9 months (convertible inside Germany into §16b student permit upon securing admission without leaving the country)',
      processingTime: '8 to 12 weeks',
      workPermitted: true,
      workDetails: 'Allows part-time employment up to 20 hours per week for secondary survival income while applying.',
      sources: [
        {
          title: 'Visa for study applicants (§17 AufenthG)',
          url: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
          publisher: 'Make it in Germany',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'de-visa-prep-lang-16f',
      officialName: 'Visa for Preparatory Language Course (§16f AufenthG)',
      category: 'language_prep',
      purpose: 'Participation in an intensive German language course (minimum 18 hours per week) linked to subsequent university degree admission.',
      eligibility: [
        'Registration confirmation for an intensive German course (min. 18 hours/week)',
        'Evidence of conditional university admission (Bedingte Zulassung) or preparatory study intention',
        'Proof of financial sustenance (€992/month)',
      ],
      feeDomesticCurrency: 75,
      feePKR: 22760,
      validity: '3 to 12 months (convertible inside Germany if university degree admission follows)',
      processingTime: '8 to 14 weeks',
      workPermitted: true,
      workDetails: 'Up to 20 hours per week permitted alongside language lessons.',
      sources: [
        {
          title: 'Residence Act §16f - Language courses and school attendance',
          url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__16f.html',
          publisher: 'Federal Ministry of Justice',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'de-visa-job-seeker-20',
      officialName: 'Post-Graduation Job-Seeking Residence Permit (§20 AufenthG)',
      category: 'job_seeker',
      purpose: 'Granted to graduates of state-accredited German higher education institutions to seek employment congruent with their academic degree.',
      eligibility: [
        'Successful completion certificate or degree from a German university (Bachelor, Master, or PhD)',
        'Proof of living subsistence funds (€992/month blocked account or employment contract)',
        'Proof of valid statutory or private health insurance',
      ],
      feeDomesticCurrency: 100,
      feePKR: 30350,
      validity: '18 months (cannot be extended, but seamlessly switches into EU Blue Card or §18b Skilled Worker permit immediately upon signing a job offer)',
      processingTime: '4 to 8 weeks through local Foreigners Authority (Ausländerbehörde)',
      workPermitted: true,
      workDetails: '100% unrestricted employment permitted during the entire 18 months in any profession.',
      sources: [
        {
          title: 'Residence Act §20 - Residence permit for jobseekers',
          url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__20.html',
          publisher: 'Federal Ministry of Justice',
          publisherType: 'government',
        },
        {
          title: 'Staying in Germany after graduating',
          url: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany/stay-after-graduation',
          publisher: 'Make it in Germany',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'de-visa-family-reunion',
      officialName: 'Family Reunion Visa for Dependents (Familienzusammenführung §30/§32 AufenthG)',
      category: 'dependent',
      purpose: 'Allows legally married spouse and minor dependent children to join an international student in Germany.',
      eligibility: [
        'Student holds a valid residence permit (§16b) with expected remaining validity of at least 1 year',
        'Adequate living accommodation (approx. 12 m² per adult, verified through rental lease / Wohnraumnachweis)',
        'Proof of financial independence without reliance on public welfare (extra ~€400–€500/month per dependent + dependent health insurance)',
        'Spouse basic German A1 Goethe/telc certificate (waiver applies if student transitions to EU Blue Card)',
      ],
      feeDomesticCurrency: 75,
      feePKR: 22760,
      validity: 'Tied to student principal visa validity',
      processingTime: '12 to 24 weeks due to strict accommodation and verification procedures',
      workPermitted: true,
      workDetails: 'Spouse receives unrestricted full work rights under Section 27 (5) AufenthG once residence title is issued.',
      sources: [
        {
          title: 'German Missions in Pakistan Family Reunion Information',
          url: 'https://pakistan.diplo.de/',
          publisher: 'German Embassy Islamabad',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 3. How to Apply (Step by Step)
  // --------------------------------------------------------------------------
  applicationGuide: {
    portalOverview: 'Applicants applying from Pakistan must register on the Federal Foreign Office Consular Services Portal (visa.diplo.de), complete the online questionnaire, upload digital verification sets, and secure a booked appointment slot at either the German Embassy in Islamabad (Punjab, KP, ICT, AJK, GB) or the German Consulate General in Karachi (Sindh, Balochistan). Note: Unlike India or China, Pakistan has NO APS (Akademische Prüfstelle) office; verification is conducted directly through HEC/IBCC attestations and German consular validation.',
    steps: [
      {
        stepNumber: 1,
        title: 'Academic Evaluation & University Admission',
        description: 'Check entry credentials via the Anabin database. Apply either directly through the university portal or via uni-assist e.V. to obtain a preliminary evaluation document (VPD - Vorprüfungsdokumentation) or direct admission letter (Zulassungsbescheid).',
        portalName: 'uni-assist e.V. Application Portal',
        portalUrl: 'https://www.uni-assist.de/en/',
        pakistanSpecificNotes: 'Pakistani applicants must have their 4-year Bachelor degrees attested by the Higher Education Commission (HEC) and Matric/FSc by the Inter Board Coordination Commission (IBCC).',
        actionRequired: 'Submit scanned color copies of HEC-attested degrees and certified translations if non-English.',
        sources: [
          {
            title: 'uni-assist Official Portal',
            url: 'https://www.uni-assist.de/en/',
            publisher: 'uni-assist e.V.',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Open and Fund the German Blocked Account (Sperrkonto)',
        description: 'Deposit the federally mandated living maintenance sum of €11,904 (€992/month for 12 months) into a certified blocked account provider approved by the Federal Foreign Office (e.g., Fintiba, Expatrio, Coracle, or Deutsche Bank).',
        portalName: 'Federal Foreign Office Blocked Account Service',
        portalUrl: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600',
        pakistanSpecificNotes: 'Transfer funds from a Pakistani commercial bank (e.g. HBL, Meezan, Standard Chartered) using State Bank of Pakistan education remittance forms (Form A2 / Student Remittance).',
        actionRequired: 'Download the official Blocking Confirmation (Sperrbestätigung) PDF once the transfer clears.',
        sources: [
          {
            title: 'Auswärtiges Amt Blocked Account Providers',
            url: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600',
            publisher: 'Federal Foreign Office',
            publisherType: 'government',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Procure Statutory Student Health Insurance',
        description: 'Arrange German statutory health insurance (Gesetzliche Krankenversicherung - GKV) through providers such as Techniker Krankenkasse (TK), Barmer, or DAK-Gesundheit, accompanied by an incoming travel insurance certificate (Reisekrankenversicherung) valid from departure until university enrollment.',
        portalName: 'DAAD Health Insurance Guide',
        portalUrl: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/health-insurance/',
        pakistanSpecificNotes: 'Travel insurance must cover minimum €30,000 medical expenses and repatriation for the initial 90-180 days until German statutory insurance activates.',
        actionRequired: 'Obtain statutory health insurance confirmation notification (M10 electronic notification) for university enrolment and visa certificate.',
        sources: [
          {
            title: 'Health Insurance for International Students',
            url: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/health-insurance/',
            publisher: 'DAAD',
            publisherType: 'scholarship',
          },
        ],
      },
      {
        stepNumber: 4,
        title: 'Submit Digital Dossier on the Consular Services Portal',
        description: 'Complete the VIDEX National Visa form online. Register on visa.diplo.de, upload your CV, Statement of Purpose, academic transcripts, admission letter, and blocked account confirmation.',
        portalName: 'Consular Services Portal (Federal Foreign Office)',
        portalUrl: 'https://visa.diplo.de/',
        pakistanSpecificNotes: 'The German missions in Pakistan have shifted student visa pre-processing to the digital portal. Ensure high-resolution color PDF scans.',
        actionRequired: 'Print the completed VIDEX application summary with barcode and sign declarations under Sections 53 and 54 of the Residence Act.',
        sources: [
          {
            title: 'Federal Foreign Office Consular Services Portal',
            url: 'https://visa.diplo.de/',
            publisher: 'Federal Foreign Office',
            publisherType: 'government',
          },
          {
            title: 'VIDEX National Visa Application Form',
            url: 'https://videx-national.diplo.de/',
            publisher: 'Federal Foreign Office',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 5,
        title: 'Appointment Waitlist & Biometrics Interview',
        description: 'Book a slot on the official appointment reservation system. Attend in person with your original documents and two un-stapled identical photocopy sets in DIN A4 format.',
        portalName: 'German Missions in Pakistan Portal',
        portalUrl: 'https://pakistan.diplo.de/',
        pakistanSpecificNotes: 'Wait times in Islamabad historically depend on applicant categorization (Category A for high CGPA ≥ 3.7 or DAAD scholarship recipients receive expedited slots within 3–8 weeks; Category B general master applicants face longer waiting lists of several months). Book as soon as conditional admission or VPD is in hand.',
        actionRequired: 'Pay the €75 visa fee in PKR cash at the embassy counter according to the embassy official exchange rate on the day of appointment.',
        sources: [
          {
            title: 'German Missions in Pakistan Portal',
            url: 'https://pakistan.diplo.de/',
            publisher: 'German Embassy Islamabad',
            publisherType: 'embassy',
          },
        ],
      },
      {
        stepNumber: 6,
        title: 'Consular Processing & Visa Collection',
        description: 'Your application is forwarded to the local immigration authority (Ausländerbehörde) in your university city in Germany for statutory clearance under §31 AufenthV.',
        portalName: 'Passport Tracking & Collection Notification',
        portalUrl: 'https://pakistan.diplo.de/',
        pakistanSpecificNotes: 'Once approved, submit your passport, updated travel date, and incoming health insurance for sticker affixing.',
        actionRequired: 'Verify visa vignette details: correct name spelling, category Section 16b, and expiration date.',
        sources: [
          {
            title: 'German Missions Pakistan Processing Notice',
            url: 'https://pakistan.diplo.de/',
            publisher: 'German Embassy Islamabad',
            publisherType: 'embassy',
          },
        ],
      },
    ],
    pakistanAppointmentGuide: {
      vacOrEmbassy: 'Direct German Embassy Islamabad (Diplomatic Enclave) or German Consulate General Karachi (Clifton).',
      bookingProcedure: 'Applicants register on the official consular appointment waitlist under Student Visa. Confirmation email with waiting list number is issued immediately; specific appointment date and time is emailed 4-6 weeks prior to slot.',
      biometricsDetails: '10-finger digital biometric fingerprint scan and biometric facial photograph taken at the consular counter.',
      interviewPreparationTips: [
        'Be prepared to explain why you selected this specific university rather than competing Pakistani or European programs.',
        'Know the exact course modules, professorial chairs (Professur), research labs, and ECTS credits breakdown of your program.',
        'Articulate clear, concrete career progression in Pakistan following graduation (e.g. target domestic corporate employers, salary multiples).',
        'Demonstrate genuine English fluency without hesitations if applying for an English-taught program; learn basic German conversational greetings.',
        'Ensure zero discrepancies between CV employment dates, tax certificates, and graduation transcripts.',
      ],
    },
    documentChecklist: [
      {
        id: 'doc-videx',
        title: 'VIDEX National Visa Application Form & Declarations (§53, §54 AufenthG)',
        category: 'visa_forms',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Printed from VIDEX system with clear barcodes, dated and signed by applicant.',
        sources: [{ title: 'VIDEX Portal', url: 'https://videx-national.diplo.de/', publisher: 'Auswärtiges Amt', publisherType: 'portal' }],
      },
      {
        id: 'doc-passport',
        title: 'Original Valid Passport',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Valid for at least 12 months from travel date, minimum 2 blank pages. Include copies of data pages and previous Schengen/UK/US visas.',
        sources: [{ title: 'German Missions Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy', publisherType: 'embassy' }],
      },
      {
        id: 'doc-photos',
        title: 'Three Biometric Passport Photos',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 0,
        detail: 'White background, 35mm x 45mm, sharp contrast, neutral expression, taken within last 6 months.',
        sources: [{ title: 'Biometric Photo Specifications', url: 'https://www.auswaertiges-amt.de', publisher: 'Auswärtiges Amt', publisherType: 'government' }],
      },
      {
        id: 'doc-admission',
        title: 'University Admission Letter (Zulassungsbescheid)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Full, unconditional admission letter stating program name, start date, language of instruction, and semester dates.',
        sources: [{ title: 'German Missions Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy', publisherType: 'embassy' }],
      },
      {
        id: 'doc-blocked-acct',
        title: 'Blocked Account Confirmation (€11,904 Sperrkonto)',
        category: 'financial',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Official blocking confirmation letter from approved provider (Fintiba, Expatrio, Coracle) confirming €11,904 credited.',
        sources: [{ title: 'Blocked Account Requirements', url: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600', publisher: 'Auswärtiges Amt', publisherType: 'government' }],
      },
      {
        id: 'doc-hec-degree',
        title: 'HEC Attested Bachelor Degree & Complete Transcripts',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'HEC',
        copiesNeeded: 2,
        detail: 'Original HEC QR-coded verification ticket stamped on reverse of degree and all official DMC/transcripts.',
        sources: [{ title: 'HEC Attestation Rules', url: 'https://hec.gov.pk', publisher: 'Higher Education Commission Pakistan', publisherType: 'government' }],
      },
      {
        id: 'doc-ibcc-certs',
        title: 'IBCC Attested Matric (SSC) & Intermediate (HSSC / FSc) Certificates',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'IBCC',
        copiesNeeded: 2,
        detail: 'Original secondary and higher secondary certificates with IBCC QR-code stickers and seal.',
        sources: [{ title: 'IBCC Attestation Portal', url: 'https://ibcc.edu.pk', publisher: 'IBCC Pakistan', publisherType: 'government' }],
      },
      {
        id: 'doc-english',
        title: 'Standardized English Language Certificate (IELTS / TOEFL)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Official IELTS Academic Test Report Form (typically 6.5 minimum) or TOEFL iBT score report.',
        sources: [{ title: 'German Missions Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy', publisherType: 'embassy' }],
      },
      {
        id: 'doc-sop',
        title: 'Signed Motivation Letter (Statement of Purpose)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Detailed letter detailing academic trajectory, why Germany, specific university choice, syllabus alignment, and career return plans in Pakistan.',
        sources: [{ title: 'German Missions Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy', publisherType: 'embassy' }],
      },
      {
        id: 'doc-cv',
        title: 'Europass Curriculum Vitae (CV)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Chronological timeline with no unexplained gaps, detailing academic milestones and professional experience.',
        sources: [{ title: 'Europass CV Platform', url: 'https://europa.eu/europass/en', publisher: 'European Union', publisherType: 'portal' }],
      },
      {
        id: 'doc-insurance',
        title: 'Travel Health Insurance & Statutory Insurance Confirmation',
        category: 'insurance',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail: 'Minimum €30,000 medical emergency cover valid from scheduled travel date, plus German statutory GKV pre-registration letter.',
        sources: [{ title: 'German Missions Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy', publisherType: 'embassy' }],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. Money & Proof of Funds
  // --------------------------------------------------------------------------
  financialRequirements: {
    proofOfFundsType: 'Blocked Account',
    officialMinimumAmount: {
      amount: 11904,
      currency: 'EUR',
      approxPKR: 3612800,
      period: '€992 per month for 12 months (Statutory standard as of September 1, 2024 / current year)',
    },
    approvedProvidersOrBanks: [
      'Expatrio (Digital blocked account + TK statutory health insurance package)',
      'Fintiba (Fintiba Plus with Sutor Bank custody)',
      'Coracle (Coracle Prime package with German bank account)',
      'Deutsche Bank (Paper-based application, slower verification)',
    ],
    healthInsuranceDetails: {
      type: 'German Statutory Health Insurance (Gesetzliche Krankenversicherung - GKV)',
      costPerMonthOrYear: 'Approx. €125 to €135 per month (subsidized student statutory tariff)',
      providers: ['Techniker Krankenkasse (TK)', 'Barmer', 'DAK-Gesundheit', 'AOK'],
    },
    visaFeeDetails: {
      embassyFee: 75,
      embassyFeeCurrency: 'EUR',
      vacServiceFeePKR: 0,
      surcharges: 'Payable in Pakistani Rupees (PKR) in exact cash at the Embassy counter on the appointment day. The consular exchange rate is updated monthly (approx. 22,500–23,000 PKR). Reduced fee of €37.50 for applicants under 18.',
    },
    sources: [
      {
        title: 'Proof of Financial Resources (Sperrkonto)',
        url: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600',
        publisher: 'Federal Foreign Office (Auswärtiges Amt)',
        publisherType: 'government',
      },
      {
        title: 'German Missions in Pakistan Portal',
        url: 'https://pakistan.diplo.de/',
        publisher: 'German Embassy Islamabad',
        publisherType: 'embassy',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'Always wire an extra buffer of €100–€150 to account for intermediary bank corresponding deduction charges during the SWIFT transfer from Pakistan.',
  },

  // --------------------------------------------------------------------------
  // 5. Admission Criteria & Academic Equivalence
  // --------------------------------------------------------------------------
  admissionCriteria: {
    bachelorRequirements: {
      pakistaniCredential: '12 Years Schooling: Intermediate (FSc Pre-Engineering / Pre-Medical / ICS / I.Com) or Cambridge A-Levels.',
      localEquivalence: 'FSc (12 years) is generally NOT directly equivalent to the German 13-year Abitur. Pakistani FSc students must either: (A) complete 1 year of undergraduate study at an HEC-recognized university in Pakistan (minimum 30-32 credits with good CGPA), or (B) attend a 1-year preparatory college in Germany (Studienkolleg: T-Kurs for tech, M-Kurs for medicine, W-Kurs for business) and pass the Feststellungsprüfung (FSP). A-Levels students need specific subject combinations (3-4 academic subjects at grade C or higher according to KMK guidelines).',
      minimumGradeCGPA: 'Minimum 65–70% in FSc; minimum 2.5 on German grading scale (where 1.0 is highest and 4.0 is passing).',
      gapAcceptancePolicy: 'Gaps up to 1-2 years acceptable if supported by preparation for language exams or relevant internships.',
      attestationSteps: [
        'Attest original Matric (SSC) and Inter (HSSC) certificates from respective Board of Intermediate and Secondary Education (BISE).',
        'Submit to Inter Board Coordination Commission (IBCC) for QR-code seal and certificate.',
      ],
    },
    masterRequirements: {
      pakistaniCredential: '16 Years Education: 4-Year Bachelor of Science (BS/BSc Hons), BE/B.Tech (4 years), or 2-Year Bachelor + 2-Year Master (Old 14+2 system).',
      localEquivalence: 'Direct entry to Master programs provided strict subject/ECTS congruence (Fachbindung) is met. German universities assess your transcript against their specific bachelor curriculum (e.g. requiring at least 18-30 ECTS in higher mathematics, algorithms, or core theory).',
      minimumGradeCGPA: 'Minimum CGPA 3.0/4.0 (equivalent to approx. 2.5 or better on the Bavarian formula). Top technical universities (TU9) frequently require CGPA 3.2+.',
      gapAcceptancePolicy: 'Study gaps are widely accepted if backed by formal employment experience, tax receipts, or continuous technical upskilling.',
      attestationSteps: [
        'Apply online on HEC e-portal (eservices.hec.gov.pk).',
        'Submit original degree and all official DMC transcripts for physical HEC QR-coded verification ticket.',
        'MOFA (Ministry of Foreign Affairs) attestation following HEC verification.',
      ],
    },
    phdRequirements: {
      pakistaniCredential: '18 Years Education: MS / MPhil degree with thesis completion.',
      localEquivalence: 'Direct acceptance by finding a doctoral supervisor (Doktorvater) at a German research university or through structured doctoral programs (Graduiertenkolleg).',
      minimumGradeCGPA: 'First-class honours or minimum CGPA 3.5/4.0.',
      gapAcceptancePolicy: 'Gaps are not an issue provided peer-reviewed research publications and research proposals are strong.',
      attestationSteps: ['HEC Master and MS/MPhil attestation + MOFA validation.'],
    },
    ectsOrCreditSystemExplanation: 'Germany uses the European Credit Transfer and Accumulation System (ECTS). 1 ECTS credit equals 25 to 30 hours of total student workload. A standard 4-year Pakistani BS degree (130-140 credit hours) is generally evaluated as equivalent to 180 to 240 ECTS credits. Admission committees apply the modified Bavarian Formula to convert Pakistani CGPA into the German scale (1.0 = Best, 4.0 = Passing).',
    evaluationPortals: [
      {
        name: 'uni-assist e.V.',
        role: 'Centralized pre-check organization for international applications to over 180 German universities. Issues Vorprüfungsdokumentation (VPD).',
        fee: '€75 for first university application; €30 for each additional university in the same semester.',
        processingWeeks: '4 to 6 weeks from receipt of complete documentation and payment.',
        url: 'https://www.uni-assist.de/en/',
      },
      {
        name: 'Anabin Database (KMK Central Office for Foreign Education)',
        role: 'Official German database indexing foreign universities (H+ status indicates full recognition) and secondary school leaving diplomas.',
        fee: 'Free public database lookup.',
        processingWeeks: 'Instant search.',
        url: 'https://anabin.kmk.org/',
      },
    ],
    sources: [
      {
        title: 'Anabin - Info System on Recognition of Foreign Educational Credentials',
        url: 'https://anabin.kmk.org/',
        publisher: 'KMK (Kultusministerkonferenz)',
        publisherType: 'government',
      },
      {
        title: 'DAAD Study in Germany Portal',
        url: 'https://www.daad.de/en/',
        publisher: 'DAAD',
        publisherType: 'scholarship',
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
        typicalRequirement: 'Most English-taught Master programs require minimum 6.5 overall with no section below 6.0. Competitive computer science or business programs at TU9 universities may require 7.0.',
      },
      toeflMinScore: 88,
      pteMinScore: 65,
      duolingoAccepted: false,
      moiWaiverAllowed: false,
      moiConditions: 'CRITICAL CONSULAR RULE: While some individual university departments state in admission letters that English proficiency was verified via a Medium of Instruction (MOI) certificate from a Pakistani university, the German Embassy Islamabad and Consulate General Karachi frequently refuse visas or demand standardized IELTS/TOEFL certificates at the visa window. Pakistani students must NEVER rely solely on an MOI certificate; submitting a valid IELTS Academic (min 6.5) or TOEFL certificate is essential for visa issuance.',
    },
    localLanguageRequirements: {
      language: 'German (Deutsch)',
      studyRequirement: 'Zero German required for 100% English-taught International Master Programs (though A1 is sometimes recommended by universities). German-taught programs require C1 level (TestDaF 4x4, DSH-2, or Goethe-Zertifikat C1).',
      dailyLifeImportance: 'Moderate',
      partTimeJobImportance: 'High',
      postStudyPrImportance: 'Essential. Reaching B1 German unlocks permanent residency (Niederlassungserlaubnis) in just 21 months under the EU Blue Card or 24 months for German graduates, compared to 36+ months without language proficiency.',
      recognizedTests: [
        'TestDaF (Test Deutsch als Fremdsprache) - Level 4 in all 4 sections',
        'Goethe-Zertifikat (A1, A2, B1, B2, C1) - Issued by Goethe-Institut Pakistan (Karachi / Lahore NUML centre)',
        'telc Deutsch (telc C1 Hochschule)',
        'DSH (Deutsche Sprachprüfung für den Hochschulzugang - DSH-2 or DSH-3)',
      ],
    },
    sources: [
      {
        title: 'DAAD Language Requirements for Study in Germany',
        url: 'https://www.daad.de/en/',
        publisher: 'DAAD',
        publisherType: 'scholarship',
      },
      {
        title: 'German Missions in Pakistan Portal',
        url: 'https://pakistan.diplo.de/',
        publisher: 'German Embassy Islamabad',
        publisherType: 'embassy',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 7. Top Universities
  // --------------------------------------------------------------------------
  topUniversities: [
    {
      id: 'tum',
      name: 'Technical University of Munich (TUM)',
      city: 'Munich, Bavaria',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '28',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: '€4,000–€6,000/year (Nominal fee structure introduced for non-EU students in select programs in 2024)',
      internationalStudentPercentage: '44%',
      strongPrograms: ['Informatics / Computer Science', 'Robotics & AI', 'Mechanical Engineering', 'Data Engineering'],
      officialWebsite: 'https://www.tum.de/en/',
      sources: [{ title: 'TUM Official Profile', url: 'https://www.tum.de/en/', publisher: 'TUM', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'lmu',
      name: 'LMU Munich (Ludwig-Maximilians-Universität)',
      city: 'Munich, Bavaria',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '59',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €150/semester admin contribution)',
      internationalStudentPercentage: '18%',
      strongPrograms: ['Data Science', 'Physics & Quantum Tech', 'Economics', 'Life Sciences & Medicine'],
      officialWebsite: 'https://www.lmu.de/en/',
      sources: [{ title: 'LMU Official Profile', url: 'https://www.lmu.de/en/', publisher: 'LMU Munich', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'heidelberg',
      name: 'Heidelberg University (Ruprecht-Karls-Universität)',
      city: 'Heidelberg, Baden-Württemberg',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '84',
      },
      tuitionType: 'State Fee',
      estimatedAnnualTuition: '€3,000/year (€1,500/semester state non-EU tuition)',
      internationalStudentPercentage: '20%',
      strongPrograms: ['Biomedical Sciences', 'Translational Medical Research', 'Scientific Computing', 'Law'],
      officialWebsite: 'https://www.uni-heidelberg.de/en',
      sources: [{ title: 'Heidelberg International Portal', url: 'https://www.uni-heidelberg.de/en', publisher: 'Heidelberg University', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'rwth-aachen',
      name: 'RWTH Aachen University',
      city: 'Aachen, North Rhine-Westphalia',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '99',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €320/semester contribution including transit ticket)',
      internationalStudentPercentage: '29%',
      strongPrograms: ['Automotive Engineering', 'Electrical Engineering & IT', 'Production Technology', 'Materials Science'],
      officialWebsite: 'https://www.rwth-aachen.de/',
      sources: [{ title: 'RWTH Aachen International', url: 'https://www.rwth-aachen.de/', publisher: 'RWTH Aachen', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'kit',
      name: 'Karlsruhe Institute of Technology (KIT)',
      city: 'Karlsruhe, Baden-Württemberg',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '102',
      },
      tuitionType: 'State Fee',
      estimatedAnnualTuition: '€3,000/year (€1,500/semester state non-EU tuition)',
      internationalStudentPercentage: '25%',
      strongPrograms: ['Energy Technologies', 'Computer Science', 'Chemical Engineering', 'Mechanical Engineering'],
      officialWebsite: 'https://www.kit.edu/english/',
      sources: [{ title: 'KIT Portal', url: 'https://www.kit.edu/english/', publisher: 'KIT', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'tu-berlin',
      name: 'Technical University of Berlin (TU Berlin)',
      city: 'Berlin',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '147',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €310/semester contribution with Berlin transit)',
      internationalStudentPercentage: '27%',
      strongPrograms: ['Computer Science', 'Civil Systems Engineering', 'Renewable Energy', 'Urban Design'],
      officialWebsite: 'https://www.tu.berlin/en/',
      sources: [{ title: 'TU Berlin International', url: 'https://www.tu.berlin/en/', publisher: 'TU Berlin', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'hu-berlin',
      name: 'Humboldt University of Berlin',
      city: 'Berlin',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '126',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €315/semester contribution)',
      internationalStudentPercentage: '18%',
      strongPrograms: ['Computational Neuroscience', 'Economics & Management', 'Philosophy', 'Agricultural Sciences'],
      officialWebsite: 'https://www.hu-berlin.de/en',
      sources: [{ title: 'Humboldt University', url: 'https://www.hu-berlin.de/en', publisher: 'HU Berlin', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'tu-darmstadt',
      name: 'Technical University of Darmstadt (TU Darmstadt)',
      city: 'Darmstadt, Hesse',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '246',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €300/semester contribution)',
      internationalStudentPercentage: '22%',
      strongPrograms: ['Cybersecurity & Cryptography', 'AI & Machine Learning', 'Aerospace Engineering'],
      officialWebsite: 'https://www.tu-darmstadt.de/',
      sources: [{ title: 'TU Darmstadt Profile', url: 'https://www.tu-darmstadt.de/', publisher: 'TU Darmstadt', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'uni-stuttgart',
      name: 'University of Stuttgart',
      city: 'Stuttgart, Baden-Württemberg',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '314',
      },
      tuitionType: 'State Fee',
      estimatedAnnualTuition: '€3,000/year (€1,500/semester state non-EU tuition)',
      internationalStudentPercentage: '23%',
      strongPrograms: ['Computational Mechanics of Materials and Structures (COMMAS)', 'Automotive & Engine Systems', 'INFOTECH'],
      officialWebsite: 'https://www.uni-stuttgart.de/en/',
      sources: [{ title: 'University of Stuttgart', url: 'https://www.uni-stuttgart.de/en/', publisher: 'University of Stuttgart', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
    {
      id: 'fau-erlangen',
      name: 'FAU Erlangen-Nürnberg',
      city: 'Erlangen / Nuremberg, Bavaria',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '229',
      },
      tuitionType: 'Tuition-Free (Admin Fee Only)',
      estimatedAnnualTuition: '€0 tuition (approx. €140/semester admin contribution)',
      internationalStudentPercentage: '17%',
      strongPrograms: ['Advanced Signal Processing & Communications', 'Clean Energy Processes', 'Artificial Intelligence'],
      officialWebsite: 'https://www.fau.eu/',
      sources: [{ title: 'FAU Erlangen Profile', url: 'https://www.fau.eu/', publisher: 'FAU', publisherType: 'university' }],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 8. Scholarships
  // --------------------------------------------------------------------------
  scholarships: [
    {
      name: 'DAAD Development-Related Postgraduate Courses (EPOS)',
      awardingBody: 'DAAD (German Academic Exchange Service)',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: '€934/month for Master students, €1,300/month for PhD candidates + travel allowance, health insurance, and family subsidy.',
      eligibilityCriteria: [
        'Bachelor degree (16 years education) completed within the last 6 years with above-average grades',
        'At least 2 years of professional work experience in a relevant ministry, NGO, or commercial institution after bachelor completion',
        'Proven motivation towards sustainable economic/social development in Pakistan',
      ],
      pakistanDeadlines: 'Varies by program between August and November annually via DAAD Portal for following year entry.',
      officialLink: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
      sources: [
        {
          title: 'DAAD Scholarship Database',
          url: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
          publisher: 'DAAD',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'DAAD Helmut-Schmidt-Programme (Public Policy & Good Governance)',
      awardingBody: 'German Federal Foreign Office & DAAD',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: '€934/month + subsidized housing allowance and statutory health insurance.',
      eligibilityCriteria: [
        'Graduates in social sciences, political science, economics, law, or administration',
        'Academic excellence and active commitment to governance or public sector development',
      ],
      pakistanDeadlines: 'June 1 to July 31 annually for the following year winter semester.',
      officialLink: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
      sources: [
        {
          title: 'Helmut-Schmidt-Programme Overview',
          url: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
          publisher: 'DAAD',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Deutschlandstipendium (National Scholarship Programme)',
      awardingBody: 'Federal Ministry of Education and Research (BMBF) & University Enterprise Partners',
      coverage: 'Living Allowance Only',
      stipendAmount: '€300 per month (€150 from federal government + €150 from private sponsors) for minimum 2 semesters.',
      eligibilityCriteria: [
        'Enrolled at a participating German university',
        'Outstanding academic performance (high CGPA/grades)',
        'Extracurricular engagement or overcoming special social/personal hurdles',
      ],
      pakistanDeadlines: 'Directly handled by individual universities during enrolment (typically September–October).',
      officialLink: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
      sources: [
        {
          title: 'DAAD Deutschlandstipendium Guide',
          url: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
          publisher: 'DAAD',
          publisherType: 'scholarship',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Heinrich Böll Foundation Grants',
      awardingBody: 'Heinrich Böll Foundation (Green Political Foundation)',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: '€934/month + individual allowances for non-EU Master students.',
      eligibilityCriteria: [
        'Demonstrated commitment to green values: ecological sustainability, democracy, human rights',
        'Proof of minimum B2/C1 German proficiency (interviews held in German)',
      ],
      pakistanDeadlines: 'March 1 and September 1 annually.',
      officialLink: 'https://www.boell.de/en/scholarships',
      sources: [
        {
          title: 'Heinrich Böll Foundation Scholarships',
          url: 'https://www.boell.de/en/scholarships',
          publisher: 'Heinrich Böll Foundation',
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
    termTimeHoursPerWeek: 'Up to 20 hours per week during active semester terms (Werkstudentenprivileg)',
    vacationTimeHoursPerWeek: 'Full-time work permitted during official university semester breaks (Semesterferien)',
    statutoryWorkRules: 'International students hold statutory authorization to work up to 140 full days (shifts > 4 hours) or 280 half days (shifts ≤ 4 hours) per calendar year without requiring approval from the Federal Employment Agency (Bundesagentur für Arbeit). This was expanded from the previous 120/240 days rule under the Skilled Immigration Act update on March 1, 2024. Employment as an academic or student assistant (HiWi) at the university or research institutes does NOT count against the 140-day quota.',
    statutoryMinimumWage: '€12.82 per hour (German Statutory Minimum Wage / Gesetzlicher Mindestlohn as of 2025; raised to €13.90 in 2026)',
    averagePartTimeEarningsMonthly: '€600 to €1,200 per month depending on hours (10–20 hrs/week) and skill level (technical / software student roles pay €14–€20/hour).',
    taxExemptionLimits: 'Minijob earnings up to €538 per month are exempt from income tax and statutory unemployment insurance contributions.',
    freelancingAllowed: false,
    sources: [
      {
        title: 'Skilled Immigration Act Reform - Student Work Regulations',
        url: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
        publisher: 'Federal Ministry of the Interior and Community (BMI)',
        publisherType: 'government',
      },
      {
        title: 'Federal Ministry of Labour and Social Affairs - Mindestlohn',
        url: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html',
        publisher: 'BMAS',
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
      reasonTitle: 'Academic Discontinuity & Incongruent ECTS Modules',
      statutoryClause: 'Section 16b (1) AufenthG - Lack of Academic Aptitude / Progression',
      explanation: 'Applying for a Master degree that deviates significantly from undergraduate studies, or having significant prerequisite credit deficits (e.g. applying for Data Science with an Electrical or Civil Engineering bachelor without showing minimum 24-30 ECTS in mathematics and computer algorithms). The consular officer questions the plausibility of successful graduation.',
      preventativeMeasures: [
        'Map your undergraduate transcript syllabus line-by-line against the target German university course catalogue.',
        'Submit the official Uni-Assist VPD or explicit departmental qualification match sheet highlighting prerequisite alignment.',
        'Do not switch disciplines without verifiable professional transition evidence.',
      ],
      remedyProcess: 'Fresh Application or Berlin Administrative Court (Verwaltungsgericht Berlin) Judicial Review',
      remedyTimeline: 'Submit legal action within 1 month, or submit fresh corrected application immediately.',
      sources: [
        {
          title: 'Residence Act §16b Study Visa Refusal Framework',
          url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html',
          publisher: 'Federal Ministry of Justice',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Failure to Demonstrate English/German Fluency at Consular Interview',
      statutoryClause: 'Section 16b (2) AufenthG - Inadequate Language Competence',
      explanation: 'Consular officers in Islamabad and Karachi conduct conversational checks in the language of instruction. If an applicant holding an MOI certificate stumbles on basic technical questions or cannot articulate their study objectives clearly in English, the visa is rejected on language deficiency grounds.',
      preventativeMeasures: [
        'Always obtain an official IELTS Academic certificate (score 6.5+) rather than relying on an MOI letter.',
        'Practice articulating your undergraduate thesis, research methodology, and syllabus specifics in fluent English.',
        'Acquire at least A1/A2 German through Goethe-Institut to demonstrate genuine cultural commitment.',
      ],
      remedyProcess: 'Fresh Application with Valid Standardized Test Score',
      remedyTimeline: 'Re-apply immediately after securing an authentic IELTS 6.5+ or Goethe A2/B1 certificate.',
      sources: [
        {
          title: 'German Missions in Pakistan Portal',
          url: 'https://pakistan.diplo.de/',
          publisher: 'German Embassy Islamabad',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Unexplained Study Gaps & Unverifiable Employment History',
      statutoryClause: 'Section 16b AufenthG & Section 54 (2) No. 8 AufenthG (Plausibility & Fraud)',
      explanation: 'Gaps of 2 or more years between bachelor completion and master application without documented employment, tax records, or verifiable salary slips. Submitting generic experience letters from unverified or unregistered local entities triggers consular verification failure.',
      preventativeMeasures: [
        'Account for every single month on your Europass CV since secondary school completion.',
        'Provide formal salary bank statements, FBR income tax returns, and employer appointment letters for all post-study gap years.',
      ],
      remedyProcess: 'Fresh Application with Complete Documentary Trail',
      remedyTimeline: 'Re-apply with verified FBR tax and bank trail.',
      sources: [
        {
          title: 'German Missions in Pakistan Portal',
          url: 'https://pakistan.diplo.de/',
          publisher: 'German Embassy Islamabad',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Generic Statement of Purpose & Lack of Course Knowledge',
      statutoryClause: 'Section 16b (1) AufenthG - Lack of Genuine Academic Purpose',
      explanation: 'Submitting a boilerplate motivation letter praising Germany for "free education, fast cars, and beer" without citing specific institutes (Lehrstuhl), professors, laboratories, or how the curriculum bridges specific knowledge gaps for target roles back in Pakistan.',
      preventativeMeasures: [
        'Quote specific research modules, course numbers, professors, and lab equipment.',
        'Explain why competing programs in Pakistan or other countries did not offer this specialized capability.',
        'Define explicit post-graduation return objectives citing specific Pakistani corporate hubs (e.g. Islamabad, Lahore, Karachi fintech/engineering sectors).',
      ],
      remedyProcess: 'Fresh Application with Tailored Academic SOP',
      remedyTimeline: 'Re-apply with syllabus-aligned statement of purpose.',
      sources: [
        {
          title: 'German Consular Adjudication Standards',
          url: 'https://www.auswaertiges-amt.de/en',
          publisher: 'Auswärtiges Amt',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 11. After Graduation (Post-Study Work, PR & Citizenship)
  // --------------------------------------------------------------------------
  postStudyImmigration: {
    postStudyVisaName: '18-Month Jobseeker Residence Permit for Graduates (§20 AufenthG)',
    durationMonths: 18,
    eligibilityRequirements: [
      'Official Degree Certificate or provisional completion letter (Zeugnis) from an accredited German university',
      'Proof of living sustenance (€992/month blocked account, regular employment income, or parent guarantee)',
      'Statutory health insurance coverage',
    ],
    transitionToWorkPermit: {
      workPermitName: 'EU Blue Card (§18g AufenthG) or Skilled Worker Residence Permit (§18b AufenthG)',
      salaryThreshold: 'For regular professions, EU Blue Card threshold is €45,300/year; for bottleneck shortage professions (MINT / STEM: IT, mathematics, engineering, natural sciences, medicine) and new university graduates, the lowered threshold is €41,041.80/year (approx. €3,420/month).',
    },
    prPermanentResidencyRoute: {
      visaName: 'Settlement Permit (Niederlassungserlaubnis für Absolventen deutscher Hochschulen - §18c AufenthG)',
      qualificationTimeMonths: 'German university graduates can apply for Permanent Residency after just 24 months of skilled employment and pension contributions. If working on an EU Blue Card, graduates can secure PR in just 21 months with B1 German (or 27 months with basic A1 German).',
      languageRequirement: 'German B1 level for fast-track 21-month route; basic A1 German for 27-month route; B1 for standard 24-month graduate settlement.',
    },
    citizenshipTimelineYears: '5 years of legal residence in Germany (reduced from 8 years under the modern Nationality Act / Staatsangehörigkeitsmodernisierungsgesetz effective June 27, 2024). Exceptionally integrated graduates with C1 German and outstanding academic/professional contributions can naturalize in just 3 years. Dual citizenship is now legally permitted under German law.',
    sources: [
      {
        title: 'Settlement Permit for Graduates of German Higher Education Institutions',
        url: 'https://www.make-it-in-germany.com/en/visa-residence/types/settlement-permit',
        publisher: 'Make it in Germany',
        publisherType: 'government',
      },
      {
        title: 'Residence Act §18c - Settlement Permit for Skilled Workers',
        url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__18c.html',
        publisher: 'Federal Ministry of Justice',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 12. Bringing Family & Dependent Rules
  // --------------------------------------------------------------------------
  dependentRules: {
    spousalVisaPermittedDuringStudy: true,
    conditions: [
      'The international student holds an existing residence permit (§16b) valid for at least 1 year into the future.',
      'Sufficient living space (Wohnraumnachweis): German municipal housing regulations typically mandate at least 12 square meters per adult and 10 square meters per child (e.g. a 2-room apartment of at least 45–50 m² for a married couple).',
      'Proof of financial sustenance without recourse to public social assistance: Requires an additional ~€400 to €500 per month for the spouse deposited into a blocked account or proven through formal employment/stipend, plus statutory family health insurance.',
      'Spouse must provide basic German language proficiency certificate (Goethe-Zertifikat A1) at the embassy, unless the principal student holds an EU Blue Card.',
    ],
    spousalWorkRights: '100% unrestricted right to work in Germany (full-time employment, part-time, or self-employment) granted automatically under Section 27 (5) of the Residence Act upon issuance of the spousal residence permit.',
    childDependentRules: 'Minor unmarried children under 16 can accompany parents without language tests; children between 16 and 18 require C1 German or proof of seamless integration into the German schooling system.',
    financialSponsorshipRequirementExtraMonthly: 'Approximately €400 to €500 per month for spouse, plus €300 to €350 per child.',
    sources: [
      {
        title: 'Family Reunification for Foreign Nationals (§29 - §32 AufenthG)',
        url: 'https://www.gesetze-im-internet.de/aufenthg_2004/__29.html',
        publisher: 'Federal Ministry of Justice',
        publisherType: 'government',
      },
      {
        title: 'German Missions in Pakistan Portal',
        url: 'https://pakistan.diplo.de/',
        publisher: 'German Embassy Islamabad',
        publisherType: 'embassy',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'In practice, German consular missions in Pakistan strongly recommend that students travel to Germany first, complete city registration (Anmeldung), secure appropriate family-sized housing, and then sponsor the spouse via family reunion.',
  },

  // --------------------------------------------------------------------------
  // 13. Recent Law & Policy Changes
  // --------------------------------------------------------------------------
  recentPolicyTimeline: [
    {
      effectiveDate: '2025-07-01',
      headline: 'Abolition of the Remonstration Procedure for Visa Refusals Worldwide',
      summary: 'The Federal Foreign Office officially abolished the voluntary Remonstration appeal process worldwide to free up consular processing bandwidth and reduce overall appointment queues.',
      impactOnStudents: 'Rejected applicants must either submit a fresh, corrected application or file a formal lawsuit at the Administrative Court of Berlin (Verwaltungsgericht Berlin).',
      officialAnnouncementUrl: 'https://pakistan.diplo.de/',
      publisher: 'Auswärtiges Amt',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2025-01-01',
      headline: 'Statutory Minimum Wage Increased to €12.82/hour (and €13.90 in 2026)',
      summary: 'Germany raised the statutory minimum wage from €12.41 to €12.82 per hour across all industries, boosting student earnings.',
      impactOnStudents: 'International students working standard 20 hours/week earn over €1,025/month gross at base statutory rates.',
      officialAnnouncementUrl: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html',
      publisher: 'Federal Ministry of Labour and Social Affairs (BMAS)',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-09-01',
      headline: 'Blocked Account Requirement Increased to €11,904/year',
      summary: 'Following BAföG federal student aid adjustments, the monthly blocked account living maintenance figure rose from €934 to €992 per month (€11,904 total for 12 months).',
      impactOnStudents: 'All visa applicants applying on or after September 1, 2024 must deposit €11,904 into their Sperrkonto.',
      officialAnnouncementUrl: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600',
      publisher: 'Federal Foreign Office (Auswärtiges Amt)',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-06-27',
      headline: 'New Modernized German Nationality Act Enters into Force',
      summary: 'Reforms reduced standard naturalization residence requirements from 8 years to 5 years (and 3 years for special integration with C1 German). Dual citizenship is now fully recognized.',
      impactOnStudents: 'International graduates who secure skilled employment can transition to German and EU citizenship within 5 years without relinquishing their Pakistani citizenship.',
      officialAnnouncementUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/settlement-permit',
      publisher: 'Make it in Germany',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-06-01',
      headline: 'Opportunity Card (Chancenkarte) Points-Based Job-Seeker Permit Launches',
      summary: 'Introduced Section 20a AufenthG allowing third-country graduates with recognized qualifications or 6 points on vocational criteria to enter Germany for up to 1 year of job hunting with 20 hours/week part-time work rights.',
      impactOnStudents: 'Provides an alternative entry pathway for Pakistani graduates who did not complete degrees inside Germany.',
      officialAnnouncementUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/chancenkarte-opportunity-card',
      publisher: 'Make it in Germany',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-03-01',
      headline: 'Skilled Immigration Act Reform: Student Work Limit Increased to 140 Days',
      summary: 'The statutory annual work ceiling for third-country students was increased from 120 full days (or 240 half days) to 140 full days (or 280 half days). Secondary employment during preparatory studies also liberalized to 20 hours/week.',
      impactOnStudents: 'Significantly expands legal student earning opportunities during semester and holiday breaks.',
      officialAnnouncementUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
      publisher: 'Federal Ministry of the Interior',
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 14. Living in Germany
  // --------------------------------------------------------------------------
  studentLiving: {
    avgAccommodationCostMonthly: '€300 to €450 for student dormitory (Studentenwohnheim / Studierendenwerk); €400 to €750 for private shared flat (WG - Wohngemeinschaft); €700 to €1,100 for private studio apartment in major hubs like Munich, Frankfurt, or Berlin.',
    housingSearchPortals: [
      'WG-Gesucht (wg-gesucht.de) - Germany’s premier flatshare platform',
      'ImmobilienScout24 (immobilienscout24.de)',
      'Local Studierendenwerk Dormitory Waiting Lists (apply 4-6 months in advance)',
      'Immowelt (immowelt.de)',
    ],
    healthCareSystemSummary: 'World-leading public healthcare network. All enrolled university students are eligible for subsidized statutory health insurance (GKV) covering 100% of doctor visits, prescription medicine, hospitalizations, and dental care with zero deductible.',
    safetyIndex: 'Extremely high. Germany consistently ranks among the top 20 safest countries globally on the Global Peace Index, with very low violent crime rates and highly reliable public infrastructure.',
    climateOverview: 'Temperate seasonal European climate. Mild summers (20°C to 30°C) and cold winters (-5°C to 5°C with snow in Bavaria and mountainous regions). Central heating is ubiquitous in all residential buildings.',
    halalFoodAvailability: 'Abundant',
    pakistaniCommunityPresence: 'Vibrant and supportive. Large Pakistani student and professional diaspora organizations exist in Berlin, Munich, Aachen, Frankfurt, Stuttgart, and Hamburg (e.g. Pakistan Student Association Germany - PSAG, Pak-German Forum). Pakistani halal grocery stores, mosques, and restaurants are widely present in all major university towns.',
    simAndBankingRecommended: {
      simProviders: ['Aldi Talk (O2 network prepaid)', 'Fraenk (Telekom network digital)', 'Lidl Connect (Vodafone prepaid)', 'Congstar'],
      digitalBanks: ['N26 (German IBAN, multi-language app)', 'Commerzbank (Free student account)', 'Sparkasse', 'Deutsche Bank'],
    },
    transportationStudentPerks: 'Most public universities offer a Semesterticket or subsidized Deutschlandticket (around €29/month for students) enabling unlimited travel on local buses, trams, U-Bahn, S-Bahn, and regional express (RE/RB) trains nationwide throughout Germany.',
    sources: [
      {
        title: 'DAAD Accommodation Guide for Students',
        url: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/accommodation/',
        publisher: 'DAAD',
        publisherType: 'scholarship',
      },
      {
        title: 'Federal Statistical Office (Destatis) Living Cost Indices',
        url: 'https://www.destatis.de/EN/Home/_node.html',
        publisher: 'Destatis',
        publisherType: 'government',
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
      title: 'City Registration at Bürgeramt (Anmeldung)',
      officialTerm: 'Anmeldung einer Wohnung bei der Meldebehörde',
      requiredDocuments: [
        'Valid Passport with German entry visa',
        'Landlord Confirmation Certificate (Wohnungsgeberbestätigung) signed by lessor',
        'Completed Anmeldung registration form',
      ],
      consequenceOfDelay: 'Mandatory by German federal law within 14 days of moving in. Failure prevents opening a German bank account, activating your blocked account, and triggers fines up to €1,000.',
      officialPortalOrGuide: 'https://service.berlin.de/dienstleistung/120686/',
    },
    {
      dayWindow: 'Week 1',
      title: 'Activate Blocked Account & Open German Bank Account',
      officialTerm: 'Sperrkonto-Freischaltung & Girokonto-Eröffnung',
      requiredDocuments: [
        'Anmeldung registration certificate (Meldebestätigung)',
        'German Tax Identification Number (Steuer-ID, mailed automatically after registration)',
        'Passport and entry stamp',
      ],
      consequenceOfDelay: 'Cannot receive the monthly €992 living payout from your blocked account.',
      officialPortalOrGuide: 'https://www.expatrio.com/blocked-account',
    },
    {
      dayWindow: 'Week 2',
      title: 'University Matriculation (Immatrikulation)',
      officialTerm: 'Einschreibung / Immatrikulation an der Hochschule',
      requiredDocuments: [
        'Official Zulassungsbescheid (Admission Letter)',
        'Electronic Health Insurance Notification (M10 from TK/Barmer)',
        'Proof of semester contribution payment (Semesterbeitrag receipt)',
        'Original degree certificates for physical verification',
      ],
      consequenceOfDelay: 'Loss of admission seat and invalidation of student visa sponsorship.',
      officialPortalOrGuide: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/enrolment/',
    },
    {
      dayWindow: 'Month 1',
      title: 'Foreigners Authority Appointment for Electronic Residence Title (eAT)',
      officialTerm: 'Beantragung des elektronischen Aufenthaltstitels (§16b AufenthG) bei der Ausländerbehörde',
      requiredDocuments: [
        'University Enrolment Certificate (Immatrikulationsbescheinigung)',
        'Blocked account activation statement showing incoming monthly transfers',
        'Rental contract and rental payment proof',
        'Biometric passport photograph',
        'Fee of approx. €100 for residence title card issuance',
      ],
      consequenceOfDelay: 'Expiration of the initial entry visa vignette (typically 90-180 days validity) leading to unlawful status.',
      officialPortalOrGuide: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
    },
    {
      dayWindow: 'Month 2',
      title: 'Register for Broadcasting Fee (Rundfunkbeitrag)',
      officialTerm: 'Anmeldung zum Rundfunkbeitrag (ARD ZDF Deutschlandradio)',
      requiredDocuments: ['Meldebestätigung and apartment registration unit number'],
      consequenceOfDelay: 'Mandatory statutory fee of €18.36 per month per residential flat (shared among flatmates in a WG). Ignoring official letters results in administrative penalties and credit score (SCHUFA) debasement.',
      officialPortalOrGuide: 'https://www.rundfunkbeitrag.de/',
    },
  ],

  // --------------------------------------------------------------------------
  // 16. Student FAQs
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: 'Do Pakistani applicants need an APS (Akademische Prüfstelle) certificate for Germany?',
      answer: 'NO. Germany does NOT operate an APS office in Pakistan (unlike India, China, or Vietnam). Pakistani students do NOT require an APS certificate. Your qualifications are evaluated through the KMK Anabin database guidelines, uni-assist e.V. (Vorprüfungsdokumentation / VPD), or directly by your admitting university, backed by HEC and IBCC attestations.',
      category: 'admissions',
      sources: [{ title: 'German Missions in Pakistan Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy Islamabad', publisherType: 'embassy' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I apply for a German student visa using an English Medium of Instruction (MOI) certificate from Pakistan?',
      answer: 'While some German universities grant admission letters based on an MOI letter, the German Embassy Islamabad and Consulate General Karachi strongly prioritize standardized language tests. Consular officers frequently reject applicants or demand an IELTS Academic certificate (minimum 6.5) at the visa interview. It is strongly advised NEVER to rely on an MOI certificate alone; take the official IELTS Academic or TOEFL iBT test.',
      category: 'visa',
      sources: [{ title: 'German Missions in Pakistan Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy Islamabad', publisherType: 'embassy' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the current blocked account (Sperrkonto) requirement, and what happens if my visa is rejected?',
      answer: 'As of September 1, 2024 and continuing through 2025/2026, the federally mandated blocked account sum is €11,904 (€992 per month for 12 months). If your visa application is refused, you submit the official consular rejection letter (Ablehnungsbescheid) to your provider (Expatrio, Fintiba, or Coracle). The provider releases and refunds 100% of your deposited capital back to your Pakistani bank account, deducting only standard administrative closing fees (approx. €50–€100).',
      category: 'finances',
      sources: [{ title: 'Auswärtiges Amt Sperrkonto Rules', url: 'https://www.auswaertiges-amt.de/en/sperrkonto/388600', publisher: 'Auswärtiges Amt', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the difference between Category A and Category B student visa appointments in Pakistan?',
      answer: 'The German Embassy Islamabad prioritizes appointments into two tracks: Category A is reserved for scholarship holders (DAAD, Erasmus) and high-merit academic applicants (typically undergraduate CGPA 3.7/4.0 or higher), who receive appointment dates within 4 to 8 weeks. Category B is for general university admission holders with lower CGPAs, who experience longer waiting periods (often 6 to 10+ months). Applicants should register on the consular waitlist the moment preliminary admission or VPD is in progress.',
      category: 'visa',
      sources: [{ title: 'German Missions in Pakistan Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy Islamabad', publisherType: 'embassy' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I apply for a Bachelor program in Germany directly after 12 years of FSc in Pakistan?',
      answer: 'Generally no. Pakistani 12-year Intermediate (FSc / FA / ICS / I.Com) is evaluated as equivalent to 12 years of secondary school, whereas the German university entrance diploma (Abitur) requires 13 years of schooling. To qualify for a German Bachelor degree, you must either: (1) Complete 1 full year of Bachelor studies (minimum 30 credit hours) at an HEC-recognized university in Pakistan with strong grades, OR (2) Attend a 1-year preparatory college in Germany (Studienkolleg) and pass the Feststellungsprüfung (FSP) entrance examination.',
      category: 'admissions',
      sources: [{ title: 'Anabin School Leaving Equivalence', url: 'https://anabin.kmk.org/', publisher: 'KMK', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work part-time while studying in Germany, and how much can I earn?',
      answer: 'Yes. Under the March 2024 Skilled Immigration Act reform, international students can work up to 140 full days or 280 half days per calendar year (or 20 hours/week during semester time). With the statutory minimum wage at €12.82/hour as of 2025 and €13.90 in 2026 (and technical roles paying €15–€22/hr), working 15-20 hours per week yields between €800 and €1,400 gross per month—sufficient to cover monthly living expenses.',
      category: 'jobs',
      sources: [{ title: 'Student Employment Guidelines', url: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany/financing', publisher: 'Make it in Germany', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How long can I stay in Germany after graduation to find a job?',
      answer: 'Graduates of German universities are entitled to an 18-month Job-Seeking Residence Permit under Section 20 AufenthG. During these 18 months, you can work 100% unrestricted in any job to support yourself while interviewing for career-congruent positions. Once you secure a qualified job offer, you convert directly to an EU Blue Card or Skilled Worker permit without leaving Germany.',
      category: 'settlement',
      sources: [{ title: 'Staying After Graduation (§20 AufenthG)', url: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany/stay-after-graduation', publisher: 'Make it in Germany', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How soon can I get German Permanent Residency (PR) after graduating?',
      answer: 'Graduates of German universities qualify for permanent settlement (Niederlassungserlaubnis) after just 24 months of skilled employment and statutory pension contributions. Furthermore, if you hold an EU Blue Card, you can obtain PR in just 21 months if you demonstrate German B1 proficiency (or 27 months with basic A1 German).',
      category: 'settlement',
      sources: [{ title: 'Make it in Germany Settlement Permit for Graduates', url: 'https://www.make-it-in-germany.com/en/visa-residence/types/settlement-permit', publisher: 'Make it in Germany', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Does Germany now allow dual citizenship for Pakistani nationals?',
      answer: 'YES. Under the modernized German Nationality Act (StARModG) that took effect on June 27, 2024, Germany officially abolished the requirement to renounce prior foreign citizenships. Pakistani citizens naturalizing as German citizens are legally permitted to retain their Pakistani nationality (via NICOP). Furthermore, standard naturalization time was reduced from 8 years to 5 years (and 3 years with C1 German and special integration achievements).',
      category: 'settlement',
      sources: [{ title: 'Make it in Germany Settlement & Naturalization Guide', url: 'https://www.make-it-in-germany.com/en/visa-residence/types/settlement-permit', publisher: 'Make it in Germany', publisherType: 'government' }],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Are there any tuition fees at German public universities?',
      answer: 'At more than 95% of German public universities, tuition is 100% FREE for all international students regardless of nationality. You pay only a mandatory semester administrative contribution (Semesterbeitrag) of €150–€400 per semester, which includes a subsidized public transit pass. The only major exceptions are public universities in the state of Baden-Württemberg (€1,500/semester non-EU tuition) and Technical University of Munich (TUM), which introduced moderate fees for some non-EU master programs in 2024.',
      category: 'finances',
      sources: [{ title: 'DAAD Tuition Fee Overview', url: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/costs-of-education-and-living/', publisher: 'DAAD', publisherType: 'scholarship' }],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 17. Master Official Sources List
  // --------------------------------------------------------------------------
  allOfficialSources: [
    {
      title: 'Auswärtiges Amt - Federal Foreign Office Germany',
      url: 'https://www.auswaertiges-amt.de/en',
      publisher: 'Federal Foreign Office of Germany',
      publisherType: 'government',
    },
    {
      title: 'German Missions in Pakistan (Islamabad & Karachi)',
      url: 'https://pakistan.diplo.de/',
      publisher: 'German Missions in Pakistan',
      publisherType: 'embassy',
    },
    {
      title: 'Consular Services Portal (visa.diplo.de)',
      url: 'https://visa.diplo.de/',
      publisher: 'Federal Foreign Office',
      publisherType: 'portal',
    },
    {
      title: 'VIDEX National Visa Application Portal',
      url: 'https://videx-national.diplo.de/',
      publisher: 'Federal Foreign Office',
      publisherType: 'portal',
    },
    {
      title: 'DAAD (Deutscher Akademischer Austauschdienst) Study Portal',
      url: 'https://www.daad.de/en/',
      publisher: 'DAAD',
      publisherType: 'scholarship',
    },
    {
      title: 'Make it in Germany - The Federal Government Portal for Skilled Workers',
      url: 'https://www.make-it-in-germany.com/en/',
      publisher: 'Federal Ministry for Economic Affairs and Climate Action (BMWK)',
      publisherType: 'government',
    },
    {
      title: 'uni-assist e.V. - Application Services for International Students',
      url: 'https://www.uni-assist.de/en/',
      publisher: 'uni-assist e.V.',
      publisherType: 'portal',
    },
    {
      title: 'KMK Anabin Database - Recognition of Foreign Educational Certificates',
      url: 'https://anabin.kmk.org/',
      publisher: 'Standing Conference of the Ministers of Education and Cultural Affairs',
      publisherType: 'government',
    },
    {
      title: 'Higher Education Commission (HEC) Pakistan Degree Attestation',
      url: 'https://hec.gov.pk',
      publisher: 'HEC Pakistan',
      publisherType: 'government',
    },
    {
      title: 'Inter Board Coordination Commission (IBCC) Pakistan Attestation',
      url: 'https://ibcc.edu.pk',
      publisher: 'IBCC Pakistan',
      publisherType: 'government',
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
    exchangeRateToDestCurrency: 303.5, // 1 EUR ≈ 303.50 PKR
    exchangeRateDate: '2026-10-04',
    vacProviderName: 'Direct Embassy Islamabad / Consulate General Karachi',
    embassyCentres: [
      {
        city: 'Islamabad',
        jurisdiction: 'Islamabad Capital Territory, Punjab, Khyber Pakhtunkhwa, Azad Jammu & Kashmir, Gilgit-Baltistan',
        centreType: 'Embassy',
        address: 'Ramna 5, Diplomatic Enclave, Islamabad, Pakistan',
        bookingPortalUrl: 'https://pakistan.diplo.de/',
        appointmentWaitEstimate: 'Category A (High CGPA ≥ 3.7 / DAAD scholars): 4 to 8 weeks. Category B (Standard Master/Bachelor): 6 to 10+ months waitlist.',
        appointmentFeePKR: 0,
        sources: [{ title: 'German Missions in Pakistan Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Embassy Islamabad', publisherType: 'embassy' }],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Karachi',
        jurisdiction: 'Sindh and Balochistan',
        centreType: 'Consulate General',
        address: '92-A/7, Block 5, Clifton, Karachi, Pakistan',
        bookingPortalUrl: 'https://pakistan.diplo.de/',
        appointmentWaitEstimate: '3 to 6 months average waitlist for student visa appointments.',
        appointmentFeePKR: 0,
        sources: [{ title: 'German Missions in Pakistan Portal', url: 'https://pakistan.diplo.de/', publisher: 'German Consulate Karachi', publisherType: 'embassy' }],
        lastVerified: '2026-10-04',
      },
    ],
    attestationRules: [
      {
        authority: 'IBCC',
        title: 'Inter Board Coordination Commission (IBCC) Certificate Attestation',
        applicableQualifications: ['Matriculation (SSC)', 'Intermediate (HSSC / FSc Pre-Eng, Pre-Med, ICS, I.Com)'],
        procedureSummary: 'Verify original certificates and mark sheets with the relevant regional BISE board first. Submit via courier or in-person at IBCC offices (Islamabad, Lahore, Karachi, Peshawar, Quetta, Bahawalpur) for official QR-coded verification.',
        officialPortal: 'https://ibcc.edu.pk',
        estimatedFeePKR: 3200,
        processingTimeDays: '5-10 business days',
        sources: [{ title: 'IBCC Attestation Guidelines', url: 'https://ibcc.edu.pk', publisher: 'IBCC', publisherType: 'government' }],
        lastVerified: '2026-10-04',
      },
      {
        authority: 'HEC',
        title: 'Higher Education Commission (HEC) Degree & Transcript Attestation',
        applicableQualifications: ['4-Year Bachelor (BS/BSc/BE)', '2-Year Master (MA/MSc)', 'MS/MPhil'],
        procedureSummary: 'Create account on eservices.hec.gov.pk. Enter all degree information from Matric to highest degree. Book in-person appointment or submit through designated courier (Leopards/TCS). Physical QR-code ticket is affixed to reverse of degree.',
        officialPortal: 'https://eservices.hec.gov.pk',
        estimatedFeePKR: 5000,
        processingTimeDays: '7-14 business days via courier',
        sources: [{ title: 'HEC Degree Verification System', url: 'https://hec.gov.pk', publisher: 'HEC', publisherType: 'government' }],
        lastVerified: '2026-10-04',
      },
      {
        authority: 'MOFA',
        title: 'Ministry of Foreign Affairs (MOFA) Apostille / Authentication',
        applicableQualifications: ['All HEC and IBCC attested academic credentials, police character certificates'],
        procedureSummary: 'Submit HEC/IBCC attested documents via courier (TCS/Gerrys) or in-person walk-in at MOFA camp offices (Islamabad, Lahore, Karachi, Peshawar, Quetta) for final diplomatic authentication.',
        officialPortal: 'https://mofa.gov.pk',
        estimatedFeePKR: 2000,
        processingTimeDays: '3-5 business days',
        sources: [{ title: 'MOFA Consular Services', url: 'https://mofa.gov.pk', publisher: 'MOFA Pakistan', publisherType: 'government' }],
        lastVerified: '2026-10-04',
      },
    ],
    studentCommunityHubs: [
      {
        name: 'Pakistan Student Association Germany (PSAG)',
        platform: 'Student Association',
        url: 'https://www.psag.de/',
        verified: true,
      },
      {
        name: 'Study in Germany - Pakistani Students Forum',
        platform: 'Facebook',
        url: 'https://www.facebook.com/groups/study.in.germany.for.pakistanis/',
        verified: true,
      },
    ],
  },
};
