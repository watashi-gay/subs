
import React, { useState, useCallback } from 'react';
import { Product, OutfitSuggestion } from '../types';
import { getOutfitSuggestion } from '../services/geminiService';
import SparklesIcon from './icons/SparklesIcon';
import ProductCard from './ProductCard';

interface AiStylistProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const AiStylist: React.FC<AiStylistProps> = ({ isOpen, onClose, products }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<OutfitSuggestion | null>(null);

  const handleGetSuggestion = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please describe your occasion or style.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const result = await getOutfitSuggestion(prompt, products);
      setSuggestion(result);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, products]);

  const suggestedProducts = suggestion
    ? products.filter(p => suggestion.productIds.includes(p.id))
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-gray-800 text-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <SparklesIcon className="w-8 h-8 text-brand-light" />
            <h2 className="text-2xl font-bold">Your Personal AI Stylist</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">&times;</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <label htmlFor="style-prompt" className="block text-sm font-medium text-gray-300 mb-2">
              Describe the occasion or style you're looking for:
            </label>
            <textarea
              id="style-prompt"
              rows={3}
              className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"
              placeholder="e.g., A casual weekend brunch with friends..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          {error && <p className="text-red-400 text-center mb-4">{error}</p>}
          
          {isLoading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-light mx-auto"></div>
              <p className="mt-4 text-gray-400">Finding the perfect look for you...</p>
            </div>
          )}

          {suggestion && (
            <div className="animate-fade-in">
              <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
                <p className="text-gray-200">{suggestion.suggestionText}</p>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Here's Your Curated Outfit:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestedProducts.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-700 bg-gray-800/50">
          <button
            onClick={handleGetSuggestion}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-full font-semibold transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <SparklesIcon className="w-5 h-5" />
            <span>{isLoading ? 'Thinking...' : 'Get Suggestion'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiStylist;
