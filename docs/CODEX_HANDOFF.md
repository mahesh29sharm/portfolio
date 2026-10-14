# Codex handoff

## What this project is

A portfolio for Mahesh positioned as a **Design Engineer**: ambiguous problem → user understanding → product model → design/prototype/code → launch → learning.

The homepage is chronological but should feel editorial, not like a résumé timeline.

## Preserve these decisions

1. Homepage content stays in `src/content/portfolio.ts`.
2. Visual tokens stay in `src/styles/tokens.css`.
3. Pratilipi and Lucio each get **one consolidated case-study destination**.
4. Role progression belongs in the chapter timeline tabs, not separate case-study cards.
5. Lab items remain non-clickable unless Mahesh explicitly promotes one into a real project.
6. Do not reintroduce a generic “Notes” blog just to fill navigation.
7. Do not replace the editorial layout with a bento/grid SaaS template.
8. Avoid excessive pills, glass, glowing borders, giant floating navs or generic AI visuals.
9. Mobile is a designed layout, not scaled desktop.
10. Never invent impact numbers or imply direct causation between design work and a funding round.

## Case studies

`src/pages/case-studies/TraceCaseStudy.tsx` is the reference implementation.

For new studies, reuse:
- `CaseStudySection`
- `CaseStudyVisual`
- the same section rhythm and metadata language

But do **not** force every project into identical content. Preserve the visual grammar while allowing the story to change.

## Before a major edit

Read:
- `README.md`
- `docs/CONTENT_MAP.md`
- `docs/CASE_STUDY_TEMPLATE.md`
- `docs/DESIGN_SYSTEM.md`
- `src/content/portfolio.ts`

Then state which files you are changing and why.

## V3 guardrail: do not make this a SaaS landing page

The current direction mixes OpenAI/Apple-like restraint with a personal editorial layer. Preserve the asymmetry, annotations, slightly rotated notes, serif italic microcopy, large lateral whitespace and small accent marks. Do not replace this with a bento grid, glass cards, neon glows, dashboard motifs or generic "AI portfolio" effects.
