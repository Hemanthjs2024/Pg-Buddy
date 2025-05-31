import { PgListing } from '../types/PgTypes';

export const mockPgListings: PgListing[] = [
  {
    id: 'pg-1',
    name: 'Comfort PG for Men',
    location: 'Koramangala, Bangalore',
    price: 15000,
    description: 'A modern PG with all amenities including WiFi, food, laundry, and AC. Located near tech parks and shopping areas.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.5,
    reviews: [],
    roomTypes: ['Single', 'Double', 'Triple'],
    facilities: ['wifi', 'food', 'ac', 'laundry'],
    owner: 'owner-1',
  },
  {
    id: 'pg-2',
    name: 'Urban Nest PG',
    location: 'HSR Layout, Bangalore',
    price: 12000,
    description: 'Affordable PG with basic amenities including WiFi and food. Perfect for students and working professionals.',
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.2,
    reviews: [],
    roomTypes: ['Double', 'Triple'],
    facilities: ['wifi', 'food'],
    owner: 'owner-2',
  },
  {
    id: 'pg-3',
    name: 'Luxury Women\'s PG',
    location: 'Indiranagar, Bangalore',
    price: 18000,
    description: 'Premium PG exclusively for women with high-end amenities, security, and comfortable living spaces.',
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.8,
    reviews: [],
    roomTypes: ['Single', 'Double'],
    facilities: ['wifi', 'food', 'ac', 'laundry'],
    owner: 'owner-3',
  },
  {
    id: 'pg-4',
    name: 'Student Haven PG',
    location: 'Marathahalli, Bangalore',
    price: 10000,
    description: 'Budget-friendly PG ideal for students with essential amenities and study spaces.',
    images: [
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2255424/pexels-photo-2255424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 3.9,
    reviews: [],
    roomTypes: ['Double', 'Dormitory'],
    facilities: ['wifi', 'food'],
    owner: 'owner-4',
  },
  {
    id: 'pg-5',
    name: 'Elite Rooms PG',
    location: 'Whitefield, Bangalore',
    price: 22000,
    description: 'Upscale PG with premium amenities, spacious rooms, and excellent location near tech parks.',
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.7,
    reviews: [],
    roomTypes: ['Single', 'Double'],
    facilities: ['wifi', 'food', 'ac', 'laundry'],
    owner: 'owner-5',
  },
  {
    id: 'pg-6',
    name: 'Comfort Zone PG',
    location: 'Electronic City, Bangalore',
    price: 13000,
    description: 'Well-maintained PG with good amenities and convenient location for IT professionals.',
    images: [
      'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.1,
    reviews: [],
    roomTypes: ['Single', 'Double', 'Triple'],
    facilities: ['wifi', 'food', 'laundry'],
    owner: 'owner-6',
  }
];

// Mock data for PG owner dashboard
export const mockOwnerPgListings: PgListing[] = [
  {
    id: 'pg-owner-1',
    name: 'Sunshine PG for Women',
    location: 'Jayanagar, Bangalore',
    price: 16000,
    description: 'A clean and comfortable PG for women with all modern amenities.',
    images: [
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6585740/pexels-photo-6585740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.3,
    reviews: [],
    roomTypes: ['Single', 'Double'],
    facilities: ['wifi', 'food', 'ac', 'laundry'],
    owner: 'current-user',
  },
  {
    id: 'pg-owner-2',
    name: 'Green Park Men\'s PG',
    location: 'JP Nagar, Bangalore',
    price: 14000,
    description: 'Modern PG accommodation for men with great amenities and location.',
    images: [
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.0,
    reviews: [],
    roomTypes: ['Single', 'Double', 'Triple'],
    facilities: ['wifi', 'food'],
    owner: 'current-user',
  }
];