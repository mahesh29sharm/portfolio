# Design system notes

## Character

Quiet, precise, editorial, product-minded.

The site should feel closer to a well-art-directed technology publication than a conventional designer template. It uses black/white as the permanent layer and restrained gradients as the temporary/project-visual layer.

## Hierarchy

- **Hero:** one large idea, one supporting sentence, two small actions.
- **Section headers:** small numbered metadata, never oversized labels.
- **Career chapters:** large narrative headline + small role/timeline + visual project proof.
- **Project cards:** image first, then title, purpose, tags and evidence.
- **Learning:** one sentence per chapter, visually separated from the project card.

## Gradient rule

Gradients are not selected ad hoc. Every placeholder uses one of six named recipes in `tokens.css`:

- `aurora` — cool blue / violet / mint
- `ember` — warm cream / orange / red
- `violet` — dark technical / AI
- `mint` — pale green / systems
- `mono` — neutral graphite
- `sunset` — soft lilac / blush / orange

When real project thumbnails arrive, keep these gradients for small supporting moments, section transitions or case-study art so they remain part of the identity.

## Typography

The prototype deliberately uses the system/Inter stack. Do not add a fashionable display font merely to make the portfolio feel designed. The personality should come from scale, spacing, copy and imagery.

If a custom typeface is introduced later, use one family maximum unless there is a strong editorial reason.

## Motion

Motion should explain state or reward attention, not advertise that the site has JavaScript.

Recommended later:
- subtle project-image scale/position on hover
- restrained section reveals
- line/metadata transitions
- no cursor gimmicks by default
- always respect `prefers-reduced-motion`

## V3 personality layer

The visual system is intentionally not a corporate SaaS system. Keep the rigorous grid, typography and spacing, but allow a small amount of authored personality:

- One marker-like underline in the hero and subtle underlines on chapter names.
- Small editorial annotations in Georgia italic; never more than one or two per viewport.
- A restrained accent palette: lime, coral, powder blue and dusty pink used as punctuation, not as surfaces everywhere.
- Hero artwork behaves like an editorial collage: one primary thought card, one process card, and two small stickers.
- "Play" is the public label for experiments; the URL anchor stays `#lab` to avoid needless structural churn.
- Keep whitespace generous. Desktop page padding is intentionally larger than typical product sites.
- Personality should come from wording, placement and micro-details — not gradients, floating blobs or animations everywhere.
