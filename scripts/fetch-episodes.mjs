// Pulls TRJE's recent videos from the public YouTube RSS feed.
// No API key needed. Output: src/data/episodes.json.
// Re-run on a schedule (cron, GitHub Action) to refresh before each build.

import { writeFile, mkdir, access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HANDLE = process.env.TRJE_HANDLE || "therealjesusexperience";
const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "..", "src", "data", "episodes.json");

function pick(re, str) {
  const m = str.match(re);
  return m ? m[1] : null;
}

function decodeXml(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

async function getChannelId(handle) {
  const url = `https://www.youtube.com/@${handle}`;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 trje-website-build/1.0" },
  });
  if (!res.ok) throw new Error(`Channel page fetch failed: ${res.status}`);
  const html = await res.text();
  const id =
    pick(/"channelId":"(UC[A-Za-z0-9_-]{22})"/, html) ||
    pick(/<meta itemprop="identifier" content="(UC[A-Za-z0-9_-]{22})"/, html) ||
    pick(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[A-Za-z0-9_-]{22})"/, html);
  if (!id) throw new Error(`Could not extract channelId from @${handle}`);
  return id;
}

async function fetchRss(channelId) {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 trje-website-build/1.0" },
  });
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);
  return res.text();
}

function parseRss(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, body]) => {
    const id = pick(/<yt:videoId>([^<]+)<\/yt:videoId>/, body);
    const title = decodeXml(pick(/<title>([\s\S]*?)<\/title>/, body)?.trim());
    const published = pick(/<published>([^<]+)<\/published>/, body);
    const updated = pick(/<updated>([^<]+)<\/updated>/, body);
    const description = decodeXml(pick(/<media:description>([\s\S]*?)<\/media:description>/, body)?.trim());
    const thumbnail = pick(/<media:thumbnail[^>]*url="([^"]+)"/, body);
    const author = decodeXml(pick(/<name>([^<]+)<\/name>/, body));
    return { id, title, published, updated, description, thumbnail, author };
  });
  return entries.filter((e) => e.id && e.title);
}

async function main() {
  console.log(`Resolving channel ID for @${HANDLE}`);
  const channelId = await getChannelId(HANDLE);
  console.log(`channelId=${channelId}`);

  const xml = await fetchRss(channelId);
  const episodes = parseRss(xml);
  console.log(`Parsed ${episodes.length} entries from RSS`);

  const data = {
    handle: HANDLE,
    channelId,
    channelUrl: `https://www.youtube.com/channel/${channelId}`,
    fetchedAt: new Date().toISOString(),
    episodes,
  };

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(data, null, 2));
  console.log(`Wrote ${outPath}`);
}

async function existingFile(path) {
  try {
    await access(path, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

main().catch(async (err) => {
  console.error(`[fetch-episodes] Soft failure: ${err?.message || err}`);
  const has = await existingFile(outPath);
  if (has) {
    console.error(
      `[fetch-episodes] Existing ${outPath} preserved; exiting 0 so CI continues without overwriting a working dataset.`
    );
    process.exit(0);
  }
  console.error(
    `[fetch-episodes] No prior episodes.json on disk and fetch failed. Failing loudly so CI surfaces the problem.`
  );
  process.exit(1);
});
