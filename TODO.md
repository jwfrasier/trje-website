# TRJE Launch Blockers

Every placeholder still in the codebase. Resolve each before flipping DNS to production. Grouped so a single contributor can sweep one category at a time.

## Content

### Team portraits
- [x] Derek Prins's portrait: using his Houston Northwest Church staff photo (`public/team/derek.webp`) until Chad sends his own
- [ ] Receive Steven Cooley's portrait (place at `public/team/steven.webp`)
- [ ] Set Steven's `photo` in the `HOSTS` array (`src/pages/index.astro`) and `TEAM` array (`src/pages/about.astro`); until then he renders the "Portrait forthcoming" placeholder

- **Spotify URL.** Empty string; renders the "Coming soon" pending state.
  - `src/pages/index.astro:48`
- **Apple Podcasts URL.** Empty string; pending state.
  - `src/pages/index.astro:49`
- **Amazon Music URL.** Empty string; pending state.
  - `src/pages/index.astro:50`

## Configuration

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

## Devotions admin

- **GitHub OAuth for /admin.** Done (env vars set in Vercel). Chad still needs a GitHub account added as a repo collaborator with Write access.
- **Domain still on Squarespace.** `therealjesusexperience.com` resolves to Squarespace; the Vercel site is at `trje-website.vercel.app`. When DNS flips: set `base_url` in `public/admin/config.yml` back to the real domain and change the GitHub OAuth app callback URL to `https://therealjesusexperience.com/api/callback`.
- **Sample devotion.** `src/content/devotions/2026-08-21-come-to-me.md` is placeholder copy. Chad should replace or delete it from `/admin` before launch.
