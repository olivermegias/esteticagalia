
import { defineCollection, z } from 'astro:content';

const serviciosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categoria: z.enum(['facial', 'mirada', 'corporal', 'depilacion']),
    descripcion: z.string(),
    duracion: z.string().optional(),
    precio: z.string().optional(),
    imagen: z.string().optional(),
    orden: z.number().default(0),
  }),
});

export const collections = {
  'servicios': serviciosCollection,
};