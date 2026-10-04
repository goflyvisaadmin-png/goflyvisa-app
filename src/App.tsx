import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { IeltsSpeakingExaminer } from './components/IeltsSpeakingExaminer';
import { SopAuditor } from './components/SopAuditor';
import { PricingView } from './components/PricingView';
import { CreditModal } from './components/CreditModal';
import { SchemaViewerModal } from './components/SchemaViewerModal';
import { CountryIndexPage } from './components/countries/CountryIndexPage';
import { CountryDetailPage } from './components/countries/CountryDetailPage';
import { TargetCountrySlug } from './data/countries/types';
import { Plane, Database, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'ielts' | 'sop' | 'pricing' | 'schema' | 'countries'>('landing');
  const [selectedCountrySlug, setSelectedCountrySlug] = useState<TargetCountrySlug | null>(null);
  const [creditsRemaining, setCreditsRemaining] = useState<number>(4);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState<boolean>(false);
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState<boolean>(false);

  // Parse path on initial load & popstate (browser back/forward navigation)
  useEffect(() => {
    const syncRouteFromPath = () => {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/countries')) {
        const parts = pathname.split('/').filter(Boolean);
        if (parts.length >= 2) {
          const slug = parts[1] as TargetCountrySlug;
          setSelectedCountrySlug(slug);
        } else {
          setSelectedCountrySlug(null);
        }
        setActiveTab('countries');
      } else if (pathname === '/ielts') {
        setActiveTab('ielts');
        setSelectedCountrySlug(null);
      } else if (pathname === '/sop') {
        setActiveTab('sop');
        setSelectedCountrySlug(null);
      } else if (pathname === '/pricing') {
        setActiveTab('pricing');
        setSelectedCountrySlug(null);
      } else {
        setActiveTab('landing');
        setSelectedCountrySlug(null);
      }
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

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

  // Navigation handlers with URL history push
  const handleTabChange = (tab: 'landing' | 'ielts' | 'sop' | 'pricing' | 'schema' | 'countries') => {
    setActiveTab(tab);
    if (tab === 'countries') {
      setSelectedCountrySlug(null);
      window.history.pushState(null, '', '/countries');
    } else if (tab === 'landing') {
      setSelectedCountrySlug(null);
      window.history.pushState(null, '', '/');
    } else {
      setSelectedCountrySlug(null);
      window.history.pushState(null, '', `/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCountry = (slug: TargetCountrySlug) => {
    setSelectedCountrySlug(slug);
    setActiveTab('countries');
    window.history.pushState(null, '', `/countries/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCountriesIndex = () => {
    setSelectedCountrySlug(null);
    setActiveTab('countries');
    window.history.pushState(null, '', '/countries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-900">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        creditsRemaining={creditsRemaining}
        openCreditModal={() => setIsCreditModalOpen(true)}
        openSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage
            onNavigateToIelts={() => handleTabChange('ielts')}
            onNavigateToSop={() => handleTabChange('sop')}
            onOpenPricing={() => handleTabChange('pricing')}
            onOpenSchema={() => setIsSchemaModalOpen(true)}
          />
        )}

        {activeTab === 'countries' && (
          <>
            {selectedCountrySlug ? (
              <CountryDetailPage
                slug={selectedCountrySlug}
                onBack={handleBackToCountriesIndex}
                onSelectCountry={handleSelectCountry}
              />
            ) : (
              <CountryIndexPage
                onSelectCountry={handleSelectCountry}
              />
            )}
          </>
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
            onNavigateToCountry={(country) => handleSelectCountry(country as TargetCountrySlug)}
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
      <footer className="bg-[#050814] border-t border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8 print:hidden">
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
              onClick={() => handleTabChange('countries')}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>Study Destinations</span>
            </button>
            <button
              onClick={() => setIsSchemaModalOpen(true)}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Supabase SQL Migration (RLS)</span>
            </button>
            <button
              onClick={() => handleTabChange('ielts')}
              className="hover:text-emerald-400 transition-colors"
            >
              IELTS Examiner
            </button>
            <button
              onClick={() => handleTabChange('sop')}
              className="hover:text-emerald-400 transition-colors"
            >
              Visa SOP Auditor
            </button>
            <button
              onClick={() => handleTabChange('pricing')}
              className="hover:text-emerald-400 transition-colors"
            >
              Credit Packs
            </button>
            <button
              onClick={() => {
                handleTabChange('landing');
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
