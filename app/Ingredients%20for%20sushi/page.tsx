"use client";
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

interface Ingredient {
  id: number;
  name: string;
  description: string;
  price: string;
  discount: string;
  imageUrl: string;
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: 'Sushi Rice',
    description: 'Short-grain or medium-grain rice for sushi, seasoned with rice vinegar, sugar, and salt.',
    price: '$10.00',
    discount: '10% off',
    imageUrl: 'https://example.com/sushi-rice.jpg',
  },
  {
    id: 2,
    name: 'Nori',
    description: 'Seaweed sheets used to wrap sushi rolls.',
    price: '$5.00',
    discount: '15% off',
    imageUrl: 'https://example.com/nori.jpg',
  },
  {
    id: 3,
    name: 'Fresh Tuna',
    description: 'Sushi-grade tuna, perfect for making sushi rolls or nigiri.',
    price: '$20.00',
    discount: '5% off',
    imageUrl: 'https://example.com/fresh-tuna.jpg',
  },
  {
    id: 4,
    name: 'Soy Sauce',
    description: 'Soy sauce for dipping and adding flavor.',
    price: '$3.00',
    discount: '20% off',
    imageUrl: 'https://example.com/soy-sauce.jpg',
  },
  {
    id: 5,
    name: 'Wasabi',
    description: 'Spicy green paste made from Japanese horseradish.',
    price: '$7.00',
    discount: '10% off',
    imageUrl: 'https://example.com/wasabi.jpg',
  },
  {
    id: 6,
    name: 'Pickled Ginger',
    description: 'Pickled ginger to cleanse the palate between sushi pieces.',
    price: '$4.00',
    discount: '12% off',
    imageUrl: 'https://example.com/pickled-ginger.jpg',
  }
];

const SushiIngredientsList: React.FC = () => {
  const handleAddToCart = (id: number) => {
    // Logic to add the item to the cart
    console.log(`Added item with id ${id} to the cart`);
    localStorage.setItem('cart',localStorage.getItem('cart')+"")
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <img src={ingredient.imageUrl} alt={ingredient.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{ingredient.name}</h2>
            <p className="text-gray-600 mt-2">{ingredient.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">{ingredient.price}</span>
              <span className="text-sm text-red-500">{ingredient.discount}</span>
            </div>
            <button
              onClick={() => handleAddToCart(ingredient.id)}
              className="mt-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SushiIngredientsList;
