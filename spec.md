# LexTrânsito Elite

## Current State
New project — no existing frontend code.

## Requested Changes (Diff)

### Add
- Full landing page replicating https://v0-lextransitoelite.vercel.app
- Navigation bar with logo, links and WhatsApp CTA button
- Hero section: dark navy background (#0D1B2A), gold accents (#C6A84A), headline + subtext + two CTA buttons
- Problem section: list of infractions and consequences with gold icon highlights
- Solution section: "Estratégia Jurídica Especializada" with 4 feature cards
- How it works section: 4 numbered steps
- Authority section: "Multas de alto valor exigem defesa técnica"
- Final CTA section: large WhatsApp button
- Footer with links
- Floating WhatsApp button (mobile-friendly)
- Shield watermark / subtle background detail in hero

### Modify
- None

### Remove
- None

## Implementation Plan
1. Generate shield/logo image asset
2. Build single-page React component with all sections
3. Apply OKLCH/Tailwind tokens matching the navy + gold + white palette
4. Wire all WhatsApp links to `https://wa.me/5500000000000`
5. Ensure mobile responsiveness and floating CTA button

## UX Notes
- Color palette: deep navy (#0D1B2A) background, gold (#C6A84A) accents, white text
- Typography: elegant serif-style headings, clean sans-serif body
- Minimalist premium aesthetic with thin gold dividers
- Floating WhatsApp button fixed bottom-right on all screen sizes
- All external links open in new tab
