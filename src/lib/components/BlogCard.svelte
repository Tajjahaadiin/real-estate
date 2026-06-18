<script lang="ts">
  import type { BlogPost } from '$lib/types';
  import { formatDate } from '$lib/utils/format';
  import Icon from './Icon.svelte';

  interface Props {
    post: BlogPost;
    featured?: boolean;
  }
  let { post, featured = false }: Props = $props();
</script>

<article
  class="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
  class:lg:flex-row={featured}
  class:lg:col-span-2={featured}
>
  <a
    href="/blog/{post.slug}"
    class="relative block overflow-hidden bg-stone-100 {featured ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'}"
  >
    <img
      src={post.cover}
      alt={post.title}
      loading="lazy"
      class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-brand-700 text-white">
      {post.category}
    </span>
  </a>

  <div class="flex flex-1 flex-col p-6 {featured ? 'lg:justify-center' : ''}">
    <div class="flex items-center gap-3 text-xs text-stone-500">
      <span class="flex items-center gap-1.5">
        <Icon name="calendar" class="w-3.5 h-3.5" />
        {formatDate(post.publishedAt, { year: 'numeric', month: 'short', day: 'numeric' })}
      </span>
      <span class="flex items-center gap-1.5">
        <Icon name="clock" class="w-3.5 h-3.5" />
        {post.readingMinutes} min read
      </span>
    </div>

    <h3 class="mt-3 font-display {featured ? 'text-2xl lg:text-3xl' : 'text-lg'} font-bold text-stone-900 leading-tight">
      <a href="/blog/{post.slug}" class="hover:text-brand-700 transition-colors">{post.title}</a>
    </h3>

    <p class="mt-3 text-sm text-stone-600 {featured ? 'lg:text-base' : ''} line-clamp-3">{post.excerpt}</p>

    <div class="mt-5 flex items-center gap-3">
      <img src={post.authorAvatar} alt={post.author} class="w-9 h-9 rounded-full object-cover" />
      <div>
        <div class="text-sm font-medium text-stone-800">{post.author}</div>
        <div class="text-xs text-stone-500">Author</div>
      </div>
      <a href="/blog/{post.slug}" class="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all">
        Read
        <Icon name="arrow-right" class="w-4 h-4" />
      </a>
    </div>
  </div>
</article>
