<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Agent } from '$lib/types';

  interface Props {
    agent: Agent;
  }
  let { agent }: Props = $props();
</script>

<article class="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300">
  <div class="relative aspect-[4/5] overflow-hidden bg-stone-100">
    <img
      src={agent.avatar}
      alt={agent.name}
      loading="lazy"
      class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
      <div class="flex gap-2">
        {#if agent.socials?.linkedin}
          <a href={agent.socials.linkedin} class="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-brand-700 hover:bg-white" aria-label={`${agent.name} on LinkedIn`}>
            <Icon name="linkedin" class="w-4 h-4" />
          </a>
        {/if}
        {#if agent.socials?.instagram}
          <a href={agent.socials.instagram} class="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-brand-700 hover:bg-white" aria-label={`${agent.name} on Instagram`}>
            <Icon name="instagram" class="w-4 h-4" />
          </a>
        {/if}
        {#if agent.socials?.twitter}
          <a href={agent.socials.twitter} class="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-brand-700 hover:bg-white" aria-label={`${agent.name} on Twitter`}>
            <Icon name="twitter" class="w-4 h-4" />
          </a>
        {/if}
      </div>
    </div>
    <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-stone-800 backdrop-blur">
      {agent.listings} listings
    </div>
  </div>
  <div class="p-5">
    <h3 class="font-display text-lg font-semibold text-stone-900">{agent.name}</h3>
    <p class="text-sm text-brand-700 font-medium">{agent.title}</p>
    <p class="mt-2.5 text-sm text-stone-600 leading-relaxed line-clamp-3">{agent.bio}</p>
    <div class="mt-4 flex items-center gap-1 text-gold-500">
      <Icon name="star" class="w-4 h-4" />
      <span class="text-sm font-semibold text-stone-900">{agent.rating.toFixed(1)}</span>
      <span class="text-xs text-stone-500">rating</span>
    </div>
    <div class="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
      <a href="tel:{agent.phone.replace(/[^+\d]/g, '')}" class="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-stone-50 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors">
        <Icon name="phone" class="w-4 h-4" />
        Call
      </a>
      <a href="mailto:{agent.email}" class="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-stone-50 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors">
        <Icon name="mail" class="w-4 h-4" />
        Email
      </a>
    </div>
  </div>
</article>
