# Devotions: how it works and how to set it up

Devotions are markdown files in `src/content/devotions/`. Chad manages them
from a login-protected panel at **https://therealjesusexperience.com/admin**
(Decap CMS). When he hits **Publish**, the panel commits the file to GitHub,
Vercel rebuilds, and the devotion is live at `/devotions` in about a minute.
No database, no hosting bill, nothing extra to maintain.

---

## One-time setup (Joseph, ~10 minutes)

The admin panel needs to log Chad in through GitHub. That takes a GitHub OAuth
app and two environment variables in Vercel.

### 1. Create the GitHub OAuth app
1. Go to https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**
   (use the account that owns `jwfrasier/trje-website`).
2. Fill in:
   - **Application name:** TRJE Admin
   - **Homepage URL:** `https://therealjesusexperience.com`
   - **Authorization callback URL:** `https://therealjesusexperience.com/api/callback`
3. Click **Register application**, then **Generate a new client secret**.
   Copy the **Client ID** and the **Client secret**.

### 2. Add the env vars in Vercel
Project → **Settings → Environment Variables** (Production):
- `OAUTH_GITHUB_CLIENT_ID` = the Client ID
- `OAUTH_GITHUB_CLIENT_SECRET` = the Client secret

Redeploy once so the functions pick them up.

### 3. Give Chad access
- Chad needs a free GitHub account (github.com/signup). He will never use it
  beyond clicking "Authorize" once.
- Repo → **Settings → Collaborators** → add his GitHub username with **Write** access.
  He accepts the invite email.

### 4. Test
Open `/admin`, click **Login with GitHub**, authorize. You should see the
Devotions list with the sample entry.

### If the domain changes
Update `base_url` in `public/admin/config.yml` and the callback URL in the
GitHub OAuth app. Nothing else references the domain.

---

## Posting a devotion (Chad)

1. Go to **therealjesusexperience.com/admin** and log in with GitHub.
2. Click **Devotions → New Devotion**.
3. Fill in:
   - **Title**
   - **Date** — the date it is for; newest shows first on the site
   - **Scripture** — e.g. `Matthew 11:28–30` (optional)
   - **Summary** — one or two sentences, shown on the list page (optional)
   - **Body** — the devotion itself. Use the toolbar for bold, italics, headings, quotes.
4. Click **Publish → Publish now**. It will be on the site in about a minute.

**To save without publishing:** flip **Draft** on before you click Publish.
It saves but stays hidden from the site. Flip Draft off later to publish it.

**To edit or remove one:** open it from the Devotions list, make the change,
and Publish again. **Delete entry** is in the top bar.

**Images:** use the image button in the Body toolbar. Files land in
`public/devotions/`.

---

## For developers

- Schema: `src/content/config.ts` (`title`, `date`, `scripture?`, `summary?`, `draft`)
- Pages: `src/pages/devotions/index.astro` (list) and `[slug].astro` (entry)
- Styles: `src/styles/devotions.css`
- CMS config: `public/admin/config.yml`
- OAuth: `api/auth.js` → GitHub → `api/callback.js` → postMessage to the CMS popup
- Drafts are excluded at build time via `getPublishedDevotions()` in `src/lib/devotions.ts`.
- Slug format is `YYYY-MM-DD-title`, so URLs are stable and sort naturally.
