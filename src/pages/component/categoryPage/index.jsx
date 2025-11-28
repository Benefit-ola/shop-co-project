import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import Button from "../../../../shared/Button";
// import { RiAlignVertically } from 'react-icons/ri'

const CategoryPage = () => {
  return (
    <>
      <div className="flex gap-4 mx-8 w-full my-8 ">
        <div className="border shadow-md w-[20%] flex flex-col gap-4 rounded-md ">
          <div>
            <div className="flex items-center justify-between gap-10 ">
              <h2>Filters</h2>
              <TbListDetails />
            </div>
          </div>
          <hr />
          <div>
            <div className=" ">
              <ul className="    text-[#5d5b5b] ">
                <div>
                  {" "}
                  <div className="flex items-center justify-between gap-10  space-y-4">
                    {" "}
                    <li>T-shirts </li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Shorts</li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Shirts</li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Hoodie </li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Jeans </li>
                    <IoIosArrowForward />
                  </div>
                </div>
              </ul>
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex justify-between">
              {" "}
              <h2>color</h2>
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
            <div className="flex justify-between">
              <h2>Size</h2>
              <IoIosArrowUp />
            </div>
            <div className="grid grid-cols-2 gap-1">
              
              <Button className="border     text-sm rounded-full bg-[#ebe9e9]  text-black p-2 ">
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
            <div className="flex justify-between">
              {" "}
              <h2>Dress Style</h2>
              <IoIosArrowUp />
            </div>
             <ul className="    text-[#5d5b5b] ">
                <div>
                  {" "}
                  <div className="flex items-center justify-between gap-10  space-y-4">
                    {" "}
                    <li>T-shirts </li>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Shorts</li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Shirts</li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Hoodie </li>
                    <IoIosArrowForward />
                  </div>{" "}
                  <div className="flex items-center justify-between gap-10">
                    {" "}
                    <li>Jeans </li>
                    <IoIosArrowForward />
                  </div>
                </div>
              </ul>
          </div>
        </div>
        <div>shgd</div>
      </div>
    </>
  );
};

export default CategoryPage;
