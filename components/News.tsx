
import React from 'react';

const NEWS_ITEMS = [
  {
    id: 1,
    type: 'Branch Update',
    title: 'New Flagship Store Opening in Soho',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/store/800/600',
    content: 'We are thrilled to announce the opening of our newest location in the heart of Soho. Featuring our full range of collections and an exclusive bespoke tailoring service, the new Aether Attire space is designed to provide an immersive shopping experience. Join us for the grand opening event this weekend.'
  },
  {
    id: 2,
    type: 'Style Guide',
    title: 'Mastering the Art of Layering: Autumn 2023',
    date: 'Oct 05, 2023',
    image: 'https://picsum.photos/seed/layering/800/600',
    content: 'As the temperature drops, your style possibilities heat up. This season is all about texture and tone. Pair our Urban Explorer Jacket with the Classic Crewneck Tee for a look that transitions seamlessly from office to evening. Don\'t be afraid to mix the Merino Wool Beanie with more formal outerwear for a modern, high-low aesthetic.'
  },
  {
    id: 3,
    type: 'Product Drop',
    title: 'Limited Edition: The Midnight Series',
    date: 'Sep 28, 2023',
    image: 'https://picsum.photos/seed/midnight/800/600',
    content: 'Introducing the Midnight Series—a capsule collection defined by deep navies and stark blacks. Crafted for the nightlife, these pieces feature subtle reflective details and premium technical fabrics. Available online and in select stores starting next Friday.'
  },
  {
    id: 4,
    type: 'Style Guide',
    title: 'Coordination 101: Earth Tones',
    date: 'Sep 15, 2023',
    image: 'https://picsum.photos/seed/earth/800/600',
    content: 'Earthy hues are timeless. Learn how to coordinate olive, beige, and rust colors to create outfits that feel grounded yet sophisticated. Our stylists break down the color theory behind our latest "Weekend Leisure" collection.'
  }
];

const News: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-4">The Aether Journal</h1>
          <p className="text-xl text-gray-400">Latest updates, style guides, and branch news.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-brand-primary/20 text-brand-light rounded-full">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-brand-primary transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {item.content}
                </p>
                <button className="text-brand-light font-semibold hover:text-brand-primary transition-colors self-start flex items-center group">
                  Read More 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
