import { z } from 'zod';

export const PortSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/).min(3),
  name: z.string().min(3),
  city: z.string().min(2),
  region: z.string().min(2),
  country: z.string().min(2),
  iso_country: z.string().length(2).transform(v => v.toUpperCase()),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  dock_notes: z.string().optional().default(''),
  seasonal_notes: z.string().optional().default(''),
  passenger_volume: z.number().int().optional(),
  volume_year: z.number().int().optional(),
  primary_type: z.enum(['homeport', 'port-of-call', 'mixed']).optional(),
  itinerary_role: z.enum(['turnaround', 'transit', 'overnight']).optional(),
  tags: z.array(z.string()).optional().default([]),
  sources: z.array(z.string()).min(1),
  neighbors: z.array(z.string()).optional().default([]),  // added here for enrichment
});

export type Port = z.infer<typeof PortSchema>;
