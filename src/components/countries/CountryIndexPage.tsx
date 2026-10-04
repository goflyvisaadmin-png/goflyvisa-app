import React, { useState } from 'react';
import { Search, Globe, Sparkles, Scale, ArrowRight, CheckCircle2, ShieldCheck, Compass, BookOpen, AlertCircle } from 'lucide-react';
import { COUNTRIES_DIRECTORY, CountryCardSummary } from '../../data/countries';
import { TargetCountrySlug } from '../../data/countries/types';
import { CountryCompareModal } from './CountryCompareModal';

interface CountryIndexPageProps {
  onSelectCountry: (slug: TargetCountrySlug) => void;
}

type FilterTag = 'all' | 'no-tuition' | 'psw-2plus' | 'english' | 'schengen' | 'high-pr';

export const CountryIndexPage: React.FC<CountryIndexPageProps> = ({ onSelectCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all');
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Filtering
  const filteredCountries = COUNTRIES_DIRECTORY.filter((country) => {
    // Search match
    const matchesSearch =
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.visaType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.summary.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Tag filter match
    if (activeFilter === 'no-tuition') return country.tags.noTuitionFees;
    if (activeFilter === 'psw-2plus') return country.tags.postStudyWorkYears >= 2;
    if (activeFilter === 'english') return country.tags.englishTaughtWideAvailability;
    if (activeFilter === 'schengen') return country.tags.schengenOrEu;
    if (activeFilter === 'high-pr') return country.tags.highPrPathway;

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Header */}
      <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              Study Destinations Intelligence
            </span>
            <span className="text-xs text-slate-400 font-mono">
              9 Target Countries • Pakistan Applicant Focus
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official Country & Visa Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
            Every statutory fact, blocked account sum, embassy fee, admission rule, and post-study work right—verified against official government gazettes, foreign missions, and university portals.
          </p>
        </div>

        {/* Compare CTA */}
        <button
          onClick={() => setIsCompareOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all shadow-md group shrink-0 text-xs font-semibold cursor-pointer"
        >
          <Scale className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>Compare Destinations</span>
        </button>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search country, visa route, or keyword..."
            className="w-full bg-[#0A1128] border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Filter Tag Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-blue-600/20 border border-blue-500 text-blue-300 shadow-sm'
                : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            All Countries ({COUNTRIES_DIRECTORY.length})
          </button>
          <button
            onClick={() => setActiveFilter('no-tuition')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'no-tuition'
                ? 'bg-emerald-600/20 border border-emerald-500 text-emerald-300 shadow-sm'
                : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Tuition-Free / Low Cost
          </button>
          <button
            onClick={() => setActiveFilter('psw-2plus')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'psw-2plus'
                ? 'bg-amber-600/20 border border-amber-500 text-amber-300 shadow-sm'
                : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Post-Study Work 2+ Yrs
          </button>
          <button
            onClick={() => setActiveFilter('schengen')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'schengen'
                ? 'bg-indigo-600/20 border border-indigo-500 text-indigo-300 shadow-sm'
                : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Schengen / EU
          </button>
          <button
            onClick={() => setActiveFilter('high-pr')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'high-pr'
                ? 'bg-teal-600/20 border border-teal-500 text-teal-300 shadow-sm'
                : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            PR Pathway
          </button>
        </div>
      </div>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => {
          return (
            <div
              key={country.slug}
              onClick={() => onSelectCountry(country.slug)}
              className="bg-[#0A1128] border border-slate-800 hover:border-slate-700 hover:bg-[#0c1533] rounded-2xl p-6 shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Flag, Name, Visa Type */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl shrink-0 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
                      {country.flag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {country.name}
                        </h2>
                        {country.isFullyImplemented && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            100% Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {country.visaType}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {country.summary}
                </p>

                {/* Quick Snapshot Specs */}
                <div className="space-y-2 py-3 border-y border-slate-800/80 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Tuition Range:</span>
                    <span className="font-medium text-white">{country.tuitionOverview}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Living / Funds:</span>
                    <span className="font-mono text-slate-200">{country.livingCostMonthly}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Post-Study Work:</span>
                    <span className="font-medium text-amber-400">{country.postStudyWork}</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {country.tags.noTuitionFees && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                      No Tuition Fees
                    </span>
                  )}
                  {country.tags.schengenOrEu && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-950/60 text-indigo-400 border border-indigo-800/60">
                      Schengen Zone
                    </span>
                  )}
                  {country.tags.postStudyWorkYears >= 2 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-950/60 text-amber-400 border border-amber-800/60">
                      PSW 2+ Years
                    </span>
                  )}
                  {country.tags.highPrPathway && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/60">
                      PR Pathway
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Explore Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {country.code}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCountries.length === 0 && (
        <div className="text-center py-16 bg-[#0A1128] border border-slate-800 rounded-3xl p-8">
          <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No matching destinations found</h3>
          <p className="text-xs text-slate-400 mt-1">
            Try adjusting your search query or reset the filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setActiveFilter('all');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30 transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Comparison Modal */}
      <CountryCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectCountry={onSelectCountry}
      />
    </div>
  );
};
