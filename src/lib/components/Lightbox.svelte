<script lang="ts">
  import Icon from './Icon.svelte';

  interface Props {
    images: string[];
    open: boolean;
    index: number;
    onclose: () => void;
    onnavigate: (index: number) => void;
  }
  let { images, open, index, onclose, onnavigate }: Props = $props();

  function prev(e: Event) {
    e.stopPropagation();
    onnavigate((index - 1 + images.length) % images.length);
  }
  function next(e: Event) {
    e.stopPropagation();
    onnavigate((index + 1) % images.length);
  }

  function onKey(e: KeyboardEvent) {
    if (!open) return;
    if (e.key === 'Escape') onclose();
    if (e.key === 'ArrowLeft') onnavigate((index - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') onnavigate((index + 1) % images.length);
  }
</script>

<svelte:window onkeydown={onKey} />

{#if open}
  <div
    class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-up"
    onclick={onclose}
    role="dialog"
    aria-modal="true"
    aria-label="Image gallery"
  >
    <!-- Close button -->
    <button
      type="button"
      onclick={onclose}
      class="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      aria-label="Close gallery"
    >
      <Icon name="close" class="w-5 h-5" />
    </button>

    <!-- Prev -->
    {#if images.length > 1}
      <button
        type="button"
        onclick={prev}
        class="absolute left-2 sm:left-4 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Previous image"
      >
        <Icon name="chevron-left" class="w-6 h-6" />
      </button>
    {/if}

    <!-- Image -->
    <div class="max-w-6xl w-full" onclick={(e) => e.stopPropagation()}>
      <img
        src={images[index]}
        alt={`Image ${index + 1} of ${images.length}`}
        class="mx-auto max-h-[80vh] w-auto rounded-xl shadow-2xl animate-scale-in"
      />
      <div class="mt-4 flex items-center justify-center gap-2 text-white/80 text-sm">
        <span>{index + 1}</span>
        <span class="text-white/40">/</span>
        <span>{images.length}</span>
      </div>
    </div>

    <!-- Next -->
    {#if images.length > 1}
      <button
        type="button"
        onclick={next}
        class="absolute right-2 sm:right-4 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Next image"
      >
        <Icon name="chevron-right" class="w-6 h-6" />
      </button>
    {/if}

    <!-- Thumbnails -->
    {#if images.length > 1}
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto p-2" onclick={(e) => e.stopPropagation()}>
        {#each images as src, i (src)}
          <button
            type="button"
            onclick={() => onnavigate(i)}
            class="relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors
                   {i === index ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'}"
            aria-label={`View image ${i + 1}`}
          >
            <img src={src} alt="" class="w-full h-full object-cover" />
          </button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
