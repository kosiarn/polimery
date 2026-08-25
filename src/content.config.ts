import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
			body: z.string().optional()
		}),
});

const personnel = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ base: './src/content/personnel', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string().optional(),
			name_surname: z.string(),
			orc_id: z.string().optional(),
			researcher_id: z.string().optional(),
			google_scholar: z.string().optional(),
			position: z.string(),
			scholarships: z.array(z.object({
				year: z.coerce.number(),
				department: z.string(),
				place: z.string(),
				position: z.string()
			})).optional(),
			education: z.array(z.object({
				when: z.string(),
				description: z.string()
			})).optional(),
			avatar_link: z.string().optional(),
			link: z.array(z.object({
				label: z.string(),
				link: z.string()
			})).optional(),
			note: z.string().optional(),
			role: z.string().optional(),
			group: z.string().optional()
		}),
});
export const collections = { blog, personnel };
