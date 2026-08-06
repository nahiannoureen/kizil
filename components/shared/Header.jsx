"use client";

import { useState } from "react";
import {
  FiPhone,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMapPin,
} from "react-icons/fi";

export default function Header() {
  const categories = {
    "Tops Collection": [
      "T-Shirts & Tees",
      "Shirts & Blouses",
      "Tank Tops & Camis",
      "Sweaters & Cardigans",
      "Crop Tops",
      "Tunics",
      "Hoodies & Sweatshirts",
    ],

    "Bottoms Wear": [
      "Jeans & Denim",
      "Trousers & Pants",
      "Leggings",
      "Skirts",
      "Shorts",
      "Palazzo",
      "Joggers",
    ],

    Loungewear: ["Pyjamas", "Nightwear", "Tracksuits", "Robes", "Lounge Pants"],

    Scarves: [
      "Silk Scarves",
      "Cotton Scarves",
      "Wool Scarves",
      "Shawls",
      "Infinity Scarves",
    ],

    Accessories: [
      "Bags",
      "Belts",
      "Jewelry",
      "Caps",
      "Hair Accessories",
      "Watches",
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Tops Collection");

  return (
    <header className="bg-white">
      {/* Top Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          KI
          <span className="text-[#E85A2A]">ZIL</span>
        </div>

        {/* Phone */}
        <div className="hidden items-center gap-2 lg:flex">
          <FiPhone className="text-lg text-gray-600" />

          <div>
            <p className="text-xs text-gray-400">Call Us</p>

            <p className="text-sm font-semibold">(02)-55048474</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[520px] items-center rounded-full bg-gray-100 px-4 py-2 lg:flex">
          <FiSearch className="text-gray-500" />

          <input
            placeholder="Search for products"
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm">
            <FiUser />

            <span className="hidden md:block">Your Account</span>
          </button>

          <button className="relative">
            <FiHeart size={20} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>

          <button className="relative">
            <FiShoppingCart size={20} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            {/* Category Menu */}
            <div className="relative group">
              <button className="rounded bg-black px-5 py-2 text-sm font-medium text-white">
                SHOP BY CATEGORY
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full z-50 hidden pt-2 group-hover:block">
                <div className="flex w-[720px] overflow-hidden rounded-xl bg-white shadow-2xl">
                  {/* Categories */}
                  <div className="w-64 border-r bg-gray-50 py-3">
                    {Object.keys(categories).map((category) => (
                      <div
                        key={category}
                        onMouseEnter={() => setActiveCategory(category)}
                        className={`cursor-pointer px-6 py-4 text-sm transition ${
                          activeCategory === category
                            ? "bg-white font-semibold text-[#E85A2A]"
                            : "hover:bg-white"
                        }`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>

                  {/* Sub Categories */}
                  <div className="flex-1 p-6">
                    <h3 className="mb-5 text-lg font-bold text-[#161616]">
                      {activeCategory}
                    </h3>

                    <ul className="space-y-3">
                      {categories[activeCategory].map((item) => (
                        <li
                          key={item}
                          className="cursor-pointer text-sm text-gray-600 hover:text-[#E85A2A]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Links */}
            <nav className="hidden items-center gap-8 text-sm lg:flex">
              <a href="#" className="hover:text-[#E85A2A]">
                Our Collections
              </a>

              <a href="#" className="text-[#E85A2A]">
                Flash Deals
              </a>

              <a href="#" className="hover:text-[#E85A2A]">
                New Arrival
              </a>

              <a href="#" className="font-medium text-[#E85A2A]">
                Bundle Products
              </a>
            </nav>
          </div>

          {/* Right Links */}
          <div className="hidden items-center gap-6 text-sm lg:flex">
            <button className="flex items-center gap-2 hover:text-[#E85A2A]">
              <FiMapPin />
              Corporate Enquiry
            </button>

            <button className="hover:text-[#E85A2A]">Track Your Order</button>
          </div>
        </div>
      </div>
    </header>
  );
}
