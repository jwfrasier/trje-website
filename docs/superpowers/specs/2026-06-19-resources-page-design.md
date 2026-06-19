# Resources Page — Design Spec

**Date:** 2026-06-19
**Route:** `/resources`
**Status:** Approved, ready to build

## Purpose

A resources page for believers who are new to their faith or have been walking
it for some time. A visitor lands, decides where their faith level is at, and
browses categories of historic Christian faith topics. Each topic leads with
Scripture, then offers vetted resources from other organizations. The curation
standard is tried-and-true, historic Christianity (non-progressive). Chad audits
the list later; this build seeds it with a real starter draft, not an empty shell.

## Interaction model

- **Level chooser** in the hero: three levels, **New / Growing / Seasoned**, plus
  **Show all** (the default on load). Each has a one-line "who this is for" so a
  visitor can self-locate honestly.
- Choosing a level **filters the resource lists** in every category to entries
  tagged for that level. Client-side, instant, no reload.
- **Scripture is never filtered.** It is foundational and shown for every level.
- Default state (and JS-off / reduced-motion / SEO crawl) shows everything. The
  filter is progressive enhancement, guarded the same way as the other pages
  (`.has-anim` pattern). Nothing is hidden without an explicit choice.
- A sticky in-page category nav (jump links) lets visitors skip to a topic.

## Categories (starter set, Chad may prune/extend)

1. Apologetics
2. Theology & Doctrine
3. Academic & Scholarship
4. Church History
5. Discipleship & Christian Living
6. Suffering, Doubt & the Wall
7. Culture & Politics
8. Marriage, Family & Sexuality

## Per-category layout (the constant breakdown)

Two sides, always in this order:

1. **Scripture first** — books/passages tied to the topic, each linking to
   **bible.org / NET Bible**. Always visible, never filtered.
2. **Resources** — curated links from other organizations. Each shows: name, who
   it is from, a one-line description, a **Free / Paid** badge, and its level
   tag(s). The level filter acts on these.

## Data model

Single typed file: `src/data/resources.ts`. Content lives here so Chad can audit
and edit without touching layout. The page renders entirely from this file (single
source of truth).

```ts
type Level = "new" | "growing" | "seasoned";
type Cost = "free" | "paid";

interface ScriptureLink { ref: string; url: string; } // bible.org / NET Bible
interface Resource {
  name: string;
  from: string;            // org or author
  blurb: string;           // one line
  url: string;
  cost: Cost;              // shown as Free / Paid badge
  levels: Level[];         // a resource can serve multiple levels
}
interface Category {
  id: string;              // slug for jump-link anchor
  title: string;
  blurb: string;
  scripture: ScriptureLink[];
  resources: Resource[];
}
```

A header comment explains how to add/edit entries and states the non-progressive,
historic-Christianity curation standard.

## Starter content direction (vetted, historic/orthodox, non-progressive)

Representative examples (Chad audits/expands):
- **Apologetics:** Reasonable Faith, Stand to Reason, Cold-Case Christianity.
- **Theology & Doctrine:** The Gospel Coalition, Ligonier, Got Questions.
- **Academic & Scholarship:** BibleProject (free), Logos (paid), Zondervan Academic (paid).
- **Church History:** Christian History Institute, Ligonier history series.
- **Discipleship & Christian Living:** Desiring God, RightNow Media (paid), Gospel in Life.
- **Suffering, Doubt & the Wall:** Emotionally Healthy Spirituality (already cited on the site), Joni & Friends.
- **Culture & Politics:** Colson Center, The Gospel Coalition.
- **Marriage, Family & Sexuality:** Focus on the Family, CCEF, The Meaning of Marriage (paid).

Each entry carries a Free/Paid badge and level tags. Scripture links point at
bible.org / NET Bible passages tied to the topic.

## Build surface

- `src/data/resources.ts` — the audited content (new).
- `src/pages/resources.astro` — the page, reads `resources.ts`, renders hero +
  level chooser + sticky category nav + the 8 category sections, alternating
  dark/ivory per the brand surface-flip.
- `src/styles/resources.css` + `src/styles/anim-resources.css` — page layout and
  scroll/entrance + filter states (tokens only, mirrors existing page pairing).
- `src/layouts/Layout.astro` + `src/components/Nav.astro` — add `"resources"` to
  the `activeRoute` union and a **Resources** nav link; add Resources to the footer.
- Filtering script behind the `.has-anim` / progressive-enhancement guard.

## Defaults (assumed, confirmed with user)

- Level chooser defaults to **Show all**.
- Free/Paid is informational only (no e-commerce).
- Scripture and resource links open in a new tab (`rel="noopener"`).

## Verification

1. `npm run build` succeeds; `/resources` generated.
2. Dev server: hero level chooser switches New/Growing/Seasoned/All and the
   resource lists filter accordingly; Scripture stays visible across all levels.
3. With JS disabled, all resources are visible (no hidden content).
4. Category jump-links scroll to each section; nav shows Resources active.
5. Mobile (~390px): two-side category layout stacks cleanly; chooser wraps.
6. Reduced motion: content fully visible, no animation.
