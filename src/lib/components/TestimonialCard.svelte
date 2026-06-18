<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Testimonial } from '$lib/types';

  interface Props {
    testimonial: Testimonial;
  }
  let { testimonial }: Props = $props();
</script>

<figure class="relative flex flex-col h-full p-7 rounded-2xl bg-white border border-stone-200 shadow-sm">
  <Icon name="quote" class="absolute top-5 right-5 w-10 h-10 text-brand-100" />
  <div class="flex items-center gap-1 text-gold-500">
    {#each Array(5) as _, i}
      <Icon name="star" class="w-4 h-4 {i < Math.round(testimonial.rating) ? 'text-gold-500' : 'text-stone-200'}" />
    {/each}
    <span class="ml-1.5 text-xs font-medium text-stone-500">{testimonial.rating.toFixed(1)}</span>
  </div>
  <blockquote class="mt-4 text-stone-700 leading-relaxed flex-1">
    \u201C{testimonial.quote}\u201D
  </blockquote>
  <figcaption class="mt-5 flex items-center gap-3">
    <img src={testimonial.avatar} alt={testimonial.name} class="w-11 h-11 rounded-full object-cover" loading="lazy" />
    <div>
      <div class="font-semibold text-stone-900">{testimonial.name}</div>
      <div class="text-xs text-stone-500">{testimonial.role}</div>
    </div>
  </figcaption>
</figure>
