import type { SiteConfig } from '$lib/types';

export const siteConfig: SiteConfig = {
  name: 'Estate Services',
  tagline: 'Find your place. Live your story.',
  phone: '+1 (415) 555-0199',
  email: 'hello@estate-services.example.com',
  address: '450 Sutter Street, Suite 1200, San Francisco, CA 94108',
  hours: 'Mon–Fri 9am–6pm · Sat 10am–4pm',
  socials: {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/'
  }
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const stats = [
  { label: 'Properties listed', value: 1280, suffix: '+' },
  { label: 'Happy families', value: 940, suffix: '+' },
  { label: 'Cities covered', value: 36, suffix: '' },
  { label: 'Years of service', value: 18, suffix: '' }
];
