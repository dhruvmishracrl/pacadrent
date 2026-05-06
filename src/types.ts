export interface Review {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  createdAt: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  type: 'PG' | 'Flat' | 'Room' | 'Duplex' | 'House' | 'Studio';
  amenities: string[];
  rooms?: number;
  bathrooms?: number;
  genderPrimary?: 'Boys' | 'Girls' | 'Anyone' | 'Family';
  coordinates?: { lat: number; lng: number };
  ownerName: string;
  ownerWhatsApp: string;
  createdAt: string;
  featured?: boolean;
  distance?: number; // Distance in km from city center or landmark
  reviews?: Review[];
}

export type View = 'home' | 'listings' | 'add-property' | 'premium' | 'dashboard' | 'privacy' | 'terms' | 'disclaimer';
