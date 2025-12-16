import React from "react";
import { frame2, frame3, frame8 } from "../../../constant";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../../../../shared/Button";

const CartPage = () => {
  const product = {
    jeans: { size: "Large", color: "Blue" },
    shirt: { size: "Medium", color: "Red" },
    tshirt: { size: "Large", color: "White" },
  };
  return (
    <>
      <div className="p-10 ">
        <h2 className="font-bold text-2xl">YOUR CART</h2>
        <div className="flex gap-3 ">
          <div className="border rounded-xl">
            <div className="flex flex-col gap-4 p-3">
              <div>
                <div className="flex justify-between items-start gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex gap-4 ">
                    <img
                      src={frame8}
                      alt=""
                      className="w-[25%]
                         object-cover"
                    />

                    <div className=" ">
                      <h2 className="font-bold text-lg">
                        Gradient Graphic T-shirt
                      </h2>
                      <p >Size: <span className="text-gray-400">{product.tshirt.size}</span></p>
                  
                      <p>Color: <span className="text-gray-400">{product.tshirt.color}</span> </p>

                      <h3 className="font-bold text-lg mt-2">$45.00</h3>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-center justify-between gap-[4rem] mb-5">
                    <RiDeleteBin6Line className="text-2xl text-red-600 cursor-pointer" />

                    <Button className="border p-3 px-5 text-md rounded-full hover:bg-gray-300 text-black flex items-center gap-5">
                      <FaMinus />
                      1
                      <FaPlus />
                    </Button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between items-start gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex gap-4 ">
                    <img
                      src={frame3}
                      alt=""
                      className="w-[25%]
                         object-cover"
                    />

                    <div className=" ">
                      <h2 className="font-bold text-lg">CHECKERED SHIRT</h2>
                      <p >Size: <span className="text-gray-400">{product.shirt.size}</span></p>
                  
                      <p>Color: <span className="text-gray-400">{product.shirt.color}</span> </p>


                      <h3 className="font-bold text-lg mt-2">$180</h3>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-center justify-between gap-[4rem]  mb-5">
                    <RiDeleteBin6Line className="text-2xl text-red-600 cursor-pointer" />

                    <Button className="border p-3 px-5 text-md rounded-full hover:bg-gray-300 text-black flex items-center gap-5">
                      <FaMinus />
                      1
                      <FaPlus />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex justify-between items-start gap-4 mt-5">
                  {/* LEFT SIDE */}
                  <div className="flex gap-4 ">
                    <img
                      src={frame2}
                      alt=""
                      className="w-[25%]
                         object-cover"
                    />

                    <div className=" ">
                      <h2 className="font-bold text-lg">SKINNY FIT JEANS</h2>

                       <p >Size: <span className="text-gray-400">{product.jeans.size}</span></p>
                  
                      <p>Color: <span className="text-gray-400">{product.jeans.color}</span> </p>

                      <h3 className="font-bold text-lg mt-2">$240</h3>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-center justify-between gap-[4rem] ">
                    <RiDeleteBin6Line className="text-2xl text-red-600 cursor-pointer" />

                    <Button className="border p-3 px-5 text-md rounded-full hover:bg-gray-300 text-black flex items-center gap-5">
                      <FaMinus />
                      1
                      <FaPlus />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-5 h-[20rem] w-[25rem]">
            <h2 className="font-bold">Order Summary</h2>
            <div className="gap-4">
              <ul className=" mt-5 flex flex-col gap-4  ">
                <div className="flex justify-between">
                  <li className="text-gray-500"> Subtotal</li>
                  <p className=" font-bold">$565</p>
                </div>
                <div className="flex justify-between">
                  <li className="text-gray-500"> Discount (-20%)</li>
                  <p className="text-red-500  font-bold">-$113</p>
                </div>
                <div className="flex justify-between">
                  <li className="text-gray-500">Delivery Fee</li>
                  <p className=" font-bold">$15</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <li>Total</li>
                  <p className=" font-bold">$467</p>
                </div>
              </ul>
            </div>

            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
