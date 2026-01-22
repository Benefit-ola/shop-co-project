import React from "react";
import {  hero, star } from "../../constant";

const Herosection = () => {
  return (
    <div className="md:bg-[#F2F0F1] h-[100vh] px-6 flex items-center relative overflow-hidden md:w-full lg:flex-row flex-col ">
      <div className=" space-y-6 ">
        <h2 className="text-4xl w-[80%] md:text-6xl font-extrabold  leading-tight">
          FIND CLOTHES THAT MATCHS YOUR STYLE
        </h2>
        
        <div>
          <img src={star} alt="" className="absolute right-10  z-50 top-12" />
           <img src={star} alt="" className="absolute right-[35rem] z-50"/>
      
        </div>


        <p className="text-sm w-[100%] text-gray-600">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className=" bg-black text-white px-8 py-3 text-sm rounded-full hover:bg-gray-800 transition  ">
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

