<script lang="ts">
  import { browser } from '$app/environment';
  import PropertyCard from '$lib/components/PropertyCard.svelte';
  import PropertyFilter, { type FilterState } from '$lib/components/PropertyFilter.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { properties } from '$lib/data/properties';
  import type { PropertyType, ListingKind, PropertyStatus } from '$lib/types';

  const PER_PAGE = 6;

  // Default filter state. URL params are read on the client only
  // (SvelteKit disallows reading url.searchParams during prerender).
  function defaultFilter(): FilterState {
    return {
      q: '',
      type: 'all',
      kind: 'all',
      status: 'all',
      minPrice: null,
      maxPrice: null,
      beds: null,
      baths: null,
      sort: 'newest'
    };
  }

  let filter = $state<FilterState>(defaultFilter());
  let currentPage = $state(1);

  // On client mount, hydrate filter state from the URL.
  $effect(() => {
    if (!browser) return;
    const sp = new URLSearchParams(window.location.search);
    filter = {
      q: sp.get('q') ?? '',
      type: (sp.get('type') as PropertyType | null) ?? 'all',
      kind: (sp.get('kind') as ListingKind | null) ?? 'all',
      status: (sp.get('status') as PropertyStatus | null) ?? 'all',
      minPrice: sp.get('minPrice') ? Number(sp.get('minPrice')) : null,
      maxPrice: sp.get('maxPrice') ? Number(sp.get('maxPrice')) : null,
      beds: sp.get('beds') ? Number(sp.get('beds')) : null,
      baths: sp.get('baths') ? Number(sp.get('baths')) : null,
      sort: (sp.get('sort') as FilterState['sort'] | null) ?? 'newest'
    };
    currentPage = Number(sp.get('page') ?? '1') || 1;
  });

  function applyFilter(next: FilterState) {
    filter = next;
    currentPage = 1;
    syncUrl();
  }

  function syncUrl() {
    if (!browser) return;
    const sp = new URLSearchParams();
    if (filter.q) sp.set('q', filter.q);
    if (filter.type !== 'all') sp.set('type', filter.type);
    if (filter.kind !== 'all') sp.set('kind', filter.kind);
    if (filter.status !== 'all') sp.set('status', filter.status);
    if (filter.minPrice != null) sp.set('minPrice', String(filter.minPrice));
    if (filter.maxPrice != null) sp.set('maxPrice', String(filter.maxPrice));
    if (filter.beds != null) sp.set('beds', String(filter.beds));
    if (filter.baths != null) sp.set('baths', String(filter.baths));
    if (filter.sort !== 'newest') sp.set('sort', filter.sort);
    if (currentPage > 1) sp.set('page', String(currentPage));
    const qs = sp.toString();
    const newUrl = `${window.location.pathname}${qs ? `?${qs}` : ''}`;
    history.replaceState(null, '', newUrl);
  }

  // Filter + sort pipeline
  const filtered = $derived.by(() => {
    let list = properties.slice();
    const q = filter.q.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        `${p.title} ${p.description} ${p.location.city} ${p.location.neighborhood ?? ''} ${p.location.address} ${p.location.state}`
          .toLowerCase()
          .includes(q)
      );
    }
    if (filter.type !== 'all') list = list.filter((p) => p.type === filter.type);
    if (filter.kind !== 'all') list = list.filter((p) => p.kind === filter.kind);
    if (filter.status !== 'all') list = list.filter((p) => p.status === filter.status);
    if (filter.minPrice != null) list = list.filter((p) => p.price >= filter.minPrice!);
    if (filter.maxPrice != null) list = list.filter((p) => p.price <= filter.maxPrice!);
    if (filter.beds != null) list = list.filter((p) => p.beds >= filter.beds!);
    if (filter.baths != null) list = list.filter((p) => p.baths >= filter.baths!);

    switch (filter.sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'area-desc': list.sort((a, b) => b.areaSqft - a.areaSqft); break;
      default: list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    }
    return list;
  });

  const totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PER_PAGE)));
  const paged = $derived(filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE));

  function goToPage(n: number) {
    currentPage = n;
    syncUrl();
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>Properties for Sale &amp; Rent · Estate Services</title>
  <meta name="description" content="Browse our full inventory of homes, condos, and commercial properties for sale and rent across the San Francisco Bay Area. Filter by price, beds, baths, and type." />
</svelte:head>

<!-- Page header -->
<section class="bg-gradient-to-b from-stone-900 to-brand-900 text-white">
  <div class="container-x py-14 sm:py-18">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">Properties</span>
    </nav>
    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Browse Properties</h1>
    <p class="mt-3 text-stone-300 max-w-2xl">
      Search our full inventory across the Bay Area. Filter by listing type, property type, price, beds and baths to find the homes that match what you\u2019re looking for.
    </p>
  </div>
</section>

<section class="section-pad">
  <div class="container-x">
    <PropertyFilter value={filter} onchange={applyFilter} resultCount={filtered.length} />

    {#if paged.length === 0}
      <div class="mt-12 text-center py-20">
        <div class="mx-auto grid place-items-center w-16 h-16 rounded-full bg-stone-100 text-stone-400 mb-5">
          <Icon name="search" class="w-8 h-8" />
        </div>
        <h3 class="font-display text-xl font-semibold text-stone-900">No properties match your filters</h3>
        <p class="mt-2 text-stone-600">Try widening your price range, removing the property type filter, or clearing your search query.</p>
      </div>
    {:else}
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each paged as property (property.id)}
          <PropertyCard {property} />
        {/each}
      </div>

      <Pagination {currentPage} {totalPages} onpage={goToPage} />
    {/if}
  </div>
</section>
