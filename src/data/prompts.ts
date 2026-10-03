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
};
