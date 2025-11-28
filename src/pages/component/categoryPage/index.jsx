import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import Button from "../../../../shared/Button";
import { frame10, frame2, frame3, frame4, frame5, frame6,  frame8, frame9 } from "../../../constant";
// import { RiAlignVertically } from 'react-icons/ri'

const CategoryPage = () => {
  const products = [
 
    {
      id: 1,
      image: frame8,
      text: "SKINNY FIT JEANS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$240",
    },
    {
      id: 2,
      image: frame9,
      text: "SLEEVE STRIPED T-SHIRT",
      stars: "⭐⭐⭐⭐⭐",
      price: "$$180",
    },
    {
      id: 3,
      image: frame10,
      text: "T-SHIRT WITH TAPE DETAILS",
      stars: "⭐⭐⭐⭐⭐",
      price: "$130",
    },
       {
          id: 4,
          image: frame2,
          text: "SKINNY FIT JEANS",
          stars: "⭐⭐⭐⭐⭐",
          price: "$240",
        },
        {
          id: 5,
          image: frame3,
          text: "SLEEVE STRIPED T-SHIRT",
          stars: "⭐⭐⭐⭐⭐",
          price: "$$180",
        },
        {
          id: 6,
          image: frame4,
          text: "T-SHIRT WITH TAPE DETAILS",
          stars: "⭐⭐⭐⭐⭐",
          price: "$130",
        },
         {
              id: 7,
              image: frame5,
              text: "VERTICAL STRIPED SHIRT",
              stars: "⭐⭐⭐⭐⭐",
              price: "$212",
            },
            {
              id: 8,
              image: frame6,
              text: "COURAGE GRAPHIC T-SHIRT",
              stars: "⭐⭐⭐⭐⭐",
              price: "$145",
            },
                {
                    id: 3,
                    image: frame3,
                    text: "SLEEVE STRIPED T-SHIRT",
                    stars: "⭐⭐⭐⭐⭐",
                    price: "$$180",
                  },
          
  ];

  return (
    <>
      <div className="flex gap-4 mx-8 w-full my-8 ">
        <div className="border shadow-md p-[30px] flex flex-col gap-4 rounded-xl w-[300px] h-fit">
          <div>
            <div className="flex items-center justify-between gap-10  ">
              <h2>Filters</h2>
              <TbListDetails />
            </div>
          </div>
          <hr />
          <div>
            <div className=" ">
              <ul className="    text-[#5d5b5b]  ">
                <div>
                  <div className="flex items-center justify-between gap-10  space-y-6">
                    <li>T-shirts </li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10 space-y-6">
                    <li>Shorts</li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10 space-y-6">
                    <li>Shirts</li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10 space-y-6">
                    <li>Hoodie </li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10 space-y-6">
                    <li>Jeans </li>
                    <IoIosArrowForward />
                  </div>
                </div>
              </ul>
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex justify-between  items-center mb-5">
              <h2 className="font-bold text-lg">Colors</h2>
              <IoIosArrowUp />
            </div>

            <div className="grid grid-cols-5 text-4xl gap-1 cursor-pointer">
              <IoEllipse className="  text-[#00C12B]" />
              <IoEllipse className="  text-[#F50606]" />
              <IoEllipse className="  text-[#F5DD06]" />
              <IoEllipse className="  text-[#F57906]" />
              <IoEllipse className="  text-[#06CAF5]" />
              <IoEllipse className="  text-[#063AF5]" />
              <IoEllipse className=" text-[#7D06F5]" />
              <IoEllipse className=" text-[#F506A4]" />

              <IoEllipseOutline className="    text-[#797676]" />

              <IoEllipse className=" text-[#000000]" />
            </div>
          </div>
          <hr />
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-lg">Size</h2>
              <IoIosArrowUp />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <Button className="border     text-sm rounded-full bg-[#ebe9e9]  text-black p-2 space-y-6 ">
                XX-Small
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9]  text-black  ">
                X-Small
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9] text-black  ">
                Small
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9]  text-black  ">
                Medium
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9]  text-black ">
                Large
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9]  text-black  ">
                X-Large
              </Button>
              <Button className="border    text-sm rounded-full bg-[#ebe9e9]  text-black  ">
                XX-Large
              </Button>
              <Button className="border     text-sm rounded-full bg-[#ebe9e9] text-black ">
                3X-Large
              </Button>
              <Button className="border     text-sm rounded-full bg-[#ebe9e9]  text-black  ">
                4X-Large
              </Button>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex justify-between items-center mb-5 mt-5">
              <h2 className="font-bold text-lg">Dress Style</h2>
              <IoIosArrowUp />
            </div>
            <ul className="    text-[#5d5b5b] ">
              <div>
                <div className="flex items-center justify-between gap-10  space-y-4">
                  <li>Casual </li>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between gap-10 space-y-6">
                  <li>Formal</li>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between gap-10 space-y-6">
                  <li>Party</li>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between gap-10   space-y-6">
                  <li>Gym </li>
                  <IoIosArrowForward />
                </div>
              </div>
            </ul>
          </div>
          <Button className="border bg-[black] text-white    p-2 text-md rounded-full hover:bg-gray-300  ">
            Apply Filter
          </Button>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl">Casual</h1>
            {/* <div> 
    <p>Showing 1-10 of 100 Products</p>
 
   
  
  </div> */}
            {/* <div> 
    <p>Sort by:</p>
    <p className="cursor-pointer flex items-center text-center gap-1  px-3 py-2 w-[7rem]">
                 Most Popular<IoIosArrowDown className="text-2xl" />
              </p>
 </div> */}
          </div>

           <div className="grid grid-cols-3 gap-4 mt-2  text-center   h-fit w-[90%] ">
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
    </>
  );
};

export default CategoryPage;
