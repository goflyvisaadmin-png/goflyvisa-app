import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { IeltsSpeakingExaminer } from './components/IeltsSpeakingExaminer';
import { SopAuditor } from './components/SopAuditor';
import { PricingView } from './components/PricingView';
import { CreditModal } from './components/CreditModal';
import { SchemaViewerModal } from './components/SchemaViewerModal';
import { Plane, ShieldCheck, Database, FileText, Mic, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'ielts' | 'sop' | 'pricing' | 'schema'>('landing');
  const [creditsRemaining, setCreditsRemaining] = useState<number>(4);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState<boolean>(false);
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState<boolean>(false);

  // Fetch initial profile & credits
  useEffect(() => {
    fetch('/api/user-profile')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.creditsRemaining === 'number') {
          setCreditsRemaining(data.creditsRemaining);
        }
      })
      .catch((err) => {
        console.warn('Initial profile fetch failed, using local credits balance:', err);
      });
  }, []);

  const handleCreditDeducted = () => {
    setCreditsRemaining((prev) => Math.max(0, prev - 1));
  };

  const handleCreditsAdded = (added: number) => {
    setCreditsRemaining((prev) => prev + added);
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-900">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        creditsRemaining={creditsRemaining}
        openCreditModal={() => setIsCreditModalOpen(true)}
        openSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage
            onNavigateToIelts={() => setActiveTab('ielts')}
            onNavigateToSop={() => setActiveTab('sop')}
            onOpenPricing={() => setActiveTab('pricing')}
            onOpenSchema={() => setIsSchemaModalOpen(true)}
          />
        )}

        {activeTab === 'ielts' && (
          <IeltsSpeakingExaminer
            creditsRemaining={creditsRemaining}
            onCreditDeducted={handleCreditDeducted}
            openCreditModal={() => setIsCreditModalOpen(true)}
          />
        )}

        {activeTab === 'sop' && (
          <SopAuditor
            creditsRemaining={creditsRemaining}
            onCreditDeducted={handleCreditDeducted}
            openCreditModal={() => setIsCreditModalOpen(true)}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingView
            creditsRemaining={creditsRemaining}
            openCreditModal={() => setIsCreditModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#050814] border-t border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Plane className="w-4 h-4 text-emerald-400 -rotate-45" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">GoFly<span className="text-emerald-400">Visa</span></span>
              <span className="text-[11px] font-mono text-slate-500 ml-2">goflyvisa.com</span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                High-Performance Self-Serve AI Platform for Study-Abroad Applicants
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setIsSchemaModalOpen(true)}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Supabase SQL Migration (RLS)</span>
            </button>
            <button
              onClick={() => setActiveTab('ielts')}
              className="hover:text-emerald-400 transition-colors"
            >
              IELTS Examiner
            </button>
            <button
              onClick={() => setActiveTab('sop')}
              className="hover:text-emerald-400 transition-colors"
            >
              Visa SOP Auditor
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className="hover:text-emerald-400 transition-colors"
            >
              Credit Packs
            </button>
            <button
              onClick={() => {
                setActiveTab('landing');
                setTimeout(() => {
                  window.scrollTo({ top: 1200, behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-emerald-400 transition-colors"
            >
              FAQ & Standards
            </button>
          </div>

          <div className="text-right text-[11px] text-slate-500">
            <div>100% Self-Serve • Zero Commission Agents</div>
            <div className="mt-0.5">© {new Date().getFullYear()} GoFlyVisa Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Credit Purchase Modal */}
      <CreditModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
        creditsRemaining={creditsRemaining}
        onSuccessPurchase={handleCreditsAdded}
      />

      {/* Supabase Schema Modal */}
      <SchemaViewerModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
      />
    </div>
  );
}
