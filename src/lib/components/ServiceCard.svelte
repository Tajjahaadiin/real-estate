<script lang="ts">
  import Icon from './Icon.svelte';
  import type { IconName } from './Icon.svelte';
  import type { Service } from '$lib/types';

  interface Props {
    service: Service;
  }
  let { service }: Props = $props();
</script>

<article class="group relative flex flex-col p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300">
  <div class="grid place-items-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
    <Icon name={service.icon as IconName} class="w-6 h-6" />
  </div>
  <h3 class="mt-4 font-display text-lg font-semibold text-stone-900">{service.title}</h3>
  <p class="mt-2 text-sm text-stone-600 leading-relaxed">{service.description}</p>
  <ul class="mt-4 space-y-1.5">
    {#each service.highlights as h}
      <li class="flex items-start gap-2 text-sm text-stone-700">
        <Icon name="check" class="w-4 h-4 mt-0.5 text-brand-600 shrink-0" stroke={2.2} />
        {h}
      </li>
    {/each}
  </ul>
  <a href="/contact" class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all">
    Learn more
    <Icon name="arrow-right" class="w-4 h-4" />
  </a>
</article>
