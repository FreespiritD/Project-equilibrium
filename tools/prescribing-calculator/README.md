# EQUILIBRIUM Prescribing Calculator

**Guideline-concordant depression management calculator based on NICE CG90 and EQUILIBRIUM evidence**

---

## Overview

The EQUILIBRIUM Prescribing Calculator helps GPs make evidence-based, guideline-concordant treatment decisions for depression based on:

- **PHQ-9 scores** (depression severity)
- **NICE CG90 stepped care guidelines**
- **Patient preferences and clinical context**
- **EQUILIBRIUM pilot data on expected outcomes**

---

## Features

### 1. Depression Severity Classification
Converts PHQ-9 scores (0-27) to severity levels:
- **0-4**: None/Minimal
- **5-9**: Mild
- **10-14**: Moderate
- **15-19**: Moderately Severe
- **20-27**: Severe

### 2. Stepped Care Recommendations
Provides treatment recommendations aligned with NICE CG90:
- **Step 1** (Minimal): Watchful waiting, self-help
- **Step 2** (Mild): Lifestyle interventions (exercise, nutrition, sleep)
- **Step 3** (Moderate): Lifestyle + psychological intervention OR medication
- **Step 4** (Severe): Medication + psychological intervention, consider urgent referral

**Key principle**: *Do NOT routinely offer antidepressant medication as first-line treatment for mild depression* (NICE CG90, 1.5.3.1)

### 3. Guideline Concordance Assessment
Evaluates if a treatment plan aligns with NICE guidelines:
- ✅ **Concordant**: Lifestyle offered as first-line for mild depression
- ❌ **Non-concordant**: Medication prescribed for mild depression without lifestyle interventions or clear indication
- Accounts for patient preferences and clinical context (previous episodes, inadequate response to non-pharmacological interventions)

### 4. Expected Outcome Calculator
Predicts PHQ-9 response rates based on intervention type and severity:
- **Lifestyle only**: 65% response (mild), 55% (moderate), 35% (severe)
- **Lifestyle + Therapy**: 75% (mild), 68% (moderate), 55% (severe)
- **Medication**: 50% (mild), 58% (moderate), 60% (severe)
- **Combined approach**: 78% (mild), 72% (moderate), 68% (severe)

---

## Installation

```bash
cd tools/prescribing-calculator
npm install
```

---

## Usage

### Basic Example

```javascript
const {
  getDepressionSeverity,
  getSteppedCareRecommendation,
  assessGuidelineConcordance,
  calculateExpectedResponse
} = require('./src/calculator');

// Patient with PHQ-9 = 8 (mild depression)
const phq9 = 8;

// 1. Get severity
const severity = getDepressionSeverity(phq9);
console.log(severity); // "Mild"

// 2. Get treatment recommendation
const recommendation = getSteppedCareRecommendation(phq9);
console.log(recommendation);
/*
{
  phq9Score: 8,
  severity: 'Mild',
  step: 2,
  primaryRecommendation: 'Lifestyle interventions (exercise, nutrition, sleep)',
  alternativeOptions: [...],
  medicationAppropriate: false,
  guidelineConcordant: {
    medication: false,
    lifestyle: true,
    reasoning: 'NICE CG90: Do NOT routinely offer medication as first-line for mild depression'
  }
}
*/

// 3. Check if treatment plan is guideline-concordant
const concordance = assessGuidelineConcordance(
  phq9,
  false, // medication NOT prescribed
  true   // lifestyle interventions offered
);
console.log(concordance.concordant); // true

// 4. Calculate expected outcome
const expectedOutcome = calculateExpectedResponse(phq9, 'Lifestyle only');
console.log(expectedOutcome);
/*
{
  interventionType: 'Lifestyle only',
  baselinePHQ9: 8,
  severity: 'Mild',
  expectedResponseRate: '65%',
  expectedRemissionRate: '42%',
  expectedPHQ9Week12: 4,
  interpretation: 'Likely remission'
}
*/
```

### Example: Moderate Depression with Patient Preference for Medication

```javascript
const phq9 = 13;

const recommendation = getSteppedCareRecommendation(phq9, {
  patientPrefersMedication: true
});

console.log(recommendation.medicationAppropriate); // true
console.log(recommendation.primaryRecommendation);
// "Lifestyle interventions + high-intensity psychological intervention (CBT, IPT) OR medication (if patient preference)"

// Assess concordance for medication + lifestyle
const concordance = assessGuidelineConcordance(phq9, true, true);
console.log(concordance.concordant); // true
console.log(concordance.reasons);
// ['Concordant: Combination approach (medication + lifestyle) for moderate-severe depression']
```

### Example: Non-Concordant Prescribing (Mild Depression)

```javascript
const phq9 = 7;

// Medication prescribed WITHOUT offering lifestyle interventions = non-concordant
const concordance = assessGuidelineConcordance(
  phq9,
  true,  // medication prescribed
  false  // lifestyle NOT offered
);

console.log(concordance.concordant); // false
console.log(concordance.reasons);
/*
[
  'Non-concordant: Medication prescribed for mild depression without offering lifestyle interventions first',
  'Non-concordant: Lifestyle interventions (exercise, nutrition, sleep) should be offered for all depression severities'
]
*/
```

---

## API Reference

### `getDepressionSeverity(phq9Score)`

**Parameters:**
- `phq9Score` (number): PHQ-9 score (0-27)

**Returns:** (string) Depression severity level

**Throws:** Error if PHQ-9 score out of range

---

### `getSteppedCareRecommendation(phq9Score, options)`

**Parameters:**
- `phq9Score` (number): PHQ-9 score (0-27)
- `options` (object, optional):
  - `previousEpisodes` (boolean): History of previous depression
  - `patientPrefersMedication` (boolean): Patient preference for medication
  - `inadequateResponseNonPharm` (boolean): Previous inadequate response to non-pharmacological interventions

**Returns:** (object)
```javascript
{
  phq9Score: number,
  severity: string,
  step: number,
  primaryRecommendation: string,
  alternativeOptions: string[],
  medicationAppropriate: boolean,
  guidelineConcordant: {
    medication: boolean,
    lifestyle: boolean,
    reasoning: string
  }
}
```

---

### `assessGuidelineConcordance(phq9Score, medicationPrescribed, lifestyleOffered, options)`

**Parameters:**
- `phq9Score` (number): PHQ-9 score
- `medicationPrescribed` (boolean): Was medication prescribed?
- `lifestyleOffered` (boolean): Were lifestyle interventions offered?
- `options` (object, optional): Same as `getSteppedCareRecommendation`

**Returns:** (object)
```javascript
{
  concordant: boolean,
  severity: string,
  reasons: string[],
  recommendation: string
}
```

---

### `calculateExpectedResponse(baselinePHQ9, interventionType)`

**Parameters:**
- `baselinePHQ9` (number): Baseline PHQ-9 score
- `interventionType` (string): One of:
  - `'Lifestyle only'`
  - `'Lifestyle + Therapy'`
  - `'Medication'`
  - `'Combined'`

**Returns:** (object)
```javascript
{
  interventionType: string,
  baselinePHQ9: number,
  severity: string,
  expectedResponseRate: string,
  expectedRemissionRate: string,
  expectedPHQ9Week12: number,
  interpretation: string
}
```

---

## Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

Watch mode (for development):
```bash
npm run test:watch
```

**Test coverage:** 100% of functions and logic paths

---

## Evidence Base

### NICE CG90 Guidelines
- **Watchful waiting**: Minimal depression (PHQ-9 ≤4)
- **Low-intensity interventions**: Mild depression (PHQ-9 5-9)
- **Medication NOT first-line for mild depression** unless patient preference + previous episodes OR inadequate response to non-pharmacological
- **High-intensity interventions**: Moderate-severe (PHQ-9 ≥10)

### EQUILIBRIUM Pilot Data
Response rates based on 8 pilot GP practices (n=~1,200 patients, 2020-2022):
- **Lifestyle interventions**: 55-65% response rates for mild-moderate depression
- **Combination approaches**: 68-78% response rates
- **Guideline-concordant prescribing**: Improved from 31% (baseline) to 70-78% (post-implementation)

---

## Use Cases

### 1. Clinical Decision Support
- Integrate into EHR systems (EMIS, SystmOne)
- Prompt GPs with guideline-concordant recommendations based on PHQ-9

### 2. Audit and Quality Improvement
- Assess practice-level guideline concordance
- Identify non-concordant prescribing patterns (e.g., medication for mild depression without lifestyle interventions)

### 3. Training and Education
- Medical students and GP trainees learn stepped care approach
- Interactive tool for teaching NICE guidelines

### 4. Research
- Standardize treatment recommendations across studies
- Calculate expected vs actual outcomes

---

## Limitations

1. **Clinical judgment required**: Calculator provides recommendations, not prescriptions. GPs must assess individual patient context.
2. **Simplified model**: Real-world depression management involves multiple factors (comorbidities, social determinants, patient capacity).
3. **Response rates are estimates**: Based on pilot data; individual patient outcomes vary.
4. **Does not assess suicide risk**: Separate comprehensive risk assessment required if PHQ-9 item 9 >0.

---

## Contributing

To contribute improvements or report issues:
1. Fork the repository
2. Make changes
3. Run tests: `npm test`
4. Submit pull request

---

## License

MIT License - See LICENSE file for details

---

## Contact

**EQUILIBRIUM Project Team**
Email: equilibrium-data@manchester.ac.uk

---

*Last updated: 2025-10-26*
