<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import PropertyCard from '$lib/components/PropertyCard.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import AgentCard from '$lib/components/AgentCard.svelte';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import StatCounter from '$lib/components/StatCounter.svelte';
  import Icon from '$lib/components/Icon.svelte';

  import { getFeaturedProperties } from '$lib/data/properties';
  import { services, testimonials } from '$lib/data/services';
  import { agents } from '$lib/data/agents';
  import { blogPosts } from '$lib/data/blogPosts';
  import { stats } from '$lib/data/siteConfig';

  const featured = getFeaturedProperties(6);
  const recentPosts = blogPosts.slice(0, 3);
</script>

<svelte:head>
  <title>Estate Services · Real Estate Brokerage in San Francisco</title>
  <meta name="description" content="Buy, sell, rent, and manage property across the San Francisco Bay Area. Local agents, curated listings, and full-service property management since 2007." />
</svelte:head>

<Hero />

<!-- Featured Properties -->
<section class="section-pad">
  <div class="container-x">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <SectionHeading
        eyebrow="Featured Listings"
        title="Hand-picked homes, ready to tour"
        subtitle="A curated selection of the most sought-after properties currently on the market — from cozy cottages to skyline penthouses."
        align="left"
      />
      <a
        href="/properties"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors self-start md:self-end"
      >
        View all properties
        <Icon name="arrow-right" class="w-4 h-4" />
      </a>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each featured as property (property.id)}
        <PropertyCard {property} />
      {/each}
    </div>
  </div>
</section>

<!-- Services -->
<section class="section-pad bg-white border-y border-stone-200">
  <div class="container-x">
    <SectionHeading
      eyebrow="What we do"
      title="Full-service real estate, end to end"
      subtitle="Whether you\u2019re buying your first home, selling a long-held investment, or renting out a portfolio, we have a dedicated specialist for the job."
    />
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each services as service (service.id)}
        <ServiceCard {service} />
      {/each}
    </div>
  </div>
</section>

<!-- Stats band -->
<section class="bg-brand-900 py-16">
  <div class="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
    {#each stats as s}
      <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
    {/each}
  </div>
</section>

<!-- Why choose us -->
<section class="section-pad">
  <div class="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
        alt="Agent discussing documents with clients at a table"
        class="rounded-3xl shadow-2xl aspect-[4/3] object-cover"
      />
      <div class="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-xl border border-stone-100 p-5 max-w-[220px]">
        <div class="flex items-center gap-2 text-gold-500">
          {#each Array(5) as _}<Icon name="star" class="w-4 h-4" />{/each}
        </div>
        <p class="mt-2 text-sm text-stone-700 leading-snug">
          Rated <strong class="text-stone-900">4.9/5</strong> by 940+ happy families across the Bay Area.
        </p>
      </div>
    </div>

    <div>
      <SectionHeading
        eyebrow="Why Estate Services"
        title="Local knowledge, honest advice, relentless follow-through"
        align="left"
      />
      <ul class="mt-8 space-y-5">
        <li class="flex gap-4">
          <span class="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 shrink-0">
            <Icon name="pin" class="w-5 h-5" />
          </span>
          <div>
            <h3 class="font-display font-semibold text-stone-900">Born and raised in the Bay</h3>
            <p class="mt-1 text-sm text-stone-600 leading-relaxed">Our agents have lived in the neighborhoods they sell for an average of 14 years. They know the schools, the commute, the micro-climates, and the neighbors.</p>
          </div>
        </li>
        <li class="flex gap-4">
          <span class="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 shrink-0">
            <Icon name="shield" class="w-5 h-5" />
          </span>
          <div>
            <h3 class="font-display font-semibold text-stone-900">Your interests, first</h3>
            <p class="mt-1 text-sm text-stone-600 leading-relaxed">We will tell you when a property isn\u2019t right, when an offer is too aggressive, or when you should walk away. We earn our commission by protecting you, not by closing at any cost.</p>
          </div>
        </li>
        <li class="flex gap-4">
          <span class="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 shrink-0">
            <Icon name="trend" class="w-5 h-5" />
          </span>
          <div>
            <h3 class="font-display font-semibold text-stone-900">Data-driven pricing</h3>
            <p class="mt-1 text-sm text-stone-600 leading-relaxed">Every list price and every offer is backed by a comparative market analysis built on live MLS data and 90 days of comparable sales.</p>
          </div>
        </li>
        <li class="flex gap-4">
          <span class="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 shrink-0">
            <Icon name="clock" class="w-5 h-5" />
          </span>
          <div>
            <h3 class="font-display font-semibold text-stone-900">Always reachable</h3>
            <p class="mt-1 text-sm text-stone-600 leading-relaxed">Your agent picks up. Your property manager responds within one business day. Our entire team operates on a same-day-reply promise.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- Agents -->
<section class="section-pad bg-white border-y border-stone-200">
  <div class="container-x">
    <SectionHeading
      eyebrow="Meet the team"
      title="Agents who actually answer the phone"
      subtitle="A small, senior team of agents \u2014 each with at least a decade of Bay Area experience. You\u2019ll work with one specialist from first call to closing."
    />
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each agents as agent (agent.id)}
        <AgentCard {agent} />
      {/each}
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="section-pad">
  <div class="container-x">
    <SectionHeading
      eyebrow="Client stories"
      title="What our clients say"
      subtitle="Real reviews from buyers, sellers, and landlords we\u2019ve worked with over the last 12 months."
    />
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {#each testimonials as t (t.id)}
        <TestimonialCard testimonial={t} />
      {/each}
    </div>
  </div>
</section>

<!-- Blog preview -->
<section class="section-pad bg-white border-t border-stone-200">
  <div class="container-x">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <SectionHeading
        eyebrow="From the blog"
        title="Market intel and advice"
        subtitle="Practical guides and local market analysis from our agents \u2014 published weekly."
        align="left"
      />
      <a href="/blog" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-50 transition-colors self-start md:self-end">
        All articles
        <Icon name="arrow-right" class="w-4 h-4" />
      </a>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each recentPosts as post (post.id)}
        <BlogCard post={post} />
      {/each}
    </div>
  </div>
</section>

<CTASection />
