import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    category: z.enum(['Produktivitas', 'Bisnis', 'Teknologi', 'Kesehatan', 'Marketing']),
    image: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};
