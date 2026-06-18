// ============================================================
// Core domain types for the Real Estate Services site
// ============================================================

export type PropertyStatus = 'for-sale' | 'for-rent' | 'sold' | 'new';
export type PropertyType = 'apartment' | 'house' | 'villa' | 'commercial' | 'land' | 'condo';
export type ListingKind = 'sale' | 'rent';

export interface Agent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  bio: string;
  listings: number;
  rating: number;
  socials?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: PropertyStatus;
  type: PropertyType;
  kind: ListingKind;
  price: number;            // in USD; for rent this is monthly
  location: {
    city: string;
    state: string;
    address: string;
    neighborhood?: string;
    lat?: number;
    lng?: number;
  };
  beds: number;
  baths: number;
  areaSqft: number;
  lotSqft?: number;
  yearBuilt: number;
  garage?: number;
  featured: boolean;
  agentId: string;
  images: string[];
  amenities: string[];
  features: string[];
  createdAt: string;        // ISO date
}

export interface Service {
  id: string;
  icon: string;             // SVG path key
  title: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];           // each entry is a paragraph
  cover: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;      // ISO date
  category: string;
  tags: string[];
  readingMinutes: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
