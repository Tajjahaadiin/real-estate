<script lang="ts">
  import Icon from './Icon.svelte';
  import { siteConfig } from '$lib/data/siteConfig';

  interface Props {
    title?: string;
    subtitle?: string;
  }
  let {
    title = 'Ready to find your next place?',
    subtitle = 'Talk to a local agent who knows your market. No pressure, no obligation — just an honest conversation about what s possible.'
  }: Props = $props();
</script>

<section class="section-pad">
  <div class="container-x">
    <div class="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-12 sm:px-12 sm:py-16">
      <!-- Decorative shapes -->
      <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-600/40 blur-3xl"></div>
      <div class="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-brand-700/40 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.15),transparent_60%)]"></div>

      <div class="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="max-w-2xl">
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
          <p class="mt-4 text-brand-100 text-base sm:text-lg leading-relaxed">{subtitle}</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="/contact"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-800 font-semibold hover:bg-stone-100 transition-colors shadow-lg"
          >
            <Icon name="mail" class="w-5 h-5" />
            Get in touch
          </a>
          <a
            href="tel:{siteConfig.phone.replace(/[^+\d]/g, '')}"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-700/60 backdrop-blur text-white font-semibold border border-white/20 hover:bg-brand-700 transition-colors"
          >
            <Icon name="phone" class="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
