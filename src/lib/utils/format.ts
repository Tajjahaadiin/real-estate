import { propertyStatusLabels, propertyTypeLabels } from '$lib/data/properties';
import type { Property } from '$lib/types';

/** Format a USD price — for-sale shows full price; for-rent shows /mo */
export function formatPrice(p: Property): string {
  if (p.kind === 'rent') {
    return `$${p.price.toLocaleString('en-US')}/mo`;
  }
  if (p.price >= 1_000_000) {
    return `$${(p.price / 1_000_000).toFixed(p.price >= 10_000_000 ? 1 : 2)}M`;
  }
  return `$${p.price.toLocaleString('en-US')}`;
}

export function formatPriceFull(p: Property): string {
  const base = `$${p.price.toLocaleString('en-US')}`;
  return p.kind === 'rent' ? `${base}/mo` : base;
}

export function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export function formatDate(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  return new Date(iso).toLocaleDateString('en-US', opts ?? { year: 'numeric', month: 'long', day: 'numeric' });
}

export function statusLabel(p: Property): string {
  return propertyStatusLabels[p.status];
}

export function typeLabel(p: Property): string {
  return propertyTypeLabels[p.type];
}

/** Convert a plain string into a URL-safe slug */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Build a full <img> URL with sensible width + auto format */
export function img(url: string, w = 800): string {
  if (!url.includes('?')) return `${url}?q=80&w=${w}&auto=format&fit=crop`;
  return url;
}
