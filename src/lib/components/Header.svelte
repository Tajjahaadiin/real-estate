<script lang="ts">
  import Icon from './Icon.svelte';
  import { siteConfig, navLinks } from '$lib/data/siteConfig';
  import { page } from '$app/stores';

  let mobileOpen = $state(false);
  let scrolled = $state(false);

  // Toggle header background on scroll
  if (typeof window !== 'undefined') {
    const onScroll = () => { scrolled = window.scrollY > 24; };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const isActive = (href: string) => {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  };
</script>

<header
  class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
  class:bg-white={scrolled || mobileOpen}
  class:shadow-md={scrolled}
  class:py-2={scrolled}
  class:py-4={!scrolled}
>
  <div class="container-x flex items-center justify-between gap-4">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 group" aria-label={`${siteConfig.name} home`}>
      <span class="grid place-items-center w-10 h-10 rounded-xl bg-brand-700 text-white shadow-sm group-hover:bg-brand-800 transition-colors">
        <Icon name="home" class="w-5 h-5" />
      </span>
      <span class="flex flex-col leading-none">
        <span class="font-display font-bold text-lg text-stone-900">{siteConfig.name}</span>
        <span class="text-[11px] uppercase tracking-widest text-brand-700">Real Estate</span>
      </span>
    </a>

    <!-- Desktop nav -->
    <nav class="hidden lg:flex items-center gap-1">
      {#each navLinks as link (link.href)}
        <a
          href={link.href}
          class="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors
                 {isActive(link.href) ? 'text-brand-700' : 'text-stone-700 hover:text-brand-700'}"
        >
          {link.label}
          {#if isActive(link.href)}
            <span class="absolute left-4 right-4 -bottom-px h-0.5 rounded-full bg-brand-700"></span>
          {/if}
        </a>
      {/each}
    </nav>

    <!-- CTA + mobile toggle -->
    <div class="flex items-center gap-2">
      <a
        href="tel:{siteConfig.phone.replace(/[^+\d]/g, '')}"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-semibold
               hover:bg-brand-800 transition-colors shadow-sm"
      >
        <Icon name="phone" class="w-4 h-4" />
        <span class="hidden xl:inline">Call us</span>
        <span>{siteConfig.phone}</span>
      </a>
      <button
        type="button"
        class="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-stone-200 bg-white text-stone-700"
        onclick={() => (mobileOpen = !mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <Icon name={mobileOpen ? 'close' : 'menu'} class="w-5 h-5" />
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <nav class="lg:hidden mt-3 mx-4 rounded-2xl bg-white border border-stone-200 shadow-lg p-2 animate-scale-in">
      {#each navLinks as link (link.href)}
        <a
          href={link.href}
          onclick={() => (mobileOpen = false)}
          class="block px-4 py-3 rounded-xl text-base font-medium
                 {isActive(link.href) ? 'text-brand-700 bg-brand-50' : 'text-stone-800 hover:bg-stone-50'}"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="tel:{siteConfig.phone.replace(/[^+\d]/g, '')}"
        class="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-700 text-white font-semibold"
      >
        <Icon name="phone" class="w-4 h-4" />
        {siteConfig.phone}
      </a>
    </nav>
  {/if}
</header>

<!-- Spacer so content doesn't hide behind fixed header -->
<div class="h-20"></div>
