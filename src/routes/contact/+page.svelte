<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { siteConfig } from '$lib/data/siteConfig';

  const contactCards = [
    { icon: 'pin', title: 'Visit the office', lines: [siteConfig.address] },
    { icon: 'phone', title: 'Call us', lines: [siteConfig.phone], href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}` },
    { icon: 'mail', title: 'Email us', lines: [siteConfig.email], href: `mailto:${siteConfig.email}` },
    { icon: 'clock', title: 'Office hours', lines: siteConfig.hours.split(' · ') }
  ];
</script>

<svelte:head>
  <title>Contact Estate Services</title>
  <meta name="description" content="Get in touch with Estate Services. Visit our San Francisco office, call us, or send a message \u2014 we respond within one business day." />
</svelte:head>

<!-- Header -->
<section class="bg-gradient-to-br from-stone-900 to-brand-900 text-white">
  <div class="container-x py-14 sm:py-18">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">Contact</span>
    </nav>
    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Let\u2019s talk</h1>
    <p class="mt-3 text-stone-300 max-w-2xl">
      Whether you\u2019re ready to buy, sell, or just have a question about the market, we\u2019d love to hear from you. Most messages get a reply within one business day.
    </p>
  </div>
</section>

<!-- Contact cards -->
<section class="section-pad">
  <div class="container-x">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {#each contactCards as c (c.title)}
        <div class="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="grid place-items-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700">
            <Icon name={c.icon as any} class="w-6 h-6" />
          </div>
          <h3 class="mt-4 font-display font-semibold text-stone-900">{c.title}</h3>
          <div class="mt-2 text-sm text-stone-600 space-y-0.5">
            {#each c.lines as line}
              <p>{line}</p>
            {/each}
          </div>
          {#if c.href}
            <a href={c.href} class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2 transition-all">
              {c.icon === 'phone' ? 'Call now' : 'Send email'}
              <Icon name="arrow-right" class="w-4 h-4" />
            </a>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Form + map -->
    <div class="mt-10 grid lg:grid-cols-5 gap-8">
      <div class="lg:col-span-3">
        <h2 class="font-display text-2xl font-bold text-stone-900 mb-1">Send us a message</h2>
        <p class="text-stone-600 mb-5">Fill out the form below and we\u2019ll route your message to the right specialist.</p>
        <ContactForm />
      </div>
      <div class="lg:col-span-2">
        <h2 class="font-display text-2xl font-bold text-stone-900 mb-1">Find us</h2>
        <p class="text-stone-600 mb-5">We\u2019re on the 12th floor of the historic Sutter Building in downtown San Francisco.</p>
        <div class="rounded-2xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100">
          <iframe
            title="Office map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4080%2C37.7880%2C-122.4020%2C37.7920&amp;layer=mapnik&amp;marker=37.7900%2C-122.4050"
            class="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
        <div class="mt-4 p-5 rounded-2xl bg-brand-50 border border-brand-200">
          <h3 class="font-display font-semibold text-stone-900">Parking &amp; transit</h3>
          <ul class="mt-2 text-sm text-stone-700 space-y-1.5">
            <li class="flex items-start gap-2"><Icon name="pin" class="w-4 h-4 mt-0.5 text-brand-700 shrink-0" />2 blocks from Montgomery BART station</li>
            <li class="flex items-start gap-2"><Icon name="pin" class="w-4 h-4 mt-0.5 text-brand-700 shrink-0" />Validated parking at 450 Sutter Garage (entrance on Sansome)</li>
            <li class="flex items-start gap-2"><Icon name="pin" class="w-4 h-4 mt-0.5 text-brand-700 shrink-0" />Bike racks in the building lobby</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
