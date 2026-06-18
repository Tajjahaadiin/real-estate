# Estate Services — SvelteKit

A static-site reinterpretation of the WordPress "Real Estate Services" theme, rebuilt with **SvelteKit (Svelte 5) + Tailwind CSS v4 + adapter-static** for SSG output.

## Stack

- **SvelteKit 2** with Svelte 5 (runes: `$state`, `$derived`, `$props`, `$effect`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no PostCSS config needed)
- **adapter-static** — outputs fully static HTML to `./build/`
- **TypeScript** throughout
- **Zero external UI deps** — all icons are inline SVG paths in `Icon.svelte`

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # emits static site to ./build/
npm run preview    # preview the built site locally
```

The `build/` directory is fully static — drop it on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any S3 bucket.

## Project structure

```
src/
├── app.css                       # Tailwind v4 @theme tokens + global styles
├── app.html                      # HTML shell
├── lib/
│   ├── components/               # 16 reusable Svelte 5 components
│   │   ├── Header.svelte         # Sticky nav + mobile menu
│   │   ├── Hero.svelte           # Homepage hero with quick-search form
│   │   ├── PropertyCard.svelte
│   │   ├── PropertyFilter.svelte # Advanced filter UI (URL-synced)
│   │   ├── Lightbox.svelte       # Keyboard-navigable image gallery
│   │   ├── ContactForm.svelte    # Validated form with success state
│   │   ├── Icon.svelte           # Inline-SVG icon library
│   │   └── ...
│   ├── data/                     # Static demo data (TS modules)
│   │   ├── properties.ts         # 12 listings with full specs + images
│   │   ├── agents.ts             # 4 agents with bios + ratings
│   │   ├── services.ts           # 6 services + 4 testimonials + 6 FAQs
│   │   ├── blogPosts.ts          # 6 long-form blog posts
│   │   └── siteConfig.ts         # Site name, contact, nav, stats
│   ├── types/index.ts            # Domain types
│   └── utils/format.ts           # Price/date/number formatters
└── routes/
    ├── +layout.svelte            # Shell with Header/Footer + global SEO
    ├── +layout.ts                # prerender = true (SSG)
    ├── +page.svelte              # Homepage
    ├── +error.svelte             # 404 page
    ├── properties/
    │   ├── +page.svelte          # Filterable list with pagination
    │   └── [slug]/
    │       ├── +page.ts          # Load by slug + entries() for prerender
    │       └── +page.svelte      # Detail with gallery + map + agent CTA
    ├── about/+page.svelte        # Story, values, timeline, team, FAQ
    ├── contact/+page.svelte      # Contact cards + form + map
    ├── blog/
    │   ├── +page.svelte          # Filterable list with featured post
    │   └── [slug]/+page.svelte   # Article detail
    ├── privacy/+page.svelte
    ├── terms/+page.svelte
    └── sitemap.xml/+server.ts    # Dynamic sitemap endpoint
```

## Features delivered

- **Working property search & filters** — keyword search, filter by listing type, property type, status, price range, beds, baths. Sort by newest / price / area. URL state syncs via `history.replaceState`. Pagination with smart page list.
- **Image lightbox** — keyboard-navigable (Arrow keys, Esc) with thumbnail strip.
- **Contact form** — client-side validation, success state, no backend required.
- **SEO setup** — per-page `<title>`, meta description, OG tags, Twitter card, canonical URL, `sitemap.xml`, `robots.txt`.
- **Animated stat counters** — count up on scroll via `IntersectionObserver`.
- **Responsive design** — mobile menu, responsive grids, sticky filter bar.
- **Pre-rendered detail pages** — all 12 properties and 6 blog posts emit as static HTML.

## Customizing

- **Colors**: edit the `@theme` block in `src/app.css`.
- **Data**: replace the static modules in `src/lib/data/` with API calls or CMS hooks.
- **Contact form backend**: the form currently simulates a successful submit. To wire up a real backend, replace the `onSubmit` handler in `ContactForm.svelte` with a `fetch()` call.
