import { CueCardPrompt, TargetCountry } from '../types';

export const CUE_CARD_PROMPTS: CueCardPrompt[] = [
  {
    id: 'cue-p2-tech',
    part: 2,
    title: 'Describe a technology you find difficult to live without',
    topic: 'Part 2: Long Turn (1-Min Prep, 2-Min Speech)',
    bullets: [
      'What the technology is and when you started using it',
      'What specific purposes you use it for in daily life or study',
      'How it compares to traditional methods previously used',
      'And explain why it would be challenging for you to live without it',
    ],
    suggestedPrepSec: 60,
    suggestedSpeakingSec: 120,
  },
  {
    id: 'cue-p2-travel',
    part: 2,
    title: 'Describe an international city or cultural site you wish to explore',
    topic: 'Part 2: Cultural Heritage & Study Destinations',
    bullets: [
      'Where this destination is situated and how you first learned about it',
      'What notable architectural, academic, or natural attractions it boasts',
      'Who you would choose to accompany you on this expedition',
      'And explain why this place holds profound personal significance for you',
    ],
    suggestedPrepSec: 60,
    suggestedSpeakingSec: 120,
  },
  {
    id: 'cue-p1-work-study',
    part: 1,
    title: 'Personal Introduction: Academic Trajectory & Career Ambitions',
    topic: 'Part 1: Interview & Everyday Spoken Discourse',
    bullets: [
      'Do you currently work or are you pursuing higher education?',
      'Why did you select this specific academic field?',
      'What skills do you hope to acquire before graduating?',
      'Do you envision yourself remaining in this domain for the foreseeable future?',
    ],
    suggestedPrepSec: 15,
    suggestedSpeakingSec: 45,
  },
  {
    id: 'cue-p3-global-education',
    part: 3,
    title: 'Two-Way Discussion: Global Student Mobility & Brain Drain',
    topic: 'Part 3: Abstract Analysis & Societal Impact',
    bullets: [
      'How does international student exchange benefit developing economies?',
      'Should governments introduce incentives to encourage overseas scholars to return?',
      'In what ways has digital remote learning disrupted traditional campus study?',
    ],
    suggestedPrepSec: 20,
    suggestedSpeakingSec: 90,
  },
];

export const WRITING_PROMPTS = [
  {
    id: 'w-task2-ai-jobs',
    type: 'writing_task2',
    title: 'Task 2: Artificial Intelligence and Workforce Displacement',
    prompt: `Some people believe that artificial intelligence and automation will lead to widespread unemployment, while others argue that it will create more sophisticated career opportunities than it eliminates.\n\nDiscuss both views and give your own opinion. Give reasons for your answer and include relevant examples from your knowledge or experience. Write at least 250 words.`,
    minWords: 250,
  },
  {
    id: 'w-task1-energy-trends',
    type: 'writing_task1',
    title: 'Task 1: Academic Data Analysis (Renewable vs Fossil Energy 2010–2025)',
    prompt: `The chart illustrates the proportion of total national electricity generation derived from renewable sources versus fossil fuels across four European nations between 2010 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
    minWords: 150,
  },
];

export const COUNTRY_IMMIGRATION_DATA: Record<
  TargetCountry,
  {
    name: string;
    flag: string;
    visaType: string;
    refusalClause: string;
    keyChecklist: string[];
    riskPoints: string[];
    sampleSop: {
      highRisk: string;
      moderateRisk: string;
      visaReady: string;
    };
  }
> = {
  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    visaType: 'National Visa (Section 16b AufenthG - Study)',
    refusalClause: 'APS Discrepancy & Academic Discontinuity (AufenthG §16b)',
    keyChecklist: [
      'APS Certificate Verification from German Academic Evaluation Centre',
      'ECTS Module Congruence (Minimum 18-30 ECTS in core mathematical/CS modules)',
      'Proof of Financial Resources (Blocked Account of €11,904 / Sperrkonto)',
      'Uni-Assist Vorprüfungsdokumentation (VPD) or Direct Zulassung',
    ],
    riskPoints: [
      'Vague course rationale without referencing exact chair/institute (Professur)',
      'Unexplained gaps between bachelor completion and master application',
      'Claiming desire to permanently settle without proving return ties',
    ],
    sampleSop: {
      highRisk: `Dear Sir or Madam,
I want to study Master in Computer Science in Germany because Germany is famous for cars, beer, and free education. Ever since I was a little boy playing with computers, I dreamed of going to Europe. After I finish my bachelor degree in 2021, I took 3 years off to relax and think about my destiny.

Germany has very high salaries for software developers compared to my home country, where the economy is bad and political problems make it hard to live. Therefore, my ultimate dream is to find a full-time IT job in Munich, sponsor my family to come over, and settle permanently as a permanent resident.

I chose your university because it ranks very high on QS World University Rankings. I have a lot of passion. Please give me the visa so I can achieve my European dream.`,
      moderateRisk: `To the Admissions Committee,
I am writing to express my interest in the MSc Data Science program at Technical University of Munich. During my undergraduate degree in Electronics, I developed an interest in machine learning.

Germany is known for world-class technical education and strong industrial partnerships. Studying at TUM will allow me to gain modern skills that are currently in high demand globally. I have prepared the required blocked account funds for living expenses.

After graduating, I hope to gain valuable international experience in leading European technology corporations before exploring leadership roles. I believe this program aligns well with my personal ambitions.`,
      visaReady: `To the Academic Selection Committee and German Consular Section,

I am formally submitting my Statement of Academic Purpose for the Master of Science in Informatics at Technical University of Munich (TUM) for the Winter Semester. Having earned my Bachelor of Technology in Computer Science from the National Institute of Technology with a CGPA of 8.92/10 (German Grade equivalent 1.3), I have completed 142 ECTS-equivalent credits with specialized rigor in Discrete Mathematics (12 ECTS), Algorithm Engineering (18 ECTS), and Distributed Systems (14 ECTS).

My undergraduate thesis investigated low-latency synchronization protocols for distributed edge sensor networks, culminating in a peer-reviewed IEEE conference paper. While benchmarking our protocol, I encountered state-consistency bottlenecks under asynchronous network partitions. TUM’s Chair of Connected Mobility, directed by Prof. Dr. Ott, conducts pioneering research directly addressing these fault-tolerant consensus mechanisms. Access to the Munich High-Performance Computing (LRZ) clusters will provide the exact experimental infrastructure required to resolve these architectural limits.

Financially, my €11,904 blocked account is fully funded via Fintiba alongside comprehensive statutory health insurance (TK). Upon graduation, my strict objective is to return to my home country’s expanding fintech hub in Bangalore. Tier-1 enterprise cloud providers such as Infosys Digital and Razorpay actively recruit engineers with specialized European distributed systems credentials for Principal Cloud Architect vacancies offering salary premiums of 2.8x domestic averages. TUM’s rigorous curriculum provides the exact technical leverage to step into these domestic technical leadership positions.`,
    },
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    visaType: 'Student Route (Appendix ST & CAS Compliance)',
    refusalClause: 'Credibility Interview Failure & Academic Progression (ST 5.1)',
    keyChecklist: [
      'Confirmation of Acceptance for Studies (CAS) from Licensed Sponsor',
      'Academic Progression Rule (Higher RQF Level than previous qualification)',
      'Strict UKVI Credibility Assessment: Knowledge of syllabus & modules',
      'Maintenance Funds (London £1,483/mo vs Outside London £1,136/mo x 9 months)',
    ],
    riskPoints: [
      'Inability to explain why the UK was selected over home country universities',
      'Copy-pasting generic university marketing blurbs or Wikipedia facts',
      'Confusing Student Route with permanent settlement intent',
    ],
    sampleSop: {
      highRisk: `Statement of Purpose for UK Student Visa:
I want to study in London because London is the greatest financial capital in the world with Big Ben and royal palaces. I finished my Bachelor in Business Administration in 2022. I want to study Master of International Management.

The UK gives a 2-year Graduate Route visa which will allow me to work and earn back my father's investment. The exchange rate between the British Pound and my local currency is very favorable, so working in the UK will make my family wealthy. I plan to switch to a Skilled Worker Visa after two years and buy a home in Manchester.`,
      moderateRisk: `Statement of Purpose for MSc International Marketing at University of Leeds:
I graduated with a Bachelor of Commerce and have worked as a digital marketing associate for 18 months. I have chosen the UK for my postgraduate education because British degrees are respected across the globe and completed in a concentrated 1-year duration.

The course at Leeds offers modules in Strategic Brand Management and Digital Analytics that will expand my commercial capabilities. I have arranged personal funds to cover my tuition fees and living expenses. This degree will help me achieve my long-term career goals in marketing.`,
      visaReady: `Statement of Academic Purpose & UKVI Credibility Declaration:
Applicant: Rohan Patel | Program: MSc Renewable Energy Engineering | Institution: University of Strathclyde, Glasgow

I am applying to pursue the 12-month MSc in Renewable Energy Engineering at the University of Strathclyde, having achieved a First-Class Honours Bachelor of Engineering in Mechanical Systems (78.4%). This represents a direct vertical progression under UKVI Appendix ST 5.1, transitioning from foundational thermodynamic principles to advanced offshore wind turbine aerodynamics.

I specifically selected Strathclyde over domestic institutions in India because of its prestigious Energy Technology Centre and the PNDC (Power Networks Demonstration Centre). Modules such as 'Offshore Wind Structural Mechanics' (16901) and 'Grid Integration of Renewables' provide practical simulation modeling using FAST and Bladed software, specialized suites not integrated into Indian curricula.

My tuition fees (£26,500) and Scottish maintenance requirements (£10,224) are held in my personal nationalized bank account for over 35 consecutive days. Post-study, I will return to Gujarat, India, where the government's 30 GW Khavda Renewable Energy Park is actively contracting specialized offshore mechanical engineers. Having this British specialist degree guarantees recruitment as a Senior Turbine Reliability Specialist at Adani Green Energy with projected compensation starting at INR 1,800,000 per annum.`,
    },
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    visaType: 'Study Permit (IRPR Section 216 & SDS Stream)',
    refusalClause: 'IRCC Section 216(1)(b) - Failure to Prove Intent to Depart Canada',
    keyChecklist: [
      'IRCC Section 216(1)(b) Compliance: Strong ties to home country',
      'Guaranteed Investment Certificate (GIC) of $20,635 CAD + 1st Year Tuition',
      'Provincial Attestation Letter (PAL) from Designated Learning Institution (DLI)',
      'Clear Economic Return on Investment (ROI) justification for home market',
    ],
    riskPoints: [
      'Failing to prove economic ties, real estate, or family obligations in home country',
      'Over-emphasizing Post-Graduation Work Permit (PGWP) or Express Entry PR pathways',
      'Applying for a diploma or certificate after already holding a Bachelor or Master degree',
    ],
    sampleSop: {
      highRisk: `Letter of Explanation for Canadian Study Permit:
I am applying for a 2-year Post-Graduate Certificate in Global Business Management at a career college in Ontario. I already have an MBA from India, but Canadian employers prefer Canadian credentials.

Canada has very friendly immigration policies and Express Entry programs for students. My plan is to utilize the Post-Graduation Work Permit (PGWP) to get Canadian PR (Permanent Residency) and sponsor my parents. Canada is a peaceful country with free healthcare and good snow, which my country does not have.`,
      moderateRisk: `Study Permit Letter of Explanation:
I have been accepted into the Master of Management at University of Windsor. Having worked for two years as a junior financial analyst, I require higher international managerial knowledge to advance in corporate finance.

Canada offers safe multicultural cities and reputable post-secondary educational standards. My family has deposited the necessary funds into a GIC account and paid the first semester tuition fees. After completing my studies and gaining some international perspective, I look forward to returning home to continue my career.`,
      visaReady: `Letter of Explanation & Academic Intent to Visa Consular Officer (IRCC):
Applicant: Ananya Sharma | Program: Master of Engineering in Telecommunications | Institution: University of Waterloo

I submit this Letter of Explanation to substantiate my Study Permit application for the Master of Engineering in Telecommunications at the University of Waterloo (DLI: O19305471522). I completed my Bachelor of Engineering in Electronics and Telecommunication at the University of Mumbai with an 8.64 CGPA, followed by 22 months of formal employment as a Network Systems Associate at Tata Communications Ltd (relieving and service letters enclosed).

The Waterloo curriculum provides direct specialized access to the Center for Wireless Communications (CWC), with coursework in 5G Core Architecture (ECE 613) and High-Speed Photonic Networks. Equivalent hands-on telecommunications testbeds are unavailable in domestic Indian post-graduate programs.

IRCC Section 216(1)(b) Compliance & Ties to Home Country:
1. Economic Justification: My first-year tuition ($38,200 CAD) and $20,635 CAD Scotiabank GIC are fully remitted without debt encumbrance.
2. Ties to India: I am the sole legal heir to commercial agricultural land and parental residential property in Pune valued at INR 34,000,000 (~$540,000 CAD) (Valuation certificates appended). Furthermore, my previous employer has issued an official Letter of Intent indicating consideration for a Lead Microwave Transmission Architect position (compensating INR 2,200,000/yr) upon my return with accredited 5G network credentials. My immediate family resides permanently in Maharashtra, where my civic and personal commitments remain anchored.`,
    },
  },
  usa: {
    name: 'United States',
    flag: '🇺🇸',
    visaType: 'F-1 Academic Student Visa (SEVIS & Form I-20)',
    refusalClause: 'INA Section 214(b) - Presumption of Immigrant Intent',
    keyChecklist: [
      'Form I-20 Issued by SEVP-Certified US Institution with SEVIS Fee Receipt',
      'Overcoming INA 214(b) Statutory Presumption of Permanent Immigrant Intent',
      'Demonstrated Liquid Financial Capability for 1st Year (Box 8 of I-20)',
      'DS-160 Consistency with In-Person Consular Interview Answers',
    ],
    riskPoints: [
      'Mentioning desire for H-1B lottery or Green Card sponsorship during interview/SOP',
      'Vague answers about who is paying tuition or reliance on speculative loans',
      'Lack of knowledge about specific university faculty, labs, or curriculum specifics',
    ],
    sampleSop: {
      highRisk: `Statement of Purpose for US F-1 Visa:
I am admitted to Master in Software Engineering at California State University. California is Silicon Valley where Google, Apple, and Meta are located.

My goal in America is to find an internship on OPT (Optional Practical Training) and get an employer to file my H-1B visa and permanent Green Card. In my country, engineer wages are very low, so America is the land of opportunity where I can earn 150k dollars. My uncle in New Jersey has promised to help me with expenses.`,
      moderateRisk: `Academic Statement of Purpose:
I am writing to apply for the F-1 visa to attend University of Texas at Arlington for a Master in Biomedical Engineering. America has leading research in health technologies and artificial organs.

I completed my undergraduate degree in Biotechnology. This master's degree will expose me to state-of-the-art medical devices. My parents are sponsoring my education, and our bank statements show adequate savings to cover the I-20 amount. After my degree, I plan to work in the biomedical device sector.`,
      visaReady: `Academic Statement of Purpose & Consular Compliance Document:
Applicant: Vikramaditya Rao | Institution: Purdue University, West Lafayette | Degree: MS in Industrial Engineering

I have been officially admitted to Purdue University’s College of Engineering for the Master of Science in Industrial Engineering (I-20 SEVIS ID: N0032948192). Having graduated in the top 5% of my Mechanical Engineering cohort at Anna University, my technical focus centers on stochastic supply chain optimization and digital twin manufacturing.

Why Purdue University:
Purdue’s Center for Digital Enterprise and the Laboratory for Intelligent Systems (directed by Prof. Seokcheon Lee) offer specialized optimization testbeds utilizing Gurobi and AnyLogic industrial frameworks. The university’s direct research ties to heavy manufacturing consortiums provide specific operational analytics training unmatched in South Asian institutions.

Overcoming INA Section 214(b) - Definitive Intent to Return to India:
1. Family Enterprise Continuity: My family owns and operates an ISO 9001-certified precision automotive manufacturing facility in Chennai employing 65 full-time technicians. Upon completing my 2-year master’s at Purdue, I have a binding contractual succession role to modernize our enterprise into automated smart-casting manufacturing.
2. Financial Verification: My father and primary sponsor has liquidated liquid assets of $82,000 USD (State Bank of India verified) exceeding Purdue’s Year-1 I-20 requirement of $49,820 USD.
3. Domestic Career Trajectory: India’s National Manufacturing Policy aims to increase manufacturing GDP contribution to 25%. Applying Purdue’s industrial engineering methodologies directly to our family’s tier-1 automotive supply operations provides an immediate enterprise ROI exceeding 40% efficiency gains.`,
    },
  },
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    visaType: 'Student Visa (Subclass 500 - Genuine Student)',
    refusalClause: 'Migration Act s65 & Genuine Student (GS) Direction No. 106',
    keyChecklist: [
      'Confirmation of Enrolment (CoE) from CRICOS Registered Institution',
      'Genuine Student (GS) Criterion: Evidence of current circumstances & domestic employment prospects',
      'Financial Capacity Proof (Minimum AUD $29,710/yr living expenses + tuition + travel)',
      'Overseas Student Health Cover (OSHC) for entire duration of visa',
    ],
    riskPoints: [
      'Stating post-study migration (Subclass 485) as primary motivation rather than academic advancement',
      'Course hopping into low-cost vocational colleges after arrival in Australia',
      'Failure to justify why studying in Australia provides realistic financial return on investment (ROI)',
    ],
    sampleSop: {
      highRisk: `Statement of Purpose for Australian Student Visa:
I want to study Master of Information Technology in Sydney because Australia has great beaches, sunshine, and high minimum wages. After finishing my Bachelor in India, I want to experience Australian life.

Australia allows students to work 48 hours per fortnight, which will let me earn enough to pay my college fees and send money back home. After graduation, I will apply for the 485 Temporary Graduate Visa and seek Permanent Residency through the points-based skilled migration system. Australia is my dream country to settle down forever.`,
      moderateRisk: `Statement of Purpose for Master of Data Science at University of Queensland:
I graduated with a Bachelor in Computer Applications and worked for one year as a junior analyst. I chose Australia because Australian universities have international prestige and modern research labs.

The course at UQ covers advanced machine learning and cloud architectures. My parents are sponsoring my studies and have arranged an education loan and family savings to satisfy the Department of Home Affairs financial requirements. This degree will help me gain advanced competencies to succeed in my future technical career.`,
      visaReady: `Genuine Student (GS) Criterion & Academic Purpose Statement:
Applicant: Harpreet Singh | Program: Master of Agricultural Science | Institution: University of Melbourne (CRICOS: 00116A)

I am formally submitting this Genuine Student statement in support of my Subclass 500 Student Visa application for the Master of Agricultural Science (Food Security Specialization) at the University of Melbourne. Having earned a Bachelor of Science (Honours) in Agriculture from Punjab Agricultural University (CGPA 8.42/10), my specialized goal is to acquire precision irrigation and drought-resilient crop management methodologies.

Why University of Melbourne:
Australia is a world benchmark in dryland agronomy and water-resource optimization. The University of Melbourne's Dookie Agricultural Campus provides specialized field laboratories and sensory robotics facilities for soil hydrology that are non-existent in South Asian institutions.

Genuine Student Compliance & Ties to India (Direction No. 106):
1. Economic Reality & ROI: In Punjab, groundwater depletion is a critical agricultural crisis. Corporate agribusinesses such as ITC Agri-Business and Godrej Agrovet are establishing precision farming units, actively recruiting specialists with Australian dryland credentials for Senior Agronomist positions offering initial packages of INR 1,600,000–2,000,000/yr (industry salary benchmark letters appended).
2. Financial Capacity: My family holds liquid savings of AUD $68,400 with HDFC Bank alongside an approved education loan, comfortably exceeding tuition ($47,200 AUD) and Department of Home Affairs 12-month living benchmarks ($29,710 AUD).
3. Irrefutable Home Ties: My family owns 18 acres of irrigated farmland and commercial agro-machinery in Ludhiana valued at INR 65,000,000 (~$1.15M AUD). As the eldest son, I am contractually bound to manage our family estate and integrate precision farming systems upon graduation.`,
    },
  },
  china: {
    name: 'China',
    flag: '🇨🇳',
    visaType: 'Study Visa (X1 Long-Term / X2 Short-Term & JW201/202)',
    refusalClause: 'Exit and Entry Administration Law & JW201/202 Discrepancies',
    keyChecklist: [
      'Original Admission Notice from Ministry of Education accredited Chinese University',
      'Form JW201 (CSC Scholarship) or Form JW202 (Self-Funded Study Authorization)',
      'Foreigner Physical Examination Record (Standardized Blood, ECG, Chest X-Ray tests)',
      'Non-Criminal Record Certificate (Police Clearance notarized and apostilled/consular-legalized)',
    ],
    riskPoints: [
      'Inability to explain why China was chosen for this discipline (e.g. AI, hardware, civil engineering, language)',
      'Unexplained educational gap years without documented employment or study evidence',
      'Failing to specify intended lab, research institute, or faculty supervisor for postgraduate study',
    ],
    sampleSop: {
      highRisk: `Study Plan for China Visa:
I want to study in China because China is a big country and has cheap education with full scholarships. I saw many YouTube videos showing fast trains and big cities in Shanghai.

I want to learn Chinese language and do business between China and my country, importing electronics and selling them. Please give me the X1 visa and full CSC scholarship with monthly stipend so I can study without paying.`,
      moderateRisk: `Study Plan for Master in Civil Engineering at Tongji University:
I completed my Bachelor in Civil Engineering and have a strong interest in infrastructure development. China has constructed the most advanced bridges, tunnels, and high-speed rail systems in modern history.

Studying at Tongji University will give me direct exposure to mega-project engineering. I have secured the JW202 authorization form and passed the required medical examination. After finishing my studies, I plan to use this knowledge to work on engineering projects in my home country.`,
      visaReady: `Academic Study Plan & Visa Statement:
Applicant: Tariq Mahmood | Program: Master of Science in Microelectronics | Institution: Tsinghua University, Beijing | Authorization: Form JW201 (CSC Type A Scholarship)

I am submitting this academic study plan for the X1 National Study Visa at Tsinghua University's School of Integrated Circuits. Having completed my Bachelor of Science in Electrical Engineering from NUST with a CGPA of 3.88/4.0, my specialized research trajectory focuses on low-power VLSI design and semiconductor packaging.

Why Tsinghua University & China:
China is the global leader in commercial semiconductor manufacturing pipelines and fabless semiconductor architecture. Tsinghua's National Key Laboratory of Micro/Nano Fabrication offers semiconductor fabrication facilities (0.18-micron and FinFET test structures) unavailable in my domestic universities. Under the supervision of Prof. Dr. Liu, my proposed thesis will investigate energy-harvesting edge-AI chip interfaces.

Statutory Compliance & Post-Graduation Return Plan:
1. Scholarship & Financial Solvency: I am the recipient of the Chinese Government Scholarship (CSC Award No. 2026CSC08129), providing 100% tuition waiver, on-campus accommodation, and a monthly living stipend of 3,000 RMB, supplemented by $15,000 USD in personal reserve funds.
2. Verified Documentation: Form JW201, legalized degree apostilles, Foreigner Physical Examination Record, and verified Police Character Certificate are attached.
3. Career Commitment: My home country is establishing its first National Semiconductor Center under the Special Technology Zones Authority (STZA). The STZA has issued an endorsement letter confirming eligibility for a Senior IC Design Engineer vacancy with leading semiconductor incubators upon completion of my Tsinghua master's degree.`,
    },
  },
  italy: {
    name: 'Italy',
    flag: '🇮🇹',
    visaType: 'National Visa Type D (Study / Universitaly Pre-Enrollment)',
    refusalClause: 'Visa Code Art. 21 & CIMEA Statement of Comparability Failure',
    keyChecklist: [
      'Universitaly Portal Pre-Enrollment Summary formally validated by target university',
      'CIMEA Statement of Comparability & Verification or Consular Dichiarazione di Valore (DoV)',
      'Minimum Financial Subsistence (€6,079/yr or €467.65/month liquid funds in bank statement)',
      'Proof of suitable accommodation in Italy for the first semester (lease or hospitality form)',
      'International travel and medical health insurance policy (minimum €30,000 coverage)',
    ],
    riskPoints: [
      'Assuming regional scholarship (DSU) approval guarantees visa without personal liquid funds proof',
      'Subject incompatibility between foreign undergraduate degree and Italian Laurea Magistrale',
      'Failure to prove intention to return to home country upon completion of studies',
    ],
    sampleSop: {
      highRisk: `Motivation Letter for Italian Student Visa:
I want to study Master in Management in Italy because Italy is the center of fashion, pizza, and art. Milan is a dream city with historical monuments and football clubs.

I applied for the DSU regional scholarship which gives free hostel and free food, so I will not need any money. After my studies, I want to travel around Europe and get a job in Milan or Rome to stay permanently in the Schengen zone.`,
      moderateRisk: `Motivation Letter for Master in Architecture at Politecnico di Milano:
I completed my Bachelor of Architecture and wish to specialize in Sustainable Heritage Architecture. Italy is globally renowned for architectural preservation and design excellence.

Politecnico di Milano offers specialized studios that bridge historical preservation with modern energy-efficient techniques. My Universitaly application has been accepted. My family will financially support my living costs during my stay in Milan, and I intend to return to establish my architectural practice.`,
      visaReady: `Academic Statement of Motivation & Consular Compliance Document:
Applicant: Maria Santos | Program: Laurea Magistrale in Mechanical Engineering (Automotive) | Institution: Politecnico di Torino | Universitaly Application ID: 2026-IT-91823

I formally submit this Statement of Purpose for the National Long-Stay Visa (Type D - Studio) to undertake the 2-year Laurea Magistrale in Automotive Engineering at Politecnico di Torino. I graduated with a Bachelor of Science in Mechanical Engineering (Magna Cum Laude, GPA 3.82/4.0) with CIMEA Statement of Comparability (Prot. CIMEA/2026/812) confirming direct pedagogical alignment with Italian Level 7 academic requirements.

Why Politecnico di Torino:
Located within the Italian automotive engineering corridor, PoliTo maintains direct collaborative laboratories with the FCA/Stellantis and Brembo testing centers. Specific advanced modules—including 'Vehicle Dynamics Simulation' (01PQR) and 'Electric Powertrain Architecture' (02STU)—provide software access to VI-grade and IPG CarMaker environments inaccessible in domestic engineering institutions.

Consular Compliance & Return Ties:
1. Proof of Financial Subsistence: My personal bank account holds verified liquid funds of €14,200 (exceeding the statutory ministerial requirement of €6,079/academic year) alongside a notarized parental sponsorship and €30,000 Schengen health insurance.
2. Accommodation: Confirmed 12-month student residence contract at Campus San Paolo (Torino) appended.
3. Return Commitment: The domestic electric vehicle transition in my home country is backed by a $1.2B industrial mandate. A tier-1 automotive manufacturing firm has provided a pre-employment letter of interest for an EV Powertrain Development Lead position commanding a 2.5x salary premium upon my return.`,
    },
  },
  france: {
    name: 'France',
    flag: '🇫🇷',
    visaType: 'Long-Stay Visa (VLS-TS / Études en France - EEF)',
    refusalClause: 'CESEDA Article L421-7 & Campus France Academic Incoherence',
    keyChecklist: [
      'Campus France "Études en France" (EEF) authentication and pedagogical interview clearance',
      'Official Attestation of Pre-Registration from French Ministry of Higher Education accredited institution',
      'Proof of Minimum Financial Resources (€615/month, minimum €7,380 for academic year)',
      'Proof of Accommodation for first 3 months (CROUS student housing or host declaration)',
      'Academic progression showing direct pedagogical continuity with undergraduate specialization',
    ],
    riskPoints: [
      'Failure during Campus France interview to articulate course structure and professional project',
      'Unjustified changes in academic trajectory without career validation',
      'Unsubstantiated French or English language proficiency credentials',
    ],
    sampleSop: {
      highRisk: `Statement of Purpose for France Student Visa:
I am going to Paris to study Master in Luxury Brand Management. France is the fashion capital of the world with the Eiffel Tower and luxury brands like Louis Vuitton and Chanel.

I want to live in Paris, work part-time in boutiques, and after my degree, find a sponsor to give me a work visa so I can remain in France as a permanent resident. My relatives in France will let me stay with them.`,
      moderateRisk: `Statement of Purpose for Master in Artificial Intelligence at Sorbonne University:
I hold a Bachelor of Science in Computer Science and wish to advance into artificial intelligence research. France has made substantial investments in AI centers and European research networks.

Sorbonne University offers a rigorous curriculum covering deep learning, computer vision, and NLP. I have completed my Campus France interview and prepared the required €7,380 living expense guarantee. This degree will enable me to become an expert AI developer upon returning home.`,
      visaReady: `Academic Purpose & Professional Project (Projet d'Études et Professionnel):
Applicant: Ahmed Al-Mansoor | Program: Master of Science in Aerospace Systems Navigation | Institution: ISAE-SUPAERO, Toulouse | Campus France ID: FR26-09281

I submit this academic purpose statement in support of my VLS-TS Long-Stay Student Visa application to attend the Master of Science in Aerospace Systems Navigation at ISAE-SUPAERO in Toulouse. I hold a Bachelor of Engineering in Aerospace Engineering (First-Class Honours, GPA 3.91/4.0), and successfully passed my Campus France EEF interview with formal validation from the academic advisory board.

Pedagogical & Institutional Rationale:
Toulouse is the European capital of aeronautics and space. ISAE-SUPAERO’s Space Systems Design Laboratory and flight simulator complexes provide direct practical exposure to GNSS receiver design, satellite orbital mechanics, and autonomous flight guidance (Modules AS-501 and AS-508). These specialized experimental wind tunnels and micro-satellite cleanrooms do not exist in domestic Middle Eastern universities.

Financial Guarantee & Statutory Consular Compliance:
1. Financial Solvency: An Irrevocable Banking Certificate (Attestation de Virement Irrévocable - AVI) of €9,600 has been established via Studely, guaranteeing monthly disbursements of €800 (surpassing the French statutory requirement of €615/month). Tuition fees are paid in full.
2. Accommodation: Guaranteed single-room lodging at the ISAE-SUPAERO campus residence in Toulouse confirmed.
3. Defined Professional Career Trajectory: My home nation’s National Space Agency is actively deploying communication satellite constellations. The agency has issued a sponsorship letter guaranteeing immediate recruitment into the Flight Dynamics & Satellite Operations Directorate upon completion of my master’s degree, with designated compensation beginning at $55,000 USD/annum.`,
    },
  },
  malaysia: {
    name: 'Malaysia',
    flag: '🇲🇾',
    visaType: 'Student Pass (eVAL - Visa Approval Letter & EMGS)',
    refusalClause: 'Immigration Department of Malaysia (JIM) & EMGS Screening Rejection',
    keyChecklist: [
      'Electronic Visa Approval Letter (eVAL) issued by Immigration Department of Malaysia via EMGS',
      'Offer Letter from Malaysian Qualifications Agency (MQA) accredited university',
      'Pre-Arrival Medical Screening Form endorsed by registered clinic',
      'Financial solvency statement and Personal Bond lodging',
      'Valid English language proficiency certificate meeting EMGS faculty threshold',
    ],
    riskPoints: [
      'Applying through unaccredited private training institutions without MQA validation',
      'Discrepancies in birth certificates, national identity documents, or name spellings',
      'Previous immigration overstays or visa rejections within Southeast Asia',
    ],
    sampleSop: {
      highRisk: `Study Plan for Malaysia Student Visa:
I want to study diploma in hospitality in Kuala Lumpur. Malaysia is a tropical country with affordable living and twin towers.

I want to work while studying to cover my expenses and explore business options in Southeast Asia. I hope to use this student pass to travel easily in ASEAN countries and look for permanent job opportunities.`,
      moderateRisk: `Statement of Purpose for Master of Computer Science at Universiti Malaya (UM):
I completed my Bachelor in Software Engineering and wish to deepen my understanding of cyber security and cloud computing. Malaysia is a leading technological and educational hub in Southeast Asia with QS top-ranked universities.

Universiti Malaya offers an MQA-accredited master program with experienced faculty and modern computing labs. My EMGS application is approved and my family has provided the required financial guarantees for my tuition and living costs. I look forward to completing my degree and returning to advance my career.`,
      visaReady: `Academic Purpose & Educational Intent Statement:
Applicant: Farhan Qureshi | Program: Master of Science in Petroleum Geoscience | Institution: Universiti Teknologi PETRONAS (UTP) | EMGS Application Ref: EMGS/2026/89412

I am submitting this Academic Purpose Statement in support of my Single Entry Visa (SEV) and Student Pass application for the Master of Science in Petroleum Geoscience at Universiti Teknologi PETRONAS (UTP) under approved EMGS reference EMGS/2026/89412. I graduated with a Bachelor of Science in Geological Engineering (CGPA 3.76/4.0), followed by 18 months of service as an Exploration Wellsite Geologist at Oil & Gas Development Co. Ltd (service certificate enclosed).

Academic Justification for Malaysia & UTP:
UTP is globally ranked #20 in Petroleum Engineering (QS World Subject Rankings) and is directly integrated with PETRONAS research facilities. The university’s Center of Excellence in Subsurface Seismic Imaging provides practical hands-on seismic modeling using Petrel and Techlog software suites integrated into deepwater exploration modules (GEO-611 & GEO-615). Equivalent high-pressure, high-temperature (HPHT) basin simulation labs are inaccessible domestically.

Immigration Compliance & Socio-Economic Home Ties:
1. Statutory Clearance: My Electronic Visa Approval Letter (eVAL) has been officially issued by the Immigration Department of Malaysia (JIM) following EMGS vetting, and my Pre-Arrival Medical Examination is verified disease-free.
2. Financial Security: Complete first-year tuition ($12,400 USD) and living maintenance ($9,800 USD) are deposited in an authorized international bank account, with personal bond guarantee lodged.
3. Career Continuity: My previous domestic energy employer has formally endorsed my leave of absence and signed a retention agreement appointing me as Senior Subsurface Reservoir Modeling Specialist upon receipt of my UTP postgraduate qualification, with a contractual salary increase of 85%.`,
    },
  },
};

