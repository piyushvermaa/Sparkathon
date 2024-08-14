// pages/wishlist.tsx

import React from 'react';
import { ArrowLeftIcon, Heart, Trash2 } from 'lucide-react'; 
import Image from 'next/image';
import Link from 'next/link';

const wishlistItems = [
  {
    id: 1,
    title: 'Samsung Galaxy S21',
    price: 69999,
    discount: 10,
    image: '/products/galaxy-s21.jpg',
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Apple MacBook Pro',
    price: 199999,
    discount: 15,
    image: '/products/macbook-pro.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Sony WH-1000XM4 Headphones',
    price: 24999,
    discount: 20,
    image: '/products/sony-headphones.jpg',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Nintendo Switch',
    price: 29999,
    discount: 5,
    image: '/products/nintendo-switch.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Amazon Echo (4th Gen)',
    price: 9999,
    discount: 25,
    image: '/products/amazon-echo.jpg',
    rating: 4.4,
  },
];

const WishlistPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 py-10 px-5">
      <div className="container mx-auto">
      <Link href="/">
          <div className="text-blue-600 hover:underline flex items-center mb-8">
            <ArrowLeftIcon size={18} className="mr-2" />
             Explore more products
          </div>
        </Link>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
          
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center mt-20">
            <Heart className="mx-auto text-gray-400" size={48} />
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Your Wishlist is Empty</h2>
            <Link href="/shop">
              <div className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition-all">
                Browse Products
              </div>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-100 hover:shadow-2xl"
              >
                <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full">
                  <Heart size={16} />
                </div>
                {item.discount > 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.discount}% OFF
                  </span>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-800 text-lg font-medium">₹{item.price - (item.price * item.discount) / 100}</p>
                    {item.discount > 0 && (
                      <p className="text-sm text-gray-500 line-through ml-2">₹{item.price}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-600">Rating: {item.rating} ⭐</p>
                    <button className="text-red-500 hover:text-red-700 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <Link href={`/buy/${item.id}`}>
                    <div className="mt-4 inline-block bg-blue-500 border-2 text-white text-center py-2 px-4 rounded-lg hover:bg-green-600 transition-all w-full">
                      Buy Now
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
