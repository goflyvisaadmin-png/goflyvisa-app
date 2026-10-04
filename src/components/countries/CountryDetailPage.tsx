import React, { useState, useEffect } from 'react';
import {
  Globe,
  Calendar,
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
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Sparkles,
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
import { CountryGuideData, TargetCountrySlug, DocumentChecklistItem } from '../../data/countries/types';
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
    { id: 'finances', label: '4. Money & Blocked Account', icon: DollarSign },
    { id: 'admissions', label: '5. Admissions & Equivalence', icon: GraduationCap },
    { id: 'language', label: '6. English & Local Language', icon: Languages },
    { id: 'universities', label: '7. Top Universities', icon: Building2 },
    { id: 'scholarships', label: '8. Scholarships', icon: Award },
    { id: 'work-rights', label: '9. Work Rights & Wages', icon: Briefcase },
    { id: 'refusal-reasons', label: '10. Rejection Traps & SOP', icon: AlertTriangle },
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
          The full factual guide for this destination is scheduled for release in Phase 3. Please inspect the completed <strong>Germany</strong> guide first.
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
            href={guide.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Official Embassy Portal</span>
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
                  <span className="text-emerald-400 font-bold">{guide.lastUpdatedDate}</span>
                  <span>•</span>
                  <span>Target: Pakistani Students</span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg font-semibold text-slate-200 mt-2 leading-snug">
              {guide.heroTagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              {guide.oneLineSummary}
            </p>
          </div>

          {/* Quick Stat Pill Widget */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 min-w-[240px] shrink-0 shadow-inner">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Tuition Standard:</span>
              <span className="text-emerald-400 font-bold">100% Free (Public)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Post-Study Work:</span>
              <span className="text-amber-400 font-bold">18 Months</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Work Limit:</span>
              <span className="text-slate-200 font-bold">140 Full Days/Yr</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Fast-Track PR:</span>
              <span className="text-blue-400 font-bold">21–24 Months</span>
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
              German Missions in Pakistan (Islamabad / Karachi)
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
              <span>Embassy Jurisdiction</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong>Islamabad Embassy:</strong> Punjab, KP, ICT, AJK, GB.<br />
              <strong>Karachi Consulate:</strong> Sindh, Balochistan.
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
                title="Copy Section Link"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'quick-facts' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Capital & Official Language</span>
                <div className="text-sm font-bold text-white mt-1">{guide.quickFacts.capital}</div>
                <div className="text-xs text-slate-400">{guide.quickFacts.officialLanguages.join(', ')}</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Currency & Conversion</span>
                <div className="text-sm font-bold text-white mt-1">
                  {guide.quickFacts.currency.code} ({guide.quickFacts.currency.symbol})
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  1 EUR ≈ {guide.pakistanContext.exchangeRateToDestCurrency} PKR ({guide.pakistanContext.exchangeRateDate})
                </div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Primary Semesters / Intakes</span>
                <div className="text-xs font-semibold text-white mt-1">Winter (Oct) & Summer (Apr)</div>
                <div className="text-[11px] text-slate-400">Deadlines: July 15 & Jan 15</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Average Annual Tuition</span>
                <div className="text-sm font-bold text-emerald-400 mt-1">€0 (Tuition-Free)</div>
                <div className="text-[11px] text-slate-400">Only semester contribution of €150–€400</div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Monthly Living Cost (BAföG)</span>
                <div className="text-sm font-bold text-white mt-1">
                  €{guide.quickFacts.monthlyLivingCost.amountDomesticCurrency} / mo
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  ≈ {guide.quickFacts.monthlyLivingCost.approxPKR.toLocaleString()} PKR
                </div>
              </div>

              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Post-Study Work Permit</span>
                <div className="text-sm font-bold text-amber-400 mt-1">18 Months (§20 AufenthG)</div>
                <div className="text-[11px] text-slate-400">Full unrestricted employment rights</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white">Consular Processing Timeline: </span>
              {guide.quickFacts.visaProcessingTimeAverage}
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'visa-types' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {guide.visaTypes.map((visa) => (
                <div key={visa.id} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {visa.category.toUpperCase()}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1">
                        {visa.officialName}
                      </h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-mono text-emerald-400 font-bold">
                        Fee: €{visa.feeDomesticCurrency} (≈ {visa.feePKR.toLocaleString()} PKR)
                      </div>
                      <div className="text-[11px] text-slate-400">Validity: {visa.validity}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {visa.purpose}
                  </p>

                  <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 text-xs">
                    <span className="font-semibold text-slate-300 block mb-1">Key Eligibility Criteria:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      {visa.eligibility.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </div>

                  {visa.workDetails && (
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{visa.workDetails}</span>
                    </div>
                  )}
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'how-to-apply' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-blue-400">Pakistan Application Architecture: </span>
              {guide.applicationGuide.portalOverview}
            </div>

            {/* Stepper */}
            <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-800/80 before:hidden sm:before:block">
              {guide.applicationGuide.steps.map((st) => (
                <div key={st.stepNumber} className="relative sm:pl-12 space-y-2">
                  <div className="hidden sm:flex absolute left-2.5 -translate-x-1/2 top-3 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500 items-center justify-center text-xs font-bold text-blue-400">
                    {st.stepNumber}
                  </div>
                  <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-white">
                        Step {st.stepNumber}: {st.title}
                      </h4>
                      <a
                        href={st.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
                      >
                        <span>{st.portalName}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                    {st.pakistanSpecificNotes && (
                      <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-2.5 text-[11px] text-amber-300/90">
                        <strong>Pakistan Special Requirement:</strong> {st.pakistanSpecificNotes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Document Checklist */}
            <div className="mt-8 bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-emerald-400" />
                    <span>Printable Visa Document Checklist</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Prepare original plus 2 un-stapled sets of photocopies in DIN A4 format.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  {Object.values(checkedDocs).filter(Boolean).length} of {guide.applicationGuide.documentChecklist.length} Checked
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {guide.applicationGuide.documentChecklist.map((doc) => {
                  const isChecked = !!checkedDocs[doc.id];
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleDocChecked(doc.id)}
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
                        <div className="text-[11px] text-slate-400 mt-0.5">{doc.detail}</div>
                        <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono text-slate-500">
                          {doc.attestationRequired && doc.attestationRequired !== 'None' && (
                            <span className="text-amber-400 font-semibold">Attestation: {doc.attestationRequired}</span>
                          )}
                          <span>•</span>
                          <span>Copies: {doc.copiesNeeded} sets</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 4: Money & Blocked Account */}
          {/* ================================================================= */}
          <section id="finances" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">4. Money & Proof of Funds (Sperrkonto)</h2>
              </div>
              <button
                onClick={() => handleCopyLink('finances')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'finances' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Blocked Account Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    Statutory Blocked Account (Sperrkonto)
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    €{guide.financialRequirements.officialMinimumAmount.amount.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    ≈ {guide.financialRequirements.officialMinimumAmount.approxPKR.toLocaleString()} PKR (at 1 EUR = {guide.pakistanContext.exchangeRateToDestCurrency} PKR)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {guide.financialRequirements.officialMinimumAmount.period}
                  </p>
                  <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    💡 <strong>Pro Tip:</strong> {guide.financialRequirements.note}
                  </div>
                </div>

                {/* Approved Providers */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                    Approved Providers for Pakistani Students
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {guide.financialRequirements.approvedProvidersOrBanks.map((prov, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{prov}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-[11px] text-slate-400">
                    <strong>Health Insurance:</strong> {guide.financialRequirements.healthInsuranceDetails.costPerMonthOrYear} via {guide.financialRequirements.healthInsuranceDetails.providers.join(', ')}.
                  </div>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'admissions' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* Bachelor Equivalence */}
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Undergraduate Entry (Bachelor / Studienkolleg)</h3>
                  <span className="text-xs font-mono text-amber-400">FSc vs Abitur (12 vs 13 Yrs)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {guide.admissionCriteria.bachelorRequirements.localEquivalence}
                </p>
                <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                  <strong>Attestation Chain:</strong> {guide.admissionCriteria.bachelorRequirements.attestationSteps.join(' → ')}
                </div>
              </div>

              {/* Master Equivalence */}
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Postgraduate Entry (Master of Science)</h3>
                  <span className="text-xs font-mono text-emerald-400">16-Year BS / BE Direct Entry</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {guide.admissionCriteria.masterRequirements.localEquivalence}
                </p>
                <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                  <strong>Attestation Chain:</strong> {guide.admissionCriteria.masterRequirements.attestationSteps.join(' → ')}
                </div>
              </div>

              {/* Portals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guide.admissionCriteria.evaluationPortals.map((p, i) => (
                  <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs space-y-1.5">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>{p.name}</span>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400">{p.role}</p>
                    <div className="text-[11px] font-mono text-emerald-400">Fee: {p.fee}</div>
                  </div>
                ))}
              </div>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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
                  <div className="text-xl font-bold text-white mt-1">88–92</div>
                  <span className="text-[10px] text-slate-500">Official ETS Score</span>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">PTE Academic</span>
                  <div className="text-xl font-bold text-white mt-1">65+</div>
                  <span className="text-[10px] text-slate-500">Pearson Academic</span>
                </div>
              </div>

              {/* Critical MOI Warning Banner */}
              <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-4 text-xs text-rose-200 leading-relaxed">
                <div className="font-bold text-rose-400 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>CRITICAL CONSULAR RULE: The MOI (Medium of Instruction) Trap</span>
                </div>
                {guide.languageRequirements.englishRequirements.moiConditions}
              </div>

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
                <span className="font-bold text-white">German Language Importance:</span>
                <p className="text-slate-400">{guide.languageRequirements.localLanguageRequirements.studyRequirement}</p>
                <div className="pt-2 text-[11px] text-blue-400">
                  <strong>Permanent Residency Lever:</strong> {guide.languageRequirements.localLanguageRequirements.postStudyPrImportance}
                </div>
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
                <h2 className="text-xl font-bold text-white tracking-tight">7. Top Universities (TU9 & Research Hubs)</h2>
              </div>
              <button
                onClick={() => handleCopyLink('universities')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'universities' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.topUniversities.map((uni) => (
                <div key={uni.id} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                        {uni.name}
                      </h3>
                      <div className="text-xs text-slate-400">{uni.city}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      QS #{uni.ranking.rank}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-emerald-400">
                    {uni.estimatedAnnualTuition}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {uni.strongPrograms.map((pr, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                        {pr}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Intl Students: {uni.internationalStudentPercentage}</span>
                    <a
                      href={uni.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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

                  <div className="text-xs text-slate-300 space-y-1">
                    <span className="font-semibold text-slate-400">Eligibility:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                      {sch.eligibilityCriteria.map((crit, idx) => (
                        <li key={idx}>{crit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                    <span>Deadline (Pakistan): <strong>{sch.pakistanDeadlines}</strong></span>
                    <a
                      href={sch.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                    >
                      <span>Apply on Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'work-rights' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Statutory Work Limit (March 2024 Reform)</span>
                  <div className="text-lg font-bold text-emerald-400 mt-1">140 Full Days / 280 Half Days</div>
                  <p className="text-xs text-slate-400 mt-1">Or up to 20 hours/week during semester</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Statutory Minimum Wage (2025)</span>
                  <div className="text-lg font-bold text-white mt-1">{guide.workRights.statutoryMinimumWage}</div>
                  <p className="text-xs text-slate-400 mt-1">Technical roles pay €14–€20/hour</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {guide.workRights.statutoryWorkRules}
              </p>

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 space-y-1">
                <div><strong>Average Student Earnings:</strong> {guide.workRights.averagePartTimeEarningsMonthly}</div>
                <div><strong>Tax Rules:</strong> {guide.workRights.taxExemptionLimits}</div>
                <div className="text-rose-400 font-semibold">⚠️ Freelancing (Selbstständige Tätigkeit) is strictly barred on student visa.</div>
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* Section 10: Rejection Traps & Consular Avoidance */}
          {/* ================================================================= */}
          <section id="refusal-reasons" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">10. Visa Refusal Traps & Appeal Process</h2>
              </div>
              <button
                onClick={() => handleCopyLink('refusal-reasons')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'refusal-reasons' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {guide.refusalReasons.map((ref, i) => (
                <div key={i} className="bg-[#0A1128] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center justify-center text-xs">
                        {i + 1}
                      </span>
                      <span>{ref.reasonTitle}</span>
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0">
                      {ref.statutoryClause}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{ref.explanation}</p>

                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-xs space-y-1">
                    <span className="font-semibold text-emerald-400">How to Prevent This Refusal:</span>
                    <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                      {ref.preventativeMeasures.map((pm, idx) => (
                        <li key={idx}>{pm}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                    <span>Remedy: <strong>{ref.remedyProcess}</strong></span>
                    <span>Timeline: <strong>{ref.remedyTimeline}</strong></span>
                  </div>
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
                <h2 className="text-xl font-bold text-white tracking-tight">11. After Graduation: Post-Study Work, PR & Citizenship</h2>
              </div>
              <button
                onClick={() => handleCopyLink('post-study')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'post-study' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">1. Job-Seeking Permit</span>
                  <div className="text-lg font-bold text-white mt-1">18 Months (§20)</div>
                  <p className="text-xs text-slate-400 mt-1">Unrestricted work rights to search for graduate roles</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase">2. EU Blue Card Route</span>
                  <div className="text-lg font-bold text-white mt-1">€41,041/yr (STEM)</div>
                  <p className="text-xs text-slate-400 mt-1">Lower salary threshold for university graduates</p>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">3. Fast-Track PR</span>
                  <div className="text-lg font-bold text-white mt-1">21 Months (with B1)</div>
                  <p className="text-xs text-slate-400 mt-1">Permanent residency with pension contributions</p>
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-emerald-400">German Citizenship Reform (June 2024): </span>
                {guide.postStudyImmigration.citizenshipTimelineYears}
              </div>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'dependents' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Spouse & Children Permitted under §30/§32 AufenthG</span>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                {guide.dependentRules.conditions.map((cond, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1">
                <div><strong>Spouse Work Rights:</strong> {guide.dependentRules.spousalWorkRights}</div>
                <div><strong>Extra Financial Surcharge:</strong> {guide.dependentRules.financialSponsorshipRequirementExtraMonthly}</div>
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
                <h2 className="text-xl font-bold text-white tracking-tight">13. Recent Law & Policy Changes (2024–2025)</h2>
              </div>
              <button
                onClick={() => handleCopyLink('policy-timeline')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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
                    <a
                      href={item.officialAnnouncementUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Official Link ({item.publisher})</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
          {/* Section 14: Living in Germany */}
          {/* ================================================================= */}
          <section id="student-living" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">14. Living in Germany (Accommodation & Culture)</h2>
              </div>
              <button
                onClick={() => handleCopyLink('student-living')}
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'student-living' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="bg-[#0A1128] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-mono">Monthly Rent Breakdown</span>
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
                <div><strong>Housing Portals:</strong> {guide.studentLiving.housingSearchPortals.join(', ')}</div>
                <div><strong>Recommended Banking:</strong> {guide.studentLiving.simAndBankingRecommended.digitalBanks.join(', ')}</div>
                <div><strong>Recommended SIMs:</strong> {guide.studentLiving.simAndBankingRecommended.simProviders.join(', ')}</div>
                <div><strong>Transit Benefit:</strong> {guide.studentLiving.transportationStudentPerks}</div>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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
                    <span className="text-[11px] font-mono text-slate-400 italic">{task.officialTerm}</span>
                  </div>

                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-slate-400">Required Documents: </span>
                    {task.requiredDocuments.join(', ')}
                  </div>

                  <div className="text-[11px] text-amber-300/90 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    <strong>Consequence of Delay:</strong> {task.consequenceOfDelay}
                  </div>
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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
                className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1"
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
