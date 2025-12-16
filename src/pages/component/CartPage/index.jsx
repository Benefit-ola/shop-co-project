import React from "react";
import { frame2, frame3, frame8 } from "../../../constant";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../../../../shared/Button";
import { TiMail } from "react-icons/ti";

const CartPage = () => {
  const product = {
    jeans: { size: "Large", color: "Blue" },
    shirt: { size: "Medium", color: "Red" },
    tshirt: { size: "Large", color: "White" },
  };
  return (
    <>
      <div className="p-10 flex flex-col ">
        <h2 className="font-extrabold text-2xl">YOUR CART</h2>
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
                      <p>
                        Size:{" "}
                        <span className="text-gray-400">
                          {product.tshirt.size}
                        </span>
                      </p>

                      <p>
                        Color:{" "}
                        <span className="text-gray-400">
                          {product.tshirt.color}
                        </span>{" "}
                      </p>

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
                      <p>
                        Size:{" "}
                        <span className="text-gray-400">
                          {product.shirt.size}
                        </span>
                      </p>

                      <p>
                        Color:{" "}
                        <span className="text-gray-400">
                          {product.shirt.color}
                        </span>{" "}
                      </p>

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

                      <p>
                        Size:{" "}
                        <span className="text-gray-400">
                          {product.jeans.size}
                        </span>
                      </p>

                      <p>
                        Color:{" "}
                        <span className="text-gray-400">
                          {product.jeans.color}
                        </span>{" "}
                      </p>

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

          <div className="border rounded-xl p-5 h-fit   ">
            <h2 className="font-bold w-[27rem]">Order Summary</h2>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">$565</span>
              </li>

              <li className="flex justify-between">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="text-red-500 font-bold">-$113</span>
              </li>

              <li className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-bold">$15</span>
              </li>

              <li>
                <hr />
              </li>

              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span>$467</span>
              </li>
            </ul>

            <div className="flex gap-5 items-center mt-4">
              <div className="relative">
                <TiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
                <input
                  type="email"
                  placeholder="Add promo code"
                  className="pl-10 pr-4 py-2 rounded-3xl bg-[#F0F0F0] outline-none text-sm"
                />
              </div>

              <Button className="py-2 px-5  rounded-3xl bg-black text-white text-sm hover:bg-gray-800 transition">
                Apply
              </Button>
            </div>

            <Button className="mt-5 py-4 w-full px-4  flex items-center gap-4 justify-center rounded-3xl bg-black text-white text-sm hover:bg-gray-800 transition">
              Go to Checkout <span><FaArrowRight />
</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
