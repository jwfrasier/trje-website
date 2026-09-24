# TRJE Launch Blockers

## Reveal night (Beyond the Wall '26, Oct 2)

The homepage is a countdown teaser while `comingSoon: true` in `src/lib/site.ts`. Every other page and `/admin` stay reachable. To reveal:

1. Open https://github.com/jwfrasier/trje-website/edit/main/src/lib/site.ts
2. Change `comingSoon: true` to `comingSoon: false`, commit to `main`.
3. Vercel deploys in about a minute. Hard-refresh https://therealjesusexperience.com and confirm the full homepage (hosts, latest episode) shows.

Undo is the same edit back to `true`.

Every placeholder still in the codebase. Resolve each before flipping DNS to production. Grouped so a single contributor can sweep one category at a time.

## Content

### Team portraits
- [x] Derek Prins's portrait: using his Houston Northwest Church staff photo (`public/team/derek.webp`) until Chad sends his own
- [ ] Receive Steven Cooley's portrait (place at `public/team/steven.webp`)
- [ ] Set Steven's `photo` in the `HOSTS` array (`src/pages/index.astro`) and `TEAM` array (`src/pages/about.astro`); until then he renders the "Portrait forthcoming" placeholder

- [x] Social and podcast links: set from Chad's list (2026-09-24). Amazon Music dropped; LinkedIn added. X link (`@JesusXperience`) returned 404 to an automated check: confirm it opens.

## Configuration

- [x] **Contact email.** `hello@therealjesusexperience.com` is an alias to Chad's Outlook inbox (confirmed by Chad, 2026-09-24).
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
- [x] **Domain moved to Vercel (2026-09-24).** Squarespace DNS now has `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`; Outlook email records untouched. Admin login keeps using the vercel.app OAuth popup (`base_url` in `public/admin/config.yml`), so the GitHub OAuth app needs no change.
- **Sample devotion.** `src/content/devotions/2026-08-21-come-to-me.md` is placeholder copy. Chad should replace or delete it from `/admin` before launch.
