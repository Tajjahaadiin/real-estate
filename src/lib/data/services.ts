import type { Service, Testimonial, FaqItem } from '$lib/types';

export const services: Service[] = [
  {
    id: 'svc-buy',
    icon: 'home',
    title: 'Buy a Property',
    description:
      'We match you with homes that fit your life — not just your budget. From first view to final signature, we negotiate hard and protect your interests at every step.',
    highlights: ['Pre-approval guidance', 'Off-market access', 'Inspection coordination']
  },
  {
    id: 'svc-sell',
    icon: 'tag',
    title: 'Sell Your Home',
    description:
      'Maximize your sale price with cinematic listing media, targeted digital marketing, and a pricing strategy backed by local comps and live buyer demand signals.',
    highlights: ['Pro photo + video tour', 'Pricing strategy', 'Multi-platform syndication']
  },
  {
    id: 'svc-rent',
    icon: 'key',
    title: 'Rent & Lease',
    description:
      'Find tenants fast — or find your next rental. We handle lease drafting, credit checks, and move-in coordination so you can skip the paperwork headache.',
    highlights: ['Tenant screening', 'Lease drafting', 'Maintenance dispatch']
  },
  {
    id: 'svc-manage',
    icon: 'building',
    title: 'Property Management',
    description:
      'Hands-off ownership. Our team collects rent, dispatches 24/7 maintenance, handles renewals, and sends you a clean monthly statement — all from one dashboard.',
    highlights: ['Rent collection', '24/7 maintenance', 'Monthly statements']
  },
  {
    id: 'svc-value',
    icon: 'chart',
    title: 'Free Home Valuation',
    description:
      'Curious what your home is worth today? Get a complimentary comparative market analysis built on recent sales, current listings, and neighborhood trends.',
    highlights: ['CMA report', 'Market trends', 'No obligation']
  },
  {
    id: 'svc-invest',
    icon: 'trend',
    title: 'Investment Advisory',
    description:
      'Build a portfolio that cash-flows. We model cap rates, ROI, and 5-year appreciation scenarios so you can compare deals with confidence before you commit.',
    highlights: ['Cap rate modeling', 'ROI projections', 'Portfolio review']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya & Karan Shah',
    role: 'First-time buyers · Mission District',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote:
      'Mei held our hand through every step of buying our first home — from a scary inspection report to a tight closing. We felt informed and supported the whole way.'
  },
  {
    id: 't2',
    name: 'Marcus Bell',
    role: 'Seller · Noe Valley',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote:
      'Amara priced our home perfectly. We had three offers in the first week and closed 8% over asking. The photo tour alone was worth the commission.'
  },
  {
    id: 't3',
    name: 'Lighthouse Cafe Co.',
    role: 'Commercial tenant · SoMa',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 4.5,
    quote:
      'Daniel found us a corner retail space with foot traffic we could only dream of. He negotiated a 6-month free-rent abatement that made our build-out possible.'
  },
  {
    id: 't4',
    name: 'Yuki Tanaka',
    role: 'Landlord · Outer Sunset',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote:
      'Hassan took over management of my fourplex and within two months had every unit rented at market rate. The monthly reports are clear and the repairs actually get done.'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'How do you price a property for sale?',
    answer:
      'We start with a comparative market analysis (CMA) that looks at recent sales of similar homes within the last 90 days, current competing listings, and your home s unique features. We then layer in market trends and buyer demand signals to land on a price that maximizes your return without leaving the home sitting stale.'
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We currently serve 36 cities across Northern California, with a particular depth in San Francisco, Oakland, Berkeley, San Jose, and the surrounding Peninsula. If you re looking outside our footprint, we can refer you to a vetted partner agent in your area.'
  },
  {
    question: 'Do you work with first-time buyers?',
    answer:
      'Absolutely — first-time buyers are some of our favorite clients. We  walk you through pre-approval, help you understand what you can actually afford, and stand by you at inspection and closing so nothing is a surprise.'
  },
  {
    question: 'How long does a typical transaction take?',
    answer:
      'A purchase usually takes 30\u201345 days from accepted offer to closing, depending on financing and inspection timelines. A sale can move faster — often 14\u201321 days from listing to accepted offer if priced correctly.'
  },
  {
    question: 'What does your property management service cost?',
    answer:
      'Our standard management fee is 8% of monthly collected rent, with no setup fee for portfolios under 10 units. Leasing fees are 75% of one month s rent and include full tenant screening, lease drafting, and move-in coordination.'
  },
  {
    question: 'Can I list my property for both sale and rent?',
    answer:
      'In most cases, no — but we can help you decide which path makes more financial sense for your situation. We  model both scenarios side by side so you can see the difference in short-term cash flow and long-term equity.'
  }
];
