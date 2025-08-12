// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md, mdx}', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      tags: z.array(z.string()),
      draft: z.boolean(),
    }),
});


// Export a single `collections` object to register your collection(s)
export const collections = { blog };