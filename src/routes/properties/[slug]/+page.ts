import { error } from '@sveltejs/kit';
import { properties } from '$lib/data/properties';
import type { EntryGenerator } from './$types';

// Provide prerenderable slug list (so adapter-static knows which pages to emit)
export const entries: EntryGenerator = () => {
  return properties.map((p) => ({ slug: p.slug }));
};

export const prerender = true;

export function load({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) throw error(404, 'Property not found');
  const related = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.location.city === property.location.city))
    .slice(0, 3);
  return { property, related };
}
