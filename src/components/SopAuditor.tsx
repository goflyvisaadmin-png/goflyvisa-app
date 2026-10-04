import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  Copy,
  Check,
  Upload,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Building2,
  GraduationCap,
  Scale,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { COUNTRY_IMMIGRATION_DATA } from '../data/prompts';
import { TargetCountry, DegreeLevel, SopAuditResult } from '../types';

interface SopAuditorProps {
  creditsRemaining: number;
  onCreditDeducted: () => void;
  openCreditModal: () => void;
}

export const SopAuditor: React.FC<SopAuditorProps> = ({
  creditsRemaining,
  onCreditDeducted,
  openCreditModal,
}) => {
  const [targetCountry, setTargetCountry] = useState<TargetCountry>('germany');
  const [targetUniversity, setTargetUniversity] = useState<string>('Technical University of Munich');
  const [degreeLevel, setDegreeLevel] = useState<DegreeLevel>('masters');
  const [sopText, setSopText] = useState<string>('');

  // Results
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<SopAuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Active view tab in results: Overview vs Side-by-Side vs Interview Prep
  const [viewTab, setViewTab] = useState<'overview' | 'comparison' | 'interview'>('overview');
  const [copiedRewrite, setCopiedRewrite] = useState(false);

  const countryData = COUNTRY_IMMIGRATION_DATA[targetCountry];

  // Load Authentic Samples
  const handleLoadSample = (type: 'highRisk' | 'moderateRisk' | 'visaReady') => {
    setSopText(countryData.sampleSop[type]);
    setErrorMsg(null);
  };

  // Run Embassy Visa Risk Audit
  const handleRunAudit = async () => {
    if (!sopText.trim() || sopText.trim().split(/\s+/).length < 20) {
      setErrorMsg('Please enter or paste at least 20 words of your Statement of Purpose.');
      return;
    }

    if (creditsRemaining < 1) {
      openCreditModal();
      return;
    }

    setIsAuditing(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/audit-sop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetCountry,
          targetUniversity,
          degreeLevel,
          sopText,
        }),
      });

      const responseData = await res.json();
      if (!res.ok) {
        throw new Error(responseData.error || 'Visa audit failed.');
      }

      setAuditResult(responseData.data);
      onCreditDeducted();
      setViewTab('overview');
    } catch (err: any) {
      console.error('SOP audit error:', err);
      setErrorMsg(err.message || 'Audit execution error. Please try again.');
    } finally {
      setIsAuditing(false);
    }
  };

  const handleCopyRewrite = () => {
    if (!auditResult?.humanized_rewrite_text) return;
    navigator.clipboard.writeText(auditResult.humanized_rewrite_text);
    setCopiedRewrite(true);
    setTimeout(() => setCopiedRewrite(false), 2000);
  };

  // File upload simulation (read .txt or .md)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) setSopText(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            Module 2 Diagnostic
          </span>
          <span className="text-xs text-slate-400 font-mono">Consular Adjudication Guidelines</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          AI Visa SOP & Embassy Risk Auditor
        </h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Line-by-line consular risk diagnostic assessing German APS & ECTS, UKVI CAS, Canadian IRCC ties, US INA 214(b), Australian Genuine Student (GS), and statutory guidelines for China, Italy, France, and Malaysia.
        </p>
      </div>

      {/* Configuration & Input Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Target Country & Dynamic Checklist (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Target Study Destination (9 Countries)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(['germany', 'uk', 'canada', 'usa', 'australia', 'china', 'italy', 'france', 'malaysia'] as TargetCountry[]).map((c) => {
                  const data = COUNTRY_IMMIGRATION_DATA[c];
                  const isSelected = targetCountry === c;
                  return (
                    <button
                      key={c}
                      onClick={() => {
                        setTargetCountry(c);
                        if (c === 'germany') setTargetUniversity('Technical University of Munich');
                        if (c === 'uk') setTargetUniversity('University of Strathclyde');
                        if (c === 'canada') setTargetUniversity('University of Waterloo');
                        if (c === 'usa') setTargetUniversity('Purdue University');
                        if (c === 'australia') setTargetUniversity('University of Melbourne');
                        if (c === 'china') setTargetUniversity('Tsinghua University');
                        if (c === 'italy') setTargetUniversity('Politecnico di Milano');
                        if (c === 'france') setTargetUniversity('Sorbonne University');
                        if (c === 'malaysia') setTargetUniversity('Universiti Malaya (UM)');
                      }}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500/30'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <span className="text-lg shrink-0">{data.flag}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">{data.name}</div>
                        <div className="text-[9px] text-slate-400 truncate">{data.visaType.slice(0, 14)}...</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* University & Degree */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  Target University / Institution
                </label>
                <input
                  type="text"
                  value={targetUniversity}
                  onChange={(e) => setTargetUniversity(e.target.value)}
                  placeholder="e.g. Technical University of Munich"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  Intended Degree Level
                </label>
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value as DegreeLevel)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="masters">Master of Science / MA (Level 7 / Master)</option>
                  <option value="bachelors">Bachelor of Science / BA (Level 6 / Bachelor)</option>
                  <option value="mba">Master of Business Administration (MBA)</option>
                  <option value="phd">Doctor of Philosophy (PhD / Doctorate)</option>
                </select>
              </div>
            </div>

            {/* Country-Specific Immigration Checklist */}
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">
                  {countryData.flag} {countryData.name} Visa Officer Focus
                </span>
              </div>
              <div className="text-[11px] font-mono text-rose-400/90 mb-3 bg-rose-950/30 p-2 rounded border border-rose-900/40">
                Primary Refusal Clause: {countryData.refusalClause}
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                {countryData.keyChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Authentic Samples Loader */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              1-Click Authentic SOP Samples
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Load real applicant statements to test the consular risk engine:
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleLoadSample('highRisk')}
                className="px-3 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between"
              >
                <span>🔴 High-Risk SOP (Immediate Visa Refusal Hazard)</span>
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-rose-400" />
              </button>
              <button
                onClick={() => handleLoadSample('moderateRisk')}
                className="px-3 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between"
              >
                <span>🟡 Moderate-Risk SOP (Generic AI & Cliché Phrasing)</span>
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-amber-400" />
              </button>
              <button
                onClick={() => handleLoadSample('visaReady')}
                className="px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between"
              >
                <span>🟢 Visa-Ready SOP (Passes Embassies with Distinction)</span>
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-emerald-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Statement of Purpose Text Input (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Applicant Statement of Purpose (SOP / Letter of Explanation)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 cursor-pointer flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload .txt / .doc</span>
                  <input
                    type="file"
                    accept=".txt,.doc,.docx,.md"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <div className="text-xs font-mono text-slate-400">
                  {sopText.trim().split(/\s+/).filter(Boolean).length} Words
                </div>
              </div>
            </div>

            <textarea
              value={sopText}
              onChange={(e) => setSopText(e.target.value)}
              placeholder={`Paste your Statement of Purpose here or click one of the authentic test samples on the left. The engine will evaluate against official ${countryData.name} visa refusal criteria...`}
              rows={16}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
            />

            {/* Error Notice */}
            {errorMsg && (
              <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Action Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl">
              <div className="text-xs text-slate-400">
                Cost: <span className="font-bold text-amber-400">1 Credit</span> | Balance:{' '}
                <span className="font-bold text-emerald-400">{creditsRemaining} Remaining</span>
              </div>

              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 hover:from-blue-500 hover:via-indigo-500 hover:to-emerald-400 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
              >
                {isAuditing ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Auditing Consular Refusal Grounds...</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4" />
                    <span>Audit Embassy Refusal Red Flags</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Suite */}
      {auditResult && (
        <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Risk Meter Dial Banner */}
          <div className="bg-gradient-to-r from-[#0A1128] via-slate-900 to-[#0A1128] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                      auditResult.risk_level === 'Low'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : auditResult.risk_level === 'Medium'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    Risk Level: {auditResult.risk_level}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {countryData.flag} {countryData.visaType}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Visa Consular Adjudication Audit
                </h3>
                <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  {auditResult.overall_summary}
                </p>
              </div>

              {/* Approval Risk Meter */}
              <div className="bg-slate-950/80 px-6 py-5 rounded-2xl border border-slate-800 shadow-inner flex items-center gap-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Visa Refusal Risk
                  </div>
                  <div
                    className={`text-4xl font-black font-mono tracking-tight ${
                      auditResult.risk_score <= 25
                        ? 'text-emerald-400'
                        : auditResult.risk_score <= 60
                        ? 'text-amber-400'
                        : 'text-rose-500'
                    }`}
                  >
                    {auditResult.risk_score}%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {auditResult.risk_score <= 25
                      ? '🟢 Visa Ready (Low Scrutiny)'
                      : auditResult.risk_score <= 60
                      ? '🟡 Requires Clarification'
                      : '🔴 Critical Refusal Hazard'}
                  </div>
                </div>

                {/* Meter Progress Bar */}
                <div className="w-24 h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      auditResult.risk_score <= 25
                        ? 'bg-emerald-500'
                        : auditResult.risk_score <= 60
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${auditResult.risk_score}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Results Navigation Tabs */}
            <div className="flex border-b border-slate-800 mt-8 gap-4 text-xs font-semibold">
              <button
                onClick={() => setViewTab('overview')}
                className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
                  viewTab === 'overview'
                    ? 'border-blue-400 text-blue-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Diagnostic Cards & Checklist ({auditResult.red_flags.length} Red Flags)
              </button>
              <button
                onClick={() => setViewTab('comparison')}
                className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
                  viewTab === 'comparison'
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Side-by-Side: Original vs Humanized Polish
              </button>
              <button
                onClick={() => setViewTab('interview')}
                className={`py-2 px-3 border-b-2 transition-all cursor-pointer ${
                  viewTab === 'interview'
                    ? 'border-purple-400 text-purple-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Embassy Consular Mock Questions ({auditResult.officer_mock_questions?.length || 2})
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW & SEVERITY CARDS */}
          {viewTab === 'overview' && (
            <div className="space-y-6">
              {/* Official Visa Compliance Checklist */}
              {auditResult.visa_checklist && auditResult.visa_checklist.length > 0 && (
                <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-blue-400" />
                    Official Embassy Compliance Verification Checklist
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {auditResult.visa_checklist.map((chk, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border flex items-start gap-3 ${
                          chk.status === 'pass'
                            ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'
                            : chk.status === 'warn'
                            ? 'bg-amber-950/20 border-amber-900/40 text-amber-300'
                            : 'bg-rose-950/20 border-rose-900/40 text-rose-300'
                        }`}
                      >
                        {chk.status === 'pass' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="text-xs font-bold text-white">{chk.item}</div>
                          <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                            {chk.details}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categorized Red Flags Severity Cards */}
              <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  Diagnosed Visa Refusal Red Flags ({auditResult.red_flags.length})
                </h4>

                <div className="space-y-4">
                  {auditResult.red_flags.map((flag, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-xl border ${
                        flag.severity === 'High'
                          ? 'bg-rose-950/30 border-rose-800/60'
                          : 'bg-amber-950/30 border-amber-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            flag.severity === 'High'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          }`}
                        >
                          {flag.severity} Refusal Risk: {flag.category}
                        </span>
                      </div>

                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-rose-300/90 mb-3">
                        <span className="text-slate-500 text-[10px] block mb-1 uppercase font-bold">
                          Flagged Excerpt from Candidate Text:
                        </span>
                        "{flag.excerpt}"
                      </div>

                      <div className="text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-white">Consular Fix Recommendation: </span>
                        {flag.fix_recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              {auditResult.strengths && auditResult.strengths.length > 0 && (
                <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Validated Consular Strengths ({auditResult.strengths.length})
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {auditResult.strengths.map((str, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl"
                      >
                        <div className="text-xs font-bold text-emerald-300 mb-1">{str.title}</div>
                        <div className="text-[11px] text-slate-300 leading-relaxed">
                          {str.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SIDE BY SIDE COMPARISON */}
          {viewTab === 'comparison' && (
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Side-by-Side: Original vs Humanized Academic Rewrite
                  </h4>
                  <p className="text-xs text-slate-400">
                    Engineered to eliminate AI detectors, eradicate immigrant intent flags, and ensure strict compliance.
                  </p>
                </div>

                <button
                  onClick={handleCopyRewrite}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
                >
                  {copiedRewrite ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedRewrite ? 'Copied to Clipboard' : 'Copy Polish Text'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Original with Highlighted Flags */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Original Candidate Submission
                  </div>
                  <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed font-sans max-h-[500px] overflow-y-auto whitespace-pre-wrap">
                    {sopText}
                  </div>
                </div>

                {/* Right: Polished Humanized Rewrite */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Humanized, Non-AI Refusal-Proof Rewrite
                  </div>
                  <div className="p-5 bg-emerald-950/10 border border-emerald-500/30 rounded-xl text-xs text-slate-100 leading-relaxed font-sans max-h-[500px] overflow-y-auto whitespace-pre-wrap selection:bg-emerald-500 selection:text-slate-950">
                    {auditResult.humanized_rewrite_text}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONSULAR OFFICER MOCK QUESTIONS */}
          {viewTab === 'interview' && (
            <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  Consular Officer Mock Visa Interview Flashcards
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Based on your SOP's specific weak points, consular officers are statistically likely to press you on these exact questions:
                </p>
              </div>

              <div className="space-y-4">
                {auditResult.officer_mock_questions?.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-950 border border-purple-500/30 rounded-xl space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase">
                        Question {idx + 1}
                      </span>
                      <div className="text-xs font-bold text-white">{q.question}</div>
                    </div>

                    <div className="p-3.5 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-emerald-400 block mb-1">
                        Recommended Strategy & Talking Points:
                      </span>
                      {q.recommended_talking_points}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
