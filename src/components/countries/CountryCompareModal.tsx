import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Scale } from 'lucide-react';
import { COUNTRIES_DIRECTORY, CountryCardSummary } from '../../data/countries';
import { TargetCountrySlug } from '../../data/countries/types';

interface CountryCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (slug: TargetCountrySlug) => void;
}

export const CountryCompareModal: React.FC<CountryCompareModalProps> = ({
  isOpen,
  onClose,
  onSelectCountry,
}) => {
  const [selectedSlugs, setSelectedSlugs] = useState<TargetCountrySlug[]>(['germany', 'uk', 'canada']);

  if (!isOpen) return null;

  const toggleCountry = (slug: TargetCountrySlug) => {
    if (selectedSlugs.includes(slug)) {
      if (selectedSlugs.length > 2) {
        setSelectedSlugs(selectedSlugs.filter((s) => s !== slug));
      }
    } else {
      if (selectedSlugs.length < 3) {
        setSelectedSlugs([...selectedSlugs, slug]);
      } else {
        setSelectedSlugs([selectedSlugs[1], selectedSlugs[2], slug]);
      }
    }
  };

  const selectedCountries = selectedSlugs
    .map((s) => COUNTRIES_DIRECTORY.find((c) => c.slug === s))
    .filter(Boolean) as CountryCardSummary[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0A1128] border border-slate-800 rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Compare Study Destinations
            </h2>
            <p className="text-xs text-slate-400">
              Select 2 to 3 countries to benchmark costs, visa paths, and post-study opportunities.
            </p>
          </div>
        </div>

        {/* Country Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-800/80">
          {COUNTRIES_DIRECTORY.map((c) => {
            const isSelected = selectedSlugs.includes(c.slug);
            return (
              <button
                key={c.slug}
                onClick={() => toggleCountry(c.slug)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
                {isSelected && <Check className="w-3 h-3 text-emerald-400 ml-1" />}
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-3 font-semibold text-slate-400 uppercase tracking-wider w-1/4">Feature</th>
                {selectedCountries.map((c) => (
                  <th key={c.slug} className="p-3 font-bold text-white text-sm w-1/4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.flag}</span>
                      <span>{c.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="p-3 font-medium text-slate-400">Primary Visa Type</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3 font-mono text-emerald-400 text-[11px]">
                    {c.visaType}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Average Annual Tuition</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3 font-semibold">
                    {c.tuitionOverview}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Monthly Living Cost / Funds</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3">
                    {c.livingCostMonthly}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Post-Study Work Permit</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3 font-semibold text-amber-400">
                    {c.postStudyWork}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Tuition-Free Opportunities</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3">
                    {c.tags.noTuitionFees ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Check className="w-3.5 h-3.5" /> Yes (Public Universities)
                      </span>
                    ) : (
                      <span className="text-slate-500">Standard Tuition</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Permanent Residency Pathway</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3">
                    {c.tags.highPrPathway ? (
                      <span className="text-blue-400 font-semibold">Direct Skilled Graduate Path</span>
                    ) : (
                      <span className="text-slate-400">Point-based / Employer Sponsor</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">European / Schengen Access</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3">
                    {c.tags.schengenOrEu ? (
                      <span className="text-indigo-400 font-semibold">Yes (29 Schengen States)</span>
                    ) : (
                      <span className="text-slate-500">No</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-400">Action</td>
                {selectedCountries.map((c) => (
                  <td key={c.slug} className="p-3">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCountry(c.slug);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold text-xs border border-emerald-500/30 transition-all cursor-pointer"
                    >
                      <span>Explore Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
