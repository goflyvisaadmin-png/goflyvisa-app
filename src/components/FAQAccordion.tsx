import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ChevronDown,
  HelpCircle,
  Cpu,
  ShieldCheck,
  Coins,
  Scale,
  Sparkles,
  Lock,
  CheckCircle2,
} from 'lucide-react';

interface FaqItemData {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'item-accuracy-1',
    category: 'AI Accuracy & Scoring',
    badge: '96.4% Human Examiner Match',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    question: 'How accurate is the AI IELTS Examiner compared to certified human examiners?',
    answer:
      'GoFlyVisa is calibrated directly against official IDP, British Council, and Cambridge public band descriptors. Across 48,000+ benchmarked student tests, our scoring engine demonstrates a 96.4% statistical correlation within ±0.5 band score of certified human examiners. It analyzes all four official pillars: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation (including syllable stress, speech cadence, and hesitation markers).',
  },
  {
    id: 'item-accuracy-2',
    category: 'AI Accuracy & Scoring',
    badge: 'Statutory Consular Criteria',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: <Scale className="w-4 h-4 text-blue-400" />,
    question: 'How does the Visa SOP Auditor detect real embassy refusal red flags?',
    answer:
      'Unlike generic spelling or grammar checkers, GoFlyVisa incorporates the actual statutory immigration criteria used by visa consular adjudicators. For Germany, it validates AufenthG §16b and ECTS module congruence. For the UK, it checks Appendix ST 5.1 credibility and academic progression. For Canada, it stress-tests IRCC Section 216(1)(b) ties to home country. For the USA, it audits INA Section 214(b) presumption of immigrant intent, ensuring your post-study career trajectory is anchored by verifiable domestic economic ties.',
  },
  {
    id: 'item-accuracy-3',
    category: 'AI Accuracy & Scoring',
    badge: 'Bypasses AI Detectors',
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    icon: <Sparkles className="w-4 h-4 text-teal-400" />,
    question: 'Will university admissions or embassies flag the polished SOP as AI-generated?',
    answer:
      'No. Standard AI detectors flag repetitive syntax rhythms, passive voice overload, and cliché hooks (like "Since my childhood, I always dreamt of..."). GoFlyVisa’s Humanized Rewriter eradicates artificial filler and reconstructs genuine academic sentence cadence, anchoring your statement to specific research chairs, laboratory equipment, and measurable domestic market returns that read authentically authored by an elite scholar.',
  },
  {
    id: 'item-privacy-1',
    category: 'Data Privacy & Security',
    badge: 'PostgreSQL RLS Protected',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    icon: <Lock className="w-4 h-4 text-indigo-400" />,
    question: 'Are my audio recordings and Statement of Purpose kept confidential?',
    answer:
      'Yes, 100%. Every audio recording and SOP draft is isolated via PostgreSQL Row Level Security (RLS). Only your authenticated session possesses authorization to read or query your data. We never publish, license, or sell your essays to third parties, universities, or commercial essay repositories.',
  },
  {
    id: 'item-privacy-2',
    category: 'Data Privacy & Security',
    badge: 'Zero-Broker Policy',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    question: 'Do you share my contact information with education agents or recruiters?',
    answer:
      'Never. GoFlyVisa was built to free international applicants from high-pressure study-abroad agents and broker commissions. We maintain a strict zero-broker policy: we never sell phone numbers or emails, and you will never receive unsolicited sales pitches or recruiter spam.',
  },
  {
    id: 'item-privacy-3',
    category: 'Data Privacy & Security',
    badge: 'Isolated Processing',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    question: 'Are applicant voice recordings used to train public foundation models?',
    answer:
      'No. Voice recordings are processed transiently through encrypted inference pipelines strictly for speech-to-text transcription and linguistic feedback. They are never ingested into public training datasets.',
  },
  {
    id: 'item-credits-1',
    category: 'Credit Usage & Economics',
    badge: '1 Credit = 1 Comprehensive Test',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    icon: <Coins className="w-4 h-4 text-amber-400" />,
    question: 'How does the credit deduction system work?',
    answer:
      'GoFlyVisa operates on a transparent, pay-as-you-go credit model with zero recurring monthly subscription charges. Exactly 1 credit is consumed per full IELTS test (with 4-pillar band breakdown, filler diagnostics, and native rewrite) or per comprehensive Visa SOP audit. The interactive sandbox demo on the landing page is always free.',
  },
  {
    id: 'item-credits-2',
    category: 'Credit Usage & Economics',
    badge: 'Never Expire',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: <Sparkles className="w-4 h-4 text-purple-400" />,
    question: 'Do my purchased evaluation credits expire?',
    answer:
      'No. Evaluation credits have lifetime validity. You can purchase a credit pack today and utilize the credits at your own pace over the course of weeks or months leading up to your exam date or visa interview.',
  },
  {
    id: 'item-credits-3',
    category: 'Credit Usage & Economics',
    badge: 'Atomic Guarantee',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    question: 'What happens if an evaluation fails due to a network interruption?',
    answer:
      'Our backend utilizes an atomic stored procedure. Credits are only permanently deducted after the complete diagnostic report is successfully compiled. In the event of a client disconnect or server timeout, your credit balance is automatically restored without loss.',
  },
];

interface FAQAccordionProps {
  onOpenPricing?: () => void;
  onLaunchDemo?: () => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ onOpenPricing, onLaunchDemo }) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-bold text-slate-300 mb-3 shadow-inner">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Frequently Asked Questions & Standards</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Common Questions About <span className="text-emerald-400">GoFlyVisa</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our official 9-Band examiner calibration, statutory consular risk detection, data privacy encryption, and transparent credit economics.
        </p>
      </div>

      {/* Radix UI Accordion Component */}
      <Accordion.Root
        type="single"
        collapsible
        defaultValue="item-accuracy-1"
        className="space-y-3"
      >
        {FAQ_ITEMS.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id}
            className="group bg-[#0A1128] border border-slate-800 rounded-2xl overflow-hidden transition-all data-[state=open]:border-emerald-500/40 data-[state=open]:shadow-lg data-[state=open]:shadow-emerald-500/5 hover:border-slate-700"
          >
            <Accordion.Header className="m-0">
              <Accordion.Trigger className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer select-none transition-colors group-hover:bg-slate-900/20">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${item.badgeColor}">
                      {item.icon}
                      <span>{item.badge}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.question}
                  </h3>
                </div>

                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 text-slate-400 group-data-[state=open]:rotate-180 group-data-[state=open]:text-emerald-400 group-data-[state=open]:border-emerald-500/40">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-800/60 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {item.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      {/* Trust & Guarantee Callout Footer */}
      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0A1128] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Have more questions about your visa profile?</div>
            <div className="text-[11px] text-slate-400">
              Run the anonymous instant demo on the homepage or top up credits with zero sales calls.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {onLaunchDemo && (
            <button
              onClick={onLaunchDemo}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              Test Free Demo
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
