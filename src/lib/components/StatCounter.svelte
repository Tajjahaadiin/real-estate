<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
  }
  let { value, suffix = '', label, duration = 1500 }: Props = $props();

  let displayed = $state(0);
  let el: HTMLDivElement;

  onMount(() => {
    if (typeof window === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out
            const eased = 1 - Math.pow(1 - t, 3);
            displayed = Math.round(value * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<div bind:this={el} class="text-center">
  <div class="font-display text-4xl sm:text-5xl font-bold text-brand-700">
    {displayed.toLocaleString('en-US')}{suffix}
  </div>
  <div class="mt-2 text-sm uppercase tracking-wider text-stone-500">{label}</div>
</div>
