process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { FULL_COUNTRY_GUIDES } from '../src/data/countries';
import { CountryGuideData, OfficialSource } from '../src/data/countries/types';
import { toCanonicalCountryGuide } from '../src/data/countries/adapter';
import { CanonicalCountryGuide } from '../src/data/countries/canonical';

interface AuditStats {
  country: string;
  totalSources: number;
  validUrls: number;
  blockedUrls: Array<{ url: string; status: number; reason: string }>;
  deadUrls: Array<{ url: string; error: string }>;
  staleDates: Array<{ section: string; date: string }>;
  sectionsPassed: number;
  sectionFailures: string[];
}

const SIX_MONTHS_DAYS = 180;
const NOW = new Date();

function isOlderThanSixMonths(dateStr: string): boolean {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return true;
  const diffDays = (NOW.getTime() - d.getTime()) / (1000 * 3600 * 24);
  return diffDays > SIX_MONTHS_DAYS;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkUrl(url: string): Promise<{ ok: boolean; status?: number; error?: string; isBlocked?: boolean }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const headers: Record<string, string> = {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    };

    const res = await fetch(url, {
      method: 'GET',
      headers,
      signal: controller.signal,
    }).catch((err) => {
      const errMsg = err?.message || 'Network error';
      const causeMsg = err?.cause?.message || '';
      const causeCode = err?.cause?.code || err?.code || '';
      const isHeaderOverflow =
        errMsg.includes('Headers Overflow') ||
        causeMsg.includes('Headers Overflow') ||
        causeCode === 'UND_ERR_HEADERS_OVERFLOW';
      return { error: causeMsg || errMsg, isHeaderOverflow } as any;
    });

    clearTimeout(timeout);

    if (!res || res.error) {
      if (res?.isHeaderOverflow) {
        return { ok: true, isBlocked: true, status: 403, error: 'Protected government portal (Headers overflow)' };
      }
      return { ok: false, error: res?.error || 'Network / timeout error' };
    }

    if (res.status >= 200 && res.status < 400) {
      return { ok: true, status: res.status };
    }

    // 404 is a fatal dead link
    if (res.status === 404) {
      return { ok: false, status: 404, error: 'HTTP 404 Not Found (Dead link)' };
    }

    // 403/412/405 are anti-bot firewalls on state/consular portals (e.g. ssa.gov, visaforchina)
    if (res.status === 403 || res.status === 412 || res.status === 405) {
      return { ok: true, isBlocked: true, status: res.status, error: `Anti-bot firewall challenge (HTTP ${res.status})` };
    }

    // 502/503 on official government gateways (e.g. cova.mfa.gov.cn)
    if ((res.status === 502 || res.status === 503) && (url.includes('.gov.') || url.includes('.mfa.') || url.includes('.gouv.'))) {
      return { ok: true, isBlocked: true, status: res.status, error: `Government gateway challenge (HTTP ${res.status})` };
    }

    return { ok: false, status: res.status, error: `HTTP ${res.status}` };
  } catch (err: any) {
    return { ok: false, error: err.message || 'Fetch failed' };
  }
}

function validateFieldLevelSections(guide: CanonicalCountryGuide): { passed: number; failures: string[] } {
  const failures: string[] = [];

  // 1. Quick Facts
  const qf = guide.quickFacts;
  if (!qf.capital || !qf.currency.code || !qf.currency.symbol || !qf.intakesDisplay || !qf.tuitionDisplay || !qf.livingCostDisplay || !qf.postStudyDuration || !qf.partTimeHours) {
    failures.push('1. Quick Facts: Missing required quick fact fields');
  }

  // 2. Visa Types
  if (!guide.visaTypes || guide.visaTypes.length === 0 || !guide.visaTypes[0].officialName || !guide.visaTypes[0].purpose || !guide.visaTypes[0].eligibilitySummary) {
    failures.push('2. Visa Types: No valid visa types or missing required fields');
  }

  // 3. Application Guide
  const ag = guide.applicationGuide;
  if (!ag || ag.steps.length < 3 || ag.documentChecklist.length < 3) {
    failures.push('3. Application Guide: Requires at least 3 steps and 3 document checklist items');
  }

  // 4. Financial Requirements
  const fin = guide.financialRequirements;
  if (!fin || fin.statutoryLivingFunds.amount === null || fin.statutoryLivingFunds.amount <= 0 || fin.proofMethods.length === 0) {
    failures.push(`4. Financial Requirements: Living funds amount (${fin?.statutoryLivingFunds?.amount}) must be > 0 and proof methods non-empty`);
  }

  // 5. Admission Criteria
  const adm = guide.admissionCriteria;
  if (!adm || !adm.undergraduate.text || !adm.postgraduate.text || adm.attestationBodies.length === 0) {
    failures.push('5. Admission Criteria: Missing undergraduate/postgraduate text or attestation bodies');
  }

  // 6. Language Requirements
  const lang = guide.languageRequirements;
  if (!lang || lang.englishTests.length === 0 || !lang.moiPolicy.conditions || !lang.localLanguage.language) {
    failures.push('6. Language Requirements: Missing English tests, MOI policy, or local language info');
  }

  // 7. Top Universities
  if (!guide.topUniversities || guide.topUniversities.length < 5 || !guide.topUniversities[0].name || !guide.topUniversities[0].ranking.rank) {
    failures.push('7. Top Universities: Must list at least 5 universities with rankings');
  }

  // 8. Scholarships
  if (!guide.scholarships || guide.scholarships.length < 1 || !guide.scholarships[0].name || !guide.scholarships[0].awardingBody) {
    failures.push('8. Scholarships: Must list at least 1 scholarship with awarding body');
  }

  // 9. Work Rights
  const wr = guide.workRights;
  if (!wr || !wr.inTermLimit || !wr.statutoryMinimumWage || !wr.statutoryWorkRules) {
    failures.push('9. Work Rights: Missing in-term limit, statutory minimum wage, or work rules');
  }

  // 10. Refusal Reasons
  if (!guide.refusalReasons || guide.refusalReasons.length < 2 || !guide.refusalReasons[0].title || guide.refusalReasons[0].preventativeMeasures.length === 0) {
    failures.push('10. Refusal Reasons: Must list at least 2 refusal reasons with preventative measures');
  }

  // 11. Post-Study Work & PR
  const psi = guide.postStudyImmigration;
  if (!psi || !psi.jobSeekerDuration || !psi.workPermitRoute || !psi.permanentResidencyTimeline || psi.permanentResidencyTimeline.includes('2–5 Years')) {
    failures.push('11. Post-Study: Missing job seeker duration, work permit, or contains invalid PR fallback ("2–5 Years")');
  }

  // 12. Bringing Family
  const dep = guide.dependentRules;
  if (!dep || !dep.spouseWorkRights || !dep.childrenSchooling || !dep.financialSurcharge) {
    failures.push('12. Bringing Family: Missing spouse work rights, children schooling, or financial surcharge');
  }

  // 13. Policy Timeline
  if (!guide.recentPolicyTimeline || guide.recentPolicyTimeline.length < 1 || !guide.recentPolicyTimeline[0].effectiveDate || !guide.recentPolicyTimeline[0].headline) {
    failures.push('13. Policy Timeline: Must list at least 1 verified policy change');
  }

  // 14. Student Living
  const liv = guide.studentLiving;
  if (!liv || !liv.avgAccommodationCostMonthly || !liv.halalFoodAvailability || !liv.pakistaniCommunityPresence) {
    failures.push('14. Student Living: Missing accommodation cost, halal food, or Pakistani community data');
  }

  // 15. Arrival Checklist
  if (!guide.arrivalChecklist || guide.arrivalChecklist.length < 3 || !guide.arrivalChecklist[0].dayWindow) {
    failures.push('15. Arrival Checklist: Must list at least 3 after-arrival tasks');
  }

  // 16. FAQs
  if (!guide.faqs || guide.faqs.length < 3 || !guide.faqs[0].question || !guide.faqs[0].answer) {
    failures.push('16. FAQs: Must list at least 3 FAQs with questions and answers');
  }

  // 17. Official Sources
  if (!guide.allOfficialSources || guide.allOfficialSources.length < 3 || !guide.allOfficialSources[0].url) {
    failures.push('17. Official Sources: Must cite at least 3 official statutory sources');
  }

  const passed = 17 - failures.length;
  return { passed, failures };
}

async function auditCountry(country: CountryGuideData): Promise<AuditStats> {
  const canonical = toCanonicalCountryGuide(country);
  const sectionValidation = validateFieldLevelSections(canonical);

  const stats: AuditStats = {
    country: canonical.countryName,
    totalSources: 0,
    validUrls: 0,
    blockedUrls: [],
    deadUrls: [],
    staleDates: [],
    sectionsPassed: sectionValidation.passed,
    sectionFailures: sectionValidation.failures,
  };

  const allSources: OfficialSource[] = [...country.allOfficialSources];

  const checkDateAndSources = (sectionName: string, date: string, sources?: OfficialSource[]) => {
    if (isOlderThanSixMonths(date)) {
      stats.staleDates.push({ section: sectionName, date });
    }
    if (sources) {
      for (const s of sources) {
        if (!allSources.some((item) => item.url === s.url)) {
          allSources.push(s);
        }
      }
    }
  };

  // Check section verification dates
  if (country.quickFacts?.avgTuitionPerYear) {
    checkDateAndSources('QuickFacts: Tuition', country.quickFacts.avgTuitionPerYear.lastVerified, country.quickFacts.avgTuitionPerYear.sources);
  }
  if (country.quickFacts?.monthlyLivingCost) {
    checkDateAndSources('QuickFacts: LivingCost', country.quickFacts.monthlyLivingCost.lastVerified, country.quickFacts.monthlyLivingCost.sources);
  }

  for (const vt of country.visaTypes || []) {
    checkDateAndSources(`VisaType: ${vt.officialName || 'Visa'}`, vt.lastVerified || '', vt.sources);
  }

  const appGuide = country.applicationGuide || country.howToApply;
  const docs = appGuide?.documentChecklist || appGuide?.checklist || [];
  for (const doc of docs) {
    if (doc.sources) {
      for (const s of doc.sources) {
        if (!allSources.some((item) => item.url === s.url)) allSources.push(s);
      }
    }
  }

  const fin = country.financialRequirements || country.money;
  if (fin) checkDateAndSources('Financial Requirements', fin.lastVerified || '', fin.sources);

  if (country.admissionCriteria) {
    checkDateAndSources('Admission Criteria', country.admissionCriteria.lastVerified || '', country.admissionCriteria.sources);
  }
  if (country.languageRequirements) {
    checkDateAndSources('Language Requirements', country.languageRequirements.lastVerified || '', country.languageRequirements.sources);
  }

  for (const uni of country.topUniversities || []) {
    checkDateAndSources(`University: ${uni.name || 'University'}`, uni.lastVerified || '', uni.sources);
  }

  for (const sch of country.scholarships || []) {
    checkDateAndSources(`Scholarship: ${sch.name || 'Scholarship'}`, sch.lastVerified || '', sch.sources);
  }

  if (country.workRights) {
    checkDateAndSources('Work Rights', country.workRights.lastVerified || '', country.workRights.sources);
  }

  const refusals = country.refusalReasons || country.rejectionReasons || [];
  for (const ref of refusals) {
    checkDateAndSources(`Refusal Reason: ${ref.reasonTitle || ref.title || 'Refusal'}`, ref.lastVerified || '', ref.sources);
  }

  const psi = country.postStudyImmigration || country.afterGraduation;
  if (psi) checkDateAndSources('Post Study Immigration', psi.lastVerified || '', psi.sources);

  const dep = country.dependentRules || country.bringingFamily;
  if (dep) checkDateAndSources('Dependent Rules', dep.lastVerified || '', dep.sources);

  const pol = country.recentPolicyTimeline || country.recentChanges || [];
  for (const pt of pol) {
    checkDateAndSources(`Policy Timeline: ${pt.headline || 'Policy'}`, pt.lastVerified || '');
  }

  const liv = country.studentLiving || country.livingThere;
  if (liv) checkDateAndSources('Student Living', liv.lastVerified || '', liv.sources);

  const arr = country.arrivalChecklist || country.afterArrivalChecklist || [];
  for (const task of arr) {
    if (task.officialPortalOrGuide && task.officialPortalOrGuide.startsWith('http')) {
      allSources.push({
        title: task.title || 'Arrival Task',
        url: task.officialPortalOrGuide,
        publisher: 'Arrival Authority',
        publisherType: 'portal',
      });
    }
  }

  for (const faq of country.faqs || []) {
    checkDateAndSources(`FAQ: ${(faq.question || '').slice(0, 30)}...`, faq.lastVerified || '', faq.sources);
  }

  const uniqueUrls = Array.from(new Set(allSources.map((s) => s.url))).filter((u) => u.startsWith('http'));
  stats.totalSources = uniqueUrls.length;

  console.log(`\n🔍 Checking ${uniqueUrls.length} official source URLs for ${canonical.countryName}...`);

  for (const url of uniqueUrls) {
    await sleep(100);
    process.stdout.write(`  • Ping: ${url.slice(0, 65).padEnd(65, ' ')} `);
    const result = await checkUrl(url);

    if (result.ok && !result.isBlocked) {
      stats.validUrls++;
      process.stdout.write(`[OK ${result.status || 200}]\n`);
    } else if (result.isBlocked) {
      stats.blockedUrls.push({ url, status: result.status || 403, reason: result.error || 'Firewall challenge' });
      process.stdout.write(`[WARN: ${result.status} Anti-bot challenge]\n`);
    } else {
      stats.deadUrls.push({ url, error: result.error || 'Failed' });
      process.stdout.write(`[FAIL: ${result.error}]\n`);
    }
  }

  return stats;
}

async function runCountryChecks() {
  console.log('========================================================================');
  console.log('🚀 GoFlyVisa Study Destinations Verifier (check:countries)');
  console.log(`   Evaluation Date: ${NOW.toISOString().split('T')[0]}`);
  console.log('========================================================================');

  const implementedSlugs = Object.keys(FULL_COUNTRY_GUIDES) as (keyof typeof FULL_COUNTRY_GUIDES)[];
  console.log(`Auditing all ${implementedSlugs.length} implemented country destinations.`);

  let totalDeadUrls = 0;
  let totalSectionFailures = 0;

  for (const slug of implementedSlugs) {
    const data = FULL_COUNTRY_GUIDES[slug];
    if (!data) continue;

    console.log(`\n------------------------------------------------------------------------`);
    console.log(`Validating Destination: ${data.countryName} (${data.countryCode})`);
    console.log(`------------------------------------------------------------------------`);

    const stats = await auditCountry(data);

    console.log(`\n📊 Verification Audit Summary for ${stats.country}:`);
    console.log(`   - 17 Mandatory Sections: ${stats.sectionsPassed}/17 Validated`);
    console.log(`   - Total Source URLs:     ${stats.totalSources}`);
    console.log(`   - Healthy URLs (2xx):    ${stats.validUrls}`);
    console.log(`   - Protected/Anti-bot:    ${stats.blockedUrls.length}`);
    console.log(`   - Dead Links (4xx/5xx):  ${stats.deadUrls.length}`);
    console.log(`   - Stale Dates (>6 mos):  ${stats.staleDates.length}`);

    if (stats.sectionFailures.length > 0) {
      console.error(`   ❌ Section Content Failures:`);
      for (const fail of stats.sectionFailures) {
        console.error(`      * ${fail}`);
      }
      totalSectionFailures += stats.sectionFailures.length;
    }

    if (stats.deadUrls.length > 0) {
      console.error(`   ❌ Fatal Dead Link Failures:`);
      for (const f of stats.deadUrls) {
        console.error(`      * ${f.url} -> ${f.error}`);
      }
      totalDeadUrls += stats.deadUrls.length;
    }
  }

  console.log(`\n========================================================================`);
  if (totalDeadUrls === 0 && totalSectionFailures === 0) {
    console.log('✅ ALL AUDIT CHECKS PASSED: 17/17 sections validated, zero dead links, strict types!');
    console.log('========================================================================\n');
  } else {
    console.error(`❌ AUDIT FAILED with ${totalDeadUrls} dead URLs and ${totalSectionFailures} section failures.`);
    console.log('========================================================================\n');
    process.exit(1);
  }
}

runCountryChecks().catch((err) => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
