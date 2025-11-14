import React from "react";
import { mg, mg2, mg3 } from "../../../constant";
import { IoIosArrowForward } from "react-icons/io";

const ProductDetails = () => {
  const productImage = [mg, mg2, mg3, mg];

  return (
    <>
      <div>
        <ul className="flex gap-5 ">
          <div className="flex  gap-2">
            <li className="text-2xl">Home</li>
            <p className="text-2xl ">
              <IoIosArrowForward />
            </p>
          </div>
          <div className="flex gap3">
            <li className="text-3xl">Shop</li>
            <p className="text-2xl">
              <IoIosArrowForward />
            </p>
          </div>
          <div className="flex  gap-3">
            <li className="text-2xl">Men</li>
            <p className="text-2xl">
              <IoIosArrowForward />
            </p>
          </div>
          <div className="">
            <li>T-shirts</li>
          </div>
        </ul>
      </div>
      <div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 object-contain">
            {productImage.slice(1, 4).map((src, i) => (
              <div className="w-16 h-16 rounded-lg border" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <div className="w-36 h-36 border rounded-lg ">
            <img src={productImage[0]} alt="" />
          </div>
        </div>
        <div>
          <h1>One Life Graphic T-shirt</h1>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
