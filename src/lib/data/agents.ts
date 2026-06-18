import type { Agent } from '$lib/types';

export const agents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Amara Okonkwo',
    title: 'Senior Listing Agent',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f34?q=80&w=400&auto=format&fit=crop',
    phone: '+1 (415) 555-0142',
    email: 'amara@estate-services.example.com',
    bio: 'Amara has closed more than 320 transactions in the Bay Area over the last decade. She specializes in luxury homes and represents both buyers and sellers with a calm, data-driven approach.',
    listings: 42,
    rating: 4.9,
    socials: { linkedin: '#', instagram: '#' }
  },
  {
    id: 'agent-2',
    name: 'Daniel Reyes',
    title: 'Commercial Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    phone: '+1 (415) 555-0177',
    email: 'daniel@estate-services.example.com',
    bio: 'Daniel helps small businesses and investors find the right commercial footprint — from corner retail to mixed-use developments across Northern California.',
    listings: 28,
    rating: 4.8,
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'agent-3',
    name: 'Mei Lin',
    title: 'Buyer\u2019s Advocate',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    phone: '+1 (415) 555-0188',
    email: 'mei@estate-services.example.com',
    bio: 'Mei is known for relentless negotiation on behalf of first-time buyers and growing families. She walks clients through every step — financing, inspection, closing.',
    listings: 35,
    rating: 5.0,
    socials: { instagram: '#', linkedin: '#' }
  },
  {
    id: 'agent-4',
    name: 'Hassan Ali',
    title: 'Property Manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    phone: '+1 (415) 555-0163',
    email: 'hassan@estate-services.example.com',
    bio: 'Hassan oversees a portfolio of 180 rental units, keeping occupancy above 96% and tenants happy. He is your go-to for rental listings and lease renewals.',
    listings: 56,
    rating: 4.7,
    socials: { linkedin: '#' }
  }
];

export function getAgent(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}
