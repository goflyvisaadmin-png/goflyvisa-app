import { CountryGuideData } from './types';

export const malaysiaGuide: CountryGuideData = {
  slug: 'malaysia',
  countryName: 'Malaysia',
  countryCode: 'MY',
  flagEmoji: '🇲🇾',
  heroTagline:
    'Top-Ranked Asian Higher Education, Western Branch Campuses, 100% English Instruction, and Low Cost of Living',
  oneLineSummary:
    'High-quality education with UK/Australian branch campuses, affordable living, zero language barriers, and clear pathways to graduate employment.',
  lastUpdatedDate: '2026-10-04',
  officialPortalUrl: 'https://visa.educationmalaysia.gov.my/',

  tags: {
    noTuitionFees: false,
    postStudyWorkYears: 1,
    englishTaughtWideAvailability: true,
    schengenOrEu: false,
    highPrPathway: false,
    partTimeJobAvailability: 'Medium',
  },

  // --------------------------------------------------------------------------
  // 1. Quick Facts Bar
  // --------------------------------------------------------------------------
  quickFacts: {
    capital: 'Kuala Lumpur',
    currency: {
      code: 'MYR',
      symbol: 'RM',
      name: 'Malaysian Ringgit',
    },
    officialLanguages: ['Bahasa Melayu (Malay)', 'English'],
    mainIntakes: [
      'Semester 1 (September / October - Major Intake for Public & Private Universities)',
      'Semester 2 (February / March - Secondary Intake)',
      'Tri-Semester Rolling Intakes (January, May, July - Private & Foreign Branch Campuses)',
    ],
    avgTuitionPerYear: {
      minDomesticCurrency: 10000,
      maxDomesticCurrency: 35000,
      textSummary:
        'Public research universities: RM 10,000–RM 22,000/yr (~PKR 650k–1.4M); Private universities: RM 20,000–RM 40,000/yr (~PKR 1.3M–2.6M); Foreign branch campuses (Monash, Nottingham): RM 38,000–RM 65,000/yr (~PKR 2.5M–4.2M).',
      sources: [
        {
          title: 'Education Malaysia Global Services (EMGS) - Study Costs Overview',
          url: 'https://educationmalaysia.gov.my/',
          publisher: 'Education Malaysia Global Services',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    monthlyLivingCost: {
      amountDomesticCurrency: 2000,
      approxPKR: 130000,
      textSummary:
        'RM 1,500 – RM 2,500 / month (~PKR 98,000 – 162,500), covering campus hostel / shared condominium room (RM 500–1,000), 100% halal meals (RM 600–900), RapidKL transit, and mobile data (RM 150–250).',
      sources: [
        {
          title: 'EMGS - Cost of Living in Malaysia',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    postStudyWorkDuration:
      '12 Months (Graduate Social Visit Pass for Bachelor/Master/PhD graduates; or 2–5 years via sponsored Employment Pass Category I/II/III).',
    partTimeWorkHoursTerm:
      '0 hours during regular term; up to 20 hours/week during semester breaks exceeding 7 days in 4 designated sectors only.',
    visaProcessingTimeAverage:
      '4 to 8 Weeks (EMGS eVAL approval: 14–21 business days; Single Entry Visa SEV: 5–10 working days; In-country medical endorsement: 7–14 days).',
  },

  // --------------------------------------------------------------------------
  // 2. Visa Types
  // --------------------------------------------------------------------------
  visaTypes: [
    {
      id: 'student-pass',
      officialName: 'Student Pass (Pas Pelajar & eVAL)',
      category: 'student',
      purpose:
        'Long-term immigration authorization permitting full-time study at an accredited Malaysian public university, private higher educational institution, or international branch campus.',
      eligibility: [
        'Unconditional Letter of Acceptance / Offer Letter from an EMGS-approved Malaysian educational institution.',
        'Approved Electronic Visa Approval Letter (eVAL) issued by the Immigration Department of Malaysia (Jabatan Imigresen Malaysia - JIM).',
        'Valid passport with minimum 18 months validity and at least 3 blank pages.',
        'Pre-arrival medical declaration and passing mandatory in-country medical screening within 7 days of arrival.',
        'Sufficient financial capability demonstrated via bank statement covering 1 year tuition fees and living expenses.',
      ],
      feeDomesticCurrency: 60,
      feePKR: 3900,
      validity: '1 Year (Renewable annually based on maintaining minimum 80% attendance and CGPA 2.00+).',
      processingTime: '14 to 21 business days for EMGS eVAL issuance.',
      workPermitted: true,
      workDetails:
        'Permitted up to 20 hours/week strictly during semester breaks or scheduled holidays exceeding 7 days in 4 designated sectors (Restaurants, Petrol kiosks, Mini-markets, Hotels). Strictly forbidden during regular term time.',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Student Pass Regulations',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
        {
          title: 'EMGS - Student Pass Application Guidelines',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'Education Malaysia Global Services',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
      note: 'The statutory annual pass fee is RM 60/yr. The comprehensive initial EMGS package fee (covering eVAL, medical screening, insurance, and i-Kad) totals RM 1,800–RM 2,800.',
    },
    {
      id: 'single-entry-visa',
      officialName: 'Single Entry Visa (SEV with eVAL)',
      category: 'student',
      purpose:
        'Mandatory entry visa required for Pakistani passport holders to board flights and legally enter Malaysia after securing an approved eVAL.',
      eligibility: [
        'Approved Electronic Visa Approval Letter (eVAL) from EMGS / Malaysian Immigration.',
        'Confirmed round-trip or onward flight reservation.',
        'University offer letter and accommodation booking confirmation.',
        'Pakistani passport valid for at least 18 months.',
      ],
      feeDomesticCurrency: 125,
      feePKR: 8125,
      validity: 'Single Entry valid for 3 months from issuance for travel to Malaysia.',
      processingTime: '5 to 10 working days.',
      workPermitted: false,
      sources: [
        {
          title: 'Official Malaysia eVISA Portal - Student SEV Guidelines',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Immigration Department of Malaysia',
          publisherType: 'government',
        },
        {
          title: 'High Commission of Malaysia in Islamabad - Consular Services',
          url: 'https://www.kln.gov.my/web/pak_islamabad/home',
          publisher: 'Ministry of Foreign Affairs Malaysia',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'dependent-pass',
      officialName: 'Dependent Pass (Pas Tanggungan)',
      category: 'dependent',
      purpose:
        'Allows legally married spouses and unmarried dependent children under 18 years of age to accompany international students pursuing Master’s or PhD programs.',
      eligibility: [
        'Principal applicant must be enrolled full-time in a Master’s or PhD program (Bachelor degree students are strictly ineligible to sponsor dependents).',
        'Valid Student Pass held by the principal applicant.',
        'Attested Marriage Registration Certificate (NADRA MRC attested by MOFA Pakistan) and Child Birth Registration Certificates (NADRA FRC/CRC attested by MOFA).',
        'Proof of financial capability showing additional monthly maintenance of at least RM 3,000–5,000.',
      ],
      feeDomesticCurrency: 140,
      feePKR: 9100,
      validity: 'Co-terminus with the principal student’s Student Pass (up to 12 months, renewable).',
      processingTime: '14 to 28 business days through university visa unit and state immigration.',
      workPermitted: false,
      workDetails:
        'Strictly no employment rights. Spouses wishing to work must secure an independent corporate job offer and convert to an Employment Pass.',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Dependent Pass Guidelines',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'graduate-social-visit-pass',
      officialName: 'Graduate Social Visit Pass (Long-Term Social Visit Pass)',
      category: 'job_seeker',
      purpose:
        'Post-study 12-month extension pass for international graduates of recognized Malaysian higher education institutions to travel, seek career opportunities, or pursue further education.',
      eligibility: [
        'Graduated with a Bachelor’s, Master’s, or PhD degree from an accredited Malaysian higher education institution.',
        'Application lodged prior to expiration of the active Student Pass.',
        'Valid Malaysian sponsor (institutional endorsement or local Malaysian personal bond guarantor).',
        'Valid health insurance policy covering the 12-month stay.',
      ],
      feeDomesticCurrency: 600,
      feePKR: 39000,
      validity: 'Up to 12 Months (Non-renewable; intended to bridge transition to Employment Pass).',
      processingTime: '14 to 21 business days via EMGS portal.',
      workPermitted: true,
      workDetails:
        'Permits part-time work in designated sectors. Full-time professional employment requires employer sponsorship and conversion to an Employment Pass (EP).',
      sources: [
        {
          title: 'EMGS - Graduate Social Visit Pass Announcement & Regulations',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS / Immigration Department of Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'employment-pass',
      officialName: 'Employment Pass (EP Categories I, II, III)',
      category: 'job_seeker',
      purpose:
        'Corporate work authorization sponsored by a Malaysian registered company for international graduates hired into managerial, executive, or technical positions.',
      eligibility: [
        'Full-time job offer from an Expatriate Services Division (ESD) registered corporate employer.',
        'Recognized Bachelor’s or Master’s degree in a relevant technical or commercial discipline.',
        'Salary thresholds: Category I (RM 10,000+/mo, up to 5 yrs); Category II (RM 5,000–9,999/mo, up to 2 yrs); Category III (RM 3,000–4,999/mo, 12 months, subject to ministry quota).',
      ],
      feeDomesticCurrency: 300,
      feePKR: 19500,
      validity: '1 to 5 Years depending on category and employment contract.',
      processingTime: '10 to 20 working days through ESD Malaysia.',
      workPermitted: true,
      workDetails: 'Full-time authorized employment exclusively with the sponsoring corporate employer.',
      sources: [
        {
          title: 'Expatriate Services Division (ESD) - Employment Pass Categories',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Immigration Department of Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 3. How to Apply (Step by Step)
  // --------------------------------------------------------------------------
  applicationGuide: {
    portalOverview:
      'Applying for a Malaysian student visa is a structured two-stage procedure: Stage 1 involves the university lodging an Electronic Visa Approval Letter (eVAL) application with Education Malaysia Global Services (EMGS). Stage 2 involves the student obtaining a Single Entry Visa (SEV) online or at Gerry’s Malaysia, followed by compulsory airport reception at KLIA and in-country medical screening within 7 days.',
    steps: [
      {
        stepNumber: 1,
        title: 'Obtain University Offer Letter',
        description:
          'Submit applications directly to accredited Malaysian public research universities or private institutions. Once academic qualifications are evaluated, receive the formal Letter of Acceptance (Offer Letter).',
        portalName: 'University Admissions Portal',
        portalUrl: 'https://educationmalaysia.gov.my/',
        actionRequired:
          'Accept the offer, pay the initial tuition deposit and the EMGS visa processing package fee (typically RM 1,800–RM 2,800) directly to the university account.',
        pakistanSpecificNotes:
          'Pakistani students must ensure their educational certificates are fully attested by IBCC (Matric/FSc) and HEC (Bachelor/Master) prior to submission.',
        sources: [
          {
            title: 'Education Malaysia Portal',
            url: 'https://educationmalaysia.gov.my/',
            publisher: 'Ministry of Higher Education Malaysia',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'EMGS eVAL Application Submission',
        description:
          'The university’s International Student Office initiates the student visa application on the EMGS STAR System. Required documents including academic records, white-background passport photograph (35x45mm), complete passport copy, and pre-arrival health declaration are uploaded.',
        portalName: 'EMGS STARS Portal',
        portalUrl: 'https://visa.educationmalaysia.gov.my/',
        actionRequired:
          'Provide the university with clean scanned colour copies of every page of your passport (including blank pages) and signed health declaration forms.',
        pakistanSpecificNotes:
          'Your passport must have at least 18 months of remaining validity from the date of submission. Passports with under 18 months validity will be flagged and rejected by Malaysian Immigration.',
        sources: [
          {
            title: 'EMGS Application Portal',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Track EMGS Processing & Download eVAL',
        description:
          'Track application progress on the EMGS website or mobile app via the percentage tracker (from 0% up to 100%). Once clearance is granted by both EMGS and the Immigration Department of Malaysia (JIM), the Electronic Visa Approval Letter (eVAL) is issued as a downloadable PDF.',
        portalName: 'EMGS Application Tracking',
        portalUrl: 'https://visa.educationmalaysia.gov.my/',
        actionRequired:
          'Monitor application progress weekly. When it hits 70%–80% (green), Immigration Department approval is finalised and the eVAL PDF becomes available for download.',
        pakistanSpecificNotes:
          'Download and print 3 to 4 high-resolution colour copies of the eVAL. Verify that your full name, passport number, course of study, and institution name match your offer letter exactly.',
        sources: [
          {
            title: 'EMGS Application Tracking System',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 4,
        title: 'Apply for Single Entry Visa (SEV)',
        description:
          'Pakistani passport holders cannot travel on an eVAL alone; you must obtain a Single Entry Visa (SEV). Apply through the official Malaysia eVISA portal under the "Student with eVAL" category, or submit your physical passport through Gerry’s Visa Drop Box.',
        portalName: 'Official Malaysia eVISA Portal',
        portalUrl: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        actionRequired:
          'Upload your approved eVAL PDF, university offer letter, flight booking, passport photo, and pay the visa fee (~RM 125 / PKR ~8,125) using a debit/credit card.',
        pakistanSpecificNotes:
          'Gerry’s Visa operates Malaysian visa submission centres in Islamabad, Lahore, Karachi, and Peshawar for physical endorsement if preferred, though the online eVISA portal is 100% digital and recommended.',
        sources: [
          {
            title: 'Malaysia eVISA Portal',
            url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
            publisher: 'Immigration Department of Malaysia',
            publisherType: 'government',
          },
        ],
      },
      {
        stepNumber: 5,
        title: 'Airport Notice & Flight Booking',
        description:
          'Book flights arriving at Kuala Lumpur International Airport (KLIA Terminal 1 or Terminal 2). Notify your university International Office at least 7 to 10 business days before departure with your flight details.',
        portalName: 'University International Student Services',
        portalUrl: 'https://educationmalaysia.gov.my/',
        actionRequired:
          'Submit the Arrival Notice Form to your university. Malaysian Immigration mandates that an official university representative be present to escort international students through immigration clearance.',
        pakistanSpecificNotes:
          'Direct flights from Lahore, Islamabad, and Karachi to Kuala Lumpur are operated by Pakistan International Airlines (PIA) and Batik Air Malaysia, with connecting flights via Qatar Airways, Emirates, and Saudia.',
        sources: [
          {
            title: 'Education Malaysia - Arrival Guidelines',
            url: 'https://educationmalaysia.gov.my/',
            publisher: 'Education Malaysia',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 6,
        title: 'KLIA Arrival & Immigration Clearance',
        description:
          'Upon landing at KLIA, proceed to the EMGS International Student Arrival Lounge / Immigration Counter. Present your passport, eVAL printout, SEV eVisa, and university admission letter. Meet your university escort officer.',
        portalName: 'EMGS Airport Assistance',
        portalUrl: 'https://visa.educationmalaysia.gov.my/',
        actionRequired:
          'Do NOT exit immigration without meeting your university representative or clearing the official international student counter; independent clearance without institutional notification can cause entry delays.',
        pakistanSpecificNotes:
          'Ensure you carry cash in Malaysian Ringgit (at least RM 1,000–1,500) or USD for immediate airport transport, food, and initial SIM card purchase.',
        sources: [
          {
            title: 'EMGS Airport Reception Protocol',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 7,
        title: 'Mandatory In-Country Medical Screening (Day 1–7)',
        description:
          'Within 7 days of landing in Malaysia, visit an EMGS-registered panel clinic for the compulsory post-arrival health examination (blood test, urine drug screening, and chest X-ray for active pulmonary tuberculosis).',
        portalName: 'EMGS Panel Clinic Locator',
        portalUrl: 'https://visa.educationmalaysia.gov.my/',
        actionRequired:
          'Bring your passport, copy of eVAL, and university ID letter to the clinic. The examination fee (~RM 250) is pre-funded through your initial EMGS package fee.',
        pakistanSpecificNotes:
          'Passing the medical screening is legally mandatory to receive your Student Pass sticker. Failing due to active TB, hepatitis, HIV, or positive illicit drug screening results in immediate pass revocation and repatriation.',
        sources: [
          {
            title: 'EMGS Medical Screening Requirements',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        stepNumber: 8,
        title: 'Passport Endorsement & i-Kad Collection',
        description:
          'Once medical clearance is certified on the EMGS portal, hand over your original passport to your university visa unit. The university submits it to the Immigration Department for endorsement of the physical Student Pass sticker and collection of your biometric i-Kad.',
        portalName: 'Immigration Department of Malaysia',
        portalUrl: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        actionRequired:
          'Receive your passport with the official multi-entry Student Pass sticker and collect your laminated biometric i-Kad (foreign student identity card). Verify your digital i-Kad on the EMGS mobile app.',
        pakistanSpecificNotes:
          'The biometric i-Kad serves as legal photo identification within Peninsular Malaysia, allowing you to travel domestically without carrying your passport everywhere.',
        sources: [
          {
            title: 'Immigration Department of Malaysia - Pass Endorsement',
            url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
            publisher: 'Jabatan Imigresen Malaysia',
            publisherType: 'government',
          },
        ],
      },
    ],
    pakistanAppointmentGuide: {
      vacOrEmbassy:
        'High Commission of Malaysia in Islamabad, Consulate General in Karachi, or Gerry’s Visa Drop Box centres nationwide (Islamabad, Lahore, Karachi, Peshawar).',
      bookingProcedure:
        'Applications for the Single Entry Visa (SEV) can be completed 100% online via the official Malaysian Immigration eVISA portal (malaysiavisa.imi.gov.my) under the "Student with eVAL" category, or submitted physically at Gerry’s Visa drop-box centres without prior appointment.',
      biometricsDetails:
        'Biometrics for the Student Pass are taken in Malaysia upon arrival during the student pass endorsement process at the state immigration department or EMGS One-Stop Centre.',
      interviewPreparationTips: [
        'Understand your course structure, core modules, and reasons for selecting Malaysia over Western destinations.',
        'Be ready to explain your sponsor’s source of funds and business/employment profile.',
        'Emphasize your intent to return to Pakistan or seek regional multinational corporate career opportunities upon completing studies.',
        'Carry high-resolution colour copies of your eVAL, admission offer, and attested academic transcripts.',
      ],
    },
    documentChecklist: [
      {
        id: 'doc-passport',
        title: 'Original Passport (18+ Months Validity)',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 4,
        detail:
          'Passport must have at least 18 months of remaining validity from intended entry date, with at least 3 blank visa pages. Provide scanned copies of all pages (including covers and blank pages).',
        sources: [
          {
            title: 'EMGS - Passport Requirements',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-eval',
        title: 'Electronic Visa Approval Letter (eVAL)',
        category: 'visa_forms',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 4,
        detail:
          'Official electronic clearance certificate issued by the Immigration Department of Malaysia and EMGS, printed in high-resolution colour.',
        sources: [
          {
            title: 'EMGS eVAL Guidelines',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-sev',
        title: 'Single Entry Visa (SEV)',
        category: 'visa_forms',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          'Approved eVisa printout or physical SEV visa sticker endorsed in passport through Gerry’s / High Commission.',
        sources: [
          {
            title: 'Malaysia eVISA Portal',
            url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
            publisher: 'Immigration Department of Malaysia',
            publisherType: 'government',
          },
        ],
      },
      {
        id: 'doc-offer-letter',
        title: 'University Offer Letter & Acceptance Letter',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 3,
        detail:
          'Formal unconditional letter of acceptance issued by the accredited Malaysian higher education institution stating course name, duration, and tuition schedule.',
        sources: [
          {
            title: 'Education Malaysia Higher Education Portal',
            url: 'https://educationmalaysia.gov.my/',
            publisher: 'Ministry of Higher Education Malaysia',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-medical-pre',
        title: 'Pre-Arrival Health Examination Report',
        category: 'insurance',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          'Completed EMGS medical examination report and signed health declaration form verifying absence of active tuberculosis, hepatitis, HIV, and chronic disorders.',
        sources: [
          {
            title: 'EMGS Health Declaration Guidelines',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-hssc',
        title: 'Attested Secondary & Higher Secondary Certificates (Matric / FSc)',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'IBCC',
        copiesNeeded: 3,
        detail:
          'Matric (SSC) and Inter (HSSC) certificates and mark sheets verified by the relevant BISE, attested by IBCC (Inter Board Coordination Commission) and MOFA Pakistan.',
        sources: [
          {
            title: 'IBCC Attestation Guidelines',
            url: 'https://ibcc.edu.pk',
            publisher: 'IBCC Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        id: 'doc-hec-degree',
        title: 'Attested Bachelor / Master Degrees & Transcripts',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'HEC',
        copiesNeeded: 3,
        detail:
          'Degree parchment and detailed official transcripts attested by the Higher Education Commission (HEC) of Pakistan through the e-portal and countersigned by MOFA.',
        sources: [
          {
            title: 'HEC Pakistan Degree Attestation System',
            url: 'https://hec.gov.pk',
            publisher: 'HEC Pakistan',
            publisherType: 'government',
          },
        ],
      },
      {
        id: 'doc-english',
        title: 'English Language Proficiency Proof / MOI Certificate',
        category: 'academic',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          'IELTS Academic, PTE Academic, or TOEFL iBT test result form OR official Medium of Instruction (MOI) Certificate from an HEC-recognized university.',
        sources: [
          {
            title: 'EMGS English Guidelines',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-bank-statement',
        title: 'Bank Statement & Sponsor Affidavit of Support',
        category: 'financial',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          '3 to 6-month continuous bank statement showing minimum closing balance of USD 3,000–5,000 (~PKR 900,000–1,500,000) with stamped affidavit of financial support on stamp paper and sponsor income proof.',
        sources: [
          {
            title: 'EMGS Financial Proof Requirements',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-photographs',
        title: 'Passport Size Photographs (White Background)',
        category: 'identification',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 6,
        detail:
          'Compliant with EMGS specifications: 35mm x 45mm, white background, neutral expression, no glasses, no white clothing, taken within last 3 months.',
        sources: [
          {
            title: 'EMGS Photo Guidelines',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-fee-receipt',
        title: 'EMGS Package & Tuition Deposit Payment Receipt',
        category: 'financial',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          'Official telegraphic transfer (TT) bank receipt or online merchant receipt confirming payment of university tuition deposit and EMGS processing package fee.',
        sources: [
          {
            title: 'EMGS Payment Verification',
            url: 'https://visa.educationmalaysia.gov.my/',
            publisher: 'EMGS',
            publisherType: 'portal',
          },
        ],
      },
      {
        id: 'doc-flight-arrival',
        title: 'Flight Ticket & Airport Reception Confirmation',
        category: 'visa_forms',
        requiredOriginals: true,
        attestationRequired: 'None',
        copiesNeeded: 2,
        detail:
          'Confirmed flight itinerary arriving at KLIA and university acknowledgment of scheduled airport reception representative.',
        sources: [
          {
            title: 'Education Malaysia Airport Protocol',
            url: 'https://educationmalaysia.gov.my/',
            publisher: 'Education Malaysia',
            publisherType: 'portal',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. Money & Financial Requirements
  // --------------------------------------------------------------------------
  financialRequirements: {
    proofOfFundsType: 'Bank Statement',
    officialMinimumAmount: {
      amount: 15000,
      currency: 'MYR',
      approxPKR: 975000,
      period: '1 Year tuition balance + living costs',
    },
    holdingPeriodDays: 90,
    approvedProvidersOrBanks: [
      'Habib Bank Limited (HBL)',
      'United Bank Limited (UBL)',
      'MCB Bank Limited',
      'Meezan Bank Limited',
      'Allied Bank Limited (ABL)',
      'Bank Alfalah Limited',
      'Standard Chartered Bank Pakistan',
      'Askari Bank Limited',
    ],
    healthInsuranceDetails: {
      type: 'EMGS Mandatory Annual Group Medical & Hospitalization Insurance',
      costPerMonthOrYear: 'RM 450 – RM 650 / year (~PKR 29,250 – 42,250)',
      providers: [
        'Etiqa Family Takaful Berhad',
        'Great Eastern Life Assurance Malaysia',
        'The Pacific Insurance Berhad',
      ],
    },
    visaFeeDetails: {
      embassyFee: 20,
      embassyFeeCurrency: 'MYR',
      vacServiceFeePKR: 8125,
      surcharges:
        'eVAL statutory fee RM 159; EMGS administration package RM 1,000–1,750; mandatory in-country medical screening RM 250; biometric i-Kad fee RM 50; annual Student Pass sticker RM 60/year.',
    },
    sources: [
      {
        title: 'EMGS - Visa Application Fees & Guidelines',
        url: 'https://visa.educationmalaysia.gov.my/',
        publisher: 'Education Malaysia Global Services',
        publisherType: 'portal',
      },
      {
        title: 'Immigration Department of Malaysia - Fee Schedule',
        url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        publisher: 'Jabatan Imigresen Malaysia',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'Malaysia does not freeze funds in a blocked account. A seasoned 3 to 6-month continuous bank statement from student or parents with closing balance of USD 3,000–5,000 is universally accepted.',
  },

  // --------------------------------------------------------------------------
  // 5. Admission Criteria & Pakistani Equivalence
  // --------------------------------------------------------------------------
  admissionCriteria: {
    bachelorRequirements: {
      pakistaniCredential: 'Higher Secondary School Certificate (HSSC / FSc / ICS) or Cambridge GCE A-Levels',
      localEquivalence: 'Recognized directly for Bachelor degree entry under MQA standards',
      minimumGradeCGPA: 'Minimum 60% to 65% aggregate marks (First Division) in FSc; A-Levels: minimum 2–3 passes (grades C to B)',
      gapAcceptancePolicy: 'Study gaps up to 2 to 3 years are acceptable with written explanation of activities',
      attestationSteps: [
        'Verification of Matric & FSc certificates from issuing BISE exam boards',
        'Attestation of original certificates and mark sheets by IBCC Pakistan',
        'Authentication by Ministry of Foreign Affairs (MOFA) Pakistan',
      ],
    },
    masterRequirements: {
      pakistaniCredential: '4-Year Bachelor Degree (BS / BSc Hons / B.E. / BBA, 16 years education) from HEC-recognized university',
      localEquivalence: 'Direct entry into Master by Coursework or Master by Research',
      minimumGradeCGPA: 'Minimum CGPA 2.50 to 3.00 out of 4.00 (MQA baseline 2.50; top research universities UM/UKM require 3.00+)',
      gapAcceptancePolicy: 'Gaps of 5 to 10+ years are accepted with professional employment service letters and CV',
      attestationSteps: [
        'Create profile on HEC online attestation portal (eservices.hec.gov.pk)',
        'Submit official degree and transcripts for HEC barcode verification',
        'Countersignature and attestation by MOFA Pakistan',
      ],
    },
    phdRequirements: {
      pakistaniCredential: '18-Year Education: MS / MPhil degree with defended research thesis from HEC-recognized university',
      localEquivalence: 'Direct entry into PhD research programs',
      minimumGradeCGPA: 'Minimum CGPA 3.00 out of 4.00 in Master coursework and an approved research proposal',
      gapAcceptancePolicy: 'No strict gap limit; industrial experience and publications add strong merit',
      attestationSteps: [
        'HEC verification of both Bachelor and Master degrees and transcripts',
        'MOFA Pakistan authentication',
        'Submission of 1,500–3,000 word research proposal to target university faculty supervisor',
      ],
    },
    ectsOrCreditSystemExplanation:
      'Malaysian universities follow the Malaysian Qualifications Framework (MQF) credit system where 1 credit represents 40 student learning hours. A standard Bachelor degree requires 120–140 credits over 3 to 4 years; a Master degree requires 40–44 credits over 1 to 2 years.',
    evaluationPortals: [
      {
        name: 'Malaysian Qualifications Agency (MQA)',
        role: 'National accreditation and qualification recognition body in Malaysia',
        fee: 'Free online portal search / verification',
        processingWeeks: 'Instant via MRA / MQA online register',
        url: 'https://www.mqa.gov.my/',
      },
      {
        name: 'Higher Education Commission (HEC) Pakistan',
        role: 'National higher education accreditation and degree equivalence authority in Pakistan',
        fee: 'Rs. 1,000 per original document',
        processingWeeks: '1 to 2 weeks via online / courier service',
        url: 'https://hec.gov.pk',
      },
    ],
    sources: [
      {
        title: 'Malaysian Qualifications Agency - Qualification Standards',
        url: 'https://www.mqa.gov.my/',
        publisher: 'Malaysian Qualifications Agency',
        publisherType: 'government',
      },
      {
        title: 'HEC Pakistan - Degree Attestation System',
        url: 'https://hec.gov.pk',
        publisher: 'HEC Pakistan',
        publisherType: 'government',
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
        overall: 6.0,
        subscore: 5.5,
        typicalRequirement: 'Undergraduate: 5.0–6.0 overall; Postgraduate: 6.0–6.5 overall (minimum 5.5 to 6.0 in each band).',
      },
      toeflMinScore: 60,
      pteMinScore: 50,
      duolingoAccepted: true,
      moiWaiverAllowed: true,
      moiConditions:
        'Pakistani postgraduate applicants can receive an English test waiver if their Bachelor degree was taught entirely in English at an HEC-recognized university, supported by an official Medium of Instruction (MOI) Certificate from the university registrar.',
    },
    localLanguageRequirements: {
      language: 'Bahasa Melayu (Malay)',
      studyRequirement:
        'Zero requirement for English-taught international degree programs. International undergraduate students at public universities complete one basic 2-credit cultural course ("Malay Language for International Students - Bahasa Melayu Komunikasi").',
      dailyLifeImportance: 'Moderate',
      partTimeJobImportance: 'Moderate',
      postStudyPrImportance:
        'Essential for permanent residency (Entry Permit PR), which requires a formal Malay language competency interview with the Immigration Department.',
      recognizedTests: ['Ujian Bahasa Melayu Komunikasi (UBMK)', 'Kursus Bahasa Melayu Universiti'],
    },
    sources: [
      {
        title: 'EMGS - English Language Competency Standards',
        url: 'https://visa.educationmalaysia.gov.my/',
        publisher: 'Education Malaysia Global Services',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 7. Top Universities (12 institutions)
  // --------------------------------------------------------------------------
  topUniversities: [
    {
      id: 'um',
      name: 'Universiti Malaya (UM)',
      city: 'Kuala Lumpur',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '60',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: 'RM 12,000 – RM 28,000 (~PKR 780,000 – 1,820,000)',
      internationalStudentPercentage: '18%',
      strongPrograms: ['Engineering & Technology', 'Computer Science & AI', 'Medicine & Biomedical Sciences', 'Business & Management', 'Law'],
      officialWebsite: 'https://www.um.edu.my/',
      sources: [
        {
          title: 'Universiti Malaya Official Portal',
          url: 'https://www.um.edu.my/',
          publisher: 'Universiti Malaya',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'ukm',
      name: 'Universiti Kebangsaan Malaysia (UKM)',
      city: 'Bangi, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '138',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: 'RM 10,000 – RM 24,000 (~PKR 650,000 – 1,560,000)',
      internationalStudentPercentage: '14%',
      strongPrograms: ['Information Technology', 'Civil & Structural Engineering', 'Chemical Engineering', 'Health Sciences', 'Social Sciences'],
      officialWebsite: 'https://www.ukm.my/portal/',
      sources: [
        {
          title: 'Universiti Kebangsaan Malaysia Portal',
          url: 'https://www.ukm.my/portal/',
          publisher: 'Universiti Kebangsaan Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'usm',
      name: 'Universiti Sains Malaysia (USM)',
      city: 'George Town, Penang',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '146',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: 'RM 10,000 – RM 22,000 (~PKR 650,000 – 1,430,000)',
      internationalStudentPercentage: '16%',
      strongPrograms: ['Pharmacy & Pharmacology', 'Chemical Sciences', 'Materials Engineering', 'Computer Sciences', 'Marine Biology'],
      officialWebsite: 'https://www.usm.my/',
      sources: [
        {
          title: 'Universiti Sains Malaysia Portal',
          url: 'https://www.usm.my/',
          publisher: 'Universiti Sains Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'upm',
      name: 'Universiti Putra Malaysia (UPM)',
      city: 'Serdang, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '148',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: 'RM 9,000 – RM 22,000 (~PKR 585,000 – 1,430,000)',
      internationalStudentPercentage: '15%',
      strongPrograms: ['Agriculture & Forestry', 'Veterinary Medicine', 'Biotechnology', 'Environmental Sciences', 'Mechanical Engineering'],
      officialWebsite: 'https://upm.edu.my/',
      sources: [
        {
          title: 'Universiti Putra Malaysia Portal',
          url: 'https://upm.edu.my/',
          publisher: 'Universiti Putra Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'utm',
      name: 'Universiti Teknologi Malaysia (UTM)',
      city: 'Skudai, Johor & Kuala Lumpur',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '181',
      },
      tuitionType: 'Public Nominal',
      estimatedAnnualTuition: 'RM 10,000 – RM 24,000 (~PKR 650,000 – 1,560,000)',
      internationalStudentPercentage: '19%',
      strongPrograms: ['Petroleum & Chemical Engineering', 'Electrical & Electronic Engineering', 'Architecture', 'Data Science', 'Software Engineering'],
      officialWebsite: 'https://www.utm.my/',
      sources: [
        {
          title: 'Universiti Teknologi Malaysia Portal',
          url: 'https://www.utm.my/',
          publisher: 'Universiti Teknologi Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'taylors',
      name: 'Taylor’s University',
      city: 'Subang Jaya, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '251',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 28,000 – RM 48,000 (~PKR 1,820,000 – 3,120,000)',
      internationalStudentPercentage: '32%',
      strongPrograms: ['Hospitality & Leisure Management', 'Business & Management', 'Architecture & Design', 'Computer Science', 'Law'],
      officialWebsite: 'https://taylors.edu.my/',
      sources: [
        {
          title: 'Taylor’s University Portal',
          url: 'https://taylors.edu.my/',
          publisher: 'Taylor’s University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'ucsi',
      name: 'UCSI University',
      city: 'Cheras, Kuala Lumpur',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '265',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 22,000 – RM 42,000 (~PKR 1,430,000 – 2,730,000)',
      internationalStudentPercentage: '28%',
      strongPrograms: ['Performing Arts (Music)', 'Petroleum Engineering', 'Pharmacy & Health Sciences', 'Hospitality & Tourism', 'Business'],
      officialWebsite: 'https://www.ucsiuniversity.edu.my/',
      sources: [
        {
          title: 'UCSI University Portal',
          url: 'https://www.ucsiuniversity.edu.my/',
          publisher: 'UCSI University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'utp',
      name: 'Universiti Teknologi PETRONAS (UTP)',
      city: 'Seri Iskandar, Perak',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '269',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 24,000 – RM 40,000 (~PKR 1,560,000 – 2,600,000)',
      internationalStudentPercentage: '22%',
      strongPrograms: ['Petroleum Engineering', 'Chemical Engineering', 'Mechanical Engineering', 'Geosciences', 'Information Systems'],
      officialWebsite: 'https://www.utp.edu.my/',
      sources: [
        {
          title: 'Universiti Teknologi PETRONAS Portal',
          url: 'https://www.utp.edu.my/',
          publisher: 'Universiti Teknologi PETRONAS',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'monash-malaysia',
      name: 'Monash University Malaysia',
      city: 'Bandar Sunway, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '37',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 42,000 – RM 65,000 (~PKR 2,730,000 – 4,225,000)',
      internationalStudentPercentage: '35%',
      strongPrograms: ['Pharmacy & Pharmacology', 'Medicine & Health Sciences', 'Software Engineering', 'Business Analytics', 'Media & Communications'],
      officialWebsite: 'https://www.monash.edu.my/',
      sources: [
        {
          title: 'Monash University Malaysia Portal',
          url: 'https://www.monash.edu.my/',
          publisher: 'Monash University Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'nottingham-malaysia',
      name: 'University of Nottingham Malaysia',
      city: 'Semenyih, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '108',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 38,000 – RM 58,000 (~PKR 2,470,000 – 3,770,000)',
      internationalStudentPercentage: '30%',
      strongPrograms: ['Chemical & Environmental Engineering', 'Economics', 'Computer Science', 'Psychology', 'International Relations'],
      officialWebsite: 'https://www.nottingham.edu.my/',
      sources: [
        {
          title: 'University of Nottingham Malaysia Portal',
          url: 'https://www.nottingham.edu.my/',
          publisher: 'University of Nottingham Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'apu',
      name: 'Asia Pacific University of Technology & Innovation (APU)',
      city: 'Bukit Jalil, Kuala Lumpur',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '621-630',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 22,000 – RM 38,000 (~PKR 1,430,000 – 2,470,000)',
      internationalStudentPercentage: '45%',
      strongPrograms: ['Artificial Intelligence', 'Cybersecurity', 'Software Engineering', 'Game Development', 'Financial Technology (FinTech)'],
      officialWebsite: 'https://www.apu.edu.my/',
      sources: [
        {
          title: 'APU Malaysia Official Portal',
          url: 'https://www.apu.edu.my/',
          publisher: 'APU Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      id: 'sunway',
      name: 'Sunway University',
      city: 'Bandar Sunway, Selangor',
      ranking: {
        system: 'QS World',
        year: 2025,
        rank: '539',
      },
      tuitionType: 'Private',
      estimatedAnnualTuition: 'RM 26,000 – RM 45,000 (~PKR 1,690,000 – 2,925,000)',
      internationalStudentPercentage: '25%',
      strongPrograms: ['Actuarial Science', 'Accounting & Finance', 'Culinary Arts & Hospitality', 'Computer Science', 'Biological Sciences'],
      officialWebsite: 'https://sunwayuniversity.edu.my/',
      sources: [
        {
          title: 'Sunway University Official Portal',
          url: 'https://sunwayuniversity.edu.my/',
          publisher: 'Sunway University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 8. Scholarships
  // --------------------------------------------------------------------------
  scholarships: [
    {
      name: 'Malaysia International Scholarship (MIS)',
      awardingBody: 'Ministry of Higher Education (MOHE) Malaysia',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: 'RM 1,500 / month (~PKR 97,500)',
      eligibilityCriteria: [
        'Open to citizens of eligible developing partner nations including Pakistan.',
        'Age limit: Maximum 40 years for Master’s degree; Maximum 45 years for PhD.',
        'Academic requirement: Minimum CGPA 3.00 out of 4.00 in previous degree.',
        'English proficiency: Minimum IELTS 6.0 or TOEFL iBT 550, or university English medium confirmation.',
        'High-quality research proposal aligned with Malaysia’s priority strategic development areas.',
      ],
      pakistanDeadlines: 'Annually between March and April for the September academic intake',
      officialLink: 'https://www.mohe.gov.my/',
      sources: [
        {
          title: 'MOHE - Malaysia International Scholarship (MIS)',
          url: 'https://www.mohe.gov.my/',
          publisher: 'Ministry of Higher Education Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Malaysian Technical Cooperation Programme (MTCP)',
      awardingBody: 'Ministry of Foreign Affairs Malaysia (KLN)',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: 'RM 3,500 / month (~PKR 227,500) + Airfare',
      eligibilityCriteria: [
        'Government officials, researchers, and outstanding graduates from Pakistan.',
        'Age below 45 years at time of application.',
        'Minimum CGPA 3.00 (Second Class Upper) in Bachelor’s degree.',
        'Enrolled or accepted in full-time Master’s program at designated Malaysian public universities.',
      ],
      pakistanDeadlines: 'Annually between May and June',
      officialLink: 'https://www.kln.gov.my/web/pak_islamabad/home',
      sources: [
        {
          title: 'Ministry of Foreign Affairs Malaysia - MTCP Portal',
          url: 'https://www.kln.gov.my/web/pak_islamabad/home',
          publisher: 'Ministry of Foreign Affairs Malaysia',
          publisherType: 'embassy',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Universiti Malaya Graduate Research Assistantship (GRA)',
      awardingBody: 'Universiti Malaya (UM)',
      coverage: 'Full Tuition + Monthly Stipend',
      stipendAmount: 'RM 1,800 – RM 2,500 / month (~PKR 117,000–162,500)',
      eligibilityCriteria: [
        'Registered full-time Master by Research or PhD candidate at Universiti Malaya.',
        'Bachelor CGPA 3.00+ for Master’s; Master’s CGPA 3.30+ for PhD.',
        'Assigned to a Principal Investigator’s funded research project for 10–20 hours/week of laboratory assistance.',
      ],
      pakistanDeadlines: 'Rolling admissions concurrent with semester enrolment',
      officialLink: 'https://www.um.edu.my/',
      sources: [
        {
          title: 'Universiti Malaya - Postgraduate Financial Support',
          url: 'https://www.um.edu.my/',
          publisher: 'Universiti Malaya',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      name: 'Taylor’s World Class Merit Scholarships',
      awardingBody: 'Taylor’s University',
      coverage: 'Partial Tuition',
      stipendAmount: '20% to 100% Tuition Fee Reduction',
      eligibilityCriteria: [
        'Outstanding high school / HSSC results (FSc 80%+ or A-Levels with AAA).',
        'Demonstrated leadership track record, community service, and extracurricular achievements.',
        'Successful interview with the Taylor’s Scholarship Awarding Committee.',
      ],
      pakistanDeadlines: 'Deadlines aligned with January, March, and August intakes',
      officialLink: 'https://taylors.edu.my/',
      sources: [
        {
          title: 'Taylor’s University - Scholarships & Bursaries',
          url: 'https://taylors.edu.my/',
          publisher: 'Taylor’s University',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 9. Work Rights During Study
  // --------------------------------------------------------------------------
  workRights: {
    termTimeHoursPerWeek: '0 hours (Work during regular semester term is strictly prohibited under Regulation 13(1) of Immigration Regulations 1963)',
    vacationTimeHoursPerWeek: 'Up to 20 hours per week (Permitted strictly during semester breaks or scheduled holidays exceeding 7 days in 4 designated sectors)',
    statutoryWorkRules:
      'International students can work only during semester breaks exceeding 7 days and exclusively in 4 authorized sectors: Restaurants, Petrol Kiosks, Mini-markets, and Hotels. Students cannot work as cashiers, musicians, singers, or masseurs. Written approval from the university International Office and state Immigration Department is required.',
    statutoryMinimumWage:
      'RM 1,500 / month (Increasing to RM 1,700 / month effective Feb 2025; approx. RM 7.50–10.00 / hour)',
    averagePartTimeEarningsMonthly:
      'RM 600 – RM 1,200 / month (~PKR 39,000 – 78,000) during vacation work periods',
    taxExemptionLimits:
      'Non-resident tax rate applies if in Malaysia under 182 days; normal resident progressive rates apply once 182+ days tax residency threshold is achieved.',
    freelancingAllowed: true,
    sources: [
      {
        title: 'Immigration Department of Malaysia - Student Employment Regulations',
        url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        publisher: 'Jabatan Imigresen Malaysia',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 10. Why Visas Get Rejected (Refusal Reasons & Prevention)
  // --------------------------------------------------------------------------
  refusalReasons: [
    {
      reasonTitle: 'Discrepant or Unverified Academic Credentials',
      statutoryClause: 'EMGS Document Verification & Immigration Pass Regulations',
      explanation:
        'Submitting incomplete mark sheets, unverified certificates, or academic documents that have not undergone compulsory attestation via BISE/IBCC or HEC. Discrepancies between names on transcripts and passports trigger immediate EMGS rejection.',
      preventativeMeasures: [
        'Ensure all names and spellings match your passport identically across all documents.',
        'Obtain official IBCC attestations for Matric/FSc and HEC online verification for Bachelor/Master degrees before submitting scans to your university.',
        'Provide verified DMC detailed mark certificates showing all semester grades.',
      ],
      remedyProcess: 'Fresh Application',
      remedyTimeline: '14 to 30 business days through university visa unit',
      sources: [
        {
          title: 'EMGS - Document Verification Guidelines',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Failing Mandatory Pre-Arrival or Post-Arrival Medical Screening',
      statutoryClause: 'Ministry of Health Malaysia & Immigration Disease Surveillance Directives',
      explanation:
        'Testing positive for active pulmonary tuberculosis (TB), Hepatitis B (in clinical/laboratory fields), HIV/AIDS, or illicit narcotics (THC/cannabis, opiates, amphetamines) during the compulsory in-country screening within 7 days of landing.',
      preventativeMeasures: [
        'Undergo a full medical health checkup in Pakistan prior to departure.',
        'If you have had past treated TB, carry complete hospital cure certificates and clear chest X-rays.',
        'Strictly avoid consuming any regulated substances before or during travel.',
      ],
      remedyProcess: 'Administrative Appeal (Remonstration)',
      remedyTimeline: '7 days for secondary specialist pulmonology review',
      sources: [
        {
          title: 'EMGS - Health Screening Rules',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Unexplained Long Study Gaps',
      statutoryClause: 'Malaysian Immigration Genuine Student Assessment Guidelines',
      explanation:
        'Gaps exceeding 2 to 3 years for Bachelor applicants or 5+ years for Master applicants without documented employment history or professional justification lead EMGS to doubt genuine student intent.',
      preventativeMeasures: [
        'Provide official service letters, payslips, tax certificates, or course certificates accounting for every month of the intervening gap period.',
        'Include an updated professional CV highlighting career growth and alignment with the chosen academic field.',
      ],
      remedyProcess: 'Fresh Application',
      remedyTimeline: '14 business days with employer verification letters',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Genuine Student Assessment',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Insufficient or Irregular Bank Statement',
      statutoryClause: 'EMGS Financial Solvency Guidelines',
      explanation:
        'Presenting a bank statement showing sudden, unexplained large lump-sum deposits just days prior to statement issuance, or a closing balance insufficient to cover one year of tuition and living expenses.',
      preventativeMeasures: [
        'Maintain a stable bank balance of USD 3,000–5,000 (~PKR 900,000–1,500,000) over at least 3 to 6 consecutive months.',
        'If using a parental sponsor, provide their salary slips, tax returns, and an attested Affidavit of Financial Support.',
      ],
      remedyProcess: 'Fresh Application',
      remedyTimeline: '10 to 14 days with updated seasoned bank statement',
      sources: [
        {
          title: 'EMGS - Financial Guidance',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      reasonTitle: 'Low Academic Grades Below MQA Minimum Standards',
      statutoryClause: 'Malaysian Qualifications Framework (MQF) Entry Criteria',
      explanation:
        'Applying for programs where your previous qualification does not meet the Malaysian Qualifications Agency (MQA) minimum threshold (e.g. CGPA below 2.50 for Master programs or insufficient science prerequisites for engineering/computing).',
      preventativeMeasures: [
        'Check specific MQA program prerequisites before applying.',
        'If your CGPA is between 2.00 and 2.49, seek admission through universities offering pre-qualifying bridging courses or internal diagnostic assessments.',
      ],
      remedyProcess: 'Fresh Application',
      remedyTimeline: 'Switch program choice to accredited diploma or pre-master',
      sources: [
        {
          title: 'MQA - Minimum Entry Standards',
          url: 'https://www.mqa.gov.my/',
          publisher: 'MQA',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 11. After Graduation & Post-Study Pathways
  // --------------------------------------------------------------------------
  postStudyImmigration: {
    postStudyVisaName: 'Graduate Social Visit Pass (12-Month Facility) & Employment Pass (EP)',
    durationMonths: 12,
    eligibilityRequirements: [
      'Completion of a Bachelor’s, Master’s, or PhD degree from an accredited Malaysian higher education institution.',
      'Valid Malaysian sponsor (university or local guarantor) for the Graduate Social Visit Pass.',
      'For Employment Pass: Full-time corporate job offer with minimum salary of RM 3,000 (Category III), RM 5,000 (Category II), or RM 10,000 (Category I).',
    ],
    transitionToWorkPermit: {
      workPermitName: 'Employment Pass (EP Categories I, II, or III)',
      salaryThreshold: 'Category I: RM 10,000+/mo; Category II: RM 5,000–9,999/mo; Category III: RM 3,000–4,999/mo',
    },
    prPermanentResidencyRoute: {
      visaName: 'Entry Permit / Permanent Residence (PR) via Point-Based System',
      qualificationTimeMonths: '60 to 120 Months (5 to 10 years of continuous legal employment on Employment Pass)',
      languageRequirement: 'Fluent Bahasa Melayu demonstrated via oral and written interview with the Immigration Department',
    },
    citizenshipTimelineYears:
      '10+ Years of continuous permanent residence with Malay language fluency and renunciation of prior citizenship (Malaysia does not permit dual nationality).',
    sources: [
      {
        title: 'Expatriate Services Division (ESD) Malaysia - Work Passes',
        url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        publisher: 'Immigration Department of Malaysia',
        publisherType: 'government',
      },
      {
        title: 'EMGS - Graduate Social Visit Pass',
        url: 'https://visa.educationmalaysia.gov.my/',
        publisher: 'EMGS',
        publisherType: 'portal',
      },
    ],
    lastVerified: '2026-10-04',
  },

  // --------------------------------------------------------------------------
  // 12. Bringing Family
  // --------------------------------------------------------------------------
  dependentRules: {
    spousalVisaPermittedDuringStudy: true,
    conditions: [
      'Principal student must be enrolled in a full-time Master’s or PhD program (strictly prohibited for Bachelor students)',
      'Valid Student Pass held by principal applicant',
      'Attested NADRA Marriage Certificate (MRC) and Family Registration Certificate (FRC) endorsed by MOFA Pakistan',
      'Proof of funds showing minimum RM 3,000–5,000/mo extra living maintenance',
    ],
    spousalWorkRights:
      'Strictly prohibited on a Dependent Pass. Spouse must independently obtain an employer offer and convert to an Employment Pass (EP).',
    childDependentRules:
      'Unmarried dependent children under 18 years can accompany; can study in local international or private schools on a Student Pass.',
    financialSponsorshipRequirementExtraMonthly: 'RM 3,000 – RM 5,000 / month (~PKR 195,000 – 325,000)',
    sources: [
      {
        title: 'Immigration Department of Malaysia - Dependent Pass Rules',
        url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        publisher: 'Jabatan Imigresen Malaysia',
        publisherType: 'government',
      },
    ],
    lastVerified: '2026-10-04',
    note: 'Bachelor degree students are legally prohibited from sponsoring family dependents under Malaysian immigration law.',
  },

  // --------------------------------------------------------------------------
  // 13. Recent Policy Timeline
  // --------------------------------------------------------------------------
  recentPolicyTimeline: [
    {
      effectiveDate: '2025-02-01',
      headline: 'National Minimum Wage Increased to RM 1,700 Effective February 2025',
      summary:
        'The Malaysian Government announced in Budget 2025 that the national statutory minimum wage will rise from RM 1,500 to RM 1,700 per month effective February 1, 2025.',
      impactOnStudents:
        'Raises the base hourly wage for international students authorized to work during vacations in restaurants, petrol kiosks, mini-markets, and hotels.',
      officialAnnouncementUrl: 'https://www.mohe.gov.my/',
      publisher: 'Ministry of Finance & Human Resources Malaysia',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2024-01-15',
      headline: 'Introduction of Graduate Social Visit Pass for International Graduates',
      summary:
        'The Ministry of Higher Education and Immigration Department launched the Graduate Social Visit Pass, enabling international students completing Bachelor’s, Master’s, or PhD programs to remain in Malaysia for up to 12 months after graduation.',
      impactOnStudents:
        'Provides a formal legal bridge to reside in Malaysia while interviewing for corporate Employment Pass roles or pursuing professional development.',
      officialAnnouncementUrl: 'https://visa.educationmalaysia.gov.my/',
      publisher: 'EMGS / Immigration Department of Malaysia',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2023-12-01',
      headline: 'Complete Digitization of eVAL and Launch of Digital i-Kad Mobile Verification',
      summary:
        'EMGS fully phased out physical paper eVAL clearances in favor of secure cryptographically signed digital eVAL PDFs and introduced the digital i-Kad within the EMGS Mobile App.',
      impactOnStudents:
        'Streamlines airport immigration clearance, enables real-time pass renewals, and reduces delays caused by physical document courier.',
      officialAnnouncementUrl: 'https://visa.educationmalaysia.gov.my/',
      publisher: 'EMGS',
      lastVerified: '2026-10-04',
    },
    {
      effectiveDate: '2023-06-01',
      headline: 'Strict Enforcement of Compulsory In-Country Medical Screening Protocol',
      summary:
        'Malaysian Immigration reaffirmed strict enforcement of post-arrival medical screenings within 7 days of landing.',
      impactOnStudents:
        'Students failing to complete the screening or testing positive for active infectious pulmonary conditions face immediate Student Pass cancellation without appeal.',
      officialAnnouncementUrl: 'https://visa.educationmalaysia.gov.my/',
      publisher: 'EMGS / Ministry of Health Malaysia',
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 14. Living There
  // --------------------------------------------------------------------------
  studentLiving: {
    avgAccommodationCostMonthly: 'RM 500 – RM 1,100 / month (~PKR 32,500 – 71,500)',
    housingSearchPortals: ['iProperty Malaysia', 'PropertyGuru Malaysia', 'Mudah.my', 'U-Bilik'],
    healthCareSystemSummary:
      'Mandatory EMGS annual group hospitalization and medical insurance policy (covers up to RM 50,000 inpatient care). Outpatient clinical visits cost RM 30–80 at local general practitioner clinics.',
    safetyIndex: 'Ranked #19 Safest Country in the World (Global Peace Index 2024)',
    climateOverview:
      'Equatorial tropical rainforest climate: year-round warm temperatures 24°C–33°C, high humidity (80%+), and regular afternoon monsoon showers.',
    halalFoodAvailability: 'Abundant',
    pakistaniCommunityPresence:
      'Over 50,000 Pakistani expatriates; vibrant student societies at UM, UTM, APU, and Taylor’s; authentic Pakistani restaurants across Kuala Lumpur, Cyberjaya, and Penang.',
    simAndBankingRecommended: {
      simProviders: ['CelcomDigi', 'Maxis Hotlink', 'U Mobile'],
      digitalBanks: ['Maybank (Malayan Banking Berhad)', 'CIMB Bank', 'Bank Islam'],
    },
    transportationStudentPerks:
      'MyRapid Touch ’n Go Student Concession Card offers 50% discount on all RapidKL LRT, MRT, Monorail, and bus transit across the Klang Valley.',
    sources: [
      {
        title: 'Education Malaysia - Living in Malaysia Guide',
        url: 'https://educationmalaysia.gov.my/',
        publisher: 'Education Malaysia',
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
      title: 'KLIA Immigration Clearance with University Officer',
      officialTerm: 'Pelepasan Imigresen KLIA & Pengambilan Pelajar',
      requiredDocuments: ['Valid Passport', 'Printed eVAL PDF', 'Single Entry Visa (SEV)', 'University Offer Letter'],
      consequenceOfDelay: 'Immigration clearance delay or denial of entry without university officer escort',
      officialPortalOrGuide: 'https://visa.educationmalaysia.gov.my/',
    },
    {
      dayWindow: 'Week 1',
      title: 'Compulsory In-Country Medical Screening',
      officialTerm: 'Pemeriksaan Perubatan Pasca Ketibaan EMGS',
      requiredDocuments: ['Passport Original', 'Copy of eVAL', 'University Student ID Letter'],
      consequenceOfDelay: 'Immediate Student Pass revocation and deportation if not completed within 7 days',
      officialPortalOrGuide: 'https://visa.educationmalaysia.gov.my/',
    },
    {
      dayWindow: 'Week 2',
      title: 'Passport Submission for Student Pass Sticker Endorsement',
      officialTerm: 'Pengendorsan Pelekat Pas Pelajar',
      requiredDocuments: ['Original Passport', 'Medical Screening Clearance Slip', 'Tuition Payment Receipt'],
      consequenceOfDelay: 'Unlawful stay penalties once the 30-day initial entry endorsement expires',
      officialPortalOrGuide: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
    },
    {
      dayWindow: 'Month 1',
      title: 'Collect Passport with Visa Sticker & Biometric i-Kad',
      officialTerm: 'Pengambilan Pasport & Kad Identiti Pelajar Asing (i-Kad)',
      requiredDocuments: ['Passport Retention Slip', 'University Student ID'],
      consequenceOfDelay: 'Inability to open a local bank account or verify legal residency status domestically',
      officialPortalOrGuide: 'https://visa.educationmalaysia.gov.my/',
    },
    {
      dayWindow: 'Month 1',
      title: 'Open Local Bank Account (Maybank / CIMB)',
      officialTerm: 'Pembukaan Akaun Bank Tempatan',
      requiredDocuments: ['Passport with Student Pass Sticker', 'University Bank Support Letter', 'Initial Deposit RM 250'],
      consequenceOfDelay: 'High international ATM withdrawal fees and reliance on cash',
      officialPortalOrGuide: 'https://educationmalaysia.gov.my/',
    },
    {
      dayWindow: 'Month 2',
      title: 'Apply for MyRapid Touch ’n Go Student Concession Card',
      officialTerm: 'Kad Konsesi Pelajar MyRapid 50%',
      requiredDocuments: ['Student Pass Sticker Copy', 'University Confirmation Letter', 'Passport Copy'],
      consequenceOfDelay: 'Paying full retail public transit fares on RapidKL transit lines',
      officialPortalOrGuide: 'https://educationmalaysia.gov.my/',
    },
  ],

  // --------------------------------------------------------------------------
  // 16. FAQs (12 authentic questions)
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: 'Can I travel to Malaysia with only the eVAL without getting a visa in Pakistan?',
      answer:
        'No. Pakistani passport holders are classified under Malaysia’s Single Entry Visa (SEV) required category. An approved eVAL grants immigration approval, but you MUST use that eVAL to obtain an SEV—either through the online Malaysia eVISA portal or via Gerry’s Visa Drop Box in Pakistan—before airlines will allow you to board.',
      category: 'visa',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Single Entry Visa Policy',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is an English Medium of Instruction (MOI) certificate accepted instead of IELTS for Pakistani students?',
      answer:
        'Yes, extensively. Most Malaysian public research universities (UM, UKM, USM, UTM) and private institutions accept an official Medium of Instruction (MOI) letter from an HEC-recognized Pakistani university confirming your entire Bachelor’s degree was taught in English. However, high-demand programs or Australian branch campuses (Monash, Curtin) may still request IELTS (6.0–6.5) or PTE Academic.',
      category: 'admissions',
      sources: [
        {
          title: 'EMGS - English Language Guidelines',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I work part-time during my regular semester in Malaysia?',
      answer:
        'No. Under Regulation 13(1) of the Immigration Regulations 1963, international students are strictly prohibited from working during regular semester terms. You are only permitted to work up to 20 hours per week during official semester breaks or holidays exceeding 7 days, and strictly within 4 approved sectors: restaurants, petrol kiosks, mini-markets, and hotels.',
      category: 'jobs',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Student Work Rules',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How long does the EMGS eVAL approval take, and how can I track it?',
      answer:
        'EMGS processing typically takes 14 to 21 working days (approx. 3 to 4 calendar weeks). You can track real-time progress 24/7 on the EMGS website or mobile app using your passport number and nationality. Once the yellow progress bar transitions to 70%–80% (green), immigration clearance is finalized and the eVAL PDF can be downloaded.',
      category: 'visa',
      sources: [
        {
          title: 'EMGS - Application Tracker',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can I bring my spouse and children with me while studying in Malaysia?',
      answer:
        'Only if you are enrolled in a Master’s or PhD program. Malaysian immigration law strictly restricts Dependent Passes (Pas Tanggungan) to postgraduate research and coursework students. Bachelor’s degree students are legally prohibited from sponsoring spouses or dependents.',
      category: 'settlement',
      sources: [
        {
          title: 'Immigration Department of Malaysia - Dependent Pass Guidelines',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Jabatan Imigresen Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What happens if I fail the post-arrival medical screening in Malaysia?',
      answer:
        'If you test positive for active infectious pulmonary tuberculosis, HIV, Hepatitis B (in clinical programs), or illicit narcotics during the mandatory 7-day screening, the clinic notifies EMGS. You may request a secondary specialist review or sputum culture. If unfitness is confirmed, the Immigration Department revokes your eVAL, and you must depart Malaysia immediately.',
      category: 'settlement',
      sources: [
        {
          title: 'EMGS - Medical Screening Guidelines',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Are Pakistani 2-year Bachelor degrees (BA/BSc) accepted for Master’s programs in Malaysia?',
      answer:
        'No. Malaysian universities adhere to Malaysian Qualifications Agency (MQA) standards requiring 16 years of completed formal education for Master entry. Students with old 2-year BA/BSc degrees must either complete a bridging conversion diploma, a 2-year conventional MA/MSc in Pakistan, or enroll in a 4-year BS degree.',
      category: 'admissions',
      sources: [
        {
          title: 'Malaysian Qualifications Agency (MQA) - Standards',
          url: 'https://www.mqa.gov.my/',
          publisher: 'MQA',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Can international graduates stay and work in Malaysia after completing their studies?',
      answer:
        'Yes. Graduates can apply for the 12-month Graduate Social Visit Pass via EMGS to stay in Malaysia while seeking employment. To work full-time professionally, you must secure a corporate job offer with a minimum salary of RM 3,000 to RM 5,000+ per month, which your employer will use to sponsor an Employment Pass (EP Category I, II, or III) through Expatriate Services Division (ESD).',
      category: 'jobs',
      sources: [
        {
          title: 'Expatriate Services Division - Employment Pass',
          url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
          publisher: 'Immigration Department of Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Is halal food readily available for Pakistani Muslim students in Malaysia?',
      answer:
        'Yes, 100%. Malaysia is a Muslim-majority country with the world’s most stringent Halal certification body (JAKIM). All campus dining halls, food courts, and commercial restaurants are certified Halal. Furthermore, authentic Pakistani food—including biryani, nihari, and karahi—is widely available in every major university district.',
      category: 'settlement',
      sources: [
        {
          title: 'JAKIM - Halal Standards Malaysia',
          url: 'https://educationmalaysia.gov.my/',
          publisher: 'JAKIM / Education Malaysia',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'How much money do I need to show in my bank statement for a Malaysian student visa?',
      answer:
        'There is no government-mandated escrow or blocked account. However, universities and EMGS require proof that you or your sponsor can cover 1 year of tuition fees plus living expenses. Showing a 3 to 6-month continuous bank statement with an active closing balance of approximately USD 3,000 to 5,000 (~RM 15,000–22,000 / PKR ~975,000–1,430,000) accompanied by a sponsor affidavit is universally sufficient.',
      category: 'finances',
      sources: [
        {
          title: 'EMGS - Financial Proof Guidance',
          url: 'https://visa.educationmalaysia.gov.my/',
          publisher: 'EMGS',
          publisherType: 'portal',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'What is the advantage of studying at a foreign branch campus in Malaysia like Monash or Nottingham?',
      answer:
        'Branch campuses in Malaysia confer the identical academic degree certificate and transcript as their home campuses in Australia or the UK, accredited by both MQA and their home national accrediting bodies. However, tuition and living costs in Malaysia are 60% to 70% cheaper than studying in Melbourne or Nottingham, and students have opportunities to transfer to the parent campus.',
      category: 'admissions',
      sources: [
        {
          title: 'Monash University Malaysia - Degree Accreditation',
          url: 'https://www.monash.edu.my/',
          publisher: 'Monash University Malaysia',
          publisherType: 'university',
        },
      ],
      lastVerified: '2026-10-04',
    },
    {
      question: 'Do I need IBCC and HEC attestation before applying to Malaysian universities?',
      answer:
        'Yes. While initial provisional university offers can sometimes be issued based on clean scans, both EMGS and the Immigration Department of Malaysia require formal verified documents. Matric and FSc certificates must be attested by IBCC, and Bachelor/Master degrees must be verified by HEC and countersigned by MOFA Pakistan.',
      category: 'admissions',
      sources: [
        {
          title: 'HEC Pakistan - Degree Attestation Rules',
          url: 'https://hec.gov.pk',
          publisher: 'HEC Pakistan',
          publisherType: 'government',
        },
      ],
      lastVerified: '2026-10-04',
    },
  ],

  // --------------------------------------------------------------------------
  // 17. Consolidated Official Sources
  // --------------------------------------------------------------------------
  allOfficialSources: [
    {
      title: 'Education Malaysia Global Services (EMGS) Official Visa Portal',
      url: 'https://visa.educationmalaysia.gov.my/',
      publisher: 'Education Malaysia Global Services',
      publisherType: 'portal',
    },
    {
      title: 'Education Malaysia - Ministry of Higher Education Portal',
      url: 'https://educationmalaysia.gov.my/',
      publisher: 'Ministry of Higher Education Malaysia',
      publisherType: 'government',
    },
    {
      title: 'Immigration Department of Malaysia (Jabatan Imigresen Malaysia - JIM)',
      url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
      publisher: 'Jabatan Imigresen Malaysia',
      publisherType: 'government',
    },
    {
      title: 'Ministry of Higher Education Malaysia (MOHE)',
      url: 'https://www.mohe.gov.my/',
      publisher: 'MOHE Malaysia',
      publisherType: 'government',
    },
    {
      title: 'Malaysian Qualifications Agency (MQA)',
      url: 'https://www.mqa.gov.my/',
      publisher: 'Malaysian Qualifications Agency',
      publisherType: 'government',
    },
    {
      title: 'High Commission of Malaysia in Islamabad, Pakistan',
      url: 'https://www.kln.gov.my/web/pak_islamabad/home',
      publisher: 'Ministry of Foreign Affairs Malaysia',
      publisherType: 'embassy',
    },
    {
      title: 'Universiti Malaya (UM)',
      url: 'https://www.um.edu.my/',
      publisher: 'Universiti Malaya',
      publisherType: 'university',
    },
    {
      title: 'Universiti Kebangsaan Malaysia (UKM)',
      url: 'https://www.ukm.my/portal/',
      publisher: 'Universiti Kebangsaan Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Universiti Sains Malaysia (USM)',
      url: 'https://www.usm.my/',
      publisher: 'Universiti Sains Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Universiti Putra Malaysia (UPM)',
      url: 'https://upm.edu.my/',
      publisher: 'Universiti Putra Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Universiti Teknologi Malaysia (UTM)',
      url: 'https://www.utm.my/',
      publisher: 'Universiti Teknologi Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Taylor’s University Malaysia',
      url: 'https://taylors.edu.my/',
      publisher: 'Taylor’s University',
      publisherType: 'university',
    },
    {
      title: 'UCSI University Malaysia',
      url: 'https://www.ucsiuniversity.edu.my/',
      publisher: 'UCSI University',
      publisherType: 'university',
    },
    {
      title: 'Universiti Teknologi PETRONAS (UTP)',
      url: 'https://www.utp.edu.my/',
      publisher: 'Universiti Teknologi PETRONAS',
      publisherType: 'university',
    },
    {
      title: 'Monash University Malaysia',
      url: 'https://www.monash.edu.my/',
      publisher: 'Monash University Malaysia',
      publisherType: 'university',
    },
    {
      title: 'University of Nottingham Malaysia',
      url: 'https://www.nottingham.edu.my/',
      publisher: 'University of Nottingham Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Asia Pacific University of Technology & Innovation (APU)',
      url: 'https://www.apu.edu.my/',
      publisher: 'APU Malaysia',
      publisherType: 'university',
    },
    {
      title: 'Sunway University Malaysia',
      url: 'https://sunwayuniversity.edu.my/',
      publisher: 'Sunway University',
      publisherType: 'university',
    },
    {
      title: 'Higher Education Commission (HEC) Pakistan',
      url: 'https://hec.gov.pk',
      publisher: 'HEC Pakistan',
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

  // --------------------------------------------------------------------------
  // Pakistan Localization Context
  // --------------------------------------------------------------------------
  pakistanContext: {
    countryCode: 'PK',
    countryName: 'Pakistan',
    localCurrencyCode: 'PKR',
    localCurrencySymbol: 'Rs.',
    exchangeRateToDestCurrency: 65.0, // 1 MYR ≈ 65 PKR
    exchangeRateDate: '2026-10-04',
    vacProviderName: 'Official Malaysia eVISA Portal / Gerry’s Visa Drop Box',
    embassyCentres: [
      {
        city: 'Islamabad',
        jurisdiction: 'Federal Capital Islamabad, Punjab, KPK, AJK, Gilgit-Baltistan',
        centreType: 'Embassy',
        address: 'Plot No. 144-145, Street No. 17, Sector G-5, Diplomatic Enclave, Islamabad',
        bookingPortalUrl: 'https://www.kln.gov.my/web/pak_islamabad/home',
        appointmentWaitEstimate: '3 to 5 business days for consular attestation / visa drop-box services',
        appointmentFeePKR: 8125,
        sources: [
          {
            title: 'High Commission of Malaysia in Islamabad',
            url: 'https://www.kln.gov.my/web/pak_islamabad/home',
            publisher: 'Ministry of Foreign Affairs Malaysia',
            publisherType: 'embassy',
          },
        ],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Karachi',
        jurisdiction: 'Sindh and Balochistan',
        centreType: 'Consulate General',
        address: '7A, Main Khayaban-e-Shamsheer, Phase V, DHA, Karachi',
        bookingPortalUrl: 'https://www.kln.gov.my/web/pak_islamabad/home',
        appointmentWaitEstimate: '3 to 5 business days for consular attestation / visa drop-box services',
        appointmentFeePKR: 8125,
        sources: [
          {
            title: 'Consulate General of Malaysia in Karachi',
            url: 'https://www.kln.gov.my/web/pak_islamabad/home',
            publisher: 'Ministry of Foreign Affairs Malaysia',
            publisherType: 'embassy',
          },
        ],
        lastVerified: '2026-10-04',
      },
      {
        city: 'Nationwide (Islamabad, Lahore, Karachi, Peshawar)',
        jurisdiction: 'All Pakistani passport holders opting for physical passport visa sticker submission',
        centreType: 'Gerrys',
        address: 'Gerry’s Visa Centres across major Pakistani metropolitan cities',
        bookingPortalUrl: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
        appointmentWaitEstimate: '5 to 10 working days for passport drop-box processing',
        appointmentFeePKR: 8125,
        sources: [
          {
            title: 'Malaysia eVISA Portal',
            url: 'https://malaysiavisa.imi.gov.my/evisa/evisa.jsp',
            publisher: 'Immigration Department of Malaysia',
            publisherType: 'government',
          },
        ],
        lastVerified: '2026-10-04',
      },
    ],
    attestationRules: [
      {
        authority: 'IBCC',
        title: 'Inter Board Coordination Commission (IBCC)',
        applicableQualifications: ['Matriculation (SSC)', 'Intermediate (HSSC / FSc / ICS)'],
        procedureSummary:
          'Original certificates and detailed mark certificates verified by issuing BISE exam board, then attested with secure QR code by IBCC.',
        officialPortal: 'https://ibcc.edu.pk',
        estimatedFeePKR: 4000,
        processingTimeDays: '3 to 5 business days',
        sources: [
          {
            title: 'IBCC Attestation System',
            url: 'https://ibcc.edu.pk',
            publisher: 'IBCC Pakistan',
            publisherType: 'government',
          },
        ],
        lastVerified: '2026-10-04',
      },
      {
        authority: 'HEC',
        title: 'Higher Education Commission (HEC) Pakistan',
        applicableQualifications: ['Bachelor Degrees (BS / BSc / BBA / B.E.)', 'Master Degrees (MS / MPhil)', 'PhD'],
        procedureSummary:
          'Online profile creation on HEC e-portal (eservices.hec.gov.pk), document upload, physical or courier verification with secure QR barcode seal.',
        officialPortal: 'https://hec.gov.pk',
        estimatedFeePKR: 8000,
        processingTimeDays: '7 to 14 business days',
        sources: [
          {
            title: 'HEC Degree Attestation System',
            url: 'https://hec.gov.pk',
            publisher: 'HEC Pakistan',
            publisherType: 'government',
          },
        ],
        lastVerified: '2026-10-04',
      },
      {
        authority: 'MOFA',
        title: 'Ministry of Foreign Affairs (MOFA) Pakistan',
        applicableQualifications: [
          'IBCC-attested Matric & FSc',
          'HEC-attested Degrees & Transcripts',
          'NADRA Birth, Marriage, & Police Character Certificates',
        ],
        procedureSummary:
          'Final authentication step in Pakistan before consular submission to Malaysian immigration. MOFA verifies previous stamps and applies holographic Apostille/authentication sticker.',
        officialPortal: 'https://mofa.gov.pk/',
        estimatedFeePKR: 1500,
        processingTimeDays: '1 to 2 business days',
        sources: [
          {
            title: 'MOFA Document Attestation Rules',
            url: 'https://mofa.gov.pk/',
            publisher: 'MOFA Pakistan',
            publisherType: 'government',
          },
        ],
        lastVerified: '2026-10-04',
      },
    ],
    studentCommunityHubs: [
      {
        name: 'Pakistani Students Association Malaysia (PSAM)',
        platform: 'Facebook',
        url: 'https://educationmalaysia.gov.my/',
        verified: true,
      },
      {
        name: 'Universiti Malaya Pakistani Students Society',
        platform: 'Student Association',
        url: 'https://www.um.edu.my/',
        verified: true,
      },
      {
        name: 'UTM International Student Society (ISS Pakistan)',
        platform: 'Student Association',
        url: 'https://www.utm.my/',
        verified: true,
      },
      {
        name: 'High Commission of Pakistan in Kuala Lumpur - Student Wing',
        platform: 'Website',
        url: 'https://www.kln.gov.my/web/pak_islamabad/home',
        verified: true,
      },
    ],
  },
};
