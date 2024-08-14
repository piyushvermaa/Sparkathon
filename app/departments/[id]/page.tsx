"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

// Mock Data
const mockDepartmentsData = [
  {
    id: 1,
    name: 'Footwear',
    description: 'Explore our extensive range of footwear including sneakers, boots, and sandals.',
    details: 'We offer a variety of styles from casual to formal, with top brands and the latest trends.',
    image: 'https://images.unsplash.com/photo-1542830371-7de7fce5a4f4?fit=crop&w=500&h=500',
    products: [
      {
        id: 101,
        name: 'Nike Air MX Super 2500 - Red',
        price: '449',
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        discount: '39% OFF',
        rating: 5,
      },
      {
        id: 102,
        name: 'Adidas UltraBoost 21',
        price: '179',
        image: 'https://images.unsplash.com/photo-1605256748492-7d7f3b74d00f?fit=crop&w=500&h=500',
        rating: 4,
      },
      {
        id: 103,
        name: 'Puma RS-X3 - Black',
        price: '129',
        image: 'https://images.unsplash.com/photo-1585223749678-57483ac1fc29?fit=crop&w=500&h=500',
        discount: '15% OFF',
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Electronics',
    description: 'Latest gadgets and electronics including smartphones, laptops, and accessories.',
    details: 'Find cutting-edge technology and the newest releases from leading brands in electronics.',
    image: 'https://images.unsplash.com/photo-1506748686214e9df14f1e80?fit=crop&w=500&h=500',
    products: [
      {
        id: 201,
        name: 'Apple iPhone 14 Pro Max',
        price: '1099',
        image: 'https://images.unsplash.com/photo-1631455949306-71d132d86b3d?fit=crop&w=500&h=500',
        rating: 5,
      },
      {
        id: 202,
        name: 'Samsung Galaxy S21 Ultra',
        price: '1199',
        image: 'https://images.unsplash.com/photo-1611512071417-8133d6c9a88b?fit=crop&w=500&h=500',
        rating: 4,
      },
      {
        id: 203,
        name: 'Sony WH-1000XM4',
        price: '349',
        image: 'https://images.unsplash.com/photo-1612439078202-7a2c53dfb6d8?fit=crop&w=500&h=500',
        discount: '10% OFF',
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    description: 'Essential home and kitchen items including appliances, furniture, and decor.',
    details: 'Discover a wide range of home essentials and stylish kitchen accessories to elevate your living space.',
    image: 'https://images.unsplash.com/photo-1600520185847-cfe8353e6a1f?fit=crop&w=500&h=500',
    products: [
      {
        id: 301,
        name: 'Instant Pot Duo 7-in-1',
        price: '89',
        image: 'https://images.unsplash.com/photo-1599008333297-d9c92a872db1?fit=crop&w=500&h=500',
        rating: 5,
      },
      {
        id: 302,
        name: 'Dyson V11 Torque Drive',
        price: '599',
        image: 'https://images.unsplash.com/photo-1591175093596-181436a7b5e7?fit=crop&w=500&h=500',
        discount: '20% OFF',
        rating: 4,
      },
      {
        id: 303,
        name: 'Philips Air Fryer XXL',
        price: '299',
        image: 'https://images.unsplash.com/photo-1605055402290-e42e7b9515b2?fit=crop&w=500&h=500',
        rating: 4,
      },
    ],
  },
  {
    id: 4,
    name: 'Fashion',
    description: 'Trendy apparel including dresses, suits, and accessories for all occasions.',
    details: 'Stay on top of fashion trends with our latest collection of clothing and accessories.',
    image: 'https://images.unsplash.com/photo-1527039312885-0e925b3c12a1?fit=crop&w=500&h=500',
    products: [
      {
        id: 401,
        name: 'Gucci GG Marmont Bag',
        price: '2399',
        image: 'https://images.unsplash.com/photo-1600544863424-1e0a22d2087a?fit=crop&w=500&h=500',
        rating: 5,
      },
      {
        id: 402,
        name: 'Prada Saffiano Leather Wallet',
        price: '799',
        image: 'https://images.unsplash.com/photo-1587565475666-5451df82c50a?fit=crop&w=500&h=500',
        discount: '25% OFF',
        rating: 4,
      },
      {
        id: 403,
        name: 'Ray-Ban Aviator Sunglasses',
        price: '150',
        image: 'https://images.unsplash.com/photo-1607681415651-39670994d4c3?fit=crop&w=500&h=500',
        rating: 4,
      },
    ],
  },
];

// ProductCard Component
const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={product.image}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      {product.discount && <p className="text-red-600 font-medium">{product.discount}</p>}
      <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐</p>
    </div>
  </div>
);

// DepartmentDetail Component
const DepartmentDetail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const department = mockDepartmentsData.find((dept) => dept.id === parseInt(id as string));

  if (!department) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-5">
        <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
        <p className="text-lg mb-8">Sorry, the department you are looking for does not exist.</p>
        <Link href="/departments">
          <div className="text-blue-500 hover:underline flex items-center">
            <ArrowLeftIcon size={18} className="mr-2" />
            Go Back to Departments
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 py-12">
      <div className="container mx-auto px-5">
        <Link href="/departments">
          <div className="text-blue-600 hover:underline flex items-center mb-8">
            <ArrowLeftIcon size={18} className="mr-2" />
            Back to Departments
          </div>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="relative w-full h-80 lg:h-auto">
            <Image
              src={department.image}
              alt={department.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{department.name}</h1>
            <p className="text-gray-700 mb-4">{department.description}</p>
            <p className="text-gray-600 mb-6">{department.details}</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {department.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
