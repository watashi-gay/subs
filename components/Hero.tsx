
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/fashion/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Style, Redefined.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
          Discover curated collections of modern menswear designed for the discerning individual.
        </p>
        <button className="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-full transition-transform duration-300 transform hover:scale-105 text-lg">
          Shop The Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
