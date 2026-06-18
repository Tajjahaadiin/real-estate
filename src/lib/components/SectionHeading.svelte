<script lang="ts">
  interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
  }
  let { eyebrow, title, subtitle, align = 'center', light = false }: Props = $props();
</script>

<div class="max-w-2xl {align === 'center' ? 'mx-auto text-center' : ''}">
  {#if eyebrow}
    <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-700 {light ? '!text-brand-300' : ''}">
      <span class="h-px w-6 bg-current opacity-50"></span>
      {eyebrow}
    </span>
  {/if}
  <h2 class="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight {light ? 'text-white' : 'text-stone-900'}">
    {title}
  </h2>
  {#if subtitle}
    <p class="mt-4 text-base sm:text-lg leading-relaxed {light ? 'text-stone-300' : 'text-stone-600'}">{subtitle}</p>
  {/if}
</div>
