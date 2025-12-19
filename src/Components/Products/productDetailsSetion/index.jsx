import React, { useState } from "react";
import {
  circle,
  circle2,
  circle3,
  frame,
  frame10,
  frame8,
  frame9,
  mg,
  mg2,
  mg3,
} from "../../../constant";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../../../shared/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import RateReview from "../../../pages/component/Ratin&Review";

const ProductDetails = () => {
  const productImage = [mg, mg2, mg3, mg];
  const [activeimage, setActiveimage] = useState(productImage[0]);
  const [activeTab, setActiveTab] = useState(1);
  const products = [
    {
      id: 1,
      image: frame,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$45.00",
    },
    {
      id: 2,
      image: frame8,
      text: "SKINNY FIT JEANS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$240",
    },
    {
      id: 3,
      image: frame9,
      text: "SLEEVE STRIPED T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$$180",
    },
    {
      id: 4,
      image: frame10,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
    },
  ];

  return (
    <div className="mx-[3rem] ">
      {/* <div className="">
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
      </div> */}

      <div className="flex mt-5 flex-col md:flex-row  gap-4 ">
        <div className="flex gap-4 flex-col-reverse md:flex-row p-[20px] ">
          <div className="flex md:flex-col gap-10 object-contain">
            {productImage.slice(1, 4).map((src, i) => (
              <div
                className="h-[5rem] w-[6rem]
               rounded-md "
                key={i}
              >
                <img
                  src={src}
                  alt=""
                  onClick={() => setActiveimage(src)}
                  className=""
                />
              </div>
            ))}
          </div>
          <div className=" ">
            <img
              src={activeimage}
              alt=""
              className=" h-18  w-[20rem] object-contain"
            />
          </div>
        </div>
        <div className="p-1">
          <h1 className="font-extrabold text-4xl mt-2">
            One Life Graphic T-shirt
          </h1>

          <div className="flex gap-2 items-center">
            <p className="mt-2">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-300 ">4.5/5</p>
          </div>

          <div className="text-lg font-bold flex gap-2 mt-2  ">
            <p>$260</p>
            <p className="text-[#9A9A9A]">$300</p>
          </div>

          <p className="text-sm md:w-[35rem] mt-2 mb-3 text-[#9A9A9A]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div className="mt-3 ">
            <h3 className="text-[#9A9A9A] mt-3 mb-3">Select Colors</h3>
            <div className="flex gap-2 mb-4">
              <img src={circle} alt="" />
              <img src={circle2} alt="" />
              <img src={circle3} alt="" />
            </div>
          </div>
          <hr />
          <div>
            <h3 className="text-[#9A9A9A] mt-4">Choose Size</h3>
            <div className="flex gap-4  mb-7">
              <Button className="border  bg-[#e6e4e4] px-4 p-2 text-md rounded-full text-[#7b7878] mt-3 ">
                Small
              </Button>
              <Button className="border bg-[#e6e4e4]    px-4 p-2 text-md rounded-full text-[#7b7878] mt-3 ">
                Medium
              </Button>
              <Button className="border  bg-[#e6e4e4]  px-4 p-2 text-md rounded-full  text-[#7b7878] mt-3 ">
                Large
              </Button>
              <Button className="border bg-[#e6e4e4]   px-4 p-2 text-md rounded-full  text-[#7b7878] mt-3  ">
                X-Large
              </Button>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 mt-4">
            <Button className="border flex gap-7 items-center  px-12 p-2 text-md rounded-full hover:bg-gray-300 text-black mt-3 ">
              <FaMinus />
              1
              <FaPlus />
            </Button>
            <Button className="border w-full  px-12 p-2 text-md rounded-full bg-[black] text-white mt-3 ">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10">
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
      <hr />
      {activeTab === 1 && <div className="">tab oneeeeeeeeeeeee</div>}
      {activeTab === 2 && (
        <div className="">
          <RateReview />
        </div>
      )}
      <div>
        <h2 className="text-center font-bold text-4xl mt-5">
          YOU MIGHT ALSO LIKE{" "}
        </h2>
        <div className="grid grid-cols-4 gap-4 mt-10  text-center mb-10 ">
          {products.map((data, i) => (
            <div key={i} className=" ">
              <img
                src={data.image}
                alt={data.text}
                className="mb-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              />
              <h3 className="font-semibold mb-2">{data.text}</h3>
              <p className="mb-2">{data.stars}</p>
              <h4 className="font-bold">{data.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
