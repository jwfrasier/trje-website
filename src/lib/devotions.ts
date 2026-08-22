import { getCollection, type CollectionEntry } from "astro:content";

export type Devotion = CollectionEntry<"devotions">;

/** Published devotions, newest first. Drafts are excluded everywhere. */
export async function getPublishedDevotions(): Promise<Devotion[]> {
  const all = await getCollection("devotions", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const fmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(d: Date): string {
  return fmt.format(d);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
