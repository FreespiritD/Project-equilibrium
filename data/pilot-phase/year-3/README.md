# Year 3 Pilot Phase Data (2020-2021)

**Academic Year:** 2020-2021  
**Medical School Years:** Year 3 students (first year of EQUILIBRIUM implementation at pilot schools)  
**GP Practices:** First year of implementation at 8 pilot practices

---

## Data Files (To Be Added)

### Medical School Data
- **`student-knowledge-scores.csv`**: Pre-post knowledge test scores for Year 3 students
  - Variables: student_id, school_id, knowledge_baseline, knowledge_post, knowledge_gain
  - Expected n=755 students (430 Manchester + 325 Edinburgh)

- **`student-confidence-ratings.csv`**: Self-rated confidence in EQUILIBRIUM competencies
  - Variables: student_id, confidence_assessment, confidence_lifestyle, confidence_sdm (1-10 scales)
  
- **`osce-scores-year3.csv`**: OSCE assessment scores for biopsychosocial assessment station
  - Variables: student_id, osce_score_biopsychosocial, osce_pass (threshold ≥70%)
  - Note: Not all schools assess EQUILIBRIUM in Year 3 OSCE

### GP Practice Data
- **`practice-outcomes-q1.csv`**: Quarter 1 (Sept-Nov 2020) practice-level outcomes
- **`practice-outcomes-q2.csv`**: Quarter 2 (Dec 2020-Feb 2021)
- **`practice-outcomes-q3.csv`**: Quarter 3 (Mar-May 2021)
- **`practice-outcomes-q4.csv`**: Quarter 4 (Jun-Aug 2021)
  - Variables: practice_id, quarter, phq9_completion_rate, mean_phq9_response_rate, guideline_concordance, etc.

- **`patient-outcomes-year3.csv`**: Anonymized patient-level outcomes from pilot practices
  - Variables: See data dictionary (patient_id, age, sex, ethnicity, phq9_baseline, phq9_week12, response, remission, etc.)
  - Expected n=~1,200 patients (150 depression patients per practice × 8 practices)

- **`prescribing-data-year3.csv`**: Practice-level prescribing patterns by quarter
  - Variables: practice_id, quarter, mild_depression_cases, mild_depression_medication_first_line, guideline_nonconcordant_rate

### Qualitative Data
- **`gp-interviews-year3.csv`**: GP interview participant characteristics
  - Variables: participant_id, practice_id, interview_date, interview_duration, years_experience
  
- **`interview-transcripts/`**: (Restricted access) Full interview transcripts
  - Stored separately due to confidentiality

---

## Key Milestones - Year 3

**September 2020:**
- Medical schools begin Year 3 EQUILIBRIUM curriculum
- GP practices complete training (2-day intensive + staff workshop)
- EHR templates installed at all 8 practices

**October 2020:**
- First patients managed using EQUILIBRIUM approach
- PHQ-9 monitoring begins systematically

**December 2020:**
- First quarterly practice outcomes review
- Identify early implementation challenges

**March 2021:**
- Mid-year check-in with all pilot sites
- Adjust implementation strategies based on learning

**June 2021:**
- Year 3 students complete OSCE (biopsychosocial assessment station)
- Medical schools review student knowledge gains

**August 2021:**
- End of Year 3 data collection
- 12-month patient outcomes assessed (for patients enrolled Sept-Oct 2020)

---

## Expected Outcomes - Year 3

### Medical Schools
- **Knowledge improvement:** +15-25% on knowledge tests (expected based on curriculum changes)
- **Confidence gains:** +2-3 points on 1-10 confidence scales
- **OSCE pass rate:** 70-80% (new assessment, baseline being established)

### GP Practices
- **PHQ-9 completion rate:** 60-75% (up from ~20% baseline - new systematic monitoring)
- **PHQ-9 response rate:** 48-55% (modest improvement from 43% baseline - early implementation)
- **Guideline concordance:** 45-55% (improvement from 31% baseline, but not yet at target)
- **Implementation challenges:** Time constraints, EHR workflow issues, patient engagement variability

**Note:** Year 3 is pilot/learning year - expect moderate improvements, not dramatic changes. Larger gains expected in Years 4-5 as implementation matures.

---

## Data Quality Notes

### Missing Data
- **Student data:** Some students on placement/intercalated degrees may have incomplete data
- **Patient data:** 10-20% loss to follow-up expected (patients don't return for 12-week PHQ-9)
- **Practice data:** Some practices slower to adopt systematic data collection

### COVID-19 Impact
- **Sept 2020-June 2021** coincides with COVID-19 pandemic second/third waves
- Potential confounders:
  - Disrupted medical school teaching (some online delivery)
  - Increased workload in GP practices
  - Higher depression prevalence in population
  - Delayed psychological therapy access
- Analysis should account for pandemic effects

---

## Usage

This directory contains pilot phase implementation data - the first year of EQUILIBRIUM deployment at 2 medical schools and 8 GP practices. Data is de-identified and suitable for analysis of:
- Early implementation feasibility
- Initial effectiveness signals
- Implementation challenges and adaptations
- Medical education curriculum integration

For access to patient-level or identifiable data, contact equilibrium-data@manchester.ac.uk with ethics approval and data sharing agreement.

---

*Last updated: 2024-01-15*
