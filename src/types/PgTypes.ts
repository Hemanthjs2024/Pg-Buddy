export interface PgListing {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviews: Review[];
  roomTypes: string[];
  facilities: string[];
  owner: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}