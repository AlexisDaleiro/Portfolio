import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const copy = z.object({
  title: z.string(),
  subtitle: z.string(),
  problem: z.string(),
  solution: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    category: z.enum(['web', 'ecommerce', 'app']),
    tags: z.object({ es: z.array(z.string()), en: z.array(z.string()) }),
    repo: z.url(),
    demo: z.url().optional(),
    image: z.string(),
    es: copy,
    en: copy,
  }),
});

export const collections = { projects };
