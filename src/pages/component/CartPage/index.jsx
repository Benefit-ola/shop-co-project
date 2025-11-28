import React from "react";
import { frame2, frame3, frame8 } from "../../../constant";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../../../../shared/Button";

const CartPage = () => {
  return (
    <>
      <div className="p-10">
        <h2 className="font-bold text-2xl">YOUR CART</h2>
        <div className="flex items-center gap-3">
          <div className="border rounded-lg">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex  gap-2 justify-between">
                <div className="flex gap-2">
                  <img src={frame8} alt="" className="w-[30%]" />
                  <div>   <h2 className="font-bold text-lg">
                      Gradient Graphic T-shirt
                    </h2>
                       <div className="flex gap-1">
                      <p>size:</p>
                      <p>large</p>
                    </div>
                      <div className="flex gap-1">
                      {" "}
                      <p>color:</p>
                      <p>white</p>
                    </div>
                    
                  <div className=""><h3 className="font-bold text-lg mt-2">$45.00</h3>
                   <div className="flex gap-3 mt-4">
          
            
          </div>
                  </div>
                 
                  
                 
                  
                    
                  </div>
                </div>

                <RiDeleteBin6Line className="text-2xl text-red-600" />
                  <Button className="border   px-12 p-2 text-md rounded-full hover:bg-gray-300 text-black mt-3 ">
              <FaMinus />
              1
              <FaPlus />
            </Button>
              </div>
              <div>
                {" "}
                <img src={frame3} alt="" />
              </div>
              <div>
                {" "}
                <img src={frame2} alt="" />
              </div>
            </div>
            <div></div>
          </div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
