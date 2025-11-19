
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full text-white">
        <h3 className="text-lg font-bold truncate">{product.name}</h3>
        <p className="text-sm text-gray-300">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          <button className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
