import React from "react";

import Background from "../../BackgraoundSection";
import {
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
} from "../../../constant";
import Button from "../../../../shared/Button";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: frame1,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$45.00",
    },
    {
      id: 2,
      image: frame2,
      text: "SKINNY FIT JEANS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$240",
    },
    {
      id: 3,
      image: frame3,
      text: "SLEEVE STRIPED T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$$180",
    },
    {
      id: 4,
      image: frame4,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
    },
  ];

  const topSellingProducts = [
    {
      id: 1,
      image: frame5,
      text: "VERTICAL STRIPED SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$212",
    },
    {
      id: 2,
      image: frame6,
      text: "COURAGE GRAPHIC T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$145",
    },
    {
      id: 3,
      image: frame7,
      text: "LOOSE FIT BERMUDA SHORTS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$80",
    },
    {
      id: 4,
      image: frame7,
      text: "FADED SKINNY JEANS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$210",
    },
  ];

  return (
    <>
      <div className="mt-10 bg-black text-white p-[2rem] ">
        <div>jhhhhhhhhhhhhhhhhh</div>
      </div>
      <div className="p-[40px] text-center m-[40px]">
        <div className="mb-10 text-3xl font-bold ">
          <h1>NEW ARRIVALS</h1>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4 mb-10 ">
            {products.map((product, index) => (
              <div key={index} className="">
                <img src={product.image} alt={product.text} className="mb-4" />
                <h3 className="font-semibold mb-2">{product.text}</h3>
                <p className="mb-2">{product.stars}</p>
                <h4 className="font-bold">{product.price}</h4>
              </div>
            ))}
          </div>
        </div>
        <button className="border  px-12 p-2 text-sm rounded-full hover:bg-gray-800 text  ">
          view all
        </button>

        <div>
          <div className="text-center text-3xl font-bold m-[40px]">
            <h1>TOP SELLING</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10  text-center ">
          {topSellingProducts.map((product, index) => (
            <div key={index} className="">
              <img src={product.image} alt={product.text} className="mb-4" />
              <h3 className="font-semibold mb-2">{product.text}</h3>
              <p className="mb-2">{product.stars}</p>
              <h4 className="font-bold">{product.price}</h4>
            </div>
          ))}
        </div>
        </div>
         <button className="border  px-12 p-2 text-sm rounded-full hover:bg-gray-800 text mt-10 ">
          view all
        </button>
      </div>
    </>
  );
};

export default ProductList;
