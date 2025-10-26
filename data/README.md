# EQUILIBRIUM Data Dictionary

**Project EQUILIBRIUM: Evidence-Based Holistic Approaches to Depression in Primary Care**

This directory contains all data collected during the EQUILIBRIUM project from baseline assessment (2019) through scale-up phases (2019-2026+).

---

## Directory Structure

```
data/
├── README.md                           # This file - data dictionary and documentation
├── baseline/                           # Pre-implementation baseline data (2019)
│   ├── national-prescribing-data.csv  # National antidepressant prescribing patterns
│   ├── pilot-site-characteristics.csv # Characteristics of pilot medical schools and GP practices
│   └── metadata.json                   # Metadata for baseline data collection
├── pilot-phase/                        # Pilot implementation data (2020-2022)
│   ├── year-3/                        # Academic year 2020-2021 (medical school Year 3 students)
│   ├── year-4/                        # Academic year 2021-2022 (medical school Year 4 students)
│   └── year-5/                        # Academic year 2022-2023 (medical school Year 5 students)
├── scale-up/                           # Scale-up phase data (2023+)
│   ├── year-6/                        # 2023-2024
│   ├── year-7/                        # 2024-2025
│   └── year-8/                        # 2025-2026
└── outcomes/                           # Aggregated outcomes and findings
    ├── patient-outcomes.csv           # Patient-level depression outcomes (PHQ-9, remission, etc.)
    ├── prescribing-outcomes.csv       # Prescribing pattern changes over time
    ├── economic-outcomes.csv          # Cost-effectiveness and ROI data
    └── qualitative-findings.md        # Qualitative interview findings from GPs, patients, students

```

---

## Data Collection Timeline

| Phase | Period | Sites | Primary Focus |
|-------|--------|-------|---------------|
| **Baseline** | 2019 | National + 10 pilot sites | Pre-implementation prescribing patterns, student knowledge, GP baseline practices |
| **Pilot Phase** | 2020-2022 | 2 medical schools, 8 GP practices | Curriculum implementation (medical schools), practice transformation (GP practices) |
| **Scale-Up** | 2023-2026 | 8 medical schools, 50+ GP practices | Regional rollout, sustainability assessment |

---

## Variable Definitions

### Patient-Level Variables

#### Demographics
- `patient_id`: Unique anonymized patient identifier (format: PXXX-XXXX)
- `age`: Patient age at baseline (years)
- `sex`: Biological sex (Male, Female, Other, Prefer not to say)
- `gender`: Gender identity (Man, Woman, Non-binary, Other, Prefer not to say)
- `ethnicity`: Ethnicity (White British, White Other, Asian, Black, Mixed, Other)
- `imd_quintile`: Index of Multiple Deprivation quintile (1=most deprived, 5=least deprived)
- `practice_id`: GP practice identifier (format: GPXXX)

#### Clinical Variables
- `phq9_baseline`: PHQ-9 score at baseline (0-27, higher = more severe depression)
- `phq9_week2`: PHQ-9 score at 2-week follow-up
- `phq9_week4`: PHQ-9 score at 4-week follow-up
- `phq9_week8`: PHQ-9 score at 8-week follow-up
- `phq9_week12`: PHQ-9 score at 12-week follow-up (primary outcome timepoint)
- `depression_severity`: Baseline depression severity (Mild 5-9, Moderate 10-14, Moderately Severe 15-19, Severe 20-27)
- `previous_depression`: History of previous depression episodes (Yes, No, Unknown)
- `comorbidities`: Number of chronic physical health conditions (0, 1, 2, 3+)
- `anxiety_gad7`: GAD-7 anxiety score at baseline (0-21, collected if anxiety symptoms present)

#### Treatment Variables
- `treatment_group`: EQUILIBRIUM intervention vs usual care (Intervention, Control)
- `intervention_type`: Type of intervention received (Lifestyle only, Lifestyle + Therapy, Medication, Combined)
- `lifestyle_exercise`: Exercise intervention prescribed (Yes, No)
- `lifestyle_nutrition`: Nutrition intervention prescribed (Yes, No)
- `lifestyle_sleep`: Sleep intervention prescribed (Yes, No)
- `lifestyle_social`: Social prescribing/connection intervention (Yes, No)
- `medication_prescribed`: Antidepressant prescribed (Yes, No)
- `medication_type`: Type of antidepressant if prescribed (SSRI, SNRI, Other, None)
- `therapy_referred`: Referred to psychological therapy (Yes, No)
- `therapy_type`: Type of therapy if referred (CBT, IPT, Counselling, None)

#### Outcome Variables
- `phq9_response`: Achieved ≥50% reduction in PHQ-9 by week 12 (Yes, No)
- `phq9_remission`: PHQ-9 <5 at week 12 (Yes, No)
- `time_to_response`: Weeks until ≥50% PHQ-9 reduction (2, 4, 8, 12, or NA if no response)
- `patient_satisfaction`: Satisfaction with depression care (1-5 scale, 5=very satisfied)
- `adherence`: Self-reported adherence to prescribed interventions (High, Moderate, Low)
- `side_effects`: Experienced side effects from treatment (Yes, No)

---

### Practice-Level Variables (GP Practices)

#### Practice Characteristics
- `practice_id`: Unique practice identifier (format: GPXXX)
- `practice_name`: Practice name (anonymized as "Practice A", "Practice B", etc. in public datasets)
- `list_size`: Number of registered patients
- `gp_count`: Number of GP partners and salaried GPs (FTE)
- `nurse_count`: Number of practice nurses (FTE)
- `location_type`: Urban, Suburban, or Rural
- `deprivation_score`: Practice area IMD average score
- `region`: UK region (North East, North West, Yorkshire, etc.)
- `pcn_id`: Primary Care Network identifier

#### Implementation Variables
- `equilibrium_start_date`: Date EQUILIBRIUM implementation began (YYYY-MM-DD)
- `implementation_model`: Type of implementation (Quick-start, Standard, Phased)
- `training_completed`: GPs completed EQUILIBRIUM training (Yes, No)
- `staff_training_completed`: Practice staff completed training (Yes, No)
- `ehr_templates_installed`: EHR templates set up (Yes, No)
- `champion_present`: Practice has EQUILIBRIUM GP champion (Yes, No)

#### Practice Outcomes
- `phq9_completion_rate`: % depression consultations where PHQ-9 administered (0-100%)
- `biopsychosocial_assessment_rate`: % patients receiving comprehensive biopsychosocial assessment (0-100%, measured by chart review)
- `guideline_concordance`: % mild depression cases NOT prescribed antidepressant first-line (0-100%, aligned with NICE CG90)
- `mean_phq9_response_rate`: Average PHQ-9 response rate across all depression patients (0-100%)
- `mean_phq9_remission_rate`: Average remission rate (0-100%)
- `gp_satisfaction`: GP satisfaction with EQUILIBRIUM (1-5 scale)
- `sustainability_score`: Implementation sustainability score at 12 months (0-100)

---

### Medical School Variables

#### Institution Characteristics
- `school_id`: Unique medical school identifier (format: MSXXX)
- `school_name`: Medical school name (anonymized in public datasets)
- `student_cohort_size`: Number of students per year
- `curriculum_type`: Integrated, Modular, or Problem-Based Learning
- `region`: UK region
- `affiliation`: University affiliation

#### Implementation Variables
- `equilibrium_integration`: Level of integration (Full curriculum, Modular, Pilot)
- `years_implemented`: Which medical school years include EQUILIBRIUM (3, 4, 5, 3-4, 3-5)
- `hours_equilibrium`: Total curriculum hours devoted to EQUILIBRIUM content
- `osce_assessment`: EQUILIBRIUM competencies assessed in OSCE (Yes, No)

#### Student Outcomes
- `student_id`: Unique anonymized student identifier (format: SXXX-XXXX)
- `year_level`: Medical school year (3, 4, 5)
- `knowledge_baseline`: Pre-EQUILIBRIUM knowledge score (0-100%, multiple-choice test)
- `knowledge_post`: Post-EQUILIBRIUM knowledge score (0-100%)
- `osce_score_biopsychosocial`: OSCE station score for biopsychosocial assessment (0-100%)
- `osce_score_sdm`: OSCE station score for shared decision-making (0-100%)
- `osce_pass`: Overall EQUILIBRIUM OSCE pass (Yes, No, threshold ≥70%)
- `confidence_assessment`: Self-rated confidence in biopsychosocial assessment (1-10 scale)
- `confidence_lifestyle`: Self-rated confidence prescribing lifestyle interventions (1-10 scale)
- `confidence_sdm`: Self-rated confidence in shared decision-making (1-10 scale)

#### Clinical Placement Outcomes
- `placement_type`: Type of placement (GP, Psychiatry, Other)
- `depression_cases_seen`: Number of depression cases managed during placement
- `guideline_concordance_placement`: % cases managed in line with NICE guidelines (assessed by supervisor or chart review)

---

### Prescribing Variables

#### National/Regional Prescribing
- `year`: Calendar year
- `month`: Month (1-12)
- `region`: UK region or CCG/ICB identifier
- `antidepressant_items`: Number of antidepressant prescription items dispensed
- `antidepressant_cost`: Total cost of antidepressant prescriptions (£)
- `ssri_items`: Number of SSRI prescriptions
- `snri_items`: Number of SNRI prescriptions
- `other_antidep_items`: Other antidepressants (mirtazapine, tricyclics, etc.)
- `list_size`: Registered patient population
- `items_per_1000`: Antidepressant prescription items per 1,000 registered patients
- `depression_prevalence`: Estimated depression prevalence (%, from QOF or survey)

#### Practice-Level Prescribing
- `practice_id`: Practice identifier
- `quarter`: Quarter (Q1, Q2, Q3, Q4)
- `year`: Year
- `depression_consultations`: Number of depression consultations
- `new_depression_diagnoses`: Number of new depression diagnoses
- `mild_depression_cases`: Number of mild depression cases (PHQ-9 5-9)
- `mild_depression_medication_first_line`: Number of mild cases prescribed antidepressant as first-line
- `guideline_nonconcordant_rate`: % mild depression prescribed medication first-line (target <20%)
- `deprescribing_attempts`: Number of patients with deprescribing discussed
- `deprescribing_successful`: Number successfully tapered off antidepressants

---

### Economic Variables

#### Cost Variables
- `training_costs`: Total cost of EQUILIBRIUM training (£)
- `implementation_costs`: Practice-level implementation costs (EHR setup, resources, etc., £)
- `staff_time_costs`: Staff time allocated to EQUILIBRIUM (£)
- `medication_costs_baseline`: Antidepressant medication costs pre-EQUILIBRIUM (£)
- `medication_costs_post`: Antidepressant medication costs post-EQUILIBRIUM (£)
- `medication_savings`: Reduction in medication costs (£, baseline - post)

#### Effectiveness Variables
- `qaly_baseline`: Quality-Adjusted Life Years at baseline (calculated from EQ-5D-5L)
- `qaly_12months`: QALYs at 12 months
- `qaly_gained`: QALYs gained (12 months - baseline)
- `icer`: Incremental Cost-Effectiveness Ratio (£ per QALY gained, EQUILIBRIUM vs usual care)

#### Return on Investment
- `total_costs`: Total implementation costs (£)
- `total_savings`: Total savings (medication + reduced healthcare utilization, £)
- `net_benefit`: Total savings - total costs (£)
- `roi`: Return on investment (net benefit / total costs × 100, %)
- `payback_period`: Time to recoup implementation costs (months)

---

### Qualitative Variables

#### Interview Participants
- `participant_id`: Unique identifier (format: INTXXX)
- `participant_type`: GP, Patient, Student, Practice Manager, Medical School Faculty
- `site`: Practice or medical school identifier
- `interview_date`: Date of interview (YYYY-MM-DD)
- `interview_duration`: Interview length (minutes)

#### Coded Themes (from thematic analysis)
- Theme codes documented in `qualitative-findings.md`
- Common themes: Barriers to implementation, Facilitators, Patient engagement, GP confidence, Workload impact, Sustainability challenges

---

## Data Quality and Validation

### Missing Data Handling
- Missing patient outcome data (PHQ-9 follow-up): Multiple imputation used for primary analysis, complete-case analysis as sensitivity analysis
- Missing prescribing data: Practices with <80% data completeness excluded from prescribing outcome analysis
- Missing student data: Students who withdrew from medical school excluded

### Data Validation
- **Range checks**: All scores validated against expected ranges (PHQ-9 0-27, confidence 1-10, etc.)
- **Logic checks**: Impossible combinations flagged (e.g., remission without response, medication prescribed in control group)
- **Outlier detection**: Values >3 SD from mean reviewed and verified
- **Duplicate checks**: Patient IDs, practice IDs checked for duplicates

### Data Linkage
- Patient data linked to practice data via `practice_id`
- Student data linked to medical school via `school_id`
- Regional prescribing data linked to practices via postcode/CCG mapping

---

## Ethics and Data Protection

### Ethics Approval
- NHS Health Research Authority (HRA) approval: IRAS Project ID 287456
- University of Manchester Research Ethics Committee: Reference 2019-8234-12876

### Data Protection
- **GDPR compliance**: All personal identifiers removed; anonymized IDs used
- **Data storage**: Encrypted storage on University of Manchester secure servers
- **Access**: Restricted to named researchers on ethics protocol
- **Retention**: Data retained for 10 years post-publication per university policy

### Consent
- **Patients**: Written informed consent for outcome data collection and qualitative interviews
- **GPs**: Consent for practice-level data aggregation and interviews
- **Students**: Consent for educational outcome data use (assessment scores, OSCE)

---

## Data Access

### Public Datasets (Available)
- Aggregated practice-level outcomes (anonymized practice IDs)
- Aggregated medical school outcomes (anonymized school IDs)
- National prescribing trends (publicly available NHS data)
- Qualitative findings (themes only, no identifiable quotes in public version)

### Restricted Datasets (Controlled Access)
- Patient-level outcome data (requires ethics approval, data sharing agreement)
- Practice-identifiable data (requires practice permission)
- Student-identifiable data (requires medical school permission)

### Data Requests
Contact: equilibrium-data@manchester.ac.uk

Include:
- Research question and analysis plan
- Evidence of ethics approval (if patient-level data)
- Data sharing agreement signed by institution

---

## Citation

If using EQUILIBRIUM data in publications, please cite:

**Primary EQUILIBRIUM trial publication:**
> Thompson S, Foster R, et al. (2024). "Project EQUILIBRIUM: A pragmatic trial of holistic approaches to depression in primary care and medical education." *The Lancet Psychiatry*, 11(4): 287-298. DOI: 10.1016/S2215-0366(24)00045-2

**For medical school outcomes:**
> Williams J, et al. (2023). "Integrating holistic depression management into medical school curricula: Outcomes from Project EQUILIBRIUM." *Medical Education*, 57(8): 765-774. DOI: 10.1111/medu.15089

**For GP practice implementation:**
> Foster R, et al. (2023). "Implementing holistic depression management in primary care: A practice-based evaluation." *British Journal of General Practice*, 73(729): e245-e252. DOI: 10.3399/BJGP23X732465

---

## Version History

- **v1.0** (2024-01-15): Initial data release - baseline and pilot phase data (2019-2022)
- **v1.1** (2024-06-30): Added Year 6 scale-up data (2023-2024)
- **v1.2** (2025-01-10): Added Year 7 scale-up data (2024-2025), updated economic outcomes
- **v2.0** (2025-10-26): Comprehensive dataset including all pilot and scale-up phases through Year 8

---

## Contact

**Project Lead:** Dr. Sarah Thompson, University of Manchester
**Data Manager:** Dr. Michael Foster, University of Manchester
**Email:** equilibrium-data@manchester.ac.uk
**Website:** www.equilibrium-project.org

---

*Last updated: 2025-10-26*
