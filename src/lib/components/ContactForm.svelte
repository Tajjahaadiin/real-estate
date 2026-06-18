<script lang="ts">
  import Icon from './Icon.svelte';
  import { siteConfig } from '$lib/data/siteConfig';

  interface Props {
    propertyTitle?: string;
    compact?: boolean;
  }
  let { propertyTitle, compact = false }: Props = $props();

  let form = $state({
    name: '',
    email: '',
    phone: '',
    interest: propertyTitle ? `Interested in: ${propertyTitle}` : 'General inquiry',
    message: propertyTitle ?? ''
  });

  let submitted = $state(false);
  let errors = $state<Record<string, string>>({});

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
    errors = e;
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: SubmitEvent) {
    ev.preventDefault();
    if (!validate()) return;
    // Static SSG demo — no backend; we simulate a successful submit.
    submitted = true;
  }
</script>

{#if submitted}
  <div class="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center animate-scale-in">
    <div class="mx-auto grid place-items-center w-14 h-14 rounded-full bg-brand-700 text-white mb-4">
      <Icon name="check" class="w-7 h-7" stroke={2.4} />
    </div>
    <h3 class="font-display text-xl font-bold text-stone-900">Thanks, {form.name.split(' ')[0]}!</h3>
    <p class="mt-2 text-stone-600 max-w-md mx-auto">
      Your message has been received. One of our agents will be in touch within one business day. For urgent matters, call us at <a href="tel:{siteConfig.phone.replace(/[^+\d]/g, '')}" class="font-semibold text-brand-700">{siteConfig.phone}</a>.
    </p>
    <button
      type="button"
      onclick={() => { submitted = false; form = { name: '', email: '', phone: '', interest: 'General inquiry', message: '' }; }}
      class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-200 text-brand-700 font-semibold hover:bg-brand-100 transition-colors"
    >
      <Icon name="arrow-left" class="w-4 h-4" />
      Send another
    </button>
  </div>
{:else}
  <form
    onsubmit={onSubmit}
    class="rounded-2xl bg-white border border-stone-200 shadow-sm p-6 sm:p-8 {compact ? '' : 'sm:p-8'}"
    novalidate
  >
    <div class="grid sm:grid-cols-2 gap-4">
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium text-stone-700">Full name <span class="text-red-500">*</span></span>
        <input
          type="text"
          bind:value={form.name}
          class="px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all"
          placeholder="Jane Doe"
        />
        {#if errors.name}<span class="text-xs text-red-600">{errors.name}</span>{/if}
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium text-stone-700">Email <span class="text-red-500">*</span></span>
        <input
          type="email"
          bind:value={form.email}
          class="px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all"
          placeholder="jane@example.com"
        />
        {#if errors.email}<span class="text-xs text-red-600">{errors.email}</span>{/if}
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium text-stone-700">Phone</span>
        <input
          type="tel"
          bind:value={form.phone}
          class="px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all"
          placeholder="(415) 555-0100"
        />
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="text-sm font-medium text-stone-700">I\u2019m interested in</span>
        <select
          bind:value={form.interest}
          class="px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white outline-none transition-all"
        >
          <option>General inquiry</option>
          <option>Buying a property</option>
          <option>Selling my home</option>
          <option>Renting</option>
          <option>Property management</option>
          <option>Free home valuation</option>
          <option>Investment advisory</option>
        </select>
      </label>
    </div>

    <label class="block mt-4 flex flex-col gap-1.5">
      <span class="text-sm font-medium text-stone-700">Message <span class="text-red-500">*</span></span>
      <textarea
        bind:value={form.message}
        rows="5"
        class="px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
        placeholder="Tell us a bit about what you\u2019re looking for\u2026"
      ></textarea>
      {#if errors.message}<span class="text-xs text-red-600">{errors.message}</span>{/if}
    </label>

    <button
      type="submit"
      class="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors shadow-sm"
    >
      Send message
      <Icon name="arrow-right" class="w-5 h-5" />
    </button>
    <p class="mt-3 text-center text-xs text-stone-500">
      By submitting this form you agree to our privacy policy. We\u2019ll never share your details.
    </p>
  </form>
{/if}
