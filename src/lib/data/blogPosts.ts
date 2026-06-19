import type { BlogPost } from '$lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'b-001',
    slug: 'san-francisco-housing-outlook-2025',
    title: 'San Francisco Housing Outlook: What 2025 Has in Store',
    excerpt:
      'Inventory is loosening, rates are settling, and buyers are regaining leverage. Here s our take on what the rest of the year looks like.',
    body: [
      'After three years of historically tight inventory and bidding-war chaos, San Francisco s housing market is finding a new rhythm in 2025. The number of active listings is up roughly 14% year-over-year, days-on-market has stretched to a median of 31 days, and the share of homes selling above asking has dropped from 68% to 41%.',
      'None of this means prices are collapsing. The median sale price for a single-family home in the city held at $1.58 million through the first quarter. But the new balance means buyers have time to inspect, negotiate, and walk away   luxuries that essentially did not exist from 2021 through 2023.',
      'Three forces are shaping the outlook. First, mortgage rates appear to have settled in the high-5s to low-6s range, giving buyers a more predictable monthly payment to underwrite against. Second, condo inventory is rising faster than house inventory, partly because of new construction deliveries in Mission Bay and SoMa. Third, tech-sector hiring has stabilized, removing a key tailwind from the high end of the market.',
      'For sellers, the message is clear: price right the first time. Buyers now have options and will not engage with homes that look like stretches on price. For buyers, the window is open   you can negotiate, you can ask for credits, and you can take your time. We expect this balance to hold through the third quarter, with a possible late-year tightening if rates drop further.'
    ],
    cover: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    author: 'Amara Okonkwo',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    publishedAt: '2025-05-28T09:00:00.000Z',
    category: 'Market Trends',
    tags: ['San Francisco', 'Outlook', '2025'],
    readingMinutes: 5
  },
  {
    id: 'b-002',
    slug: 'prepping-your-home-for-sale-checklist',
    title: 'The Pre-Sale Checklist: 12 Things to Do Before the Photographer Arrives',
    excerpt:
      'A practical, room-by-room checklist that pays for itself in sale price. Most of these you can do in a weekend.',
    body: [
      'Great listing photos sell homes. Period. Homes listed with professional photography sell faster and for more money than those listed with phone snapshots   the gap is often 3\u20137% on the final sale price. But even the best photographer can t fix clutter, bad lighting, or weird smells. That s on you.',
      'Start outside. Trim hedges back from the front of the house, sweep the walkway, and put away the trash bins. If the front door paint is chipped, a $40 quart of paint and an hour of your time will return tenfold in curb appeal. Add a fresh doormat and a potted plant.',
      'Inside, work room by room. Declutter every horizontal surface   counters, tables, the top of the fridge. Remove at least a third of what s in every closet (buyers open them). Take down family photos so buyers can picture themselves in the space. Patch nail holes, touch up scuffs, and replace any burnt-out bulbs   with matching color-temperature bulbs across the whole house.',
      'In the kitchen, clear the counters completely except for one or two styled items (a wooden bowl, a cookbook). In the bathroom, fold towels neatly, put out a fresh bar of soap, and close the toilet lid. In the bedroom, make the bed with a neutral duvet and stash nightstand items in a drawer. Burn a vanilla candle for an hour before the shoot (then blow it out   never leave it lit for the photographer).',
      'Finally, walk out to the sidewalk and look at the house as a stranger would. You  catch the last little things   a stray hose, a faded flag, a kid s bike. Handle those, and you re ready to hand the keys to the photographer.'
    ],
    cover: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop',
    author: 'Mei Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    publishedAt: '2025-05-14T10:30:00.000Z',
    category: 'For Sellers',
    tags: ['Checklist', 'Staging', 'Photography'],
    readingMinutes: 6
  },
  {
    id: 'b-003',
    slug: 'first-time-buyer-financing-101',
    title: 'Financing 101: What First-Time Buyers Actually Need to Know',
    excerpt:
      'Pre-approval vs. pre-qualification, the real cost of points, and why your rate quote isn t the whole story.',
    body: [
      'Most first-time buyers we work with come in with one number in mind: the interest rate they saw on a headline somewhere. The actual cost of borrowing is more nuanced, and understanding a few concepts up front will save you thousands over the life of the loan.',
      'First, know the difference between pre-qualification and pre-approval. Pre-qualification is a quick back-of-the-napkin estimate based on numbers you self-report. Pre-approval is a lender s verified commitment after reviewing your credit, income, and assets. Sellers in the Bay Area will not look at an offer without a pre-approval letter   it signals you are a serious, vetted buyer.',
      'Second, understand points. A point is 1% of the loan amount paid upfront to lower your rate, typically by 0.25%. Whether paying points makes sense depends on how long you plan to stay in the home. If you expect to move or refinance within five years, skip the points. If this is your forever home, paying a point or two can save you tens of thousands over a 30-year loan.',
      'Third, your quoted rate is not the whole story. Lenders also charge an annual percentage rate (APR) that folds in fees   origination, points, mortgage insurance. Comparing APRs across lenders is the only apples-to-apples comparison. Get quotes from at least three: a big bank, a credit union, and a mortgage broker.',
      'Finally, budget for the things people forget: closing costs (typically 2\u20135% of the purchase price), the first year of property taxes and insurance paid upfront, moving costs, and a cash buffer for the inevitable first-month repairs. We help our clients build this full picture before they start shopping.'
    ],
    cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop',
    author: 'Mei Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    publishedAt: '2025-04-30T08:00:00.000Z',
    category: 'For Buyers',
    tags: ['Financing', 'First-time buyers', 'Mortgage'],
    readingMinutes: 7
  },
  {
    id: 'b-004',
    slug: 'is-an-adu-right-for-your-property',
    title: 'Is an ADU Right for Your Property? A Bay Area Owner s Guide',
    excerpt:
      'Accessory dwelling units can add rental income and property value   but they re not a fit for every lot. Here s how to decide.',
    body: [
      'Accessory dwelling units (ADUs)   also called in-law units, granny flats, or backyard cottages   have become one of the most popular ways for Bay Area homeowners to add rental income, house multi-generational family, or simply increase property value. California has steadily eased ADU rules since 2017, and most single-family lots in San Francisco, Oakland, and Berkeley are now eligible.',
      'The first question to ask is whether your lot can physically accommodate one. You need a backyard or side yard with enough footprint for a 400\u2013800 sqft structure while preserving setback rules (typically 4 feet from side and rear lot lines). Sloped lots, lots with mature trees you want to keep, and lots with poor soil drainage all add complexity and cost.',
      'Next, think about utilities. An ADU needs its own kitchen and bathroom, which means tying into the main house s water, sewer, gas, and electrical   or, in some cases, running new lines. If your main sewer line is at the front of the property and the ADU will sit at the back, the connection cost can balloon.',
      'Budget realistically. A detached ADU in the Bay Area runs $300\u2013$500 per square foot, all-in, with permitting and utility hookups. A 600 sqft one-bedroom ADU is typically $200k\u2013$300k. Prefab options can trim 15\u201320% off that, but with less design flexibility.',
      'The payoff is real. A well-built ADU in a desirable San Francisco neighborhood can rent for $2,500\u2013$4,000 per month, and appraisers typically value the ADU at 10\u201320x annual rent when the property is sold. We help owners model the cash flow and ROI before they commit.'
    ],
    cover: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    author: 'Hassan Ali',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    publishedAt: '2025-04-18T09:30:00.000Z',
    category: 'Investing',
    tags: ['ADU', 'Rental income', 'Permitting'],
    readingMinutes: 6
  },
  {
    id: 'b-005',
    slug: 'neighborhood-spotlight-glen-park',
    title: 'Neighborhood Spotlight: Why Glen Park Keeps Winning Buyers Over',
    excerpt:
      'A village feel two BART stops from downtown, with great restaurants and surprisingly approachable prices.',
    body: [
      'Glen Park is the rare San Francisco neighborhood that feels like its own small town while still being minutes from downtown. Two BART stops from the Financial District, walkable to everything you need, and bordered by open space on three sides, it has quietly become one of the most sought-after neighborhoods for buyers priced out of Noe Valley and Cole Valley.',
      'The heart of the neighborhood is the Glen Park village   a four-block cluster of restaurants, cafes, a wine bar, a bookshop, and a small grocery. On weekend mornings you  see the same faces at Coffee Bar, and by evening the sidewalks fill with diners heading to Gialina, Manu, or Nook. The vibe is neighborly in a way that s increasingly rare in the city.',
      'Outdoor access is a major draw. Glen Canyon Park   60 acres of rugged open space with hiking trails, rock climbing, and a community recreation center   sits in the middle of the neighborhood. The newly opened Bernal Cutlerland path connects Glen Park to Bernal Heights and the Mission by bike in 12 minutes.',
      'Housing stock is mostly single-family homes and small multi-unit buildings, with a median sale price around $1.3M   meaningfully less than Noe Valley ($2.4M) or Cole Valley ($1.9M). The trade-off is inventory: only 15\u201320 homes typically list per year, so buyers need to be patient and ready to move when the right one comes up.',
      'If you re looking for a quiet, walkable, transit-connected neighborhood with a real community feel, Glen Park deserves a spot on your shortlist. We d be happy to set you up with a listing alert for the neighborhood.'
    ],
    cover: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop',
    author: 'Daniel Reyes',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    publishedAt: '2025-04-05T11:00:00.000Z',
    category: 'Neighborhoods',
    tags: ['Glen Park', 'San Francisco', 'Spotlight'],
    readingMinutes: 5
  },
  {
    id: 'b-006',
    slug: 'investment-property-cap-rates-explained',
    title: 'Cap Rates, Cash-on-Cash, and the Math That Actually Matters',
    excerpt:
      'Two numbers tell you most of what you need to know about a rental investment   here s how to calculate them honestly.',
    body: [
      'When we sit down with investors evaluating a rental purchase, two numbers do most of the work: the capitalization rate (cap rate) and the cash-on-cash return. Both are simple to calculate and brutally honest about whether a deal actually pencils.',
      'Cap rate is the property s net operating income (NOI) divided by the purchase price. NOI is gross scheduled rent minus operating expenses   property taxes, insurance, maintenance, property management, and a vacancy factor. It does not include mortgage payments. A property with $60,000 in annual NOI purchased for $1M has a 6% cap rate. In the Bay Area, cap rates for residential rentals typically run 3.5\u20135.5%; commercial is higher.',
      'Cash-on-cash return is what hits your actual bank account. Take annual cash flow after debt service and divide it by the cash you put in (down payment + closing costs + initial repairs). If you put $300k into a $1.4M purchase and clear $18k in year-one cash flow, your cash-on-cash return is 6%. This is the number that tells you whether the deal works for your specific financing.',
      'Both numbers depend entirely on the inputs you use. The most common mistake is underestimating expenses   especially maintenance and vacancy. We recommend using a 5% vacancy factor and 1.5% of property value per year for maintenance, even on newer buildings. Anything lower is a fantasy.',
      'Finally, cap rate and cash-on-cash are just year-one snapshots. The real return on a rental investment includes appreciation, principal pay-down by your tenant, and depreciation tax benefits. We model all five over a 5- and 10-year horizon for clients considering a purchase. The math that matters is the math that includes the whole picture.'
    ],
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    author: 'Daniel Reyes',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    publishedAt: '2025-03-22T13:00:00.000Z',
    category: 'Investing',
    tags: ['Cap rate', 'ROI', 'Investment'],
    readingMinutes: 8
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3, excludeSlug?: string): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== excludeSlug)
    .slice()
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit);
}
