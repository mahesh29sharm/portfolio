# Mahesh — Design Engineer Portfolio

A minimal React/Vite portfolio built as a **career narrative through shipped work**, not a generic case-study grid.

## Start locally

```bash
npm install
npm run dev
```

Homepage: `/`

Sample case study: `/work/trace`

## Project structure

```text
src/
├── app/
│   └── App.tsx                         # Tiny route switcher
├── pages/
│   ├── HomePage.tsx                    # Homepage section order
│   └── case-studies/
│       └── TraceCaseStudy.tsx          # Sample case study to duplicate later
├── components/
│   ├── case-study/
│   │   ├── CaseStudySection.tsx        # Numbered editorial case-study section
│   │   └── CaseStudyVisual.tsx         # Temporary image placeholder
│   ├── layout/
│   │   ├── Container.tsx
│   │   ├── SectionHeader.tsx
│   │   └── SiteHeader.tsx
│   └── portfolio/
│       ├── Chapter.tsx                 # Articled / Pratilipi / Lucio / builds
│       ├── GradientArtwork.tsx         # Homepage project placeholder
│       ├── ProjectCard.tsx
│       └── Timeline.tsx                # Compact interactive progression tabs
├── content/
│   └── portfolio.ts                    # HOMEPAGE CONTENT LIVES HERE
├── styles/
│   ├── tokens.css                      # Colors, spacing, gradient system
│   └── globals.css                     # Layout + component styles
├── types/
│   └── portfolio.ts
└── main.tsx
```

## Where to edit things

### Homepage copy, metrics and links
Edit `src/content/portfolio.ts`.

Pratilipi and Lucio intentionally have **one consolidated project card each**. Their role progression is shown in the timeline tabs above the card, so the visitor has one future case-study destination instead of multiple fragmented links.

### Case-study content
The sample is `src/pages/case-studies/TraceCaseStudy.tsx`.

When another case study is ready:
1. Duplicate that page.
2. Replace the story and visual placeholders.
3. Add its path in `src/app/App.tsx`.
4. Add the matching `href` in `src/content/portfolio.ts`.

Suggested URLs:
- `/work/articled`
- `/work/pratilipi`
- `/work/lucio`
- `/work/trace`
- `/work/hitam`

### Visual system
Edit `src/styles/tokens.css` for global theme decisions. The project gradients are one visual family rather than unrelated placeholders.

## Current content strategy

The homepage deliberately has fewer destinations:
- no Notes pages
- no Lab links
- one consolidated Pratilipi story
- one consolidated Lucio story
- only finished case studies should become clickable

The Lab is evidence of curiosity and judgement, not another backlog of pages to maintain.

## Replacing placeholder images

`CaseStudyVisual.tsx` and `GradientArtwork.tsx` are temporary.

Put real assets under:

```text
public/images/<project-name>/
```

Then replace a placeholder with a normal `<img>` or evolve the placeholder component to accept an `src` prop.

## Deployment

`vercel.json` includes the history fallback needed for routes such as `/work/trace` when deploying to Vercel.

If you keep your existing custom domain on Framer for now, point/redirect that domain to the new deployment once this version is ready. Existing shared links can be preserved with redirects where necessary.

## Before publishing

Replace:
- `hello@example.com`
- LinkedIn URL
- Resume URL
- `Independent build 03`
- placeholder images
- any metrics/copy you want to verify

Do not add a link to a project until its case study is worth opening.


## Current design direction — V3

The homepage keeps the minimal editorial hierarchy from V2, but adds a restrained personality layer: wider page margins, marker-like accents, playful annotations, a collage-style hero and a renamed Play section. All personality details are CSS-only and can be removed or restyled without touching content data.
