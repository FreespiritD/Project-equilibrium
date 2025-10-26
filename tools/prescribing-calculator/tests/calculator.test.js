const {
  getDepressionSeverity,
  getSteppedCareRecommendation,
  assessGuidelineConcordance,
  calculateExpectedResponse
} = require('../src/calculator');

describe('getDepressionSeverity', () => {
  test('should return None/Minimal for PHQ-9 0-4', () => {
    expect(getDepressionSeverity(0)).toBe('None/Minimal');
    expect(getDepressionSeverity(4)).toBe('None/Minimal');
  });

  test('should return Mild for PHQ-9 5-9', () => {
    expect(getDepressionSeverity(5)).toBe('Mild');
    expect(getDepressionSeverity(9)).toBe('Mild');
  });

  test('should return Moderate for PHQ-9 10-14', () => {
    expect(getDepressionSeverity(10)).toBe('Moderate');
    expect(getDepressionSeverity(14)).toBe('Moderate');
  });

  test('should return Moderately Severe for PHQ-9 15-19', () => {
    expect(getDepressionSeverity(15)).toBe('Moderately Severe');
    expect(getDepressionSeverity(19)).toBe('Moderately Severe');
  });

  test('should return Severe for PHQ-9 20-27', () => {
    expect(getDepressionSeverity(20)).toBe('Severe');
    expect(getDepressionSeverity(27)).toBe('Severe');
  });

  test('should throw error for invalid PHQ-9 scores', () => {
    expect(() => getDepressionSeverity(-1)).toThrow('PHQ-9 score must be between 0 and 27');
    expect(() => getDepressionSeverity(28)).toThrow('PHQ-9 score must be between 0 and 27');
  });
});

describe('getSteppedCareRecommendation', () => {
  test('should recommend watchful waiting for minimal depression', () => {
    const result = getSteppedCareRecommendation(3);
    expect(result.severity).toBe('None/Minimal');
    expect(result.step).toBe(1);
    expect(result.medicationAppropriate).toBe(false);
  });

  test('should recommend lifestyle interventions for mild depression (no medication)', () => {
    const result = getSteppedCareRecommendation(7);
    expect(result.severity).toBe('Mild');
    expect(result.step).toBe(2);
    expect(result.primaryRecommendation).toContain('Lifestyle interventions');
    expect(result.medicationAppropriate).toBe(false);
  });

  test('should allow medication for mild depression if patient prefers and has previous episodes', () => {
    const result = getSteppedCareRecommendation(8, {
      previousEpisodes: true,
      patientPrefersMedication: true
    });
    expect(result.severity).toBe('Mild');
    expect(result.medicationAppropriate).toBe(true);
    expect(result.primaryRecommendation).toContain('consider medication');
  });

  test('should recommend lifestyle + psychological/medication for moderate depression', () => {
    const result = getSteppedCareRecommendation(12);
    expect(result.severity).toBe('Moderate');
    expect(result.step).toBe(3);
    expect(result.medicationAppropriate).toBe(true);
    expect(result.primaryRecommendation).toContain('psychological intervention');
  });

  test('should recommend combination approach for moderately severe depression', () => {
    const result = getSteppedCareRecommendation(17);
    expect(result.severity).toBe('Moderately Severe');
    expect(result.step).toBe(3);
    expect(result.medicationAppropriate).toBe(true);
  });

  test('should recommend combination + consider urgent referral for severe depression', () => {
    const result = getSteppedCareRecommendation(23);
    expect(result.severity).toBe('Severe');
    expect(result.step).toBe(4);
    expect(result.medicationAppropriate).toBe(true);
    expect(result.alternativeOptions).toContain('Urgent psychiatric referral (if severe with suicidal ideation)');
  });

  test('should include guideline concordance reasoning', () => {
    const mildResult = getSteppedCareRecommendation(7);
    expect(mildResult.guidelineConcordant.reasoning).toContain('Do NOT routinely offer medication');

    const moderateResult = getSteppedCareRecommendation(12);
    expect(moderateResult.guidelineConcordant.reasoning).toContain('Medication appropriate for moderate-severe');
  });
});

describe('assessGuidelineConcordance', () => {
  test('should be concordant when lifestyle offered for mild depression without medication', () => {
    const result = assessGuidelineConcordance(7, false, true);
    expect(result.concordant).toBe(true);
    expect(result.reasons).toContain('Concordant: Lifestyle interventions offered as first-line for mild depression (aligned with NICE CG90)');
  });

  test('should be non-concordant when medication prescribed for mild depression without lifestyle', () => {
    const result = assessGuidelineConcordance(8, true, false);
    expect(result.concordant).toBe(false);
    expect(result.reasons.some(r => r.includes('Non-concordant'))).toBe(true);
  });

  test('should be non-concordant when medication prescribed for mild depression without clear indication', () => {
    const result = assessGuidelineConcordance(7, true, true, {
      patientPrefersMedication: false,
      inadequateResponseNonPharm: false
    });
    expect(result.concordant).toBe(false);
    expect(result.reasons.some(r => r.includes('without clear indication'))).toBe(true);
  });

  test('should be concordant when medication + lifestyle for moderate depression', () => {
    const result = assessGuidelineConcordance(12, true, true);
    expect(result.concordant).toBe(true);
    expect(result.reasons).toContain('Concordant: Combination approach (medication + lifestyle) for moderate-severe depression');
  });

  test('should be non-concordant when lifestyle not offered', () => {
    const result = assessGuidelineConcordance(14, true, false);
    expect(result.concordant).toBe(false);
    expect(result.reasons.some(r => r.includes('Lifestyle interventions'))).toBe(true);
  });

  test('should return severity and recommendation', () => {
    const result = assessGuidelineConcordance(15, true, true);
    expect(result.severity).toBe('Moderately Severe');
    expect(result.recommendation).toBeTruthy();
  });
});

describe('calculateExpectedResponse', () => {
  test('should calculate expected response for mild depression with lifestyle only', () => {
    const result = calculateExpectedResponse(8, 'Lifestyle only');
    expect(result.severity).toBe('Mild');
    expect(result.expectedResponseRate).toBe('65%');
    expect(result.baselinePHQ9).toBe(8);
  });

  test('should calculate expected response for moderate depression with combination', () => {
    const result = calculateExpectedResponse(13, 'Combined');
    expect(result.severity).toBe('Moderate');
    expect(result.expectedResponseRate).toBe('72%');
    expect(parseFloat(result.expectedRemissionRate)).toBeGreaterThan(40);
  });

  test('should calculate expected PHQ-9 at week 12', () => {
    const result = calculateExpectedResponse(14, 'Lifestyle + Therapy');
    expect(result.expectedPHQ9Week12).toBeLessThan(14);
    expect(result.expectedPHQ9Week12).toBeGreaterThanOrEqual(0);
  });

  test('should provide interpretation of expected outcome', () => {
    const highResponse = calculateExpectedResponse(15, 'Combined');
    expect(['Likely remission', 'Likely response', 'Uncertain response']).toContain(highResponse.interpretation);
  });

  test('should handle all intervention types', () => {
    const types = ['Lifestyle only', 'Lifestyle + Therapy', 'Medication', 'Combined'];
    types.forEach(type => {
      const result = calculateExpectedResponse(12, type);
      expect(result.interventionType).toBe(type);
      expect(result.expectedResponseRate).toBeTruthy();
    });
  });

  test('should show higher response rates for combined approaches', () => {
    const lifestyle = calculateExpectedResponse(12, 'Lifestyle only');
    const combined = calculateExpectedResponse(12, 'Combined');

    const lifestyleRate = parseFloat(lifestyle.expectedResponseRate);
    const combinedRate = parseFloat(combined.expectedResponseRate);

    expect(combinedRate).toBeGreaterThan(lifestyleRate);
  });
});

describe('Integration tests', () => {
  test('should provide complete workflow for typical mild depression case', () => {
    const phq9 = 8;

    // 1. Get severity
    const severity = getDepressionSeverity(phq9);
    expect(severity).toBe('Mild');

    // 2. Get recommendation
    const recommendation = getSteppedCareRecommendation(phq9);
    expect(recommendation.medicationAppropriate).toBe(false);
    expect(recommendation.primaryRecommendation).toContain('Lifestyle');

    // 3. Assess if plan is concordant (lifestyle offered, no medication)
    const concordance = assessGuidelineConcordance(phq9, false, true);
    expect(concordance.concordant).toBe(true);

    // 4. Calculate expected response
    const expectedOutcome = calculateExpectedResponse(phq9, 'Lifestyle only');
    expect(parseFloat(expectedOutcome.expectedResponseRate)).toBeGreaterThan(60);
  });

  test('should flag non-concordant prescribing for mild depression', () => {
    const phq9 = 7;

    const recommendation = getSteppedCareRecommendation(phq9);
    expect(recommendation.medicationAppropriate).toBe(false);

    // Prescribe medication without offering lifestyle = non-concordant
    const concordance = assessGuidelineConcordance(phq9, true, false);
    expect(concordance.concordant).toBe(false);
    expect(concordance.reasons.some(r => r.includes('Non-concordant'))).toBe(true);
  });

  test('should support concordant prescribing for moderate depression', () => {
    const phq9 = 13;

    const recommendation = getSteppedCareRecommendation(phq9);
    expect(recommendation.medicationAppropriate).toBe(true);

    // Medication + lifestyle = concordant
    const concordance = assessGuidelineConcordance(phq9, true, true);
    expect(concordance.concordant).toBe(true);
  });
});
