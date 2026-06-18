<script lang="ts">
  import Icon from './Icon.svelte';
  import { properties, propertyTypeLabels } from '$lib/data/properties';
  import type { PropertyType, ListingKind, PropertyStatus } from '$lib/types';

  export interface FilterState {
    q: string;
    type: PropertyType | 'all';
    kind: ListingKind | 'all';
    status: PropertyStatus | 'all';
    minPrice: number | null;
    maxPrice: number | null;
    beds: number | null;
    baths: number | null;
    sort: 'newest' | 'price-asc' | 'price-desc' | 'area-desc';
  }

  interface Props {
    value: FilterState;
    onchange: (next: FilterState) => void;
    resultCount: number;
  }
  let { value, onchange, resultCount }: Props = $props();

  // Build the price-select options from the dataset
  const allPrices = properties.map((p) => p.price).sort((a, b) => a - b);
  const priceSteps = [0, 500_000, 1_000_000, 1_500_000, 2_500_000, 5_000_000, 10_000_000, 20_000_000];

  function fmt(n: number): string {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
    return `$${(n / 1000).toFixed(0)}k`;
  }

  function update<K extends keyof FilterState>(key: K, val: FilterState[K]) {
    onchange({ ...value, [key]: val });
  }

  function reset() {
    onchange({
      q: '',
      type: 'all',
      kind: 'all',
      status: 'all',
      minPrice: null,
      maxPrice: null,
      beds: null,
      baths: null,
      sort: 'newest'
    });
  }

  const types = Object.entries(propertyTypeLabels) as [PropertyType, string][];
  const bedOptions = [1, 2, 3, 4, 5];
  const bathOptions = [1, 1.5, 2, 3, 4];

  let advancedOpen = $state(false);
</script>

<form
  class="rounded-2xl bg-white border border-stone-200 shadow-sm p-5 sm:p-6"
  onsubmit={(e) => e.preventDefault()}
>
  <!-- Search row -->
  <div class="flex flex-col lg:flex-row gap-3">
    <div class="relative flex-1">
      <Icon name="search" class="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
      <input
        type="search"
        value={value.q}
        oninput={(e) => update('q', e.currentTarget.value)}
        placeholder="Search by city, neighborhood, or keyword\u2026"
        class="w-full pl-11 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all"
      />
    </div>
    <div class="grid grid-cols-2 sm:flex sm:flex-row gap-3">
      <select
        value={value.kind}
        onchange={(e) => update('kind', e.currentTarget.value as FilterState['kind'])}
        class="px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none font-medium text-stone-700"
      >
        <option value="all">All listings</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
      </select>
      <select
        value={value.type}
        onchange={(e) => update('type', e.currentTarget.value as FilterState['type'])}
        class="px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none font-medium text-stone-700"
      >
        <option value="all">All types</option>
        {#each types as [t, label]}
          <option value={t}>{label}</option>
        {/each}
      </select>
    </div>
    <button
      type="button"
      onclick={() => (advancedOpen = !advancedOpen)}
      class="px-4 py-3 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 font-medium inline-flex items-center justify-center gap-2 transition-colors"
    >
      <Icon name="grid" class="w-4 h-4" />
      More
    </button>
  </div>

  <!-- Advanced filters -->
  {#if advancedOpen}
    <div class="mt-5 pt-5 border-t border-stone-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up">
      <label class="flex flex-col gap-1.5">
        <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Min price</span>
        <select
          value={value.minPrice ?? ''}
          onchange={(e) => update('minPrice', e.currentTarget.value ? Number(e.currentTarget.value) : null)}
          class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none"
        >
          <option value="">No min</option>
          {#each priceSteps as p}
            <option value={p}>{fmt(p)}</option>
          {/each}
        </select>
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Max price</span>
        <select
          value={value.maxPrice ?? ''}
          onchange={(e) => update('maxPrice', e.currentTarget.value ? Number(e.currentTarget.value) : null)}
          class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none"
        >
          <option value="">No max</option>
          {#each priceSteps as p}
            <option value={p}>{fmt(p)}</option>
          {/each}
        </select>
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Min beds</span>
        <select
          value={value.beds ?? ''}
          onchange={(e) => update('beds', e.currentTarget.value ? Number(e.currentTarget.value) : null)}
          class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none"
        >
          <option value="">Any</option>
          {#each bedOptions as b}
            <option value={b}>{b}+</option>
          {/each}
        </select>
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-xs font-medium text-stone-600 uppercase tracking-wide">Min baths</span>
        <select
          value={value.baths ?? ''}
          onchange={(e) => update('baths', e.currentTarget.value ? Number(e.currentTarget.value) : null)}
          class="px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none"
        >
          <option value="">Any</option>
          {#each bathOptions as b}
            <option value={b}>{b}+</option>
          {/each}
        </select>
      </label>
    </div>
  {/if}

  <!-- Footer: result count + sort -->
  <div class="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 border-t border-stone-100">
    <div class="text-sm text-stone-600">
      <span class="font-semibold text-stone-900">{resultCount.toLocaleString('en-US')}</span>
      {resultCount === 1 ? 'property' : 'properties'} found
    </div>
    <div class="flex items-center gap-3">
      <label class="text-sm text-stone-600">Sort by</label>
      <select
        value={value.sort}
        onchange={(e) => update('sort', e.currentTarget.value as FilterState['sort'])}
        class="px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none text-sm font-medium text-stone-700"
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price (low to high)</option>
        <option value="price-desc">Price (high to low)</option>
        <option value="area-desc">Area (largest)</option>
      </select>
      <button type="button" onclick={reset} class="text-sm text-brand-700 hover:text-brand-800 font-medium">
        Reset
      </button>
    </div>
  </div>
</form>
