export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;  // Optional field for showing discounted prices
  images: string[];
  ingredients: string;
  benefits: string[];
}