<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
  <title>Page not found · Estate Services</title>
</svelte:head>

<section class="min-h-[60vh] grid place-items-center py-20">
  <div class="container-x text-center max-w-lg">
    <div class="mx-auto grid place-items-center w-20 h-20 rounded-full bg-brand-50 text-brand-700 mb-6">
      <Icon name="search" class="w-10 h-10" />
    </div>
    <p class="font-display text-6xl sm:text-7xl font-bold text-brand-700">404</p>
    <h1 class="mt-3 font-display text-2xl font-bold text-stone-900">This page doesn t exist</h1>
    <p class="mt-2 text-stone-600">
      The page you re looking for may have moved or been removed. Try searching our listings or head back home.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <a href="/" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors">
        <Icon name="home" class="w-5 h-5" />
        Back home
      </a>
      <a href="/properties" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-300 text-stone-800 font-semibold hover:bg-stone-50 transition-colors">
        <Icon name="search" class="w-5 h-5" />
        Browse properties
      </a>
    </div>
  </div>
</section>
