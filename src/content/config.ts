import { defineCollection, z } from "astro:content";

// Devotions are authored through the CMS at /admin (Decap), which writes one
// markdown file per entry into src/content/devotions/. Drafts never build.
const devotions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    scripture: z.string().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devotions };
