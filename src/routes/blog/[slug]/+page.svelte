<script lang="ts">
  import type { PageData } from './$types';
  import Icon from '$lib/components/Icon.svelte';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import { formatDate } from '$lib/utils/format';

  let { data }: { data: PageData } = $props();
  const post = $derived(data.post);
  const related = $derived(data.related);
</script>

<svelte:head>
  <title>{post.title} · Estate Services Blog</title>
  <meta name="description" content={post.excerpt} />
  <meta property="og:image" content={post.cover} />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={post.publishedAt} />
  <meta property="article:author" content={post.author} />
</svelte:head>

<!-- Hero -->
<section class="relative">
  <div class="aspect-[16/9] sm:aspect-[21/9] max-h-[34rem] overflow-hidden bg-stone-900">
    <img src={post.cover} alt={post.title} class="w-full h-full object-cover opacity-70" />
    <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
  </div>
  <div class="absolute inset-x-0 bottom-0">
    <div class="container-x pb-10 sm:pb-14 text-white">
      <nav class="text-xs text-stone-300 mb-3 flex items-center gap-2 flex-wrap">
        <a href="/" class="hover:text-brand-300">Home</a>
        <Icon name="chevron-right" class="w-3 h-3" />
        <a href="/blog" class="hover:text-brand-300">Blog</a>
        <Icon name="chevron-right" class="w-3 h-3" />
        <span class="text-stone-100">{post.category}</span>
      </nav>
      <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-700 text-white mb-3">{post.category}</span>
      <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-tight">{post.title}</h1>
      <div class="mt-5 flex items-center gap-3">
        <img src={post.authorAvatar} alt={post.author} class="w-11 h-11 rounded-full object-cover ring-2 ring-white/30" />
        <div class="text-sm">
          <div class="font-medium text-white">{post.author}</div>
          <div class="text-stone-300 flex items-center gap-2">
            <span>{formatDate(post.publishedAt, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span class="opacity-50">·</span>
            <span class="flex items-center gap-1"><Icon name="clock" class="w-3.5 h-3.5" />{post.readingMinutes} min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Body -->
<section class="section-pad">
  <div class="container-x max-w-3xl">
    <p class="text-xl text-stone-700 leading-relaxed font-medium border-l-4 border-brand-500 pl-5 mb-8">
      {post.excerpt}
    </p>

    <article class="prose-custom space-y-6">
      {#each post.body as para}
        <p class="text-stone-700 leading-relaxed text-[1.05rem]">{para}</p>
      {/each}
    </article>

    <!-- Tags -->
    <div class="mt-10 pt-8 border-t border-stone-200">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-sm font-medium text-stone-600 mr-1">Tags:</span>
        {#each post.tags as tag}
          <a href="/blog?q={encodeURIComponent(tag)}" class="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-sm font-medium hover:bg-brand-50 hover:text-brand-800 transition-colors">#{tag}</a>
        {/each}
      </div>
    </div>

    <!-- Share -->
    <div class="mt-8 flex items-center gap-3">
      <span class="text-sm font-medium text-stone-600">Share:</span>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener" class="grid place-items-center w-9 h-9 rounded-full bg-stone-100 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Share on Twitter">
        <Icon name="twitter" class="w-4 h-4" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://estate-services.example.com/blog/' + post.slug)}`} target="_blank" rel="noopener" class="grid place-items-center w-9 h-9 rounded-full bg-stone-100 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Share on Facebook">
        <Icon name="facebook" class="w-4 h-4" />
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://estate-services.example.com/blog/' + post.slug)}`} target="_blank" rel="noopener" class="grid place-items-center w-9 h-9 rounded-full bg-stone-100 hover:bg-brand-700 hover:text-white transition-colors" aria-label="Share on LinkedIn">
        <Icon name="linkedin" class="w-4 h-4" />
      </a>
    </div>
  </div>
</section>

<!-- Related -->
{#if related.length > 0}
  <section class="section-pad bg-white border-t border-stone-200">
    <div class="container-x">
      <h2 class="font-display text-2xl font-bold text-stone-900 mb-8">Keep reading</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each related as r (r.id)}
          <BlogCard post={r} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<CTASection title="Ready to make a move?" subtitle="Talk to one of our agents about what you just read   we re happy to dig into the specifics of your situation." />
