import React, { useState, useEffect, useMemo } from 'react';
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
import { toCanonicalCountryGuide } from '../../data/countries/adapter';
import { CanonicalCountryGuide } from '../../data/countries/canonical';

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
  const rawGuide = getCountryGuide(slug);
  const guide: CanonicalCountryGuide | null = useMemo(
    () => (rawGuide ? toCanonicalCountryGuide(rawGuide) : null),
    [rawGuide]
  );

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

  function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
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
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg cursor-pointer"
        >
          View Germany Guide →
        </button>
      </div>
    );
  }

  const curr = guide.quickFacts.currency;
  const exchangeRate = guide.homeCountry.exchangeRateToDestinationCurrency;

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
            <span>Print / PDF</span>
          </button>
          <a
            href={guide.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/20 text-xs font-medium transition-all"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#0A1128] border border-slate-800/80 rounded-3xl p-6 sm:p-10 mb-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-4xl sm:text-5xl">{guide.flagEmoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {guide.countryName}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    2026/2027 Guidelines
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Target Study Destination • Pakistan Applicant Framework
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {guide.heroTagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {guide.metaDescription}
            </p>

            {/* Verification Timestamp Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Authority Verified</span>
              </span>
              <span>•</span>
              <span className="font-mono text-slate-400">
                Last Verified: <strong>{guide.lastUpdatedDate}</strong>
              </span>
              {exchangeRate && (
                <>
                  <span>•</span>
                  <span className="font-mono text-slate-400">
                    Benchmark FX: <strong>1 {curr.code} = {exchangeRate} PKR</strong>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Snapshot Card on Desktop */}
          <div className="w-full md:w-72 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shrink-0 space-y-3 backdrop-blur-sm">
            <div className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
              Destination At-A-Glance
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Tuition Standard:</span>
              <span className="text-emerald-400 font-bold">{guide.quickFacts.tuitionDisplay}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Post-Study Work:</span>
              <span className="text-amber-400 font-bold">{guide.quickFacts.postStudyDuration.split(' ')[0]} {guide.quickFacts.postStudyDuration.split(' ')[1] || 'Stay'}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Work Limit:</span>
              <span className="text-slate-200 font-bold">{guide.quickFacts.partTimeHours.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">PR / Settlement:</span>
              <span className="text-blue-400 font-bold truncate max-w-[140px]" title={guide.postStudyImmigration.permanentResidencyTimeline}>
                {guide.postStudyImmigration.permanentResidencyTimeline.split('.')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Official Disclaimer Alert */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-amber-300/90 bg-amber-500/5 p-3 rounded-xl border border-amber-500/20">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-300">Statutory Notice:</span> Immigration rules, currency exchange rates, and visa fees change often. Always confirm your application packet directly with the{' '}
            <a
              href={guide.officialPortalUrl}
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
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 px-2 flex items-center justify-between">
              <span>Guide Navigation</span>
              <span className="text-[10px] text-emerald-400 font-normal">17 Sections</span>
            </div>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                      <span className="truncate">{sec.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-blue-400" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Content Stream (Desktop 9 Cols) */}
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
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'quick-facts' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Capital</span>
                <div className="text-sm font-bold text-white">{guide.quickFacts.capital}</div>
                <span className="text-[10px] text-slate-500">{guide.countryName}</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Currency</span>
                <div className="text-sm font-bold text-white">{curr.code} ({curr.symbol})</div>
                <span className="text-[10px] text-slate-500">{curr.name}</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Languages</span>
                <div className="text-sm font-bold text-white truncate">{guide.quickFacts.officialLanguages.join(', ')}</div>
                <span className="text-[10px] text-slate-500">Official instruction & life</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Intakes</span>
                <div className="text-sm font-bold text-white truncate">{guide.quickFacts.intakesDisplay}</div>
                <span className="text-[10px] text-slate-500 truncate">{guide.quickFacts.intakesSubtext}</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Avg Tuition</span>
                <div className="text-sm font-bold text-emerald-400 truncate">{guide.quickFacts.tuitionDisplay}</div>
                <span className="text-[10px] text-slate-500 truncate">{guide.quickFacts.tuitionSubtext || 'Public vs Private'}</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Living Cost</span>
                <div className="text-sm font-bold text-white truncate">{guide.quickFacts.livingCostDisplay}</div>
                <span className="text-[10px] text-slate-500 truncate">{guide.quickFacts.livingCostSubtext || 'Per month'}</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Post-Study Work</span>
                <div className="text-sm font-bold text-amber-400 truncate">{guide.quickFacts.postStudyDuration}</div>
                <span className="text-[10px] text-slate-500">Graduate route duration</span>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Part-Time Work</span>
                <div className="text-sm font-bold text-blue-400 truncate">{guide.quickFacts.partTimeHours}</div>
                <span className="text-[10px] text-slate-500">Legal term limit</span>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 2: Visa Types */}
          {/* ================================================================= */}
          <section id="visa-types" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">2. Visa Types & Eligibility</h2>
              </div>
              <button
                onClick={() => handleCopyLink('visa-types')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'visa-types' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.visaTypes.map((vt, i) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white">{vt.officialName}</h3>
                      {vt.subCategory && <span className="text-xs text-slate-400">{vt.subCategory}</span>}
                    </div>
                    {vt.feeLocal !== null && (
                      <span className="px-2 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        {vt.feeCurrency} {vt.feeLocal.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{vt.purpose}</p>

                  <div className="text-xs text-slate-400 space-y-1 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <div><strong>Eligibility:</strong> {vt.eligibilitySummary}</div>
                    <div className="flex flex-wrap gap-x-4 pt-1">
                      <span><strong>Validity:</strong> {vt.validity}</span>
                      <span><strong>Processing:</strong> {vt.processingTime}</span>
                    </div>
                    {vt.approxFeePkr && (
                      <div className="text-[11px] text-slate-500 pt-0.5">
                        Approx PKR: <strong>Rs. {vt.approxFeePkr.toLocaleString()}</strong>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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

            {/* Official Portals Box */}
            {guide.applicationGuide.officialOnlinePortals.length > 0 && (
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Official Online Application Portals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {guide.applicationGuide.officialOnlinePortals.map((portal, i) => (
                    <a
                      key={i}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                          {portal.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">{portal.description}</div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Application Steps */}
            <div className="space-y-3">
              {guide.applicationGuide.steps.map((st) => (
                <div key={st.stepNumber} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {st.stepNumber}
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{st.title}</h4>
                      {st.portalUrl && (
                        <a
                          href={st.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <span>{st.portalName || 'Open Portal'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                    {st.actionRequired && (
                      <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                        <strong>Action:</strong> {st.actionRequired}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Document Checklist */}
            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Interactive Document Checklist</h3>
                  <p className="text-xs text-slate-400">Click to track your required application papers.</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  {Object.values(checkedDocs).filter(Boolean).length} / {guide.applicationGuide.documentChecklist.length} Ready
                </span>
              </div>

              <div className="space-y-2">
                {guide.applicationGuide.documentChecklist.map((doc, idx) => {
                  const isChecked = !!checkedDocs[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDocChecked(String(idx))}
                      className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                          : 'bg-slate-950 border-slate-800/80 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 cursor-pointer"
                      />
                      <div className="flex-1 min-w-0 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-semibold ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                            {doc.title}
                          </span>
                          {doc.attestationRequired && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                              Attestation: {doc.attestationRequired}
                            </span>
                          )}
                        </div>
                        {doc.detail && <p className="text-slate-400 mt-0.5 text-[11px]">{doc.detail}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pakistan Visa Application Centres */}
            {guide.applicationGuide.pakistanCentres.length > 0 && (
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Visa Application Centres & Missions in Pakistan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {guide.applicationGuide.pakistanCentres.map((c, i) => (
                    <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{c.city}</span>
                        {c.bookingUrl && (
                          <a href={c.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{c.centreName}</p>
                      {c.address && <p className="text-slate-500 text-[10px]">{c.address}</p>}
                      {c.averageWaitDays && (
                        <span className="text-[10px] font-mono text-emerald-400 block pt-1">
                          Wait: {c.averageWaitDays}
                        </span>
                      )}
                    </div>
                  ))}
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
                    {guide.financialRequirements.statutoryLivingFunds.amount !== null
                      ? `${curr.symbol}${guide.financialRequirements.statutoryLivingFunds.amount.toLocaleString()}`
                      : 'Institution Specific'}
                  </div>
                  {guide.financialRequirements.statutoryLivingFunds.approxPkr && exchangeRate && (
                    <div className="text-xs text-slate-400 font-mono">
                      ≈ {guide.financialRequirements.statutoryLivingFunds.approxPkr.toLocaleString()} PKR (at 1 {curr.code} = {exchangeRate} PKR)
                    </div>
                  )}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {guide.financialRequirements.statutoryLivingFunds.period}
                  </p>
                  {guide.financialRequirements.statutoryLivingFunds.rules && (
                    <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      💡 <strong>Financial Rule:</strong> {guide.financialRequirements.statutoryLivingFunds.rules}
                    </div>
                  )}
                  {guide.financialRequirements.holdingPeriodDays && (
                    <div className="text-[11px] text-slate-400">
                      <strong>Required Holding Period:</strong> {guide.financialRequirements.holdingPeriodDays} days continuous balance.
                    </div>
                  )}
                </div>

                {/* Approved Providers */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                    Accepted Banking & Financial Proof
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {guide.financialRequirements.proofMethods.map((prov, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white">{prov.name}</span>
                          {prov.details && <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{prov.details}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {guide.financialRequirements.healthInsurance.costPerMonthOrYear && (
                    <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/60">
                      <strong>Health Insurance:</strong> {guide.financialRequirements.healthInsurance.costPerMonthOrYear}{' '}
                      {guide.financialRequirements.healthInsurance.providers && guide.financialRequirements.healthInsurance.providers.length > 0 && `via ${guide.financialRequirements.healthInsurance.providers.join(', ')}`}.
                    </div>
                  )}
                </div>
              </div>

              {/* Other Surcharges & Mandatory Fees */}
              {guide.financialRequirements.otherSurcharges.length > 0 && (
                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Statutory Fees & Surcharges
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {guide.financialRequirements.otherSurcharges.map((fee, i) => (
                      <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{fee.name}</span>
                          <span className="font-mono text-emerald-400 font-semibold">
                            {fee.currency} {fee.amount.toLocaleString()}
                          </span>
                        </div>
                        {fee.approxPkr && (
                          <div className="text-[10px] text-slate-500 font-mono">
                            ≈ Rs. {fee.approxPkr.toLocaleString()}
                          </div>
                        )}
                        {fee.notes && <p className="text-[11px] text-slate-400 pt-0.5 leading-relaxed">{fee.notes}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                  {guide.admissionCriteria.undergraduate.text}
                </p>
                {guide.admissionCriteria.undergraduate.attestationSteps && (
                  <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <strong>Attestation Chain:</strong> {guide.admissionCriteria.undergraduate.attestationSteps.join(' → ')}
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
                  {guide.admissionCriteria.postgraduate.text}
                </p>
                {guide.admissionCriteria.postgraduate.attestationSteps && (
                  <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                    <strong>Attestation Chain:</strong> {guide.admissionCriteria.postgraduate.attestationSteps.join(' → ')}
                  </div>
                )}
              </div>

              {/* Doctoral */}
              {guide.admissionCriteria.doctoral && (
                <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                  <h3 className="text-sm font-bold text-white">Doctoral Entry (PhD)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {guide.admissionCriteria.doctoral.text}
                  </p>
                </div>
              )}

              {/* Evaluation Portals */}
              {guide.admissionCriteria.portals.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {guide.admissionCriteria.portals.map((p, i) => (
                    <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs space-y-1.5">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{p.name}</span>
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      {p.role && <p className="text-slate-400">{p.role}</p>}
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
                {guide.languageRequirements.englishTests.map((test, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                    <span className="text-[11px] text-slate-400 uppercase font-mono">{test.name}</span>
                    <div className="text-xl font-bold text-white mt-1">{test.score}</div>
                    {test.details && <span className="text-[10px] text-slate-500">{test.details}</span>}
                  </div>
                ))}
              </div>

              {/* Critical MOI Warning Banner */}
              <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-4 text-xs text-rose-200 leading-relaxed">
                <div className="font-bold text-rose-400 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>CRITICAL CONSULAR RULE: The MOI (Medium of Instruction) Policy</span>
                </div>
                {guide.languageRequirements.moiPolicy.conditions}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
                <span className="font-bold text-white">Local Language Importance ({guide.languageRequirements.localLanguage.language}):</span>
                <p className="text-slate-400">{guide.languageRequirements.localLanguage.studyRequirement}</p>
                {guide.languageRequirements.localLanguage.postStudyPrImportance && (
                  <div className="pt-2 text-[11px] text-blue-400">
                    <strong>Permanent Residency Lever:</strong> {guide.languageRequirements.localLanguage.postStudyPrImportance}
                  </div>
                )}
                {guide.languageRequirements.localLanguage.recognizedTests.length > 0 && (
                  <div className="pt-2 text-[11px] text-slate-400">
                    <strong>Recognized Tests:</strong> {guide.languageRequirements.localLanguage.recognizedTests.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 7: Top Universities */}
          {/* ================================================================= */}
          <section id="universities" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">7. Top Universities & Global Rankings</h2>
              </div>
              <button
                onClick={() => handleCopyLink('universities')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'universities' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {guide.topUniversities.map((uni, i) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-white">{uni.name}</h3>
                      <div className="text-xs text-slate-400">{uni.city}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {uni.ranking.system}: #{uni.ranking.rank}
                      </span>
                    </div>
                  </div>

                  {uni.strongPrograms.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {uni.strongPrograms.map((prog, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          {prog}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                    <div>
                      Tuition: <strong className="text-emerald-400">{uni.tuitionText}</strong>
                      {uni.approxTuitionPkr && (
                        <span className="text-[11px] text-slate-500 ml-1.5 font-mono">
                          (≈ Rs. {uni.approxTuitionPkr.toLocaleString()})
                        </span>
                      )}
                    </div>
                    {uni.officialWebsite && (
                      <a
                        href={uni.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                      >
                        <span>Official Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
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
              {guide.scholarships.map((sch, i) => (
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

                  {sch.eligibilityCriteria.length > 0 && (
                    <div className="text-xs text-slate-300 space-y-1">
                      <span className="font-semibold text-slate-400">Eligibility:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                        {sch.eligibilityCriteria.map((crit, idx) => (
                          <li key={idx}>{crit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                    <span>Deadline (Pakistan): <strong>{sch.deadlineForPakistanis}</strong></span>
                    {sch.officialLink && (
                      <a
                        href={sch.officialLink}
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
              ))}
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
                  <div className="text-lg font-bold text-emerald-400 mt-1">{guide.workRights.inTermLimit}</div>
                  <p className="text-xs text-slate-400 mt-1">{guide.workRights.vacationLimit}</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Statutory Minimum Wage</span>
                  <div className="text-lg font-bold text-white mt-1">{guide.workRights.statutoryMinimumWage}</div>
                  <p className="text-xs text-slate-400 mt-1">Skilled or tech roles typically pay above minimum</p>
                </div>
              </div>

              {guide.workRights.statutoryWorkRules && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {guide.workRights.statutoryWorkRules}
                </p>
              )}

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 space-y-1">
                {guide.workRights.averagePartTimeEarningsMonthly && (
                  <div><strong>Average Student Earnings:</strong> {guide.workRights.averagePartTimeEarningsMonthly}</div>
                )}
                {guide.workRights.taxExemptionLimits && (
                  <div><strong>Tax Rules:</strong> {guide.workRights.taxExemptionLimits}</div>
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
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">10. Why Visas Get Refused & Avoidance Traps</h2>
              </div>
              <button
                onClick={() => handleCopyLink('refusal-reasons')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'refusal-reasons' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {guide.appealProcessSummary && (
              <div className="bg-blue-950/20 border border-blue-500/30 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-blue-400">Consular Appeal & Review Framework: </span>
                {guide.appealProcessSummary}
              </div>
            )}

            <div className="space-y-4">
              {guide.refusalReasons.map((ref, i) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center justify-center text-xs">
                        {i + 1}
                      </span>
                      <span>{ref.title}</span>
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{ref.explanation}</p>

                  {ref.preventativeMeasures.length > 0 && (
                    <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-3.5 space-y-1.5 text-xs">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>How to Avoid / Preventative Measures:</span>
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {ref.preventativeMeasures.map((measure, idx) => (
                          <li key={idx}>{measure}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(ref.remedyProcess || ref.remedyTimeline) && (
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                      {ref.remedyProcess && (
                        <div>
                          <strong>Legal Remedy:</strong> {ref.remedyProcess}
                        </div>
                      )}
                      {ref.remedyTimeline && (
                        <div>
                          <strong>Adjudication Timeline:</strong> {ref.remedyTimeline}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 11: After Graduation (Post-Study Work & PR) */}
          {/* ================================================================= */}
          <section id="post-study" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">11. Life After Study & PR Pathways</h2>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">1. Post-Study Work</span>
                  <div className="text-base font-bold text-white mt-1">{guide.postStudyImmigration.jobSeekerDuration}</div>
                  <p className="text-xs text-slate-400 mt-1">Open work rights to search for graduate-level employment</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase">2. Skilled Work Permit</span>
                  <div className="text-base font-bold text-white mt-1">{guide.postStudyImmigration.workPermitRoute}</div>
                  <p className="text-xs text-slate-400 mt-1">Transition into full employer sponsorship</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">3. Permanent Settlement</span>
                  <div className="text-sm font-bold text-white mt-1">{guide.postStudyImmigration.permanentResidencyTimeline}</div>
                  <p className="text-xs text-slate-400 mt-1">Permanent residency pathway and qualifying conditions</p>
                </div>
              </div>

              {guide.postStudyImmigration.prPathwaysSummary && (
                <div className="bg-blue-950/20 border border-blue-500/30 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-blue-400">Settlement Pathways: </span>
                  {guide.postStudyImmigration.prPathwaysSummary}
                </div>
              )}

              {guide.postStudyImmigration.citizenshipTimeline && (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-emerald-400">Citizenship Pathway: </span>
                  {guide.postStudyImmigration.citizenshipTimeline}
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

              {guide.dependentRules.conditions.length > 0 && (
                <ul className="space-y-2 text-xs text-slate-300">
                  {guide.dependentRules.conditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1.5">
                <div><strong>Spouse Work Rights:</strong> {guide.dependentRules.spouseWorkRights}</div>
                <div><strong>Children Schooling:</strong> {guide.dependentRules.childrenSchooling}</div>
                <div><strong>Financial Maintenance:</strong> {guide.dependentRules.financialSurcharge}</div>
                {guide.dependentRules.note && (
                  <div className="text-amber-300 pt-1"><strong>Recommendation:</strong> {guide.dependentRules.note}</div>
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
              {guide.recentPolicyTimeline.map((item, i) => (
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
                  <p className="text-slate-300">{guide.studentLiving.avgAccommodationCostMonthly}</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">Halal Food & Diaspora</span>
                  <p className="text-slate-300">
                    Halal: <strong className="text-emerald-400">{guide.studentLiving.halalFoodAvailability}</strong>.<br />
                    {guide.studentLiving.pakistaniCommunityPresence}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 space-y-2">
                {guide.studentLiving.housingSearchPortals.length > 0 && (
                  <div><strong>Housing Portals:</strong> {guide.studentLiving.housingSearchPortals.join(', ')}</div>
                )}
                {guide.studentLiving.digitalBanks.length > 0 && (
                  <div><strong>Recommended Banking:</strong> {guide.studentLiving.digitalBanks.join(', ')}</div>
                )}
                {guide.studentLiving.simProviders.length > 0 && (
                  <div><strong>Recommended SIMs:</strong> {guide.studentLiving.simProviders.join(', ')}</div>
                )}
                {guide.studentLiving.transportationStudentPerks && (
                  <div><strong>Transit Benefit:</strong> {guide.studentLiving.transportationStudentPerks}</div>
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
              {guide.arrivalChecklist.map((task, i) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {task.dayWindow}
                      </span>
                      <h3 className="text-sm font-bold text-white">{task.title}</h3>
                    </div>
                    {task.officialTerm && (
                      <span className="text-[11px] font-mono text-slate-400 italic">{task.officialTerm}</span>
                    )}
                  </div>

                  {task.requiredDocuments.length > 0 && (
                    <div className="text-xs text-slate-300">
                      <span className="font-semibold text-slate-400">Required Documents: </span>
                      {task.requiredDocuments.join(', ')}
                    </div>
                  )}

                  {task.consequenceOfDelay && (
                    <div className="text-[11px] text-amber-300/90 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                      <strong>Consequence of Delay:</strong> {task.consequenceOfDelay}
                    </div>
                  )}
                </div>
              ))}
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
              {guide.faqs.map((faq, i) => (
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
                {guide.allOfficialSources.map((s, i) => (
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
