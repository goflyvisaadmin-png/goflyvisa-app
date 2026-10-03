export type TargetCountry = 'germany' | 'uk' | 'canada' | 'usa';
export type DegreeLevel = 'bachelors' | 'masters' | 'mba' | 'phd';
export type IeltsTestType = 'speaking' | 'writing_task1' | 'writing_task2';

export interface IeltsEvaluationResult {
  band_overall: number;
  criteria: {
    fluency_coherence: {
      score: number;
      notes: string;
    };
    lexical_resource: {
      score: number;
      notes: string;
    };
    grammatical_range_accuracy: {
      score: number;
      notes: string;
    };
    pronunciation: {
      score: number;
      notes: string;
    };
  };
  fillers_analysis?: {
    count: number;
    words: string[];
    impact: string;
  };
  errors: Array<{
    original: string;
    correction: string;
    rule: string;
  }>;
  band8_rewrite: string;
  speech_stats?: {
    estimated_wpm: number;
    pause_count: number;
    word_count: number;
  };
}

export interface VisaChecklistItem {
  item: string;
  status: 'pass' | 'warn' | 'fail';
  details: string;
}

export interface RedFlagItem {
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  excerpt: string;
  fix_recommendation: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface OfficerQuestionItem {
  question: string;
  recommended_talking_points: string;
}

export interface SopAuditResult {
  risk_score: number; // 0 - 100
  risk_level: 'Low' | 'Medium' | 'High' | 'Critical';
  overall_summary: string;
  visa_checklist: VisaChecklistItem[];
  red_flags: RedFlagItem[];
  strengths: StrengthItem[];
  humanized_rewrite_text: string;
  officer_mock_questions: OfficerQuestionItem[];
}

export interface UserProfile {
  userId: string;
  email: string;
  creditsRemaining: number;
  history: Array<{
    id: string;
    type: 'ielts' | 'sop';
    timestamp: string;
    summary: string;
    bandOrRisk: string;
  }>;
}

export interface CueCardPrompt {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  topic: string;
  bullets?: string[];
  suggestedPrepSec?: number;
  suggestedSpeakingSec?: number;
}
