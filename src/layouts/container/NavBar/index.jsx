import React from "react";
import { logo } from "../../../constant";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";


// import { logo } from '../../../constant'
const Nav = () => {
  return (
    <>
      <div>
        <h3
          style={{
            textAlign: "center",
            padding: "8px",
            backgroundColor: "black",
            color: "white",
            fontSize: "15px",
          }}
        >
          Sign up and get 20% off to your first order. Sign Up Now
        </h3>
      </div>
      <div className="flex items-center gap-9 p-[10px]  ">
        <div className="ml-[20px] w-[120px] h-[20px] ">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="flex gap-2 justify-center align-center">
          <LuSearch className="text-[gray]  absolute left-3" />


          <input
            type="search"
            placeholder="Search for products..."
            className="rounded-3xl border bg-[#F0F0F0] p-1 text-[20px] ml-2 w-[30rem] relative pl-8m   "
          />
        </div>
      
        <div className="flex gap-[20px] ml-auto text-[25px] justify-center align-center mr-[20px] relative ">
          <FiShoppingCart className="cursor-pointer relative  " />
          <p className=" absolute bg-red-600 text-white text-[15px] right-2  ">0</p>
          <FaRegCircleUser  />
        </div>
      </div>
    </>
  );
};

export default Nav;
