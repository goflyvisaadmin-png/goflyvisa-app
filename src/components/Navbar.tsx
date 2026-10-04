import React, { useState } from 'react';
import { Plane, Mic, FileCheck, Coins, Database, ShieldCheck, Sparkles, ChevronRight, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema' | 'countries';
  setActiveTab: (tab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema' | 'countries') => void;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema' | 'countries') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070B18]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => handleTabClick('landing')}
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

        {/* Navigation Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/60">
          <button
            onClick={() => handleTabClick('landing')}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'landing'
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => handleTabClick('countries')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'countries'
                ? 'bg-teal-600/20 text-teal-400 border border-teal-500/30 shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>Countries</span>
            <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 rounded">
              9
            </span>
          </button>

          <button
            onClick={() => handleTabClick('ielts')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'ielts'
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            IELTS Mock Examiner
          </button>

          <button
            onClick={() => handleTabClick('sop')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'sop'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            Visa SOP Auditor
          </button>

          <button
            onClick={() => handleTabClick('pricing')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
            className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-all font-mono cursor-pointer"
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
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              + Top Up
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-slate-800 px-4 py-4 space-y-2 shadow-2xl">
          <button
            onClick={() => handleTabClick('landing')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'landing' ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabClick('countries')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
              activeTab === 'countries' ? 'bg-teal-600/20 text-teal-400 font-bold' : 'text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-400" />
              <span>Countries (Study Destinations)</span>
            </div>
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded">9</span>
          </button>
          <button
            onClick={() => handleTabClick('ielts')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'ielts' ? 'bg-emerald-600/20 text-emerald-400 font-bold' : 'text-slate-300'
            }`}
          >
            <Mic className="w-4 h-4 text-emerald-400" />
            <span>IELTS Mock Examiner</span>
          </button>
          <button
            onClick={() => handleTabClick('sop')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'sop' ? 'bg-indigo-600/20 text-indigo-400 font-bold' : 'text-slate-300'
            }`}
          >
            <FileCheck className="w-4 h-4 text-indigo-400" />
            <span>Visa SOP Auditor</span>
          </button>
          <button
            onClick={() => handleTabClick('pricing')}
            className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'pricing' ? 'bg-amber-600/20 text-amber-400 font-bold' : 'text-slate-300'
            }`}
          >
            <Coins className="w-4 h-4 text-amber-400" />
            <span>Credit Packs</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openSchemaModal();
            }}
            className="w-full text-left px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-emerald-400 flex items-center gap-2 pt-2 border-t border-slate-800"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Supabase SQL Migration (RLS)</span>
          </button>
        </div>
      )}
    </header>
  );
};
