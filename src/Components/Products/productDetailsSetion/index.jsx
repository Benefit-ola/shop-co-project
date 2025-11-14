import React, { useState } from "react";
import { circle, circle2, circle3, mg, mg2, mg3 } from "../../../constant";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../../../shared/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductDetails = () => {
  const productImage = [mg, mg2, mg3, mg];
  const [activeimage, setActiveimage] = useState(productImage[0]);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="">
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
          <div className="text-2xl">
            <li>T-shirts</li>
          </div>
        </ul>
      </div>
      <div className="flex gap-10 mt-5">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 object-contain">
            {productImage.slice(1, 4).map((src, i) => (
              <div className="w-16 h-16 rounded-lg border" key={i}>
                <img src={src} alt="" onClick={() => setActiveimage(src)} />
              </div>
            ))}
          </div>
          <div className="w-36 h-36 border rounded-lg ">
            <img src={activeimage} alt="" />
          </div>
        </div>
        <div className="">
          <hr />
          <h1 className="font-extrabold text-3xl mb-3">
            One Life Graphic T-shirt
          </h1>

          <p>⭐⭐⭐⭐⭐</p>
          <div className="text-lg font-bold flex gap-2 mb-3  ">
            <p>$260</p>
            <p className="text-[#9A9A9A]">$300</p>
          </div>

          <p className="text-sm w-[35rem] text-[#9A9A9A]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="mt-3 ">
            <h3 className="text-[#9A9A9A] mt-3 mb-3">Select Colors</h3>
            <div className="flex gap-2">
              <img src={circle} alt="" />
              <img src={circle2} alt="" />
              <img src={circle3} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-[#9A9A9A] mt-3">Choose Size</h3>
            <div className="flex gap-4">
              <Button className="border   px-3 p-2 text-md rounded-full text-[#9A9A9A] mt-3 ">
                Small
              </Button>
              <Button className="border   px-3 p-2 text-md rounded-full text-[#9A9A9A] mt-3 ">
                Medium
              </Button>
              <Button className="border   px-3 p-2 text-md rounded-full  text-[#9A9A9A] mt-3 ">
                Large
              </Button>
              <Button className="border   px-3 p-2 text-md rounded-full  text-[#9A9A9A] mt-3 ">
                X-Large
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="border flex gap-7 items-center  px-12 p-2 text-md rounded-full hover:bg-gray-300 text-black mt-3 ">
             
              <FaMinus />
              1
              <FaPlus />
            </Button>
            <Button className="border   px-12 p-2 text-md rounded-full bg-[black] text-white mt-3 ">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="cursor-pointer" onClick={() => setActiveTab(1)}>
          Product Details
        </p>
        <p className="cursor-pointer" onClick={() => setActiveTab(2)}>
          Rating & Reviews
        </p>
        <p className="cursor-pointer" onClick={() => setActiveTab(3)}>
          FAQs
        </p>
      </div>
      {activeTab === 1 && <div className="">tab oneeeeeeeeeeeee</div>}
      {activeTab === 2 && <div className="">tab twoooooooooo</div>}
    </>
  );
};

export default ProductDetails;
