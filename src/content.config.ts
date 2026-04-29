import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const serviciosCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    categoria: z.enum(['facial', 'mirada', 'corporal', 'depilacion']),
    descripcion: z.string(),
    duracion: z.string(),
    precio: z.string(),
    imagen: z.array(z.string()).optional(),
    orden: z.number().default(0),
    bono: z.number().optional(),
  }),
});

const faqCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    pregunta: z.string(),
    categoria: z.enum(['general', 'tratamientos', 'citas', 'cuidados', 'pagos']),
    orden: z.number().default(0),
  }),
});

export const collections = {
  servicios: serviciosCollection,
  faq: faqCollection,
};