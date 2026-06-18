import { error } from '@sveltejs/kit';
import { blogPosts } from '$lib/data/blogPosts';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => blogPosts.map((p) => ({ slug: p.slug }));
export const prerender = true;

export function load({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) throw error(404, 'Post not found');
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);
  return { post, related };
}
