<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Property } from '$lib/types';
  import { propertyStatusBadge, propertyStatusLabels, propertyTypeLabels } from '$lib/data/properties';
  import { formatPrice, formatNumber } from '$lib/utils/format';

  interface Props {
    property: Property;
    class?: string;
  }
  let { property, class: cls = '' }: Props = $props();
</script>

<article
  class="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 {cls}"
>
  <!-- Image -->
  <a href="/properties/{property.slug}" class="relative block aspect-[4/3] overflow-hidden bg-stone-100">
    <img
      src={property.images[0]}
      alt={property.title}
      loading="lazy"
      class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <!-- Status badge -->
    <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide {propertyStatusBadge[property.status]}">
      {propertyStatusLabels[property.status]}
    </span>
    <!-- Type chip -->
    <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/95 text-stone-700 backdrop-blur">
      {propertyTypeLabels[property.type]}
    </span>
    <!-- Quick view button -->
    <span class="absolute bottom-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-white text-brand-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
      <Icon name="arrow-right" class="w-5 h-5" />
    </span>
  </a>

  <!-- Body -->
  <div class="flex flex-1 flex-col p-5">
    <div class="flex items-start justify-between gap-2">
      <h3 class="font-display text-lg font-semibold text-stone-900 leading-snug">
        <a href="/properties/{property.slug}" class="hover:text-brand-700 transition-colors">{property.title}</a>
      </h3>
      <div class="text-right shrink-0">
        <div class="font-display text-lg font-bold text-brand-700">{formatPrice(property)}</div>
      </div>
    </div>

    <p class="mt-1 text-sm text-stone-500 flex items-center gap-1.5">
      <Icon name="pin" class="w-4 h-4 text-brand-600" />
      <span class="truncate">{property.location.address}, {property.location.city}, {property.location.state}</span>
    </p>

    <p class="mt-3 text-sm text-stone-600 line-clamp-2">{property.description}</p>

    <!-- Specs -->
    <div class="mt-4 grid grid-cols-3 gap-2 text-xs text-stone-600 border-t border-stone-100 pt-4">
      <div class="flex items-center gap-1.5">
        <Icon name="bed" class="w-4 h-4 text-brand-600" />
        <span>{property.beds} Beds</span>
      </div>
      <div class="flex items-center gap-1.5">
        <Icon name="bath" class="w-4 h-4 text-brand-600" />
        <span>{property.baths} Baths</span>
      </div>
      <div class="flex items-center gap-1.5">
        <Icon name="area" class="w-4 h-4 text-brand-600" />
        <span>{formatNumber(property.areaSqft)} ft²</span>
      </div>
    </div>
  </div>
</article>
