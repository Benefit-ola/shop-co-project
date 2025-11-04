// import React from "react";
// import { logo } from "../../../constant";
// import { FiShoppingCart } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { LuSearch } from "react-icons/lu";


// // import { logo } from '../../../constant'
// const Nav = () => {
//   return (
//     <>
//       <div>
//         <h3
//           style={{
//             textAlign: "center",
//             padding: "8px",
//             backgroundColor: "black",
//             color: "white",
//             fontSize: "15px",
//           }}
//         >
//           Sign up and get 20% off to your first order. Sign Up Now
//         </h3>
//       </div>
//       <div className="flex items-center gap-9 p-[10px]  ">
//         <div className="ml-[20px] w-[120px] h-[20px] ">
//           <img src={logo} alt="" />
//         </div>
//         <div>
//           <ul className="flex gap-4">
//             <li>Shop</li>
//             <li>On Sale</li>
//             <li>New Arrivals</li>
//             <li>Brands</li>
//           </ul>
//         </div>
//         <div className="flex gap-2 justify-center align-center">
          


//           <input
//             type="search"
//             placeholder="Search for products..."
//             className="rounded-3xl border bg-[#F0F0F0] p-1 text-[20px] ml-2 w-[30rem] relative pl-8m   "
//           />
//           <LuSearch className="text-[gray]  absolute left-[1rem]" />
//         </div>
      
//         <div className="flex gap-[20px] ml-auto text-[25px] justify-center align-center mr-[20px] relative ">
//           <FiShoppingCart className="cursor-pointer relative  " />
//           <p className=" absolute bg-red-600 text-white text-[15px] right-2  ">0</p>
//           <FaRegCircleUser  />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

import React from "react";
import { logo } from "../../../constant";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const Nav = () => {
  return (
    <>
      {/* Top Promo Bar */}
      <div className="text-center p-2 bg-black text-white text-sm">
        Sign up and get 20% off your first order. <span className="underline cursor-pointer">Sign Up Now</span>
      </div>

      
      <div className="flex items-center gap-10 p-4 border-b border-gray-200">
        
        <div className="ml-5 w-[120px]">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

    
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className=" cursor-pointer">Shop</li>
          <li className=" cursor-pointer">On Sale</li>
          <li className=" cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>

        
        <div className="relative flex-1 max-w-[30rem] mx-auto">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="search"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-3xl bg-[#F0F0F0] text-base outline-none"
          />
        </div>

        
        <div className="flex items-center gap-6 text-2xl text-gray-700 mr-6 relative">
          
          <div className="relative cursor-pointer">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          
          <FaRegCircleUser className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Nav;

