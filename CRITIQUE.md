# UX Critique — 2026-05-10

> Status update: Steven Cooley placeholder removed pending portrait + bio. See TODO.md for reinstatement checklist.

## Summary
- **6** high-impact issues
- **9** medium-impact issues
- **8** low-impact polish items
- **Strongest moments:** the home hero wordmark + tagline lockup (the brand lands in the first paint, no equivocation); the mission prose ("We do not perform certainty. We do not market faith.") — that paragraph is the whole brand in five sentences; the typographic flip from drenched-black hero into ivory mission section (the surface-flip rule is doing real work); the episodes page header rhythm of "5 conversations" / "10 shorts" — counted, considered, magazine-like; the org block on `/about` ("Real Jesus Experience Inc." + EIN + SERVICES NONPROFIT) reads like a credit page in a journal, which is exactly the right register for the donor archetype.

## Walk-throughs

### The new believer (mobile, distracted)
She lands on `/` on a phone between things. The wordmark hits first — the brushed REAL registers, even if she can't articulate why. The tagline "Conversations for the long road of faith" reads in one glance. So far, so good. Then she scrolls and finds two primary buttons stacked: **Listen** and **What we do**. Listen scrolls her down to an embedded YouTube player — the press-play target. This is the right primary act, but on mobile the embed is several screens down (past mission prose, past hosts, past the "Meet the team" CTA). Distracted, she may bounce before reaching it. The hosts strip surfaces Chad and Chilo with real portraits, then Steven Cooley appears with no photo and "Bio forthcoming" — for a brand built on "real people, real testimony," the missing third face on the very first encounter quietly contradicts the promise. By the time she reaches the platforms grid she has a clear path out to Apple/Spotify, which is correct. The support block at the bottom is restrained, not pushy — good for her state of mind. The footer dumps her into a `mailto:` if she wants to write in, with no other contact mechanism — a friction point if she's on a phone without a configured mail client.

### The longtime believer at the wall (desktop, late night)
He arrives carefully, reading. The hero gives him room: the tagline doesn't shout, the meta strip (Est. 2024 / 501(c)(3) / EIN) signals seriousness without grandeur. Scroll: the mission section is the moment the site does its real work. "If anything we make is useful to you, we are glad" is the exact register he needed at 1am — peer voice, not pulpit. He hovers on **the wall** italic and recognizes himself. He clicks "Meet the team" expecting a deeper read on `/about`. The About hero opens with **85% / Eighty-five percent of Christians do not get through the wall** — this is powerful, but it is also the hero-metric pattern that DESIGN.md explicitly forbids ("Don't use the hero-metric template"). For *this* visitor it lands, because the statistic is about him; but it skirts a principle. Below the stat, the "Emotionally Healthy Spirituality" attribution is set in a small label — almost invisible. He wants to know the source; the citation is too quiet. The team block follows and reproduces the same Steven-Cooley-no-photo gap. He returns to `/` and presses play on the YouTube embed. He has been served well, but the missing third host nags.

### The potential donor (desktop, evaluating)
She's vetting. She lands on `/`, scans for legitimacy markers, and finds them: Est. 2024, 501(c)(3), EIN visible in the hero meta strip — strong. She navigates to `/about` and finds the **Real Jesus Experience Inc.** organizational block with EIN, 501(c)(3) classification, and the year established. This is exactly the credibility surface a donor wants — clean, factual, unornamented. She clicks **Support the work** — and it leaves the site to `therealjesusexperience.com/donate`. The off-site jump itself is fine, but two things hurt her trust: (1) there is no indication of *what* the donation supports (studio costs? hosting? salaries?), and (2) the donate URL opens in the same tab with no warning or `target`. For a donor who is mid-evaluation, leaving the site to evaluate the donor flow on a different domain is a confidence break. She also wants to email someone — the only contact is a `mailto:` to `hello@therealjesusexperience.com`. No phone, no contact form, no mailing address (which a 501(c)(3) typically discloses). For a donor doing diligence, this is thin. The third host being absent (no photo, no bio) is a quiet red flag — "who actually runs this?" is the donor's question, and one of three answers is missing.

## Punch list (by impact)

### High

- **Steven Cooley has no photo and no bio**
  - **Where:** `/` hosts strip; `/about` team block.
  - **Problem:** A brand that explicitly promises "real people, real testimony" cannot leave one of three hosts as a "Bio forthcoming" placeholder on launch. Every archetype notices; the donor archetype distrusts.
  - **Suggested fix:** Either ship a real portrait + 2–3 sentence bio for Steven before launch, or temporarily reduce the team block to the two hosts who have assets and acknowledge a third host is joining (with a name + role line). Do not ship the placeholder card.

- **Press play takes too many scrolls on mobile home**
  - **Where:** `/` mobile.
  - **Problem:** The principle is "press play is the primary act," but on a phone the embed is roughly four to five screens down — past mission, past hosts, past the Meet-the-team CTA. The hero **Listen** button anchors there, but a distracted thumb may never use it.
  - **Suggested fix:** Either reorder mobile so the latest episode embed sits directly under the hero, or replace the hero **Listen** CTA with an inline play affordance (poster image + play button) that initiates playback in place. Keep the desktop order if needed; mobile should optimize for time-to-play.

- **Donate link leaves the site silently with no context**
  - **Where:** Nav "Support" CTA, home support section, about support section.
  - **Problem:** The donate URL goes to an off-site donation page with no `target="_blank"`, no off-site indicator, and no on-site explanation of what donations fund. A donor mid-evaluation loses the on-site context.
  - **Suggested fix:** Add one paragraph in the support sections that names what donations cover (studio, hosting, production). Add an off-site icon (↗) to the Support nav item and the Support CTAs so the visitor knows they're leaving. Consider `target="_blank" rel="noopener"` for the donation handoff so the brand site remains open behind it.

- **Multiple section headings styled as display headlines compete with the page's actual H1**
  - **Where:** `/` (hero H1 + four H2s set in `display` / `headline` weight).
  - **Problem:** Visually scanning the home, every section opener reads at near-hero scale, which flattens the hierarchy and makes the page feel like five top-level statements rather than one with sub-statements. The principle "warmth through restraint" is at risk.
  - **Suggested fix:** Keep "Conversations for the long road of faith." as the singular display headline. Step the section openers (mission's working title, "The voices in the studio.", latest episode title, "Help keep the studio open.") down one notch in scale, so the home reads as a single editorial spread, not a stack of posters.

- **Mailto is the only contact path**
  - **Where:** Footer, home contact band, about contact band.
  - **Problem:** Mobile users without a configured mail client get a broken-feeling tap. New believers who don't want to expose a personal address have no alternative. A 501(c)(3) under diligence typically expects more (mailing address, phone, or a form).
  - **Suggested fix:** Keep the mailto as the visible email, but add a tiny contact form (name, email, message) as an alternative path, or at minimum display a mailing address. Make the email itself copyable on click, not only a mailto.

- **The 85% stat on `/about` skirts the "hero-metric template" don't**
  - **Where:** `/about` hero.
  - **Problem:** DESIGN.md explicitly lists "the hero-metric template (big number, small label, supporting stats)" as forbidden. The current `/about` hero is precisely that pattern. It lands emotionally because the number is about the wall — but it visually quotes the SaaS pattern the brand is supposed to refuse.
  - **Suggested fix:** Either drop the giant numeral and let "Eighty-five percent of Christians do not get through the wall." carry as a typeset display headline (the words alone are stronger than the digit), or treat the digit as inset editorial pull-quote weight, not hero-scale, and give the citation room to breathe.

### Medium

- **Steven Cooley's placeholder card uses a different visual treatment than the other two hosts**
  - **Where:** `/` and `/about` team blocks.
  - **Problem:** The empty placeholder reads as "image failed to load," not as "portrait forthcoming." It draws the eye for the wrong reason.
  - **Suggested fix:** If the placeholder must ship, give it a deliberate treatment per DESIGN.md (ink-deep fill, hairline rule, label "Portrait forthcoming" in red), centered, with a single sentence that reads like a credit ("Steven Cooley joins us from [role/city]") rather than "Bio forthcoming."

- **Citation under the 85% stat is too quiet**
  - **Where:** `/about` hero.
  - **Problem:** Attribution to "Emotionally Healthy Spirituality" (Pete Scazzero) is set as small metadata. A serious statistic at hero scale earns a serious citation.
  - **Suggested fix:** Set the source on its own line, at body scale, with author + book title, italicized or in label-set. The credibility lift is real.

- **Home has two CTAs ("Listen" / "What we do") that anchor in-page rather than commit**
  - **Where:** `/` hero actions.
  - **Problem:** Both buttons are jump links. "Listen" should *play*, not scroll-to. "What we do" could be a footer-link or skip-link, not a co-equal primary button.
  - **Suggested fix:** Make **Listen** a real play affordance (open the embed inline, autoplay-on-user-gesture is allowed). Drop "What we do" to a tertiary text link, or rename it "Read the mission" and make it a ghost button.

- **The "Bio forthcoming" copy reads as a TODO checked into production**
  - **Where:** `/` and `/about`, Steven Cooley.
  - **Problem:** Visitor-facing placeholders erode trust. "Forthcoming" is acceptable for a portrait; a bio that says "Forthcoming" is unfinished homework.
  - **Suggested fix:** Write two real sentences. If those sentences are not available, do not render the card.

- **Episodes page "10 shorts" block uses very dense thumbnail grid on mobile**
  - **Where:** `/episodes` mobile, shorts section.
  - **Problem:** The shorts list reads as a wall of red play buttons stacked vertically — visually it loses the editorial calm the rest of the site achieves. The brand consistency dips here.
  - **Suggested fix:** Either group shorts behind a "Show 10 shorts ↓" disclosure on mobile, or collapse to a horizontal scroller. Conversations should dominate the page; shorts should be available, not assertive.

- **Section anchors lack visible focus styles in the screenshots**
  - **Where:** All pages, focus state.
  - **Problem:** Keyboard navigation is a stated requirement. The DESIGN.md focus ring (1.5px cardinal red, 2px offset) needs verification under tab order, especially on the YouTube embed and the support CTA.
  - **Suggested fix:** Manually tab through each page and confirm every interactive element shows the prescribed ring. Add a visible skip-to-content link as the first tab stop.

- **The home recent-episodes list and the episodes page conversations grid present similar content with different visual languages**
  - **Where:** `/` recent block vs `/episodes` conversations grid.
  - **Problem:** Consistency: a visitor returning to the site sees the same content type styled differently and has to re-learn the pattern.
  - **Suggested fix:** Align the recent-episodes card on `/` with the conversation card on `/episodes`. Same aspect, same metadata order, same hover behavior.

- **No transcripts mentioned anywhere**
  - **Where:** Episode pages / `/episodes`.
  - **Problem:** PRODUCT.md commits to "transcripts on episode pages when available" as an accessibility requirement. The site shows YouTube embeds only; no transcript surface exists.
  - **Suggested fix:** Even a "Transcript available on request" link to mailto is a step. Better: a dedicated episode page per conversation that can hold a transcript.

- **The home "Latest episode" embed has no fallback poster while it lazy-loads**
  - **Where:** `/` episode section.
  - **Problem:** On slow connections the iframe area is blank for a beat, the very moment the visitor is deciding whether to press play.
  - **Suggested fix:** Render the YouTube high-quality thumbnail as a poster background behind the iframe (the `episode-fallback` element). Already partially done — verify it's visible during load, not only on iframe failure.

### Low / Polish

- **"What we do" hero ghost button label is generic** — consider "Read the mission" or "Why TRJE" for stronger editorial register.
- **EIN appears as `EIN {SITE.ein}`** in the hero meta strip — verify the value renders correctly in production; in screenshots it's small enough to mistake for a TODO.
- **Footer mailto link styling** — match the in-page contact email styling (large, generous, single-line) on at least one surface. The footer treats it as a small link; the contact band treats it as a display.
- **The platforms grid uses identical card geometry across rows** — DESIGN.md flags "identical card grids of icon + heading + text" as a don't. The platforms band currently reads close to that pattern. Consider listing platforms as a stacked label set (small sigil + name on a single line) per DESIGN.md spec.
- **"Coming soon" platforms** — verify the reduced-opacity + "Coming soon" label per DESIGN.md is in place; in the home screenshot some platforms read at equal weight to active ones.
- **The home hero h1 contains a period (`Conversations for the long road of faith.`)** — consistent with editorial register, good. Verify every display-set headline ends in a period (`/episodes`: "Every recent episode." has one; `/about`'s "Eighty-five percent…" also does — consistent).
- **The brushed REAL** — appears in the wordmark but not anywhere else on the site as a typographic element (e.g. in the mission "**REAL** Jesus Experience" lockup). DESIGN.md's brush-lockup rule suggests it could re-appear inside one display headline somewhere as the brand pulse.
- **`mailto:hello@therealjesusexperience.com` as a giant display headline** — visually striking, but if the mail handler isn't configured on a visitor's device it's a tap-and-nothing. Consider a small "copy" affordance next to it.

## What works
- The drenched-black hero with the wordmark + brushed REAL is the strongest first paint the brand could ask for.
- The mission paragraph copy is the best writing on the site; it earns the visitor's trust in five sentences.
- The surface-flip cadence (dark → ivory → dark → ivory → dark) reads as deliberate publication rhythm, not template variation.
- The hero meta strip (Est. / 501(c)(3) / EIN) signals legitimacy without performing it.
- The episodes page header ("Every recent episode." + "5 conversations" + "10 shorts") is counted, considered, and reads like a journal contents page.
- The /about organizational credit block is exactly the right register for a 501(c)(3) — restraint as credibility.
- No stock photography, no gradients, no worship-band hero — every anti-pattern in PRODUCT.md is genuinely avoided.

## Open question for the team
- **Is Steven Cooley a confirmed third host on day one of public launch, or is the team Chad + Chilo with Steven joining later?** This decision changes the right fix: if Steven is launching with the show, ship his photo + bio before the site goes live. If he's joining in a few weeks, remove the placeholder and add him when assets land. The current state — a visible "Bio forthcoming" card next to two finished hosts — is the worst of both. It silently undercuts the "real people, real testimony" principle on every page where it appears.
