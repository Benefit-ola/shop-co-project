import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="bg-rectangle bg-cover h-[100vh] mx-auto pt-[50px] pl-[20px]  p">
        <div className=" p-[50px] space-y-6 ">
          <h2 className=" text-6xl font-bold w-[44%] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-xs font-[40px] w-[40%] pt-1 text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-9 p-3 text-sm rounded-full hover:bg-gray-800 ">
            Shop Now
          </button>
          <div className="flex gap-11  w-[39%] p-3 mt-10 ">
            <div>
              
              <h2 className="font-bold text-3xl">200+</h2>
              <p className=" text-gray-500 text-[10px]">International Brands</p>
            </div>
            <div>
              <h2  className="font-bold text-3xl ">2,000+</h2>
              <p className=" text-gray-500  text-[10px]">High-Quality Products</p>
            </div>
            <div>
              
              <h2  className="font-bold text-3xl">30,000+</h2>
              <p className=" text-gray-500  text-[10px]">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
