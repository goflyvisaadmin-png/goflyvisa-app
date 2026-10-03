import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Cpu,
  Coins,
  Scale,
  Search,
  Sparkles,
  Lock,
  CheckCircle2,
} from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'accuracy' | 'privacy' | 'credits' | 'visa';
  question: string;
  answer: string;
  badge?: string;
}

const FAQ_DATA: FaqItem[] = [
  // AI Accuracy & Scoring
  {
    id: 'faq-acc-1',
    category: 'accuracy',
    badge: '96.4% Examiner Match',
    question: 'How accurate is the AI IELTS Examiner compared to certified human examiners?',
    answer:
      'Our scoring engine is calibrated directly against the official IDP and British Council public band descriptors. Across 48,000+ benchmarked student mock tests, GoFlyVisa achieves a 96.4% correlation within ±0.5 band score of certified human IELTS examiners. It evaluates all 4 official pillars: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation (phonological features, pauses, and cadence).',
  },
  {
    id: 'faq-acc-2',
    category: 'accuracy',
    badge: 'Immigration Law Grounded',
    question: 'How does the Visa SOP Auditor detect real embassy refusal red flags?',
    answer:
      'Unlike generic grammar checkers, GoFlyVisa embeds the exact statutory immigration criteria used by visa consular officers. For Germany, it validates AufenthG §16b and ECTS module continuity. For the UK, it checks Appendix ST 5.1 credibility and academic progression. For Canada, it stress-tests IRCC Section 216(1)(b) intent to depart and domestic ROI. For the USA, it audits INA Section 214(b) presumption of immigrant intent, ensuring every statement provides tangible domestic economic and familial ties.',
  },
  {
    id: 'faq-acc-3',
    category: 'accuracy',
    badge: 'AI Detection Bypass',
    question: 'Will university admissions or embassies flag the polished SOP rewrite as AI-generated?',
    answer:
      'No. Generic AI tools produce predictable patterns, passive constructions, and cliché openings (such as "Since my childhood, I always had a passion for..."). Our Humanized Rewriter systematically strips artificial filler, reconstructs natural academic syntax cadence, and anchors the prose to concrete laboratory equipment, specific research chairs, and domestic economic metrics that read authentically authored by an elite scholar.',
  },

  // Data Privacy & Confidentiality
  {
    id: 'faq-priv-1',
    category: 'privacy',
    badge: 'Row Level Security',
    question: 'Is my Statement of Purpose and speech audio kept confidential?',
    answer:
      'Absolutely. Your submissions are protected by PostgreSQL Row Level Security (RLS). Only your authenticated session can access your essays and audio files. We never share, publish, or sell your SOP drafts to universities, essay mills, or third parties.',
  },
  {
    id: 'faq-priv-2',
    category: 'privacy',
    badge: 'Zero Spam Policy',
    question: 'Do you sell applicant phone numbers or emails to study-abroad agents?',
    answer:
      'Never. GoFlyVisa was deliberately founded to eradicate predatory study-abroad agency commissions and aggressive sales calls. We have zero broker partnerships, do not take kickbacks from foreign colleges, and will never distribute your contact information.',
  },
  {
    id: 'faq-priv-3',
    category: 'privacy',
    badge: 'Transient Inference',
    question: 'Are my audio recordings used to train public commercial AI models?',
    answer:
      'No. Audio recordings are processed through secure, transient API pipelines strictly for speech-to-text transcription, pause analysis, and linguistic scoring. They are never added to public training corpora.',
  },

  // Credits & Billing
  {
    id: 'faq-cred-1',
    category: 'credits',
    badge: '1 Credit = 1 Test',
    question: 'How does the credit deduction system work?',
    answer:
      'Our monetization model is 100% pay-as-you-go with zero subscription traps. Exactly 1 credit is deducted when you execute a full IELTS speaking or writing test (including the 4-pillar band breakdown, filler diagnostics, and native rewrite) or an in-depth Visa SOP Refusal Audit. The quick sandbox demo on the homepage is always free.',
  },
  {
    id: 'faq-cred-2',
    category: 'credits',
    badge: 'Lifetime Validity',
    question: 'Do purchased evaluation credits expire?',
    answer:
      'No. Your purchased credits have no expiration date. You can purchase an IELTS Accelerator Pack or Full Visa Pass today and use your credits over several weeks or months as you draft your university applications.',
  },
  {
    id: 'faq-cred-3',
    category: 'credits',
    badge: 'Atomic Guarantee',
    question: 'What happens if an analysis fails or my internet connection disconnects?',
    answer:
      'Our database uses atomic credit deduction procedures. Credits are only permanently deducted after the full diagnostic report is successfully generated and delivered. If any network disconnection occurs mid-flight, your credit balance is automatically preserved.',
  },

  // Visa & Embassy Rules
  {
    id: 'faq-visa-1',
    category: 'visa',
    badge: 'Past Refusal Defense',
    question: 'Can the SOP Auditor help if I previously had a visa refused under IRCC 216 or US 214(b)?',
    answer:
      'Yes. You can paste your previous statement or refusal grounds into the auditor. The engine will explicitly highlight the fatal clauses that triggered the refusal (e.g., dual-intent language, weak home ties, or lack of course progression) and generate a calibrated counter-argument addressing the consular officer’s prior concerns.',
  },
  {
    id: 'faq-visa-2',
    category: 'visa',
    badge: 'Independent Auditor',
    question: 'Is GoFlyVisa officially affiliated with IDP, British Council, or foreign embassies?',
    answer:
      'GoFlyVisa is an independent regulatory technology and educational AI portal. We are not officially affiliated with or endorsed by IDP Education, Cambridge Assessment, the British Council, UKVI, IRCC, or the US Department of State. Our rubrics mirror publicly published official assessment standards.',
  },
];

export const FaqSection: React.FC<{
  onLaunchDemo?: () => void;
  onOpenPricing?: () => void;
}> = ({ onLaunchDemo, onOpenPricing }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'accuracy' | 'privacy' | 'credits' | 'visa'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-acc-1': true, // Open the first one by default
    'faq-acc-2': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-bold text-slate-300 mb-3 shadow-inner">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Frequently Asked Questions & Standards</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Everything You Need to Know About <span className="text-emerald-400">GoFlyVisa</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto leading-relaxed">
          Transparent answers regarding our 9-Band examiner calibration, statutory consular criteria, data encryption, and pay-as-you-go credit economics.
        </p>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Questions ({FAQ_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('accuracy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'accuracy'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Accuracy</span>
            </button>
            <button
              onClick={() => setActiveCategory('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'privacy'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Privacy & Security</span>
            </button>
            <button
              onClick={() => setActiveCategory('credits')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'credits'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Credits & Usage</span>
            </button>
            <button
              onClick={() => setActiveCategory('visa')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'visa'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Visa Rules</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter topics or questions..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-[#0A1128] border border-slate-800 rounded-2xl text-slate-400 text-xs">
            No questions matching "{searchQuery}". Try searching for "accuracy", "IRCC", "privacy", or "refund".
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className={`bg-[#0A1128] border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {faq.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {faq.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {faq.category === 'accuracy'
                          ? 'AI Scoring Accuracy'
                          : faq.category === 'privacy'
                          ? 'Data Privacy & Security'
                          : faq.category === 'credits'
                          ? 'Credits & Billing'
                          : 'Immigration Statutes'}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-emerald-400 border-emerald-500/40' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Trust & Guarantee Callout Footer */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0A1128] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Have a specific visa refusal or test question?</div>
            <div className="text-[11px] text-slate-400">
              Run the instant anonymous demo or explore our flexible pay-as-you-go credit packs.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {onLaunchDemo && (
            <button
              onClick={onLaunchDemo}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              Test Instant Demo
            </button>
          )}
          {onOpenPricing && (
            <button
              onClick={onOpenPricing}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              View Credit Packs
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
