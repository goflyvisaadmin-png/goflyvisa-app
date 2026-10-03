import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Database, Shield, KeyRound, Terminal } from 'lucide-react';

interface SchemaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemaViewerModal: React.FC<SchemaViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [schemaSql, setSchemaSql] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'sql' | 'rls_explainer'>('sql');

  useEffect(() => {
    if (isOpen) {
      fetch('/api/system/schema')
        .then((res) => res.json())
        .then((data) => {
          if (data.schema) setSchemaSql(data.schema);
        })
        .catch(() => {
          setSchemaSql('-- Schema file is located in /supabase/schema.sql');
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0A1128] border border-slate-700/80 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Database className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Supabase PostgreSQL Schema</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800">
                  RLS Enabled
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Production-grade DDL migration script with Row-Level Security for GoFlyVisa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied SQL' : 'Copy Full SQL'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('sql')}
            className={`py-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'sql'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            PostgreSQL SQL Migration (supabase/schema.sql)
          </button>
          <button
            onClick={() => setActiveTab('rls_explainer')}
            className={`py-2.5 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'rls_explainer'
                ? 'border-blue-400 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Row Level Security (RLS) & Architecture
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#070B18]">
          {activeTab === 'sql' ? (
            <pre className="font-mono text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed select-text whitespace-pre">
              {schemaSql || '-- Loading Supabase Schema...'}
            </pre>
          ) : (
            <div className="space-y-6 text-sm text-slate-300 max-w-3xl">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h4 className="text-white font-bold flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Zero Data Leakage with Supabase Row Level Security (RLS)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every study-abroad applicant's audio recordings, IELTS Band 9 diagnostic breakdowns, and confidential
                  Statement of Purpose essays are strictly protected via PostgreSQL Row Level Security.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    `profiles` Table
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-400">
                    <li>• Links 1:1 with <code className="text-slate-200">auth.users(id)</code> via CASCADE.</li>
                    <li>• Tracks atomic <code className="text-slate-200">credits_remaining</code> balance.</li>
                    <li>• Trigger <code className="text-slate-200">handle_new_user()</code> awards 3 free welcome credits.</li>
                  </ul>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    `ielts_evaluations` Table
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-400">
                    <li>• Stores 4-pillar band breakdown (Band 1.0 to 9.0).</li>
                    <li>• Indexes on <code className="text-slate-200">user_id</code> and <code className="text-slate-200">test_type</code>.</li>
                    <li>• JSONB stores fillers, WPM, and Band 8.5 native rewrite.</li>
                  </ul>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    `sop_audits` Table
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-400">
                    <li>• Country specific (Germany, UK, Canada, USA).</li>
                    <li>• Visa refusal risk score (0-100) and severity categorizations.</li>
                    <li>• RLS ensures applicants can only read/insert their own audits.</li>
                  </ul>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    `credit_transactions` Table
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-400">
                    <li>• Immutable ledger of purchases and credit usage.</li>
                    <li>• Deduct function <code className="text-slate-200">deduct_evaluation_credit()</code> executes atomically.</li>
                    <li>• Prevents race conditions during simultaneous tests.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
