/**
 * EQUILIBRIUM Prescribing Calculator
 *
 * Calculates guideline-concordant treatment recommendations based on:
 * - Depression severity (PHQ-9 score)
 * - NICE CG90 guidelines
 * - Patient preferences and contraindications
 */

/**
 * Calculate depression severity from PHQ-9 score
 * @param {number} phq9Score - PHQ-9 score (0-27)
 * @returns {string} Severity level
 */
function getDepressionSeverity(phq9Score) {
  if (phq9Score < 0 || phq9Score > 27) {
    throw new Error('PHQ-9 score must be between 0 and 27');
  }

  if (phq9Score <= 4) return 'None/Minimal';
  if (phq9Score <= 9) return 'Mild';
  if (phq9Score <= 14) return 'Moderate';
  if (phq9Score <= 19) return 'Moderately Severe';
  return 'Severe';
}

/**
 * Calculate NICE stepped care recommendation
 * @param {number} phq9Score - PHQ-9 score (0-27)
 * @param {Object} options - Additional options
 * @param {boolean} options.previousEpisodes - History of previous depression
 * @param {boolean} options.patientPrefersMediation - Patient preference for medication
 * @param {boolean} options.inadequateResponseNonPharm - Previous inadequate response to non-pharmacological
 * @returns {Object} Treatment recommendation
 */
function getSteppedCareRecommendation(phq9Score, options = {}) {
  const severity = getDepressionSeverity(phq9Score);
  const {
    previousEpisodes = false,
    patientPrefersMedication = false,
    inadequateResponseNonPharm = false
  } = options;

  let step, primaryRecommendation, alternativeOptions, medicationAppropriate;

  if (phq9Score <= 4) {
    // Minimal/None
    step = 1;
    primaryRecommendation = 'Watchful waiting, self-help resources';
    alternativeOptions = ['Exercise', 'Sleep hygiene'];
    medicationAppropriate = false;

  } else if (phq9Score <= 9) {
    // Mild depression
    step = 2;

    // NICE: Do NOT routinely offer medication as first-line for mild depression
    if (patientPrefersMedication && (previousEpisodes || inadequateResponseNonPharm)) {
      primaryRecommendation = 'Lifestyle interventions (exercise, nutrition, sleep) + consider medication if patient preference and history supports';
      medicationAppropriate = true;
    } else {
      primaryRecommendation = 'Lifestyle interventions (exercise, nutrition, sleep)';
      medicationAppropriate = false;
    }

    alternativeOptions = [
      'Low-intensity psychological intervention (guided self-help, computerized CBT)',
      'Social prescribing',
      'Structured exercise program'
    ];

  } else if (phq9Score <= 14) {
    // Moderate depression
    step = 3;
    primaryRecommendation = 'Lifestyle interventions + high-intensity psychological intervention (CBT, IPT) OR medication (if patient preference)';
    alternativeOptions = [
      'Lifestyle interventions alone (if patient prefers)',
      'Medication + psychological intervention (combination)',
      'Social prescribing + psychological intervention'
    ];
    medicationAppropriate = true;

  } else {
    // Moderately severe or Severe (15-27)
    step = phq9Score >= 20 ? 4 : 3;
    primaryRecommendation = 'Medication + high-intensity psychological intervention (combination approach)';
    alternativeOptions = [
      'Urgent psychiatric referral (if severe with suicidal ideation)',
      'Crisis team involvement',
      'Consider inpatient care if very severe'
    ];
    medicationAppropriate = true;
  }

  return {
    phq9Score,
    severity,
    step,
    primaryRecommendation,
    alternativeOptions,
    medicationAppropriate,
    guidelineConcordant: {
      medication: medicationAppropriate,
      lifestyle: true,
      reasoning: severity === 'Mild' && medicationAppropriate
        ? 'Medication appropriate due to patient preference + previous episodes/inadequate response'
        : severity === 'Mild' && !medicationAppropriate
        ? 'NICE CG90: Do NOT routinely offer medication as first-line for mild depression'
        : 'Medication appropriate for moderate-severe depression'
    }
  };
}

/**
 * Calculate guideline concordance for a given treatment plan
 * @param {number} phq9Score - PHQ-9 score
 * @param {boolean} medicationPrescribed - Was medication prescribed?
 * @param {boolean} lifestyleOffered - Were lifestyle interventions offered?
 * @param {Object} options - Patient context options
 * @returns {Object} Concordance assessment
 */
function assessGuidelineConcordance(phq9Score, medicationPrescribed, lifestyleOffered, options = {}) {
  const recommendation = getSteppedCareRecommendation(phq9Score, options);
  const severity = recommendation.severity;

  let concordant = true;
  let reasons = [];

  // Mild depression: medication should NOT be first-line (unless specific indications)
  if (severity === 'Mild') {
    if (medicationPrescribed && !lifestyleOffered) {
      concordant = false;
      reasons.push('Non-concordant: Medication prescribed for mild depression without offering lifestyle interventions first');
    }

    if (medicationPrescribed && lifestyleOffered && !options.patientPrefersMedication && !options.inadequateResponseNonPharm) {
      concordant = false;
      reasons.push('Non-concordant: Medication prescribed for mild depression without clear indication (patient preference or previous inadequate response)');
    }

    if (!medicationPrescribed && lifestyleOffered) {
      reasons.push('Concordant: Lifestyle interventions offered as first-line for mild depression (aligned with NICE CG90)');
    }
  }

  // Moderate-severe: medication appropriate but should ideally include psychological/lifestyle
  if (severity === 'Moderate' || severity === 'Moderately Severe' || severity === 'Severe') {
    if (medicationPrescribed && !lifestyleOffered) {
      reasons.push('Medication appropriate for severity, but best practice includes lifestyle interventions');
    }

    if (medicationPrescribed && lifestyleOffered) {
      reasons.push('Concordant: Combination approach (medication + lifestyle) for moderate-severe depression');
    }
  }

  // Lifestyle should always be offered
  if (!lifestyleOffered) {
    concordant = false;
    reasons.push('Non-concordant: Lifestyle interventions (exercise, nutrition, sleep) should be offered for all depression severities');
  }

  return {
    concordant,
    severity,
    reasons,
    recommendation: recommendation.primaryRecommendation
  };
}

/**
 * Calculate expected PHQ-9 response based on intervention type
 * @param {number} baselinePHQ9 - Baseline PHQ-9 score
 * @param {string} interventionType - Type of intervention
 * @returns {Object} Expected outcomes
 */
function calculateExpectedResponse(baselinePHQ9, interventionType) {
  const severity = getDepressionSeverity(baselinePHQ9);

  // Response rates based on EQUILIBRIUM pilot data and literature
  const responseRates = {
    'Lifestyle only': { mild: 0.65, moderate: 0.55, severe: 0.35 },
    'Lifestyle + Therapy': { mild: 0.75, moderate: 0.68, severe: 0.55 },
    'Medication': { mild: 0.50, moderate: 0.58, severe: 0.60 },
    'Combined': { mild: 0.78, moderate: 0.72, severe: 0.68 }
  };

  const severityKey = severity === 'Mild' ? 'mild'
                    : (severity === 'Moderate' || severity === 'Moderately Severe') ? 'moderate'
                    : 'severe';

  const responseRate = responseRates[interventionType]?.[severityKey] || 0.50;
  const remissionRate = responseRate * 0.65; // ~65% of responders achieve remission

  const expectedPHQ9Week12 = Math.round(baselinePHQ9 * (1 - (responseRate * 0.55))); // ~55% reduction if responding

  return {
    interventionType,
    baselinePHQ9,
    severity,
    expectedResponseRate: `${Math.round(responseRate * 100)}%`,
    expectedRemissionRate: `${Math.round(remissionRate * 100)}%`,
    expectedPHQ9Week12,
    interpretation: expectedPHQ9Week12 < 5 ? 'Likely remission'
                  : expectedPHQ9Week12 < baselinePHQ9 * 0.5 ? 'Likely response'
                  : 'Uncertain response'
  };
}

module.exports = {
  getDepressionSeverity,
  getSteppedCareRecommendation,
  assessGuidelineConcordance,
  calculateExpectedResponse
};
