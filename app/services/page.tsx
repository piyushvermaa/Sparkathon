"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Fast Shipping",
    description: "Enjoy fast and reliable shipping on all orders. We ensure your items reach you in record time with our optimized logistics network.",
    image: "https://images.unsplash.com/photo-1600900683885-d57d98f05862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhc3QlMjNoaXBwaW5nfGVufDE2Njg3MDQ4Nw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you with any inquiries or issues. We're here to help you anytime.",
    image: "https://images.unsplash.com/photo-1604672296106-55f86d7a0e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fDI0LzddIGN1c3RvbWVyIHN1cHBvcnR8ZW58MTY2ODcwNjM3&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "We offer a hassle-free returns process for all products. If you're not satisfied with your purchase, return it easily within 30 days.",
    image: "https://images.unsplash.com/photo-1562886782-b8b5cda8f47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fGVhc3ktcmV0dXJufGVufDE2Njg3MDQ4Nw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 4,
    title: "Secure Payment Options",
    description: "We provide multiple secure payment options to ensure your transactions are safe and convenient. Choose the payment method that suits you best.",
    image: "https://images.unsplash.com/photo-1605702787312-c7b7f5cb0f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhbmtpbmclMjBkcml2ZWJldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 5,
    title: "Product Warranties",
    description: "All products come with warranties to ensure peace of mind. We stand behind the quality of our products and offer support for any issues.",
    image: "https://images.unsplash.com/photo-1593721725376-39c40922d306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vYmlsZWFyaW8lMjBhbmdsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
      <Link href="/">
          <div className="text-blue-600 hover:underline flex items-center mb-8">
            <ArrowLeftIcon size={18} className="mr-2" />
             Explore more products
          </div>
        </Link>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Our Services
        </h1>
        <p className="text-center text-xl text-gray-700 mb-16">
          Discover the range of services we offer to enhance your shopping experience.
        </p>
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} rounded-lg overflow-hidden border-2 bg-white transition-transform transform `}
            >
              <div className="relative w-full md:w-1/2 h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
              </div>
              <div className="p-8 w-full md:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.id}`}>
                  <div className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
