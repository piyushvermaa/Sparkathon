"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const banners = [
  { src: '/banner1.jpg', alt: 'Banner 1' },
  { src: '/banner2.jpg', alt: 'Banner 2' },
  { src: '/banner3.jpg', alt: 'Banner 3' },
];

const TopBannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden rounded-xl p-6 ">
      <div className="relative rounded-xl h-80 sm:h-96 lg:h-112 xl:h-128 2xl:h-144">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
              className='rounded-xl'
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-7 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 px-3 py-1 rounded-full focus:outline-none"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-7 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 px-3 py-1 rounded-full focus:outline-none"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default TopBannerCarousel;
