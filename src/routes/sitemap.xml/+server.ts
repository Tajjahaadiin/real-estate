import type { RequestHandler } from './$types';
import { properties } from '$lib/data/properties';
import { blogPosts } from '$lib/data/blogPosts';

const BASE = 'https://estate-services.example.com';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const staticPaths = ['/', '/properties', '/about', '/blog', '/contact', '/privacy', '/terms'];
  const propertyPaths = properties.map((p) => `/properties/${p.slug}`);
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);

  const urls = [...staticPaths, ...propertyPaths, ...blogPaths]
    .map((path) => `  <url><loc>${BASE}${path}</loc><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.7'}</priority></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
