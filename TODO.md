# TRJE Launch Blockers

Every placeholder still in the codebase. Resolve each before flipping DNS to production. Grouped so a single contributor can sweep one category at a time.

## Content

### Steven Cooley reinstatement
- [ ] Receive Steven Cooley's portrait photo (place at `public/team/steven.webp`)
- [ ] Receive Steven Cooley's bio (60–120 words, voice-matched to Chad's and Chilo's bios)
- [ ] Re-add Steven to the `HOSTS` array in `src/pages/index.astro` with `photo: "/team/steven.webp"` and the real bio
- [ ] Re-add Steven to the `TEAM` array in `src/pages/about.astro` with full bio
- [ ] Verify the team grid renders cleanly at 3 hosts (currently constrained to 2 — revert any 2-column overrides if applied)

- **Spotify URL.** Empty string; renders the "Coming soon" pending state.
  - `src/pages/index.astro:48`
- **Apple Podcasts URL.** Empty string; pending state.
  - `src/pages/index.astro:49`
- **Amazon Music URL.** Empty string; pending state.
  - `src/pages/index.astro:50`

## Configuration

- **Donate URL.** Currently points at `https://www.therealjesusexperience.com/donate`, which is a path on this same site that does not exist. Real donate flow needs an external processor (Stripe, Donorbox, Givebutter, etc.) or a real route built here.
  - `src/lib/site.ts:5` (canonical value)
  - Consumed in: `src/components/Nav.astro:39`, `src/components/Footer.astro:15`, `src/pages/index.astro:357`, `src/pages/about.astro:165`
- **Contact email.** `hello@therealjesusexperience.com` is plausible but unverified. Confirm the mailbox routes to a human before launch.
  - `src/lib/site.ts:4`
- **Established year.** Hard-coded as `2024`. Verify this is the correct nonprofit incorporation year, not the channel start year, and not the year content first dropped.
  - `src/lib/site.ts:2`
  - Surfaced visually at `src/pages/about.astro:162` (dd) and via `SITE.established` in the homepage hero meta.
- **Plausible analytics.** Stub is commented out in `src/layouts/Layout.astro` head. Create a Plausible site for `therealjesusexperience.com` and uncomment the one-liner. No code change otherwise.

## Assets

- **OG card.** Shipped as `public/brand/og-card.svg` (1200x630). LinkedIn and some legacy crawlers prefer PNG; rasterize to `og-card.png` (via `sharp` or a one-off design pass) before launch. Then update the default in `src/layouts/Layout.astro`.
- **Favicon.ico.** Skipped intentionally; modern browsers honor `favicon.svg`. If IE11 / very old Safari support is required, generate `.ico` via `sharp` or an external converter.
- **Apple touch icon raster.** Shipped as SVG (`apple-touch-icon.svg`). Modern iOS accepts SVG, but pre-iOS 15 devices will fall back to the favicon. Add `apple-touch-icon.png` (180x180) if older device support matters.
- **Druk Condensed and GT America licenses.** Currently only `local()` fallbacks. Until the license is in place, Oswald and Karla load from Google Fonts as substitutes.
  - `src/styles/global.css:11` (GT America TODO)
  - `src/styles/global.css:20` (Druk Condensed TODO)
- **Wordmark SVG.** Currently `public/brand/trje-wordmark.png` (1500x288 raster). An SVG version would render crisper at every viewport.
