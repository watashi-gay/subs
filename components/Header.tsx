
import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm text-white shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-extrabold tracking-wider">
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)} 
              className="hover:text-brand-light transition-colors"
            >
              AETHER
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)}
              className={`${currentView === 'home' ? 'text-brand-light' : 'text-gray-300'} hover:text-brand-light transition-colors`}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('collections', e)}
              className={`${currentView === 'collections' ? 'text-brand-light' : 'text-gray-300'} hover:text-brand-light transition-colors`}
            >
              Collections
            </a>
             <a 
              href="#" 
              onClick={(e) => handleNavClick('news', e)}
              className={`${currentView === 'news' ? 'text-brand-light' : 'text-gray-300'} hover:text-brand-light transition-colors`}
            >
              News
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('contact', e)}
              className={`${currentView === 'contact' ? 'text-brand-light' : 'text-gray-300'} hover:text-brand-light transition-colors`}
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={(e) => handleNavClick('transaction', e)}
              className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${currentView === 'transaction' ? 'text-brand-light bg-gray-800' : ''}`}
            >
              <ShoppingCartIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
