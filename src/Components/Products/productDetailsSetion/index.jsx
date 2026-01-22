import React, { useState } from "react";
import {
  frame,
  frame1,
  frame10,
  frame2,
  // frame3,
  frame4,
  // frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  // mg,
  // mg2,
  // mg3,
} from "../../../constant";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../../../shared/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import RateReview from "../../../pages/component/Ratin&Review";
import { useParams } from "react-router-dom";
import { IoEllipse } from "react-icons/io5";

const ProductDetails = () => {
  // const productImage = [mg, mg2, mg3, mg];
  // const [activeimage, setActiveimage] = useState(productImage[0]);
  // const [activeTab, setActiveTab] = useState(1);

  // const products = [
  //   {
  //     id: 1,
  //     image: frame,
  //     text: "T-SHIRT WITH TAPE DETAILS",
  //     stars: "⭐⭐⭐⭐⭐",
  //     price: "$45.00",
  //   },
  //   {
  //     id: 2,
  //     image: frame8,
  //     text: "SKINNY FIT JEANS",
  //     stars: "⭐⭐⭐⭐⭐",
  //     price: "$240",
  //   },
  //   {
  //     id: 3,
  //     image: frame9,
  //     text: "SLEEVE STRIPED T-SHIRT",
  //     stars: "⭐⭐⭐⭐⭐",
  //     price: "$$180",
  //   },
  //   {
  //     id: 4,
  //     image: frame10,
  //     text: "T-SHIRT WITH TAPE DETAILS",
  //     stars: "⭐⭐⭐⭐⭐",
  //     price: "$130",
  //   },
  // ];

  const productInfo = [
    {
      id: 1,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$45.00",
      oldPrice: "$60.00",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame1, frame1, frame1],
      colors: ["#4F4631", "#314F4A", "#31344F"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
      id: 2,
      text: "SKINNY FIT JEANS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$240",
      oldPrice: "$300",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame2, frame2, frame2],
      colors: ["#000000", "#555555"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      id: 3,
      text: "SLEEVE STRIPED T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$180",
      oldPrice: "$220",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame9, frame9, frame9],
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      sizes: ["Small", "Medium", "Large"],
    },
    {
      id: 4,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
      oldPrice: "$160",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame4, frame4, frame4],
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
    },

    {
      id: 5,

      text: "VERTICAL STRIPED SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
      oldPrice: "$160",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame8, frame8, frame8],
      colors: ["#ffffff", "#000000"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
      id: 6,

      text: "COURAGE GRAPHIC T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
      oldPrice: "$160",

      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame6, frame6, frame6],
      colors: ["#ffffff", "#000000"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
    },
    {
      id: 7,

      text: "LOOSE FIT BERMUDA SHORTS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
      oldPrice: "$160",
      information:
        "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      images: [frame7, frame6, frame6],
      colors: ["#ffffff", "#000000"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
    },
  ];

  const recommendedProducts = [
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
      price: "$180",
    },
    {
      id: 4,
      image: frame10,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
    },
  ];
  const { id } = useParams();

  const product = productInfo.find((items) => {
    return items.id === Number(id);
  });

  


 const [activeImage, setActiveImage] = useState(product.images[0]);
const [activeTab, setActiveTab] = useState(1);
const [quantity, setQuantity] = useState(1);
const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <h2> Product Not Found</h2>; // avoids crashing
  }
  const addToCart = () => {
  const cartItem = {
    id: product.id,
    name: product.text,
    price: product.price,
    image: activeImage,
    size: selectedSize,
    color: selectedColor,
    quantity,
     
  };
   console.log("Added to cart:", cartItem);
    alert("Product added to cart ✅");
}

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

      <div className="flex mt-5 flex-col md:flex-row  gap-2 ">
        <div className="flex gap-2 flex-col-reverse md:flex-row p-[20px] ">
          <div className="flex md:flex-col gap-10 object-contain">
            {product.images.map((src, i) => (
              <div
                className="h-[5rem] w-[6rem]
               rounded-md "
                key={i}
              >
                <img
                  src={src}
                  alt=""
                  onClick={() => setActiveImage(src)}
                  className=""
                />
              </div>
            ))}
          </div>
          <div className=" ">
            <img
              src={activeImage}
              alt=""
              className=" h-18  w-[20rem] object-contain"
            />
          </div>
        </div>
        <div className="p-1">
          <h1 className="font-extrabold text-4xl mt-2">{product.text}</h1>

          <div className="flex gap-2 items-center">
            <p className="mt-2">{product.stars}</p>
            <p className="text-gray-300 ">4.5/5</p>
          </div>

          <div className="text-lg font-bold flex gap-2 mt-2  ">
            <p>{product.price}</p>
            <p className="text-[#9A9A9A]">{product.oldPrice}</p>
          </div>

          <p className="text-sm md:w-[35rem] mt-2 mb-3 text-[#9A9A9A]">
            {product.information}
          </p>
          <hr />
          <div className="mt-3 ">
            <h3 className="text-[#9A9A9A] mt-3 mb-3">Select Colors</h3>
            <div className="flex gap-2 mb-4 text-4xl">
              {/* <IoEllipse className="  text-[#4F4631]" />
                <IoEllipse className="  text-[#314F4A]" />
                <IoEllipse className="  text-[#31344F]" /> */}
              {product.colors.map((color, i) => (
                <IoEllipse
                  key={i}
                  className="cursor-pointer"
                  style={{
                    color,
                    border:
                      selectedColor === color ? "2px solid black" : "none",
                    borderRadius: "50%",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h3 className="text-[#9A9A9A] mt-4">Choose Size</h3>
            <div className="flex gap-4  mb-7">
              {product.sizes.map((size, i) => (
                <Button
                  key={i}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 p-2 text-md rounded-full mt-3 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-[#e6e4e4] text-[#7b7878]"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex gap-3 mt-4">
            <Button className="border flex gap-7 items-center px-12 p-2 rounded-full">
              <FaMinus onClick={() => setQuantity((q) => Math.max(1, q - 1))} />
              {quantity}
              <FaPlus onClick={() => setQuantity((q) => q + 1)} />
            </Button>

            <Button
              onClick={addToCart}
              className="border w-full  px-12 p-2 text-md rounded-full bg-[black] text-white mt-3 "
            >
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
          {recommendedProducts.map((data, i) => (
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
