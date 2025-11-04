import React from "react";

const Herosection = () => {
  return (
    <div className="bg-rectangle bg-cover bg-center h-[100vh] flex items-center">
      <div className="px-6 sm:px-10 lg:px-20 py-10 space-y-6 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h2>

        <p className="text-sm sm:text-base text-gray-600">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="bg-black text-white px-8 py-3 text-sm rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 pt-8">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl">200+</h2>
            <p className="text-gray-500 text-xs">International Brands</p>
          </div>
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl">2,000+</h2>
            <p className="text-gray-500 text-xs">High-Quality Products</p>
          </div>
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl">30,000+</h2>
            <p className="text-gray-500 text-xs">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
