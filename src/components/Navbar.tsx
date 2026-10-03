import React from 'react';
import { Plane, Mic, FileCheck, Coins, Database, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema';
  setActiveTab: (tab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema') => void;
  creditsRemaining: number;
  openCreditModal: () => void;
  openSchemaModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  creditsRemaining,
  openCreditModal,
  openSchemaModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#070B18]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveTab('landing')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-emerald-500/30 transition-all">
            <div className="w-full h-full bg-[#0A1128] rounded-[11px] flex items-center justify-center">
              <Plane className="w-5 h-5 text-emerald-400 transform -rotate-45 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white">GoFly<span className="text-emerald-400">Visa</span></span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                AI 3.8
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">goflyvisa.com</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/60">
          <button
            onClick={() => setActiveTab('landing')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'landing'
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setActiveTab('ielts')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ielts'
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            IELTS Mock Examiner
          </button>

          <button
            onClick={() => setActiveTab('sop')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'sop'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            Visa SOP Auditor
          </button>

          <button
            onClick={() => setActiveTab('pricing')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'pricing'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            Credit Packs
          </button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Supabase Schema Link */}
          <button
            onClick={openSchemaModal}
            title="Inspect Supabase PostgreSQL Migration & RLS Policies"
            className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-all font-mono"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>SQL Schema (RLS)</span>
          </button>

          {/* Credit Balance Badge & Top-up */}
          <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-800 shadow-inner">
            <div className="flex items-center gap-1.5 px-2.5 py-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200">
                <span className="text-amber-400 font-bold">{creditsRemaining}</span> Credits
              </span>
            </div>
            <button
              onClick={openCreditModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all flex items-center gap-1"
            >
              + Top Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
