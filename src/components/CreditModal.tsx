import React, { useState } from 'react';
import { X, Sparkles, Check, ShieldCheck, Zap, CreditCard, ArrowRight } from 'lucide-react';

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  creditsRemaining: number;
  onSuccessPurchase: (added: number) => void;
}

export const CreditModal: React.FC<CreditModalProps> = ({
  isOpen,
  onClose,
  creditsRemaining,
  onSuccessPurchase,
}) => {
  const [selectedPack, setSelectedPack] = useState<'starter' | 'ielts_pack' | 'visa_pass'>('ielts_pack');
  const [processing, setProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulatePurchase = async () => {
    setProcessing(true);
    setSuccessMessage(null);

    const creditsToAdd = selectedPack === 'starter' ? 5 : selectedPack === 'ielts_pack' ? 15 : 50;

    try {
      const res = await fetch('/api/credits/topup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: selectedPack,
          amount: creditsToAdd,
        }),
      });

      const data = await res.json();
      if (data.success) {
        onSuccessPurchase(creditsToAdd);
        setSuccessMessage(`Successfully added +${creditsToAdd} evaluation credits! New balance: ${data.newBalance}`);
        setTimeout(() => {
          setSuccessMessage(null);
          onClose();
        }, 1800);
      }
    } catch (e) {
      // Local fallback
      onSuccessPurchase(creditsToAdd);
      setSuccessMessage(`Simulated payment complete. +${creditsToAdd} credits added.`);
      setTimeout(() => {
        setSuccessMessage(null);
        onClose();
      }, 1500);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0A1128] border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 to-[#0A1128]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Evaluation Credit Store</h3>
              <p className="text-xs text-slate-400">1 Credit = 1 Comprehensive AI IELTS Diagnostic or Visa SOP Audit</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Balance Notice */}
        <div className="px-6 py-3 bg-emerald-950/30 border-b border-emerald-900/40 flex items-center justify-between text-xs">
          <span className="text-slate-300">Your Current Available Balance:</span>
          <span className="font-bold text-emerald-400 text-sm font-mono">{creditsRemaining} Credits</span>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mx-6 mt-4 p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-emerald-300 text-xs font-semibold animate-in slide-in-from-top-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Starter Pack */}
          <div
            onClick={() => setSelectedPack('starter')}
            className={`cursor-pointer rounded-xl p-4 border transition-all relative flex flex-col justify-between ${
              selectedPack === 'starter'
                ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-500/10'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Starter</div>
              <div className="text-2xl font-black text-white">$9</div>
              <div className="text-xs text-blue-400 font-semibold mt-1">5 Credits ($1.80/test)</div>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>5 IELTS speaking/writing evaluations</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Grammar and band breakdown</span>
                </li>
              </ul>
            </div>
            <div className={`mt-4 text-center py-1.5 rounded-lg text-xs font-semibold ${selectedPack === 'starter' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
              Select Pack
            </div>
          </div>

          {/* IELTS Accelerator Pack (Most Popular) */}
          <div
            onClick={() => setSelectedPack('ielts_pack')}
            className={`cursor-pointer rounded-xl p-4 border transition-all relative flex flex-col justify-between ${
              selectedPack === 'ielts_pack'
                ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">IELTS Accelerator</div>
              <div className="text-2xl font-black text-white">$19</div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">15 Credits ($1.26/test)</div>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>15 Mock Speaking & Writing tests</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Native Band 8+ rewrites with TTS audio</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pause & filler word metrics</span>
                </li>
              </ul>
            </div>
            <div className={`mt-4 text-center py-1.5 rounded-lg text-xs font-semibold ${selectedPack === 'ielts_pack' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>
              Select Pack
            </div>
          </div>

          {/* Full Visa Pass */}
          <div
            onClick={() => setSelectedPack('visa_pass')}
            className={`cursor-pointer rounded-xl p-4 border transition-all relative flex flex-col justify-between ${
              selectedPack === 'visa_pass'
                ? 'bg-purple-950/40 border-purple-500 shadow-md shadow-purple-500/10'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Full Visa Pass</div>
              <div className="text-2xl font-black text-white">$49</div>
              <div className="text-xs text-purple-400 font-semibold mt-1">50 Credits + Unlimited SOP</div>
              <ul className="mt-4 space-y-2 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>50 Full IELTS/PTE Diagnostics</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Unlimited Embassy SOP Audits</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Consular Officer Mock Flashcards</span>
                </li>
              </ul>
            </div>
            <div className={`mt-4 text-center py-1.5 rounded-lg text-xs font-semibold ${selectedPack === 'visa_pass' ? 'bg-purple-600 text-white font-bold' : 'bg-slate-800 text-slate-300'}`}>
              Select Pack
            </div>
          </div>
        </div>

        {/* Footer / Instant Checkout Action */}
        <div className="p-6 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero human agent markups. 100% anonymous & encrypted.</span>
          </div>

          <button
            onClick={handleSimulatePurchase}
            disabled={processing}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
          >
            {processing ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                Refueling Credits...
              </span>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Authorize & Top Up Balance</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
