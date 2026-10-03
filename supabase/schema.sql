-- ============================================================================
-- GoFlyVisa - Supabase PostgreSQL Database Schema & Migration
-- High-Performance Self-Serve AI Platform for Study-Abroad & Visa Applicants
-- ============================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- 1. Custom Types & Enums
-- ----------------------------------------------------------------------------
CREATE TYPE ielts_test_type AS ENUM ('speaking', 'writing_task1', 'writing_task2');
CREATE TYPE target_country_type AS ENUM ('germany', 'uk', 'canada', 'usa');
CREATE TYPE degree_level_type AS ENUM ('bachelors', 'masters', 'mba', 'phd');
CREATE TYPE transaction_status_type AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- ----------------------------------------------------------------------------
-- 2. Profiles Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  credits_remaining INTEGER NOT NULL DEFAULT 3 CHECK (credits_remaining >= 0),
  is_premium BOOLEAN NOT NULL DEFAULT FALSE,
  target_country target_country_type DEFAULT 'germany',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index on email for rapid lookup
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- ----------------------------------------------------------------------------
-- 3. IELTS & PTE Evaluations Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.ielts_evaluations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  test_type ielts_test_type NOT NULL,
  topic_prompt TEXT NOT NULL,
  input_text_or_audio_url TEXT NOT NULL,
  band_overall NUMERIC(3, 1) NOT NULL CHECK (band_overall >= 1.0 AND band_overall <= 9.0),
  band_fluency NUMERIC(3, 1) NOT NULL CHECK (band_fluency >= 1.0 AND band_fluency <= 9.0),
  band_lexical NUMERIC(3, 1) NOT NULL CHECK (band_lexical >= 1.0 AND band_lexical <= 9.0),
  band_grammar NUMERIC(3, 1) NOT NULL CHECK (band_grammar >= 1.0 AND band_grammar <= 9.0),
  band_pronunciation_or_task NUMERIC(3, 1) NOT NULL CHECK (band_pronunciation_or_task >= 1.0 AND band_pronunciation_or_task <= 9.0),
  speech_metrics JSONB DEFAULT '{}'::jsonb, -- e.g. { "wpm": 138, "pause_count": 4, "fillers": ["um", "like"] }
  feedback_json JSONB NOT NULL DEFAULT '{}'::jsonb, -- detailed diagnostic breakdowns
  errors_detected JSONB NOT NULL DEFAULT '[]'::jsonb, -- [{ "original": "...", "correction": "...", "rule": "..." }]
  model_band8_rewrite TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_ielts_user_id ON public.ielts_evaluations(user_id);
CREATE INDEX IF NOT EXISTS idx_ielts_test_type ON public.ielts_evaluations(test_type);
CREATE INDEX IF NOT EXISTS idx_ielts_created_at ON public.ielts_evaluations(created_at DESC);

-- ----------------------------------------------------------------------------
-- 4. SOP & Embassy Risk Audits Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sop_audits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  target_country target_country_type NOT NULL,
  target_university TEXT NOT NULL,
  degree_level degree_level_type NOT NULL DEFAULT 'masters',
  program_name TEXT,
  original_sop_text TEXT NOT NULL,
  word_count INTEGER GENERATED ALWAYS AS (array_length(regexp_split_to_array(original_sop_text, '\s+'), 1)) STORED,
  risk_score INTEGER NOT NULL CHECK (risk_score >= 0 AND risk_score <= 100), -- 0 = No risk, 100 = Guaranteed refusal
  risk_level TEXT NOT NULL CHECK (risk_level IN ('Low', 'Medium', 'High', 'Critical')),
  red_flags_json JSONB NOT NULL DEFAULT '[]'::jsonb, -- [{ "category": "Dual-Intent", "excerpt": "...", "severity": "High", "fix_recommendation": "..." }]
  strengths_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  visa_checklist_audit JSONB NOT NULL DEFAULT '{}'::jsonb, -- Embassy-specific compliance check
  humanized_rewrite_text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_sop_user_id ON public.sop_audits(user_id);
CREATE INDEX IF NOT EXISTS idx_sop_target_country ON public.sop_audits(target_country);
CREATE INDEX IF NOT EXISTS idx_sop_risk_score ON public.sop_audits(risk_score);

-- ----------------------------------------------------------------------------
-- 5. Credit Transactions Table
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.credit_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  amount INTEGER NOT NULL, -- e.g. +5, +15, +50, or -1 for consumption
  package_name TEXT,
  currency TEXT DEFAULT 'USD',
  price_paid_cents INTEGER DEFAULT 0,
  payment_provider TEXT NOT NULL DEFAULT 'stripe', -- 'stripe', 'paypal', 'system_promo'
  transaction_ref TEXT,
  status transaction_status_type NOT NULL DEFAULT 'completed',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_tx_user_id ON public.credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_tx_status ON public.credit_transactions(status);

-- ----------------------------------------------------------------------------
-- 6. Row Level Security (RLS) Policies
-- ----------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ielts_evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sop_audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can view & update only their own profile
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- IELTS Evaluations: Users can only see and insert their own records
CREATE POLICY "Users can view own IELTS evaluations"
  ON public.ielts_evaluations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own IELTS evaluations"
  ON public.ielts_evaluations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- SOP Audits: Users can only see and insert their own records
CREATE POLICY "Users can view own SOP audits"
  ON public.sop_audits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own SOP audits"
  ON public.sop_audits FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Credit Transactions: Users can view their transaction history
CREATE POLICY "Users can view own credit transactions"
  ON public.credit_transactions FOR SELECT
  USING (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- 7. Trigger: Auto-create Profile on Auth User Sign Up
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, credits_remaining)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    3 -- 3 free evaluation credits upon signup
  );
  
  -- Record the promotional starter credit bonus
  INSERT INTO public.credit_transactions (user_id, amount, package_name, payment_provider, status)
  VALUES (
    new.id,
    3,
    'Welcome Starter Pack',
    'system_promo',
    'completed'
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Bind trigger to auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ----------------------------------------------------------------------------
-- 8. Stored Procedure: Atomic Credit Deduction Function
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.deduct_evaluation_credit(p_user_id UUID, p_feature TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  v_current_credits INTEGER;
BEGIN
  SELECT credits_remaining INTO v_current_credits
  FROM public.profiles
  WHERE id = p_user_id
  FOR UPDATE;

  IF v_current_credits IS NULL OR v_current_credits < 1 THEN
    RAISE EXCEPTION 'Insufficient credits';
  END IF;

  UPDATE public.profiles
  SET credits_remaining = credits_remaining - 1,
      updated_at = timezone('utc'::text, now())
  WHERE id = p_user_id;

  INSERT INTO public.credit_transactions (user_id, amount, package_name, payment_provider, status)
  VALUES (p_user_id, -1, p_feature, 'credit_burn', 'completed');

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
