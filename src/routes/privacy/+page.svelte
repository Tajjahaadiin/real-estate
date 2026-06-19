<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { siteConfig } from '$lib/data/siteConfig';

  const sections = [
    {
      title: 'Information we collect',
      body: 'When you contact us through our website, sign up for listing alerts, or work with us as a client, we collect the information you choose to share: name, email, phone number, and any message you send. We also collect basic analytics data (pages visited, browser type, referring URL) through a privacy-respecting analytics provider that does not use cross-site tracking.'
    },
    {
      title: 'How we use your information',
      body: 'We use the information you provide to respond to your inquiry, send you the listings or market updates you requested, schedule showings, and fulfill our obligations under any buyer, seller, or landlord representation agreement. We will never sell your personal information to third parties.'
    },
    {
      title: 'Who we share it with',
      body: 'We share your information only with parties necessary to complete a transaction: your mortgage lender, title company, escrow agent, inspector, and the other party s agent. We may also share information when required by law or to protect our legal rights.'
    },
    {
      title: 'How long we keep it',
      body: 'We retain client records for seven years after the close of a transaction, as required by California real estate licensing rules. Inquiry records from non-clients are deleted after 24 months of inactivity unless you ask us to keep them on file.'
    },
    {
      title: 'Your California privacy rights',
      body: 'Under the California Consumer Privacy Act (CCPA), you have the right to request a copy of the personal information we hold about you, to request deletion of that information, and to opt out of any sale of personal information. Because we do not sell personal information, the opt-out right does not apply, but you may exercise your other rights by emailing us at the address below.'
    },
    {
      title: 'Cookies and tracking',
      body: 'Our website uses a small set of essential cookies to remember your filter selections as you browse listings, and a single analytics cookie to help us understand which pages are useful. We do not use advertising cookies or place tracking pixels for third-party ad networks.'
    },
    {
      title: 'Changes to this policy',
      body: 'We may update this policy from time to time. When we make material changes, we will post a notice on the homepage and email clients who have active representation agreements. The "last updated" date below reflects the most recent revision.'
    }
  ];

  const updated = 'June 1, 2025';
</script>

<svelte:head>
  <title>Privacy Policy · Estate Services</title>
  <meta name="description" content="How Estate Services collects, uses, and protects your personal information." />
</svelte:head>

<section class="bg-gradient-to-b from-stone-900 to-brand-900 text-white">
  <div class="container-x py-14 sm:py-18">
    <nav class="text-xs text-stone-400 mb-3 flex items-center gap-2">
      <a href="/" class="hover:text-brand-300">Home</a>
      <Icon name="chevron-right" class="w-3 h-3" />
      <span class="text-stone-200">Privacy</span>
    </nav>
    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Privacy Policy</h1>
    <p class="mt-3 text-stone-300 max-w-2xl">Last updated {updated}. Questions about this policy? Email <a href="mailto:{siteConfig.email}" class="text-brand-300 underline">{siteConfig.email}</a>.</p>
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
