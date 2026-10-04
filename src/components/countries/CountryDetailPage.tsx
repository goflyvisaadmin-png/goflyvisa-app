import React, { useState, useEffect } from 'react';
import {
  Globe,
  Building2,
  DollarSign,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Clock,
  Printer,
  Copy,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Layers,
  Languages,
  Award,
  Users,
  Home,
  CheckSquare,
  HelpCircle,
  BookmarkCheck,
  ArrowLeft,
  Info,
} from 'lucide-react';
import { TargetCountrySlug } from '../../data/countries/types';
import { getCountryGuide } from '../../data/countries';

interface CountryDetailPageProps {
  slug: TargetCountrySlug;
  onBack: () => void;
  onSelectCountry: (slug: TargetCountrySlug) => void;
}

export const CountryDetailPage: React.FC<CountryDetailPageProps> = ({
  slug,
  onBack,
  onSelectCountry,
}) => {
  const guide = getCountryGuide(slug);
  const [activeSection, setActiveSection] = useState<string>('quick-facts');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Sections navigation list
  const SECTIONS = [
    { id: 'quick-facts', label: '1. Quick Facts Bar', icon: CompassIcon },
    { id: 'visa-types', label: '2. Visa Categories', icon: FileCheck },
    { id: 'how-to-apply', label: '3. Step-by-Step Guide', icon: Layers },
    { id: 'finances', label: '4. Money & Proof of Funds', icon: DollarSign },
    { id: 'admissions', label: '5. Admissions & Equivalence', icon: GraduationCap },
    { id: 'language', label: '6. English & Local Language', icon: Languages },
    { id: 'universities', label: '7. Top Universities', icon: Building2 },
    { id: 'scholarships', label: '8. Scholarships', icon: Award },
    { id: 'work-rights', label: '9. Work Rights & Wages', icon: Briefcase },
    { id: 'refusal-reasons', label: '10. Rejection Traps & Appeal', icon: AlertTriangle },
    { id: 'post-study', label: '11. Post-Study Work & PR', icon: BookmarkCheck },
    { id: 'dependents', label: '12. Bringing Family', icon: Users },
    { id: 'policy-timeline', label: '13. Recent Law Changes', icon: Clock },
    { id: 'student-living', label: '14. Living & Accommodation', icon: Home },
    { id: 'arrival-checklist', label: '15. After-Arrival Tasks', icon: CheckSquare },
    { id: 'faqs', label: '16. Frequently Asked Questions', icon: HelpCircle },
    { id: 'sources', label: '17. Official Sources & Portals', icon: ExternalLink },
  ];

  function CompassIcon(props: any) {
    return <Globe {...props} />;
  }

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}/countries/${slug}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(sectionId);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const toggleDocChecked = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
          <Info className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Guide Under Construction</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
          The full factual guide for this destination is scheduled for release. Please inspect the completed <strong>Germany</strong> guide first.
        </p>
        <button
          onClick={() => onSelectCountry('germany')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg"
        >
          View Germany Guide →
        </button>
      </div>
    );
  }

  // Safe fallback extractors across both data schemas
  const heroTagline = guide.heroTagline || guide.tagline || `Complete Student Visa & University Admissions Guide for ${guide.countryName}`;
  const oneLineSummary = guide.oneLineSummary || guide.metaDescription || '';
  const lastUpdated = guide.lastUpdatedDate || guide.lastVerified || '2026-10-04';
  const officialPortal = guide.officialPortalUrl || guide.allOfficialSources?.[0]?.url || 'https://www.google.com';

  // Home Country / FX
  const pkContext: any = guide.pakistanContext || guide.defaultHomeCountry || {};
  const exchangeRate = pkContext.exchangeRateToDestCurrency ?? pkContext.exchangeRateToDestinationCurrency ?? 1;
  const exchangeDate = pkContext.exchangeRateDate || '2026-10-04';
  const curr = guide.quickFacts?.currency || { code: 'USD', symbol: '$', name: 'Dollar' };

  // Quick Facts
  const qf: any = guide.quickFacts || {};
  const capital = qf.capital || 'Capital';
  const officialLanguages = Array.isArray(qf.officialLanguages) ? qf.officialLanguages.join(', ') : 'English';
  const visaProcessingTime = qf.visaProcessingTimeAverage || qf.visaProcessingTimeWeeks || '4 to 8 weeks';
  const postStudyDuration = qf.postStudyWorkDuration || qf.postStudyWorkPermit?.duration || (guide.postStudyImmigration as any)?.jobSeekingPermitDuration || '18 to 36 Months';
  const partTimeHours = qf.partTimeWorkHoursTerm || (qf.partTimeWorkRights ? `${qf.partTimeWorkRights.hoursPerWeek} hrs/week` : '20-24 hrs/week');

  // Tuition
  let tuitionDisplay = 'Free / Low-Cost';
  let tuitionSubtext = '';
  if (qf.avgTuitionPerYear) {
    tuitionDisplay = `${curr.symbol}${qf.avgTuitionPerYear.minLocal?.toLocaleString()} – ${curr.symbol}${qf.avgTuitionPerYear.maxLocal?.toLocaleString()} / yr`;
    tuitionSubtext = `≈ PKR ${qf.avgTuitionPerYear.approxPkrMin?.toLocaleString()} – ${qf.avgTuitionPerYear.approxPkrMax?.toLocaleString()}`;
  } else if (qf.avgAnnualTuition) {
    tuitionDisplay = qf.avgAnnualTuition.amountDomesticCurrency === 0 ? `${curr.symbol}0 (Tuition-Free)` : `${curr.symbol}${qf.avgAnnualTuition.amountDomesticCurrency?.toLocaleString()} / yr`;
    tuitionSubtext = qf.avgAnnualTuition.description || `≈ PKR ${qf.avgAnnualTuition.approxPKR?.toLocaleString()}`;
  }

  // Monthly Living
  let livingDisplay = `${curr.symbol}800 – ${curr.symbol}1,500 / mo`;
  let livingSubtext = '';
  if (qf.monthlyLivingCost) {
    if (qf.monthlyLivingCost.minLocal !== undefined) {
      livingDisplay = `${curr.symbol}${qf.monthlyLivingCost.minLocal?.toLocaleString()} – ${curr.symbol}${qf.monthlyLivingCost.maxLocal?.toLocaleString()} / mo`;
      livingSubtext = `≈ PKR ${qf.monthlyLivingCost.approxPkrMin?.toLocaleString()} – ${qf.monthlyLivingCost.approxPkrMax?.toLocaleString()}`;
    } else if (qf.monthlyLivingCost.amountDomesticCurrency !== undefined) {
      livingDisplay = `${curr.symbol}${qf.monthlyLivingCost.amountDomesticCurrency?.toLocaleString()} / mo`;
      const approxPkr = qf.monthlyLivingCost.approxPKR || Math.round(qf.monthlyLivingCost.amountDomesticCurrency * exchangeRate);
      livingSubtext = `≈ PKR ${approxPkr.toLocaleString()}`;
    }
  }

  // Intakes
  let intakesDisplay = 'Fall & Spring Semesters';
  let intakesSubtext = 'Deadlines vary by faculty';
  if (Array.isArray(qf.intakes) && qf.intakes.length > 0) {
    intakesDisplay = qf.intakes.slice(0, 2).map((i: any) => i.name || i.months || i).join(' & ');
    intakesSubtext = qf.intakes[0]?.notes || qf.intakes[0]?.months || 'Primary Intake';
  } else if (qf.intakes && typeof qf.intakes === 'object') {
    intakesDisplay = `${qf.intakes.primary || 'Primary Intake'} & ${qf.intakes.secondary || 'Secondary Intake'}`;
    intakesSubtext = `Deadlines: ${qf.intakes.deadlines || 'Check university'}`;
  }

  // Sections
  const visaTypes: any[] = guide.visaTypes || [];
  const appGuide: any = guide.applicationGuide || (guide as any).howToApply || { portalOverview: '', steps: [], documentChecklist: [] };
  const appSteps: any[] = appGuide.steps || [];
  const docChecklist: any[] = appGuide.documentChecklist || [];
  const finReq: any = guide.financialRequirements || (guide as any).money || {};
  const minAmount: any = finReq.officialMinimumAmount || {};
  const minAmtVal = minAmount.amount ?? minAmount.minLocal ?? 0;
  const minAmtPkr = minAmount.approxPKR ?? minAmount.approxPkrMin ?? Math.round(minAmtVal * exchangeRate);
  const approvedBanks: string[] = finReq.approvedProvidersOrBanks || finReq.acceptedFinancialInstitutions || [];
  const healthIns: any = finReq.healthInsuranceDetails || {};

  const admCrit: any = guide.admissionCriteria || {};
  const bachReq: any = admCrit.bachelorRequirements || {};
  const mastReq: any = admCrit.masterRequirements || {};
  const evalPortals: any[] = admCrit.evaluationPortals || admCrit.applicationPortals || [];

  const langReq: any = guide.languageRequirements || {};
  const engReq: any = langReq.englishRequirements || {};
  const localLang: any = langReq.localLanguageRequirements || {};

  const universities: any[] = guide.topUniversities || [];
  const scholarships: any[] = guide.scholarships || [];
  const workRights: any = guide.workRights || {};
  const refusalReasons: any[] = guide.refusalReasons || (guide as any).rejectionReasons || [];
  const postStudy: any = guide.postStudyImmigration || (guide as any).afterGraduation || {};
  const dependentRules: any = guide.dependentRules || (guide as any).bringingFamily || {};
  const recentPolicyTimeline: any[] = guide.recentPolicyTimeline || (guide as any).recentChanges || [];
  const studentLiving: any = guide.studentLiving || (guide as any).livingThere || {};
  const arrivalChecklist: any[] = guide.arrivalChecklist || (guide as any).afterArrivalChecklist || [];
  const faqs: any[] = guide.faqs || [];
  const allOfficialSources: any[] = guide.allOfficialSources || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/60 print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>All Study Destinations</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
            title="Print or Save this guide as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span>Print / Save PDF</span>
          </button>

          <a
            href={officialPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Official Government Portal</span>
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-4xl sm:text-5xl">{guide.flagEmoji}</span>
              <div className="ml-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Study in {guide.countryName}
                  </h1>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    {guide.countryCode}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-1">
                  <span>Last Fact-Verified:</span>
                  <span className="text-emerald-400 font-bold">{lastUpdated}</span>
                  <span>•</span>
                  <span>Target: Pakistani Students</span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-semibold text-slate-200 mt-2 leading-snug">
              {heroTagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              {oneLineSummary}
            </p>
          </div>

          {/* Quick Stat Pill Widget */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 min-w-[240px] shrink-0 shadow-inner">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Tuition Standard:</span>
              <span className="text-emerald-400 font-bold">{tuitionDisplay}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Post-Study Work:</span>
              <span className="text-amber-400 font-bold">{postStudyDuration.split(' ')[0]} {postStudyDuration.split(' ')[1] || 'Stay'}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Work Limit:</span>
              <span className="text-slate-200 font-bold">{partTimeHours.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">PR / Settlement:</span>
              <span className="text-blue-400 font-bold">{postStudy.permanentResidencyTimeline || postStudy.prPathwayDuration || '2–5 Years'}</span>
            </div>
          </div>
        </div>

        {/* Official Disclaimer Alert */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-amber-300/90 bg-amber-500/5 p-3 rounded-xl border border-amber-500/20">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-300">Statutory Notice:</span> Immigration rules, currency exchange rates, and visa fees change often. Always confirm your application packet directly with the{' '}
            <a
              href={officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline font-semibold hover:text-white"
            >
              official diplomatic missions and visa portals for {guide.countryName}
            </a>{' '}
            prior to booking biometric appointments.
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout (Sticky TOC + Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Table of Contents (Desktop 3 Cols) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-20 space-y-4 print:hidden">
          <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2 flex items-center justify-between">
              <span>Table of Contents</span>
              <span className="text-[10px] text-emerald-400 font-mono">17 Sections</span>
            </h3>
            <nav className="space-y-1 text-xs">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                const Icon = sec.icon;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                      <span className="truncate">{sec.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3 h-3 text-blue-400 shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Helpline Box */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 space-y-2">
            <div className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Embassy & VAC Presence</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong>Diplomatic Missions:</strong> Islamabad & Karachi.<br />
              <strong>VAC Centres:</strong> VFS Global / Gerry&apos;s / TLScontact / BLS in Islamabad, Lahore, Karachi.
            </p>
          </div>
        </div>

        {/* Right Main Content (9 Cols) */}
        <div className="lg:col-span-9 space-y-12">
          {/* ================================================================= */}
          {/* Section 1: Quick Facts Bar */}
          {/* ================================================================= */}
          <section id="quick-facts" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">1. Quick Facts Bar</h2>
              </div>
              <button
                onClick={() => handleCopyLink('quick-facts')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
                title="Copy Section Link"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'quick-facts' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Capital & Official Language</span>
                <div className="text-sm font-bold text-white mt-1">{capital}</div>
                <div className="text-xs text-slate-400">{officialLanguages}</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Currency & Conversion</span>
                <div className="text-sm font-bold text-white mt-1">
                  {curr.code} ({curr.symbol})
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  1 {curr.code} ≈ {exchangeRate} PKR ({exchangeDate})
                </div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Primary Semesters / Intakes</span>
                <div className="text-xs font-semibold text-white mt-1">{intakesDisplay}</div>
                <div className="text-[11px] text-slate-400">{intakesSubtext}</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Average Annual Tuition</span>
                <div className="text-sm font-bold text-emerald-400 mt-1">{tuitionDisplay}</div>
                <div className="text-[11px] text-slate-400">{tuitionSubtext}</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Monthly Living Cost</span>
                <div className="text-sm font-bold text-white mt-1">{livingDisplay}</div>
                <div className="text-xs text-slate-400 font-mono">{livingSubtext}</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Post-Study Work Permit</span>
                <div className="text-sm font-bold text-amber-400 mt-1">{postStudyDuration}</div>
                <div className="text-[11px] text-slate-400">Work rights for qualifying graduates</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white">Consular Processing Timeline: </span>
              {visaProcessingTime}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 2: Visa Types */}
          {/* ================================================================= */}
          <section id="visa-types" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">2. Visa Categories</h2>
              </div>
              <button
                onClick={() => handleCopyLink('visa-types')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'visa-types' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {visaTypes.map((visa, i) => {
                const category = visa.category || visa.subCategory || 'Student Visa';
                const feeAmt = visa.feeDomesticCurrency ?? visa.feeLocal ?? 0;
                const feePkr = visa.feePKR ?? visa.approxFeePkr ?? Math.round(feeAmt * exchangeRate);
                const elList = Array.isArray(visa.eligibility) ? visa.eligibility : visa.eligibilitySummary ? [visa.eligibilitySummary] : [];
                const workInfo = visa.workDetails || visa.workRights;

                return (
                  <div key={visa.id || i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                      <div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {category.toUpperCase()}
                        </span>
                        <h3 className="text-base font-bold text-white mt-1">
                          {visa.officialName}
                        </h3>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xs font-mono text-emerald-400 font-bold">
                          Fee: {curr.symbol}{feeAmt.toLocaleString()} (≈ {feePkr.toLocaleString()} PKR)
                        </div>
                        <div className="text-[11px] text-slate-400">Validity: {visa.validity}</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {visa.purpose}
                    </p>

                    {elList.length > 0 && (
                      <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 text-xs">
                        <span className="font-semibold text-slate-300 block mb-1">Key Eligibility Criteria:</span>
                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                          {elList.map((el: string, idx: number) => (
                            <li key={idx}>{el}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {workInfo && (
                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{workInfo}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 3: Step-by-Step Application Guide */}
          {/* ================================================================= */}
          <section id="how-to-apply" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">3. Step-by-Step Application Guide</h2>
              </div>
              <button
                onClick={() => handleCopyLink('how-to-apply')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'how-to-apply' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-blue-400">Pakistan Application Architecture: </span>
              {appGuide.portalOverview || 'Online portal lodgement followed by biometric submission at authorized visa application centres.'}
            </div>

            {/* Stepper */}
            <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-800/80 before:hidden sm:before:block">
              {appSteps.map((st: any, i: number) => {
                const stepNum = st.stepNumber || i + 1;
                return (
                  <div key={stepNum} className="relative sm:pl-12 space-y-2">
                    <div className="hidden sm:flex absolute left-2.5 -translate-x-1/2 top-3 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500 items-center justify-center text-xs font-bold text-blue-400">
                      {stepNum}
                    </div>
                    <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-white">
                          Step {stepNum}: {st.title}
                        </h4>
                        {st.portalUrl && (
                          <a
                            href={st.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
                          >
                            <span>{st.portalName || 'Portal'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                      {st.pakistanSpecificNotes && (
                        <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-2.5 text-[11px] text-amber-300/90">
                          <strong>Pakistan Special Requirement:</strong> {st.pakistanSpecificNotes}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Document Checklist */}
            {docChecklist.length > 0 && (
              <div className="mt-8 bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                      <span>Printable Visa Document Checklist</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Prepare original certificates plus clear photocopies as required.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    {Object.values(checkedDocs).filter(Boolean).length} of {docChecklist.length} Checked
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {docChecklist.map((doc: any, idx: number) => {
                    const docId = doc.id || `doc-${idx}`;
                    const isChecked = !!checkedDocs[docId];
                    return (
                      <div
                        key={docId}
                        onClick={() => toggleDocChecked(docId)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white">{doc.title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{doc.detail || doc.description}</div>
                          <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono text-slate-500">
                            {doc.attestationRequired && doc.attestationRequired !== 'None' && (
                              <span className="text-amber-400 font-semibold">Attestation: {doc.attestationRequired}</span>
                            )}
                            <span>•</span>
                            <span>Copies: {doc.copiesNeeded || 2} sets</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* ================================================================= */}
          {/* Section 4: Money & Proof of Funds */}
          {/* ================================================================= */}
          <section id="finances" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">4. Money & Proof of Funds</h2>
              </div>
              <button
                onClick={() => handleCopyLink('finances')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'finances' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Proof of Funds Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    Statutory Maintenance / Living Funds
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {curr.symbol}{minAmtVal.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    ≈ {minAmtPkr.toLocaleString()} PKR (at 1 {curr.code} = {exchangeRate} PKR)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {minAmount.period || minAmount.notes || 'Required living maintenance funds for 1 academic year.'}
                  </p>
                  {(finReq.note || finReq.sourceOfFundsRules) && (
                    <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      💡 <strong>Financial Rule:</strong> {finReq.note || finReq.sourceOfFundsRules}
                    </div>
                  )}
                </div>

                {/* Approved Providers */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                    Accepted Banking & Financial Proof
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {approvedBanks.map((prov: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{prov}</span>
                      </li>
                    ))}
                  </ul>
                  {healthIns.costPerMonthOrYear && (
                    <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/60">
                      <strong>Health Insurance:</strong> {healthIns.costPerMonthOrYear}{' '}
                      {healthIns.providers && healthIns.providers.length > 0 && `via ${healthIns.providers.join(', ')}`}.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 5: Admissions & Equivalence */}
          {/* ================================================================= */}
          <section id="admissions" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">5. Admissions & Academic Equivalence</h2>
              </div>
              <button
                onClick={() => handleCopyLink('admissions')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'admissions' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* Bachelor Equivalence */}
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Undergraduate Entry (Bachelor)</h3>
                  <span className="text-xs font-mono text-amber-400">Pakistani Intermediate / A-Levels</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {bachReq.localEquivalence || bachReq.academicRequirements || 'Standard 12 years of schooling (HSSC / FSc) or Cambridge A-Levels.'}
                </p>
                {bachReq.attestationSteps && bachReq.attestationSteps.length > 0 && (
                  <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <strong>Attestation Chain:</strong> {bachReq.attestationSteps.join(' → ')}
                  </div>
                )}
              </div>

              {/* Master Equivalence */}
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Postgraduate Entry (Master&apos;s Degree)</h3>
                  <span className="text-xs font-mono text-emerald-400">16-Year Pakistani BS / Hons</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {mastReq.localEquivalence || mastReq.academicRequirements || 'Standard 4-year Bachelor degree (16 years education) recognized by HEC Pakistan.'}
                </p>
                {mastReq.attestationSteps && mastReq.attestationSteps.length > 0 && (
                  <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <strong>Attestation Chain:</strong> {mastReq.attestationSteps.join(' → ')}
                  </div>
                )}
              </div>

              {/* Evaluation Portals */}
              {evalPortals.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {evalPortals.map((p: any, i: number) => (
                    <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs space-y-1.5">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{p.name}</span>
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-slate-400">{p.role}</p>
                      {p.fee && <div className="text-[11px] font-mono text-emerald-400">Fee: {p.fee}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 6: English & Local Language */}
          {/* ================================================================= */}
          <section id="language" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">6. English & Local Language Standards</h2>
              </div>
              <button
                onClick={() => handleCopyLink('language')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'language' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">IELTS Academic</span>
                  <div className="text-xl font-bold text-white mt-1">6.5 Overall</div>
                  <span className="text-[10px] text-slate-500">Min 6.0 in all bands</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">TOEFL iBT</span>
                  <div className="text-xl font-bold text-white mt-1">80–90</div>
                  <span className="text-[10px] text-slate-500">Official ETS Score</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">PTE Academic</span>
                  <div className="text-xl font-bold text-white mt-1">58–65+</div>
                  <span className="text-[10px] text-slate-500">Pearson Academic</span>
                </div>
              </div>

              {/* Critical MOI Warning Banner */}
              <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-4 text-xs text-rose-200 leading-relaxed">
                <div className="font-bold text-rose-400 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>CRITICAL CONSULAR RULE: The MOI (Medium of Instruction) Policy</span>
                </div>
                {engReq.moiConditions || engReq.moiWaiverPolicy || 'Embassy and consular officers require standardized tests (IELTS/TOEFL/PTE). MOI letters from Pakistani universities are frequently rejected by visa officers.'}
              </div>

              {(localLang.studyRequirement || localLang.dailyLifeRequirement) && (
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
                  <span className="font-bold text-white">Local Language Importance:</span>
                  <p className="text-slate-400">{localLang.studyRequirement || localLang.dailyLifeRequirement}</p>
                  {(localLang.postStudyPrImportance || localLang.prRequirement) && (
                    <div className="pt-2 text-[11px] text-blue-400">
                      <strong>Permanent Residency Lever:</strong> {localLang.postStudyPrImportance || localLang.prRequirement}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 7: Top Universities */}
          {/* ================================================================= */}
          <section id="universities" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">7. Top Universities</h2>
              </div>
              <button
                onClick={() => handleCopyLink('universities')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'universities' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universities.map((uni: any, idx: number) => {
                const rankText = uni.ranking?.rank ? `QS #${uni.ranking.rank}` : uni.globalRanking || 'Leading Institution';
                const tuitionVal = uni.estimatedAnnualTuition || uni.annualTuition || 'Standard Fees';
                const progList = uni.strongPrograms || [];

                return (
                  <div key={uni.id || idx} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                          {uni.name}
                        </h3>
                        <div className="text-xs text-slate-400">{uni.city}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {rankText}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-emerald-400">
                      {tuitionVal}
                    </div>

                    {progList.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {progList.map((pr: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                            {pr}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Intl Students: {uni.internationalStudentPercentage || uni.internationalStudentRatio || 'N/A'}</span>
                      {uni.officialWebsite && (
                        <a
                          href={uni.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          <span>Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 8: Scholarships */}
          {/* ================================================================= */}
          <section id="scholarships" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">8. Fully Funded & Merit Scholarships</h2>
              </div>
              <button
                onClick={() => handleCopyLink('scholarships')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'scholarships' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {scholarships.map((sch: any, i: number) => {
                const elCriteria = sch.eligibilityCriteria || [];
                const deadline = sch.pakistanDeadlines || sch.deadlineForPakistanis || 'Annual cycle';
                const link = sch.officialLink || sch.officialApplicationPortal || '#';

                return (
                  <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                      <div>
                        <h3 className="text-sm font-bold text-white">{sch.name}</h3>
                        <div className="text-xs text-slate-400">{sch.awardingBody}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {sch.coverage}
                      </span>
                    </div>

                    {sch.stipendAmount && (
                      <div className="text-xs font-mono text-emerald-400 font-bold">
                        Stipend: {sch.stipendAmount}
                      </div>
                    )}

                    {elCriteria.length > 0 && (
                      <div className="text-xs text-slate-300 space-y-1">
                        <span className="font-semibold text-slate-400">Eligibility:</span>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                          {elCriteria.map((crit: string, idx: number) => (
                            <li key={idx}>{crit}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                      <span>Deadline (Pakistan): <strong>{deadline}</strong></span>
                      {link !== '#' && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                        >
                          <span>Apply on Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 9: Work Rights During Study */}
          {/* ================================================================= */}
          <section id="work-rights" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">9. Work Rights & Hourly Wages</h2>
              </div>
              <button
                onClick={() => handleCopyLink('work-rights')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'work-rights' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">In-Term Work Limit</span>
                  <div className="text-lg font-bold text-emerald-400 mt-1">{partTimeHours}</div>
                  <p className="text-xs text-slate-400 mt-1">Full-time hours permitted during vacation breaks</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Statutory Minimum Wage</span>
                  <div className="text-lg font-bold text-white mt-1">{workRights.statutoryMinimumWage || 'Applicable minimum wage'}</div>
                  <p className="text-xs text-slate-400 mt-1">Skilled or tech roles typically pay above minimum</p>
                </div>
              </div>

              {workRights.statutoryWorkRules && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {workRights.statutoryWorkRules}
                </p>
              )}

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 space-y-1">
                {workRights.averagePartTimeEarningsMonthly && (
                  <div><strong>Average Student Earnings:</strong> {workRights.averagePartTimeEarningsMonthly}</div>
                )}
                {workRights.taxExemptionLimits && (
                  <div><strong>Tax Rules:</strong> {workRights.taxExemptionLimits}</div>
                )}
                <div className="text-rose-400 font-semibold">⚠️ Working beyond statutory hourly limits can lead to visa cancellation.</div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 10: Rejection Traps & Appeal Process */}
          {/* ================================================================= */}
          <section id="refusal-reasons" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">10. Visa Refusal Traps & Appeal Process</h2>
              </div>
              <button
                onClick={() => handleCopyLink('refusal-reasons')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'refusal-reasons' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {refusalReasons.map((ref: any, i: number) => {
                const title = ref.reasonTitle || ref.category || `Refusal Reason ${i + 1}`;
                const preventList = ref.preventativeMeasures || ref.avoidanceTips || [];
                const remedy = ref.remedyProcess || 'Administrative Review / Re-application';
                const timeline = ref.remedyTimeline || '14–30 days';

                return (
                  <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center justify-center text-xs">
                          {i + 1}
                        </span>
                        <span>{title}</span>
                      </h3>
                      {ref.statutoryClause && (
                        <span className="text-[10px] font-mono text-slate-500 shrink-0">
                          {ref.statutoryClause}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{ref.explanation || ref.details}</p>

                    {preventList.length > 0 && (
                      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-xs space-y-1">
                        <span className="font-semibold text-emerald-400">How to Prevent This Refusal:</span>
                        <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                          {preventList.map((pm: string, idx: number) => (
                            <li key={idx}>{pm}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Remedy: <strong>{remedy}</strong></span>
                      <span>Timeline: <strong>{timeline}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 11: After Graduation (Post-Study Work & PR) */}
          {/* ================================================================= */}
          <section id="post-study" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">11. After Graduation: Post-Study Work & PR</h2>
              </div>
              <button
                onClick={() => handleCopyLink('post-study')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'post-study' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">1. Post-Study Work</span>
                  <div className="text-lg font-bold text-white mt-1">{postStudy.jobSeekingPermitDuration || postStudyDuration}</div>
                  <p className="text-xs text-slate-400 mt-1">Open work rights to search for graduate-level employment</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase">2. Skilled Work Permit</span>
                  <div className="text-lg font-bold text-white mt-1">{postStudy.workVisaOptions || postStudy.workPermitRoute || 'Sponsored Route'}</div>
                  <p className="text-xs text-slate-400 mt-1">Transition into full employer sponsorship</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">3. Permanent Settlement</span>
                  <div className="text-lg font-bold text-white mt-1">{postStudy.permanentResidencyTimeline || postStudy.prPathwayDuration || '2–5 Years'}</div>
                  <p className="text-xs text-slate-400 mt-1">Permanent residency with continuous tax residency</p>
                </div>
              </div>

              {(postStudy.citizenshipTimelineYears || postStudy.citizenshipPathwayDuration) && (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-emerald-400">Citizenship Pathway: </span>
                  {postStudy.citizenshipTimelineYears || postStudy.citizenshipPathwayDuration}
                </div>
              )}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 12: Bringing Family */}
          {/* ================================================================= */}
          <section id="dependents" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">12. Bringing Family & Dependent Rules</h2>
              </div>
              <button
                onClick={() => handleCopyLink('dependents')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'dependents' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Spouse & Minor Children Rules for {guide.countryName}</span>
              </div>

              {((dependentRules.conditions || dependentRules.eligibilityCriteria) && (
                <ul className="space-y-2 text-xs text-slate-300">
                  {(dependentRules.conditions || dependentRules.eligibilityCriteria || []).map((cond: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              ))}

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1">
                {dependentRules.spousalWorkRights && (
                  <div><strong>Spouse Work Rights:</strong> {dependentRules.spousalWorkRights}</div>
                )}
                {(dependentRules.financialSponsorshipRequirementExtraMonthly || dependentRules.additionalFundsRequired) && (
                  <div><strong>Extra Financial Surcharge:</strong> {dependentRules.financialSponsorshipRequirementExtraMonthly || dependentRules.additionalFundsRequired}</div>
                )}
                {dependentRules.note && (
                  <div className="text-amber-300 pt-1"><strong>Recommendation:</strong> {dependentRules.note}</div>
                )}
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 13: Recent Law & Policy Timeline */}
          {/* ================================================================= */}
          <section id="policy-timeline" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">13. Recent Law & Policy Changes</h2>
              </div>
              <button
                onClick={() => handleCopyLink('policy-timeline')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'policy-timeline' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {recentPolicyTimeline.map((item: any, i: number) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      Effective: {item.effectiveDate}
                    </span>
                    {item.officialAnnouncementUrl && (
                      <a
                        href={item.officialAnnouncementUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        <span>Official Link ({item.publisher})</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.headline}</h3>
                  <p className="text-xs text-slate-300">{item.summary}</p>
                  <div className="text-[11px] text-amber-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                    <strong>Student Impact:</strong> {item.impactOnStudents}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 14: Living There (Accommodation & Culture) */}
          {/* ================================================================= */}
          <section id="student-living" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">14. Living in {guide.countryName}</h2>
              </div>
              <button
                onClick={() => handleCopyLink('student-living')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'student-living' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">Monthly Accommodation Cost</span>
                  <p className="text-slate-300">{studentLiving.avgAccommodationCostMonthly || studentLiving.averageMonthlyRent || 'Varies widely between shared flats and private studios.'}</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">Halal Food & Diaspora</span>
                  <p className="text-slate-300">
                    Halal: <strong className="text-emerald-400">{studentLiving.halalFoodAvailability || 'Available'}</strong>.<br />
                    {studentLiving.pakistaniCommunityPresence || 'Active Pakistani student diaspora and associations across major cities.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 space-y-2">
                {studentLiving.housingSearchPortals && studentLiving.housingSearchPortals.length > 0 && (
                  <div><strong>Housing Portals:</strong> {studentLiving.housingSearchPortals.join(', ')}</div>
                )}
                {studentLiving.simAndBankingRecommended?.digitalBanks && studentLiving.simAndBankingRecommended.digitalBanks.length > 0 && (
                  <div><strong>Recommended Banking:</strong> {studentLiving.simAndBankingRecommended.digitalBanks.join(', ')}</div>
                )}
                {studentLiving.simAndBankingRecommended?.simProviders && studentLiving.simAndBankingRecommended.simProviders.length > 0 && (
                  <div><strong>Recommended SIMs:</strong> {studentLiving.simAndBankingRecommended.simProviders.join(', ')}</div>
                )}
                {studentLiving.transportationStudentPerks && (
                  <div><strong>Transit Benefit:</strong> {studentLiving.transportationStudentPerks}</div>
                )}
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 15: After Arrival Checklist */}
          {/* ================================================================= */}
          <section id="arrival-checklist" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">15. After Arrival Checklist (First 60 Days)</h2>
              </div>
              <button
                onClick={() => handleCopyLink('arrival-checklist')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'arrival-checklist' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {arrivalChecklist.map((task: any, i: number) => {
                const docList = task.requiredDocuments || [];
                return (
                  <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {task.dayWindow || 'First 14 Days'}
                        </span>
                        <h3 className="text-sm font-bold text-white">{task.title}</h3>
                      </div>
                      {task.officialTerm && (
                        <span className="text-[11px] font-mono text-slate-400 italic">{task.officialTerm}</span>
                      )}
                    </div>

                    {docList.length > 0 && (
                      <div className="text-xs text-slate-300">
                        <span className="font-semibold text-slate-400">Required Documents: </span>
                        {docList.join(', ')}
                      </div>
                    )}

                    {task.consequenceOfDelay && (
                      <div className="text-[11px] text-amber-300/90 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                        <strong>Consequence of Delay:</strong> {task.consequenceOfDelay}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 16: Frequently Asked Questions */}
          {/* ================================================================= */}
          <section id="faqs" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">16. Frequently Asked Questions</h2>
              </div>
              <button
                onClick={() => handleCopyLink('faqs')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'faqs' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="text-xs text-slate-300 leading-relaxed pl-5 border-l-2 border-slate-800">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 17: Official Sources & Useful Links */}
          {/* ================================================================= */}
          <section id="sources" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">17. Official Sources & Portals</h2>
              </div>
              <button
                onClick={() => handleCopyLink('sources')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'sources' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <p className="text-xs text-slate-400">
                All numbers, laws, and procedures on this page are derived from the following statutory bodies and portals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allOfficialSources.map((s: any, i: number) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors truncate">
                        {s.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">{s.publisher}</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
