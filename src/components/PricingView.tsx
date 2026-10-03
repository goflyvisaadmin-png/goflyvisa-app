import React from 'react';
import { Coins, Check, Sparkles, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

interface PricingViewProps {
  creditsRemaining: number;
  openCreditModal: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ creditsRemaining, openCreditModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Coins className="w-3.5 h-3.5" />
          <span>Pay-As-You-Go Credit System</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Flexible Study-Abroad Credit Packs
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          No recurring subscriptions. Buy credits when you need them and practice at your own pace.
          Every new applicant starts with 3 free evaluation credits upon signup!
        </p>

        <div className="mt-4 inline-block bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-300">
          Your current available balance: <span className="font-bold text-emerald-400">{creditsRemaining} Credits</span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {/* Starter Pack */}
        <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Starter Pack
            </div>
            <div className="text-3xl font-black text-white">$9</div>
            <div className="text-xs text-blue-400 font-semibold mt-1">5 Credits ($1.80 per test)</div>
            <ul className="mt-6 space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5 Full IELTS Speaking or Writing Tests</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official 4-Pillar Score Breakdown</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Detailed grammar slips & corrections table</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full access to speaking cue-card bank</span>
              </li>
            </ul>
          </div>
          <button
            onClick={openCreditModal}
            className="mt-8 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
          >
            Buy 5 Credits
          </button>
        </div>

        {/* IELTS Accelerator Pack (Featured) */}
        <div className="bg-[#0A1128] border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl shadow-emerald-500/10 transform md:-translate-y-2">
          <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
            Most Popular • Best Value
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              IELTS Accelerator Pack
            </div>
            <div className="text-3xl font-black text-white">$19</div>
            <div className="text-xs text-emerald-400 font-semibold mt-1">
              15 Credits ($1.26 per test)
            </div>
            <ul className="mt-6 space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15 Comprehensive Mock Tests</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native Band 8.5+ Rewrites with Speech Audio</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pause & speech hesitation markers analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes 2 Full Visa SOP Refusal Audits</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Credits never expire</span>
              </li>
            </ul>
          </div>
          <button
            onClick={openCreditModal}
            className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            Buy 15 Credits for $19
          </button>
        </div>

        {/* Full Visa Pass */}
        <div className="bg-[#0A1128] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
          <div>
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
              Full Visa Pass
            </div>
            <div className="text-3xl font-black text-white">$49</div>
            <div className="text-xs text-purple-400 font-semibold mt-1">
              50 Credits + Unlimited SOP Audits
            </div>
            <ul className="mt-6 space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50 Full Mock Tests (Speaking & Writing)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unlimited Visa SOP Audits for all 4 nations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Consular Officer Mock Interview Flashcards</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Click Polished Academic Humanized Rewrite</span>
              </li>
            </ul>
          </div>
          <button
            onClick={openCreditModal}
            className="mt-8 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all cursor-pointer"
          >
            Buy Full Visa Pass
          </button>
        </div>
      </div>

      {/* Credit Rules FAQ */}
      <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-400" />
          Frequently Asked Questions
        </h3>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="border-b border-slate-800 pb-3">
            <h4 className="font-bold text-white mb-1">How exactly are credits spent?</h4>
            <p className="text-slate-400">
              Exactly 1 credit is deducted whenever you submit a speaking recording, writing essay, or Statement of Purpose for full AI diagnostic processing. The interactive sandbox demo on the landing page is always free.
            </p>
          </div>

          <div className="border-b border-slate-800 pb-3">
            <h4 className="font-bold text-white mb-1">Do my purchased credits expire?</h4>
            <p className="text-slate-400">
              No. Purchased credits remain valid indefinitely until you use them for your applications.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">Is human sales intervention involved?</h4>
            <p className="text-slate-400">
              Never. GoFlyVisa is 100% self-serve and automated. We do not sell your contact details to recruitment agencies, education agents, or predatory lenders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
