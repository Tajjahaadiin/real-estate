import type { Property } from '$lib/types';

// 12 sample properties spread across types, statuses, and price points.
// Images are Unsplash photo IDs (CDN-served, stable).
export const properties: Property[] = [
  {
    id: 'p-001',
    slug: 'sunlit-mission-victorian',
    title: 'Sunlit Mission Victorian',
    description:
      'Restored 1908 Victorian with original mouldings, modern kitchen, and a south-facing garden.',
    longDescription:
      'This three-bedroom Victorian has been lovingly restored over the last decade, preserving its bay windows, picture rails, and pocket doors while introducing a chef\u2019s kitchen, radiant-floor heat, and a fully permitted rear addition. The south-facing garden gets sun all afternoon and has a detached studio perfect for a home office or guest suite.',
    status: 'for-sale',
    type: 'house',
    kind: 'sale',
    price: 1850000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '742 Valencia Street',
      neighborhood: 'Mission District',
      lat: 37.7599,
      lng: -122.4214
    },
    beds: 3,
    baths: 2.5,
    areaSqft: 2150,
    lotSqft: 2950,
    yearBuilt: 1908,
    garage: 1,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['South-facing garden', 'Detached studio', 'Radiant floor heat', 'Chef\u2019s kitchen'],
    features: ['Renovated kitchen', 'Hardwood floors', 'Forced air', 'Tankless water heater', 'Smart thermostat'],
    createdAt: '2025-04-12T09:00:00.000Z'
  },
  {
    id: 'p-002',
    slug: 'rincon-hill-skyline-condo',
    title: 'Rincon Hill Skyline Condo',
    description: 'Corner-unit 2BR condo with floor-to-ceiling windows and Bay Bridge views.',
    longDescription:
      'Perched on the 32nd floor of the premier Rincon Hill tower, this corner two-bedroom offers unobstructed views of the Bay Bridge and the Ferry Building clocktower. Building amenities include 24-hour concierge, rooftop deck, fitness center, and a private owners\u2019 lounge. HOA covers water, trash, and seismic insurance.',
    status: 'for-sale',
    type: 'condo',
    kind: 'sale',
    price: 1295000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '455 Main Street, #3202',
      neighborhood: 'Rincon Hill',
      lat: 37.7879,
      lng: -122.393
    },
    beds: 2,
    baths: 2,
    areaSqft: 1180,
    yearBuilt: 2009,
    garage: 1,
    featured: true,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Bay Bridge views', '24hr concierge', 'Rooftop deck', 'Fitness center', 'EV charging'],
    features: ['In-unit laundry', 'Central air', 'Stainless appliances', 'Hardwood floors'],
    createdAt: '2025-05-02T12:00:00.000Z'
  },
  {
    id: 'p-003',
    slug: 'noe-valley-family-home',
    title: 'Noe Valley Family Home',
    description: 'Four-bedroom Craftsman with finished basement and a flat rear yard.',
    longDescription:
      'A turnkey family home on one of Noe Valley\u2019s sunniest blocks. The main level has a flowing living-dining-kitchen layout with bay views from the front parlor. Downstairs is a fully finished basement with a separate entrance — ideal for an au pair suite or income unit. Walk to 24th Street shops in five minutes.',
    status: 'for-sale',
    type: 'house',
    kind: 'sale',
    price: 2450000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '1240 Sanchez Street',
      neighborhood: 'Noe Valley',
      lat: 37.751,
      lng: -122.4337
    },
    beds: 4,
    baths: 3,
    areaSqft: 2880,
    lotSqft: 2475,
    yearBuilt: 1923,
    garage: 2,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd311?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Finished basement', 'Separate entrance', 'Flat rear yard', 'Bay views'],
    features: ['Renovated kitchen', 'Dual-zone HVAC', 'Solar panels', 'Two-car garage'],
    createdAt: '2025-05-18T08:30:00.000Z'
  },
  {
    id: 'p-004',
    slug: 'soma-loft-creative-studio',
    title: 'SoMa Loft — Creative Studio',
    description: 'Industrial loft with 14ft ceilings, polished concrete, and a private deck.',
    longDescription:
      'A live/work loft in the heart of SoMa, two blocks from Caltrain. Soaring 14-foot ceilings, oversized factory windows, polished concrete floors, and an open floor plan that adapts from studio to home with ease. The private rear deck is perfect for evening hangs. Zoned for live/work with a small home business.',
    status: 'for-rent',
    type: 'apartment',
    kind: 'rent',
    price: 4200,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '415 Bryant Street, #3',
      neighborhood: 'SoMa',
      lat: 37.7806,
      lng: -122.393
    },
    beds: 1,
    baths: 1,
    areaSqft: 1085,
    yearBuilt: 1998,
    garage: 0,
    featured: true,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Private deck', '14ft ceilings', 'In-unit laundry', 'Bike storage'],
    features: ['Concrete floors', 'Factory windows', 'Stainless appliances', 'Walk to Caltrain'],
    createdAt: '2025-05-22T10:00:00.000Z'
  },
  {
    id: 'p-005',
    slug: 'pacific-heights-mansion',
    title: 'Pacific Heights Mansion',
    description: 'Grand 7BR estate with bay views, elevator, and a coach house.',
    longDescription:
      'A landmark Pacific Heights estate sited on a double lot with sweeping Golden Gate and Bay views. Original 1912 detailing — coffered ceilings, marble fireplaces, stained glass — paired with a fully modernized infrastructure including an elevator, smart home automation, and a four-car garage. The south garden opens to a charming coach house with a one-bedroom apartment.',
    status: 'for-sale',
    type: 'villa',
    kind: 'sale',
    price: 12500000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '2700 Broadway',
      neighborhood: 'Pacific Heights',
      lat: 37.7924,
      lng: -122.4383
    },
    beds: 7,
    baths: 7.5,
    areaSqft: 11400,
    lotSqft: 9800,
    yearBuilt: 1912,
    garage: 4,
    featured: true,
    agentId: 'agent-1',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Bay & GG views', 'Elevator', 'Coach house', 'Wine cellar', 'Four-car garage'],
    features: ['Smart home automation', 'Coffered ceilings', 'Marble fireplaces', 'Stained glass'],
    createdAt: '2025-04-30T15:00:00.000Z'
  },
  {
    id: 'p-006',
    slug: 'hayes-garden-apartment',
    title: 'Hayes Valley Garden Apartment',
    description: 'Two-bedroom garden unit steps from Hayes Valley shops and dining.',
    longDescription:
      'A bright garden-level two-bedroom with private entrance in a beautifully maintained Edwardian. South-facing windows bring all-day sun, and the shared rear garden is yours to enjoy. Walk to Patricia\u2019s Green, NOPA, and the new Hayes Valley pedestrian zone in minutes.',
    status: 'for-rent',
    type: 'apartment',
    kind: 'rent',
    price: 3500,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '612 Linden Street',
      neighborhood: 'Hayes Valley',
      lat: 37.7765,
      lng: -122.4235
    },
    beds: 2,
    baths: 1,
    areaSqft: 950,
    yearBuilt: 1910,
    garage: 0,
    featured: false,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Private entrance', 'Shared garden', 'Pet friendly', 'Street parking permit'],
    features: ['South-facing windows', 'Original hardwood', 'Gas range', 'Window coverings included'],
    createdAt: '2025-05-25T11:30:00.000Z'
  },
  {
    id: 'p-007',
    slug: 'berkeley-hills-modern',
    title: 'Berkeley Hills Modern',
    description: 'Mid-century inspired 4BR with cantilevered deck and Golden Gate views.',
    longDescription:
      'Perched high in the Berkeley Hills, this 2019 modern build by a local architect frames the Golden Gate through every west-facing window. An open great room flows to a cantilevered deck, and the lower level has a media room plus a private guest suite with its own entrance. Solar + battery backup keep the lights on.',
    status: 'new',
    type: 'house',
    kind: 'sale',
    price: 3195000,
    location: {
      city: 'Berkeley',
      state: 'CA',
      address: '880 The Uplands',
      neighborhood: 'Claremont',
      lat: 37.8456,
      lng: -122.2412
    },
    beds: 4,
    baths: 3.5,
    areaSqft: 3120,
    lotSqft: 6800,
    yearBuilt: 2019,
    garage: 2,
    featured: true,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472556-e636c2acda88?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75d?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['GG views', 'Cantilevered deck', 'Media room', 'Guest suite', 'Solar + battery'],
    features: ['Radiant floor heat', 'Triple-pane windows', 'EV charging', 'Smart home automation'],
    createdAt: '2025-05-20T13:45:00.000Z'
  },
  {
    id: 'p-008',
    slug: 'oakland-temescal-duplex',
    title: 'Oakland Temescal Duplex',
    description: 'Cash-flowing 2-unit investment property near Temescal shops and BART.',
    longDescription:
      'A turnkey two-unit investment property three blocks from Temescal restaurants and a short walk to MacArthur BART. Both units are renovated with new kitchens and baths; the upper unit is currently leased at $3,200 and the lower at $2,800. A detached garage presents ADU potential (buyer to verify).',
    status: 'for-sale',
    type: 'commercial',
    kind: 'sale',
    price: 1395000,
    location: {
      city: 'Oakland',
      state: 'CA',
      address: '421 42nd Street',
      neighborhood: 'Temescal',
      lat: 37.8344,
      lng: -122.2608
    },
    beds: 4,
    baths: 2,
    areaSqft: 2600,
    lotSqft: 5000,
    yearBuilt: 1922,
    garage: 2,
    featured: false,
    agentId: 'agent-2',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a42ad1c5?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Two units', 'Detached garage', 'ADU potential', 'Walk to BART'],
    features: ['Renovated kitchens', 'Separate meters', 'Long-term tenants', 'Strong rent roll'],
    createdAt: '2025-04-28T09:15:00.000Z'
  },
  {
    id: 'p-009',
    slug: 'mission-bay-penthouse',
    title: 'Mission Bay Penthouse',
    description: 'Top-floor 3BR penthouse with private roof terrace and Chase Center views.',
    longDescription:
      'The crown jewel of the building — a top-floor three-bedroom penthouse with a private 600 sqft roof terrace overlooking Chase Center and the Bay. Wide-plank oak floors throughout, a chef\u2019s kitchen with paneled appliances, and a primary suite with a steam shower and walk-in closet. Two deeded parking spaces and a large storage unit included.',
    status: 'sold',
    type: 'condo',
    kind: 'sale',
    price: 3250000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '690 Terry Francois Blvd, PH',
      neighborhood: 'Mission Bay',
      lat: 37.7705,
      lng: -122.3886
    },
    beds: 3,
    baths: 3,
    areaSqft: 2150,
    yearBuilt: 2018,
    garage: 2,
    featured: false,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Private roof terrace', 'Chase Center views', 'Two parking spaces', 'Storage unit'],
    features: ['Panelled appliances', 'Wide-plank oak', 'Steam shower', 'Walk-in closet'],
    createdAt: '2025-03-18T14:00:00.000Z'
  },
  {
    id: 'p-010',
    slug: 'sunset-corner-retail',
    title: 'Sunset Corner Retail Space',
    description: 'High-visibility 1,800 sqft retail suite on a busy corner.',
    longDescription:
      'A rare corner retail opportunity on Irving Street with two glass storefronts, excellent foot traffic, and a loyal neighborhood customer base. Suite is delivered vanilla shell with ADA-compliant restroom and a small back-of-house storage area. Landlord is open to tenant improvement allowance for qualified tenants with 5+ year leases.',
    status: 'for-rent',
    type: 'commercial',
    kind: 'rent',
    price: 6800,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '1224 Irving Street',
      neighborhood: 'Outer Sunset',
      lat: 37.7632,
      lng: -122.4719
    },
    beds: 0,
    baths: 1,
    areaSqft: 1800,
    yearBuilt: 1948,
    garage: 0,
    featured: false,
    agentId: 'agent-2',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Corner exposure', 'Two glass storefronts', 'ADA restroom', 'Storage area'],
    features: ['Vanilla shell', 'TI allowance available', 'High foot traffic', 'Easy Muni access'],
    createdAt: '2025-05-12T09:00:00.000Z'
  },
  {
    id: 'p-011',
    slug: 'glen-park-cottage',
    title: 'Glen Park Cottage',
    description: 'Charming 2BR cottage steps from Glen Park village and BART.',
    longDescription:
      'A storybook cottage on a quiet lane just two blocks from Glen Park village and BART. The 1920 home has a sun-soaked living room with a working fireplace, a remodeled kitchen with a breakfast nook, and a private rear patio with mature plantings. Perfect for a first-time buyer or as a city pied-\u00e0-terre.',
    status: 'for-sale',
    type: 'house',
    kind: 'sale',
    price: 1295000,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '50 Lippard Avenue',
      neighborhood: 'Glen Park',
      lat: 37.7408,
      lng: -122.4338
    },
    beds: 2,
    baths: 1,
    areaSqft: 1150,
    lotSqft: 2500,
    yearBuilt: 1920,
    garage: 0,
    featured: false,
    agentId: 'agent-3',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Working fireplace', 'Private patio', 'Walk to BART', 'Quiet lane'],
    features: ['Remodeled kitchen', 'Original details', 'Forced air heat', 'New roof 2023'],
    createdAt: '2025-05-15T10:30:00.000Z'
  },
  {
    id: 'p-012',
    slug: 'marina-waterfront-loft',
    title: 'Marina Waterfront Loft',
    description: '1BR waterfront loft with Marina Green and Golden Gate views.',
    longDescription:
      'A rare one-bedroom loft directly on the Marina waterfront with unobstructed views of the Golden Gate Bridge, Alcatraz, and the Marina Green. Floor-to-ceiling windows, a sleek modern kitchen, and a private balcony. Building amenities include a fitness center, residents\u2019 lounge, and secure parking.',
    status: 'for-rent',
    type: 'condo',
    kind: 'rent',
    price: 5400,
    location: {
      city: 'San Francisco',
      state: 'CA',
      address: '3450 Marina Boulevard',
      neighborhood: 'Marina District',
      lat: 37.8059,
      lng: -122.4397
    },
    beds: 1,
    baths: 1,
    areaSqft: 980,
    yearBuilt: 2001,
    garage: 1,
    featured: false,
    agentId: 'agent-4',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop'
    ],
    amenities: ['Waterfront views', 'Private balcony', 'Fitness center', 'Secure parking'],
    features: ['Floor-to-ceiling windows', 'Sleek kitchen', 'In-unit laundry', 'Central air'],
    createdAt: '2025-05-24T14:00:00.000Z'
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(limit = 6): Property[] {
  return properties.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProperties(current: Property, limit = 3): Property[] {
  return properties
    .filter((p) => p.id !== current.id && (p.type === current.type || p.location.city === current.location.city))
    .slice(0, limit);
}

export const propertyTypeLabels: Record<Property['type'], string> = {
  apartment: 'Apartment',
  house: 'House',
  villa: 'Villa',
  commercial: 'Commercial',
  land: 'Land',
  condo: 'Condo'
};

export const propertyStatusLabels: Record<Property['status'], string> = {
  'for-sale': 'For Sale',
  'for-rent': 'For Rent',
  sold: 'Sold',
  new: 'New'
};

export const propertyStatusBadge: Record<Property['status'], string> = {
  'for-sale': 'bg-brand-700 text-white',
  'for-rent': 'bg-gold-500 text-stone-900',
  sold: 'bg-stone-500 text-white',
  new: 'bg-emerald-600 text-white'
};
