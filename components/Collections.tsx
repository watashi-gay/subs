
import React from 'react';

const COLLECTIONS = [
  {
    id: 1,
    title: "Urban Technical",
    description: "Engineered for the city environment. Weather-resistant fabrics meet modern silhouettes.",
    image: "https://picsum.photos/seed/urban-tech/800/600",
    itemCount: 12
  },
  {
    id: 2,
    title: "Classic Minimalist",
    description: "Timeless essentials that never go out of style. Focus on premium materials and perfect fit.",
    image: "https://picsum.photos/seed/minimalist/800/600",
    itemCount: 8
  },
  {
    id: 3,
    title: "Weekend Leisure",
    description: "Comfortable, relaxed fits for your off-duty days. Soft fabrics and easy-going vibes.",
    image: "https://picsum.photos/seed/leisure/800/600",
    itemCount: 15
  },
  {
    id: 4,
    title: "Formal Elegance",
    description: "Sharp tailoring and sophisticated details for when you need to make an impression.",
    image: "https://picsum.photos/seed/formal/800/600",
    itemCount: 6
  }
];

const Collections: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen animate-fade-in">
      <div className="relative py-24 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Curated Collections
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our thoughtfully designed lines, each crafted for a specific aspect of the modern man's life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((collection) => (
            <div 
              key={collection.id} 
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-brand-light uppercase bg-brand-dark/50 backdrop-blur-sm rounded-full">
                    {collection.itemCount} Items
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {collection.description}
                  </p>
                  <div className="mt-4 flex items-center text-brand-light font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span>Explore Collection</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;