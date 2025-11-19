
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

// Dummy cart items for demonstration
const INITIAL_CART_ITEMS = [
  PRODUCTS[0], // Urban Explorer Jacket
  PRODUCTS[3], // Minimalist Leather Sneakers
  PRODUCTS[4]  // Merino Wool Beanie
];

const Transaction: React.FC = () => {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12 animate-fade-in text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-8 border-b border-gray-800 pb-4">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT COLUMN: Wishlist / Cart List */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Your Shopping Cart ({cartItems.length})
            </h2>
            
            <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center text-gray-400">
                  Your cart is empty. Time to browse the collections!
                </div>
              ) : (
                <div className="divide-y divide-gray-700">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex items-center gap-4 hover:bg-gray-750 transition-colors">
                      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                        <p className="text-brand-light font-medium mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-2"
                        aria-label="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-brand-light">Free</span>
                </div>
                <div className="border-t border-gray-700 my-4 pt-4 flex justify-between text-white font-bold text-xl">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Payment Method */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              Payment Details
            </h2>
            
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
               {/* Visual Card Display */}
               <div className="mb-8 bg-gradient-to-br from-brand-dark to-brand-primary p-6 rounded-xl text-white shadow-inner relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
                 <div className="relative z-10">
                   <div className="flex justify-between items-center mb-8">
                     <div className="text-2xl font-bold italic">VISA</div>
                     <svg className="w-10 h-10 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M2 10h20v7a3 3 0 01-3 3H5a3 3 0 01-3-3v-7z" opacity="0.3"></path><path d="M2 7a3 3 0 013-3h14a3 3 0 013 3v1H2V7z"></path></svg>
                   </div>
                   <div className="mb-4">
                     <div className="text-xs opacity-75 uppercase tracking-wider">Card Number</div>
                     <div className="text-xl font-mono tracking-widest">•••• •••• •••• 4242</div>
                   </div>
                   <div className="flex justify-between">
                     <div>
                       <div className="text-xs opacity-75 uppercase tracking-wider">Card Holder</div>
                       <div className="font-medium">ALEXANDER SMITH</div>
                     </div>
                     <div>
                       <div className="text-xs opacity-75 uppercase tracking-wider">Expires</div>
                       <div className="font-medium">12/25</div>
                     </div>
                   </div>
                 </div>
               </div>

               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Card Number</label>
                   <div className="relative">
                     <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 pl-12 text-white focus:ring-2 focus:ring-brand-primary outline-none transition" placeholder="0000 0000 0000 0000" />
                     <svg className="w-6 h-6 absolute left-3 top-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-5">
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">Expiry Date</label>
                     <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition" placeholder="MM/YY" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">CVV</label>
                     <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition" placeholder="123" />
                   </div>
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Cardholder Name</label>
                   <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition" placeholder="Full Name on Card" />
                 </div>

                 <div className="pt-4">
                   <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/25 transform transition hover:scale-[1.02] active:scale-[0.98]">
                     Pay ${total.toFixed(2)}
                   </button>
                   <p className="text-center text-xs text-gray-500 mt-4 flex justify-center items-center">
                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
                     Secure 256-bit SSL Encrypted Payment
                   </p>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
