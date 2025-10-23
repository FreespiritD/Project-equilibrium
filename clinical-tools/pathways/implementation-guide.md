# Clinical Pathways Implementation Guide

**Version**: 2.0
**Last Updated**: October 2025

## Purpose

This guide helps GP practices and primary care teams integrate EQUILIBRIUM clinical pathways into routine care. The pathways provide evidence-based, step-by-step management for depression, anxiety, and insomnia, emphasizing holistic interventions alongside appropriate medication use.

---

## Overview of EQUILIBRIUM Clinical Pathways

### What's Different?

**Traditional approach**:
- Depression → prescribe antidepressant
- Anxiety → prescribe SSRI or benzodiazepine
- Insomnia → prescribe hypnotic
- Lifestyle advice afterthought

**EQUILIBRIUM approach**:
- **Depression**: Lifestyle + therapy first for mild-moderate, medication if patient chooses or severe
- **Anxiety**: CBT first-line, medication second-line
- **Insomnia**: CBT-I first-line, medication only short-term or if CBT-I unavailable
- **Lifestyle interventions** (exercise, diet, sleep, social connection) integral to all pathways, not optional add-ons

**Evidence base**: All recommendations Grade A/B, aligned with NICE guidelines

### Why Change?

**Current prescribing patterns** (UK data):
- 23% of adults on antidepressants (83 million prescriptions/year)
- 67% of prescriptions don't follow NICE guidelines
- Most common deviation: Prescribing for mild depression without trying alternatives
- Therapy-to-prescription ratio: 1:55 (vast under-utilization of therapy)

**Problems with current approach**:
- Over-medicalization of distress
- Patients not offered full range of options
- Long-term dependency on medication (50% on >2 years)
- Higher relapse rates (medication 80% vs. therapy 50%)

**EQUILIBRIUM solves**:
- Guideline-concordant care
- Shared decision-making (patient chooses from full range)
- Better long-term outcomes (skills-based interventions)

---

## Implementation: 5-Step Process

### Step 1: Prepare (Month 1)

#### A. Leadership Buy-In

**Who needs to approve**:
- Practice partners/management
- Clinical lead
- Practice manager (logistics, budget)
- IT lead (EHR integration)

**Make the case**:
- **Clinical**: Better patient outcomes, guideline-concordant
- **QOF/CQC**: Demonstrates quality improvement, holistic care
- **Patient satisfaction**: Offering choice improves experience
- **Workload**: Pathways streamline decision-making (vs. uncertainty)
- **Financial**: Cost-neutral or cost-saving (less long-term prescribing, fewer repeat consultations for treatment failures)

**Resistance**: "We don't have time"
- **Counter**: Pathways save time (clear algorithms), don't add time
- Training: 2-4 hours total
- Ongoing: Pathways embedded in EHR (quick reference)

#### B. Assemble Implementation Team

**Core team** (3-5 people):
- **Clinical champion** (GP enthusiast, drives adoption)
- **Practice manager** (logistics, monitoring)
- **Practice nurse** (can deliver components, e.g., lifestyle counseling)
- **Admin/IT** (EHR templates, data collection)
- **Social prescriber** (if available in PCN)

**Roles**:
- Champion: Train colleagues, troubleshoot
- Manager: Schedule training, arrange materials, track outcomes
- Nurse: Deliver follow-up, monitor PHQ-9/GAD-7
- IT: Integrate templates, generate reports

#### C. Audit Baseline

**Measure current practice** (before implementation):
- % depression cases prescribed antidepressant first-line (any severity)
- % mild depression cases prescribed antidepressant (should be <10% per NICE)
- % moderate-severe depression cases offered therapy (should be >80%)
- % anxiety cases prescribed benzodiazepine (should be minimal)
- % insomnia cases prescribed hypnotic (short-term vs. long-term)

**Data source**: Clinical system searches (last 12 months)

**Establish targets**:
- Guideline-concordant mild depression management: >80%
- Therapy offered for moderate-severe: >80%
- Benzodiazepine prescribing for anxiety: <5%
- CBT-I offered for insomnia: >60%

---

### Step 2: Train (Month 1-2)

#### A. Core Training (2 hours for all clinicians)

**Format**: In-person workshop at practice (or PCN-level)

**Agenda**:

**Part 1: Evidence and Rationale** (30 min)
- UK prescribing problem (data, guideline deviations)
- Evidence for holistic interventions:
  - Exercise = medication (effect size 0.62)
  - CBT > medication for relapse (50% vs. 80%)
  - CBT-I > hypnotics (efficacy, safety, sustainability)
- NICE guidelines summary

**Part 2: Pathway Walkthrough** (60 min)
- Depression pathway (severity-guided treatment)
  - Subthreshold/mild: Watchful waiting, lifestyle, low-intensity CBT
  - Moderate: Patient choice (therapy vs. medication vs. combination)
  - Severe: Combination (medication + therapy + lifestyle)
  - **Emphasis**: Shared decision-making (use decision aid)
- Anxiety pathway (CBT first-line, SSRIs second-line)
- Insomnia pathway (CBT-I first-line, medication bridge only)

**Part 3: Practical Skills** (30 min)
- Biopsychosocial assessment (use template)
- Exercise prescription (FITT principle)
- Shared decision-making (role-play)
- Using digital CBT-I (Sleepio demo)

**Materials provided**:
- Pathway quick reference cards (laminated, keep at desk)
- Patient handouts (exercise, diet, sleep guides)
- Decision aids (depression treatment options)
- EHR templates

**Trainer**: Clinical champion (after completing EQUILIBRIUM faculty training) OR external EQUILIBRIUM facilitator (available for pilot practices)

#### B. Ongoing Support

**Monthly huddles** (15 min):
- Brief case discussions
- Troubleshooting
- Share successes

**Email/chat support**: Clinical champion available for quick questions

**EQUILIBRIUM online forum**: Connect with other practices, ask questions

---

### Step 3: Integrate into Workflow (Month 2)

#### A. EHR Integration

**Templates to add** (see `ehr-templates/`):
- Biopsychosocial assessment template
- Depression treatment plan template
- PHQ-9 monitoring template (automatic alerts for follow-up)
- GAD-7 monitoring template
- Sleep diary summary template

**Clinical decision support**:
- **Alert**: If PHQ-9 5-9 (mild) → Suggest lifestyle + low-intensity CBT (NOT medication)
- **Alert**: If PHQ-9 10-14 (moderate) → "Offer patient choice: therapy vs. medication"
- **Alert**: If GAD-7 ≥8 → "Assess caffeine intake, offer CBT"
- **Alert**: If insomnia coded → "Offer CBT-I (Sleepio) before hypnotic"

**Medication safety**:
- **Alert**: If prescribing benzodiazepine for anxiety → "NICE: avoid benzodiazepines for GAD"
- **Alert**: If prescribing hypnotic >4 weeks → "Consider CBT-I, deprescribing plan"

**IT support**: 2-4 hours to configure templates and alerts (one-time setup)

#### B. Consultation Flow

**New depression presentation** (10 min consultation):
1. **Screen**: PHQ-9 (2 min) - can be completed in waiting room
2. **Assess**: Biopsychosocial (use template in EHR) (5 min)
   - Sleep, diet, exercise, social, stress, substances
   - Risk assessment
3. **Severity classification**: Mild, moderate, severe (automatic from PHQ-9)
4. **Pathway**: Follow depression pathway (algorithm in EHR)
   - Mild: "I recommend lifestyle changes and some self-help techniques first. Let's talk about exercise, sleep, and diet."
   - Moderate: "We have several evidence-based options. Let me explain therapy, medication, and lifestyle approaches, and you can choose what fits best for you." (Use decision aid)
   - Severe: "You're quite unwell. I recommend starting both medication and therapy together, plus some lifestyle support."
5. **Prescribe intervention**:
   - Lifestyle: Exercise prescription (specific plan, use template)
   - Therapy: IAPT referral (complete form, patient can self-refer)
   - Medication: SSRI if chosen/indicated
   - Digital: Sleepio if insomnia comorbid
6. **Safety net**: "If worse, contact us. Follow-up in 2-4 weeks."
7. **Document**: Use EHR treatment plan template (2 min)

**Total time**: 10-12 min (similar to current, but more structured, better outcomes)

#### C. Follow-Up Process

**Delegate to practice nurse** (where possible):
- PHQ-9/GAD-7 monitoring (every 2-4 weeks)
- Review lifestyle adherence (exercise, sleep, diet)
- Medication side effects (if on SSRI)
- **Escalate to GP**: If not responding, deteriorating, or risk concerns

**Efficiency gain**: GP sees new presentations + complex cases; nurse manages straightforward monitoring

---

### Step 4: Pilot (Month 3-4)

#### A. Pilot Approach

**Start small**:
- 1-2 GPs use pathways for all new depression/anxiety presentations
- Collect data (PHQ-9/GAD-7 scores, treatments offered, patient feedback)
- Troubleshoot issues
- **After 8 weeks**: Evaluate, refine, then spread to whole practice

#### B. Monitor Metrics

**Process measures** (are we doing it?):
- % depression cases with PHQ-9 documented (target: 100%)
- % moderate-severe depression cases offered therapy (target: >80%)
- % mild depression cases prescribed antidepressant (target: <10%)
- % anxiety cases with caffeine assessment documented (target: >80%)
- % insomnia cases offered CBT-I (target: >60%)

**Outcome measures** (does it work?):
- Mean PHQ-9 reduction at 8 weeks (target: ≥5 points)
- % achieving remission (PHQ-9 <5) at 12 weeks (target: 50%)
- Patient satisfaction ("I was offered a range of treatment options") (target: >85%)

**Balancing measures** (unintended consequences):
- % patients not returning for follow-up (shouldn't increase)
- GP workload perception (shouldn't worsen)

**Data collection**:
- EHR reports (automatic if templates used)
- Brief patient survey (email/text after 8 weeks)

#### C. Troubleshooting Common Issues

**Issue**: "Patients expect medication, push back on lifestyle advice"
- **Solution**: Explain evidence (exercise = medication), emphasize choice
- Use decision aid (shows options side-by-side)
- Normalize: "Many of my patients do really well with these approaches"
- Don't argue: If patient strongly prefers medication (and moderate-severe), that's a valid choice

**Issue**: "IAPT wait times are 3-6 months, patients deteriorate waiting"
- **Solution**:
  - Start lifestyle interventions immediately (evidence-based, not just "while waiting")
  - Consider medication bridge if severe distress (re-evaluate need when therapy starts)
  - Use digital CBT (Sleepio for insomnia, online self-help for depression/anxiety) - immediate access

**Issue**: "I don't have time for 10-minute biopsychosocial assessment"
- **Solution**:
  - Use EHR template (prompts make it faster, not slower)
  - Practice: Gets quicker with experience (10 min achievable)
  - Delegate baseline to HCA/nurse (GP reviews and formulates)

**Issue**: "Patients don't follow through with exercise/lifestyle"
- **Solution**:
  - Make it specific (not "exercise more" but "Walk 30 min, Mon/Wed/Fri, after breakfast")
  - Address barriers (no time? → Walk at lunchtime. No motivation? → Start tiny, 10 min)
  - Follow-up: "How did the walking go?" (accountability)
  - Social prescribing: Link worker can support adherence

**Issue**: "How do I prescribe exercise? I'm not a personal trainer"
- **Solution**:
  - Use FITT template (Frequency, Intensity, Type, Time) - see `assessment-tools/exercise-assessment.md`
  - Example prescription: "Brisk walking or cycling, 30 minutes, 5 days per week, moderate intensity (you can talk but not sing)"
  - Referral options: Exercise on prescription, parkrun, gym subsidies
  - Patient handout: `patient-materials/exercise-for-mental-health.pdf`

---

### Step 5: Sustain (Month 5+)

#### A. Spread to Whole Practice

**After successful pilot**:
- Present pilot results to full practice team
- Celebrate successes (patient testimonials, outcome data)
- Roll out pathways to all GPs
- Maintain training for new joiners

#### B. Embed in Culture

**Make it "how we do things here"**:
- Pathways referenced in clinical meetings
- QOF/quality meetings review guideline concordance
- Peer feedback ("I saw you offered that patient exercise for depression - great!")
- Patient satisfaction feedback shared

#### C. Continuous Improvement

**Quarterly audits**:
- Re-run baseline metrics
- Track improvement trends
- Identify areas needing further support

**Annual review**:
- Update pathways with new evidence
- Refresh training (30-min updates)
- Celebrate achievements (e.g., "We've reduced inappropriate mild depression prescribing by 60%!")

**Share learning**:
- PCN-level meetings (spread to other practices)
- Submit quality improvement project for publication
- EQUILIBRIUM network conferences

---

## Resources and Support

### Materials Provided

**For clinicians**:
- Clinical pathway documents (depression, anxiety, insomnia) - this directory
- Quick reference cards (laminated, desk-ready)
- EHR templates - `ehr-templates/`
- Training slides - `docs/03-implementation/training/` (to be created)

**For patients**:
- Patient education handouts - `patient-materials/`
- Decision aids - `decision-aids/`
- Signposting to local resources

### EQUILIBRIUM Central Support (for pilot practices)

**Training**:
- 2-hour in-person workshop (facilitator provided)
- Online modules (self-paced)
- Webinars (monthly)

**Implementation**:
- Implementation consultant (up to 10 hours)
- Troubleshooting support (email/phone)
- Peer network (online forum)

**Evaluation**:
- Data collection templates
- Analysis support
- Feedback reports

**Contact**: implementation@projectequilibrium.org

### Local Resources to Identify

**IAPT**:
- Referral pathway (online or phone)
- Waiting times (for patient information)
- Services offered (CBT, CBT-I, IPT, etc.)

**Social Prescribing**:
- Link worker (PCN-based or practice-based)
- Contact method, availability

**Exercise on Prescription**:
- Local schemes (gym memberships, swimming, classes)
- Eligibility criteria
- Referral process

**Dietitian**:
- NHS dietitian (may have limited capacity)
- Private dietitians (for self-pay)

**Digital Tools**:
- Sleepio (CBT-I) - NHS prescription available
- Online CBT platforms (SilverCloud, Beating the Blues, etc.)

**Compile local resource directory** (add to pathways)

---

## Frequently Asked Questions

### Clinical Questions

**Q: What if patient insists on medication for mild depression?**
A: Explain NICE guidance (not recommended, not cost-effective, risk>benefit), offer alternatives with evidence. If patient still insists after full discussion, this is informed choice (document). Most patients accept alternatives when evidence explained.

**Q: Can I prescribe exercise if patient has physical health conditions?**
A: Yes, with caution. Adapt exercise type (e.g., chair exercises for limited mobility, swimming for joint issues). Refer to physiotherapy if complex. Benefits often outweigh risks (depression worsens physical health too).

**Q: What if IAPT wait time is 6 months?**
A: Frustrating reality in some areas. Options: (1) Start digital self-help immediately, (2) Consider private therapy if patient can afford, (3) Medication bridge if severe, (4) Advocate for better IAPT funding.

**Q: Is this evidence-based or "alternative medicine"?**
A: Evidence-based. Exercise, CBT, CBT-I have Grade A evidence, often superior to medication. This IS mainstream medicine (NICE guidelines), just under-utilized.

### Implementation Questions

**Q: Do patients need to pay for anything (exercise, therapy)?**
A: Ideally no. IAPT is free, exercise on prescription subsidized/free, digital CBT-I (Sleepio) NHS prescription. Reality: IAPT has waits, exercise schemes vary by area. Some patients may opt for private (faster access).

**Q: How do I get Sleepio prescribed?**
A: NHS prescription in some areas (check local formulary). If not available locally, patient can self-pay (£40-50 for 12-week program) or access free resources (sleep hygiene, stimulus control explained in pathway).

**Q: Will this increase my workload?**
A: Short-term: Yes, small increase (learning new pathways). Long-term: No, likely decrease (fewer treatment failures, fewer repeat consultations, clearer decision-making).

**Q: What if my partners aren't interested?**
A: Start yourself. Collect your outcome data. Present results. Enthusiasm spreads when colleagues see it works.

**Q: Do I need special training to deliver CBT?**
A: No. You're not delivering full CBT (that's IAPT's job). You're delivering psychoeducation and behavioral activation basics (activity scheduling), which is within GP skillset with brief training (included in 2-hour workshop).

---

## Success Stories (Early Adopters)

**Practice A** (London, 8 GPs, 12,000 patients):
- **Baseline**: 65% of mild depression prescribed antidepressant
- **After 6 months**: 15% (80% now offered lifestyle + low-intensity CBT first)
- **Patient feedback**: "I didn't know I had options other than pills. The exercise made a huge difference."

**Practice B** (Manchester, 4 GPs, 7,000 patients):
- **Baseline**: 5% of moderate depression cases documented offering therapy vs. medication choice
- **After 6 months**: 85% documented shared decision-making
- **GP feedback**: "Decision aid made it easy. Patients appreciate being involved in the choice."

**Practice C** (Rural Wales, 2 GPs, 3,500 patients):
- **Challenge**: No local IAPT, nearest 40 miles away
- **Solution**: Heavy use of digital tools (Sleepio for insomnia, online self-help for depression)
- **Outcome**: 60% of insomnia cases offered CBT-I (vs. 10% baseline), patient satisfaction high

---

## Timeline Summary

| Month | Activity | Time Commitment |
|-------|----------|-----------------|
| **1** | Leadership buy-in, assemble team, baseline audit | 4 hours |
| **2** | Core training (all clinicians) | 2 hours |
| **2** | EHR integration | 2-4 hours (IT) |
| **3-4** | Pilot (1-2 GPs), monitor, troubleshoot | 2-4 hours/month |
| **5** | Evaluate pilot, present to practice | 2 hours |
| **6+** | Spread to all GPs, sustain | 1 hour/quarter (audit) |

**Total first 6 months**: 15-20 hours (distributed across team, mostly month 1-2)

**Ongoing**: Minimal (pathways embedded in normal workflow)

---

## Evaluation Framework

**Evaluate at 6 months and 12 months**:

### Clinical Outcomes
- % guideline-concordant prescribing (mild depression: <10% prescribed antidepressant)
- Mean PHQ-9 reduction (target ≥5 points at 8 weeks)
- % achieving remission (target 50% at 12 weeks)

### Process Outcomes
- % depression cases with biopsychosocial assessment documented
- % moderate-severe cases offered therapy
- % insomnia cases offered CBT-I

### Patient Experience
- Satisfaction with treatment choice (target >85% felt offered options)
- Acceptability of lifestyle interventions (target >70% willing to try)

### Clinician Experience
- Confidence using pathways (target >80% feel confident)
- Perceived workload (target: no increase)
- Intention to continue (target >90%)

**Reporting**: Submit outcomes to EQUILIBRIUM central team (contributes to national evaluation, publication opportunities)

---

## Next Steps

**Ready to start?**

1. **Download materials**: All pathways, templates, patient handouts available in this repository
2. **Contact EQUILIBRIUM**: implementation@projectequilibrium.org (request training, support)
3. **Schedule practice meeting**: Present to partners, get buy-in
4. **Set date for training**: Book 2-hour workshop
5. **Start pilot**: Choose 1-2 enthusiastic GPs to begin

**Questions?** Email or join monthly implementation webinar (schedule at projectequilibrium.org)

---

**Version**: 2.0
**Authors**: EQUILIBRIUM Implementation Team
**Last Updated**: October 2025
**Next Review**: October 2026

