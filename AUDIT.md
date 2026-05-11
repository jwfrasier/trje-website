# Technical Audit — 2026-05-10

Scope: `/`, `/about`, `/episodes` (plus `Layout.astro`, `Nav.astro`, `Footer.astro`, `global.css`). Static build verified via `npm run build`. Read-only audit; no source files modified.

**C1 (red-label contrast) RESOLVED 2026-05-10:** new `--color-red-text` (oklch(50% 0.20 25), 5.93:1 on ivory) and `--color-red-text-on-dark` (oklch(64% 0.21 25), 5.36:1 on ink-surface) tokens, AA-passing on both surfaces, applied to `.label-red` and small-text hover states. `--color-red` unchanged.

**C2 (nav landmark) RESOLVED 2026-05-10:** `<nav aria-label="Primary">` now wraps the toggle button and `#nav-menu` inside `header.nav`. `.nav-inner > nav { display: contents }` preserves the existing flex layout. The wordmark home-link remains outside the `<nav>`.

**C3 (mobile nav focus management) RESOLVED 2026-05-10:** sheet now has a vanilla-JS focus trap (Tab wraps last→first, Shift+Tab wraps first→last), Escape closes it and restores focus to the toggle, and `#nav-menu` is `inert` + `aria-hidden="true"` whenever closed at `≤720px`. Mode detected via `matchMedia('(max-width: 720px)')` with a `change` listener that closes the sheet on desktop crossover. Desktop nav is never inert. Verified via Puppeteer (23/23 assertions).

**C4 (GSAP-failure fallback) RESOLVED 2026-05-10:** inline head script now unconditionally removes `.has-anim` after 3500 ms, so hero/h1/etc fall back to CSS resting state (opacity:1) if GSAP fails to load or run.

## Summary
- **4 critical** — ALL RESOLVED (C1 by sibling agent; C2, C3, C4 in this pass)
- **8 moderate** (should fix before launch)
- **7 minor** (post-launch cleanup)

---

## Critical

### C1. Cardinal red on label text fails WCAG AA contrast on both surfaces
**Where:** `src/styles/global.css:204` (`.label-red { color: var(--color-red); }`) — applied to every section's small uppercase label across `index.astro`, `about.astro`, `episodes.astro` (e.g. "What we do", "The team", "Latest episode", "Recent episodes", "Listen anywhere", "Support the work", "Get in touch", "Meet the team", "Page not found", "The archive", "Full episodes", "Shorts", "Older episodes").
**What:** Computed contrast ratios using the declared OKLCH values:
- `--color-red oklch(58% 0.22 25)` on `--color-ink-surface oklch(14% 0.012 30)` → **4.16:1**
- `--color-red oklch(58% 0.22 25)` on `--color-surface oklch(96% 0.01 60)` → **4.26:1**

Labels render at `0.75rem` (12px) — WCAG **normal** text, requiring **4.5:1**. Both pairs fail. The brand's "one red rule" puts this text on every section, so the failure is sitewide, not isolated.
**Fix:** Either (a) reserve `--color-red` for backgrounds/large display only and add a `--color-red-text` set to `oklch(50% 0.22 25)` or `--color-red-deep` for label text (54% deepens enough to clear 4.5:1 on both surfaces), or (b) raise the label font size to ≥14pt bold / 18pt to qualify as "large text" (3:1 threshold). Option (a) preserves the visual rhythm.
**Impact:** Low-vision users on every page. Also a documented brand goal in PRODUCT.md ("WCAG AA contrast minimum across all text") and DESIGN.md (red is "the brand-carrying color across both surfaces") — the current token literally cannot serve both functions.

### C2. Header has no `<nav>` landmark
**Where:** `src/components/Nav.astro:11–42`
**What:** The site nav lives inside `<header class="nav">` with a bare `<ul class="nav-links">`. There is no `<nav>` element and no `role="navigation"`. Screen-reader users get no "navigation" landmark to jump to; the nav links are read as part of the banner. The mobile menu sheet (a full-bleed `position: fixed` overlay) inherits the same problem.
**Fix:** Wrap the `<ul>` (and the toggle button) in `<nav aria-label="Primary">`. Cost: one element, no styling change required because `.nav-links` selector still matches.
**Impact:** Screen-reader users; AT keyboard users navigating by landmark.

### C3. Mobile nav sheet has no focus management, no Escape key, and links stay focusable while closed
**Where:** `src/layouts/Layout.astro:71–110` (toggle script), `src/styles/global.css:1567–1599` (closed state via `transform: translateY(-100%)`).
**What:**
- When `[data-open="false"]`, the sheet is translated off-screen but the `<a>` children remain in the tab order. Keyboard users tabbing past the toggle on mobile jump into invisible links.
- No `inert`, no `aria-hidden`, no `visibility: hidden` is applied to the closed sheet.
- Opening the sheet does not move focus into it.
- No Escape-key handler closes the sheet.
- Body scroll is not locked while the sheet is open.
**Fix:** When toggling: set `inert` (or `aria-hidden="true"` + `visibility: hidden`) on the closed sheet, move focus to the first link on open, return focus to the toggle on close, listen for `Escape`. Add `overflow: hidden` to `<body>` while open.
**Impact:** Keyboard and screen-reader users on mobile/narrow viewports (≤720px breakpoint).

### C4. Hero animation can leave critical content hidden if GSAP fails to execute
**Where:** `src/pages/index.astro:386–429`, `src/pages/episodes.astro:174–201`, `src/styles/global.css:313–318`, `src/styles/anim-episodes.css:5–17`, `src/styles/anim-home-extras.css:4–8`
**What:** Initial state for animated elements is `opacity: 0` under `.has-anim`. `.has-anim` is added in a head inline script, gated only on `prefers-reduced-motion`. There is no JS-failure / GSAP-load-failure fallback: if the module script 404s, throws before the timeline runs, or is blocked (some corporate networks block `unpkg`-style chunks), the hero tagline, prose, meta, actions on `/`, and the hero label/h1/sub/meta plus all episode card images on `/episodes` stay invisible. Same risk on `/about` for the pullquote.
**Fix:** Add a defensive timeout (`setTimeout(() => document.documentElement.classList.remove('has-anim'), 3000)`) that strips `.has-anim` after a ceiling, so CSS resting state is the final state. Alternatively, only flag specific decorative elements rather than the H1 itself.
**Impact:** Anyone on flaky networks, with strict CSP, or with script blockers — they get a blank hero with only the wordmark visible.

---

## Moderate

### M1. `<section>` elements on `/episodes` lack accessible names
**Where:** `src/pages/episodes.astro:42, 67, 117, 161`
**What:** `.ep-hero`, `.ep-archive`, `.ep-shorts`, `.ep-catalog` have no `aria-labelledby` or `aria-label`. (`index.astro` and `about.astro` consistently use `aria-labelledby` — `/episodes` is the outlier.) An unnamed `<section>` is not exposed as a landmark in most screen readers, but the inconsistency means the page has no document outline.
**Fix:** Add `id` + `aria-labelledby` pairs matching the existing pattern (e.g. `aria-labelledby="ep-hero-label"` on the `.label.label-red` "The archive").

### M2. About page count-up replaces visible "85" with "0", breaks for no-JS readers
**Where:** `src/pages/about.astro:41` (HTML renders `<span class="about-stat-num">85</span>`) and lines 209–210 (`statNum.textContent = "0";`).
**What:** With JS enabled and motion allowed, the stat number is rewritten to "0" before the IntersectionObserver fires. If GSAP fails to start the tween (see C4), the visible stat is stuck on "0". The H1 still says "Eighty-five percent…" so the meaning isn't lost, but the giant typographic number — the page's signature element — reads wrong. The number is correctly `aria-hidden="true"`, so screen-reader users are unaffected.
**Fix:** Only zero out the number after confirming ScrollTrigger has registered and the trigger is in the viewport, or skip the count-up entirely if it's already past the trigger point on load.

### M3. ScrollTrigger ships on every page even where it isn't strictly required
**Where:** `dist/_astro/hoisted.*.js` all import `ScrollTrigger.CiEuWA-R.js` (114.85 kB raw / 45.47 kB gz).
**What:** Each page bundles ScrollTrigger:
- `/` uses it (recent-episodes stagger).
- `/about` uses it (count-up + pullquote).
- `/episodes` uses it (ep-card grid stagger).

So none is strictly unnecessary, but the ratio is poor: each page pays 45 kB gzipped JS for one or two scroll triggers. GSAP core alone is sufficient if the staggers were rewritten with `IntersectionObserver`. For a mostly-static editorial site, this is the single largest JS expense.
**Fix:** Replace ScrollTrigger with a 30-line `IntersectionObserver` helper. Saves ~45 kB gzipped on every page, drops the GSAP+ScrollTrigger bundle to GSAP core (~25 kB gz) or eliminates GSAP entirely (CSS transitions handle the fades).

### M4. Google Fonts is render-blocking and uses `display=swap` correctly but no `font-display` for self-hosted faces
**Where:** `src/layouts/Layout.astro:44–49`; `src/styles/global.css:5–21`.
**What:** The `<link rel="stylesheet" href="…fonts.googleapis.com…">` is render-blocking and adds ~80 ms+ to first paint depending on RTT. `preconnect` is set (good). The `@font-face` for Druk Condensed and GT America are `local()`-only with no URL — they silently do nothing for visitors without those fonts installed (which is ~100% of public visitors). Site ships as Oswald/Karla in practice.
**Fix:** (a) Self-host the two Google fonts as woff2 with `font-display: swap` and drop the cross-origin stylesheet. (b) Either ship the licensed Druk/GT America woff2 or remove the dead `@font-face` blocks to cut noise.

### M5. `mix-blend-mode: lighten` on the wordmark assumes a dark background it can't guarantee
**Where:** `src/styles/global.css:254–258` (`.wordmark-img`), `:341–347` (`.hero-wordmark`).
**What:** The wordmark PNG has a black background that's removed visually via `mix-blend-mode: lighten`. If the nav becomes sticky and overlaps an ivory section, the wordmark inherits the ivory background and the black bleed reappears. Same risk on any future light-surface section that contains the wordmark.
**Fix:** Ship the wordmark as transparent-background PNG or SVG and drop `mix-blend-mode`. Lower-effort: confirm the nav remains on `--color-ink-surface` everywhere (currently it does, but the design system permits nav variants).

### M6. Wordmark PNG is loaded twice on the home page at very different sizes with the same source
**Where:** `src/components/Nav.astro:14–22` (~36–40 px tall) and `src/pages/index.astro:78–85` (clamp 280–720 px wide).
**What:** Both `<img>` tags point to `public/brand/trje-wordmark.png` (28.3 kB). The browser caches it after the first request, but the nav request and the hero request are made in parallel against a 1500×288 PNG. At 36 px tall, the nav serves ~5× more pixels than it displays. The hero `fetchpriority="high"` is on the nav copy (`Nav.astro:21`), not the hero copy.
**Fix:** Ship the wordmark as an SVG (the wordmark is line art + a brush — SVG-friendly) and drop the resolution mismatch entirely. If staying with PNG, move `fetchpriority="high"` to the hero copy and add a smaller PNG for the nav with a `<picture>` srcset.

### M7. Inline `style="…"` attributes on multiple pages bypass the design token system
**Where:** `src/pages/index.astro:97, 166, 212, 370`; `src/pages/episodes.astro:147`; `src/pages/about.astro:176`.
**What:** Examples: `style="max-width: 36rem; color: var(--color-ink-on-dark);"`, `style="color: var(--color-ink-on-dark); border-color: var(--color-rule-on-dark); margin-top: var(--space-3); justify-self: start;"`. Tokens are referenced, so the values are correct, but inline styles can't be overridden by media queries and dilute the CSS authoring story. The `episode-shownotes` element on the hosts block is styled inline to override the ivory defaults.
**Fix:** Add modifier classes (e.g. `.episode-shownotes.on-dark`) or scoped styles. Not urgent, but the `adapt` agent will hit these.

### M8. `scroll-padding-top: 5rem` is hard-coded but the sticky nav height is fluid
**Where:** `src/styles/global.css:101`.
**What:** The sticky `.nav` uses `padding-block: var(--space-3)` (12 px) with a wordmark image of `clamp(28px, 4.4vw, 40px)` — total nav height varies roughly 52–64 px. The 5rem (80 px) scroll-padding works fine on desktop but is generous on small screens. Conversely, anchor jumps to `#contact` from `/about` won't undershoot. Minor, but worth flagging since multiple breakpoints are in play.

---

## Minor

### m1. Mixed responsive breakpoints
**Where:** `src/styles/global.css` — 520, 600, 640, 700, 720, 760, 900, 1024, 1080, 1280.
**What:** Ten distinct breakpoints. The `adapt` agent is reportedly reconciling this; flagging for record only.

### m2. Smooth scroll is global
**Where:** `src/styles/global.css:100`.
**What:** `html { scroll-behavior: smooth; }` applies to every scroll, including `window.scrollTo` from scripts. Reduced-motion users have it overridden to `auto !important` (line 1612), so the a11y story is fine, but the global apply makes deep-link jumps feel slow on long pages.

### m3. `.dot` markup is inconsistent
**Where:** `src/pages/index.astro:105, 107` use `<span class="dot" aria-hidden="true"></span>`; `Footer.astro:11, 13` use `<span class="dot" aria-hidden="true">·</span>`; `about.astro:84` uses the latter form. The empty form is styled as a 4×4 red circle (`hero-meta .dot`); the textual form is the U+00B7 middle dot. Two visually distinct elements share one class name.
**Fix:** Rename one (`.dot-bullet` vs `.dot-mark` or `.meta-dot`).

### m4. `referrerpolicy` is on the YouTube iframe but no `sandbox`
**Where:** `src/pages/index.astro:229–232`.
**What:** The embed is `youtube-nocookie.com` (good, privacy-respecting per DESIGN.md). No `sandbox` attribute. For this content (trusted source) it's optional, but adding `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"` is conservative.

### m5. The `<meta name="theme-color" content="#1c1410">` uses hex
**Where:** `src/layouts/Layout.astro:35`.
**What:** DESIGN.md forbids `#000`/`#fff` but `#1c1410` is fine in spirit. Could be derived from `--color-ink-surface` for consistency. Cosmetic.

### m6. `episode-frame` fallback timer is 4000 ms
**Where:** `src/layouts/Layout.astro:99–109`.
**What:** Four seconds is generous; a fast-failing network will still show the iframe area as black for 4 s before the "Watch on YouTube" fallback appears. Consider 2000–2500 ms.

### m7. The label-red on `<em class="term">` is set in display font at 1.15em
**Where:** `src/styles/global.css:396–403` and `:1334–1341`.
**What:** `.mission-prose em.term` and `.about-define-prose em.term` switch font-family to display (condensed sans) inside body prose. This breaks the "Two-Voice Rule" in DESIGN.md ("no condensed display on small running copy"). Visually it works as a brand-load callout, but the DESIGN.md rule is explicit.

---

## Measurements

### Bundle sizes (production build, gzipped)

| File | Raw | Gzipped |
|---|---:|---:|
| `dist/index.html` | 17,391 B | 4,757 B |
| `dist/about/index.html` | 10,658 B | 3,497 B |
| `dist/episodes/index.html` | 17,583 B | 4,014 B |
| `dist/_astro/hoisted.*.js` (home) | 1,222 B | 604 B |
| `dist/_astro/hoisted.*.js` (about) | 891 B | 483 B |
| `dist/_astro/hoisted.*.js` (episodes) | 947 B | 492 B |
| `dist/_astro/ScrollTrigger.*.js` (shared, ships on all 3 pages) | 114,852 B | **45,284 B** |
| `dist/_astro/about.*.css` (shared bundle, all pages) | 31,335 B | 5,334 B |

Per-page first-load JS: **~45.9 kB gz** (ScrollTrigger + page hoisted). CSS: **~5.3 kB gz**. HTML: **3.5–4.8 kB gz**. Total first-load weight excluding Google Fonts and YouTube iframe: **~55 kB gz per page**. ScrollTrigger accounts for **~82% of the JS payload**.

### Runtime metrics (Puppeteer, headless, localhost served from `dist/`, viewport 1440×900)

| Page | DOMContentLoaded | Load | First Contentful Paint | Total network bytes |
|---|---:|---:|---:|---:|
| `/` | 280 ms | 309 ms | 292 ms | 3.4 MB |
| `/about` | 151 ms | 164 ms | 180 ms | 1.9 MB |
| `/episodes` | 94 ms | 166 ms | 124 ms | 1.9 MB |

Caveats: localhost has no network latency. The home page's 3.4 MB is dominated by the YouTube iframe pulling in YT player scripts (third-party). The about and episodes pages clock ~1.8 MB in script — that's the bundled fonts + GSAP. Real-world FCP on a fast connection will be in the 800–1500 ms range, dominated by the Google Fonts stylesheet (M4).

### Image weights
- `public/brand/trje-wordmark.png` — 28.3 kB, 1500×288 (loaded twice on home, see M6)
- `public/team/chad.webp` — 50.0 kB, displayed at ~1:1 host portrait
- `public/team/chilo.webp` — 45.5 kB
- YouTube thumbnails — external (`i.ytimg.com`), hqdefault 480×360 each, all carry `loading="lazy"` except the first 4 cards on `/episodes` which are eager (`episodes.astro:88`). Reasonable.

---

## Passes (what's already correct)

- `prefers-reduced-motion` is honored uniformly: the inline head script in `Layout.astro:50–60` gates `.has-anim` on `matchMedia`, and all three page scripts check it before any tween. The CSS `@media (prefers-reduced-motion: reduce)` block at `global.css:1610` also defangs animations/transitions globally.
- `will-change` is set during animation and explicitly cleared `onComplete` for every animated element on all three pages (index 420, 455; about 226, 251; episodes 195, 219).
- No `console.*`, no debug code, no `TODO` left in shipped pages.
- YouTube embed uses `youtube-nocookie.com` per DESIGN.md.
- iframe has `title`, `loading="lazy"`, `allowfullscreen`, `referrerpolicy`.
- Skip link (`Layout.astro:63`) targets `<main id="main">` correctly and uses `:focus-visible` to reveal.
- Heading hierarchy: each page has exactly one `<h1>`, and `<h2>`/`<h3>` levels are not skipped.
- All decorative images and SVGs (recent-thumb, ep-card-thumb, the play-arrow `<svg>`, the dot spans, the section-marker pseudo-elements) are correctly `alt=""` or `aria-hidden="true"`. Host portraits have descriptive alt text.
- `aria-current="page"` is set correctly on the nav link matching the active route (verified in `Nav.astro:36–38`).
- `aria-expanded` and `aria-controls` are wired correctly on the mobile nav toggle, and the toggle script updates `aria-expanded` on click.
- The host portrait `aria-hidden="true"` decorative variant uses the right pattern (the "Portrait forthcoming" label sits inside an unnamed container).
- Fluid typography uses `clamp()` throughout (display, headline, title, body, stat, hero-wordmark, contact-email) — text reflow is genuinely responsive.
- Grids do reflow at every documented breakpoint (verified `.ep-grid`, `.recent-list`, `.hosts-inner`, `.about-team-grid`, `.platforms-grid`).
- No `box-shadow` on resting elements, no `backdrop-filter`, no glassmorphism — DESIGN.md "flat-by-default" honored.
- No forms exist; nothing to validate.
- HTML is well-formed at a glance; no stray tags or malformed attributes in dist output.
- OG/canonical/description metadata is complete on every page including 404.
- Canonical URLs and OG URLs are absolute and consistent.
- Footer is a proper `<footer>` (contentinfo landmark).
