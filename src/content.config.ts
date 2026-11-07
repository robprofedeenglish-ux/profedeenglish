import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada artículo es un archivo .md en src/content/articulos/.
// El nombre del archivo es la URL: entiendo-ingles-pero-no-lo-hablo.md
// se publica en /articulos/entiendo-ingles-pero-no-lo-hablo
const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    // Lo que sale en Google debajo del título (unos 150 caracteres).
    description: z.string(),
    // Dos o tres frases que responden la búsqueda directamente.
    shortAnswer: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // bloqueo | examenes | apps-y-clases | pronunciacion
    category: z.enum(['bloqueo', 'examenes', 'apps-y-clases', 'pronunciacion']),
    // info = artículo de ayuda, compra = alguien comparando opciones, examen = EOI/Aptis
    intent: z.enum(['info', 'compra', 'examen']).default('info'),
    // ID del vídeo de YouTube (lo que va después de v= o de /shorts/)
    youtubeId: z.string().optional(),
    videoTitle: z.string().optional(),
    // En páginas de pronunciación el vídeo va antes que la respuesta corta
    videoFirst: z.boolean().default(false),
    // Páginas que comparan con otras empresas: muestra el aviso legal de comparativa
    comparison: z.boolean().default(false),
    exercise: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articulos };
