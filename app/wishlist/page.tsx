// pages/wishlist.tsx

import { ArrowLeftIcon, Heart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const wishlistItems = [
  {
    id: 1,
    title: 'Samsung Galaxy S21',
    price: 69999,
    discount: 10,
    image: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-S21-Plus-5G-SM-G996B-DS-256GB-8GB-RAM-International-Version-Phantom-Violet_724b9fda-999d-44eb-88ff-d04183ed57aa.66cede89ffc8e714afe7988248614a92.jpeg',
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Apple MacBook Pro',
    price: 199999,
    discount: 15,
    image: 'https://i5.walmartimages.com/asr/172fcf36-2480-40df-9b8d-f6c4aebae436.5eb50559eb649bd81f05ebcfc645384e.jpeg',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Sony WH-1000XM4 Headphones',
    price: 24999,
    discount: 20,
    image: 'https://i5.walmartimages.com/seo/Sony-WH-1000XM4-Wireless-Noise-Cancelling-Over-Ear-Headphones-Silver_ca53a2e8-7c3e-4ed0-8af2-d5ed76e85e64.d48dda116a7ba4b6001366e22f8ae477.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Nintendo Switch',
    price: 29999,
    discount: 5,
    image: 'https://i5.walmartimages.com/asr/b0826301-ae19-457b-b1be-fb1f96e6bbbd.9abc0f91d776fcbf0b8b580e875ed6c0.jpeg',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Amazon Echo (4th Gen)',
    price: 9999,
    discount: 25,
    image: 'https://i5.walmartimages.com/asr/780eea77-9c25-4518-9be4-c194495a1586.4177cb1005551a430047dc9dbde293c6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
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
