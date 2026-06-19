<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { siteConfig } from '$lib/data/siteConfig';

  const sections = [
    {
      title: 'Acceptance of terms',
      body: 'By accessing this website, you agree to these Terms of Service. If you do not agree, please discontinue use of the site. These terms apply to all visitors regardless of whether you become a client of Estate Services.'
    },
    {
      title: 'Listing information',
      body: 'Property listings on this site are provided for informational purposes only and are subject to change without notice. While we make every effort to ensure listing details are accurate, we cannot guarantee the completeness or timeliness of information such as price, availability, square footage, or property condition. Always verify material facts with your agent before making an offer.'
    },
    {
      title: 'No professional advice',
      body: 'Content on our blog and elsewhere on this site is general in nature and does not constitute legal, tax, or financial advice. You should consult a qualified professional before making decisions about a specific transaction.'
    },
    {
      title: 'User conduct',
      body: 'You agree not to use this site for any unlawful purpose, not to attempt to gain unauthorized access to any portion of the site, and not to scrape, copy, or republish listing content without our written permission.'
    },
    {
      title: 'Intellectual property',
      body: 'All content on this site   including text, graphics, logos, photography, and software   is the property of Estate Services or its licensors and is protected by U.S. and international copyright law. Property photographs may be subject to additional licensing restrictions from the listing agent or photographer.'
    },
    {
      title: 'Limitation of liability',
      body: 'Estate Services and its agents are not liable for any indirect, incidental, or consequential damages arising from your use of this site. Our total liability for any claim related to your use of the site is limited to USD $100.'
    },
    {
      title: 'Governing law',
      body: 'These terms are governed by the laws of the State of California. Any dispute arising under these terms will be resolved in the state or federal courts located in San Francisco County, California.'
    }
  ];

  const updated = 'June 1, 2025';
</script>

<svelte:head>
  <title>Terms of Service · Estate Services</title>
  <meta name="description" content="Terms governing your use of the Estate Services website." />
</svelte:head>

<section class="bg-gradient-to-b from-stone-900 to-brand-900 text-white">
  <div class="container-x py-14 sm:py-18">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">Terms</span>
    </nav>
    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Terms of Service</h1>
    <p class="mt-3 text-stone-300 max-w-2xl">Last updated {updated}. Questions about these terms? Email <a href="mailto:{siteConfig.email}" class="text-brand-300 underline">{siteConfig.email}</a>.</p>
  </div>
</section>

<section class="section-pad">
  <div class="container-x max-w-3xl space-y-10">
    {#each sections as s}
      <div>
        <h2 class="font-display text-xl font-bold text-stone-900">{s.title}</h2>
        <p class="mt-3 text-stone-700 leading-relaxed">{s.body}</p>
      </div>
    {/each}
  </div>
</section>
