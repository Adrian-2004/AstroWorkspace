import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod"


const posts = defineCollection({
    loader:glob({
        pattern: ['**/*.md','**/*.mdx'],
        base: './src/content/posts'
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})
const proyectos = defineCollection({
    loader:glob({
        pattern: ['**/*.md','**/*.mdx'],
        base: './src/content/proyectos'
    }),
    schema: ({ image }) => z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional(),
        imagen: image().optional(),
    })
})

export const collections = {posts,proyectos}
