import { Listing } from "./types";

export const SAMPLE_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Modern PG for Students near University',
    description: 'A fully furnished PG with high-speed internet, 3 meals a day, and laundry facilities. Perfect for first-year students.',
    price: 6500,
    location: 'Satellite Area, Bhopal',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'],
    type: 'PG',
    amenities: ['Wifi', 'AC', 'Meal', 'Cleaning'],
    genderPrimary: 'Anyone' as const,
    rooms: 1,
    bathrooms: 1,
    coordinates: { lat: 23.2333, lng: 77.4333 },
    ownerName: 'Mr. Sharma',
    ownerWhatsApp: '910000000000',
    createdAt: '2024-03-20',
    featured: true,
    distance: 1.2,
    reviews: [
      {
        id: 'r1',
        rating: 5,
        comment: 'Great place! The food is really good and the rooms are very clean.',
        userName: 'Aman Deep',
        createdAt: '2024-03-25T10:00:00Z'
      },
      {
        id: 'r2',
        rating: 4,
        comment: 'Nice place, but the wifi is sometimes slow during night.',
        userName: 'Priya Verma',
        createdAt: '2024-03-26T14:30:00Z'
      }
    ]
  },
  {
    id: '2',
    title: 'Shared 2BHK Flat for Boys',
    description: 'Spacious 2BHK flat with shared kitchen and balcony. Walking distance to the metro station.',
    price: 4500,
    location: 'MP Nagar, Bhopal',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800'],
    type: 'Flat',
    amenities: ['Wifi', 'Kitchen', 'Parking'],
    genderPrimary: 'Boys' as const,
    rooms: 2,
    bathrooms: 2,
    coordinates: { lat: 23.2500, lng: 77.4100 },
    ownerName: 'Rahul Verma',
    ownerWhatsApp: '910000000000',
    createdAt: '2024-03-21',
    distance: 2.5
  },
  {
    id: '3',
    title: 'Independent Room with Attached Bath',
    description: 'Private room in a quiet residential area. Includes a study table and cupboard.',
    price: 3500,
    location: 'Indrapuri, Bhopal',
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800'],
    type: 'Room',
    amenities: ['Private Bathroom', 'Study Table'],
    genderPrimary: 'Girls' as const,
    rooms: 1,
    bathrooms: 1,
    coordinates: { lat: 23.2599, lng: 77.4126 },
    ownerName: 'Anjali Singh',
    ownerWhatsApp: '910000000000',
    createdAt: '2024-03-22',
    distance: 3.8
  }
];

export const PRICING_PLANS = {
  seekers: [
    {
      name: 'Trial',
      price: 9,
      period: '7 days',
      features: ['Exact Map Location', 'Full address details', 'Direct owner contact', 'Fastest support'],
      cta: 'Start ₹9 Trial',
      highlight: false
    },
    {
      name: 'Monthly',
      price: 49,
      period: '1 month',
      features: ['Direct Owner Access', 'Full property details', 'Priority Alerts', 'No Ads'],
      cta: 'Subscribe now',
      highlight: false
    },
    {
      name: 'Most Popular',
      price: 99,
      period: '3 months',
      features: ['Best Value', 'Direct Owner Contact', 'Unlimited Contacts', 'Priority Lead Access'],
      cta: 'Get 3 Months access',
      highlight: true
    },
    {
      name: 'Best Value',
      price: 249,
      period: '6 months',
      features: ['Long-term support', 'Property verification', 'All Premium features', 'Personal Assistant'],
      cta: 'Go for 6 months',
      highlight: false
    }
  ],
  owners: [
    {
      name: 'Standard',
      price: 99,
      period: '3 months',
      features: ['List Unlimited properties', 'Featured tags', 'WhatsApp lead alerts', 'Lead tracking'],
      cta: 'Start Listing',
      highlight: false
    },
    {
      name: 'Professional',
      price: 199,
      period: '6 months',
      features: ['Top visibility', 'Verified Owner badge', 'Detailed Analytics', 'Boosted listings'],
      cta: 'Get Professional',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 349,
      period: '12 months',
      features: ['Maximum Reach', 'Top selection placement', 'Professional photography assist', 'VIP priority support'],
      cta: 'Scale Your Rent',
      highlight: false
    }
  ]
};
