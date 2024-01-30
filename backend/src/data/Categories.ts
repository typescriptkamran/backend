


// Updated Interfaces
interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: number;
  name: string;
  slug: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  imageUrl: string;
  
}

interface GiftCategory extends Category {}
interface BouquetCategory extends Category {}

// Dummy data for Gifts

const RomanticGift: Product = {
  id: 3,
  name: 'Romantic Gift Set',
  slug: 'romantic-gift-set',
  price: 49.99,
  description: 'Surprise your loved one with this romantic gift set.',
  imageUrl: 'https://example.com/romanticgift.jpg',
};

const PersonalizedGift: Product = {
  id: 4,
  name: 'Personalized Photo Frame',
  slug: 'personalized-photo-frame',
  price: 39.99,
  description: 'Create lasting memories with this personalized photo frame.',
  imageUrl: 'https://example.com/personalizedframe.jpg',
};

const GiftSubcategory: Subcategory = {
  id: 2,
  name: 'Special Occasion Gifts',
  slug: 'special-occasion-gifts',
  products: [RomanticGift, PersonalizedGift],
};

// Dummy data for Bouquets

const RoseBouquet: Product = {
  id: 5,
  name: 'Classic Rose Bouquet',
  slug: 'classic-rose-bouquet',
  price: 59.99,
  description: 'A beautiful bouquet of fresh red roses for any occasion.',
  imageUrl: 'https://example.com/rosebouquet.jpg',
};

const OrchidBouquet: Product = {
  id: 6,
  name: 'Exotic Orchid Bouquet',
  slug: 'exotic-orchid-bouquet',
  price: 69.99,
  description: 'An elegant bouquet featuring exotic orchids.',
  imageUrl: 'https://example.com/orchidbouquet.jpg',
};

const BouquetSubcategory: Subcategory = {
  id: 3,
  name: 'Flower Bouquets',
  slug: 'flower-bouquets',
  products: [RoseBouquet, OrchidBouquet],
};

// Updated categories data

const giftCategory: GiftCategory = {
  id: 2,
  name: 'Gifts',
  slug: 'gifts',
  subcategories: [GiftSubcategory],
};

const bouquetCategory: BouquetCategory = {
  id: 3,
  name: 'Bouquets',
  slug: 'bouquets',
  subcategories: [BouquetSubcategory],
};

const categories: Category[] = [
  giftCategory,
  bouquetCategory,
];

export { categories };
export type { Category, Subcategory, Product, GiftCategory, BouquetCategory };
