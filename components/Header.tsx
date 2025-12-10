import React from "react";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  Headphones,
  UserRound,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

interface BestDealsProps {
  categories: {
    data: Category[];
  };
}

const Header = ({ categories }: BestDealsProps) => {
  return (
    <>
      <div className="bg-[#03484D] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="h-10 w-auto" priority />
            </div>

            <div className="hidden md:flex items-center flex-1 w-96 mx-8">
              <div className="flex w-1/2 bg-white rounded-md overflow-hidden shadow-sm">
                <select className="px-4 py-2 text-sm text-gray-700 bg-gray-50 border-r outline-none">
                  <option>All Categories</option>
                  {categories?.data.map((category) => (
                    <option key={category.id}>
                      {category.name.toUpperCase()}
                    </option>
                  ))}
                </select>

                <div className="flex flex-1 items-center">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full px-4 py-2 text-sm text-gray-700 outline-none"
                  />
                  <button className="bg-[#B6B6B6] hover:bg-orange-600 text-white p-2.5">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-xs">
                <Headphones className="h-4 w-4" />
                <div>
                  <p className="text-xs ">Call us now</p>
                  <p className="font-semibold">+011 5827918</p>
                  <p className="font-semibold">Sing in</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <button className="hover:text-orange-400 transition">
                  <UserRound className="h-6 w-6" />
                </button>
                <button className="hover:text-orange-400 transition">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="flex items-center gap-1 hover:text-orange-400 transition">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="text-sm hidden md:inline">Cart (0)</span>
                </button>
              </div>

              <div className="flex sm:hidden items-center gap-3">
                <button>
                  <Search className="h-6 w-6" />
                </button>
                <button>
                  <UserRound className="h-6 w-6" />
                </button>
                <button>
                  <ShoppingCart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden pb-3">
            <div className="flex bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 text-sm text-gray-700 outline-none"
              />
              <button className="bg-orange-500 text-white px-4">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-[#0E3B3E] text-white sticky top-auto md:top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <button className="flex items-center gap-2 px-4 py-2 transition text-sm font-medium">
                <Menu className="h-5 w-5" />
                <span className="sm:inline">Browse By Category</span>
              </button>

              <nav className="hidden lg:flex items-center ml-10 gap-8 text-sm font-medium">
                <a href="#" className="hover:text-orange-400 transition">
                  Home
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  Easy Monthly Installments
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  Shop by Brands
                </a>
                <a href="#" className="hover:text-orange-400 transition">
                  Become a Vendor
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-orange-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
