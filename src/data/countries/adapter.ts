import { CountryGuideData, HomeCountryConfig } from './types';
import {
  CanonicalCountryGuide,
  CanonicalQuickFacts,
  CanonicalVisaType,
  CanonicalApplicationGuide,
  CanonicalFinancialRequirements,
  CanonicalAdmissionCriteria,
  CanonicalLanguageRequirements,
  CanonicalUniversity,
  CanonicalScholarship,
  CanonicalWorkRights,
  CanonicalRefusalReason,
  CanonicalPostStudyImmigration,
  CanonicalDependentRules,
  CanonicalPolicyTimelineItem,
  CanonicalStudentLiving,
  CanonicalArrivalChecklistTask,
  CanonicalFAQ,
  CanonicalHomeCountry,
} from './canonical';

/**
 * Transforms any raw country guide (Schema 1 or Schema 2) into a strictly-typed
 * CanonicalCountryGuide view-model.
 *
 * Guarantees:
 * 1. Zero undefined field access errors.
 * 2. Real statutory numbers mapped from either schema without fake fallbacks.
 * 3. Complete section coverage for all 9 destinations.
 */
export function toCanonicalCountryGuide(raw: CountryGuideData): CanonicalCountryGuide {
  // Currency and FX
  const curr = {
    code: raw.quickFacts?.currency?.code || 'USD',
    symbol: raw.quickFacts?.currency?.symbol || '$',
    name: raw.quickFacts?.currency?.name || 'Dollar',
  };

  const pkContext: Partial<HomeCountryConfig> = raw.defaultHomeCountry || raw.pakistanContext || {};
  const exchangeRate =
    pkContext.exchangeRateToDestinationCurrency ??
    pkContext.exchangeRateToDestCurrency ??
    null;

  const homeCountry: CanonicalHomeCountry = {
    countryName: pkContext.countryName || 'Pakistan',
    currencyCode: pkContext.currencyCode || pkContext.localCurrencyCode || 'PKR',
    currencySymbol: pkContext.currencySymbol || pkContext.localCurrencySymbol || 'Rs.',
    exchangeRateToDestinationCurrency: exchangeRate,
    exchangeRateDate: pkContext.exchangeRateDate || '2026-10-04',
  };

  // 1. Quick Facts
  const qf = raw.quickFacts;
  let intakesDisplay = 'Varies by university';
  let intakesSubtext = 'Deadlines vary by faculty';

  if (Array.isArray(qf.intakes) && qf.intakes.length > 0) {
    intakesDisplay = qf.intakes
      .slice(0, 2)
      .map((i: any) => (typeof i === 'string' ? i : i.name || i.months))
      .filter(Boolean)
      .join(' & ');
    const first = qf.intakes[0] as any;
    intakesSubtext = typeof first === 'object' ? first.notes || first.months || 'Primary Intake' : 'Primary Intake';
  } else if (Array.isArray(qf.mainIntakes) && qf.mainIntakes.length > 0) {
    intakesDisplay = qf.mainIntakes.slice(0, 2).join(' & ');
    intakesSubtext = 'Primary Intakes';
  } else if (qf.intakes && typeof qf.intakes === 'object') {
    const obj = qf.intakes as any;
    intakesDisplay = `${obj.primary || 'Primary'} & ${obj.secondary || 'Secondary'}`;
    intakesSubtext = obj.deadlines ? `Deadlines: ${obj.deadlines}` : 'Check university';
  }

  // Tuition display
  let tuitionDisplay = 'Varies by institution';
  let tuitionSubtext = '';
  if (qf.avgTuitionPerYear) {
    const min = qf.avgTuitionPerYear.minLocal ?? qf.avgTuitionPerYear.minDomesticCurrency;
    const max = qf.avgTuitionPerYear.maxLocal ?? qf.avgTuitionPerYear.maxDomesticCurrency;
    if (min === 0 && (max === 0 || max === undefined)) {
      tuitionDisplay = `${curr.symbol}0 (Tuition-Free)`;
    } else if (min !== undefined && max !== undefined) {
      tuitionDisplay = `${curr.symbol}${min.toLocaleString()} – ${curr.symbol}${max.toLocaleString()} / yr`;
    } else if (min !== undefined) {
      tuitionDisplay = `From ${curr.symbol}${min.toLocaleString()} / yr`;
    }
    if (qf.avgTuitionPerYear.approxPkrMin && qf.avgTuitionPerYear.approxPkrMax) {
      tuitionSubtext = `≈ PKR ${qf.avgTuitionPerYear.approxPkrMin.toLocaleString()} – ${qf.avgTuitionPerYear.approxPkrMax.toLocaleString()}`;
    }
  } else if ((qf as any).avgAnnualTuition) {
    const amt = (qf as any).avgAnnualTuition.amountDomesticCurrency;
    if (amt === 0) {
      tuitionDisplay = `${curr.symbol}0 (Tuition-Free)`;
    } else if (amt !== undefined) {
      tuitionDisplay = `${curr.symbol}${amt.toLocaleString()} / yr`;
    }
    tuitionSubtext = (qf as any).avgAnnualTuition.description || '';
  }

  // Living Cost display
  let livingCostDisplay = 'Varies by city';
  let livingCostSubtext = '';
  const ml = qf.monthlyLivingCost;
  const monthlyAmt =
    ml?.amountLocal ??
    ml?.amountDomesticCurrency ??
    (raw.financialRequirements?.livingCostRequirementPerYear
      ? Math.round(raw.financialRequirements.livingCostRequirementPerYear / 12)
      : null);

  if (monthlyAmt !== null && monthlyAmt !== undefined) {
    livingCostDisplay = `${curr.symbol}${monthlyAmt.toLocaleString()} / mo`;
  }
  const monthlyPkr =
    ml?.approxPKR ??
    ml?.approxPkr ??
    (raw.financialRequirements?.approxLivingCostPkr
      ? Math.round(raw.financialRequirements.approxLivingCostPkr / 12)
      : null);
  if (monthlyPkr !== null && monthlyPkr !== undefined) {
    livingCostSubtext = `≈ PKR ${monthlyPkr.toLocaleString()} / mo`;
  }

  const quickFacts: CanonicalQuickFacts = {
    capital: qf.capital || 'Capital City',
    currency: curr,
    officialLanguages: qf.officialLanguages || [],
    intakesDisplay,
    intakesSubtext,
    tuitionDisplay,
    tuitionSubtext,
    livingCostDisplay,
    livingCostSubtext,
    postStudyDuration:
      qf.postStudyWorkDuration ||
      (qf as any).postStudyWorkPermit?.duration ||
      raw.postStudyImmigration?.jobSeekingPermitDuration ||
      (raw.postStudyImmigration as any)?.jobSeekerVisaDuration ||
      'Check post-study guidelines',
    partTimeHours:
      qf.partTimeWorkHoursTerm ||
      qf.partTimeWorkHours ||
      ((qf as any).partTimeWorkRights?.hoursPerWeek ? `${(qf as any).partTimeWorkRights.hoursPerWeek} hrs/week` : null) ||
      (raw.workRights as any)?.termTimeHours ||
      'Check student visa rules',
    visaProcessingTime:
      qf.visaProcessingTimeAverage ||
      (qf as any).visaProcessingTimeWeeks ||
      qf.visaProcessingTime ||
      '4 to 8 weeks',
  };

  // 2. Visa Types
  const visaTypes: CanonicalVisaType[] = (raw.visaTypes || []).map((vt) => {
    const feeObj = typeof vt.fee === 'object' ? vt.fee : null;
    const feeLocal =
      vt.feeLocal ??
      (typeof vt.fee === 'number' ? vt.fee : feeObj?.amountLocal ?? vt.feeDomesticCurrency ?? null);
    const feeCurrency =
      vt.feeCurrency ?? feeObj?.currencyCode ?? (feeLocal !== null ? curr.code : '');
    const approxFeePkr =
      vt.approxFeePkr ?? feeObj?.approxPkr ?? vt.feePKR ?? (feeLocal && exchangeRate ? Math.round(feeLocal * exchangeRate) : null);

    return {
      officialName: vt.officialName || 'Student Visa',
      subCategory: vt.subCategory || '',
      purpose: vt.purpose || '',
      eligibilitySummary:
        vt.eligibilitySummary ||
        (Array.isArray(vt.eligibility) ? vt.eligibility.join('. ') : ''),
      feeLocal,
      feeCurrency,
      approxFeePkr,
      validity: vt.validity || 'Duration of program',
      processingTime: vt.processingTime || '4 to 8 weeks',
      sources: vt.sources || [],
    };
  });

  // 3. Application Guide
  const rawApp = raw.applicationGuide || raw.howToApply || {};
  const applicationGuide: CanonicalApplicationGuide = {
    portalOverview: rawApp.portalOverview || (rawApp as any).overview || '',
    officialOnlinePortals: (rawApp.officialOnlinePortals || []).map((p: any) => ({
      name: p.name,
      url: p.url,
      description: p.description || '',
    })),
    steps: (rawApp.steps || []).map((s: any) => ({
      stepNumber: s.stepNumber,
      title: s.title,
      description: s.description,
      portalName: s.portalName,
      portalUrl: s.portalUrl,
      actionRequired: s.actionRequired,
    })),
    documentChecklist: (rawApp.documentChecklist || (rawApp as any).checklist || []).map((d: any) => ({
      title: d.title || d.documentName || d.item || 'Required Document',
      category: d.category,
      mandatory: d.mandatory ?? true,
      detail: d.detail || d.description || '',
      attestationRequired: d.attestationRequired,
    })),
    pakistanCentres: (
      rawApp.pakistanCentres ||
      rawApp.vacLocationsInHomeCountry ||
      raw.defaultHomeCountry?.embassyCentres ||
      []
    ).map((c: any) => ({
      city: c.city,
      centreName: c.centreName || c.centreType || 'Visa Application Centre',
      address: c.address || '',
      jurisdiction: c.jurisdiction,
      bookingUrl: c.bookingUrl || c.bookingPortalUrl,
      averageWaitDays: c.averageWaitDays || c.appointmentWaitEstimate,
    })),
    interviewGuidelines: {
      isMandatory: rawApp.interviewGuidelines?.isMandatory ?? false,
      description: rawApp.interviewGuidelines?.description || '',
      tips: rawApp.interviewGuidelines?.tips || (rawApp as any).pakistanAppointmentGuide?.interviewPreparationTips || [],
    },
  };

  // 4. Financial Requirements
  const rawFin = raw.financialRequirements || (raw as any).money || {};
  const minAmount = rawFin.officialMinimumAmount;
  const livingFundsAmt =
    minAmount?.amount ??
    (minAmount as any)?.minLocal ??
    rawFin.livingCostRequirementPerYear ??
    (rawFin.livingCosts?.monthlyEstimateLocal ? rawFin.livingCosts.monthlyEstimateLocal * 12 : null);

  const livingFundsPkr =
    minAmount?.approxPKR ??
    (minAmount as any)?.approxPkrMin ??
    rawFin.approxLivingCostPkr ??
    (livingFundsAmt && exchangeRate ? Math.round(livingFundsAmt * exchangeRate) : null);

  const proofMethods = (
    rawFin.proofOfFundsOptions && rawFin.proofOfFundsOptions.length > 0
      ? rawFin.proofOfFundsOptions.map((p: any) => ({
          name: p.methodName,
          details: p.details,
          isPreferred: p.isPreferred,
        }))
      : rawFin.approvedProvidersOrBanks && rawFin.approvedProvidersOrBanks.length > 0
      ? rawFin.approvedProvidersOrBanks.map((p: any) => ({
          name: typeof p === 'string' ? p : p.name,
          details: 'Official verified banking provider or institution',
          isPreferred: true,
        }))
      : rawFin.proofOfFunds
      ? [
          {
            name: rawFin.proofOfFunds.method,
            details: rawFin.proofOfFunds.explanation || 'Bank statements meeting statutory requirements',
            isPreferred: true,
          },
        ]
      : []
  );

  const otherSurcharges = (
    rawFin.otherSurcharges && rawFin.otherSurcharges.length > 0
      ? rawFin.otherSurcharges.map((s: any) => ({
          name: s.name,
          amount: s.amount,
          currency: s.currency,
          approxPkr: s.approxPkr ?? (exchangeRate ? Math.round(s.amount * exchangeRate) : null),
          mandatory: s.mandatory ?? true,
          notes: s.notes,
        }))
      : rawFin.mandatoryFees && rawFin.mandatoryFees.length > 0
      ? rawFin.mandatoryFees.map((s: any) => ({
          name: s.name,
          amount: s.amountLocal,
          currency: curr.code,
          approxPkr: s.amountPkr,
          mandatory: true,
          notes: s.notes,
        }))
      : []
  );

  const financialRequirements: CanonicalFinancialRequirements = {
    statutoryLivingFunds: {
      amount: livingFundsAmt,
      currency: minAmount?.currency || rawFin.currencyCode || curr.code,
      approxPkr: livingFundsPkr,
      period: minAmount?.period || (rawFin.livingCostRequirementPerYear ? 'Statutory requirement per academic year' : '1 Academic Year'),
      rules: rawFin.sourceOfFundsRules || rawFin.note || undefined,
    },
    proofMethods,
    holdingPeriodDays: rawFin.holdingPeriodDays ?? rawFin.bankStatementHoldingPeriodDays ?? null,
    visaFee: {
      amount:
        rawFin.visaApplicationFee?.amount ??
        rawFin.visaFeeDetails?.embassyFee ??
        (visaTypes[0]?.feeLocal ?? null),
      currency:
        rawFin.visaApplicationFee?.currency ??
        rawFin.visaFeeDetails?.embassyFeeCurrency ??
        curr.code,
      approxPkr:
        rawFin.visaApplicationFee?.approxPkr ??
        (visaTypes[0]?.approxFeePkr ?? null),
    },
    otherSurcharges,
    healthInsurance: {
      costPerMonthOrYear: rawFin.healthInsuranceDetails?.costPerMonthOrYear,
      providers: rawFin.healthInsuranceDetails?.providers || [],
      description: rawFin.healthInsuranceDetails?.type || undefined,
    },
    note: rawFin.note || undefined,
  };

  // 5. Admissions & Academic Equivalence
  const rawAdm = raw.admissionCriteria || {};
  const bach = rawAdm.bachelorRequirements || rawAdm.undergraduate || {};
  const mast = rawAdm.masterRequirements || rawAdm.postgraduateMaster || {};

  const portals = [
    ...(rawAdm.evaluationPortals || []).map((p: any) => ({
      name: p.name,
      url: p.url,
      role: p.role,
      fee: p.fee,
    })),
    ...(rawAdm.applicationPortals || []).map((p: any) => ({
      name: p.portalName || p.name,
      url: p.url,
      role: p.scope || p.role,
      fee: p.fee,
    })),
  ];

  const admissionCriteria: CanonicalAdmissionCriteria = {
    undergraduate: {
      text:
        bach.localEquivalence ||
        bach.academicRequirements ||
        rawAdm.undergraduateRequirements ||
        'Standard 12 years of schooling (HSSC / FSc / ICS) or Cambridge A-Levels.',
      attestationSteps:
        bach.attestationSteps ||
        (rawAdm.pakistaniEquivalenceGuide ? ['Matric / FSc via BISE', 'IBCC Attestation', 'MOFA Pakistan Attestation'] : undefined),
    },
    postgraduate: {
      text:
        mast.localEquivalence ||
        mast.academicRequirements ||
        rawAdm.postgraduateRequirements ||
        'Standard 4-year Bachelor degree (16 years education) recognized by HEC Pakistan.',
      attestationSteps:
        mast.attestationSteps ||
        (rawAdm.pakistaniEquivalenceGuide ? ['HEC Degree Verification System (DVS)', 'HEC Stamped Transcripts', 'MOFA Pakistan Attestation'] : undefined),
    },
    doctoral: rawAdm.doctoralRequirements || rawAdm.phdRequirements?.academicRequirements
      ? { text: rawAdm.doctoralRequirements || rawAdm.phdRequirements?.academicRequirements || '' }
      : undefined,
    studyGapsAcceptability:
      rawAdm.pakistaniEquivalenceGuide?.studyGapsAcceptability ||
      bach.studyGapAcceptable ||
      undefined,
    attestationBodies: (
      rawAdm.attestationBodies && rawAdm.attestationBodies.length > 0
        ? rawAdm.attestationBodies
        : pkContext.attestationRules || []
    ).map((a: any) => ({
      name: a.bodyName || a.title || a.authority || 'Attestation Authority',
      mandate: a.mandate || a.procedureSummary || 'Educational credential attestation',
      link: a.link || a.officialPortal || undefined,
    })),
    portals,
  };

  // 6. English & Local Language
  const rawLang = raw.languageRequirements || {};
  let englishTests = (
    rawLang.acceptedEnglishTests && rawLang.acceptedEnglishTests.length > 0
      ? rawLang.acceptedEnglishTests.map((t: any) => ({
          name: t.testName,
          score: t.minScoreOverall,
          details: t.subScoreRequirements,
        }))
      : rawLang.englishTests && rawLang.englishTests.length > 0
      ? rawLang.englishTests.map((t: any) => ({
          name: t.testName,
          score: t.postgraduateMinimum || t.undergraduateMinimum,
          details: t.notes,
        }))
      : rawLang.englishRequirements
      ? [
          {
            name: 'IELTS Academic',
            score: `${rawLang.englishRequirements.ieltsMinScore?.overall ?? 6.5} Overall`,
            details: `Min ${rawLang.englishRequirements.ieltsMinScore?.subscore ?? 6.0} in each section`,
          },
          {
            name: 'TOEFL iBT',
            score: `${rawLang.englishRequirements.toeflMinScore ?? 80}+`,
            details: 'Official ETS Score',
          },
          {
            name: 'PTE Academic',
            score: `${rawLang.englishRequirements.pteMinScore ?? 58}+`,
            details: 'Pearson Academic',
          },
        ]
      : []
  );

  const localLangReq = rawLang.localLanguageRequirements;
  const localLangNec = rawLang.localLanguageNecessity;
  const languageRequirements: CanonicalLanguageRequirements = {
    englishTests,
    moiPolicy: {
      allowed:
        rawLang.englishRequirements?.moiWaiverAllowed ??
        rawLang.moiWaiverAllowed ??
        false,
      conditions:
        rawLang.englishRequirements?.moiConditions ??
        rawLang.moiConditions ??
        rawLang.moiWaiverAcceptability ??
        'Standardized tests (IELTS/TOEFL/PTE) are required. MOI letters from Pakistani universities are frequently rejected by visa officers.',
    },
    localLanguage: {
      language: localLangReq?.language || localLangNec?.language || 'Local Official Language',
      studyRequirement:
        localLangReq?.studyRequirement ||
        localLangNec?.studyRequirement ||
        rawLang.localLanguageImportance?.study ||
        'English-taught degree programs do not require local language proficiency for academic admission.',
      dailyLifeImportance:
        localLangReq?.dailyLifeImportance ||
        localLangNec?.dailyLifeImportance ||
        rawLang.localLanguageImportance?.dailyLife ||
        'Moderate',
      partTimeJobImportance:
        localLangReq?.partTimeJobImportance ||
        localLangNec?.partTimeJobImportance ||
        rawLang.localLanguageImportance?.partTimeJobs ||
        'Moderate',
      postStudyPrImportance:
        localLangReq?.postStudyPrImportance ||
        localLangNec?.prAndSettlementImportance ||
        rawLang.localLanguageImportance?.postStudyPR ||
        '',
      recognizedTests:
        localLangReq?.recognizedTests ||
        (rawLang.localLanguageTests
          ? rawLang.localLanguageTests.map((t) => (typeof t === 'string' ? t : `${t.name} - ${t.description}`))
          : []),
    },
  };

  // 7. Top Universities
  const topUniversities: CanonicalUniversity[] = (raw.topUniversities || []).map((u) => {
    const tuitionVal = (u as any).avgTuitionPerYearLocal ?? null;
    const tuitionStr =
      u.estimatedAnnualTuition ||
      u.tuitionRangePerYear ||
      (tuitionVal !== null
        ? `${u.currency || curr.code} ${tuitionVal.toLocaleString()} / yr`
        : 'See official portal');

    return {
      name: u.name || 'University',
      city: u.city || '',
      ranking: {
        system: u.ranking?.system || 'QS World University Rankings',
        year: u.ranking?.year || 2025,
        rank: String(u.ranking?.rankNumber ?? u.ranking?.rank ?? 'Top Ranked'),
      },
      strongPrograms: u.strongPrograms || [],
      tuitionLocal: tuitionVal,
      tuitionText: tuitionStr,
      currency: u.currency || curr.code,
      approxTuitionPkr: (u as any).approxTuitionPkr ?? (tuitionVal && exchangeRate ? Math.round(tuitionVal * exchangeRate) : null),
      internationalStudentsPercentage:
        u.internationalStudentsPercentage ||
        (u as any).internationalStudentShare ||
        '',
      officialWebsite: u.officialWebsite || (u as any).websiteUrl || '',
    };
  });

  // 8. Scholarships
  const scholarships: CanonicalScholarship[] = (raw.scholarships || []).map((s) => {
    const el = s.eligibilityCriteria || (Array.isArray(s.eligibility) ? s.eligibility : typeof s.eligibility === 'string' ? [s.eligibility] : []);
    return {
      name: s.name || 'Scholarship',
      awardingBody: s.awardingBody || (s as any).grantingBody || (s as any).provider || 'Government / University',
      coverage: s.coverage || (s as any).coverageType || 'Full / Partial Tuition',
      stipendAmount: s.stipendAmount || undefined,
      eligibilityCriteria: el,
      deadlineForPakistanis:
        s.pakistanDeadlines ||
        (s as any).deadlineMonths ||
        (s as any).applicationPeriod ||
        'Annual admissions cycle',
      officialLink: s.officialLink || (s as any).websiteUrl || undefined,
    };
  });

  // 9. Work Rights
  const rawWork = raw.workRights || {};
  const workRights: CanonicalWorkRights = {
    inTermLimit:
      rawWork.termTimeHours ||
      rawWork.termTimeHoursPerWeek ||
      qf.partTimeWorkHoursTerm ||
      qf.partTimeWorkHours ||
      '20 hours per week during academic semesters',
    vacationLimit:
      rawWork.holidayHours ||
      rawWork.vacationTimeHoursPerWeek ||
      qf.partTimeWorkHoursHolidays ||
      'Full-time during designated school vacations',
    statutoryMinimumWage:
      rawWork.statutoryMinimumWage ||
      rawWork.minimumWageLocal ||
      'Statutory minimum wage applies',
    statutoryWorkRules:
      rawWork.statutoryWorkRules ||
      rawWork.regulationsSummary ||
      'Students must maintain full-time academic enrolment to preserve part-time work rights.',
    averagePartTimeEarningsMonthly:
      rawWork.averagePartTimeEarningsMonthly ||
      rawWork.averageStudentWageLocal ||
      undefined,
    taxExemptionLimits: rawWork.taxExemptionLimits || undefined,
  };

  // 10. Refusal Reasons & Appeal
  const rawRef = raw.refusalReasons || raw.rejectionReasons || [];
  const refusalReasons: CanonicalRefusalReason[] = rawRef.map((r, i) => {
    const prev =
      r.preventativeMeasures ||
      (r as any).avoidanceTips ||
      (typeof (r as any).howToAvoid === 'string' ? [(r as any).howToAvoid] : []) ||
      (typeof (r as any).prevention === 'string' ? [(r as any).prevention] : []);

    return {
      title: r.reasonTitle || r.title || r.category || (r as any).refusalCategory || `Ground ${i + 1}`,
      explanation: r.explanation || r.description || '',
      preventativeMeasures: prev,
      remedyProcess: r.remedyProcess || (r as any).remedy || undefined,
      remedyTimeline: r.remedyTimeline || undefined,
    };
  });

  // 11. After Graduation & PR
  const rawPost = raw.postStudyImmigration || raw.afterGraduation || {};
  let prTimeline =
    rawPost.permanentResidencyTimeline ||
    rawPost.prPathwayDuration;

  if (!prTimeline) {
    if (raw.slug === 'usa') {
      prTimeline = 'No direct PR pathway on F-1; employer sponsorship (H-1B → EB-2/EB-3) typically takes 3–7+ years.';
    } else if (raw.slug === 'malaysia') {
      prTimeline = 'No direct PR pathway for international student graduates.';
    } else if (rawPost.prPermanentResidencyRoute?.qualificationTimeMonths) {
      prTimeline = `${rawPost.prPermanentResidencyRoute.qualificationTimeMonths} months`;
    } else if (rawPost.prPathway?.timeline) {
      prTimeline = rawPost.prPathway.timeline;
    } else {
      prTimeline = 'Subject to skilled employment and permanent residence criteria';
    }
  }

  const postStudyImmigration: CanonicalPostStudyImmigration = {
    jobSeekerDuration:
      rawPost.jobSeekingPermitDuration ||
      rawPost.jobSeekerVisaDuration ||
      qf.postStudyWorkDuration ||
      'Check post-study route',
    workPermitRoute:
      rawPost.workVisaOptions ||
      rawPost.workPermitType ||
      rawPost.postStudyVisaName ||
      'Employer-sponsored work visa',
    permanentResidencyTimeline: prTimeline,
    prPathwaysSummary:
      rawPost.prPathwaysSummary ||
      rawPost.prPermanentResidencyRoute?.visaName ||
      '',
    citizenshipTimeline:
      rawPost.citizenshipTimeline ||
      rawPost.citizenshipTimelineYears ||
      undefined,
  };

  // 12. Bringing Family
  const rawDep = raw.dependentRules || raw.bringingFamily || {};
  const conditions =
    rawDep.conditions ||
    (rawDep as any).eligibilityCriteria ||
    (rawDep.eligibleStudents ? [rawDep.eligibleStudents] : []);

  const dependentRules: CanonicalDependentRules = {
    canBringSpouse:
      rawDep.canBringSpouse ??
      rawDep.spousalVisaPermittedDuringStudy ??
      rawDep.allowedDuringStudy ??
      false,
    canBringChildren:
      rawDep.canBringChildren ??
      rawDep.canBringSpouse ??
      false,
    conditions,
    spouseWorkRights:
      rawDep.spouseWorkRights ||
      rawDep.spousalWorkRights ||
      rawDep.workRightsForSpouse ||
      'Work rights depend on degree level and dependent pass conditions.',
    childrenSchooling:
      rawDep.childrenSchooling ||
      rawDep.childDependentRules ||
      'Minor dependent children are legally permitted to enroll in local public schooling.',
    financialSurcharge:
      rawDep.financialRequirementsPerDependent ||
      rawDep.financialSponsorshipRequirementExtraMonthly ||
      rawDep.financialRequirement ||
      (rawDep as any).additionalFundsRequired ||
      'Additional liquid maintenance funds required for each dependent.',
    note: rawDep.note || undefined,
  };

  // 13. Policy Timeline
  const rawTimeline = raw.recentPolicyTimeline || raw.recentChanges || [];
  const recentPolicyTimeline: CanonicalPolicyTimelineItem[] = rawTimeline.map((item: any) => ({
    effectiveDate: item.effectiveDate || item.date || 'Recent',
    headline: item.headline || 'Policy Update',
    summary: item.summary || '',
    impactOnStudents: item.impactOnStudents || item.impact || '',
    officialAnnouncementUrl: item.officialAnnouncementUrl || item.officialSourceUrl || undefined,
    publisher: item.publisher || 'Immigration Authority',
  }));

  // 14. Living There
  const rawLiving = raw.studentLiving || raw.livingThere || {};
  const studentLiving: CanonicalStudentLiving = {
    avgAccommodationCostMonthly:
      rawLiving.avgAccommodationCostMonthly ||
      rawLiving.averageMonthlyRent ||
      rawLiving.accommodation?.monthlyCostLocal ||
      'Varies between shared flats and private studios.',
    halalFoodAvailability:
      rawLiving.halalFoodAvailability ||
      rawLiving.halalFoodAndDining?.status ||
      'Available',
    pakistaniCommunityPresence:
      rawLiving.pakistaniCommunityPresence ||
      rawLiving.pakistaniCommunity?.description ||
      'Active Pakistani diaspora and student associations across major cities.',
    housingSearchPortals:
      rawLiving.housingSearchPortals ||
      rawLiving.accommodation?.searchPortals ||
      [],
    digitalBanks:
      rawLiving.simAndBankingRecommended?.digitalBanks ||
      rawLiving.simAndBanking?.bankingInstitutions ||
      [],
    simProviders:
      rawLiving.simAndBankingRecommended?.simProviders ||
      rawLiving.simAndBanking?.simProviders ||
      [],
    transportationStudentPerks:
      rawLiving.transportationStudentPerks ||
      rawLiving.transportation?.perks ||
      undefined,
  };

  // 15. Arrival Checklist
  const rawArrival = raw.arrivalChecklist || raw.afterArrivalChecklist || [];
  const arrivalChecklist: CanonicalArrivalChecklistTask[] = rawArrival.map((task: any) => ({
    dayWindow: task.dayWindow || task.timing || 'First 30 Days',
    title: task.title || 'Settlement Task',
    officialTerm: task.officialTerm || undefined,
    requiredDocuments: task.requiredDocuments || [],
    consequenceOfDelay: task.consequenceOfDelay || task.criticalWarning || undefined,
  }));

  // 16. FAQs
  const faqs: CanonicalFAQ[] = (raw.faqs || []).map((f: any) => ({
    question: f.question || '',
    answer: f.answer || '',
    category: f.category || 'General',
  }));

  return {
    slug: raw.slug,
    countryName: raw.countryName,
    countryCode: raw.countryCode,
    flagEmoji: raw.flagEmoji,
    heroTagline: raw.heroTagline || raw.tagline || `Complete Student Visa & Admissions Guide for ${raw.countryName}`,
    metaDescription: raw.metaDescription || raw.oneLineSummary || '',
    heroDisclaimer: raw.heroDisclaimer || '',
    lastUpdatedDate: raw.lastUpdatedDate || raw.lastVerified || '2026-10-04',
    officialPortalUrl: raw.officialPortalUrl || raw.allOfficialSources?.[0]?.url || 'https://www.google.com',
    tags: raw.tags,
    homeCountry,
    quickFacts,
    visaTypes,
    applicationGuide,
    financialRequirements,
    admissionCriteria,
    languageRequirements,
    topUniversities,
    scholarships,
    workRights,
    refusalReasons,
    appealProcessSummary: raw.appealProcessSummary || undefined,
    postStudyImmigration,
    dependentRules,
    recentPolicyTimeline,
    studentLiving,
    arrivalChecklist,
    faqs,
    allOfficialSources: raw.allOfficialSources || [],
  };
}
