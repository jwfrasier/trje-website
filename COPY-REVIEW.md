# Copy review

Surgical pass over visible copy on `/`, `/about`, `/episodes`, plus `Nav` and `Footer`. No structural changes, no CSS touched. No em dashes or exclamation points found in copy. No marketing verbs ("discover", "unlock", "transform") present. The voice is largely already on-key; the slips below were the ones worth fixing without consulting the client.

## Edits made

### `src/pages/index.astro`

**Platforms section headline.**
- Before: `TRJE is on every platform you already use.`
- After: `Wherever you already listen.`
- Why: "TRJE is on every platform" reads as marketing positioning (we, the brand, have a distribution footprint). The replacement turns the line toward the listener and is half the length. The label "Listen anywhere" already sits above it, so the headline can be a sentence fragment.

**Support CTA button.**
- Before: `Support TRJE`
- After: `Support the work`
- Why: The headline already says "Help keep the studio open"; the button should advance the meaning, not repeat the brand name. "The work" is what TRJE itself calls the podcast ("Support the work" is already the section label).

**Contact section label.**
- Before: `Get in touch`
- After: `Write to us`
- Why: "Get in touch" is the most generic small-business CTA in English. "Write to us" matches the prose underneath ("We read everything") and signals that an email gets read by a person.

**Latest-episode empty state.**
- Before: `We are between episodes. In the meantime, the back catalog lives on YouTube, and the next conversation is being recorded soon.`
- After: `We are between episodes. The back catalog lives on YouTube, and another conversation is on the way.`
- Why: "In the meantime" is a filler phrase. "The next conversation is being recorded soon" overpromises (the hosts may not be in the studio that week) and uses passive voice. "Another conversation is on the way" is shorter, truer, and unhurried.

### `src/pages/about.astro`

**Contact section label.**
- Before: `Contact TRJE`
- After: `Write to us`
- Why: Same reasoning as homepage; also keeps the two contact sections in voice with each other.

**Contact section prose.**
- Before: `Be part of the conversation. Questions about faith, the work, the wall. Prayer requests, stories you want to share. We read everything.`
- After: `Questions about faith, the work, the wall. Prayer requests, stories you want to share. We read everything.`
- Why: "Be part of the conversation" is the line a brand-strategist would write. The rest of the paragraph already invites the visitor better than that sentence does, by being specific.

**Org section CTA button.**
- Before: `Support TRJE`
- After: `Support the work`
- Why: Same logic as the homepage button. Keeps the two donate CTAs consistent.

## Flagged but not changed

These are lines I would push back on if I could sit with the client for ten minutes.

1. **Hero subhead (index.astro).** `A podcast for new and seasoned believers who have hit the wall. Honest, unhurried, recorded in the studio.` The second sentence is excellent. The first sentence carries "for new and seasoned believers" which is positioning language; it tells visitors who *should* be here rather than letting them recognize themselves. A tighter alternative: `For new and seasoned believers who have hit the wall. Honest, unhurried, recorded in the studio.` But the segment-naming may be intentional for the hosts; do not change without asking.

2. **About hero h1.** `Eighty-five percent of Christians do not get through the wall.` This is doctrine and lands hard. Keep. The reason it is on the flag list rather than the kept-strong list is the page then uses the same statistic again in the pullquote (`It has rightly been said that perhaps 85 percent of Christians do not get through the wall.`) The repetition is structurally intentional (the hero is the claim, the pullquote is the attribution), but a reader will feel the echo. Worth confirming the hosts want both.

3. **Chad's bio inconsistency.** On `/` (line 30 of `index.astro`): `Host and receiver of the TRJE mission: leading believers, new and seasoned, to greater spiritual growth by putting the God-given testimony of believers on display.` On `/about` (line 11 of `about.astro`): a longer, more theologically explicit version with `not through anything he would do or say, but by putting the God-given testimony of believers on display to encourage others and give glory to God`. The two bios are saying the same thing at different lengths. This is voice-controlled content the hosts will want to own; flag for them to choose one wording and propagate, or knowingly keep the short version for the homepage card and the long version for the about page.

4. **Chilo's bio inconsistency.** Same pattern. Homepage: `Brings wisdom and encouragement, keeping the ministry focused on the mission.` About page: `provides invaluable wisdom and encouragement, keeping the ministry focused on the mission and submitting all things to the Father.` "Invaluable" is a small adjective-inflation; "submitting all things to the Father" is theologically load-bearing and the hosts will want to keep it. Same flag: client picks the canonical wording.

5. **Mission paragraph 4 (index.astro).** `If anything we make is useful to you, we are glad. You can listen on every platform we know how to reach. You can write to us. And, if you want to, you can help keep the studio open.` This is some of the strongest copy on the site. The only tiny hesitation: `every platform we know how to reach` is charming-self-deprecating; the hosts may or may not want that self-effacement. Flag, don't touch.

6. **Episodes hero subhead.** `Full conversations first; shorts below.` Clear and on-brand. The only flag is the semicolon, which is correct but reads slightly formal. A comma + "with" would soften it, but the semicolon honors the editorial register the rest of the site is in. Keep.

7. **Episodes section heading `{n} conversations`.** Functional and fine. If the client ever wants warmer language, `{n} in the archive` or `{n} so far` would also work. Not worth changing without permission.

8. **404 page.** Not reviewed per the brief.

## Strongest copy

- **About hero stat sentence.** `Eighty-five percent of Christians do not get through the wall.` Stated as fact, no softening, no exhortation. Lands.
- **Mission section paragraph 3.** `We do not perform certainty. We do not market faith. We sit with real questions, in a real studio, and we record what comes up. Some episodes are arguments. Some are confessions. Some are quiet.` This is the brand voice in its purest form. Three negations followed by three specifics. Keep verbatim.
- **Support section headline.** `Help keep the studio open.` Concrete, modest, action-driven, no donor-speak. Keep verbatim.
- **About `What we mean` definition.** `The real Jesus experience is the realized freedom from the guilt and condemnation of sin. It is the removing of a veil that opens up a whole new and beautiful life with Christ.` Theological precision, no hedging. Keep verbatim.
- **About team heading `The voices in the studio.`** Functional and concrete. Keep verbatim.
- **Episodes back-catalog note.** `YouTube's public feed surfaces only the most recent uploads. Every conversation TRJE has ever recorded is on the channel.` Explains a real constraint plainly. Keep verbatim.
