<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  interface Props {
    children: import('svelte').Snippet;
    data?: { title?: string; description?: string; image?: string };
  }
  let { children, data }: Props = $props();

  // Per-page meta — overridden by each +page.svelte via <svelte:head>
  const siteName = 'Estate Services';
  const defaultDesc = 'A San Francisco\u2013based real estate brokerage helping families and investors buy, sell, rent, and manage property across Northern California.';
</script>

<svelte:head>
  <title>{data?.title ? `${data.title} · ${siteName}` : `${siteName} · Real Estate Services`}</title>
  <meta name="description" content={data?.description ?? defaultDesc} />
  <meta name="author" content={siteName} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={data?.title ? `${data.title} · ${siteName}` : `${siteName} · Real Estate Services`} />
  <meta property="og:description" content={data?.description ?? defaultDesc} />
  <meta property="og:image" content={data?.image ?? 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop'} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data?.title ? `${data.title} · ${siteName}` : `${siteName} · Real Estate Services`} />
  <meta name="twitter:description" content={data?.description ?? defaultDesc} />
  <link rel="canonical" href={`https://estate-services.example.com${$page.url.pathname}`} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
