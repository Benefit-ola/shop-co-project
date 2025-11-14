import React from "react";
import {  hero, star } from "../../constant";

const Herosection = () => {
  return (
    <div className=" bg-[#F2F0F1] h-[100vh] py-10 flex items-center relative overflow-hidden w-full">
      <div className="px-6 sm:px-10 lg:px-20 py-10 space-y-6 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold  leading-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h2>
        
        <div>
          <img src={star} alt="" className="absolute right-10  z-50 top-12" />
           <img src={star} alt="" className="absolute right-[35rem] z-50"/>
      
        </div>


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
        
              <div><img src={hero} alt="" className="h-[40rem] relative left-0 "/></div>
          
    </div>
  );
};

export default Herosection;

