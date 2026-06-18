<script lang="ts" module>
  // Lightweight inline-SVG icon helper, no external dependency.
  // Pass `name` and an optional `class` for sizing/color via currentColor.
  export type IconName =
    | 'home' | 'tag' | 'key' | 'building' | 'chart' | 'trend'
    | 'bed' | 'bath' | 'area' | 'garage' | 'pin' | 'calendar'
    | 'phone' | 'mail' | 'clock' | 'menu' | 'close' | 'arrow-right'
    | 'arrow-left' | 'chevron-left' | 'chevron-right' | 'star'
    | 'search' | 'check' | 'play' | 'shield' | 'heart' | 'twitter'
    | 'facebook' | 'instagram' | 'linkedin' | 'quote' | 'expand' | 'grid';
</script>

<script lang="ts">
  import type { IconName } from './Icon.svelte';
  interface Props {
    name: IconName;
    class?: string;
    stroke?: number;
  }
  let { name, class: cls = 'w-5 h-5', stroke = 1.6 }: Props = $props();

  // Each path uses stroke="currentColor" / fill="currentColor" so the SVG
  // inherits text color from its parent.
  const paths: Record<IconName, string> = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
    tag: '<path d="M3 7v5.6a2 2 0 0 0 .6 1.4l7.4 7.4a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8l-7.4-7.4A2 2 0 0 0 10.6 4H5a2 2 0 0 0-2 2Z"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/>',
    key: '<circle cx="8" cy="8" r="4"/><path d="m10.8 10.8 8 8M16 16l2-2M14 14l2-2"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
    chart: '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',
    trend: '<path d="m3 17 6-6 4 4 8-9"/><path d="M14 6h7v7"/>',
    bed: '<path d="M3 18V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M3 14h18M21 18v-4a2 2 0 0 0-2-2h-6"/><path d="M3 18v3M21 18v3"/>',
    bath: '<path d="M4 12V6a2 2 0 0 1 2-2c1 0 1.5.5 2 1M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 19v2M18 19v2"/>',
    area: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h4V3M21 15h-4v6"/>',
    garage: '<path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10"/><rect x="8" y="13" width="8" height="7"/>',
    pin: '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 9h18M8 3v4M16 3v4"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
    'arrow-left': '<path d="M19 12H5"/><path d="m11 19-7-7 7-7"/>',
    'chevron-left': '<path d="m15 6-6 6 6 6"/>',
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" fill="currentColor"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    play: '<path d="M7 4.5v15l12-7.5-12-7.5Z" fill="currentColor"/>',
    shield: '<path d="M12 3 5 6v6c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/>',
    twitter: '<path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.7v.5C8.4 9 5.2 7.3 3 4.7a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8 0 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3 11.3 11.3 0 0 0 8.1 20c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.5-1.3 2-2.2Z"/>',
    facebook: '<path d="M14 9h3l.5-3.5H14V3.7c0-1 .3-1.7 1.7-1.7H17V-1h-2.7C11.4-1 10 .8 10 3.4v2.1H7V9h3v9h4V9Z" transform="translate(0 4)"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.1M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" stroke-linecap="round"/>',
    quote: '<path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3H4m9-12h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3h-3" fill="currentColor"/>',
    expand: '<path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'
  };
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={stroke}
  stroke-linecap="round"
  stroke-linejoin="round"
  class={cls}
  aria-hidden="true"
><!-- HTML_START -->{@html paths[name]}<!-- HTML_END --></svg>
