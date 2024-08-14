"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react'; // Importing an icon from lucide-react

const departments = [
  {
    id: 1,
    name: 'Sweet Gifts for Free',
    description: 'Find the sweetest gifts for your loved ones.',
    image: 'https://links.papareact.com/1dy',
    bgColor: 'bg-pink-200',
  },
  {
    id: 2,
    name: 'Shop Wardrobe',
    description: 'Update your wardrobe with the latest fashion trends.',
    image: 'http://tinyurl.com/4xa6e9wd',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Shop Home',
    description: 'Everything you need to make your home cozy.',
    image: 'https://links.papareact.com/szu',
    bgColor: 'bg-pink-200',
  },
  {
    id: 4,
    name: 'Shop Electronics',
    description: 'Get the latest gadgets and electronics.',
    image: 'http://tinyurl.com/48z68mc9',
    bgColor: 'bg-pink-200',
  },
  {
    id: 5,
    name: 'Shop Toys',
    description: 'Fun and educational toys for all ages.',
    image: 'https://links.papareact.com/pj2',
    bgColor: 'bg-green-100',
  },
  {
    id: 6,
    name: 'All You Need for Match Day',
    description: 'Get ready for the big game with all the essentials.',
    image: 'https://links.papareact.com/m8e',
    bgColor: 'bg-red-100',
  },
  {
    id: 7,
    name: 'Shop Gadgets',
    description: 'Discover the coolest gadgets on the market.',
    image: 'http://tinyurl.com/5n6jhwnv',
    bgColor: 'bg-orange-100',
  },
  {
    id: 8,
    name: 'Shop Beauty',
    description: 'Find the best beauty products for you.',
    image: 'https://links.papareact.com/4y0',
    bgColor: 'bg-blue-100',
  },
  {
    id: 9,
    name: 'Shop Sports',
    description: 'Gear up for your favorite sports.',
    image: 'https://links.papareact.com/sq2',
    bgColor: 'bg-blue-100',
  },
  {
    id: 10,
    name: 'Enjoy Free Shipping',
    description: 'Free shipping on select items.',
    image: 'https://links.papareact.com/9fh',
    bgColor: 'bg-rose-100',
  },
  {
    id: 11,
    name: 'Flash Deals',
    description: "Don't miss out on our limited-time flash deals.",
    image: 'https://links.papareact.com/qx7',
    bgColor: 'bg-orange-200',
  },
];

const Departments: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          Explore Our Departments
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((department) => (
            <Link key={department.id} href={`/departments/${department.id}`}>
              <div
                className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ${department.bgColor}`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60 hover:opacity-80 transition-opacity duration-300"></div>
                <Image
                  src={department.image}
                  alt={department.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {department.name}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {department.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-2 text-white text-sm">
                    <span>Shop Now</span>
                    <ArrowRightIcon size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
