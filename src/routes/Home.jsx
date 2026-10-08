import React, { useState } from "react";

import Search from "../components/Search";
import { Link, useParams } from "react-router-dom";
import { LuMoveRight, LuChevronRight, LuChevronLeft } from "react-icons/lu";

function Home({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlider = () => {
    if (products.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto sm:px-0">
        <div className="flex flex-col gap-4">
          <div>
            <h4>MEN</h4>
            <h4>WOMEN</h4>
            <h4>KIDS</h4>
          </div>
          <Search />
        </div>
        {/* Bottom Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-between py-6 space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-wider leading-none">
                New <br /> Collection
              </h1>
              <p className="text-sm mt-2 font-medium tracking-wide">
                Summer <br />
                2024
              </p>
            </div>
            <div className="flex items-center gap-6 pt-8">
              {/* Link To Shop */}
              <Link
                to="/products"
                className="bg-[#d1d1d1] flex justify-between py-2 px-4 w-full">
                <p>Go To Shop</p>
                <div className="flex items-center justify-center">
                  <LuMoveRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={prevSlider}
                  className="p-3 hover:bg-zinc-200 transition-colors border border-[#1e1e1e]">
                  <LuChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlider}
                  className="p-3 hover:bg-zinc-200 transition-colors border border-[#1e1e1e]">
                  <LuChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Product Images */}
          <>
            {/* First Slot */}
            {products[currentIndex] && (
              <div className="lg:col-span-4 aspect-4/5 w-80 h-83 bg-[#f2f3f8] border border-[#D9D9D9] ml-4 relative overflow-hidden group p-8 flex items-center justify-center fade-in">
                <Link to={`products/products/${products[currentIndex].id}`}>
                  <img
                    src={products[currentIndex].image}
                    alt={products[currentIndex].title}
                    className="max-w-full max-h-full object-contain grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>
            )}
            {/* Next Slot */}
            {products[(currentIndex + 1) % products.length] && (
              <div className="hidden lg:flex lg:col-span-4 aspect-4/5 w-80 h-83 bg-[#f2f3f8] border border-[#D9D9D9] relative overflow-hidden group p-8 items-center justify-center fade-in">
                <Link to={`products/products/${products[currentIndex].id}`}>
                  <img
                    src={products[(currentIndex + 1) % products.length].image}
                    alt={products[(currentIndex + 1) % products.length].title}
                    className="max-w-full max-h-full object-contain grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Home;
