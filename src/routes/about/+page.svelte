<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import StatCounter from '$lib/components/StatCounter.svelte';
  import AgentCard from '$lib/components/AgentCard.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import CTASection from '$lib/components/CTASection.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { agents } from '$lib/data/agents';
  import { testimonials, faqs } from '$lib/data/services';
  import { stats } from '$lib/data/siteConfig';

  const values = [
    { icon: 'shield', title: 'Integrity first', body: 'We tell you what you need to hear, not what makes the sale. Our agents are paid the same regardless of which property you choose \u2014 so there\u2019s no incentive to push you toward a bad fit.' },
    { icon: 'pin', title: 'Local expertise', body: 'Every agent on our team has lived in the Bay Area for at least a decade. We know the school districts, the commute patterns, the micro-climates, and the zoning quirks of each neighborhood.' },
    { icon: 'trend', title: 'Data-driven', body: 'Every list price, every offer, every cash-flow projection is backed by live MLS data and 90-day comparables. We will show you the math behind every recommendation.' },
    { icon: 'clock', title: 'Same-day reply', body: 'Your agent picks up the phone. Your property manager responds within one business day. We built our reputation on being reachable when it matters.' }
  ];

  const timeline = [
    { year: '2007', title: 'Founded in the Mission', body: 'Estate Services opens its first office on Valencia Street with a team of three.' },
    { year: '2012', title: 'Property management launches', body: 'We add a dedicated property management division after clients ask us to manage the rentals they bought through us.' },
    { year: '2017', title: 'Commercial division', body: 'Daniel Reyes joins to lead our commercial practice, focusing on small-business tenants and mixed-use investors.' },
    { year: '2021', title: '1,000+ families served', body: 'We cross the 1,000-family milestone with a 4.9/5 average rating across Google, Yelp, and Zillow reviews.' },
    { year: '2025', title: '36 cities and counting', body: 'Our team now covers 36 cities across Northern California, with referral partners across the state.' }
  ];
</script>

<svelte:head>
  <title>About Us · Estate Services</title>
  <meta name="description" content="Estate Services is a San Francisco\u2013based real estate brokerage founded in 2007. Meet our team of senior agents and learn about the values that guide our work." />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-stone-900 text-white">
  <div class="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop" alt="Modern office interior" class="h-full w-full object-cover opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/40"></div>
  </div>
  <div class="relative container-x py-20 sm:py-28">
    <div class="max-w-3xl">
      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium uppercase tracking-widest">
        About Estate Services
      </span>
      <h1 class="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Local agents. <span class="text-brand-400">Honest advice.</span><br /> Since 2007.
      </h1>
      <p class="mt-5 text-lg text-stone-300 max-w-2xl leading-relaxed">
        We started Estate Services with one belief: that real estate is fundamentally about people, not transactions. Eighteen years and 940+ families later, that belief still shapes every deal we touch.
      </p>
    </div>
  </div>
</section>

<!-- Story -->
<section class="section-pad">
  <div class="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div class="relative">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Estate Services team meeting" class="rounded-3xl shadow-2xl aspect-[4/3] object-cover" />
      <div class="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl border border-stone-100 p-5 max-w-[220px]">
        <div class="font-display text-3xl font-bold text-brand-700">18 yrs</div>
        <p class="mt-1 text-sm text-stone-700">Serving Bay Area families since 2007.</p>
      </div>
    </div>
    <div>
      <SectionHeading eyebrow="Our story" title="A boutique brokerage with deep Bay Area roots" align="left" />
      <div class="mt-6 space-y-4 text-stone-700 leading-relaxed">
        <p>
          Estate Services was founded in 2007 by a small group of agents who had grown frustrated with the transaction-first culture of the big national brokerages. They wanted to build a firm where agents stayed with their clients for years \u2014 not just until the commission cleared.
        </p>
        <p>
          Eighteen years later, that conviction is still our north star. We deliberately stay small: a tight team of senior agents, each with at least a decade of local experience, each carrying a manageable book of clients so they can give every transaction the attention it deserves.
        </p>
        <p>
          We\u2019ve grown carefully \u2014 adding property management in 2012, a commercial division in 2017, and an investment advisory practice in 2020 \u2014 but only when we could do so without compromising the personal attention that defines us. Today we cover 36 cities across Northern California and refer out beyond that to a vetted network of partners who share our standards.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Stats -->
<section class="bg-brand-900 py-16">
  <div class="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
    {#each stats as s}
      <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
    {/each}
  </div>
</section>

<!-- Values -->
<section class="section-pad bg-white border-y border-stone-200">
  <div class="container-x">
    <SectionHeading eyebrow="What we stand for" title="Four values that shape every transaction" subtitle="These aren\u2019t marketing slogans \u2014 they\u2019re the operating principles we hire, fire, and promote against." />
    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each values as v (v.title)}
        <div class="p-6 rounded-2xl bg-stone-50 border border-stone-200">
          <div class="grid place-items-center w-12 h-12 rounded-xl bg-brand-700 text-white">
            <Icon name={v.icon as any} class="w-6 h-6" />
          </div>
          <h3 class="mt-4 font-display text-lg font-semibold text-stone-900">{v.title}</h3>
          <p class="mt-2 text-sm text-stone-600 leading-relaxed">{v.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Timeline -->
<section class="section-pad">
  <div class="container-x">
    <SectionHeading eyebrow="Our journey" title="Milestones along the way" />
    <ol class="mt-12 relative max-w-3xl mx-auto border-l-2 border-brand-200 pl-8 space-y-10">
      {#each timeline as t (t.year)}
        <li class="relative">
          <span class="absolute -left-[41px] top-0 grid place-items-center w-8 h-8 rounded-full bg-brand-700 text-white text-xs font-bold ring-4 ring-brand-100">
            <Icon name="check" class="w-4 h-4" stroke={2.4} />
          </span>
          <div class="text-sm font-semibold text-brand-700">{t.year}</div>
          <h3 class="mt-1 font-display text-xl font-bold text-stone-900">{t.title}</h3>
          <p class="mt-1 text-stone-600 leading-relaxed">{t.body}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

<!-- Team -->
<section class="section-pad bg-white border-t border-stone-200">
  <div class="container-x">
    <SectionHeading eyebrow="Meet the team" title="The agents you\u2019ll work with" subtitle="A small, senior team \u2014 each with a decade-plus of Bay Area experience and a clear specialty." />
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
    <SectionHeading eyebrow="In their words" title="What clients say about working with us" />
    <div class="mt-12 grid gap-6 sm:grid-cols-2">
      {#each testimonials as t (t.id)}
        <TestimonialCard testimonial={t} />
      {/each}
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section-pad bg-white border-t border-stone-200">
  <div class="container-x max-w-3xl">
    <SectionHeading eyebrow="Good questions" title="Frequently asked" subtitle="The questions we hear most often from buyers, sellers, and landlords. Don\u2019t see yours? Just call us \u2014 we\u2019re happy to talk through it." />
    <div class="mt-10 space-y-3">
      {#each faqs as faq, i (faq.question)}
        <details class="group rounded-2xl bg-stone-50 border border-stone-200 overflow-hidden">
          <summary class="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-stone-900">
            <span>{faq.question}</span>
            <span class="grid place-items-center w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-500 group-open:rotate-45 transition-transform">
              <Icon name="close" class="w-4 h-4 rotate-45" />
            </span>
          </summary>
          <div class="px-5 pb-5 -mt-1 text-stone-600 leading-relaxed">
            {faq.answer}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>

<CTASection title="Let\u2019s find your next chapter." subtitle="Whether you\u2019re ready to list, ready to buy, or just exploring options \u2014 we\u2019d love to hear what you have in mind." />
