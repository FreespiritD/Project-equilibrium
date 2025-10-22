# Project EQUILIBRIUM Style Guide

This style guide ensures consistency across all Project EQUILIBRIUM documentation and materials.

## General Principles

- **Clarity over cleverness**: Write to be understood, not to impress
- **Evidence-based**: Cite sources for all factual claims
- **Accessible**: Plain language, avoid jargon, explain technical terms
- **Inclusive**: Consider diverse readers (international, various backgrounds)
- **Action-oriented**: Focus on what readers should do or know

## Document Structure

### All Documents Should Have

1. **Title**: Clear, descriptive (Title Case)
2. **Summary/Overview**: Brief description (2-3 sentences)
3. **Table of Contents**: For documents >500 words
4. **Body**: Well-structured with headings
5. **Metadata footer**: Version, last updated, contact

### Example Structure

```markdown
# Document Title

Brief overview of what this document covers.

## Table of Contents
- [Section 1](#section-1)
- [Section 2](#section-2)

## Section 1
Content...

## Section 2
Content...

---

**Document Version**: 1.0
**Last Updated**: October 2025
**Contact**: email@projectequilibrium.org
```

## Markdown Formatting

### Headings

- Use ATX-style headings (`#`, `##`, etc.)
- Only one H1 (`#`) per document (the title)
- Don't skip heading levels
- Add blank line before and after headings

```markdown
# Title (H1)

## Main Section (H2)

### Subsection (H3)

#### Detail (H4)
```

### Lists

**Unordered lists:**
- Use `-` for bullet points (not `*` or `+`)
- Add blank line before and after list
- Indent sub-items with 2 spaces

```markdown
- First item
  - Sub-item
  - Sub-item
- Second item
```

**Ordered lists:**
- Use `1.` `2.` `3.` (not `1)` or other formats)
- Don't manually number if list might change

### Emphasis

- **Bold** for strong emphasis (`**bold**`)
- *Italic* for light emphasis (`*italic*`)
- `Code` for technical terms, file names, commands (`` `code` ``)
- Don't use ALLCAPS for emphasis

### Links

**Internal links:**
```markdown
[Link text](path/to/file.md)
[Link to section](#section-heading)
```

**External links:**
```markdown
[Link text](https://example.com)
```

- Use descriptive link text (not "click here")
- Open external links in same window (no target="_blank" in markdown)

### Code Blocks

Use fenced code blocks with language identifier:

````markdown
```python
def example():
    return "Hello"
```

```bash
git commit -m "Message"
```
````

### Tables

- Use GitHub-flavored markdown tables
- Align columns with pipes
- Include header row

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Blockquotes

Use for highlighting important information or quotes:

```markdown
> This is an important callout or quote.
```

## Writing Style

### Voice and Tone

- **Active voice**: "We recommend" not "It is recommended"
- **Direct**: "Use this tool" not "This tool may be used"
- **Professional but approachable**: Friendly without being casual
- **Inclusive**: "You" not "users" or "readers"

### Language

**Use:**
- Short sentences (average 15-20 words)
- Common words over fancy synonyms
- Concrete examples
- Bullet points for lists
- Subheadings to break up text

**Avoid:**
- Jargon without explanation
- Passive voice when possible
- Very long paragraphs (>5 sentences)
- Assumptions about reader knowledge
- Unnecessary qualifiers ("very", "really", "quite")

### Medical/Clinical Content

**Be precise:**
- Use correct medical terminology
- Define terms on first use
- Cite evidence (see Citations section)
- Note limitations and uncertainties
- Specify target populations

**Example:**
```markdown
**Cognitive Behavioral Therapy (CBT)** is an evidence-based psychological
intervention that helps patients identify and change unhelpful thinking
patterns (Beck, 2011).
```

## Citations and References

### In-Text Citations

Use APA format (Author, Year):

```markdown
Research shows exercise is effective for depression (Schuch et al., 2016).
```

For specific claims, add more detail:

```markdown
A meta-analysis of 25 RCTs (N=1,487) found exercise had a large effect
size (SMD = 0.62) for reducing depression symptoms (Schuch et al., 2016).
```

### Reference Lists

At end of document, use APA format:

```markdown
## References

1. Schuch, F. B., Vancampfort, D., Richards, J., et al. (2016). Exercise as
   a treatment for depression: A meta-analysis adjusting for publication bias.
   *Journal of Psychiatric Research*, 77, 42-51.

2. Beck, J. S. (2011). *Cognitive behavior therapy: Basics and beyond*
   (2nd ed.). Guilford Press.
```

For online resources, include URL and access date.

## Project-Specific Terms

### Proper Names

- **Project EQUILIBRIUM** (all caps, not "Project Equilibrium")
- Full acronym when first mentioned: "Evidence-based QUalIty Learning Initiative for Better Restorative & Integrated Universal Medicine (EQUILIBRIUM)"

### Capitalization

**Capitalize:**
- Working group names: "Medical Education Working Group"
- Formal roles: "Steering Committee", "Project Director"
- Specific programs: "Student Ambassador Program", "Patient Advisory Group"

**Don't capitalize:**
- General roles: "medical educators", "GPs", "researchers"
- General terms: "pilot sites", "working groups", "curriculum"

### Acronyms

- Spell out on first use, then use acronym
- Example: "Cognitive Behavioral Therapy (CBT)"
- Commonly known: NHS, GP, UK (no need to spell out)

## Formatting Conventions

### Dates

- Use: "October 2025" or "15 October 2025"
- Avoid: "10/15/2025" (ambiguous internationally)

### Numbers

- Spell out one through nine: "five medical schools"
- Use numerals for 10+: "20 GP practices"
- Use numerals with units: "3 days", "£30M", "10 years"
- Use commas in large numbers: "1,000 not 1000"

### Currency

- Use £ for GBP: "£30M"
- Spell out: "30 million pounds" in text when clearer

### Time

- Use 24-hour with colon: "19:00" not "7pm"
- Include timezone for meetings: "19:00 BST"

## File Naming

### Markdown Files

- Use lowercase with hyphens: `implementation-plan.md`
- Be descriptive: `medical-school-pilot-application.md`
- Avoid dates in filenames (use version control)

### Directories

- Use lowercase with hyphens: `working-groups`
- Plural for collections: `protocols`, `resources`
- Singular for specific items: `pilot-application`

## Accessibility

### Alt Text for Images

If images are added:

```markdown
![Description of image for screen readers](path/to/image.png)
```

### Headings for Navigation

- Use semantic heading structure
- Don't use headings just for formatting
- Heading text should make sense out of context

### Link Text

- Descriptive: "Download application form"
- Not: "Click here"

## Review Checklist

Before submitting, check:

- [ ] Title is clear and descriptive
- [ ] Document has overview/summary
- [ ] Headings are properly nested
- [ ] Links work and use relative paths (internal)
- [ ] Evidence-based claims are cited
- [ ] Plain language, jargon explained
- [ ] Examples provided where helpful
- [ ] Consistent formatting throughout
- [ ] Metadata footer included
- [ ] Spell check passed
- [ ] Read aloud for clarity

## Questions?

For style guide questions: style@projectequilibrium.org

---

**Style Guide Version**: 1.0
**Last Updated**: October 2025
**Next Review**: Annually
