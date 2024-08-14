"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartSummary {
  items: number;
  totalCost: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: 'Luxe Card Holder',
    price: 1000,
    quantity: 1,
    image: 'http://tinyurl.com/4xa6e9wd',
  },
  {
    id: 2,
    title: 'Black Leather Purse',
    price: 2000,
    quantity: 2,
    image: 'http://tinyurl.com/4xa6e9wd',
  },
  // Add more items here
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState<string>('');
  const [cartSummary, setCartSummary] = useState<CartSummary>({
    items: cartItems.length,
    totalCost: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  });

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    updateCartSummary(updatedCart);
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    updateCartSummary(updatedCart);
  };

  const updateCartSummary = (items: CartItem[]) => {
    const totalCost = items.reduce((total, item) => total + item.price * item.quantity, 0);
    setCartSummary({
      items: items.length,
      totalCost,
    });
  };

  const handleApplyPromoCode = () => {
    // Logic to apply promo code
    console.log('Promo code applied:', promoCode);
  };

  return (
    <div className="container mx-auto mt-10">
      <Link href="/">
        <div className="text-blue-600 hover:underline flex items-center mb-8">
          <ArrowLeftIcon size={18} className="mr-2" />
          Continue shopping
        </div>
      </Link>
      <div className="sm:flex  my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 pb-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartSummary.items} Items</h2>
          </div>
          {cartItems.map(item => (
            <div key={item.id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <Image src={item.image} alt={item.title} width={200} height={200} className="object-center object-cover" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                <select
                  aria-label="Select quantity"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                >
                  {[...Array(10).keys() as any].map(n => (
                    <option key={n} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
                <p className="text-base font-black leading-none text-gray-800">₹{item.price * item.quantity}</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                    <p onClick={() => handleRemoveItem(item.id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 pb-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cartSummary.items}</span>
            <span className="font-semibold text-sm">₹{cartSummary.totalCost}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - ₹100</option>
            </select>
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="p-2 text-sm w-full"
            />
          </div>
          <button onClick={handleApplyPromoCode} className="bg-red-500 hover:bg-red-600 rounded-md px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{cartSummary.totalCost + 100}</span>
            </div>
            <button className="bg-blue-500 font-semibold hover:bg-blue-600 rounded-md py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
