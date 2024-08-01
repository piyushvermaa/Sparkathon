"use client";

import { useState } from "react";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Header = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <div className="flex flex-row-reverse md:flex-row items-center bg-walmart px-5 md:px-10 py-7 space-x-5 relative">
      <div className="flex justify-between w-fit md:w-auto mb-5 md:mb-0">
        <Link href="/" className="flex items-center">
          <div className="">
            <Image
              src="https://i.imgur.com/5V4wehM.png"
              alt="Logo"
              width={150}
              height={150}
              className="hidden md:flex"
            />
            
          </div>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button type="submit">
          <Search className="rounded-full h-10 w-10 px-2 bg-yellow-400 cursor-pointer" 
          aria-placeholder="Search everything "
          />
        </button>
      </form>
      <button
        className="md:hidden text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div className="hidden md:flex space-x-5 mt-5 md:mt-0">
        <Link
          href="/departments"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>

        <Link
          href="/services"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>

        <Link
          href="/wishlist"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link
          href="/signin"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href="/basket"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-3/4 h-full bg-walmart p-5 flex flex-col space-y-5 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center text-white font-bold text-lg mb-5"
              >
                <Image
                  src="https://i.imgur.com/5V4wehM.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="py-2"
                />
              </Link>
              <button className="text-white"
                onClick={() => setSidebarOpen(false)}
              >
              <X size={30} />
              </button>
            </div>
            <Link
              href="/"
              className="flex items-center text-white border-b-2 pb-2 border-white/40 font-bold space-x-2 text-lg"
            >
              <Grid2X2 size={20} />
              <p>Departments</p>
            </Link>

            <Link
              href="/"
              className="flex items-center text-white font-bold border-b-2 pb-2 border-white/40 space-x-2 text-lg"
            >
              <LayoutGrid size={20} />
              <p>Services</p>
            </Link>

            <Link
              href="/"
              className="flex items-center text-white font-bold border-b-2 pb-2 border-white/40 space-x-2 text-lg"
            >
              <Heart size={20} />
              <div>
                <p className="text-xs font-extralight">Reorder</p>
                <p>My Items</p>
              </div>
            </Link>

            <Link
              href="/"
              className="flex items-center text-white font-bold border-b-2 pb-2 border-white/40 space-x-2 text-lg"
            >
              <User size={20} />
              <div>
                <p className="text-xs font-extralight">Sign In</p>
                <p>Account</p>
              </div>
            </Link>

            <Link
              href="/basket"
              className="flex items-center text-white font-bold border-b-2 pb-2 border-white/40 space-x-2 text-lg"
            >
              <ShoppingCart size={20} />
              <div>
                <p className="text-xs font-extralight">No Items</p>
                <p>$0.00</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
