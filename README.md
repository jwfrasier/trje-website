# The Real Jesus Experience: website

A 501(c)(3) nonprofit ministry and podcast. Production-grade single-page website, built as a static Astro project.

## Strategy and visual contract

- `PRODUCT.md`: who this is for, the strategic principles, the anti-references.
- `DESIGN.md`: the visual system. The Reading Room. Warm ivory, warm near-black ink, sacred oxblood red as charged accent. Read it before changing styles.

## Stack

- [Astro](https://astro.build) 4.x, static output, no UI framework.
- Vanilla CSS, OKLCH tokens, fluid `clamp()` type scale.
- Zero client-side JS except a small inline script for nav state and episode-embed fallback.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve dist/ locally
```

## Outstanding items (open questions from the shape brief)

These are tracked in `src/pages/index.astro` as `TODO` comments and as the brief's Open Questions list.

1. Real hero manifesto sentence, confirmed by the hosts.
2. Founding year for the `Est.` small-label in the hero meta. Current placeholder: `2024`.
3. Host names (real), roles, and final 60 to 120 word bios. Currently `Bill` and `Co-Host` with placeholder copy.
4. Latest-episode source: hardcode a YouTube `videoId`, fetch from YouTube Data API, or pull from a CMS. The page currently renders the empty editorial state because `videoId` is blank.
5. Donation processor URL for the `Support TRJE` button.
6. Contact email address (working placeholder: `hello@therealjesusexperience.com`).
7. Confirm the platforms list and order, especially whether Amazon Music, Rumble, Threads, and X are currently active.
8. Real photography for the host portraits. The current placeholder is an honest hatched rectangle with a `Portrait forthcoming` label.
9. Font licenses for `GT Sectra` and `GT America` from Grilli Type. Until the `@font-face` `src` URLs are filled in, the page falls back to `Source Serif 4`, `Karla`, and system stacks.

## File map

```
src/
  pages/
    index.astro         single page; all sections inline
  components/
    Sigil.astro         the recurring liturgical mark (used in hero meta, dividers, platform list, footer)
  styles/
    global.css          design tokens, type scale, all component styles
public/                 static assets (logo, favicons, future photography)
```

## Design rules to keep in mind when editing

- Sacred red appears on no more than ~10% of any screen. If it feels everywhere, it has failed.
- Never `#000` or `#fff`. Tinted neutrals only.
- Red deepens on hover, never lightens.
- No `box-shadow` on resting elements. No `backdrop-filter`. No glassmorphism.
- No em dashes in copy.
- Body copy stays at 65 to 75 characters per line.
