<script lang="ts">
  import Icon from './Icon.svelte';
  import { siteConfig, stats } from '$lib/data/siteConfig';
  import { properties, propertyTypeLabels } from '$lib/data/properties';
  import type { PropertyType, ListingKind } from '$lib/types';

  // Quick search state (used by hero on homepage)
  let q = $state('');
  let type = $state<PropertyType | 'all'>('all');
  let kind = $state<ListingKind | 'all'>('all');
  let minBeds = $state<number | ''>('');

  // Build the search URL and navigate
  function go(ev: SubmitEvent) {
    ev.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (type !== 'all') params.set('type', type);
    if (kind !== 'all') params.set('kind', kind);
    if (minBeds !== '') params.set('beds', String(minBeds));
    const qs = params.toString();
    window.location.href = `/properties${qs ? `?${qs}` : ''}`;
  }

  const cities = Array.from(new Set(properties.map((p) => p.location.city))).slice(0, 6);
  const types = Object.entries(propertyTypeLabels) as [PropertyType, string][];
</script>

<section class="relative overflow-hidden bg-stone-900">
  <!-- Background image -->
  <div class="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2400&auto=format&fit=crop"
      alt="San Francisco skyline"
      class="h-full w-full object-cover opacity-50"
    />
    <div class="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-900/70 to-brand-900/60"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.25),transparent_50%)]"></div>
  </div>

  <!-- Content -->
  <div class="relative container-x py-20 sm:py-28 lg:py-32">
    <div class="max-w-3xl">
      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-medium uppercase tracking-widest">
        <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
        {siteConfig.tagline}
      </span>
      <h1 class="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold !text-white leading-[1.05] tracking-tight">
        Find a place you’ll<br class="hidden sm:block" />
        love to <span class="text-brand-400">call home.</span>
      </h1>
      <p class="mt-5 text-lg text-stone-300 max-w-xl leading-relaxed">
        From sunlit Mission Victorians to skyline-view penthouses, our local agents know every block of the Bay. Browse curated listings or talk to an agent today.
      </p>

      <!-- Quick search card -->
      <form
        onsubmit={go}
        class="mt-8 rounded-2xl bg-white/95 backdrop-blur shadow-2xl p-4 sm:p-5"
      >
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <label class="flex flex-col gap-1">
            <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Search</span>
            <input
              type="search"
              bind:value={q}
              placeholder="City or keyword"
              class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all"
            />
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Listing</span>
            <select
              bind:value={kind}
              class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none transition-all"
            >
              <option value="all">All</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Property type</span>
            <select
              bind:value={type}
              class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none transition-all"
            >
              <option value="all">All types</option>
              {#each types as [t, label]}
                <option value={t}>{label}</option>
              {/each}
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Beds</span>
            <select
              bind:value={minBeds}
              class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none transition-all"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          class="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20"
        >
          <Icon name="search" class="w-5 h-5" />
          Search properties
        </button>
      </form>

      <!-- City quick links -->
      <div class="mt-6 flex flex-wrap items-center gap-2 text-sm">
        <span class="text-stone-400">Popular:</span>
        {#each cities as c}
          <a
            href="/properties?q={encodeURIComponent(c)}"
            class="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 transition-colors"
          >
            {c}
          </a>
        {/each}
      </div>
    </div>

    <!-- Stats row -->
    <div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
      {#each stats as s}
        <div class="border-l-2 border-brand-400 pl-4">
          <div class="font-display text-3xl font-bold text-white">{s.value.toLocaleString('en-US')}{s.suffix}</div>
          <div class="mt-1 text-xs uppercase tracking-wider text-stone-400">{s.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
