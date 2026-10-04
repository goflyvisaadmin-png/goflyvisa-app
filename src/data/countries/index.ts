import { CountryGuideData, TargetCountrySlug } from './types';
import { GERMANY_GUIDE_DATA } from './germany';
import { UK_GUIDE_DATA } from './uk';
import { canadaGuide as CANADA_GUIDE_DATA } from './canada';
import { usaGuide as USA_GUIDE_DATA } from './usa';
import { australiaGuide as AUSTRALIA_GUIDE_DATA } from './australia';

export interface CountryCardSummary {
  slug: TargetCountrySlug;
  name: string;
  code: string;
  flag: string;
  visaType: string;
  summary: string;
  tuitionOverview: string;
  livingCostMonthly: string;
  postStudyWork: string;
  tags: {
    noTuitionFees: boolean;
    postStudyWorkYears: number;
    englishTaughtWideAvailability: boolean;
    schengenOrEu: boolean;
    highPrPathway: boolean;
  };
  isFullyImplemented: boolean;
}

export const COUNTRIES_DIRECTORY: CountryCardSummary[] = [
  {
    slug: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    visaType: 'National Visa (AufenthG §16b)',
    summary: 'Tuition-free public universities, 18-month job seeker permit, and fast-track EU Blue Card pathways.',
    tuitionOverview: '€0 (Tuition-free at 95%+ public universities)',
    livingCostMonthly: '€992 / mo (Blocked Account: €11,904/yr)',
    postStudyWork: '18 Months (§20 AufenthG)',
    tags: {
      noTuitionFees: true,
      postStudyWorkYears: 1.5,
      englishTaughtWideAvailability: true,
      schengenOrEu: true,
      highPrPathway: true,
    },
    isFullyImplemented: true,
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    visaType: 'Student Route (CAS & Appendix ST)',
    summary: '1-year Master programs, Russell Group excellence, and 2-year Graduate Route post-study work visa.',
    tuitionOverview: '£13,000–£32,000 / year',
    livingCostMonthly: '£1,136 / mo (£10,224 outside London)',
    postStudyWork: '2 Years (Graduate Route)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 2,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: false,
    },
    isFullyImplemented: true,
  },
  {
    slug: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    visaType: 'Study Permit (IRCC PAL & §216 Guidelines)',
    summary: 'Top research universities, Provincial Attestation Letters (PAL), and Post-Graduation Work Permit (PGWP).',
    tuitionOverview: 'CAD $16,000–$45,000 / year',
    livingCostMonthly: 'CAD $20,635 / yr (GIC financial requirement)',
    postStudyWork: 'Up to 3 Years (PGWP)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 3,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: true,
    },
    isFullyImplemented: true,
  },
  {
    slug: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    visaType: 'F-1 Academic Student Visa (INA §101(a)(15)(F))',
    summary: 'Ivy League, Silicon Valley tech hubs, and up to 3 years of OPT / STEM OPT work authorization.',
    tuitionOverview: '$20,000–$55,000 / year',
    livingCostMonthly: '$1,200–$2,200 / mo (Form I-20 proof of funds)',
    postStudyWork: '1 to 3 Years (OPT & STEM Extension)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 3,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: false,
    },
    isFullyImplemented: true,
  },
  {
    slug: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    visaType: 'Student Visa (Subclass 500 & Genuine Student)',
    summary: 'Group of Eight prestige, Subclass 485 Temporary Graduate visa, and 48 hours/fortnight work rights.',
    tuitionOverview: 'AUD $25,000–$48,000 / year',
    livingCostMonthly: 'AUD $29,710 / yr (Dept of Home Affairs benchmark)',
    postStudyWork: '2 to 3 Years (Subclass 485)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 2,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: true,
    },
    isFullyImplemented: true,
  },
  {
    slug: 'china',
    name: 'China',
    code: 'CN',
    flag: '🇨🇳',
    visaType: 'X1 (Long-Term) / X2 Student Visa (JW201/JW202)',
    summary: 'CSC government scholarships, affordable tuition, and cutting-edge AI & hardware manufacturing ecosystems.',
    tuitionOverview: '¥18,000–¥45,000 / year (Many full scholarships)',
    livingCostMonthly: '¥2,500–¥4,500 / mo',
    postStudyWork: '1 to 2 Years (Work Permit Z / Internship)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 1,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: false,
    },
    isFullyImplemented: false,
  },
  {
    slug: 'italy',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    visaType: 'National Visa Type D (Universitaly & CIMEA)',
    summary: 'Historic European universities, regional DSU scholarships offering full living grants, and Schengen mobility.',
    tuitionOverview: '€900–€4,000 / year (Based on ISEE Parificato)',
    livingCostMonthly: '€6,079 / yr (Statutory bank guarantee requirement)',
    postStudyWork: '1 Year (Job Search Permit - Permesso di Soggiorno)',
    tags: {
      noTuitionFees: true,
      postStudyWorkYears: 1,
      englishTaughtWideAvailability: true,
      schengenOrEu: true,
      highPrPathway: false,
    },
    isFullyImplemented: false,
  },
  {
    slug: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    visaType: 'Long-Stay Visa / VLS-TS (Campus France)',
    summary: 'Subsidized public tuition, CAF student housing allowances, and 1-2 year APS/RECE post-study job seeker permits.',
    tuitionOverview: '€2,770–€3,770 / year (Public Master fee / Bienvenue en France)',
    livingCostMonthly: '€615 / mo (Statutory resource benchmark)',
    postStudyWork: '1 to 2 Years (RECE / APS Permit)',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 2,
      englishTaughtWideAvailability: true,
      schengenOrEu: true,
      highPrPathway: false,
    },
    isFullyImplemented: false,
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    flag: '🇲🇾',
    visaType: 'Student Pass (EMGS eVAL Approval)',
    summary: 'Ultra-affordable living costs, UK/Australian branch campuses, 100% English medium, and high visa approval rates.',
    tuitionOverview: 'MYR 15,000–35,000 / year',
    livingCostMonthly: 'MYR 1,500–2,500 / mo (~$350–$550)',
    postStudyWork: 'Passes via Employment Pass / Digital Nomad',
    tags: {
      noTuitionFees: false,
      postStudyWorkYears: 1,
      englishTaughtWideAvailability: true,
      schengenOrEu: false,
      highPrPathway: false,
    },
    isFullyImplemented: false,
  },
];

export const FULL_COUNTRY_GUIDES: Partial<Record<TargetCountrySlug, CountryGuideData>> = {
  germany: GERMANY_GUIDE_DATA,
  uk: UK_GUIDE_DATA,
  canada: CANADA_GUIDE_DATA,
  usa: USA_GUIDE_DATA,
  australia: AUSTRALIA_GUIDE_DATA,
};

export function getCountryGuide(slug: TargetCountrySlug): CountryGuideData | null {
  return FULL_COUNTRY_GUIDES[slug] || null;
}

export function getCountrySummary(slug: TargetCountrySlug): CountryCardSummary | undefined {
  return COUNTRIES_DIRECTORY.find((c) => c.slug === slug);
}
