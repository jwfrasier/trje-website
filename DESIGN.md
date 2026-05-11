<!-- Updated after the user surfaced the live brand identity (black surface + condensed sans wordmark with a bright red brush-script "REAL"). Re-run /impeccable document once there's more code to capture the actual tokens and components. -->
---
name: The Real Jesus Experience
description: Ministry and podcast site. Black-and-red committed brand identity, with warm ivory used as relief for long-form reading. Condensed sans display + humanist sans body + the brush-script REAL as the signature mark.
colors:
  ink-surface: "oklch(14% 0.012 30)"
  ink: "oklch(18% 0.01 30)"
  ink-deep: "oklch(8% 0.01 30)"
  surface: "oklch(96% 0.01 60)"
  surface-deep: "oklch(92% 0.012 60)"
  paper: "oklch(98% 0.008 70)"
  bone: "oklch(94% 0.012 70)"
  ink-on-dark: "oklch(96% 0.012 70)"
  red: "oklch(58% 0.22 25)"
  red-deep: "oklch(48% 0.20 25)"
  red-bright: "oklch(64% 0.23 25)"
  red-text: "oklch(50% 0.20 25)"
  red-text-on-dark: "oklch(64% 0.21 25)"
  rule: "oklch(82% 0.01 40)"
  rule-on-dark: "oklch(32% 0.012 30)"
---

# Design System: The Real Jesus Experience

## 1. Overview

**Creative North Star: "The Studio at Night"**

TRJE's brand identity is already a committed black-and-red statement: a tall narrow wordmark in white set on drenched black, with the word *REAL* slashed across it in a hand-drawn red brush. The site honors that identity. The reading room exists, but it sits inside a darker frame.

Composition is a deliberate flip between drenched black surfaces (the hero, the hosts strip, the platforms band, the contact) and warm ivory passages (the mission narrative, the episode block, the support pitch). The flip is the rhythm of the page. Dark sections carry brand and confidence; ivory sections carry reading and dignity. The bright cardinal red is the brand-carrying color across both: it appears on every section, more aggressive on dark and more rare on ivory.

The system explicitly rejects the entire visual vocabulary of contemporary Christian web design: no worship-band hero, no gradient overlays, no sermon-tile grids, no sunlit-hands stock photography, no script fonts on cream. It also rejects the trap of generic editorial-typographic restraint: the brand is louder than that, and the site should look like a podcast studio at night, not a Stripe-adjacent reading room.

References: Plough Quarterly (faith treated as serious culture), The Paris Review (typographic confidence and air), On Being (contemplative audio property), but filtered through a record-label-meets-studio identity: brand-confident, photography-forward when assets land, red as voice.

**Key Characteristics:**
- Two-surface system: drenched black and warm ivory, flipping section by section
- Condensed sans display in the brand voice, paired with humanist sans body
- One bright cardinal red used as the brand-carrying color across both surfaces
- The brush-script *REAL* is the signature mark; it earns its own treatment, never decoration
- Real photography of real people; honest placeholders until then
- Motion is functional only; nothing performs at the visitor

## 2. Colors: The Black, the Ivory, and the Brush

A palette split across two surfaces. Dark sections carry the brand. Ivory sections carry the reading. A single bright cardinal red ties them together.

### Primary
- **Cardinal Brush Red** (`oklch(58% 0.22 25)`): The single brand-carrying color. The hue of the brush-script *REAL* in the wordmark. Used at: the *REAL* element wherever the brand mark appears, primary CTAs, section markers, hover underlines, the focus ring on dark surfaces, episode play affordances, and link emphasis. On ivory it stays ≤15% of any given screen; on drenched-dark surfaces it appears with more presence. Never used softer or muddier than this; the brand has committed to a cardinal red, not an oxblood.
- **Cardinal Red Deep** (`oklch(48% 0.20 25)`): Pressed and active states. Red never lightens on interaction; it deepens.
- **Cardinal Red Bright** (`oklch(64% 0.23 25)`): Edge cases where contrast against very dark surfaces needs slightly more luminance.
- **Cardinal Red Text** (`oklch(50% 0.20 25)`): Small-text variant used by `.label-red` and small-text hover states on ivory, to pass WCAG AA (≥4.5:1) contrast. Identical hue and chroma to Cardinal Brush Red; reduced lightness for contrast. Measured 5.93:1 on `--color-surface`.
- **Cardinal Red Text on Dark** (`oklch(64% 0.21 25)`): The same small-text variant resolved for drenched-dark surfaces, where the lighter-L direction is needed. Identical hue, near-identical chroma; raised lightness. Measured 5.36:1 on `--color-ink-surface`. Use via the `.surface-dark .label-red` / per-section overrides — never directly for fills or large text, which keep Cardinal Brush Red.

### Neutral, Dark Surface
- **Ink Surface** (`oklch(14% 0.012 30)`): The drenched-dark surface color of the hero, the hosts strip, the platforms band, the contact section, the footer. Warm near-black; never `#000`. The studio at night.
- **Ink Deep** (`oklch(8% 0.01 30)`): Used sparingly for inset blocks on dark surfaces (e.g. the YouTube embed frame, the deepest layer of contrast).
- **Ink on Dark** (`oklch(96% 0.012 70)`): The text color on drenched-dark surfaces. Warm off-white, never pure.

### Neutral, Light Surface
- **Surface** (`oklch(96% 0.01 60)`): The warm-ivory body surface of mission, episode, and support sections.
- **Surface Deep** (`oklch(92% 0.012 60)`): Secondary ivory, used sparingly.
- **Paper** (`oklch(98% 0.008 70)`): The brightest near-white; reserved for inset highlights inside ivory sections.
- **Ink** (`oklch(18% 0.01 30)`): Body text and headlines on ivory.

### Rules
- **Rule** (`oklch(82% 0.01 40)`): Hairline dividers on ivory.
- **Rule on Dark** (`oklch(32% 0.012 30)`): Hairline dividers on drenched-dark surfaces.

### Named Rules
**The Surface-Flip Rule.** The page alternates between drenched black and warm ivory. The flip is the rhythm. Never serve two adjacent dark sections without an ivory interlude, and never let a dark section bleed seamlessly into the next without a visible boundary; the hairline rule, the contrast itself, is enough.

**The One Red Rule, Calibrated.** Red appears on every section, but the proportion shifts with surface. On ivory: ≤15% of the screen. On drenched-dark: red has room to breathe more; the surface itself absorbs it. The rarity is the point on ivory; the brand presence is the point on dark.

**The Hover-Deepens Rule.** Red never lightens on interaction. Hover and active states move red toward greater depth, not brightness. The accent gets more committed under attention, never less.

**The No-Pure-Neutral Rule.** `#000000` and `#ffffff` are forbidden. Every neutral is tinted (chroma 0.01–0.015). The dark surface is warm; the light surface is warm; the palette reads as one family.

## 3. Typography

**Display Font:** condensed sans, in the spirit of the wordmark. The brand identity is set in a tall narrow uppercase-feeling sans with high stroke contrast. Suggested family lane: *Druk Condensed*, *Bebas Neue*, *Oswald*, *Anton*, or *Six Caps*. Use one. The display is set in a tight measure and large size; weight stays regular or medium, not heavy.

**Brush Mark:** the word *REAL* is set in the brand's hand-drawn brush script, sourced from the wordmark image, NOT typeset. Wherever the literal word *Real* appears in a hero or display headline, it is replaced by the brush-script asset, scaled to align with the surrounding cap-height. This is the signature move.

**Body Font:** humanist sans, comfortable for long reading. Suggested family lane: *GT America*, *Karla*, *Söhne*, or *Atkinson Hyperlegible*. Regular and medium weights; comfortable sizes; generous leading.

**Label Font:** the same humanist sans set in small caps with positive letter-spacing, or a mono lockup for tracking-heavy metadata.

**Character:** The display speaks like the wordmark, narrow and confident. The body speaks like a person, not a system. The brush mark is the brand's pulse.

### Hierarchy
- **Display** (condensed sans, regular, fluid 3rem–5.25rem, leading 0.95, letter-spacing -0.01em): Hero and section-opener headlines. Tight stack.
- **Headline** (condensed sans, regular, 2rem–3rem, leading 1, letter-spacing -0.005em): Page and episode titles.
- **Title** (body sans, medium, 1.25rem–1.5rem, leading 1.25): Subsections, episode card titles, host names.
- **Body** (body sans, regular, 1rem–1.125rem, leading 1.6, max line length 65–75ch): Article and description copy.
- **Label** (body sans or mono, medium, 0.75rem, letter-spacing 0.12em, uppercase): Metadata, platform names, episode numbers, dates.

### Named Rules
**The Two-Voice Rule.** Display is condensed sans, working type is humanist sans. Do not blur the line: no condensed display on small running copy, no humanist sans for hero headlines.

**The Brush-Lockup Rule.** Whenever the brand mark appears in a hero context, the brush-script *REAL* sits inside the typeset display: *The* (typeset) + *REAL* (brushed) + *Jesus Experience* (typeset). The brush element is the brand pulse; do not approximate it with a styled font.

**The Measured-Line Rule.** Body copy is capped at 65–75ch. Long lines are not "more text on screen"; they are unreadable.

## 4. Elevation

The system is flat by default. Depth comes from the surface flip between drenched dark and warm ivory, from generous whitespace, and from typographic hierarchy. Shadows are absent at rest.

A single restrained focus ring is permitted on interactive elements (1.5px solid cardinal red offset 2px, no glow). Hover never lifts; it changes color or weight.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` on cards, surfaces, or containers at rest. If a panel needs to read distinct, change its surface to drenched-dark or to paper.

**The No-Glassmorphism Rule.** Forbidden outright. No `backdrop-filter`, no translucent panels, no blurs.

## 5. Components

### Wordmark
The brand asset is `public/brand/trje-wordmark.png` (or a future SVG version). It is the official lockup: typeset condensed sans + the brush-script *REAL*. Use it at:
- Top-left of the nav (height ~36–44px depending on viewport).
- The hero, as the primary brand statement, where it can run wider.
- The footer at small size as a sign-off.

Do not recreate it in typeset. Do not letterspace it. Do not put it on a background other than drenched black or pure ivory; if a non-black-non-ivory section needs the mark, that section is wrong, not the mark.

### Buttons
- **Primary (on ivory):** filled cardinal red, ivory text, condensed sans label, generous padding (14px × 28–32px), small radius (2px) or 0. Hover deepens to red-deep. Focus: cardinal red ring offset 3px.
- **Primary (on drenched-dark):** filled cardinal red, ink-on-dark text. Same shape. Hover deepens. Focus: ink-on-dark ring offset 3px.
- **Secondary (ghost on ivory):** transparent fill, 1px ink border, ink text. Hover: ink fills, ivory text.
- **Secondary (ghost on drenched-dark):** transparent fill, 1px rule-on-dark border, ink-on-dark text. Hover: cardinal red border, cardinal red text.
- **Tertiary (text link):** ink (or ink-on-dark) text. Hover: cardinal red, with a 1px cardinal red underline at 0.3em offset.

### Episode / Listen Affordance (signature)
The primary press-play surface is the YouTube embed itself. Title and metadata sit above the embed in condensed sans; the embed lives at full width inside a deep-ink frame. On embed failure, fall back to a high-contrast cardinal-red `Watch on YouTube ↗` overlay.

### Navigation
Drenched-dark bar. Wordmark left. Label-set links right, in ink-on-dark. Active route gets a cardinal red dot to the left of the label. Hover underlines in cardinal red. Mobile: a labeled `Menu` toggles a full-bleed drenched-dark sheet.

### Hosts Block (drenched dark)
Black surface. Host names in condensed sans, white. Role in label-set red. Bio in body sans, ink-on-dark. Portrait placeholders use a deeper ink-deep fill with a single hairline rule-on-dark border and a label-set "Portrait forthcoming" line in red.

### Platforms Grid (drenched dark)
Black surface. Each platform link is a row of: a small cardinal-red sigil + platform name in body sans, ink-on-dark. Hover: name underlines in cardinal red. Pending platforms render in ink-on-dark at reduced opacity with a "Coming soon" label.

### Article / Long-form (ivory)
Body copy capped at 65–75ch in body sans on warm ivory. Pull quotes set in condensed sans, with a hairline cardinal red rule above. Italic emphasis is allowed in cardinal red for brand-load words like *the wall*.

## 6. Do's and Don'ts

### Do:
- **Do** alternate drenched-dark and warm ivory sections. The flip is the rhythm.
- **Do** use the official wordmark PNG (`public/brand/trje-wordmark.png`) at the nav and hero. Do not re-typeset the brand.
- **Do** set every display headline in a condensed sans (Druk / Oswald / Bebas Neue) that echoes the wordmark.
- **Do** use cardinal red (`oklch(58% 0.22 25)`) as the single brand-carrying color across both surfaces. Brighter than oxblood, never softer.
- **Do** keep red presence to ≤15% on ivory sections; allow more breathing room on drenched-dark.
- **Do** deepen red on hover, never lighten.
- **Do** cap body copy at 65–75ch.
- **Do** use real photography of real people once assets land. Honest placeholders until then.
- **Do** honor `prefers-reduced-motion`. Motion is functional and opt-out by default.

### Don't:
- **Don't** use `#000` or `#fff`. Tinted neutrals only.
- **Don't** typeset the word *REAL* in a display font; it is the brush mark, sourced from the wordmark.
- **Don't** use serif display fonts for headlines. The brand is condensed sans, not editorial-magazine serif. (Body sans is fine.)
- **Don't** use a softer / muddier / oxblood red. The brand red is cardinal-bright.
- **Don't** put the wordmark on any surface other than drenched black or warm ivory.
- **Don't** use `box-shadow` on resting elements. No glassmorphism. No backdrop-filter.
- **Don't** use sermon-series tile grids, "Plan Your Visit" CTAs, worship-band hero photography, or any other megachurch-template move. This is a brand site for a podcast ministry, not a church website.
- **Don't** use sunlit hands, blurred prayer, watercolor crosses, or script fonts paired with sans on cream. The stock-warmth Christian aesthetic is forbidden.
- **Don't** use gradient text, gradient overlays, or gradient anything decorative.
- **Don't** use the hero-metric template (big number, small label, supporting stats).
- **Don't** use identical card grids of icon + heading + text.
- **Don't** use side-stripe borders (colored `border-left` thicker than 1px).
- **Don't** use modals as a first thought.
- **Don't** use em dashes in copy.
