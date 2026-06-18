<script lang="ts">
  import { browser } from '$app/environment';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { blogPosts } from '$lib/data/blogPosts';

  // Sort newest first
  const sortedPosts = blogPosts.slice().sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  // Categories derived from posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  let activeCategory = $state('All');
  let search = $state('');

  // Hydrate from URL on client only (prerender-safe).
  $effect(() => {
    if (!browser) return;
    const sp = new URLSearchParams(window.location.search);
    const cat = sp.get('category');
    if (cat) activeCategory = cat;
    const q = sp.get('q');
    if (q) search = q;
  });

  const filtered = $derived(
    sortedPosts.filter((p) => {
      const catOk = activeCategory === 'All' || p.category === activeCategory;
      const q = search.trim().toLowerCase();
      const searchOk = !q || `${p.title} ${p.excerpt} ${p.tags.join(' ')}`.toLowerCase().includes(q);
      return catOk && searchOk;
    })
  );

  const featured = $derived(filtered[0]);
  const rest = $derived(filtered.slice(1));
</script>

<svelte:head>
  <title>Blog · Estate Services</title>
  <meta name="description" content="Practical guides, market analysis, and neighborhood spotlights from our team of Bay Area real estate agents." />
</svelte:head>

<!-- Header -->
<section class="bg-gradient-to-br from-stone-900 to-brand-900 text-white">
  <div class="container-x py-14 sm:py-18">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">Blog</span>
    </nav>
    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">From the blog</h1>
    <p class="mt-3 text-stone-300 max-w-2xl">
      Market analysis, neighborhood spotlights, and practical guides for buyers, sellers, and landlords \u2014 written by our agents.
    </p>
  </div>
</section>

<!-- Filters -->
<section class="border-b border-stone-200 bg-white sticky top-20 z-30">
  <div class="container-x py-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
    <div class="flex flex-wrap gap-2">
      {#each categories as cat}
        <button
          type="button"
          onclick={() => (activeCategory = cat)}
          class="px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors
                 {activeCategory === cat ? 'bg-brand-700 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}"
        >
          {cat}
        </button>
      {/each}
    </div>
    <div class="relative md:w-72">
      <Icon name="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
      <input
        type="search"
        bind:value={search}
        placeholder="Search articles\u2026"
        class="w-full pl-9 pr-3 py-2 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none text-sm"
      />
    </div>
  </div>
</section>

<!-- Posts -->
<section class="section-pad">
  <div class="container-x">
    {#if filtered.length === 0}
      <div class="text-center py-20">
        <div class="mx-auto grid place-items-center w-16 h-16 rounded-full bg-stone-100 text-stone-400 mb-5">
          <Icon name="search" class="w-8 h-8" />
        </div>
        <h3 class="font-display text-xl font-semibold text-stone-900">No articles found</h3>
        <p class="mt-2 text-stone-600">Try a different category or search term.</p>
      </div>
    {:else}
      <!-- Featured post (full width on lg, two-thirds) -->
      {#if featured}
        <div class="grid gap-6 lg:grid-cols-2">
          <BlogCard post={featured} featured />
        </div>
      {/if}

      {#if rest.length > 0}
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each rest as post (post.id)}
            <BlogCard {post} />
          {/each}
        </div>
      {/if}
    {/if}
  </div>
</section>
