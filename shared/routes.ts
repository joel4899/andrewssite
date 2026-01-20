import { z } from 'zod';
import { tours, places } from './schema';

export const api = {
  tours: {
    list: {
      method: 'GET' as const,
      path: '/api/tours',
      responses: {
        200: z.array(z.custom<typeof tours.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/tours/:id',
      responses: {
        200: z.custom<typeof tours.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  places: {
    list: {
      method: 'GET' as const,
      path: '/api/places',
      responses: {
        200: z.array(z.custom<typeof places.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
