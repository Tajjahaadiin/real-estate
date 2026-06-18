<script lang="ts">
  import type { PageData } from './$types';
  import Icon from '$lib/components/Icon.svelte';
  import PropertyCard from '$lib/components/PropertyCard.svelte';
  import Lightbox from '$lib/components/Lightbox.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { getAgent } from '$lib/data/agents';
  import { propertyStatusBadge, propertyStatusLabels, propertyTypeLabels } from '$lib/data/properties';
  import { formatPriceFull, formatNumber, formatDate } from '$lib/utils/format';

  let { data }: { data: PageData } = $props();
  const property = $derived(data.property);
  const related = $derived(data.related);
  const agent = $derived(getAgent(property.agentId));

  // Gallery / lightbox state
  let activeIdx = $state(0);
  let lightboxOpen = $state(false);

  const specs = $derived([
    { icon: 'bed', label: 'Bedrooms', value: String(property.beds) },
    { icon: 'bath', label: 'Bathrooms', value: String(property.baths) },
    { icon: 'area', label: 'Interior', value: `${formatNumber(property.areaSqft)} ft²` },
    ...(property.lotSqft ? [{ icon: 'area', label: 'Lot size', value: `${formatNumber(property.lotSqft)} ft²` }] : []),
    { icon: 'calendar', label: 'Year built', value: String(property.yearBuilt) },
    ...(property.garage ? [{ icon: 'garage', label: 'Garage', value: `${property.garage} car${property.garage > 1 ? 's' : ''}` }] : [])
  ]);
</script>

<svelte:head>
  <title>{property.title} · {property.location.city}, {property.location.state}</title>
  <meta name="description" content={property.description} />
  <meta property="og:image" content={property.images[0]} />
  <meta property="og:type" content="article" />
</svelte:head>

<!-- Breadcrumbs + heading -->
<section class="bg-stone-900 text-white">
  <div class="container-x py-10 sm:py-14">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2 flex-wrap">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <a href="/properties" class="hover:text-brand-300">Properties</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">{property.location.neighborhood ?? property.location.city}</span>
    </nav>
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold {propertyStatusBadge[property.status]}">
            {propertyStatusLabels[property.status]}
          </span>
          <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20">
            {propertyTypeLabels[property.type]}
          </span>
        </div>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{property.title}</h1>
        <p class="mt-3 text-stone-300 flex items-center gap-2">
          <Icon name="pin" class="w-5 h-5 text-brand-400" />
          {property.location.address}, {property.location.city}, {property.location.state}
        </p>
      </div>
      <div class="text-right">
        <div class="font-display text-3xl sm:text-4xl font-bold text-brand-400">{formatPriceFull(property)}</div>
        {#if property.kind === 'sale'}
          <div class="text-sm text-stone-400 mt-1">Listed {formatDate(property.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}</div>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Gallery -->
<section class="py-8">
  <div class="container-x">
    <div class="grid lg:grid-cols-4 gap-3 lg:h-[28rem]">
      <!-- Main image -->
      <button
        type="button"
        onclick={() => { activeIdx = 0; lightboxOpen = true; }}
        class="relative group lg:col-span-3 lg:row-span-2 overflow-hidden rounded-2xl bg-stone-100 aspect-[16/10] lg:aspect-auto"
      >
        <img src={property.images[0]} alt={property.title} class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs backdrop-blur">
          <Icon name="expand" class="w-4 h-4" />
          View gallery
        </span>
      </button>
      <!-- Side images -->
      {#each property.images.slice(1, 3) as src, i (src)}
        <button
          type="button"
          onclick={() => { activeIdx = i + 1; lightboxOpen = true; }}
          class="relative group overflow-hidden rounded-2xl bg-stone-100 aspect-[16/10] lg:aspect-auto hidden sm:block"
        >
          <img src={src} alt={`${property.title} photo ${i + 2}`} class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </button>
      {/each}
    </div>

    {#if property.images.length > 3}
      <div class="mt-3 flex gap-3 overflow-x-auto pb-2">
        {#each property.images as src, i (src)}
          <button
            type="button"
            onclick={() => { activeIdx = i; lightboxOpen = true; }}
            class="relative shrink-0 w-24 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden bg-stone-100 border-2 {i === activeIdx ? 'border-brand-600' : 'border-transparent'}"
          >
            <img src={src} alt="" class="h-full w-full object-cover" />
          </button>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- Body: details + sidebar -->
<section class="pb-12">
  <div class="container-x grid lg:grid-cols-3 gap-10">
    <!-- Main content -->
    <div class="lg:col-span-2 space-y-12">
      <!-- Specs grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {#each specs as spec}
          <div class="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200">
            <span class="grid place-items-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700 shrink-0">
              <Icon name={spec.icon as any} class="w-5 h-5" />
            </span>
            <div>
              <div class="text-xs uppercase tracking-wide text-stone-500">{spec.label}</div>
              <div class="font-semibold text-stone-900">{spec.value}</div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Description -->
      <div>
        <h2 class="font-display text-2xl font-bold text-stone-900">About this property</h2>
        <p class="mt-4 text-stone-700 leading-relaxed">{property.longDescription}</p>
      </div>

      <!-- Features -->
      <div>
        <h2 class="font-display text-2xl font-bold text-stone-900">Features</h2>
        <ul class="mt-5 grid sm:grid-cols-2 gap-3">
          {#each property.features as f}
            <li class="flex items-start gap-2.5 text-stone-700">
              <Icon name="check" class="w-5 h-5 mt-0.5 text-brand-600 shrink-0" stroke={2.2} />
              {f}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Amenities -->
      <div>
        <h2 class="font-display text-2xl font-bold text-stone-900">Amenities</h2>
        <div class="mt-5 flex flex-wrap gap-2">
          {#each property.amenities as a}
            <span class="px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 text-sm font-medium border border-brand-100">{a}</span>
          {/each}
        </div>
      </div>

      <!-- Map (static, using lat/lng) -->
      <div>
        <h2 class="font-display text-2xl font-bold text-stone-900">Location</h2>
        <p class="mt-2 text-stone-700">{property.location.address}, {property.location.city}, {property.location.state}</p>
        <div class="mt-4 rounded-2xl overflow-hidden border border-stone-200 aspect-[16/9] bg-stone-100">
          {#if property.location.lat && property.location.lng}
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox={property.location.lng - 0.01}%2C{property.location.lat - 0.006}%2C{property.location.lng + 0.01}%2C{property.location.lat + 0.006}&amp;layer=mapnik&amp;marker={property.location.lat}%2C{property.location.lng}"
              class="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          {/if}
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="lg:col-span-1 space-y-6">
      {#if agent}
        <div class="rounded-2xl bg-white border border-stone-200 shadow-sm p-6">
          <h3 class="font-display text-lg font-bold text-stone-900">Listing agent</h3>
          <div class="mt-4 flex items-center gap-4">
            <img src={agent.avatar} alt={agent.name} class="w-16 h-16 rounded-full object-cover" />
            <div>
              <div class="font-semibold text-stone-900">{agent.name}</div>
              <div class="text-sm text-brand-700">{agent.title}</div>
              <div class="mt-1 flex items-center gap-1 text-xs text-stone-500">
                <Icon name="star" class="w-3.5 h-3.5 text-gold-500" />
                {agent.rating.toFixed(1)} · {agent.listings} listings
              </div>
            </div>
          </div>
          <div class="mt-5 grid grid-cols-2 gap-2">
            <a href="tel:{agent.phone.replace(/[^+\d]/g, '')}" class="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-semibold hover:bg-brand-800 transition-colors">
              <Icon name="phone" class="w-4 h-4" />
              Call
            </a>
            <a href="mailto:{agent.email}" class="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-stone-100 text-stone-800 text-sm font-semibold hover:bg-stone-200 transition-colors">
              <Icon name="mail" class="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      {/if}

      <div>
        <h3 class="font-display text-lg font-bold text-stone-900 mb-3">Request a tour</h3>
        <ContactForm propertyTitle={property.title} compact />
      </div>
    </aside>
  </div>
</section>

<!-- Related -->
{#if related.length > 0}
  <section class="section-pad bg-white border-t border-stone-200">
    <div class="container-x">
      <SectionHeading eyebrow="You may also like" title="Similar properties" align="left" />
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each related as p (p.id)}
          <PropertyCard property={p} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<Lightbox
  images={property.images}
  open={lightboxOpen}
  index={activeIdx}
  onclose={() => (lightboxOpen = false)}
  onnavigate={(i) => (activeIdx = i)}
/>
