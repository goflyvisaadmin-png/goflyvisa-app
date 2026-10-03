import React, { useState } from 'react';
import {
  Compass,
  GraduationCap,
  Building2,
  Mic,
  FileCheck,
  MailCheck,
  Landmark,
  Scale,
  MessageSquare,
  Plane,
  CreditCard,
  BookOpen,
  MapPin,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';

interface StepItem {
  number: number;
  phase: 'pre_admission' | 'visa_prep' | 'travel' | 'post_arrival';
  title: string;
  badge: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  requirements: string[];
  goflySupport: string;
  statusHighlight: string;
}

const ROADMAP_STEPS: StepItem[] = [
  {
    number: 1,
    phase: 'pre_admission',
    title: 'Selection of Course & Major',
    badge: 'Phase 1 • Pre-Admission',
    tagline: 'Strategic Academic Trajectory Alignment',
    description:
      'Identifying the optimal field of study (STEM, Business, Engineering, AI, Healthcare) that aligns with your prior undergraduate background and guarantees clear economic return on investment (ROI).',
    icon: <Compass className="w-5 h-5 text-blue-400" />,
    requirements: [
      'Evaluate ECTS module continuity & credit matching',
      'Analyze host country labor shortage occupational lists',
      'Prevent career mismatch red flags that trigger visa refusals',
    ],
    goflySupport:
      'GoFlyVisa AI assesses your prior degree subjects against host country requirements to eliminate "random major switch" refusal hazards.',
    statusHighlight: 'Critical for Visa Officer Approval',
  },
  {
    number: 2,
    phase: 'pre_admission',
    title: 'Shortlisting Universities',
    badge: 'Phase 1 • Pre-Admission',
    tagline: 'Eligibility Matching & Budget Optimization',
    description:
      'Selecting accredited public and tier-1 research institutions across Germany (TU9 & Uni-Assist), UK (Russell Group), Canada (Designated Learning Institutions - DLIs), and USA (SEVP-certified campuses).',
    icon: <Building2 className="w-5 h-5 text-indigo-400" />,
    requirements: [
      'Compare tuition fee structures vs fully funded public options',
      'Confirm university accreditation for post-graduation work rights',
      'Verify GPA conversion (German Bavarian formula / US 4.0 scale)',
    ],
    goflySupport:
      'Direct institutional matching based on your academic profile, English scores, and financial sponsorship capabilities.',
    statusHighlight: 'Zero Unaccredited College Risks',
  },
  {
    number: 3,
    phase: 'pre_admission',
    title: 'IELTS / Language Examination',
    badge: 'Phase 1 • Pre-Admission',
    tagline: 'Locking In Your Band 7.0+ Minimum Score',
    description:
      'Mastering official speaking and writing criteria to clear university language requirements and embassy minimum English proficiency thresholds.',
    icon: <Mic className="w-5 h-5 text-emerald-400" />,
    requirements: [
      'Achieve minimum 6.5–7.5 overall band with no band under 6.0',
      'Eliminate speech hesitation markers ("um", "like") and grammar slips',
      'Produce cohesive academic Writing Task 1 & 2 responses',
    ],
    goflySupport:
      'GoFlyVisa Module 1: Browser-based live speaking simulator with animated waveform, filler diagnostics, and Band 8.5+ native speaker rewrites.',
    statusHighlight: 'Powered by GoFlyVisa Module 1',
  },
  {
    number: 4,
    phase: 'visa_prep',
    title: 'SOP & Letter of Explanation Drafting',
    badge: 'Phase 2 • Admissions & Visa',
    tagline: 'Eradicating Dual-Intent & Refusal Traps',
    description:
      'Authoring a high-impact Statement of Purpose that convinces admissions committees and satisfies statutory visa consular criteria (German AufenthG §16b, UKVI Appendix ST, Canadian IRCC 216(1), US INA 214(b)).',
    icon: <FileCheck className="w-5 h-5 text-amber-400" />,
    requirements: [
      'Demonstrate concrete post-study career trajectory back home',
      'Justify specific university professors, laboratories, and curriculum',
      'Account for all academic gaps with verified technical activities',
    ],
    goflySupport:
      'GoFlyVisa Module 2: Instant 0–100% Visa Refusal Risk Meter, line-by-line red flag audit, and humanized academic rewrite.',
    statusHighlight: 'Powered by GoFlyVisa Module 2',
  },
  {
    number: 5,
    phase: 'visa_prep',
    title: 'University Offer Letter / CAS / I-20',
    badge: 'Phase 2 • Admissions & Visa',
    tagline: 'Securing Official Unconditional Admission Documents',
    description:
      'Receiving your formal Admission Certificate: German Zulassungsbescheid, UK Confirmation of Acceptance for Studies (CAS), Canadian Letter of Acceptance (LOA) & PAL, or US Form I-20 with SEVIS ID.',
    icon: <MailCheck className="w-5 h-5 text-teal-400" />,
    requirements: [
      'Verify matching passport details and course start/end dates',
      'Pay initial seat deposit or first semester tuition installment',
      'Collect Provincial Attestation Letter (PAL) where required (Canada)',
    ],
    goflySupport:
      'Document consistency audit ensuring your SOP matches the exact course codes on your CAS/I-20 to avoid embassy discrepancies.',
    statusHighlight: 'Official Institutional Seal',
  },
  {
    number: 6,
    phase: 'visa_prep',
    title: 'Financial Solvency & Study Visa Application',
    badge: 'Phase 2 • Admissions & Visa',
    tagline: 'Blocked Accounts, GIC, & Embassy Filing',
    description:
      'Funding required escrow accounts (€11,904 German Sperrkonto, $20,635 CAD Scotiabank GIC, US liquid sponsor verification) and submitting national visa filings (VIDEX, UKVI, IRCC Portal, DS-160).',
    icon: <Landmark className="w-5 h-5 text-purple-400" />,
    requirements: [
      'Provide 28-day consecutive bank statements or blocked account certificates',
      'Schedule VFS Global, TLScontact, or US Embassy biometrics slot',
      'Assemble source of funds affidavits and tax return verification',
    ],
    goflySupport:
      'Pre-submission visa application checklist verification and financial explanation letter generation.',
    statusHighlight: 'Zero Financial Ambiguity',
  },
  {
    number: 7,
    phase: 'visa_prep',
    title: 'Embassy Consular Visa Interview',
    badge: 'Phase 2 • Admissions & Visa',
    tagline: 'Passing Consular Cross-Examination with Confidence',
    description:
      'Facing mandatory or credibility visa officer interviews. Consular officers test whether you are a bona fide student who will depart after graduation or an intending immigrant.',
    icon: <MessageSquare className="w-5 h-5 text-rose-400" />,
    requirements: [
      'Answer why you selected this institution over domestic options',
      'Defend family and financial ties to your home country',
      'Articulate exact course syllabus without memorized generic lines',
    ],
    goflySupport:
      'Consular Officer Mock Flashcards: Tailored interview grilling based on the exact weak points diagnosed in your SOP.',
    statusHighlight: 'Conquer the Officer Grilling',
  },
  {
    number: 8,
    phase: 'travel',
    title: 'Ticket Booking & Take-Off ("GoFly")',
    badge: 'Phase 3 • Departure & Flight',
    tagline: 'Student Airfares, Baggage Allowances & Travel Health',
    description:
      'Booking your international flights with student luggage discounts (often 40kg–46kg checked allowances), arranging mandatory travel insurance, and organizing foreign exchange currency cards.',
    icon: <Plane className="w-5 h-5 text-cyan-400" />,
    requirements: [
      'Secure student transit visa if transiting through Europe/Middle East',
      'Carry sealed university documents and visa approval letters in cabin baggage',
      'Activate foreign currency travel card with emergency cash buffers',
    ],
    goflySupport:
      'Pre-departure airport boarding checklist and port-of-entry immigration border clearance guides.',
    statusHighlight: 'Touchdown Ready',
  },
  {
    number: 9,
    phase: 'post_arrival',
    title: 'Tuition Fee Payments & Student Banking Setup',
    badge: 'Phase 4 • After Reaching Host Nation',
    tagline: 'Activating Blocked Funds & Remitting Semester Dues',
    description:
      'Setting up your local checking account (N26/Sparkasse in Germany, Monzo/Barclays in UK, CIBC/Scotiabank in Canada, Chase in USA) and activating monthly blocked account disbursements for rent and living expenses.',
    icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
    requirements: [
      'Complete in-person or video ID verification to unlock monthly stipends',
      'Execute official university semester social fee/tuition wire transfer',
      'Avoid high international wire exchange margins and third-party fees',
    ],
    goflySupport:
      'Step-by-step guidance on zero-fee international student bank accounts and blocked account disbursement protocols.',
    statusHighlight: 'GoFlyVisa Post-Arrival Support',
  },
  {
    number: 10,
    phase: 'post_arrival',
    title: 'Campus Enrollment & Major / Course Adjustments',
    badge: 'Phase 4 • After Reaching Host Nation',
    tagline: 'Finalizing Timetables, Minors, and Professor Consultations',
    description:
      'Completing physical university matriculation, getting your Student ID card, confirming your exact major specialization, and navigating course add/drop periods with faculty advisors.',
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    requirements: [
      'Present original degree certificates and apostilled transcripts to registrar',
      'Register for mandatory core modules before classroom capacity caps',
      'Attend international student orientation and laboratory safety inductions',
    ],
    goflySupport:
      'Academic syllabus navigation tools and guidance on selecting professors aligned with your post-graduation career goals.',
    statusHighlight: 'GoFlyVisa Post-Arrival Support',
  },
  {
    number: 11,
    phase: 'post_arrival',
    title: 'City Registration & Residence Permit (Biometrics)',
    badge: 'Phase 4 • After Reaching Host Nation',
    tagline: 'Converting Entry Visa to Formal Resident Permit',
    description:
      'Completing municipal address registration (German Anmeldung, UK BRP/eVisa biometrics, Canadian airport Study Permit verification, US SEVIS address update) and activating statutory student healthcare (TK, NHS, MSP).',
    icon: <MapPin className="w-5 h-5 text-amber-400" />,
    requirements: [
      'Submit landlord housing confirmation certificate (Wohnungsgeberbestätigung)',
      'Attend foreigner authority (Ausländerbehörde/UKVI) resident permit interview',
      'Obtain national tax identification number for employment',
    ],
    goflySupport:
      'City registration document preparation templates and statutory health insurance onboarding checklists.',
    statusHighlight: 'GoFlyVisa Post-Arrival Support',
  },
  {
    number: 12,
    phase: 'post_arrival',
    title: 'Part-Time Work Rights & Internship Compliance',
    badge: 'Phase 4 • After Reaching Host Nation',
    tagline: '20-Hours/Week Legal Work, Tax IDs & Corporate Placements',
    description:
      'Exercising your legal student employment rights (up to 20 hrs/week during semesters, full-time during vacations), securing campus research assistantships, and complying with national labor guidelines.',
    icon: <Briefcase className="w-5 h-5 text-purple-400" />,
    requirements: [
      'Verify student visa work endorsement conditions on your permit',
      'Apply for National Insurance Number (NINo in UK) or Social Insurance Number (SIN in Canada)',
      'Structure mandatory curricular internships (Pflichtpraktikum / Co-op / CPT)',
    ],
    goflySupport:
      'Curricular internship compliance guidelines and CV formatting tailored to European, British, Canadian, and American employer expectations.',
    statusHighlight: 'GoFlyVisa Post-Arrival Support',
  },
];

export const StudyVisaRoadmap: React.FC<{
  onLaunchIelts: () => void;
  onLaunchSop: () => void;
}> = ({ onLaunchIelts, onLaunchSop }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pre_admission' | 'visa_prep' | 'travel' | 'post_arrival'>('all');
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const filteredSteps = ROADMAP_STEPS.filter(
    (step) => activeFilter === 'all' || step.phase === activeFilter
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-inner">
          <HeartHandshake className="w-4 h-4 text-emerald-400" />
          <span>Full Lifecycle Study-Abroad Guidance</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Your End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Study Visa Roadmap</span>
        </h2>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          From selecting the right course and university to booking your flight and settling into campus life — <strong className="text-white">GoFlyVisa guides you through each and every step, even after you land abroad.</strong>
        </p>
      </div>

      {/* Lifecycle Highlights Banner */}
      <div className="bg-gradient-to-r from-[#0A1128] via-slate-900 to-[#0A1128] border border-slate-800 rounded-2xl p-6 mb-10 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Before Applying</div>
            <div className="text-sm font-bold text-white mt-1">Course & Major Selection</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">IELTS Band 7.0+ AI Training</div>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">During Admission</div>
            <div className="text-sm font-bold text-white mt-1">University Letter & SOP</div>
            <div className="text-[11px] text-blue-400 mt-0.5">Visa Refusal Risk Auditing</div>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visa & Take-Off</div>
            <div className="text-sm font-bold text-white mt-1">Interview Drill & Flight</div>
            <div className="text-[11px] text-amber-400 mt-0.5">Student Fares & Departure</div>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">After Reaching</div>
            <div className="text-sm font-bold text-white mt-1">Fees, Banking & Major</div>
            <div className="text-[11px] text-purple-400 mt-0.5">Residence Permit & Work</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          All 12 Journey Steps
        </button>
        <button
          onClick={() => setActiveFilter('pre_admission')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeFilter === 'pre_admission'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          1. Course, University & IELTS
        </button>
        <button
          onClick={() => setActiveFilter('visa_prep')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeFilter === 'visa_prep'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          2. SOP, Admission & Visa Filing
        </button>
        <button
          onClick={() => setActiveFilter('travel')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeFilter === 'travel'
              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          3. Ticket Booking & Flight ("GoFly")
        </button>
        <button
          onClick={() => setActiveFilter('post_arrival')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeFilter === 'post_arrival'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          4. After Reaching (Fees, Bank & Major)
        </button>
      </div>

      {/* Timeline Steps Grid */}
      <div className="space-y-4">
        {filteredSteps.map((step) => {
          const isExpanded = expandedStep === step.number;
          return (
            <div
              key={step.number}
              className={`bg-[#0A1128] border rounded-2xl transition-all overflow-hidden ${
                isExpanded
                  ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div
                onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                className="p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="font-mono text-sm font-black text-emerald-400">
                      #{step.number}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-slate-400 border border-slate-800">
                        {step.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {step.statusHighlight}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">
                      {step.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 shrink-0">
                    {step.icon}
                  </div>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center transition-transform duration-200 text-slate-400 ${
                      isExpanded ? 'rotate-90 text-emerald-400 border-emerald-500/40' : ''
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 animate-in fade-in duration-200">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Key Requirements Checklist */}
                    <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                      <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        <span>Key Action Items & Requirements</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {step.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How GoFlyVisa Empowers You */}
                    <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-900/40">
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>How GoFlyVisa Helps You at This Step</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.goflySupport}
                      </p>

                      {step.number === 3 && (
                        <button
                          onClick={onLaunchIelts}
                          className="mt-3 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                        >
                          <span>Open IELTS Mock Examiner</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {step.number === 4 && (
                        <button
                          onClick={onLaunchSop}
                          className="mt-3 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                        >
                          <span>Open Visa SOP Refusal Auditor</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Post-Arrival Commitment Callout */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-indigo-950/30 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">
              Support That Doesn't Stop At The Airport Gate
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Traditional agents take their commissions and disappear once you get your visa. GoFlyVisa continues supporting you through university tuition payments, bank account unblocking, campus registration, major adjustments, and legal part-time employment setup.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onLaunchIelts}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
          >
            Start IELTS Test
          </button>
          <button
            onClick={onLaunchSop}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            Audit My SOP Now
          </button>
        </div>
      </div>
    </section>
  );
};
