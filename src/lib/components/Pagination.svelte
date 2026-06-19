<script lang="ts">
  import Icon from './Icon.svelte';

  interface Props {
    page: number;
    totalPages: number;
    onpage: (n: number) => void;
  }
  let { page, totalPages, onpage }: Props = $props();

  // Build a compact page list (always show first, last, current ± 1)
  function pageList(): (number | ' ')[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | ' ')[] = [1];
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    if (start > 2) pages.push(' ');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push(' ');
    pages.push(totalPages);
    return pages;
  }
</script>

{#if totalPages > 1}
  <nav class="flex items-center justify-center gap-1.5 mt-10" aria-label="Pagination">
    <button
      type="button"
      onclick={() => onpage(Math.max(1, page - 1))}
      disabled={page === 1}
      class="grid place-items-center w-10 h-10 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      aria-label="Previous page"
    >
      <Icon name="chevron-left" class="w-5 h-5" />
    </button>

    {#each pageList() as p, i}
      {#if p === ' '}
        <span class="px-2 text-stone-400"> </span>
      {:else}
        <button
          type="button"
          onclick={() => onpage(p)}
          class="grid place-items-center min-w-10 h-10 px-3 rounded-lg text-sm font-medium transition-colors
                 {p === page ? 'bg-brand-700 text-white border border-brand-700' : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'}"
          aria-current={p === page ? 'page' : undefined}
        >
          {p}
        </button>
      {/if}
    {/each}

    <button
      type="button"
      onclick={() => onpage(Math.min(totalPages, page + 1))}
      disabled={page === totalPages}
      class="grid place-items-center w-10 h-10 rounded-lg border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      aria-label="Next page"
    >
      <Icon name="chevron-right" class="w-5 h-5" />
    </button>
  </nav>
{/if}
