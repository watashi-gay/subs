
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Collections from './components/Collections';
import News from './components/News';
import Contact from './components/Contact';
import Transaction from './components/Transaction';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // In a real app, you would fetch products from an API
    setProducts(PRODUCTS);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'collections':
        return <Collections />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      case 'transaction':
        return <Transaction />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <ProductGrid products={products} />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
