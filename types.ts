
export interface Product {
  id: number;
  name: string;
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Footwear' | 'Accessories';
  price: number;
  imageUrl: string;
  description: string;
}

export interface OutfitSuggestion {
  suggestionText: string;
  productIds: number[];
}
