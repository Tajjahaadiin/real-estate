<script lang="ts">
  import Icon from './Icon.svelte';
  import { siteConfig, navLinks } from '$lib/data/siteConfig';
  import { stats } from '$lib/data/siteConfig';

  const year = new Date().getFullYear();
</script>

<footer class="bg-stone-900 text-stone-300 mt-16">
  <!-- Top stats strip -->
  <div class="border-b border-white/5">
    <div class="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
      {#each stats as s}
        <div class="text-center md:text-left">
          <div class="font-display text-3xl font-bold text-white">
            {s.value.toLocaleString('en-US')}{s.suffix}
          </div>
          <div class="mt-1 text-xs uppercase tracking-wider text-stone-400">{s.label}</div>
        </div>
      {/each}
    </div>
  </div>

  <div class="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
    <!-- Brand -->
    <div>
      <div class="flex items-center gap-2.5">
        <span class="grid place-items-center w-10 h-10 rounded-xl bg-brand-700 text-white">
          <Icon name="home" class="w-5 h-5" />
        </span>
        <span class="font-display font-bold text-lg text-white">{siteConfig.name}</span>
      </div>
      <p class="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
        A San Francisco–based brokerage helping families and investors buy, sell, rent, and manage property across Northern California since 2007.
      </p>
      <div class="mt-5 flex items-center gap-2">
        <a href={siteConfig.socials.twitter} aria-label="Twitter" class="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 transition-colors"><Icon name="twitter" class="w-4 h-4" /></a>
        <a href={siteConfig.socials.facebook} aria-label="Facebook" class="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 transition-colors"><Icon name="facebook" class="w-4 h-4" /></a>
        <a href={siteConfig.socials.instagram} aria-label="Instagram" class="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 transition-colors"><Icon name="instagram" class="w-4 h-4" /></a>
        <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" class="grid place-items-center w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 transition-colors"><Icon name="linkedin" class="w-4 h-4" /></a>
      </div>
    </div>

    <!-- Nav -->
    <div>
      <h4 class="font-display text-sm font-semibold text-white uppercase tracking-wider">Explore</h4>
      <ul class="mt-4 space-y-2 text-sm">
        {#each navLinks as link (link.href)}
          <li><a href={link.href} class="text-stone-400 hover:text-brand-300 link-underline">{link.label}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Services -->
    <div>
      <h4 class="font-display text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
      <ul class="mt-4 space-y-2 text-sm text-stone-400">
        <li><a href="/properties?kind=sale" class="hover:text-brand-300 link-underline">Buy a Property</a></li>
        <li><a href="/about" class="hover:text-brand-300 link-underline">Sell Your Home</a></li>
        <li><a href="/properties?kind=rent" class="hover:text-brand-300 link-underline">Rent &amp; Lease</a></li>
        <li><a href="/about" class="hover:text-brand-300 link-underline">Property Management</a></li>
        <li><a href="/contact" class="hover:text-brand-300 link-underline">Free Home Valuation</a></li>
        <li><a href="/blog" class="hover:text-brand-300 link-underline">Investment Advisory</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h4 class="font-display text-sm font-semibold text-white uppercase tracking-wider">Get in touch</h4>
      <ul class="mt-4 space-y-3 text-sm">
        <li class="flex items-start gap-3">
          <Icon name="pin" class="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
          <span class="text-stone-400">{siteConfig.address}</span>
        </li>
        <li class="flex items-center gap-3">
          <Icon name="phone" class="w-4 h-4 text-brand-400 shrink-0" />
          <a href="tel:{siteConfig.phone.replace(/[^+\d]/g, '')}" class="text-stone-400 hover:text-brand-300">{siteConfig.phone}</a>
        </li>
        <li class="flex items-center gap-3">
          <Icon name="mail" class="w-4 h-4 text-brand-400 shrink-0" />
          <a href="mailto:{siteConfig.email}" class="text-stone-400 hover:text-brand-300">{siteConfig.email}</a>
        </li>
        <li class="flex items-start gap-3">
          <Icon name="clock" class="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
          <span class="text-stone-400">{siteConfig.hours}</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Bottom bar -->
  <div class="border-t border-white/5">
    <div class="container-x flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-stone-500">
      <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a href="/privacy" class="hover:text-brand-300">Privacy</a>
        <a href="/terms" class="hover:text-brand-300">Terms</a>
        <a href="/sitemap.xml" class="hover:text-brand-300">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
